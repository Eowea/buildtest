// Écrit videos.json : les dernières vidéos de la chaîne YouTube et les premières
// de la playlist des analyses de patch, lues sur les flux RSS officiels de YouTube.
//
// Lancé toutes les heures par .github/workflows/videos.yml. Le site, la page des
// cartes et l'overlay de stream lisent ce fichier au lieu d'interroger YouTube :
// un navigateur n'a pas le droit de lire ces flux directement (pas d'en-tête CORS).
//
// Le flux « UULF… » de la chaîne ne contient que les vidéos : ni lives, ni Shorts.
// Les identifiants et le nombre de vidéos à garder viennent de STREAMER_CONFIG
// dans data.js (youtubeChannelId, patchPlaylistId, et la longueur des listes de
// secours latestVideos / patchVideos).
//
// Si YouTube ne répond pas, la section concernée garde son contenu précédent.

import fs from 'node:fs';
import vm from 'node:vm';

const FICHIER = 'videos.json';
const config = vm.runInNewContext(fs.readFileSync('data.js', 'utf8') + '\n;STREAMER_CONFIG');

const decoder = s => s
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&amp;/g, '&');

async function lireFlux(parametre) {
  const url = 'https://www.youtube.com/feeds/videos.xml?' + parametre;
  for (let essai = 1; essai <= 3; essai++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (res.ok) {
        const xml = await res.text();
        return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(m => ({
          id: (m[1].match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1],
          titre: decoder((m[1].match(/<title>([^<]*)<\/title>/) || [])[1] || '').trim()
        })).filter(v => v.id);
      }
      console.log(`${url} : HTTP ${res.status} (essai ${essai})`);
    } catch (e) {
      console.log(`${url} : ${e.message} (essai ${essai})`);
    }
    await new Promise(r => setTimeout(r, 5000));
  }
  return null;
}

// Le flux ne donne que le titre d'origine : il sert pour les deux langues.
const versSite = v => ({ title: { fr: v.titre, en: v.titre }, youtubeId: v.id });
const idDe = v => String(v?.youtubeId || '').trim();

let ancien = {};
try { ancien = JSON.parse(fs.readFileSync(FICHIER, 'utf8')); } catch { /* premier passage */ }

const nouveau = { derniere: ancien.derniere || [], patch: ancien.patch || [], recentes: ancien.recentes || [] };
const nbDerniere = (config.latestVideos || []).length || 4;
const nbPatch = (config.patchVideos || []).length || 1;

const playlist = config.patchPlaylistId ? await lireFlux('playlist_id=' + encodeURIComponent(config.patchPlaylistId)) : null;
if (playlist && playlist.length) nouveau.patch = playlist.slice(0, nbPatch).map(versSite);

const chaine = config.youtubeChannelId && config.youtubeChannelId.startsWith('UC')
  ? await lireFlux('playlist_id=UULF' + config.youtubeChannelId.slice(2))
  : null;
if (chaine && chaine.length) {
  // « Dernières vidéos » ne reprend aucune vidéo de la playlist des patchs, pas
  // seulement celle affichée : sinon l'analyse de la semaine passée y reviendrait.
  const exclus = new Set([
    ...(playlist || []).map(v => v.id),
    ...nouveau.patch.map(idDe),
    ...(config.patchVideos || []).map(idDe)
  ]);
  nouveau.derniere = chaine.filter(v => !exclus.has(v.id)).slice(0, nbDerniere).map(versSite);
  // Pour l'overlay « YouTube promo » : la toute dernière vidéo, analyses comprises.
  nouveau.recentes = chaine.slice(0, nbDerniere).map(versSite);
}

const contenu = JSON.stringify(nouveau, null, 2) + '\n';
if (contenu === JSON.stringify({ derniere: ancien.derniere, patch: ancien.patch, recentes: ancien.recentes }, null, 2) + '\n') {
  console.log('Aucune nouvelle vidéo.');
} else {
  fs.writeFileSync(FICHIER, contenu);
  console.log('videos.json mis à jour :', nouveau.derniere.map(v => v.title.fr).join(' | '));
}
