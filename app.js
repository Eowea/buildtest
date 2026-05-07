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
      lastUpdate: { fr: "Dernière mise à jour :", en: "Last updated:" },
      defaultBuildCodeTitle: { fr: "À COLLER DANS L'ARBRE DES TALENTS", en: "PASTE INTO TALENT TREE" },
      emptyTalents: { fr: "Aucun talent dans ce build.", en: "No talents in this build." },
      emptySelection: { fr: "Sélectionne un héros dans la liste.", en: "Select a hero from the list." },
      gameplay: { fr: "Gameplay", en: "Gameplay" },
      tips: { fr: "Conseils", en: "Tips" },
      descUnavailable: { fr: "Description indisponible.", en: "Description unavailable." },
      loading: { fr: "Chargement...", en: "Loading..." },
      invalidId: { fr: "ID YouTube invalide", en: "Invalid YouTube ID" },
      loadError: { fr: "Impossible de charger la vidéo", en: "Cannot load the video" },
      randomBuildTitle: { fr: "Proposition de build", en: "Suggested Build" },
      viewBuild: { fr: "Voir ce build", en: "View Build" },
      copySuccess: { fr: "Build copié !", en: "Build copied!" },
      copyError: { fr: "Copie impossible", en: "Copy failed" },
      copyHint: { fr: "Clique pour copier", en: "Click to copy" },
      optionalTalents: { fr: "Options", en: "Options" },
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
    const els = { siteTitle: $('siteTitle'), siteSubtitle: $('siteSubtitle'), socials: $('socials'), desktopTwitchMount: $('desktopTwitchMount'), mobileTwitchMount: $('mobileTwitchMount'), desktopTwitchCard: $('desktopTwitchCard'), toggleTwitch: $('toggleTwitch'), searchInput: $('searchInput'), resultsCount: $('resultsCount'), roleFilters: $('roleFilters'), heroList: $('heroList'), detailView: $('detailView'), tooltipPortal: $('tooltipPortal'), videoOverlay: $('videoOverlay'), closeOverlayBtn: $('closeOverlayBtn'), overlayStatusText: $('overlayStatusText'), expandedYoutube: $('expandedYoutube'), langSwitcher: $('langSwitcher') };

    /* ── Utilities ── */
    const loc = (val) => (val && typeof val === 'object' && !Array.isArray(val)) ? (val[state.lang] !== undefined ? val[state.lang] : (val['fr'] || '')) : (val || '');

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
    const ytThumb = id => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
    function ytEmbed(id,a=true) { return `https://www.youtube.com/embed/${encodeURIComponent(id)}?${new URLSearchParams({autoplay:a?'1':'0',rel:'0',modestbranding:'1',playsinline:'1'})}`; }
    function ytPreview(id) { return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${new URLSearchParams({autoplay:'1',mute:'1',controls:'0',rel:'0',modestbranding:'1',playsinline:'1',disablekb:'1',fs:'0',iv_load_policy:'3'})}`; }
    function ytMini(id) { return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${new URLSearchParams({autoplay:'1',mute:'1',controls:'0',rel:'0',modestbranding:'1',playsinline:'1',loop:'1',playlist:id,disablekb:'1',fs:'0',iv_load_policy:'3'})}`; }

    const visibleHeroes = () => HEROES.filter(h=>h.enabled!==false);
    const roles = () =>['all',...new Set(visibleHeroes().map(h=>h.role))];
    function filteredHeroes() { const q=normalize(state.search); return visibleHeroes().filter(h=>(state.role==='all'||h.role===state.role)&&(!q||normalize(loc(h.name)).includes(q))).sort((a,b)=>loc(a.name).localeCompare(loc(b.name),state.lang,{sensitivity:'base'})); }
    const currentHero = () => HEROES.find(h=>h.id===state.heroId&&h.enabled!==false)||null;
    function clampBuildIndex(h) { if(!h?.builds?.length){state.buildIndex=0;return 0;} state.buildIndex=Math.min(h.builds.length-1,Math.max(0,Number(state.buildIndex)||0)); return state.buildIndex; }
    function ensureSelection() { const l=filteredHeroes(); if(state.heroId&&(!currentHero()||!l.some(h=>h.id===state.heroId))){state.heroId=null;state.buildIndex=0;} clampBuildIndex(currentHero()); }

    function twitchFrame() { if(!STREAMER_CONFIG.twitchChannel) return ''; return `<iframe src="https://player.twitch.tv/?channel=${encodeURIComponent(STREAMER_CONFIG.twitchChannel)}&parent=${encodeURIComponent(location.hostname||'localhost')}&muted=true" allowfullscreen loading="lazy"></iframe>`; }
    // --- GESTION TWITCH & BUILD ALEATOIRE ---
function setStreamOnline() {
  $('desktopTwitchCard').style.display = 'block';
  $('randomBuildCard').classList.add('active');

  const mobileTwitchCard = $('mobileTwitchCard');
  const mobileRandomBuildCard = $('mobileRandomBuildCard');

  if (mobileTwitchCard) mobileTwitchCard.style.display = 'block';
  if (mobileRandomBuildCard) mobileRandomBuildCard.classList.add('active');

  renderRandomBuildCard();
}

function setStreamOffline() {
  $('desktopTwitchCard').style.display = 'none';
  $('randomBuildCard').classList.add('active');

  const mobileTwitchCard = $('mobileTwitchCard');
  const mobileRandomBuildCard = $('mobileRandomBuildCard');

  if (mobileTwitchCard) mobileTwitchCard.style.display = 'none';
  if (mobileRandomBuildCard) mobileRandomBuildCard.classList.add('active');

  renderRandomBuildCard();
}

function mountTwitch() {
  els.desktopTwitchMount.innerHTML = '<div id="twitch-player-desktop"></div>';

  if (els.mobileTwitchMount) {
    els.mobileTwitchMount.innerHTML = twitchFrame();
  }

  const player = new Twitch.Player('twitch-player-desktop', {
    width: '100%',
    height: 200,
    channel: STREAMER_CONFIG.twitchChannel,
    parent:[location.hostname || 'localhost'],
    muted: true,
  });

  // On fait uniquement confiance aux événements officiels de l'API
  player.addEventListener(Twitch.Player.ONLINE, setStreamOnline);
  player.addEventListener(Twitch.Player.OFFLINE, setStreamOffline);
}

    function syncTwitchUI() { els.desktopTwitchCard.classList.toggle('is-collapsed',!state.twitchOpen); els.toggleTwitch.textContent=state.twitchOpen?t('twitchClose'):t('twitchOpen'); }

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
      els.siteTitle.textContent = loc(STREAMER_CONFIG.siteTitle); 
      els.siteSubtitle.textContent = loc(STREAMER_CONFIG.siteSubtitle); 
      els.socials.innerHTML = STREAMER_CONFIG.socials.map(s=>`<a class="social-link" href="${s.url}" target="_blank" rel="noreferrer">${ICONS[s.icon]||''}<span>${s.label}</span></a>`).join(''); 
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
        // On compte uniquement les builds qui ne sont pas explicitement désactivés
        const bCount = (h.builds ||[]).filter(b => b.enabled !== false).length;
        
        return `
        <button class="hero-link${h.id===state.heroId?' active':''}" type="button" data-hero-id="${h.id}">
          <div class="portrait" data-fallback="${esc(initials(loc(h.name)))}">
            <img src="${h.portrait}" alt="${esc(loc(h.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" />
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

    function ftHTML({cls,title,desc,demoId,inner}) { return `<button class="${cls}" type="button" aria-label="${esc(loc(title))}" data-floating-title="${esc(loc(title))}" data-floating-description="${esc(loc(desc)||t('descUnavailable'))}" data-floating-demo-youtube-id="${esc(parseYouTubeId(demoId||''))}">${inner}</button>`; }
    function renderSpells(sp=[]) {
      if(!sp.length) return '';
      return `<div class="spell-strip">${sp.map(s=>`<div class="spell-item">${ftHTML({cls:'spell-trigger floating-trigger',title:s.name,desc:s.description,demoId:s.demoYoutubeId||s.demoYoutubeUrl,inner:`<div class="spell-icon" data-fallback="${esc(uiSpellKey(s.key)||initials(loc(s.name)))}"><img src="${s.icon||svgBadge(loc(s.name))}" alt="${esc(loc(s.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div>`})}<div class="spell-name">${esc(uiSpellKey(s.key)||'')}</div></div>`).join('')}</div>`;
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
    
    function hasGuide(g) { return !!parseYouTubeId(g?.youtubeId||g?.youtubeUrl||g?.url||''); }
    function renderGuide(g) { const id=parseYouTubeId(g?.youtubeId||g?.youtubeUrl||g?.url||''); if(!id) return ''; return `<section class="video-group"><button class="guide-video-card" type="button" data-youtube-id="${id}"><div class="guide-video-media"><img src="${ytThumb(id)}" alt="${esc(loc(g.title))}" loading="lazy" />${APP_CONFIG.showGuideBadge ? '<span class="youtube-badge">guide</span>' : ''}<span class="youtube-play"></span></div><div class="guide-video-content"><div class="guide-video-kicker">${t('mainVideo')}</div><div class="guide-video-title">${esc(loc(g.title)||'Guide')}</div><div class="guide-video-desc">${esc(loc(g.desc)||'')}</div><div class="guide-video-cta">${t('seeGuide')}</div></div></button></section>`; }
    
    function renderVideoCards(vs) { if(!vs?.length) return ''; return `<section class="video-group combo-video-section"><div class="combo-grid">${vs.map(v=>{const id=parseYouTubeId(v.youtubeId||v.youtubeUrl||v.url||'');const th=id?ytThumb(id):''; return `<button class="youtube-card" type="button" data-youtube-id="${id}"><div class="youtube-thumb">${th?`<img src="${th}" alt="${esc(loc(v.title))}" loading="lazy" />`:''}<div class="youtube-preview" data-preview></div><span class="youtube-badge">combo</span>${id?'<span class="youtube-play"></span>':`<div class="youtube-unavailable">${t('videoUnavailable')}</div>`}</div><div class="combo-info"><div class="combo-title">${esc(loc(v.title))}</div><div class="combo-desc">${esc(loc(v.desc))}</div></div></button>`;}).join('')}</div></section>`; }
    function renderBuildVideos(h,b) { const wg=hasGuide(h?.guideVideo); return `<section class="videos-layout${wg?' with-guide':''}">${wg?renderGuide(h.guideVideo):''}${renderVideoCards(b.videos)}</section>`; }

    function renderBuildSection(hero) { 
  const el = $('buildSection'); 
  if (!el) return; 
  
  if (!hero.builds || hero.builds.length === 0) {
    el.innerHTML = `<div class="empty-state">${t('emptyTalents')}</div>`;
    return;
  }
  
  const b = hero.builds[clampBuildIndex(hero)] || hero.builds[0]; 
  
  // NOUVEAU : On prépare le code HTML de la date (avec une petite icône calendrier)
  const dateHtml = b.updatedAt 
    ? `<div class="build-date"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${t('lastUpdate')} ${esc(loc(b.updatedAt))}</div>` 
    : '';
  
  el.innerHTML=`<div class="build-tabs">${hero.builds.map((x,i)=>`<button class="build-tab${i===state.buildIndex?' active':''}" type="button" data-build-index="${i}">${esc(loc(x.label))}</button>`).join('')}</div>${dateHtml}<div class="build-summary">${esc(loc(b.summary))}</div>${renderTalentBoard(b.talents)}${renderBuildCode(b)}${renderBuildVideos(hero,b)}`;
     bindFloatingTriggers(); 
    }

    function renderDetail() { hideFloatingTooltip(true); const h=currentHero(); if(!h){els.detailView.innerHTML=`<div class="empty-state">${t('emptySelection')}</div>`;return;} clampBuildIndex(h); els.detailView.innerHTML=`<section class="hero-header"><div class="detail-portrait" data-fallback="${esc(initials(loc(h.name)))}"><img src="${h.portrait}" alt="${esc(loc(h.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" /></div><div><h2 class="detail-title">${esc(loc(h.name))}</h2><div class="role-badge">${esc(locRole(h.role))}</div><p class="detail-headline">${esc(loc(h.headline))}</p></div></section><section class="meta-grid"><article class="card"><div class="card-head">${t('gameplay')}</div><div class="card-body"><p>${esc(loc(h.gameplay))}</p>${renderSpells(h.spells)}</div></article><article class="card"><div class="card-head">${t('tips')}</div><div class="card-body"><ul class="bullet-list">${(h.tips||[]).map(tip=>`<li>${esc(loc(tip))}</li>`).join('')}</ul></div></article></section><div id="buildSection"></div>`; renderBuildSection(h); bindFloatingTriggers(); }

    function renderAll() { updateStaticLang(); ensureSelection(); renderHeader(); renderFilters(); renderHeroList(); renderDetail(); updateHash(); }
    function updateHash() { const h=currentHero(); clampBuildIndex(h); h?history.replaceState(null,'',`#hero=${encodeURIComponent(state.heroId)}&build=${state.buildIndex}`):history.replaceState(null,'',location.pathname); }
    function restoreFromHash() { const p=new URLSearchParams(location.hash.replace(/^#/,'')); const id=p.get('hero'); if(id&&HEROES.some(h=>h.id===id&&h.enabled!==false)){state.heroId=id;state.buildIndex=Number(p.get('build')||'0');} }

    function hideFloatingTooltip(imm=false) { clearTimeout(hideTooltipTimer); const r=()=>{els.tooltipPortal.innerHTML='';els.tooltipPortal.setAttribute('aria-hidden','true');activeFloatingTrigger=null;}; imm?r():(hideTooltipTimer=setTimeout(r,40)); }
    function positionTooltip(tr,tt) { if(!tr||!tt) return; const r=tr.getBoundingClientRect(),m=12,vw=innerWidth,vh=innerHeight; let l=r.left+r.width/2-tt.offsetWidth/2; l=Math.max(m,Math.min(l,vw-tt.offsetWidth-m)); let tPos=r.top-tt.offsetHeight-10,pl='top'; if(tPos<m){tPos=r.bottom+10;pl='bottom';} tPos=Math.max(m,Math.min(tPos,vh-tt.offsetHeight-m)); const a=Math.max(16,Math.min(r.left+r.width/2-l,tt.offsetWidth-16)); tt.style.left=l+'px'; tt.style.top=tPos+'px'; tt.dataset.placement=pl; tt.style.setProperty('--arrow-left',a+'px'); }
    function queueTooltipPosition() { if (!activeFloatingTrigger || tooltipRaf) return; tooltipRaf = requestAnimationFrame(() => { tooltipRaf = 0; const t = $('activeFloatingTooltip'); if (activeFloatingTrigger && t) positionTooltip(activeFloatingTrigger, t); }); }
    function showFloatingTooltip(tr) { if(!tr) return; clearTimeout(hideTooltipTimer); activeFloatingTrigger=tr; const title=tr.dataset.floatingTitle||'',desc=tr.dataset.floatingDescription||'',did=parseYouTubeId(tr.dataset.floatingDemoYoutubeId||''); els.tooltipPortal.innerHTML=`<div class="floating-tooltip" id="activeFloatingTooltip"><div class="floating-tooltip-title">${title}</div><div class="floating-tooltip-body">${desc}</div>${did?`<div class="floating-demo"><iframe src="${ytMini(did)}" title="Demo" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`:''}</div>`; els.tooltipPortal.setAttribute('aria-hidden','false'); queueTooltipPosition(); }
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
      t.addEventListener('blur', () => hideFloatingTooltip(true));
      
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
    function startPreview(c) { if(!c||c.classList.contains('is-previewing')) return; const id=parseYouTubeId(c.dataset.youtubeId||''),h=c.querySelector('[data-preview]'); if(!id||!h) return; h.innerHTML=`<iframe src="${ytPreview(id)}" title="Preview" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>`; c.classList.add('is-previewing'); }
    function stopPreview(c) { if(!c) return; const h=c.querySelector('[data-preview]'); if(h) h.innerHTML=''; c.classList.remove('is-previewing'); }
    function bindComboVideoPreviews() { els.detailView.querySelectorAll('.combo-video-section .youtube-card').forEach(c=>{if(c.dataset.previewBound) return; c.dataset.previewBound='1'; c.addEventListener('mouseenter',()=>startPreview(c)); c.addEventListener('mouseleave',()=>stopPreview(c)); c.addEventListener('focus',()=>startPreview(c)); c.addEventListener('blur',()=>stopPreview(c));}); }

    function syncTalentBoards() { els.detailView.querySelectorAll('.talent-board-scroller').forEach(s=>{const t=s.querySelector('.talent-board-track'); if(!t) return; s.classList.remove('is-centered'); s.classList.toggle('is-centered',t.scrollWidth<=s.clientWidth+4); if(t.scrollWidth<=s.clientWidth+4) s.scrollLeft=0;}); }
    function queueLayoutSync() { if(layoutRaf) return; layoutRaf=requestAnimationFrame(()=>{layoutRaf=0;syncTalentBoards();}); }

    function openLightbox(ref) { const id=parseYouTubeId(ref); if(!id){els.videoOverlay.classList.add('active','error');els.videoOverlay.classList.remove('loading');els.videoOverlay.setAttribute('aria-hidden','false');els.overlayStatusText.textContent=t('invalidId');return;} els.videoOverlay.classList.add('active','loading');els.videoOverlay.classList.remove('error');els.videoOverlay.setAttribute('aria-hidden','false');els.overlayStatusText.textContent=t('loading'); const cl=()=>{els.expandedYoutube.removeEventListener('load',ok);els.expandedYoutube.removeEventListener('error',ko);}; const ok=()=>{cl();els.videoOverlay.classList.remove('loading','error');}; const ko=()=>{cl();els.videoOverlay.classList.remove('loading');els.videoOverlay.classList.add('error');els.overlayStatusText.textContent=t('loadError');}; els.expandedYoutube.removeAttribute('src'); els.expandedYoutube.addEventListener('load',ok,{once:true}); els.expandedYoutube.addEventListener('error',ko,{once:true}); els.expandedYoutube.src=ytEmbed(id,true); }
    function closeLightbox() { els.videoOverlay.classList.remove('active','loading','error'); els.videoOverlay.setAttribute('aria-hidden','true'); els.expandedYoutube.removeAttribute('src'); }
    // Choisir un build au hasard parmi les héros activés
    function getRandomBuildData() {
      const activeHeroes = HEROES.filter(h => h.enabled !== false && h.builds && h.builds.length > 0);
      const randomHero = activeHeroes[Math.floor(Math.random() * activeHeroes.length)];
      const availableBuilds = randomHero.builds.filter(b => b.enabled !== false);
      const randomIndex = Math.floor(Math.random() * availableBuilds.length);
      return { hero: randomHero, build: availableBuilds[randomIndex], index: randomIndex };
    }

    // Afficher le build aléatoire dans la carte
function renderRandomBuildCard() {
  if (!window.currentRandomHero) {
    const activeHeroes = HEROES.filter(h => h.enabled !== false && h.builds && h.builds.length > 0);
    if (!activeHeroes.length) return;

    window.currentRandomHero = activeHeroes[Math.floor(Math.random() * activeHeroes.length)];
    window.currentRandomBuildIdx = Math.floor(Math.random() * window.currentRandomHero.builds.length);
  }

  const hero = window.currentRandomHero;
  const bIdx = window.currentRandomBuildIdx;
  const build = hero.builds[bIdx];

const markup = `
    <div class="random-card-head">
      <span>${t('randomBuildTitle')}</span>
    </div>
    <div class="random-card-body">
      <div class="random-hero-row">
        <div class="portrait"><img src="${hero.portrait}" alt=""></div>
        <div class="random-meta">
          <div class="name">${esc(loc(hero.name))}</div>
          <div class="role">${esc(locRole(hero.role))}</div>
        </div>
      </div>
      <div class="random-build-label">${esc(loc(build.label))}</div>
      <div class="random-talents-strip">
        ${(build.talents || []).slice(0, 7).map(td => ftHTML({
          cls: 'talent-trigger floating-trigger',
          title: td.name,
          desc: td.description,
          inner: `<div class="talent-icon"><img src="${td.icon || svgBadge(loc(td.name))}"></div>`
        })).join('')}
      </div>
      <button class="btn-suggest" onclick="window.goToBuild('${hero.id}', ${bIdx})">
        ${t('viewBuild')}
      </button>
    </div>
  `;

  ['randomBuildCard', 'mobileRandomBuildCard'].forEach(id => {
    const el = $(id);
    if (el) el.innerHTML = markup;
  });

  bindFloatingTriggers();
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

    const offset = window.innerWidth <= 640 ? 120 : 160;
    const y = detailEl.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
};

// Fonction pour scroller en douceur au niveau de la liste des héros
   function scrollToHeroes() {
      const layoutEl = document.querySelector('.layout');
      if (layoutEl) {
        const y = layoutEl.getBoundingClientRect().top + window.scrollY - 130;
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
    state.buildIndex = 0;
  }

  renderAll();
  scrollToHeroes();
});

els.heroList.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-hero-id]');
  if (!btn) return;

  state.heroId = btn.dataset.heroId;
  state.buildIndex = 0;
  renderAll();

  setTimeout(() => {
    const detailEl = document.getElementById('detailViewWrap');
    if (!detailEl) return;

    const offset = window.innerWidth <= 640 ? 120 : 140;
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
            state.buildIndex = 0;
          }
        }
        
        renderAll();
        
        // On scrolle doucement vers la fiche du héros affiché
        if (state.heroId) {
          const detailEl = document.getElementById('detailViewWrap');
          if (detailEl) {
            const offset = window.innerWidth <= 640 ? 120 : 140;
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

  const yt = e.target.closest('[data-youtube-id]');
  if (yt) {
    openLightbox(yt.dataset.youtubeId);
  }
});
    els.toggleTwitch.addEventListener('click',()=>{state.twitchOpen=!state.twitchOpen;syncTwitchUI();});
    els.videoOverlay.addEventListener('click',e=>{if(e.target===els.videoOverlay||e.target===els.closeOverlayBtn) closeLightbox();});
els.langSwitcher.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;

  state.lang = btn.dataset.lang;
  localStorage.setItem('eowea_lang', state.lang);
  renderAll();

  if ($('randomBuildCard').classList.contains('active')) {
    renderRandomBuildCard();
  }
});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&els.videoOverlay.classList.contains('active')) closeLightbox();});
    document.addEventListener('click', (e) => {
  if (!e.target.closest('.floating-trigger') && !e.target.closest('.floating-tooltip')) {
    hideFloatingTooltip(true);
  }
});
    window.addEventListener('resize',()=>{queueTooltipPosition();queueLayoutSync();});
    window.addEventListener('scroll', queueTooltipPosition, { passive: true, capture: true });

    restoreFromHash(); mountTwitch(); syncTwitchUI(); renderRandomBuildCard(); renderAll();
