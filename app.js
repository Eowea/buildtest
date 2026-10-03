    // --- TRI AUTOMATIQUE DES BUILDS ---
    HEROES.forEach(hero => {
      if (hero.builds && hero.builds.length > 0) {
        hero.builds = hero.builds.filter(b => b.enabled !== false);
        hero.builds.sort((a, b) => (a.order !== undefined ? a.order : 999) - (b.order !== undefined ? b.order : 999));
      }
    });

    /* =========================================================================
       DICTIONNAIRE MULTILINGUE (Interface)
       ========================================================================= */
    const DICT = {
      searchPlaceholder: { fr: "Rechercher un héros...", en: "Search for a hero..." },
      resultsCount: { fr: "{n} résultats", en: "{n} results" },
      resultsCountSingular: { fr: "{n} résultat", en: "{n} result" },
      emptyHeroList: { fr: "Aucun héros trouvé.", en: "No heroes found." },
      role_all: { fr: "Tous", en: "All" },
      role_Tank: { fr: "Tank", en: "Tank" },
      role_Bruiser: { fr: "Bruiser", en: "Bruiser" },
      role_Healer: { fr: "Soigneur", en: "Healer" },
      role_Support: { fr: "Soutien", en: "Support" },
      role_AssassinMelee: { fr: "Assassin Mêlée", en: "Melee Assassin" },
      role_AssassinDistance: { fr: "Assassin Distance", en: "Ranged Assassin" },
      heroesTitle: { fr: "Héros", en: "Heroes" },
      heroesNote: { fr: "Choisis un héros dans la liste, ou utilise la recherche et les filtres ci-dessus.", en: "Choose a hero from the list, or use the search and filters above." },
      level: { fr: "Niv.", en: "Lvl" },
      mainVideo: { fr: "Vidéo principale", en: "Main video" },
      seeGuide: { fr: "Voir le guide &rarr;", en: "Watch guide &rarr;" },
      videoUnavailable: { fr: "Vidéo non disponible", en: "Video unavailable" },
      prevVideo: { fr: "Vidéo précédente", en: "Previous video" },
      nextVideo: { fr: "Vidéo suivante", en: "Next video" },
      lastUpdate: { fr: "Dernière mise à jour :", en: "Last updated:" },
      defaultBuildCodeTitle: { fr: "À COLLER DANS L'ARBRE DES TALENTS", en: "PASTE INTO TALENT TREE" },
      emptyTalents: { fr: "Aucun talent dans ce build.", en: "No talents in this build." },
      buildSoon: { fr: "Build à venir", en: "Build coming soon" },
      buildSoonText: { fr: "Le build arrive une fois le héros jouable. En attendant, voici tous ses talents, palier par palier.", en: "The build lands once the Hero is playable. In the meantime, here are all of its Talents, tier by tier." },
      showAllTalents: { fr: "Voir tous les talents", en: "Show all Talents" },
      hideAllTalents: { fr: "Masquer les talents", en: "Hide Talents" },
      gameplay: { fr: "Gameplay", en: "Gameplay" },
      tips: { fr: "Conseils", en: "Tips" },
      descUnavailable: { fr: "Description indisponible.", en: "Description unavailable." },
      loading: { fr: "Chargement...", en: "Loading..." },
      invalidId: { fr: "ID YouTube invalide", en: "Invalid YouTube ID" },
      loadError: { fr: "Impossible de charger la vidéo", en: "Cannot load the video" },
      latestVideoTitle: { fr: "Dernières vidéos", en: "Latest Videos" },
      patchAnalysisTitle: { fr: "Analyses Patch", en: "Patch Analyses" },
      noVideosYet: { fr: "Aucune vidéo pour le moment.", en: "No videos yet." },
      copySuccess: { fr: "Build copié !", en: "Build copied!" },
      copyError: { fr: "Copie impossible", en: "Copy failed" },
      copyHint: { fr: "Clique pour copier", en: "Click to copy" },
      optionalTalents: { fr: "Options", en: "Options" },
      newBadge: { fr: "Nouveau", en: "New" },
      siteUpdateLabel: { fr: "Mise à jour", en: "Update" },
      updatedBadge: { fr: "Mis à jour", en: "Updated" },
      heroRotationTitle: { fr: "Rotation gratuite", en: "Free Rotation" },
      heroRotationError: { fr: "Rotation indisponible pour le moment.", en: "Rotation unavailable right now." },
      knownIssues: { fr: "Bugs connus", en: "Known issues" },
      changelogTitle: { fr: "Ce qui a changé", en: "What's new" },
      changelogOpen: { fr: "Voir les changements", en: "See what changed" },
      changelogEmpty: { fr: "Rien de noté pour cette mise à jour.", en: "Nothing noted for this update." },
      footerNote: { fr: "Une erreur dans un build, un talent ou une description ?", en: "Spotted a mistake in a build, a talent or a description?" },
      footerContact: { fr: "Contact", en: "Contact" },
      makeBuild: { fr: "Partager mon build", en: "Share my build" },
      myBuild: { fr: "Mon build", en: "My build" },
      myBuildHint: { fr: "Choisis un talent par palier. Le code se fabrique tout seul en dessous.", en: "Pick one Talent per tier. The code builds itself below." },
      myBuildLeft: { fr: "Encore {n} palier à choisir.", en: "{n} tier left to pick." },
      myBuildLeftPlural: { fr: "Encore {n} paliers à choisir.", en: "{n} tiers left to pick." },
      myBuildReset: { fr: "Tout effacer", en: "Clear all" },
      myBuildQuit: { fr: "Revenir aux builds", en: "Back to the builds" },
      myBuildCodeTitle: { fr: "CLIQUER POUR COPIER TON BUILD", en: "CLICK TO COPY YOUR BUILD" },
      optAdd: { fr: "Marquer comme optionnel", en: "Mark as optional" },
      optRemove: { fr: "Retirer des optionnels", en: "Remove from optionals" },
      optLegend: { fr: "Le + d'une carte la met en optionnel, 3 au maximum par palier. Ils partent dans le lien, pas dans le code du jeu.", en: "The + on a card marks it optional, 3 per tier at most. They travel in the link, not in the game code." },
      shareLink: { fr: "Copier le lien à partager", en: "Copy the link to share" },
      shareCopied: { fr: "Lien copié !", en: "Link copied!" },
      shareError: { fr: "Copie impossible", en: "Copy failed" },
      customBuildBadge: { fr: "Build partagé", en: "Shared build" },
      customBuildIntro: { fr: "Build composé par un visiteur, pas par Eowea.", en: "Build put together by a visitor, not by Eowea." },
      editThisBuild: { fr: "Modifier ce build", en: "Edit this build" },
      seeRecommended: { fr: "Voir les builds recommandés", en: "See the recommended builds" },
      buildAuthor: { fr: "Auteur :", en: "Author:" },
      seeBuildsBy: { fr: "Voir les builds de :", en: "See builds by:" },
      // En français, {n} reçoit « de » ou « d' » selon le pseudo : voir libelleBuildsDe().
      buildsBy: { fr: "Builds {n}", en: "Builds by {n}" },
      clearAuthor: { fr: "Retirer ce filtre", en: "Clear this filter" },
      authorHeroCount: { fr: "{n} héros", en: "{n} heroes" },
      authorHeroCountSingular: { fr: "{n} héros", en: "{n} hero" },
      previewBuild: { fr: "Voir le rendu", en: "Preview" },
      prevIssue: { fr: "Bug précédent", en: "Previous issue" },
      nextIssue: { fr: "Bug suivant", en: "Next issue" },
    };

    /* =========================================================================
       MOTEUR DE L'APPLICATION
       ========================================================================= */

//Détection automatique de la langue
const getInitialLang = () => {
      const saved = localStorage.getItem('eowea_lang');
      if (saved) return saved;
      const browserLang = navigator.language || navigator.userLanguage;
      return (browserLang && browserLang.toLowerCase().startsWith('fr')) ? 'fr' : 'en';
    };

    const state = {
      search: '',
      role: 'all',
      heroId: null,
      buildIndex: 0,
      formId: null,
      // Build fabriqué par le visiteur : { heroId, picks: { palier: idDuTalent } }.
      // Null le reste du temps — c'est ce qui distingue le mode « Partager mon build »
      // de l'affichage normal des builds d'Eowea.
      custom: null,
      // Filtre « Voir les builds de » : le pseudo choisi, ou null. Il restreint la
      // liste des héros à ceux où cet auteur a un build, puis les onglets d'un héros
      // à ses seuls builds.
      auteur: null,
      lang: getInitialLang()
    };

    let activeFloatingTrigger = null, hideTooltipTimer = null, tooltipRaf = 0, layoutRaf = 0, layoutSyncTimers = [];

    const $ = id => document.getElementById(id);
    const els = { siteTitle: $('siteTitle'), headerNav: $('headerNav'), socials: $('socials'), searchInput: $('searchInput'), resultsCount: $('resultsCount'), roleFilters: $('roleFilters'), heroList: $('heroList'), detailView: $('detailView'), tooltipPortal: $('tooltipPortal'), videoOverlay: $('videoOverlay'), closeOverlayBtn: $('closeOverlayBtn'), overlayStatusText: $('overlayStatusText'), expandedYoutube: $('expandedYoutube'), expandedMedia: $('expandedMedia'), langSwitcher: $('langSwitcher'), homeBtn: $('homeBtn'), siteUpdate: $('siteUpdate') };

    /* ── Utilities ── */
    const escapeHtml = (s) => (s ?? '').toString().replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const loc = (val) => (val && typeof val === 'object' && !Array.isArray(val)) ? (val[state.lang] !== undefined ? val[state.lang] : (val['fr'] || '')) : (val || '');

function getHeroStateSignature(hero) {
    const newBuildsCount = (hero.builds || []).filter(b => b.isNew).length;
    // Si isNew est true pour le héros, la signature inclut 'h1', sinon 'h0'
    return `${hero.id}_h${hero.isNew ? 1 : 0}_b${newBuildsCount}`;
}

function hasSeenHeroEntity(heroId) {
    const seen = JSON.parse(localStorage.getItem('seenHeroesList') || '[]');
    return seen.includes(heroId);
}

// Vérifie si la version actuelle des builds a été vue
function hasSeenBuildUpdate(hero) {
    const newBuildsCount = (hero.builds || []).filter(b => b.isNew).length;
    const seenUpdates = JSON.parse(localStorage.getItem('seenBuildUpdates') || '[]');
    return seenUpdates.includes(`${hero.id}_${newBuildsCount}`);
}

// Suivi "build vu", distinct du suivi par héros : le badge d'un build ne doit disparaître
// que lorsque ce build précis a été affiché, pas dès l'ouverture du héros. On se base sur
// le libellé FR (stable quelle que soit la langue affichée) plutôt que sur l'index, qui
// change si les builds sont réordonnés.
function buildSeenKey(heroId, build) {
    return `${heroId}::${(build.label && build.label.fr) || build.order || ''}`;
}
function hasSeenBuild(heroId, build) {
    const seen = JSON.parse(localStorage.getItem('seenBuilds') || '[]');
    return seen.includes(buildSeenKey(heroId, build));
}
function markBuildSeen(heroId, build) {
    const seen = JSON.parse(localStorage.getItem('seenBuilds') || '[]');
    const key = buildSeenKey(heroId, build);
    if (!seen.includes(key)) {
        seen.push(key);
        localStorage.setItem('seenBuilds', JSON.stringify(seen));
    }
}

// Marque tout comme "vu" d'un coup
function markEverythingAsSeen(hero) {
    // 1. Marquer le héros comme vu
    const seenHeroes = JSON.parse(localStorage.getItem('seenHeroesList') || '[]');
    if (!seenHeroes.includes(hero.id)) {
        seenHeroes.push(hero.id);
        localStorage.setItem('seenHeroesList', JSON.stringify(seenHeroes));
    }

    // 2. Marquer cette version des builds comme vue
    const seenUpdates = JSON.parse(localStorage.getItem('seenBuildUpdates') || '[]');
    const newBuildsCount = (hero.builds || []).filter(b => b.isNew).length;
    const sig = `${hero.id}_${newBuildsCount}`;
    if (!seenUpdates.includes(sig)) {
        seenUpdates.push(sig);
        localStorage.setItem('seenBuildUpdates', JSON.stringify(seenUpdates));
    }
}
    // Conversion dynamique FR (AZERTY) <-> EN (QWERTY)
    function uiSpellKey(keyRaw) {
      if (keyRaw && typeof keyRaw === 'object' && keyRaw[state.lang]) {
        return String(keyRaw[state.lang]).trim().toUpperCase();
      }
      let k = typeof keyRaw === 'object' ? (keyRaw.fr || keyRaw.en || '') : String(keyRaw || '');
      k = k.trim().toUpperCase();

      if (state.lang === 'en') {
        if (k === 'A') return 'Q';
        if (k === 'Z') return 'W';
        if (k === 'W') return 'Z';
        if (k === '&') return '1';
      }
      return k;
    }

    const t = (key, params = {}) => {
      let str = (DICT[key] && DICT[key][state.lang]) ? DICT[key][state.lang] : (DICT[key]?.fr || key);
      for (const[k, v] of Object.entries(params)) str = str.replace(`{${k}}`, v);
      return str;
    };

    const locRole = (r) => { const k = 'role_' + String(r).replace(/\s+/g, ''); return DICT[k] ? t(k) : r; };
    function normalize(text) { return String(text||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }
    function initials(text) { return String(text||'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
    function esc(v) { return String(v||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
    function svgBadge(l) { const s=initials(l)||'HT'; return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#183052"/><text x="48" y="57" text-anchor="middle" font-size="28" font-family="serif" font-weight="700" fill="#d4a84b">${s}</text></svg>`)}`; }

    const ICONS = {
      twitch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16v11l-4 4h-4l-2 2H7v-2H4V3zm2 2v9h3v3l3-3h3l3-3V5H6zm4 2h2v5h-2V7zm5 0h2v5h-2V7z"/></svg>',
      x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.6L6.4 22H3.3l7.3-8.3L1 2h6.2l4.3 6L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z"/></svg>',
      youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.4-5c-.2-1-.9-1.8-1.9-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.5c-1 .2-1.7 1-1.9 2C1 8.6 1 12 1 12s0 3.4.4 5c.2 1 .9 1.8 1.9 2 1.8.5 8.7.5 8.7.5s6.9 0 8.7-.5c1-.2 1.7-1 1.9-2 .4-1.6.4-5 .4-5zm-13 3.5v-7l6 3.5-6 3.5z"/></svg>',
      kofi: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 5H5a2 2 0 0 0-2 2v3a7 7 0 0 0 7 7h4a7 7 0 0 0 7-7V9h1a2 2 0 1 0 0-4h-4zm1 4v1a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V7h13a1 1 0 0 1 1 1v1zm2-2h-1V5h1a1 1 0 1 1 0 2z"/></svg>',
      discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.335-.403.78-.553 1.125a18.27 18.27 0 0 0-5.669 0A11.18 11.18 0 0 0 9.109 3a19.736 19.736 0 0 0-4.434 1.369C1.873 8.583 1.113 12.692 1.493 16.743a19.9 19.9 0 0 0 5.43 2.757c.44-.6.833-1.233 1.172-1.897-.646-.245-1.262-.55-1.838-.907.154-.112.304-.229.45-.349 3.545 1.664 7.39 1.664 10.893 0 .148.12.298.237.45.349-.577.358-1.195.664-1.842.909.34.662.733 1.295 1.174 1.895a19.86 19.86 0 0 0 5.432-2.757c.446-4.698-.761-8.77-3.497-12.374ZM8.02 14.323c-1.058 0-1.925-.966-1.925-2.153 0-1.187.847-2.153 1.925-2.153 1.087 0 1.944.976 1.925 2.153 0 1.187-.848 2.153-1.925 2.153Zm7.96 0c-1.058 0-1.925-.966-1.925-2.153 0-1.187.847-2.153 1.925-2.153 1.087 0 1.944.976 1.925 2.153 0 1.187-.838 2.153-1.925 2.153Z"/></svg>'
    };

    function parseYouTubeId(i) { if(!i) return ''; const r=String(i).trim(); if(/^[a-zA-Z0-9_-]{11}$/.test(r)) return r; try { const u=new URL(r); if(u.hostname.includes('youtu.be')) return u.pathname.split('/').filter(Boolean)[0]||''; if(u.searchParams.get('v')) return u.searchParams.get('v')||''; const p=u.pathname.split('/').filter(Boolean); if(['embed','shorts','live'].includes(p[0])) return p[1]||''; } catch{} return ''; }
    function isLocalMediaRef(v){ const s=String(v||'').trim().toLowerCase(); return /\.(mp4|webm|gif|webp)$/.test(s); }
    const ytThumb = id => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
    function ytEmbed(id,a=true) { return `https://www.youtube.com/embed/${encodeURIComponent(id)}?${new URLSearchParams({autoplay:a?'1':'0',rel:'0',modestbranding:'1',playsinline:'1'})}`; }
    function ytPreview(id) { return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${new URLSearchParams({autoplay:'1',mute:'1',controls:'0',rel:'0',modestbranding:'1',playsinline:'1',disablekb:'1',fs:'0',iv_load_policy:'3'})}`; }
    function ytMini(id) { return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${new URLSearchParams({autoplay:'1',mute:'1',controls:'0',rel:'0',modestbranding:'1',playsinline:'1',loop:'1',playlist:id,disablekb:'1',fs:'0',iv_load_policy:'3'})}`; }

    // Force l'ouverture de l'application YouTube sur mobile si elle est installée. Un simple
    // lien https en target="_blank" ne suffit pas partout (ex: Opera GX Mobile n'intercepte
    // pas toujours les liens youtube.com pour proposer l'appli) : on passe donc par les
    // mécanismes natifs de chaque OS, avec repli sur la page web si l'appli n'est pas installée.
    function openYoutubeForceApp(id) {
      const fallbackUrl = `https://www.youtube.com/watch?v=${id}`;
      const ua = navigator.userAgent || '';
      if (/Android/i.test(ua)) {
        // intent:// est un mécanisme Chromium (supporté par Chrome, Opera, Edge...) qui
        // déclenche l'Intent Android pour l'appli YouTube, avec repli intégré (S.browser_fallback_url).
        window.location.href = `intent://www.youtube.com/watch?v=${id}#Intent;package=com.google.android.youtube;scheme=https;S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end;`;
        return;
      }
      if (/iPhone|iPad|iPod/i.test(ua)) {
        // Pas de mécanisme de repli intégré pour un schéma personnalisé côté iOS : on bascule
        // nous-mêmes sur la page web si l'appli ne s'est pas ouverte après un court délai.
        let appOpened = false;
        const onHide = () => { appOpened = true; };
        document.addEventListener('visibilitychange', onHide, { once: true });
        window.location.href = `vnd.youtube://www.youtube.com/watch?v=${id}`;
        setTimeout(() => {
          document.removeEventListener('visibilitychange', onHide);
          if (!appOpened) window.location.href = fallbackUrl;
        }, 1200);
        return;
      }
      window.location.href = fallbackUrl;
    }

    const visibleHeroes = () => HEROES.filter(h=>h.enabled!==false);
    const roles = () =>['all',...new Set(visibleHeroes().map(h=>h.role))];

    /* ── Les auteurs des builds ──
       Chaque build porte le pseudo de celui qui l'a créé dans l'admin (champ author).
       Les builds antérieurs à ce champ n'en ont pas : ils sont d'Eowea. On compare les
       pseudos sans tenir compte de la casse, pour qu'« eowea » et « Eowea » ne fassent
       pas deux auteurs. Les builds désactivés sont déjà écartés au chargement. */
    const AUTEUR_PAR_DEFAUT = 'Eowea';
    const auteurDuBuild = b => String((b && b.author) || '').trim() || AUTEUR_PAR_DEFAUT;
    const memeAuteur = (a, b) => String(a || '').toLowerCase() === String(b || '').toLowerCase();
    const heroAUnBuildDe = (h, nom) => (h.builds || []).some(b => memeAuteur(auteurDuBuild(b), nom));
    // Les auteurs présents sur le site — Eowea d'abord, puis par ordre alphabétique —
    // avec le nombre de héros où chacun a au moins un build.
    function listeAuteurs() {
      const vus = new Map();
      visibleHeroes().forEach(h => (h.builds || []).forEach(b => {
        const nom = auteurDuBuild(b), cle = nom.toLowerCase();
        if (!vus.has(cle)) vus.set(cle, { nom, heros: new Set() });
        vus.get(cle).heros.add(h.id);
      }));
      return [...vus.values()]
        .map(a => ({ nom: a.nom, nbHeros: a.heros.size }))
        .sort((a, b) => memeAuteur(a.nom, AUTEUR_PAR_DEFAUT) ? -1
          : memeAuteur(b.nom, AUTEUR_PAR_DEFAUT) ? 1
          : a.nom.localeCompare(b.nom, state.lang, { sensitivity: 'base' }));
    }
    // normalize() remplace la ponctuation par des espaces : "E.T.C." devient "e t c",
    // que "etc" ne retrouve pas. On compare donc aussi une forme compacte, sans aucun
    // séparateur, qui rattrape "etc", "dva", "anubarak", "sgtmarteau", "ltmorales".
    const compact = text => normalize(text).replace(/ /g, '');
    function heroMatchesSearch(h, q, qc) {
      if (!q) return true;
      return normalize(h.name?.fr).includes(q) || normalize(h.name?.en).includes(q)
          || compact(h.name?.fr).includes(qc) || compact(h.name?.en).includes(qc);
    }
    function filteredHeroes() { const q=normalize(state.search), qc=compact(state.search); return visibleHeroes().filter(h=>(state.role==='all'||h.role===state.role)&&(!state.auteur||heroAUnBuildDe(h,state.auteur))&&heroMatchesSearch(h,q,qc)).sort((a,b)=>loc(a.name).localeCompare(loc(b.name),state.lang,{sensitivity:'base'})); }
    // Les builds affichés pour un héros : tous, ou seulement ceux de l'auteur filtré.
    // Ce sont des indices dans hero.builds, pour que le reste du code n'ait rien à changer.
    function indicesBuildsVisibles(h) {
      const tous = (h?.builds || []).map((_, i) => i);
      if (!state.auteur) return tous;
      const siens = tous.filter(i => memeAuteur(auteurDuBuild(h.builds[i]), state.auteur));
      // Héros sans build de cet auteur : on ne laisse pas la section vide.
      return siens.length ? siens : tous;
    }
    const currentHero = () => HEROES.find(h=>h.id===state.heroId&&h.enabled!==false)||null;
    function clampBuildIndex(h) { if(!h?.builds?.length){state.buildIndex=0;return 0;} state.buildIndex=Math.min(h.builds.length-1,Math.max(0,Number(state.buildIndex)||0)); return state.buildIndex; }
    function firstBuildIndex(h) {
      if (!h?.builds?.length) return 0;
      // Avec le filtre auteur, le premier build est le premier des siens.
      const permis = new Set(indicesBuildsVisibles(h));
      let bestIdx = 0, bestOrder = Infinity;
      h.builds.forEach((b, i) => {
        if (!permis.has(i)) return;
        const o = b.order ?? 0; if (o < bestOrder) { bestOrder = o; bestIdx = i; }
      });
      return bestIdx;
    }
    function ensureSelection() { const l=filteredHeroes(); if(state.heroId&&(!currentHero()||!l.some(h=>h.id===state.heroId))){state.heroId=null;state.buildIndex=0;} clampBuildIndex(currentHero()); }

    function updateStaticLang() {
      const el = id => { const e = $(id); if (e) return e; return { textContent: '', placeholder: '' }; };
      el('heroesTitle').textContent = t('heroesTitle');
      el('heroesNote').textContent = t('heroesNote');
      els.searchInput.placeholder = t('searchPlaceholder');
      document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === state.lang));
    }

    // Pied de page : une phrase et un lien vers la page de contact. Il arrive masqué
    // depuis le HTML pour qu'une bande de panneau vide ne clignote pas au chargement,
    // et on ne l'affiche qu'une fois rempli.
    // Le lien emporte le fragment courant : la page de contact s'en sert pour offrir
    // un retour sur le héros qu'on était en train de lire. D'où l'appel en toute fin
    // de renderAll(), après updateHash() — avant, le fragment serait encore le précédent.
    function renderFooter() {
      const pied = $('siteFooter');
      if (!pied) return;
      const retour = (location.hash || '').replace(/^#/, '');
      const cible = 'contact.html' + (retour ? '?retour=' + encodeURIComponent(retour) : '');
      pied.innerHTML = `<span class="footer-note">${escapeHtml(t('footerNote'))}</span>`
        + `<a class="footer-link" href="${escapeHtml(cible)}">`
        + `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`
        + `<span>${escapeHtml(t('footerContact'))}</span></a>`;
      pied.hidden = false;
    }

    function renderHeader() {
      if (STREAMER_CONFIG.logoImage) {
        els.siteTitle.innerHTML = `<img class="site-logo-img" src="${escapeHtml(STREAMER_CONFIG.logoImage)}" alt="${escapeHtml(loc(STREAMER_CONFIG.siteTitle))}" />`;
      } else {
        els.siteTitle.textContent = loc(STREAMER_CONFIG.siteTitle);
      }
      els.socials.innerHTML = STREAMER_CONFIG.socials.map(s=>`<a class="social-link" data-network="${s.icon}" href="${s.url}" target="_blank" rel="noreferrer">${ICONS[s.icon]||''}<span>${s.label}</span></a>`).join('');
      // Cette page est "index.html" (Builds) : on ne garde que les liens marqués pour y apparaître.
      els.headerNav.innerHTML = (STREAMER_CONFIG.navLinks || [])
        .filter(l => l.enabled !== false && l.showOnBuilds !== false)
        .map(l => {
          const isActive = (l.url || '').replace(/^\.?\//, '') === 'index.html';
          return `<a class="header-nav-link${isActive ? ' active' : ''}" href="${escapeHtml(l.url || '#')}" data-nav-id="${escapeHtml(navSlug(l))}"${l.newTab ? ' target="_blank" rel="noreferrer"' : ''}>${escapeHtml(loc(l.label))}</a>`;
        }).join('');
      renderSiteUpdate();
    }

    // Bandeau "Mise à jour du site" dans le header : masqué tant qu'aucune date n'est
    // saisie, pour ne pas laisser un libellé seul quand il n'y a rien à annoncer.
    function renderSiteUpdate() {
      if (!els.siteUpdate) return;
      const u = STREAMER_CONFIG.siteUpdate || {};
      const date = u.enabled === false ? '' : loc(u.date);
      if (!date) { els.siteUpdate.innerHTML = ''; els.siteUpdate.hidden = true; return; }
      els.siteUpdate.hidden = false;
      // La bulle n'apparaît que s'il y a effectivement des changements à lire, et
      // clignote tant que ce visiteur ne les a pas ouverts.
      const neuf = !hasSeenChangelog() ? ' is-unread' : '';
      const bulle = changelogEntries().length ? `<button class="site-update-bubble${neuf}" type="button" id="changelogBtn" aria-label="${escapeHtml(t('changelogOpen'))}" title="${escapeHtml(t('changelogOpen'))}">`
        + `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.9 3 3 6.4 3 10.6c0 2.4 1.3 4.6 3.4 6l-.7 3.2c-.1.5.4.9.9.7l3.7-1.9c.6.1 1.2.2 1.7.2 5.1 0 9-3.4 9-7.6S17.1 3 12 3Z"/></svg>`
        + `</button>` : '';
      els.siteUpdate.innerHTML = `<span class="site-update-label">${t('siteUpdateLabel')}</span>`
        + `<span class="site-update-date">${escapeHtml(date)}</span>`
        + bulle;
    }

    /* =========================================================================
       JOURNAL DES CHANGEMENTS
       Saisi dans l'admin (STREAMER_CONFIG.siteUpdate.changelog), du plus récent
       au plus ancien. Une entrée sans aucune ligne remplie est ignorée : la bulle
       ne s'affiche donc jamais pour ouvrir une fenêtre vide.
       ========================================================================= */
    function changelogEntries() {
      const brut = (STREAMER_CONFIG.siteUpdate || {}).changelog;
      if (!Array.isArray(brut)) return [];
      return brut
        .map(e => ({ date: loc(e.date), items: (e.items || []).map(loc).filter(x => x && x.trim()) }))
        .filter(e => e.items.length);
    }

    // Signature de l'entrée la plus récente : sa date FR et son nombre de lignes. Ajouter
    // une entrée ou une ligne fait donc réapparaître le clignotement, alors qu'une simple
    // correction de faute ne relance pas l'alerte chez tout le monde.
    function changelogSignature() {
      const brut = (STREAMER_CONFIG.siteUpdate || {}).changelog;
      const premiere = Array.isArray(brut) ? brut.find(e => (e.items || []).some(i => loc(i).trim())) : null;
      if (!premiere) return '';
      const nb = (premiere.items || []).filter(i => loc(i).trim()).length;
      return `${(premiere.date && premiere.date.fr) || ''}_${nb}`;
    }

    function hasSeenChangelog() {
      const sig = changelogSignature();
      if (!sig) return true;
      try { return localStorage.getItem('seenChangelog') === sig; } catch (e) { return false; }
    }

    function markChangelogSeen() {
      try { localStorage.setItem('seenChangelog', changelogSignature()); } catch (e) { /* navigation privée */ }
    }

    function renderChangelog() {
      const corps = document.getElementById('changelogBody');
      const titre = document.getElementById('changelogTitle');
      if (!corps || !titre) return;
      titre.textContent = t('changelogTitle');
      const entrees = changelogEntries();
      corps.innerHTML = entrees.length
        ? entrees.map(e => `<section class="changelog-entry">`
            + (e.date ? `<h3 class="changelog-date">${escapeHtml(e.date)}</h3>` : '')
            + `<ul class="changelog-list">${e.items.map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`
          + `</section>`).join('')
        : `<div class="empty-state">${t('changelogEmpty')}</div>`;
    }

    function openChangelog() {
      const o = document.getElementById('changelogOverlay');
      if (!o) return;
      renderChangelog();
      track('changements', 'Ce qui a changé');
      o.classList.add('active');
      o.setAttribute('aria-hidden', 'false');
      // Lu : le clignotement s'arrête sans attendre un nouveau rendu de l'en-tête.
      markChangelogSeen();
      document.getElementById('changelogBtn')?.classList.remove('is-unread');
      document.getElementById('closeChangelogBtn')?.focus();
    }

    function closeChangelog() {
      const o = document.getElementById('changelogOverlay');
      if (!o) return;
      o.classList.remove('active');
      o.setAttribute('aria-hidden', 'true');
      document.getElementById('changelogBtn')?.focus();
    }
    
    // « Builds d'Eowea », « Builds de Malganyr » : en français, « de » s'élide devant une
    // voyelle. Pas devant un h — dans un pseudo on ne sait pas s'il est muet.
    function libelleBuildsDe(nom) {
      if (state.lang !== 'fr') return t('buildsBy').replace('{n}', nom);
      const de = /^[aeiouyàâäéèêëîïôöùûü]/i.test(nom) ? "d'" : 'de ';
      return t('buildsBy').replace('{n}', de + nom);
    }
    function renderFilters() {
      const puces = roles().map(r=>`<button class="filter-chip${state.role===r?' active':''}" type="button" data-role="${r}">${locRole(r)}</button>`).join('');
      // Le filtre auteur s'affiche à côté des rôles tant qu'il est actif : on voit sur
      // toutes les pages pourquoi la liste est réduite, et on le retire d'un clic.
      const auteur = state.auteur
        ? `<button class="filter-chip filtre-auteur active" type="button" id="retirerAuteur" title="${esc(t('clearAuthor'))}" aria-label="${esc(t('clearAuthor'))}">${esc(libelleBuildsDe(state.auteur))}<span class="filtre-auteur-x" aria-hidden="true">✕</span></button>`
        : '';
      els.roleFilters.innerHTML = puces + auteur;
    }
    function renderHeroList() {
    const hList = filteredHeroes();
    els.resultsCount.textContent = hList.length > 1 ? t('resultsCount', {n:hList.length}) : t('resultsCountSingular', {n:hList.length});
    
    if(!hList.length){
        els.heroList.innerHTML=`<div class="empty-state">${t('emptyHeroList')}</div>`;
        return;
    }

    els.heroList.innerHTML = hList.map(h => {
        // Avec le filtre auteur, le compteur ne donne que ses builds sur ce héros.
        const bCount = indicesBuildsVisibles(h).length;
        
        // --- LOGIQUE DE PRIORITÉ DES BADGES ---
        let badgeHtml = '';
        const hasNewBuilds = h.builds && h.builds.some(b => b.isNew);
        const updateSeen = hasSeenBuildUpdate(h);
        const heroSeen = hasSeenHeroEntity(h.id);

        // Priorité 1 : Si un build est nouveau et que l'utilisateur ne l'a pas vu
        if (hasNewBuilds && !updateSeen) {
            badgeHtml = `<span class="updated-badge list-badge">${t('updatedBadge')}</span>`;
        } 
        // Priorité 2 : Si le héros est nouveau et que l'utilisateur ne l'a jamais ouvert
        else if (h.isNew && !heroSeen) {
            badgeHtml = `<span class="new-badge list-badge">${t('newBadge')}</span>`;
        }
        // ---------------------------------------

        return `
        <button class="hero-link${h.id===state.heroId?' active':''}" type="button" data-hero-id="${h.id}">
            <div class="portrait-wrapper" style="position: relative; flex-shrink: 0; display: flex;">
                <div class="portrait" data-fallback="${esc(initials(loc(h.name)))}">
                    <img src="${h.portrait}" alt="${esc(loc(h.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" />
                </div>
                ${badgeHtml} 
            </div>
            <div class="hero-meta">
                <div class="hero-name-row">
                    <div class="hero-name">${esc(loc(h.name))}</div>
                    ${bCount > 0 ? `<span class="build-count-badge">${bCount} Build${bCount > 1 ? 's' : ''}</span>` : ''}
                </div>
                <div class="hero-role">${esc(locRole(h.role))}</div>
            </div>
        </button>`;
    }).join('');
}

function ftHTML({cls,title,desc,demoId,inner}) { 
  const dStr = String(demoId||'').toLowerCase();
  // On vérifie si c'est un GIF, un WEBP ou un MP4
  const isMedia = dStr.endsWith('.gif') || dStr.endsWith('.webp') || dStr.endsWith('.mp4');
  const finalDemo = isMedia ? demoId : parseYouTubeId(demoId||'');
  
  return `<button class="${cls}" type="button" aria-label="${esc(loc(title))}" data-floating-title="${esc(loc(title))}" data-floating-description="${esc(loc(desc)||t('descUnavailable'))}" data-floating-demo="${esc(finalDemo)}">${inner}</button>`; 
}

function renderSpells(sp=[]) {
      if(!sp.length) return '';
      return `<div class="spell-strip">${sp.map(s=>`<div class="spell-item">${ftHTML({cls:'spell-trigger floating-trigger',title:s.name,desc:s.description,demoId:s.demoYoutubeId||s.demoYoutubeUrl,inner:`<div class="spell-icon" data-fallback="${esc(uiSpellKey(s.key)||initials(loc(s.name)))}"><img src="${s.icon||svgBadge(loc(s.name))}" alt="${esc(loc(s.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div>`})}<div class="spell-name">${esc(uiSpellKey(s.key)||'')}</div></div>`).join('')}</div>`;
    }
// Chromie débloque ses talents deux niveaux avant tout le monde. Le palier stocké
// dans data.js reste celui du jeu (1, 4, 7, 10, 13, 16, 20) — c'est lui qui porte
// les codes de build et l'admin — mais on affiche le niveau réel, listé dans
// hero.talentLevels quand le héros en a un. Fonction pure, donc vérifiable.
const PALIERS_STANDARD = [1, 4, 7, 10, 13, 16, 20];
function niveauAffiche(hero, palier) {
  const perso = hero && Array.isArray(hero.talentLevels) ? hero.talentLevels : null;
  if (!perso) return palier;
  const i = PALIERS_STANDARD.indexOf(palier);
  return (i >= 0 && perso[i] != null) ? perso[i] : palier;
}

function resolveBuildTalents(hero, build) {
  // Nouveau format : le héros a un "réservoir" de talents (hero.talentPool), et chaque
  // build ne stocke qu'une sélection (quel talent est principal / alternatif par palier).
  // On reconstruit ici la même forme qu'avant (un tableau de talents avec .alternatives)
  // pour que le reste du site n'ait rien à changer.
  if (Array.isArray(build.talentSelections) && Array.isArray(hero?.talentPool) && hero.talentPool.length) {
    return build.talentSelections.map(sel => {
      const primary = hero.talentPool.find(p => p.id === sel.primaryId);
      if (!primary) return null;
      const alternatives = (sel.alternativeIds || []).map(id => hero.talentPool.find(p => p.id === id)).filter(Boolean);
      // niveauBrut garde le palier réel : level est écrasé par le niveau d'affichage,
      // or c'est le palier réel qui permet de retrouver les autres talents du même cran.
      return { ...primary, level: niveauAffiche(hero, primary.level), niveauBrut: primary.level, alternatives };
    }).filter(Boolean);
  }
  // Ancien format (rétrocompatibilité) : les talents sont écrits en entier dans le build.
  return Array.isArray(build.talents) ? build.talents : [];
}
/* Une carte de talent, telle qu'elle apparaît sur le plateau.
   `niveau` à null pour les talents dépliés sous le build : la pastille du haut de
   colonne vaut déjà pour toute la colonne, la répéter ne ferait que du bruit. */
function carteTalent(tal, niveau, altHtml = '') {
  return `<article class="talent-card">`
    + (niveau == null ? '' : `<div class="talent-level">${t('level')} ${esc(String(niveau))}</div>`)
    + ftHTML({
      cls: 'talent-trigger floating-trigger',
      title: tal.name,
      desc: tal.description,
      demoId: tal.demoYoutubeId || tal.demoYoutubeUrl,
      inner: `<div class="talent-icon" data-fallback="${esc(initials(loc(tal.name)))}"><img src="${tal.icon||svgBadge(loc(tal.name))}" alt="${esc(loc(tal.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div>`
    })
    + `<div class="talent-title-card">${esc(loc(tal.name))}</div>${altHtml}</article>`;
}

/* Le plateau du build : une colonne par palier, le talent retenu en tête.
   Chaque colonne porte aussi les autres talents de son palier, masqués jusqu'à ce
   qu'on déplie — le plateau s'allonge alors vers le bas sans changer de largeur,
   ce qui laisse intacte la logique de centrage de syncTalentBoards(). */
function renderTalentBoard(hero, ts=[]) {
      if(!ts.length) return `<div class="empty-state">${t('emptyTalents')}</div>`;
      const pool = (hero && hero.talentPool) || [];

      return `<section class="talent-board-wrap" id="talentBoard"><div class="talent-board-scroller"><div class="talent-board-track">${ts.map(tData => {
        let altHtml = '';
        if (tData.alternatives && tData.alternatives.length > 0) {
          const alts = tData.alternatives.slice(0, 3).map(alt => ftHTML({
            cls: 'talent-trigger alt-talent floating-trigger',
            title: alt.name,
            desc: alt.description,
            demoId: alt.demoYoutubeId || alt.demoYoutubeUrl,
            inner: `<div class="talent-icon" data-fallback="${esc(initials(loc(alt.name)))}"><img src="${alt.icon||svgBadge(loc(alt.name))}" alt="${esc(loc(alt.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div>`
          })).join('');
          altHtml = `<div class="talent-alternatives"><div class="talent-alternatives-label">${t('optionalTalents')}</div>${alts}</div>`;
        }

        const tete = carteTalent(tData, tData.level, altHtml);
        // Les autres talents du même palier, celui du build excepté.
        const palier = tData.niveauBrut != null ? tData.niveauBrut : tData.level;
        const autres = pool.filter(p => p.level === palier && p.id !== tData.id)
          .map(p => carteTalent(p, null)).join('');
        return `<div class="talent-column">${tete}`
          + (autres ? `<div class="talent-column-extra">${autres}</div>` : '')
          + `</div>`;
      }).join('')}</div></div></section>`;
    }

/* Le même plateau, pour un héros qui n'a pas encore de build : faute de talent retenu,
   la colonne est coiffée de sa seule pastille de palier et tous ses talents sont
   dessous. Toujours déplié — ici les talents sont le contenu principal de la page. */
function renderTalentTable(hero) {
  const pool = (hero && hero.talentPool) || [];
  if (!pool.length) return '';
  const paliers = [...new Set(pool.map(x => x.level))].sort((a, b) => a - b);
  const colonnes = paliers.map(p => {
    const cartes = pool.filter(x => x.level === p).map(tal => carteTalent(tal, null)).join('');
    return `<div class="talent-column">`
      + `<div class="talent-level talent-column-tete">${t('level')} ${esc(String(niveauAffiche(hero, p)))}</div>`
      + `<div class="talent-column-extra">${cartes}</div></div>`;
  }).join('');
  return `<section class="talent-board-wrap talents-ouverts" id="talentBoard"><div class="talent-board-scroller"><div class="talent-board-track">${colonnes}</div></div></section>`;
}

function renderBuildCode(b) {
  if (!b.buildCode) return '';

  const title = esc(loc(b.buildCodeTitle) || t('defaultBuildCodeTitle'));
  const code = esc(b.buildCode);
  const hint = esc(t('copyHint'));

  return `
    <div class="build-code-wrap">
      <div class="build-code-title">${title}</div>
      <button
        class="build-code-box"
        type="button"
        title="${hint}"
        aria-label="${hint}"
        data-build-code="${code}"
        data-copy-default="${code}"
        draggable="false"
      >${code}</button>
    </div>
  `;
}
    /* Copie le lien de partage d'un build maison. Même repli que pour le code :
       navigator.clipboard est refusé hors contexte sécurisé, d'où le textarea. */
    async function copierLien(bouton) {
      if (!bouton) return;
      const url = bouton.dataset.shareUrl || '';
      if (!url) return;
      const texteOrigine = bouton.dataset.labelOrigine || bouton.textContent;
      bouton.dataset.labelOrigine = texteOrigine;

      const retour = (cle, erreur = false) => {
        bouton.textContent = t(cle);
        bouton.disabled = true;
        bouton.classList.toggle('is-copied', !erreur);
        bouton.classList.toggle('is-copy-error', erreur);
        clearTimeout(bouton._copyTimer);
        bouton._copyTimer = setTimeout(() => {
          bouton.textContent = texteOrigine;
          bouton.disabled = false;
          bouton.classList.remove('is-copied', 'is-copy-error');
        }, 1600);
      };

      const heros = currentHero();
      const marquer = () => track('lien-build-partage/' + (heros ? heros.id : 'inconnu'),
        heros ? loc(heros.name) + ' — mon build' : 'Lien de build partagé');

      try {
        await navigator.clipboard.writeText(url);
        retour('shareCopied', false);
        marquer();
      } catch (err) {
        try {
          const temp = document.createElement('textarea');
          temp.value = url;
          temp.setAttribute('readonly', '');
          temp.style.position = 'absolute';
          temp.style.left = '-9999px';
          document.body.appendChild(temp);
          temp.select();
          document.execCommand('copy');
          document.body.removeChild(temp);
          retour('shareCopied', false);
          marquer();
        } catch (e2) {
          retour('shareError', true);
        }
      }
    }

    async function copyBuildCode(button) {
  if (!button) return;

  const buildCode = button.dataset.buildCode || button.dataset.copyDefault || '';
  if (!buildCode) return;

  const originalText = button.dataset.copyDefault || buildCode;

  const setFeedback = (messageKey, isError = false) => {
    button.textContent = t(messageKey);
    button.disabled = true;
    button.classList.toggle('is-copied', !isError);
    button.classList.toggle('is-copy-error', isError);

    clearTimeout(button._copyTimer);
    button._copyTimer = setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      button.classList.remove('is-copied', 'is-copy-error');
    }, 1600);
  };

  // Le code copié est le signal le plus parlant : c'est le moment où un visiteur
  // emporte vraiment un build en jeu.
  const heros = currentHero();
  // En mode « Partager mon build », aucun build d'Eowea n'est affiché : on ne doit pas
  // créditer le compteur de l'un des siens.
  const build = (state.custom || !heros || !heros.builds) ? null : heros.builds[state.buildIndex];
  // Le libellé du build entre dans le chemin : sans lui, les trois builds d'un
  // même héros tomberaient dans le même compteur.
  const cleBuild = state.custom ? 'mon-build'
    : (build ? normalize((build.label || {}).fr || '').replace(/ /g, '-') : '');
  const marquerCopie = () => track(
    'build-copie/' + (heros ? heros.id : 'inconnu') + (cleBuild ? '/' + cleBuild : ''),
    heros ? loc(heros.name) + (build ? ' — ' + loc(build.label) : '') : 'Build copié'
  );

  try {
    await navigator.clipboard.writeText(buildCode);
    setFeedback('copySuccess', false);
    marquerCopie();
  } catch (err) {
    try {
      const temp = document.createElement('textarea');
      temp.value = buildCode;
      temp.setAttribute('readonly', '');
      temp.style.position = 'absolute';
      temp.style.left = '-9999px';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      setFeedback('copySuccess', false);
      marquerCopie();
    } catch (fallbackErr) {
      setFeedback('copyError', true);
    }
  }
}
    
    function getGuideVideos(h) {
      if (Array.isArray(h?.guideVideos) && h.guideVideos.length) return h.guideVideos;
      if (h?.guideVideo) return [h.guideVideo]; // compatibilité avec l'ancien format (un seul objet)
      return [];
    }
    function hasGuide(h) { return getGuideVideos(h).some(g => parseYouTubeId(g?.youtubeId||g?.youtubeUrl||g?.url||'')); }
// Construit le carrousel de vignettes YouTube (utilisé par le guide d'un héros, et par les
// sections "Dernière vidéo" / "Analyse Patchs" de la page d'accueil). `videos` est une liste
// d'objets {title:{fr,en}, youtubeId}.
// `contexte` sert uniquement à la mesure d'audience : il dit d'où part le clic
// (« guide/valla », « derniere », « patch »). Sans lui, les trois carrousels
// tomberaient dans le même compteur.
function buildYoutubeCarouselMarkup(videos, contexte) {
  const slides = (videos||[])
    .map(v => ({ v, id: parseYouTubeId(v?.youtubeId||v?.youtubeUrl||v?.url||'') }))
    .filter(x => x.id);
  if (!slides.length) return '';

  // Sur téléphone, on ouvre le lien dans le même onglet (pas de target="_blank") : c'est ce
  // qui permet à l'OS d'intercepter le lien youtube.com et de forcer l'ouverture de
  // l'application YouTube si elle est installée. Un target="_blank" (nouvel onglet) empêche
  // cette interception sur mobile. Sur PC, on garde l'ouverture dans un nouvel onglet.
  const isTouchLike = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const linkAttrs = isTouchLike ? '' : ' target="_blank" rel="noopener noreferrer"';

  const slidesHtml = slides.map((x, idx) => `
    <div class="combo-slide${idx===0?' is-active':''}" data-index="${idx}">
      <div class="combo-slide-title">${esc(loc(x.v.title) || 'Guide')}</div>
      <a class="combo-stage guide-stage-link" data-yt-id="${x.id}" data-video-track="${esc(videoSlug(x.v, x.id, contexte))}" data-video-title="${esc(videoTitreStable(x.v, x.id))}" href="https://www.youtube.com/watch?v=${x.id}"${linkAttrs}>
        <img class="combo-poster" src="${ytThumb(x.id)}" alt="${esc(loc(x.v.title))}" loading="lazy" />
        ${APP_CONFIG.showGuideBadge ? '<span class="youtube-badge">guide</span>' : ''}
        <span class="youtube-play"></span>
        ${x.v.duration ? `<span class="video-duration-badge">${esc(x.v.duration)}</span>` : ''}
      </a>
    </div>
  `).join('');
  const navHtml = slides.length > 1 ? `
    <button class="combo-nav prev" type="button" aria-label="${t('prevVideo')}">&#10094;</button>
    <button class="combo-nav next" type="button" aria-label="${t('nextVideo')}">&#10095;</button>
    <div class="combo-dots">${slides.map((_,idx)=>`<span class="combo-dot${idx===0?' is-active':''}" data-dot="${idx}"></span>`).join('')}</div>
  ` : '';
  return `<div class="combo-carousel">${slidesHtml}${navHtml}</div>`;
}
function renderGuide(h) {
  const markup = buildYoutubeCarouselMarkup(getGuideVideos(h), 'guide/' + (h && h.id ? h.id : 'inconnu'));
  if (!markup) return '';
  return `<section class="video-group guide-video-section">${markup}</section>`;
}
    function renderVideoCards(vs) {
      if(!vs?.length) return '';
      const slides = vs.map((v,idx) => {
        const raw = v.youtubeId||v.youtubeUrl||v.url||'';
        const isMedia = isLocalMediaRef(raw);
        const id = isMedia ? '' : parseYouTubeId(raw);
        const hasSomething = isMedia || !!id;
        let stageInner;
        if (isMedia) {
          stageInner = `<video class="combo-media" src="${esc(raw)}" muted loop playsinline preload="auto" data-video-el></video>`;
        } else if (id) {
          stageInner = `<img class="combo-poster" src="${ytThumb(id)}" alt="${esc(loc(v.title))}" loading="lazy" data-poster /><div class="combo-frame" data-frame></div>`;
        } else {
          stageInner = `<div class="youtube-unavailable">${t('videoUnavailable')}</div>`;
        }
        return `<div class="combo-slide${idx===0?' is-active':''}" data-index="${idx}" data-video-type="${isMedia?'media':'youtube'}" data-video-ref="${esc(isMedia?raw:id)}">
          <div class="combo-slide-title">${esc(loc(v.title))}</div>
          <div class="combo-stage"${hasSomething?'':' data-empty'}>${stageInner}</div>
        </div>`;
      }).join('');
      const navHtml = vs.length > 1 ? `
        <button class="combo-nav prev" type="button" aria-label="${t('prevVideo')}">&#10094;</button>
        <button class="combo-nav next" type="button" aria-label="${t('nextVideo')}">&#10095;</button>
        <div class="combo-dots">${vs.map((_,idx)=>`<span class="combo-dot${idx===0?' is-active':''}" data-dot="${idx}"></span>`).join('')}</div>
      ` : '';
      return `<section class="video-group combo-video-section"><div class="combo-carousel">${slides}${navHtml}</div></section>`;
    }
    function renderBuildVideos(h,b) { const wg=hasGuide(h); return `<section class="videos-layout${wg?' with-guide':''}">${wg?renderGuide(h):''}${renderVideoCards(b.videos)}</section>`; }

/* =========================================================================
   FAIRE MON BUILD
   Le visiteur compose son propre build et le partage. Tout repose sur le format
   de code déjà utilisé partout : [T<un chiffre par palier>,<codeKey>], où chaque
   chiffre est le rang du talent dans son palier, dans l'ordre du talentPool.
   Le même code sert donc à la fois à coller en jeu et à refaire le lien du site.
   ========================================================================= */
function paliersDe(hero) {
  return [...new Set(((hero && hero.talentPool) || []).map(t => t.level))].sort((a, b) => a - b);
}

// picks -> code, ou null tant qu'il manque un palier : on ne fabrique jamais un
// code incomplet, il serait refusé en jeu.
function codeDepuisPicks(hero, picks) {
  if (!hero || !hero.codeKey) return null;
  const chiffres = paliersDe(hero).map(p => {
    const dans = hero.talentPool.filter(t => t.level === p);
    const i = dans.findIndex(t => t.id === picks[p]);
    return i >= 0 ? String(i + 1) : null;
  });
  if (!chiffres.length || chiffres.some(c => c === null)) return null;
  return `[T${chiffres.join('')},${hero.codeKey}]`;
}

// code -> picks. Rend null si le code ne colle pas à ce héros : mauvaise clé,
// mauvais nombre de paliers, ou rang hors du palier.
function picksDepuisCode(hero, code) {
  const m = String(code || '').match(/^\[T(\d+),([^\]]+)\]$/);
  if (!m || !hero || m[2] !== hero.codeKey) return null;
  const paliers = paliersDe(hero);
  if (m[1].length !== paliers.length) return null;
  const picks = {};
  for (let i = 0; i < paliers.length; i++) {
    const dans = hero.talentPool.filter(t => t.level === paliers[i]);
    const rang = Number(m[1][i]);
    if (!(rang >= 1 && rang <= dans.length)) return null;
    picks[paliers[i]] = dans[rang - 1].id;
  }
  return picks;
}

// Point de départ du constructeur : le build affiché, pour qu'on parte de quelque
// chose plutôt que d'un plateau vide.
function picksDuBuild(hero, build) {
  const picks = {};
  ((build && build.talentSelections) || []).forEach(sel => {
    const t = (hero.talentPool || []).find(x => x.id === sel.primaryId);
    if (t) picks[t.level] = t.id;
  });
  return picks;
}
function optsDuBuild(hero, build) {
  const opts = {};
  ((build && build.talentSelections) || []).forEach(sel => {
    (sel.alternativeIds || []).forEach(id => {
      const t = (hero.talentPool || []).find(x => x.id === id);
      if (!t) return;
      (opts[t.level] = opts[t.level] || []).push(t.id);
    });
  });
  return opts;
}

/* ── Les talents optionnels dans le lien ──
   Le code [T…] ne porte qu'un talent par palier : c'est le format du jeu, on n'y
   touche pas. Les optionnels voyagent donc dans un troisième morceau du fragment.
   Un palier compte au plus cinq talents : un masque de 5 bits suffit, écrit en
   base 32, soit un caractère par palier. « o2000000 » = au palier 1, le talent de
   rang 2 est optionnel. Absent quand il n'y a aucun optionnel. */
const MAX_OPTIONNELS = 3;   // même plafond que l'affichage des builds d'Eowea

function optionsVersTexte(hero, opts) {
  const paliers = paliersDe(hero);
  const chars = paliers.map(p => {
    const dans = hero.talentPool.filter(t => t.level === p);
    let masque = 0;
    ((opts && opts[p]) || []).forEach(id => {
      const i = dans.findIndex(t => t.id === id);
      if (i >= 0 && i < 5) masque |= (1 << i);
    });
    return masque.toString(32);
  });
  return chars.some(c => c !== '0') ? 'o' + chars.join('') : '';
}

function texteVersOptions(hero, texte) {
  const m = String(texte || '').match(/^o([0-9a-v]+)$/i);
  if (!m) return {};
  const paliers = paliersDe(hero);
  if (m[1].length !== paliers.length) return {};
  const opts = {};
  paliers.forEach((p, i) => {
    const dans = hero.talentPool.filter(t => t.level === p);
    const masque = parseInt(m[1][i], 32);
    if (!masque) return;
    const ids = [];
    dans.forEach((t, j) => { if (masque & (1 << j)) ids.push(t.id); });
    if (ids.length) opts[p] = ids.slice(0, MAX_OPTIONNELS);
  });
  return opts;
}

function lienDuBuild(hero, code, opts) {
  const suffixe = optionsVersTexte(hero, opts || {});
  return location.origin + location.pathname + '#' + looseHashEncode(hero.id)
    + '/' + looseHashEncode(code) + (suffixe ? '/' + suffixe : '') + '/';
}

/* Les choix du visiteur remis dans la forme que renderTalentBoard attend : un talent
   par palier, ses optionnels dans .alternatives. C'est ce qui permet d'afficher un
   build partagé exactement comme un build d'Eowea, sans rien dupliquer. */
function talentsDepuisCustom(hero, picks, opts) {
  return paliersDe(hero).map(p => {
    const principal = (hero.talentPool || []).find(t => t.id === picks[p]);
    if (!principal) return null;
    const alternatives = ((opts && opts[p]) || [])
      .map(id => (hero.talentPool || []).find(t => t.id === id)).filter(Boolean);
    return { ...principal, level: niveauAffiche(hero, principal.level), niveauBrut: principal.level, alternatives };
  }).filter(Boolean);
}

/* Vue d'un build partagé : même mise en forme que les builds d'Eowea. C'est ce que
   voit celui qui reçoit le lien — il veut lire le build, pas l'éditer. L'édition
   reste à un clic. */
function renderCustomView(hero) {
  const picks = (state.custom && state.custom.picks) || {};
  const opts = (state.custom && state.custom.opts) || {};
  const talents = talentsDepuisCustom(hero, picks, opts);
  const code = codeDepuisPicks(hero, picks);
  const aDesTalentsEnPlus = (hero.talentPool || []).length > talents.length;

  const lienTalents = aDesTalentsEnPlus
    ? `<button class="talent-table-link" type="button" id="talentTableToggle" aria-expanded="false" aria-controls="talentBoard">${t('showAllTalents')}</button>`
    : '';

  return `<div class="build-tabs-rangee">`
      + `<div class="build-tabs"><div class="build-tab-wrapper">`
        + `<button class="build-tab active" type="button" disabled>${esc(t('customBuildBadge'))}</button>`
      + `</div></div>`
      + `<div class="mon-build-actions">`
        // Celui qui arrive par un lien partagé n'a autrement aucun chemin vers les
        // builds d'Eowea : ce bouton est sa seule porte d'entrée.
        + ((hero.builds || []).length
            ? `<button class="btn" type="button" id="monBuildRecommandes">${esc(t('seeRecommended'))}</button>` : '')
        + `<button class="btn faire-mon-build" type="button" id="monBuildEditer">${esc(t('editThisBuild'))}</button>`
      + `</div>`
    + `</div>`
    // On dit d'où vient ce build : sans ça, un lien partagé passerait pour une
    // recommandation d'Eowea.
    + `<div class="build-summary">${esc(t('customBuildIntro'))}</div>`
    + lienTalents
    + renderTalentBoard(hero, talents)
    + (code ? renderBuildCode({ buildCode: code, buildCodeTitle: { fr: t('myBuildCodeTitle'), en: t('myBuildCodeTitle') } }) : '')
    + (code ? `<div class="mon-build-partage-ligne">`
        + `<button class="btn mon-build-partage" type="button" id="monBuildPartage" data-share-url="${esc(lienDuBuild(hero, code, opts))}">${esc(t('shareLink'))}</button>`
      + `</div>` : '');
}

function renderCustomBuilder(hero) {
  const picks = (state.custom && state.custom.picks) || {};
  const opts = (state.custom && state.custom.opts) || {};
  const paliers = paliersDe(hero);
  const code = codeDepuisPicks(hero, picks);
  const manquants = paliers.filter(p => !picks[p]).length;

  const colonnes = paliers.map(p => {
    const dans = hero.talentPool.filter(t => t.level === p);
    const listeOpt = opts[p] || [];
    const plein = listeOpt.length >= MAX_OPTIONNELS;
    const cartes = dans.map(tal => {
      const choisi = picks[p] === tal.id;
      const optionnel = listeOpt.includes(tal.id);
      // Le talent retenu ne peut pas être aussi optionnel : pas de bouton sur lui.
      const boutonOpt = choisi ? ''
        : `<button class="talent-opt${optionnel ? ' est-option' : ''}" type="button"`
          + ` data-opt-level="${esc(String(p))}" data-opt-id="${esc(tal.id)}"`
          + ` title="${esc(optionnel ? t('optRemove') : t('optAdd'))}" aria-pressed="${optionnel}"`
          + ((!optionnel && plein) ? ' disabled' : '') + `>${optionnel ? '★' : '+'}</button>`;
      return `<div class="talent-choix${choisi ? ' is-choisi' : ''}${optionnel ? ' est-option' : ''}" data-pick-level="${esc(String(p))}" data-pick-id="${esc(tal.id)}" role="button" tabindex="0" aria-pressed="${choisi}">`
        + boutonOpt + carteTalent(tal, null) + `</div>`;
    }).join('');
    return `<div class="talent-column">`
      + `<div class="talent-level talent-column-tete${picks[p] ? ' est-rempli' : ''}">${t('level')} ${esc(String(niveauAffiche(hero, p)))}</div>`
      + `<div class="talent-column-extra">${cartes}</div></div>`;
  }).join('');

  const pied = code
    ? renderBuildCode({ buildCode: code, buildCodeTitle: { fr: t('myBuildCodeTitle'), en: t('myBuildCodeTitle') } })
      + `<div class="mon-build-partage-ligne">`
      + `<button class="btn mon-build-partage" type="button" id="monBuildPartage" data-share-url="${esc(lienDuBuild(hero, code, opts))}">${esc(t('shareLink'))}</button>`
      + `</div>`
    : `<div class="mon-build-reste">${esc((manquants > 1 ? t('myBuildLeftPlural') : t('myBuildLeft')).replace('{n}', manquants))}</div>`;

  return `<section class="mon-build">`
      + `<div class="mon-build-tete">`
        + `<div><div class="mon-build-titre">${esc(t('myBuild'))}</div>`
        + `<div class="mon-build-hint">${esc(t('myBuildHint'))}</div>`
        + `<div class="mon-build-hint">${esc(t('optLegend'))}</div></div>`
        + `<div class="mon-build-actions">`
          + (code ? `<button class="btn" type="button" id="monBuildVoir">${esc(t('previewBuild'))}</button>` : '')
          + `<button class="btn" type="button" id="monBuildReset">${esc(t('myBuildReset'))}</button>`
          + `<button class="btn" type="button" id="monBuildQuit">${esc(t('myBuildQuit'))}</button>`
        + `</div>`
      + `</div>`
    + `</section>`
    + `<section class="talent-board-wrap talents-ouverts mon-build-plateau" id="talentBoard"><div class="talent-board-scroller"><div class="talent-board-track">${colonnes}</div></div></section>`
    + pied;
}

function renderBuildSection(hero) {
  const el = $('buildSection');
  if (!el) return;

  // Mode « Partager mon build » : il remplace l'affichage des builds d'Eowea tant
  // qu'on n'en sort pas.
  if (state.custom && state.custom.heroId === hero.id) {
    // Deux états : « vue » pour celui qui reçoit le lien, « édition » pour celui qui
    // compose. Un build incomplet n'a rien à montrer : on reste alors en édition.
    const complet = !!codeDepuisPicks(hero, state.custom.picks || {});
    const enEdition = state.custom.mode === 'edition' || !complet;
    el.innerHTML = enEdition ? renderCustomBuilder(hero) : renderCustomView(hero);
    bindFloatingTriggers();
    queueLayoutSync();
    return;
  }

  
  // Héros sans build : on annonce qu'il arrive, et on donne accès à tous les talents
  // plutôt que de laisser la section vide.
  if (!hero.builds || hero.builds.length === 0) {
    const tableau = renderTalentTable(hero);
    // Même sans build d'Eowea, on peut composer le sien : le bouton est là aussi.
    const boutonMien = (hero.talentPool || []).length
      ? `<button class="btn faire-mon-build" type="button" id="faireMonBuild">${esc(t('makeBuild'))}</button>` : '';
    el.innerHTML = `<section class="build-soon">`
      + `<div class="build-soon-title">${t('buildSoon')}</div>`
      + `<p class="build-soon-text">${t('buildSoonText')}</p>`
      + `<div class="build-soon-actions">`
        + (tableau ? `<button class="build-soon-toggle" type="button" id="talentTableToggle" aria-expanded="true" aria-controls="talentBoard">${t('hideAllTalents')}</button>` : '')
        + boutonMien
      + `</div>`
      + `</section>${tableau}`;
    bindFloatingTriggers();
    queueLayoutSync();
    return;
  }
  
  // Avec le filtre auteur, seuls ses builds ont un onglet. Si le build mémorisé n'est
  // pas l'un des siens (lien ouvert avant de filtrer, par exemple), on prend le premier.
  const visibles = indicesBuildsVisibles(hero);
  if (!visibles.includes(clampBuildIndex(hero))) state.buildIndex = firstBuildIndex(hero);
  const b = hero.builds[clampBuildIndex(hero)] || hero.builds[0];

  // --- MODIFICATION ICI ---
  // On ajoute une vérification "x.isNew" sur chaque build dans le .map()
const sortedBuildIndices = visibles.slice().sort((a, b) => (hero.builds[a].order ?? 0) - (hero.builds[b].order ?? 0));
const tabsHtml = sortedBuildIndices.map(i => {
    const x = hero.builds[i];
    const newBadge = (x.isNew && !hasSeenBuild(hero.id, x)) ? `<span class="new-badge">${t('newBadge')}</span>` : '';
    
    // On entoure le bouton d'un "wrapper" pour que le badge ne soit pas coupé par le clip-path du bouton
    return `
      <div class="build-tab-wrapper">
        <button class="build-tab${i === state.buildIndex ? ' active' : ''}" type="button" data-build-index="${i}">
          ${esc(loc(x.label))}
        </button>
        ${newBadge}
      </div>`;
}).join('');
  // -------------------------

  // La ligne sous les onglets : la date de mise à jour quand il y en a une, puis
  // toujours l'auteur — un build sans date reste attribué.
  const dateHtml = `<div class="build-date">`
    + (b.updatedAt
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${t('lastUpdate')} ${esc(loc(b.updatedAt))}<span class="build-date-sep" aria-hidden="true">·</span>`
        : '')
    + `<span class="build-auteur">${esc(t('buildAuthor'))} <strong>${esc(auteurDuBuild(b))}</strong></span>`
    + `</div>`;
  
  // Lien discret posé au-dessus du plateau : il reste en place pendant que les colonnes
  // s'allongent sous lui, sans que le bouton se dérobe sous le curseur au moment du clic.
  const talents = resolveBuildTalents(hero, b);
  const aDesTalentsEnPlus = (hero.talentPool || []).length > talents.length;
  const lienTalents = aDesTalentsEnPlus
    ? `<button class="talent-table-link" type="button" id="talentTableToggle" aria-expanded="false" aria-controls="talentBoard">${t('showAllTalents')}</button>`
    : '';

  // Les onglets à gauche, « Partager mon build » à droite : le bouton reste visible
  // quel que soit le nombre de builds du héros.
  const rangeeOnglets = `<div class="build-tabs-rangee">`
    + `<div class="build-tabs">${tabsHtml}</div>`
    + `<button class="btn faire-mon-build" type="button" id="faireMonBuild">${esc(t('makeBuild'))}</button>`
    + `</div>`;
  el.innerHTML=`${rangeeOnglets}${dateHtml}<div class="build-summary">${esc(loc(b.summary))}</div>${lienTalents}${renderTalentBoard(hero,talents)}${renderBuildCode(b)}${renderBuildVideos(hero,b)}`;
  // Le build qu'on vient d'afficher est désormais vu : son badge disparaîtra au prochain
  // rendu. Le marquage est différé pour qu'il reste visible sur celui-ci.
  if (b.isNew) setTimeout(() => markBuildSeen(hero.id, b), 0);
  bindFloatingTriggers();
  bindComboCarousel();
  queueLayoutSync();
}

function renderHomeVideoSections() {
  const latestMarkup = buildYoutubeCarouselMarkup(STREAMER_CONFIG.latestVideos || [], 'derniere');
  const patchMarkup = buildYoutubeCarouselMarkup(STREAMER_CONFIG.patchVideos || [], 'patch');

  const col = (titleKey, markup) => `
    <div class="video-group">
      <h2 class="section-title" style="text-align:center;margin-bottom:16px;">${t(titleKey)}</h2>
      ${markup ? `<section class="guide-video-section">${markup}</section>` : `<div class="empty-state">${t('noVideosYet')}</div>`}
    </div>`;

  const rotationHtml = STREAMER_CONFIG.showHeroRotation !== false ? renderHeroRotationSection() : '';
  return `<div class="videos-layout with-guide">${col('latestVideoTitle', latestMarkup)}${col('patchAnalysisTitle', patchMarkup)}</div>${renderListeAuteurs()}${rotationHtml}`;
}

// « Voir les builds de : » — un bouton par auteur, avec le nombre de héros où il a un
// build. Un clic filtre la liste des héros ; un second clic sur le même le retire.
function renderListeAuteurs() {
  const auteurs = listeAuteurs();
  if (!auteurs.length) return '';
  const puces = auteurs.map(a => {
    const actif = memeAuteur(a.nom, state.auteur);
    const nb = (a.nbHeros > 1 ? t('authorHeroCount') : t('authorHeroCountSingular')).replace('{n}', a.nbHeros);
    return `<button class="auteur-puce${actif ? ' active' : ''}" type="button" data-auteur="${esc(a.nom)}" aria-pressed="${actif}">`
      + `<span class="auteur-nom">${esc(a.nom)}</span><span class="auteur-nb">${esc(nb)}</span></button>`;
  }).join('');
  return `<section class="auteurs-section">`
    + `<h2 class="section-title" style="text-align:center;margin-bottom:16px;">${esc(t('seeBuildsBy'))}</h2>`
    + `<div class="auteurs-liste">${puces}</div>`
    + `</section>`;
}

/* =========================================================================
   MESURE D'AUDIENCE (GoatCounter)

   Le code du compte est saisi dans l'admin, jamais codé en dur : sans lui,
   aucun script n'est chargé et le site n'émet rien. L'outil ne pose pas de
   cookie et ne stocke pas de donnée personnelle, d'où l'absence de bandeau
   de consentement.
   ========================================================================= */
// Le site de test et les aperçus locaux ne comptent jamais, quel que soit le
// code présent dans data.js. Les deux dépôts peuvent donc porter le même
// réglage : copier data.js de l'un vers l'autre ne casse plus la mesure.
// Écrite en fonction pure de ses deux arguments pour rester vérifiable.
function siteDeTest(hote, chemin) {
  hote = hote === undefined ? location.hostname : hote;
  chemin = chemin === undefined ? location.pathname : chemin;
  if (!hote || hote === 'localhost' || hote === '127.0.0.1') return true;
  return /(^|\/)buildtest(\/|$)/i.test(chemin);
}

function analyticsCode() {
  const a = (typeof STREAMER_CONFIG !== 'undefined' && STREAMER_CONFIG.analytics) || {};
  if (a.enabled === false || siteDeTest()) return '';
  return String(a.goatcounterCode || '').trim();
}

function initAnalytics() {
  const code = analyticsCode();
  if (!code || document.getElementById('gcScript')) return;
  const s = document.createElement('script');
  s.id = 'gcScript';
  s.async = true;
  s.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
  s.src = '//gc.zgo.at/count.js';
  document.head.appendChild(s);
}

// Un évènement nommé, envoyé seulement si la mesure est active. Les échecs sont
// silencieux : une statistique ne doit jamais casser une page.
function track(nom, titre) {
  try {
    if (!analyticsCode() || !window.goatcounter || !window.goatcounter.count) return;
    window.goatcounter.count({ path: nom, title: titre || nom, event: true });
  } catch (e) { /* sans effet */ }
}

// Un identifiant lisible et stable pour un lien du header. On part du libellé
// français : renommer un lien en anglais ne doit pas couper l'historique.
function navSlug(lien) {
  const brut = (lien && lien.label && lien.label.fr) || (lien && lien.label && lien.label.en) || (lien && lien.url) || 'lien';
  return normalize(brut).replace(/ /g, '-') || 'lien';
}

// Clics sur les liens du header. L'écoute est posée sur le document car le
// header est réécrit à chaque changement de langue.
function initNavTracking() {
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('#headerNav a');
    if (!a) return;
    track('lien/' + (a.dataset.navId || 'lien'), a.textContent.trim());
  });
}

// Même principe pour une vidéo : on part du titre français, pour qu'une lecture
// en anglais compte au même endroit qu'une lecture en français. Sans titre, on
// se rabat sur l'identifiant YouTube, qui ne bouge jamais.
function videoSlug(video, id, contexte) {
  const brut = (video && video.title && video.title.fr) || (video && video.title && video.title.en) || '';
  const nom = normalize(brut).replace(/ /g, '-') || id;
  return contexte ? contexte + '/' + nom : nom;
}
function videoTitreStable(video, id) {
  return (video && video.title && video.title.fr) || (video && video.title && video.title.en) || id;
}

// Clics sur les vignettes vidéo : guide d'un héros, dernières vidéos et analyses
// de patch. L'écoute est déléguée au document car les carrousels sont réécrits à
// chaque rendu, et elle survit au preventDefault posé sur mobile pour ouvrir
// l'application YouTube : cet appel-là n'arrête pas la propagation.
function initVideoTracking() {
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('.guide-stage-link');
    if (!a) return;
    const chemin = a.dataset.videoTrack || a.dataset.ytId || 'inconnue';
    track('video/' + chemin, a.dataset.videoTitle || chemin);
  });
}

/* Ouverture et fermeture du tableau des talents. L'écouteur est posé une fois sur le
   document : il survit aux rendus successifs de la section de build. */
function initTalentTable() {
  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('#talentTableToggle');
    if (!b) return;
    const plateau = document.getElementById('talentBoard');
    if (!plateau) return;
    // Une classe sur le plateau plutôt que l'attribut hidden : les talents dépliés sont
    // répartis dans les sept colonnes, il n'y a pas un bloc unique à masquer.
    const ouvert = !plateau.classList.contains('talents-ouverts');
    plateau.classList.toggle('talents-ouverts', ouvert);
    b.setAttribute('aria-expanded', String(ouvert));
    b.textContent = t(ouvert ? 'hideAllTalents' : 'showAllTalents');
    if (ouvert) queueLayoutSync();
  });
}

/* =========================================================================
   ROTATION DES HÉROS GRATUITS

   La rotation suit une boucle fixe qui change les 1er, 8, 15 et 22 de chaque
   mois : le calendrier des 48 fenêtres vit dans rotations.js et se rejoue
   d'année en année. On le lit donc directement depuis la date du jour, sans
   requête ni proxy — la page ne peut plus tomber en panne à cause d'une API.
   ========================================================================= */
const ROTATION_DAYS = [1, 8, 15, 22];

// Fenêtre en cours pour une date donnée : la dernière borne atteinte dans le mois,
// et sa date de fin, c'est-à-dire la veille de la borne suivante (celle du 22 court
// jusqu'au 1er du mois d'après).
function currentRotationWindow(today = new Date()) {
  if (typeof HERO_ROTATIONS === 'undefined' || !Array.isArray(HERO_ROTATIONS)) return null;
  const month = today.getMonth() + 1, day = today.getDate();
  const startDay = ROTATION_DAYS.filter(d => d <= day).pop() || 1;
  const entry = HERO_ROTATIONS.find(r => r[0] === month && r[1] === startDay);
  if (!entry) return null;

  const idx = ROTATION_DAYS.indexOf(startDay);
  const start = new Date(today.getFullYear(), month - 1, startDay);
  const next = idx === ROTATION_DAYS.length - 1
    ? new Date(today.getFullYear(), month, 1)                       // le 1er du mois suivant
    : new Date(today.getFullYear(), month - 1, ROTATION_DAYS[idx + 1]);
  // Veille de la borne suivante, calculée en jours et non en millisecondes : retirer
  // 24 h tomberait à côté les jours de changement d'heure (le jour 0 d'un mois renvoie
  // au dernier jour du mois précédent, ce qui couvre aussi le passage de mois).
  const end = new Date(next.getFullYear(), next.getMonth(), next.getDate() - 1);
  return { start, end, heroIds: entry[2] };
}

function renderHeroRotationSection() {
  return `<div class="video-group">
    <h2 class="section-title" style="text-align:center;margin-bottom:16px;">${t('heroRotationTitle')}</h2>
    <section class="rotation-section" id="heroRotationBody"></section>
  </div>`;
}

function renderHeroRotationBody(rotation) {
  const container = document.getElementById('heroRotationBody');
  if (!container) return;
  if (!rotation || !rotation.heroIds || !rotation.heroIds.length) {
    container.innerHTML = `<div class="empty-state">${t('heroRotationError')}</div>`;
    return;
  }
  const fmt = new Intl.DateTimeFormat(state.lang === 'en' ? 'en-US' : 'fr-FR', { day: 'numeric', month: 'long' });
  const dateRangeHtml = `<div class="rotation-date-range">${esc(fmt.format(rotation.start))} – ${esc(fmt.format(rotation.end))}</div>`;

  // Portraits et noms viennent du site lui-même : un héros de la rotation qui n'y
  // figure pas encore est simplement ignoré plutôt que d'afficher une case vide.
  const cardsHtml = rotation.heroIds.map(id => {
    const h = HEROES.find(x => x.id === id);
    if (!h) return '';
    const name = loc(h.name);
    const inner = `
      <div class="rotation-hero-portrait" data-fallback="${esc(initials(name))}"><img src="${esc(h.portrait)}" alt="${esc(name)}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div>
      <div class="rotation-hero-name">${esc(name)}</div>`;
    // Seul un héros qui a sa fiche sur le site est cliquable : les autres sont
    // dans la rotation du jeu sans avoir encore de page ici.
    return h.enabled
      ? `<button class="rotation-hero" type="button" data-hero-id="${esc(h.id)}" title="${esc(name)}">${inner}</button>`
      : `<div class="rotation-hero">${inner}</div>`;
  }).filter(Boolean).join('');

  container.innerHTML = `${dateRangeHtml}<div class="rotation-hero-grid">${cardsHtml}</div>`;
}

function loadHeroRotation() {
  if (!document.getElementById('heroRotationBody')) return;
  renderHeroRotationBody(currentRotationWindow());
}

// Carte "Bugs connus" : une liste de talents choisis à la main dans l'admin, chacun
// accompagné d'une note écrite pour l'occasion. L'icône garde son infobulle habituelle
// (survol / clic sur mobile), la note s'affiche à côté. La carte disparaît entièrement
// quand le héros n'a aucun bug renseigné.
// Un bug peut viser un talent (id du réservoir) ou un sort. Les sorts n'ayant pas d'id,
// ils sont désignés par "spell:<touche>", suffixé de "|<forme>" quand la touche est
// partagée entre deux formes (Valeera camouflée, D.Va à pied, etc.).
function findIssueTarget(hero, ref) {
  const id = String(ref || '');
  if (!id.startsWith('spell:')) return (hero.talentPool || []).find(p => p.id === id) || null;
  const [key, form] = id.slice(6).split('|');
  return (hero.spells || []).find(s => s.key === key &&
    (!form || (Array.isArray(s.form) ? s.form.includes(form) : s.form === form))) || null;
}

function renderKnownIssues(hero) {
  const slides = (hero.bugs || []).map(bug => {
    const cible = findIssueTarget(hero, bug.talentId);
    if (!cible) return '';             // talent ou sort retiré du héros depuis
    const note = loc(bug.note);
    if (!note) return '';              // pas de description écrite : rien à montrer
    const trigger = ftHTML({
      cls: 'talent-trigger issue-trigger floating-trigger',
      title: cible.name,
      desc: cible.description,
      demoId: cible.demoYoutubeId || cible.demoYoutubeUrl,
      inner: `<div class="talent-icon" data-fallback="${esc(initials(loc(cible.name)))}"><img src="${cible.icon||svgBadge(loc(cible.name))}" alt="${esc(loc(cible.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div>`
    });
    // Un talent se repère par son palier, un sort par sa touche.
    const repere = cible.level != null ? `${t('level')} ${esc(String(niveauAffiche(hero, cible.level)))}` : esc(uiSpellKey(cible.key) || '');
    const repereHtml = repere ? `<span class="issue-level">${repere}</span>` : '';
    return `<div class="issue-slide"><div class="issue-row">${trigger}<div class="issue-text"><div class="issue-name">${esc(loc(cible.name))}${repereHtml}</div><p class="issue-note">${esc(note)}</p></div></div></div>`;
  }).filter(Boolean);

  if (!slides.length) return '';
  // Date libre saisie dans l'admin (même convention que celle des builds) : elle dit
  // de quand date le relevé, et disparaît tant qu'elle n'est pas renseignée.
  const date = loc(hero.bugsUpdatedAt);
  const dateHtml = date ? `<span class="issues-date">${esc(date)}</span>` : '';
  // Un seul bug : pas de barre de navigation, la carte se comporte comme avant.
  const compteur = slides.length > 1 ? `<span class="issues-count">${slides.length}</span>` : '';
  const nav = slides.length > 1 ? `<div class="issues-nav">
      <button class="issues-arrow prev" type="button" aria-label="${esc(t('prevIssue'))}">&#10094;</button>
      <div class="issues-dots">${slides.map((_, i) => `<span class="issues-dot${i===0?' is-active':''}" data-dot="${i}"></span>`).join('')}</div>
      <button class="issues-arrow next" type="button" aria-label="${esc(t('nextIssue'))}">&#10095;</button>
    </div>` : '';
  const marques = slides.map((s, i) => s.replace('class="issue-slide"', `class="issue-slide${i===0?' is-active':''}" data-index="${i}"`)).join('');
  return `<section class="card issues-card"><div class="card-head">${t('knownIssues')}${compteur}${dateHtml}</div><div class="card-body"><div class="issues-carousel">${marques}${nav}</div></div></section>`;
}

// Pilote dédié : le carrousel des vidéos embarque lecture automatique et préchargement
// d'iframe, dont on n'a pas besoin ici — et ses écouteurs de survol entreraient en
// conflit avec l'infobulle du talent.
function bindIssuesCarousel(root = document) {
  root.querySelectorAll('.issues-carousel').forEach(car => {
    if (car.dataset.bound) return;
    car.dataset.bound = '1';
    const slides = [...car.querySelectorAll('.issue-slide')];
    const dots = [...car.querySelectorAll('.issues-dot')];
    if (slides.length < 2) return;
    let actif = 0;
    const allerA = i => {
      const idx = (i + slides.length) % slides.length;
      if (idx === actif) return;
      hideFloatingTooltip(true);       // l'icône visible change : on referme l'infobulle
      slides[actif].classList.remove('is-active');
      dots[actif]?.classList.remove('is-active');
      actif = idx;
      slides[actif].classList.add('is-active');
      dots[actif]?.classList.add('is-active');
    };
    car.querySelector('.issues-arrow.prev')?.addEventListener('click', () => allerA(actif - 1));
    car.querySelector('.issues-arrow.next')?.addEventListener('click', () => allerA(actif + 1));
    dots.forEach(d => d.addEventListener('click', () => allerA(Number(d.dataset.dot))));
  });
}

function renderDetail() {
  hideFloatingTooltip(true);
  const h=currentHero();
  
  // Si aucun héros n'est sélectionné, on affiche les carrousels "Dernière vidéo" / "Analyse Patchs".
  if(!h){
    els.detailView.innerHTML = renderHomeVideoSections();
    bindFloatingTriggers();
    bindComboCarousel();
    if (STREAMER_CONFIG.showHeroRotation !== false) loadHeroRotation();
    return;
  }
  
  clampBuildIndex(h);
  const forms = h.forms || [];
  let activeFormId = null;
  if (forms.length) {
    activeFormId = forms.some(f => f.id === state.formId) ? state.formId : forms[0].id;
    state.formId = activeFormId;
  } else {
    state.formId = null;
  }
  const visibleSpells = forms.length ? (h.spells||[]).filter(s => !s.form || (Array.isArray(s.form) ? s.form.includes(activeFormId) : s.form === activeFormId)) : (h.spells||[]);
  const formSwitcherHtml = forms.length ? `<div class="form-switcher">${forms.map(f => `<button type="button" class="form-switch-btn${f.id===activeFormId?' active':''}" data-form-id="${esc(f.id)}">${esc(loc(f.label))}</button>`).join('')}</div>` : '';
  // La carte des bugs occupe la 3e colonne de l'en-tête ; sans bug, l'en-tête reprend
  // sa grille à deux colonnes.
  const issuesHtml = renderKnownIssues(h);
  els.detailView.innerHTML=`<section class="hero-header${issuesHtml?' with-issues':''}"><div class="detail-portrait" data-fallback="${esc(initials(loc(h.name)))}"><img src="${h.portrait}" alt="${esc(loc(h.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div><div><h2 class="detail-title">${esc(loc(h.name))}</h2><div class="role-badge">${esc(locRole(h.role))}</div><p class="detail-headline">${esc(loc(h.headline))}</p></div>${issuesHtml}</section><section class="meta-grid"><article class="card"><div class="card-head">${t('gameplay')}</div><div class="card-body"><p>${esc(loc(h.gameplay))}</p>${formSwitcherHtml}${renderSpells(visibleSpells)}</div></article><article class="card"><div class="card-head">${t('tips')}</div><div class="card-body"><ul class="bullet-list">${(h.tips||[]).map(tip=>`<li>${esc(loc(tip))}</li>`).join('')}</ul></div></article></section><div id="buildSection"></div>`;
  renderBuildSection(h);
  bindFloatingTriggers();
  bindIssuesCarousel(els.detailView);
}
    function renderAll() { updateStaticLang(); ensureSelection(); renderHeader(); renderFilters(); renderHeroList(); renderDetail(); updateHash(); }
    // Encodage minimal : on n'échappe que ce qui casserait vraiment le fragment d'URL
    // (espace, %, & et #). Le "/" du format compact heroId/code reste tel quel :
    // encodeURIComponent triplerait inutilement la taille des caractères courants
    // dans un code de talents (+, /, =, etc.), et un lien lisible ("whitemane/T1231121")
    // est le but recherché ici. Le héros ne contenant jamais de "/", on peut découper
    // sur le premier "/" trouvé sans ambiguïté, même si le code lui-même en contient.
    function looseHashEncode(str) {
      return String(str).replace(/[%&#\s]/g, c => encodeURIComponent(c));
    }
    function updateHash() {
      const h = currentHero();
      clampBuildIndex(h);
      if (!h) { history.replaceState(null,'',location.pathname); renderFooter(); return; }
      const heroPart = looseHashEncode(state.heroId);
      // En mode « Partager mon build », c'est le code du visiteur qui part dans l'adresse :
      // la barre d'adresse reste donc partageable telle quelle, à tout moment. Tant
      // qu'il manque un palier, on ne met que le héros — un code incomplet ne vaut rien.
      if (state.custom && state.custom.heroId === h.id) {
        const codePerso = codeDepuisPicks(h, state.custom.picks);
        // Les optionnels ne s'ajoutent qu'une fois le build complet : seuls, ils
        // ne désignent rien de partageable.
        const suffixe = codePerso ? optionsVersTexte(h, state.custom.opts) : '';
        history.replaceState(null, '', codePerso
          ? `#${heroPart}/${looseHashEncode(codePerso)}${suffixe ? '/' + suffixe : ''}/`
          : `#${heroPart}/`);
        renderFooter();
        return;
      }
      const b = h.builds[state.buildIndex];
      // Le fragment se termine toujours par un « / », comme l’adresse du site.
      if (b?.buildCode) {
        history.replaceState(null,'',`#${heroPart}/${looseHashEncode(b.buildCode)}/`);
      } else {
        history.replaceState(null,'',`#${heroPart}/`);
      }
      // Le lien du pied de page emporte le fragment : il faut le réécrire chaque fois
      // que celui-ci change. Un simple changement d'onglet de build ne repasse pas par
      // renderAll(), mais il passe forcément ici — c'est le seul endroit qui écrit le
      // fragment, donc le seul endroit où le lien peut se désynchroniser.
      renderFooter();
    }
    function restoreFromHash() {
      // Le fragment se termine par un « / ». On l’enlève avant de découper :
      // sinon le code se lirait « [T…]/ », ne correspondrait à aucun build, et
      // l’onglet retomberait sur le premier. Les liens partagés avant, sans ce
      // « / », continuent de marcher : on n’en retire un que s’il y en a un.
      const raw = (location.hash || '').replace(/^#/, '').replace(/\/+$/, '');
      if (!raw) return;
      // Trois morceaux au plus : héros / code / optionnels. Le code [T…] ne contient
      // jamais de « / », la découpe est donc sûre. Les liens plus anciens n'ont que
      // les deux premiers morceaux, ou le seul héros : ils restent valables.
      const morceaux = raw.split('/');
      const decode = s => { try { return decodeURIComponent(s); } catch { return s; } };
      const heroId = decode(morceaux[0] || '');
      const code = morceaux[1] ? decode(morceaux[1]) : '';
      const optTexte = morceaux[2] || '';
      if (heroId && HEROES.some(h => h.id === heroId && h.enabled !== false)) {
        const hero = HEROES.find(h => h.id === heroId);
        state.heroId = heroId;
        if (code) {
          const bidx = (hero.builds || []).findIndex(b => b.buildCode === code);
          const picks = picksDepuisCode(hero, code);
          const optsLus = picks ? texteVersOptions(hero, optTexte) : {};
          const aDesOptions = Object.keys(optsLus).length > 0;
          // Un visiteur part souvent d'un build d'Eowea et n'y change que les
          // optionnels : le code reste alors identique au sien. Sans ce test sur
          // les optionnels, le lien retomberait sur le build d'Eowea et le travail
          // du visiteur serait perdu en silence.
          if (bidx >= 0 && !aDesOptions) {
            state.buildIndex = bidx;
            state.custom = null;
          } else if (picks) {
            // Code inconnu, ou code connu mais assorti d'optionnels : dans les deux
            // cas c'est le build d'un visiteur. On l'ouvre en vue, mis en forme comme
            // un build d'Eowea — celui qui arrive par le lien veut le lire, pas l'éditer.
            state.custom = { heroId: heroId, mode: 'vue', picks, opts: optsLus };
            state.buildIndex = firstBuildIndex(hero);
          } else {
            state.custom = null;
            state.buildIndex = bidx >= 0 ? bidx : firstBuildIndex(hero);
          }
        } else {
          state.buildIndex = firstBuildIndex(hero);
          state.custom = null;
        }
      }
    }

    function hideFloatingTooltip(imm=false) { clearTimeout(hideTooltipTimer); const r=()=>{els.tooltipPortal.innerHTML='';els.tooltipPortal.setAttribute('aria-hidden','true');activeFloatingTrigger=null;}; imm?r():(hideTooltipTimer=setTimeout(r,40)); }
    function positionTooltip(tr,tt) { if(!tr||!tt) return; const r=tr.getBoundingClientRect(),m=12,vw=innerWidth,vh=innerHeight; let l=r.left+r.width/2-tt.offsetWidth/2; l=Math.max(m,Math.min(l,vw-tt.offsetWidth-m)); let tPos=r.top-tt.offsetHeight-10,pl='top'; if(tPos<m){tPos=r.bottom+10;pl='bottom';} tPos=Math.max(m,Math.min(tPos,vh-tt.offsetHeight-m)); const a=Math.max(16,Math.min(r.left+r.width/2-l,tt.offsetWidth-16)); tt.style.left=l+'px'; tt.style.top=tPos+'px'; tt.dataset.placement=pl; tt.style.setProperty('--arrow-left',a+'px'); }
    function queueTooltipPosition() { if (!activeFloatingTrigger || tooltipRaf) return; tooltipRaf = requestAnimationFrame(() => { tooltipRaf = 0; const t = $('activeFloatingTooltip'); if (activeFloatingTrigger && t) positionTooltip(activeFloatingTrigger, t); }); }
function showFloatingTooltip(tr) { 
    if(!tr) return; 
    clearTimeout(hideTooltipTimer); 
    
    // --- NOUVEAUTÉ : On empêche le rechargement si l'infobulle est déjà active
    if (activeFloatingTrigger === tr && els.tooltipPortal.getAttribute('aria-hidden') === 'false') {
        return; 
    }
    // -------------------------------------------------------------------------

    activeFloatingTrigger=tr; 
    const title = tr.dataset.floatingTitle||'';
    const desc = tr.dataset.floatingDescription||'';
    const did = tr.dataset.floatingDemo||''; 
    
    let mediaHtml = '';
    const lowerDid = did.toLowerCase();
    const isImg = lowerDid.endsWith('.gif') || lowerDid.endsWith('.webp');
    const isVid = lowerDid.endsWith('.mp4');
    
    if (isImg) {
        // 1. Affichage pour .gif ou .webp (Balise <img>)
        mediaHtml = `<div class="floating-demo" style="margin-top:8px; background:transparent; border-radius:6px; overflow:hidden;"><img src="${did}" alt="Demo" style="display:block; width:100%; height:100%; aspect-ratio:16/9; object-fit:cover; margin:0;" /></div>`;
    } else if (isVid) {
        // 2. Affichage pour .mp4 (Balise <video>)
        mediaHtml = `<div class="floating-demo" style="margin-top:8px; background:transparent; border-radius:6px; overflow:hidden;"><video src="${did}" autoplay loop muted playsinline style="display:block; width:100%; height:100%; aspect-ratio:16/9; object-fit:cover; margin:0;"></video></div>`;
    } else if (did) {
        // 3. Affichage pour YouTube (Balise <iframe>)
        mediaHtml = `<div class="floating-demo"><iframe src="${ytMini(did)}" title="Demo" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
    }

    els.tooltipPortal.innerHTML=`<div class="floating-tooltip" id="activeFloatingTooltip"><div class="floating-tooltip-title">${title}</div><div class="floating-tooltip-body">${desc}</div>${mediaHtml}</div>`; 
    els.tooltipPortal.setAttribute('aria-hidden','false'); 
    queueTooltipPosition(); 
}
function bindFloatingTriggers(root = document) {
  const isTouchLike = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  root.querySelectorAll('.floating-trigger').forEach(t => {
    if (t.dataset.bound) return;
    t.dataset.bound = '1';

    if (!isTouchLike) {
      // PC
      t.addEventListener('mouseenter', () => showFloatingTooltip(t));
      t.addEventListener('mouseleave', () => hideFloatingTooltip());
      t.addEventListener('focus', () => showFloatingTooltip(t));
      t.addEventListener('blur', () => hideFloatingTooltip());
      
    } else {
      // Mobile / tactile
      t.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isAlreadyOpen =
          activeFloatingTrigger === t &&
          els.tooltipPortal.getAttribute('aria-hidden') === 'false';

        if (isAlreadyOpen) {
          hideFloatingTooltip(true);
        } else {
          showFloatingTooltip(t);
        }
      });
    }
  });
}
    function stopSlideMedia(slide) {
      if (!slide) return;
      const stage = slide.querySelector('.combo-stage');
      if (!stage) return;
      if (slide.dataset.videoType === 'media') {
        const v = stage.querySelector('[data-video-el]');
        if (v) { v.pause(); v.currentTime = 0; }
      } else {
        stage.classList.remove('is-playing');
        const frame = stage.querySelector('[data-frame]');
        if (frame) { frame.innerHTML = ''; delete frame.dataset.loaded; }
      }
    }
    function playSlideMedia(slide) {
      if (!slide) return;
      const stage = slide.querySelector('.combo-stage');
      if (!stage) return;
      if (slide.dataset.videoType === 'media') {
        const v = stage.querySelector('[data-video-el]');
        if (v) v.play().catch(()=>{});
      } else {
        const ref = slide.dataset.videoRef;
        if (!ref) return;
        const frame = stage.querySelector('[data-frame]');
        if (frame && !frame.dataset.loaded) {
          frame.dataset.loaded = '1';
          frame.innerHTML = `<iframe src="${ytPreview(ref)}" title="Preview" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
        }
        stage.classList.add('is-playing');
      }
    }
    function warmUpVideoFrame(slide) {
      // Sur mobile (iOS Safari en particulier), une balise <video> reste noire tant
      // qu'aucune lecture n'a été déclenchée, même avec preload="auto". On force donc
      // un tout petit play()+pause() dès que la vidéo est prête, pour peindre la
      // première image sans que l'utilisateur ait besoin de toucher l'écran.
      if (!slide || slide.dataset.videoType !== 'media') return;
      const v = slide.querySelector('[data-video-el]');
      if (!v || v.dataset.warmed) return;
      const doWarm = () => {
        if (v.dataset.warmed) return;
        v.dataset.warmed = '1';
        const p = v.play();
        if (p && typeof p.then === 'function') p.then(() => v.pause()).catch(() => {});
        else v.pause();
      };
      if (v.readyState >= 2) doWarm();
      else v.addEventListener('loadeddata', doWarm, { once: true });
    }
    function bindComboCarousel() {
      els.detailView.querySelectorAll('.combo-carousel').forEach(carousel => {
        if (carousel.dataset.bound) return;
        carousel.dataset.bound = '1';

        const slides = [...carousel.querySelectorAll('.combo-slide')];
        const dots = [...carousel.querySelectorAll('.combo-dot')];
        const prevBtn = carousel.querySelector('.combo-nav.prev');
        const nextBtn = carousel.querySelector('.combo-nav.next');
        let active = 0;

        function goTo(idx) {
          if (idx < 0) idx = slides.length - 1;
          if (idx >= slides.length) idx = 0;
          if (idx === active) return;
          stopSlideMedia(slides[active]);
          slides[active].classList.remove('is-active');
          dots[active]?.classList.remove('is-active');
          active = idx;
          slides[active].classList.add('is-active');
          dots[active]?.classList.add('is-active');
          warmUpVideoFrame(slides[active]);
        }
        prevBtn?.addEventListener('click', () => { goTo(active - 1); restartAutoAdvance(); });
        nextBtn?.addEventListener('click', () => { goTo(active + 1); restartAutoAdvance(); });
        dots.forEach(d => d.addEventListener('click', () => { goTo(Number(d.dataset.dot)); restartAutoAdvance(); }));

        slides.forEach(slide => {
          slide.addEventListener('mouseenter', () => playSlideMedia(slide));
          slide.addEventListener('mouseleave', () => stopSlideMedia(slide));
          slide.addEventListener('touchstart', () => playSlideMedia(slide), {passive:true});
          slide.addEventListener('touchend', () => stopSlideMedia(slide));
          slide.addEventListener('touchcancel', () => stopSlideMedia(slide));
        });

        warmUpVideoFrame(slides[active]);

        // Défilement automatique : uniquement pour le carrousel des vidéos guide (mise en
        // avant de créateurs), pas pour celui des vidéos de build. En pause au survol/appui,
        // et redémarre à zéro après une navigation manuelle (flèches/points).
        let autoTimer = null;
        const isGuideCarousel = !!carousel.closest('.guide-video-section');
        function startAutoAdvance() {
          if (!isGuideCarousel || slides.length <= 1) return;
          stopAutoAdvance();
          autoTimer = setInterval(() => goTo(active + 1), 7000);
        }
        function stopAutoAdvance() {
          if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
        }
        function restartAutoAdvance() { if (isGuideCarousel) startAutoAdvance(); }

        if (isGuideCarousel) {
          carousel.addEventListener('mouseenter', stopAutoAdvance);
          carousel.addEventListener('mouseleave', startAutoAdvance);
          carousel.addEventListener('touchstart', stopAutoAdvance, {passive:true});
          startAutoAdvance();

          if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
            slides.forEach(slide => {
              const link = slide.querySelector('.guide-stage-link[data-yt-id]');
              if (!link) return;
              link.addEventListener('click', (e) => {
                e.preventDefault();
                openYoutubeForceApp(link.dataset.ytId);
              });
            });
          }
        }
      });
    }

    function syncTalentBoards() {
      els.detailView.querySelectorAll('.talent-board-scroller').forEach(s => {
        const t = s.querySelector('.talent-board-track');
        if (!t) return;
        // On neutralise temporairement "min-width: 100%" (règle de base du CSS) pour mesurer
        // la vraie largeur du contenu — sinon, pour un build avec peu de talents, la mesure
        // était artificiellement gonflée à la largeur du conteneur, et le JS croyait à tort
        // que ça "remplissait" toute la largeur alors que le contenu réel était plus étroit
        // et restait collé à gauche dedans.
        t.style.width = '';
        t.style.minWidth = '0';
        t.style.marginInline = '';
        const naturalWidth = t.scrollWidth;
        const fits = naturalWidth <= s.clientWidth + 4;
        s.classList.toggle('is-centered', fits);
        if (fits) {
          // Largeur fixée explicitement en pixels (mesurée par le JS, fiable),
          // plutôt que "width: fit-content" recalculé par le CSS.
          t.style.width = naturalWidth + 'px';
          t.style.marginInline = 'auto';
          s.scrollLeft = 0;
        } else {
          t.style.minWidth = ''; // revient au comportement par défaut : occupe toute la largeur, défilable
        }
      });
    }
    function queueLayoutSync() {
      // Annule les filets de sécurité encore en attente d'un appel précédent : sinon, en cas
      // de changements de héros rapprochés (clics répétés/rapides), ils s'accumulent et
      // déclenchent des dizaines de recalculs de mise en page forcés (reflow) bien après que
      // l'utilisateur soit passé à un autre héros, ce qui provoquait un effet de
      // saccade/clignotement visible sur les icônes de talents.
      layoutSyncTimers.forEach(clearTimeout);
      layoutSyncTimers = [
        setTimeout(syncTalentBoards, 150),
        setTimeout(syncTalentBoards, 400),
        setTimeout(syncTalentBoards, 900),
      ];

      if (layoutRaf) return;
      layoutRaf = requestAnimationFrame(() => {
        layoutRaf = 0;
        // Double rAF : on laisse le navigateur terminer un cycle complet de mise en page
        // avant de mesurer (Firefox semble parfois mesurer avant d'avoir fini de stabiliser
        // la largeur des cartes de talents).
        requestAnimationFrame(syncTalentBoards);
      });
    }

    function openLightbox(ref, type='youtube') {
      // Cas fichier local (assets/....mp4, .webm, .gif, .webp)
      if (type === 'media' || isLocalMediaRef(ref)) {
        if (!ref) { els.videoOverlay.classList.add('active','error'); els.videoOverlay.classList.remove('loading'); els.videoOverlay.setAttribute('aria-hidden','false'); els.overlayStatusText.textContent=t('invalidId'); return; }
        els.videoOverlay.classList.add('active','loading'); els.videoOverlay.classList.remove('error'); els.videoOverlay.setAttribute('aria-hidden','false'); els.overlayStatusText.textContent=t('loading');
        if (els.expandedYoutube){ els.expandedYoutube.removeAttribute('src'); els.expandedYoutube.style.display='none'; }
        const mv = els.expandedMedia;
        if (!mv) return;
        mv.style.display='';
        const cl=()=>{ mv.removeEventListener('loadeddata',ok); mv.removeEventListener('error',ko); };
        const ok=()=>{ cl(); els.videoOverlay.classList.remove('loading','error'); };
        const ko=()=>{ cl(); els.videoOverlay.classList.remove('loading'); els.videoOverlay.classList.add('error'); els.overlayStatusText.textContent=t('loadError'); };
        mv.pause(); mv.removeAttribute('src'); mv.load();
        mv.addEventListener('loadeddata', ok, {once:true});
        mv.addEventListener('error', ko, {once:true});
        mv.src = ref;
        mv.play().catch(()=>{});
        return;
      }
      // Cas YouTube (comportement d'origine)
      const id=parseYouTubeId(ref); if(!id){els.videoOverlay.classList.add('active','error');els.videoOverlay.classList.remove('loading');els.videoOverlay.setAttribute('aria-hidden','false');els.overlayStatusText.textContent=t('invalidId');return;} els.videoOverlay.classList.add('active','loading');els.videoOverlay.classList.remove('error');els.videoOverlay.setAttribute('aria-hidden','false');els.overlayStatusText.textContent=t('loading');
      if (els.expandedMedia){ els.expandedMedia.pause(); els.expandedMedia.removeAttribute('src'); els.expandedMedia.style.display='none'; }
      els.expandedYoutube.style.display='';
      const cl=()=>{els.expandedYoutube.removeEventListener('load',ok);els.expandedYoutube.removeEventListener('error',ko);}; const ok=()=>{cl();els.videoOverlay.classList.remove('loading','error');}; const ko=()=>{cl();els.videoOverlay.classList.remove('loading');els.videoOverlay.classList.add('error');els.overlayStatusText.textContent=t('loadError');}; els.expandedYoutube.removeAttribute('src'); els.expandedYoutube.addEventListener('load',ok,{once:true}); els.expandedYoutube.addEventListener('error',ko,{once:true}); els.expandedYoutube.src=ytEmbed(id,true);
    }
    function closeLightbox() {
      els.videoOverlay.classList.remove('active','loading','error'); els.videoOverlay.setAttribute('aria-hidden','true');
      els.expandedYoutube.removeAttribute('src');
      if (els.expandedMedia){ els.expandedMedia.pause(); els.expandedMedia.removeAttribute('src'); els.expandedMedia.load(); els.expandedMedia.style.display='none'; }
      els.expandedYoutube.style.display='';
    }
    // Choisir un build au hasard parmi les héros activés
    function getRandomBuildData() {
      const activeHeroes = HEROES.filter(h => h.enabled !== false && h.builds && h.builds.length > 0);
      const randomHero = activeHeroes[Math.floor(Math.random() * activeHeroes.length)];
      const availableBuilds = randomHero.builds.filter(b => b.enabled !== false);
      const randomIndex = Math.floor(Math.random() * availableBuilds.length);
      return { hero: randomHero, build: availableBuilds[randomIndex], index: randomIndex };
    }

function resetHeroNavigationFilters() {
  if (typeof searchTimeout !== 'undefined') {
    clearTimeout(searchTimeout);
  }

  state.search = '';
  state.role = 'all';

  if (els.searchInput) {
    els.searchInput.value = '';
    els.searchInput.blur();
  }
}
    // Fonction pour naviguer vers le build proposé
window.goToBuild = (heroId, buildIndex) => {
  resetHeroNavigationFilters();

  state.heroId = heroId;
  state.buildIndex = buildIndex;
  state.formId = null;

  renderAll();

  requestAnimationFrame(() => {
    const detailEl = document.getElementById('detailViewWrap');
    if (!detailEl) return;

    const offset = window.innerWidth <= 640 ? 160 : 190;
    const y = detailEl.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
};

// Fonction pour scroller en douceur au niveau de la liste des héros
   function scrollToHeroes() {
     const layoutEl = document.querySelector('.layout');
     if (layoutEl) {
         // On augmente la marge de sécurité (190px sur PC, 160px sur mobile)
         const offset = window.innerWidth <= 640 ? 160 : 190;
         const y = layoutEl.getBoundingClientRect().top + window.scrollY - offset;
         
         window.scrollTo({ top: y, behavior: 'smooth' });
     }
 }

// Un timer pour éviter que la recherche ne saccade à chaque lettre frappée
    let searchTimeout;
    els.roleFilters.addEventListener('click', (e) => {
  if (e.target.closest('#retirerAuteur')) { choisirAuteur(null); return; }
  const btn = e.target.closest('[data-role]');
  if (!btn) return;

  state.role = btn.dataset.role;

  const matches = filteredHeroes();

  if (!matches.some(h => h.id === state.heroId)) {
    state.heroId = matches[0]?.id || null;
    state.buildIndex = firstBuildIndex(matches[0]);
    state.formId = null;
  }

  renderAll();
  scrollToHeroes();
});

// Active le filtre « Voir les builds de » — ou le retire, avec null. Une fiche déjà
// ouverte reste ouverte si l'auteur y a un build (ses onglets se réduisent alors aux
// siens) ; sinon on la referme, puisqu'elle n'aurait plus rien à montrer de lui.
function choisirAuteur(nom) {
  state.auteur = nom || null;
  state.custom = null;
  const h = currentHero();
  if (h) {
    if (state.auteur && !heroAUnBuildDe(h, state.auteur)) { state.heroId = null; state.buildIndex = 0; }
    else state.buildIndex = firstBuildIndex(h);
  }
  if (nom) track('auteur/' + normalize(nom).replace(/ /g, '-'), 'Builds de ' + nom);
  renderAll();
  if (nom) scrollToHeroes();
}

// Ouvre la fiche d'un héros et amène la vue dessus. Utilisé par la liste des héros
// comme par les portraits de la rotation gratuite.
function goToHero(heroId) {
    const heroObj = HEROES.find(h => h.id === heroId);
    if (!heroObj) return;

    markEverythingAsSeen(heroObj); // On valide tout d'un coup au clic

    // Un filtre de rôle ou une recherche en cours écarterait aussitôt la sélection :
    // on les lève pour que le clic aboutisse toujours.
    if (state.role !== 'all' && heroObj.role !== state.role) state.role = 'all';
    if (state.search) { state.search = ''; if (els.searchInput) els.searchInput.value = ''; }
    // Même chose pour le filtre auteur : un héros qu'il n'a pas fait (depuis la rotation
    // gratuite, par exemple) s'ouvre normalement plutôt que de rester invisible.
    if (state.auteur && !heroAUnBuildDe(heroObj, state.auteur)) state.auteur = null;

    track('heros/' + heroId, heroObj.name.fr);
    state.heroId = heroId;
    state.buildIndex = firstBuildIndex(heroObj);
    state.formId = null;
    state.custom = null;   // changer de héros sort du constructeur
    renderAll();

  setTimeout(() => {
    const detailEl = document.getElementById('detailViewWrap');
    if (!detailEl) return;

    const offset = window.innerWidth <= 640 ? 160 : 190;
    const y = detailEl.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, 0);
}

els.heroList.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-hero-id]');
    if (!btn) return;
    goToHero(btn.dataset.heroId);
});

// Les portraits de la rotation vivent dans la vue de détail : même délégation, même effet.
els.detailView.addEventListener('click', (e) => {
    const btn = e.target.closest('.rotation-hero[data-hero-id]');
    if (!btn) return;
    goToHero(btn.dataset.heroId);
});

// « Voir les builds de : » — un clic choisit l'auteur, un second clic sur le même le retire.
els.detailView.addEventListener('click', (e) => {
    const puce = e.target.closest('.auteur-puce[data-auteur]');
    if (!puce) return;
    const nom = puce.dataset.auteur;
    choisirAuteur(memeAuteur(nom, state.auteur) ? null : nom);
});
    els.searchInput.addEventListener('input', e => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        state.search = e.target.value;
        
        // --- NOUVEAUTÉ : Auto-sélection dès qu'on tape ---
        const matches = filteredHeroes();
        
        // Si la recherche n'est pas vide et qu'il y a des résultats
        if (state.search.trim() !== '' && matches.length > 0) {
          // On sélectionne le premier héros trouvé
          // (sauf si le héros actuellement sélectionné correspond déjà à la recherche)
          if (!state.heroId || !matches.some(h => h.id === state.heroId)) {
            state.heroId = matches[0].id;
            state.buildIndex = firstBuildIndex(matches[0]);
            state.formId = null;
          }
        }
        
        renderAll();
        
        // On scrolle doucement vers la fiche du héros affiché
        if (state.heroId) {
          const detailEl = document.getElementById('detailViewWrap');
          if (detailEl) {
            const offset = window.innerWidth <= 640 ? 160 : 190;
            const y = detailEl.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        } else {
          // S'il n'y a pas de résultat, on scrolle juste vers la liste vide
          scrollToHeroes();
        }
      }, 250); // Attend un quart de seconde pour fluidifier la frappe
    });

   els.detailView.addEventListener('click', (e) => {
  // --- Partager mon build ---
  if (e.target.closest('#faireMonBuild')) {
    const h = currentHero();
    if (!h) return;
    // On démarre sur le build affiché plutôt que sur un plateau vide : il y a
    // toujours quelque chose à modifier, et le code est complet dès le départ.
    const depart = (h.builds || [])[clampBuildIndex(h)];
    state.custom = {
      heroId: h.id,
      mode: 'edition',
      picks: depart ? picksDuBuild(h, depart) : {},
      opts: depart ? optsDuBuild(h, depart) : {}
    };
    renderBuildSection(h);
    updateHash();
    return;
  }
  // Passage d'un état à l'autre sur un build de visiteur.
  if (e.target.closest('#monBuildEditer') || e.target.closest('#monBuildVoir')) {
    const h = currentHero();
    if (!h || !state.custom) return;
    state.custom.mode = e.target.closest('#monBuildEditer') ? 'edition' : 'vue';
    renderBuildSection(h);
    return;
  }
  // Le bouton « optionnel » vit à l'intérieur de la carte cliquable : il doit être
  // traité avant, sinon un clic dessus changerait aussi le talent retenu.
  const bascule = e.target.closest('[data-opt-id]');
  if (bascule && state.custom) {
    const h = currentHero();
    if (!h) return;
    const p = Number(bascule.dataset.optLevel), id = bascule.dataset.optId;
    const liste = state.custom.opts[p] || [];
    if (liste.includes(id)) state.custom.opts[p] = liste.filter(x => x !== id);
    else if (liste.length < MAX_OPTIONNELS) state.custom.opts[p] = [...liste, id];
    if (!(state.custom.opts[p] || []).length) delete state.custom.opts[p];
    renderBuildSection(h);
    updateHash();
    return;
  }
  const choix = e.target.closest('[data-pick-id]');
  if (choix && state.custom) {
    const h = currentHero();
    if (!h) return;
    const p = Number(choix.dataset.pickLevel), id = choix.dataset.pickId;
    state.custom.picks[p] = id;
    // Un talent retenu ne peut pas rester dans les optionnels du même palier.
    const reste = (state.custom.opts[p] || []).filter(x => x !== id);
    if (reste.length) state.custom.opts[p] = reste; else delete state.custom.opts[p];
    renderBuildSection(h);
    updateHash();
    return;
  }
  if (e.target.closest('#monBuildReset')) {
    const h = currentHero();
    if (!h || !state.custom) return;
    state.custom.picks = {};
    state.custom.opts = {};
    renderBuildSection(h);
    updateHash();
    return;
  }
  if (e.target.closest('#monBuildQuit') || e.target.closest('#monBuildRecommandes')) {
    const h = currentHero();
    state.custom = null;
    if (h) { state.buildIndex = firstBuildIndex(h); renderBuildSection(h); }
    updateHash();
    return;
  }
  const partage = e.target.closest('#monBuildPartage[data-share-url]');
  if (partage) { copierLien(partage); return; }

  const tab = e.target.closest('[data-build-index]');
  if (tab) {
    state.buildIndex = Number(tab.dataset.buildIndex);
    const h = currentHero();
    if (h) renderBuildSection(h);
    updateHash();
    return;
  }
  const formBtn = e.target.closest('[data-form-id]');
  if (formBtn) {
    state.formId = formBtn.dataset.formId;
    renderDetail();
    return;
  }
els.detailView.addEventListener('mousedown', (e) => {
  const buildCodeBtn = e.target.closest('.build-code-box[data-build-code]');
  if (!buildCodeBtn) return;

  e.preventDefault();

  const selection = window.getSelection ? window.getSelection() : null;
  if (selection && selection.removeAllRanges) {
    selection.removeAllRanges();
  }
});

  const buildCodeBtn = e.target.closest('.build-code-box[data-build-code]');
  if (buildCodeBtn) {
    copyBuildCode(buildCodeBtn);
    return;
  }
});
    els.videoOverlay.addEventListener('click',e=>{if(e.target===els.videoOverlay||e.target===els.closeOverlayBtn) closeLightbox();});
els.langSwitcher.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;

  state.lang = btn.dataset.lang;
  localStorage.setItem('eowea_lang', state.lang);
  renderAll();
});
els.homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  state.heroId = null;
  state.formId = null;
  resetHeroNavigationFilters();
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&els.videoOverlay.classList.contains('active')) closeLightbox();});

    // Journal des changements : ouverture par la bulle, fermeture au fond, à la croix ou par Échap.
    els.siteUpdate?.addEventListener('click', e => { if (e.target.closest('#changelogBtn')) openChangelog(); });
    (() => {
      const o = document.getElementById('changelogOverlay');
      if (!o) return;
      o.addEventListener('click', e => { if (e.target === o || e.target.closest('#closeChangelogBtn')) closeChangelog(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape' && o.classList.contains('active')) closeChangelog(); });
    })();
    document.addEventListener('click', (e) => {
  if (!e.target.closest('.floating-trigger') && !e.target.closest('.floating-tooltip')) {
    hideFloatingTooltip(true);
  }
});
    window.addEventListener('resize',()=>{queueTooltipPosition();queueLayoutSync();});
    window.addEventListener('scroll', queueTooltipPosition, { passive: true, capture: true });

initAnalytics();
initNavTracking();
initVideoTracking();
initTalentTable();
restoreFromHash(); renderAll();

    // --- NOUVEAU : Auto-scroll au chargement si on arrive via un lien de partage ---
if (location.hash.includes('hero=')) {
    setTimeout(() => {
        const detailEl = document.getElementById('detailViewWrap');
        if (detailEl) {
            const offset = window.innerWidth <= 640 ? 160 : 190;
            const y = detailEl.getBoundingClientRect().top + window.scrollY - offset;
            
            // Effectue le scroll vers le héros
            window.scrollTo({ top: y, behavior: 'smooth' }); 
        }
    }, 150); 
};
document.addEventListener('click', function(e) {
    const socials = document.getElementById('socials');
    // Si on clique en dehors des réseaux, on les referme ou on les bascule
    if (!socials.contains(e.target)) {
        socials.classList.remove('active');
    }
});
// =========================================================================
// BOUTON RETOUR EN HAUT
// =========================================================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    // 1. Fait apparaître le bouton quand on descend de 300 pixels
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('is-visible');
        } else {
            backToTopBtn.classList.remove('is-visible');
        }
    }, { passive: true });

    // 2. Remonte tout en haut en douceur quand on clique dessus
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
