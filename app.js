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
      twitchOpen: { fr: "ouvrir", en: "open" },
      twitchClose: { fr: "replier", en: "close" },
      twitchPlaceholder: { fr: "Lecteur replié.", en: "Player collapsed." },
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
      updatedBadge: { fr: "Mis à jour", en: "Updated" },
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
      twitchOpen: true,
      lang: getInitialLang() 
    };

    let activeFloatingTrigger = null, hideTooltipTimer = null, tooltipRaf = 0, layoutRaf = 0;

    const $ = id => document.getElementById(id);
    const els = { siteTitle: $('siteTitle'), headerNav: $('headerNav'), socials: $('socials'), desktopTwitchMount: $('desktopTwitchMount'), mobileTwitchMount: $('mobileTwitchMount'), desktopTwitchCard: $('desktopTwitchCard'), toggleTwitch: $('toggleTwitch'), searchInput: $('searchInput'), resultsCount: $('resultsCount'), roleFilters: $('roleFilters'), heroList: $('heroList'), detailView: $('detailView'), tooltipPortal: $('tooltipPortal'), videoOverlay: $('videoOverlay'), closeOverlayBtn: $('closeOverlayBtn'), overlayStatusText: $('overlayStatusText'), expandedYoutube: $('expandedYoutube'), expandedMedia: $('expandedMedia'), langSwitcher: $('langSwitcher'), homeBtn: $('homeBtn') };

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
    function filteredHeroes() { const q=normalize(state.search); return visibleHeroes().filter(h=>(state.role==='all'||h.role===state.role)&&(!q||normalize(loc(h.name)).includes(q))).sort((a,b)=>loc(a.name).localeCompare(loc(b.name),state.lang,{sensitivity:'base'})); }
    const currentHero = () => HEROES.find(h=>h.id===state.heroId&&h.enabled!==false)||null;
    function clampBuildIndex(h) { if(!h?.builds?.length){state.buildIndex=0;return 0;} state.buildIndex=Math.min(h.builds.length-1,Math.max(0,Number(state.buildIndex)||0)); return state.buildIndex; }
    function firstBuildIndex(h) {
      if (!h?.builds?.length) return 0;
      let bestIdx = 0, bestOrder = Infinity;
      h.builds.forEach((b, i) => { const o = b.order ?? 0; if (o < bestOrder) { bestOrder = o; bestIdx = i; } });
      return bestIdx;
    }
    function ensureSelection() { const l=filteredHeroes(); if(state.heroId&&(!currentHero()||!l.some(h=>h.id===state.heroId))){state.heroId=null;state.buildIndex=0;} clampBuildIndex(currentHero()); }

    function twitchFrame() { if(!STREAMER_CONFIG.twitchChannel) return ''; return `<iframe src="https://player.twitch.tv/?channel=${encodeURIComponent(STREAMER_CONFIG.twitchChannel)}&parent=${encodeURIComponent(location.hostname||'localhost')}&muted=true" allowfullscreen loading="lazy"></iframe>`; }


    function updateStaticLang() {
      const el = id => { const e = $(id); if (e) return e; return { textContent: '', placeholder: '' }; };
      el('heroesTitle').textContent = t('heroesTitle');
      el('heroesNote').textContent = t('heroesNote');
      els.searchInput.placeholder = t('searchPlaceholder');
      el('twitchPlaceholder1').textContent = t('twitchPlaceholder');
      el('twitchPlaceholder2').textContent = t('twitchPlaceholder');
      document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === state.lang));
    }

    function renderHeader() {
      if (STREAMER_CONFIG.logoImage) {
        els.siteTitle.innerHTML = `<img class="site-logo-img" src="${escapeHtml(STREAMER_CONFIG.logoImage)}" alt="${escapeHtml(loc(STREAMER_CONFIG.siteTitle))}" />`;
      } else {
        els.siteTitle.textContent = loc(STREAMER_CONFIG.siteTitle);
      }
      els.socials.innerHTML = STREAMER_CONFIG.socials.map(s=>`<a class="social-link" data-network="${s.icon}" href="${s.url}" target="_blank" rel="noreferrer">${ICONS[s.icon]||''}<span>${s.label}</span></a>`).join('');
      els.headerNav.innerHTML = (STREAMER_CONFIG.navLinks || []).filter(l => l.enabled !== false).map(l => `<a class="header-nav-link" href="${escapeHtml(l.url || '#')}"${l.newTab ? ' target="_blank" rel="noreferrer"' : ''}>${escapeHtml(loc(l.label))}</a>`).join('');
    }
    
    function renderFilters() { els.roleFilters.innerHTML=roles().map(r=>`<button class="filter-chip${state.role===r?' active':''}" type="button" data-role="${r}">${locRole(r)}</button>`).join(''); }
    function renderHeroList() {
    const hList = filteredHeroes();
    els.resultsCount.textContent = hList.length > 1 ? t('resultsCount', {n:hList.length}) : t('resultsCountSingular', {n:hList.length});
    
    if(!hList.length){
        els.heroList.innerHTML=`<div class="empty-state">${t('emptyHeroList')}</div>`;
        return;
    }

    els.heroList.innerHTML = hList.map(h => {
        const bCount = (h.builds || []).filter(b => b.enabled !== false).length;
        
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
      return { ...primary, alternatives };
    }).filter(Boolean);
  }
  // Ancien format (rétrocompatibilité) : les talents sont écrits en entier dans le build.
  return Array.isArray(build.talents) ? build.talents : [];
}
function renderTalentBoard(ts=[]) { 
      if(!ts.length) return `<div class="empty-state">${t('emptyTalents')}</div>`; 
      
      return `<section class="talent-board-wrap"><div class="talent-board-scroller"><div class="talent-board-track">${ts.map(tData => {
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

        return `<article class="talent-card"><div class="talent-level">${t('level')} ${esc(String(tData.level))}</div>${ftHTML({cls:'talent-trigger floating-trigger',title:tData.name,desc:tData.description,demoId:tData.demoYoutubeId||tData.demoYoutubeUrl,inner:`<div class="talent-icon" data-fallback="${esc(initials(loc(tData.name)))}"><img src="${tData.icon||svgBadge(loc(tData.name))}" alt="${esc(loc(tData.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div>`})}<div class="talent-title-card">${esc(loc(tData.name))}</div>${altHtml}</article>`;
      }).join('')}</div></div></section>`; 
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

  try {
    await navigator.clipboard.writeText(buildCode);
    setFeedback('copySuccess', false);
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
function buildYoutubeCarouselMarkup(videos) {
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
      <a class="combo-stage guide-stage-link" data-yt-id="${x.id}" href="https://www.youtube.com/watch?v=${x.id}"${linkAttrs}>
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
  const markup = buildYoutubeCarouselMarkup(getGuideVideos(h));
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

function renderBuildSection(hero) { 
  const el = $('buildSection'); 
  if (!el) return; 
  
  if (!hero.builds || hero.builds.length === 0) {
    el.innerHTML = `<div class="empty-state">${t('emptyTalents')}</div>`;
    return;
  }
  
  const b = hero.builds[clampBuildIndex(hero)] || hero.builds[0]; 
  
  // --- MODIFICATION ICI ---
  // On ajoute une vérification "x.isNew" sur chaque build dans le .map()
const sortedBuildIndices = hero.builds.map((_, i) => i).sort((a, b) => (hero.builds[a].order ?? 0) - (hero.builds[b].order ?? 0));
const tabsHtml = sortedBuildIndices.map(i => {
    const x = hero.builds[i];
    const newBadge = x.isNew ? `<span class="new-badge">${t('newBadge')}</span>` : '';
    
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

  const dateHtml = b.updatedAt 
    ? `<div class="build-date"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${t('lastUpdate')} ${esc(loc(b.updatedAt))}</div>` 
    : '';
  
  el.innerHTML=`<div class="build-tabs">${tabsHtml}</div>${dateHtml}<div class="build-summary">${esc(loc(b.summary))}</div>${renderTalentBoard(resolveBuildTalents(hero,b))}${renderBuildCode(b)}${renderBuildVideos(hero,b)}`;
  bindFloatingTriggers();
  bindComboCarousel();
  queueLayoutSync();
}

function renderHomeVideoSections() {
  const latestMarkup = buildYoutubeCarouselMarkup(STREAMER_CONFIG.latestVideos || []);
  const patchMarkup = buildYoutubeCarouselMarkup(STREAMER_CONFIG.patchVideos || []);

  const col = (titleKey, markup) => `
    <div class="video-group">
      <h2 class="section-title" style="text-align:center;margin-bottom:16px;">${t(titleKey)}</h2>
      ${markup ? `<section class="guide-video-section">${markup}</section>` : `<div class="empty-state">${t('noVideosYet')}</div>`}
    </div>`;

  return `<div class="videos-layout with-guide">${col('latestVideoTitle', latestMarkup)}${col('patchAnalysisTitle', patchMarkup)}</div>`;
}

function renderDetail() { 
  hideFloatingTooltip(true); 
  const h=currentHero(); 
  
  // Si aucun héros n'est sélectionné, on affiche les carrousels "Dernière vidéo" / "Analyse Patchs".
  if(!h){
    els.detailView.innerHTML = renderHomeVideoSections();
    bindFloatingTriggers();
    bindComboCarousel();
    return;
  }
  
  clampBuildIndex(h); 
  els.detailView.innerHTML=`<section class="hero-header"><div class="detail-portrait" data-fallback="${esc(initials(loc(h.name)))}"><img src="${h.portrait}" alt="${esc(loc(h.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div><div><h2 class="detail-title">${esc(loc(h.name))}</h2><div class="role-badge">${esc(locRole(h.role))}</div><p class="detail-headline">${esc(loc(h.headline))}</p></div></section><section class="meta-grid"><article class="card"><div class="card-head">${t('gameplay')}</div><div class="card-body"><p>${esc(loc(h.gameplay))}</p>${renderSpells(h.spells)}</div></article><article class="card"><div class="card-head">${t('tips')}</div><div class="card-body"><ul class="bullet-list">${(h.tips||[]).map(tip=>`<li>${esc(loc(tip))}</li>`).join('')}</ul></div></article></section><div id="buildSection"></div>`; 
  renderBuildSection(h); 
  bindFloatingTriggers(); 
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
      if (!h) { history.replaceState(null,'',location.pathname); return; }
      const b = h.builds[state.buildIndex];
      const heroPart = looseHashEncode(state.heroId);
      if (b?.buildCode) {
        history.replaceState(null,'',`#${heroPart}/${looseHashEncode(b.buildCode)}`);
      } else {
        history.replaceState(null,'',`#${heroPart}`);
      }
    }
    function restoreFromHash() {
      const raw = (location.hash || '').replace(/^#/, '');
      if (!raw) return;
      const slashIdx = raw.indexOf('/');
      let heroId, code = '';
      if (slashIdx >= 0) {
        heroId = decodeURIComponent(raw.slice(0, slashIdx));
        code = decodeURIComponent(raw.slice(slashIdx + 1));
      } else {
        heroId = decodeURIComponent(raw);
      }
      if (heroId && HEROES.some(h => h.id === heroId && h.enabled !== false)) {
        const hero = HEROES.find(h => h.id === heroId);
        state.heroId = heroId;
        if (code) {
          const bidx = hero.builds.findIndex(b => b.buildCode === code);
          state.buildIndex = bidx >= 0 ? bidx : firstBuildIndex(hero);
        } else {
          state.buildIndex = firstBuildIndex(hero);
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
      if (layoutRaf) return;
      layoutRaf = requestAnimationFrame(() => {
        layoutRaf = 0;
        // Double rAF : on laisse le navigateur terminer un cycle complet de mise en page
        // avant de mesurer (Firefox semble parfois mesurer avant d'avoir fini de stabiliser
        // la largeur des cartes de talents).
        requestAnimationFrame(syncTalentBoards);
      });
      // Filets de sécurité supplémentaires : si quelque chose (police web, icônes) fait
      // encore bouger la mise en page un peu plus tard, on revérifie plusieurs fois.
      setTimeout(syncTalentBoards, 150);
      setTimeout(syncTalentBoards, 400);
      setTimeout(syncTalentBoards, 900);
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
  const btn = e.target.closest('[data-role]');
  if (!btn) return;

  state.role = btn.dataset.role;

  const matches = filteredHeroes();

  if (!matches.some(h => h.id === state.heroId)) {
    state.heroId = matches[0]?.id || null;
    state.buildIndex = firstBuildIndex(matches[0]);
  }

  renderAll();
  scrollToHeroes();
});

els.heroList.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-hero-id]');
    if (!btn) return;

    const heroId = btn.dataset.heroId;
    const heroObj = HEROES.find(h => h.id === heroId);

    if (heroObj) {
        markEverythingAsSeen(heroObj); // On valide tout d'un coup au clic
    }

    state.heroId = heroId;
    state.buildIndex = firstBuildIndex(heroObj);
    renderAll(); //

  setTimeout(() => {
    const detailEl = document.getElementById('detailViewWrap');
    if (!detailEl) return;

    const offset = window.innerWidth <= 640 ? 160 : 190;
    const y = detailEl.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, 0);
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
  const tab = e.target.closest('[data-build-index]');
  if (tab) {
    state.buildIndex = Number(tab.dataset.buildIndex);
    const h = currentHero();
    if (h) renderBuildSection(h);
    updateHash();
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
  resetHeroNavigationFilters();
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&els.videoOverlay.classList.contains('active')) closeLightbox();});
    document.addEventListener('click', (e) => {
  if (!e.target.closest('.floating-trigger') && !e.target.closest('.floating-tooltip')) {
    hideFloatingTooltip(true);
  }
});
    window.addEventListener('resize',()=>{queueTooltipPosition();queueLayoutSync();});
    window.addEventListener('scroll', queueTooltipPosition, { passive: true, capture: true });

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
