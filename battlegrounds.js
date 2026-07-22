/* =========================================================================
   DICTIONNAIRE MULTILINGUE (Interface) — page Cartes
   ========================================================================= */
const BG_DICT = {
  searchPlaceholder: { fr: "Rechercher une carte...", en: "Search for a map..." },
  resultsCount: { fr: "{n} résultats", en: "{n} results" },
  resultsCountSingular: { fr: "{n} résultat", en: "{n} result" },
  emptyList: { fr: "Aucune carte trouvée.", en: "No maps found." },
  bgTitle: { fr: "Cartes", en: "Battlegrounds" },
  bgNote: { fr: "Choisis une carte dans la liste, ou utilise la recherche ci-dessus.", en: "Choose a map from the list, or use the search above." },
  navHeroes: { fr: "Héros", en: "Heroes" },
  navMaps: { fr: "Cartes", en: "Battlegrounds" },
  objectives: { fr: "Objectif de la carte", en: "Map Objective" },
  tips: { fr: "Conseils", en: "Tips" },
  camps: { fr: "Camps de mercenaires", en: "Mercenary Camps" },
  guideVideos: { fr: "Vidéos guide", en: "Guide Videos" },
  minimap: { fr: "Minimap", en: "Minimap" },
  noVideosYet: { fr: "Aucune vidéo pour le moment.", en: "No videos yet." },
  selectPrompt: { fr: "Sélectionne une carte dans la liste.", en: "Select a map from the list." },
  prevVideo: { fr: "Vidéo précédente", en: "Previous video" },
  nextVideo: { fr: "Vidéo suivante", en: "Next video" },
};

/* ── Utilities (copie autonome des helpers d'app.js, page indépendante) ── */
const getInitialLangBg = () => {
  const saved = localStorage.getItem('eowea_lang');
  if (saved) return saved;
  const browserLang = navigator.language || navigator.userLanguage;
  return (browserLang && browserLang.toLowerCase().startsWith('fr')) ? 'fr' : 'en';
};

const bgState = { search: '', bgId: null, lang: getInitialLangBg() };

const $bg = id => document.getElementById(id);
const bgEls = {
  siteTitle: $bg('siteTitle'), headerNav: $bg('headerNav'), socials: $bg('socials'),
  langSwitcher: $bg('langSwitcher'), searchInput: $bg('searchInput'), resultsCount: $bg('resultsCount'),
  bgTitle: $bg('bgTitle'), bgNote: $bg('bgNote'), bgList: $bg('bgList'), detailView: $bg('detailView'),
};

const bgLoc = (val) => (val && typeof val === 'object' && !Array.isArray(val)) ? (val[bgState.lang] !== undefined ? val[bgState.lang] : (val['fr'] || '')) : (val || '');
function bgT(key, vars) {
  let s = bgLoc(BG_DICT[key]) || '';
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
}
const bgEsc = (v) => String(v||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
function bgNormalize(text) { return String(text||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }
function bgInitials(text) { return String(text||'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
function bgParseYouTubeId(i) { if(!i) return ''; const r=String(i).trim(); if(/^[a-zA-Z0-9_-]{11}$/.test(r)) return r; try { const u=new URL(r); if(u.hostname.includes('youtu.be')) return u.pathname.split('/').filter(Boolean)[0]||''; if(u.searchParams.get('v')) return u.searchParams.get('v')||''; const p=u.pathname.split('/').filter(Boolean); if(['embed','shorts','live'].includes(p[0])) return p[1]||''; } catch{} return ''; }
const bgYtThumb = id => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;

const BG_ICONS = {
  twitch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16v11l-4 4h-4l-2 2H7v-2H4V3zm2 2v9h3v3l3-3h3l3-3V5H6zm4 2h2v5h-2V7zm5 0h2v5h-2V7z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.4-5c-.2-1-.9-1.8-1.9-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.5c-1 .2-1.7 1-1.9 2C1 8.6 1 12 1 12s0 3.4.4 5c.2 1 .9 1.8 1.9 2 1.8.5 8.7.5 8.7.5s6.9 0 8.7-.5c1-.2 1.7-1 1.9-2 .4-1.6.4-5 .4-5zm-13 3.5v-7l6 3.5-6 3.5z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.6L6.4 22H3.3l7.3-8.3L1 2h6.2l4.3 6L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.335-.403.78-.553 1.125a18.27 18.27 0 0 0-5.669 0A11.18 11.18 0 0 0 9.109 3a19.736 19.736 0 0 0-4.434 1.369C1.873 8.583 1.113 12.692 1.493 16.743a19.9 19.9 0 0 0 5.43 2.757c.44-.6.833-1.233 1.172-1.897-.646-.245-1.262-.55-1.838-.907.154-.112.304-.229.45-.349 3.545 1.664 7.39 1.664 10.893 0 .148.12.298.237.45.349-.577.358-1.195.664-1.842.909.34.662.733 1.295 1.174 1.895a19.86 19.86 0 0 0 5.432-2.757c.446-4.698-.761-8.77-3.497-12.374ZM8.02 14.323c-1.058 0-1.925-.966-1.925-2.153 0-1.187.847-2.153 1.925-2.153 1.087 0 1.944.976 1.925 2.153 0 1.187-.848 2.153-1.925 2.153Zm7.96 0c-1.058 0-1.925-.966-1.925-2.153 0-1.187.847-2.153 1.925-2.153 1.087 0 1.944.976 1.925 2.153 0 1.187-.838 2.153-1.925 2.153Z"/></svg>',
  kofi: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 5H5a2 2 0 0 0-2 2v3a7 7 0 0 0 7 7h4a7 7 0 0 0 7-7V9h1a2 2 0 1 0 0-4h-4zm1 4v1a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V7h13a1 1 0 0 1 1 1v1zm2-2h-1V5h1a1 1 0 1 1 0 2z"/></svg>',
};

function bgVisible() { return BATTLEGROUNDS.filter(b => b.enabled !== false); }
function bgFiltered() {
  const q = bgNormalize(bgState.search);
  return bgVisible()
    .filter(b => !q || bgNormalize(b.name?.fr).includes(q) || bgNormalize(b.name?.en).includes(q))
    .sort((a,b) => bgLoc(a.name).localeCompare(bgLoc(b.name), bgState.lang, {sensitivity:'base'}));
}
function bgCurrent() { return BATTLEGROUNDS.find(b => b.id === bgState.bgId && b.enabled !== false) || null; }

function renderBgHeader() {
  if (STREAMER_CONFIG.logoImage) {
    bgEls.siteTitle.innerHTML = `<img class="site-logo-img" src="${bgEsc(STREAMER_CONFIG.logoImage)}" alt="${bgEsc(bgLoc(STREAMER_CONFIG.siteTitle))}" />`;
  } else {
    bgEls.siteTitle.textContent = bgLoc(STREAMER_CONFIG.siteTitle);
  }
  bgEls.socials.innerHTML = STREAMER_CONFIG.socials.map(s=>`<a class="social-link" data-network="${s.icon}" href="${s.url}" target="_blank" rel="noreferrer">${BG_ICONS[s.icon]||''}<span>${s.label}</span></a>`).join('');
  const internalLinks = `
    <a class="header-nav-link" href="index.html">${bgEsc(bgT('navHeroes'))}</a>
    <a class="header-nav-link active" href="battlegrounds.html">${bgEsc(bgT('navMaps'))}</a>
  `;
  const configLinks = (STREAMER_CONFIG.navLinks || []).filter(l => l.enabled !== false).map(l => `<a class="header-nav-link" href="${bgEsc(l.url || '#')}"${l.newTab ? ' target="_blank" rel="noreferrer"' : ''}>${bgEsc(bgLoc(l.label))}</a>`).join('');
  bgEls.headerNav.innerHTML = internalLinks + configLinks;
}

function renderBgList() {
  const list = bgFiltered();
  bgEls.resultsCount.textContent = list.length > 1 ? bgT('resultsCount', {n:list.length}) : bgT('resultsCountSingular', {n:list.length});
  if (!list.length) {
    bgEls.bgList.innerHTML = `<div class="empty-state">${bgT('emptyList')}</div>`;
    return;
  }
  bgEls.bgList.innerHTML = list.map(b => `
    <button class="hero-link${b.id===bgState.bgId?' active':''}" type="button" data-bg-id="${b.id}">
        <div class="portrait-wrapper" style="position: relative; flex-shrink: 0; display: flex;">
            <div class="portrait" data-fallback="${bgEsc(bgInitials(bgLoc(b.name)))}">
                <img src="${b.image||''}" alt="${bgEsc(bgLoc(b.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" />
            </div>
        </div>
        <div class="hero-meta">
            <div class="hero-name-row">
                <div class="hero-name">${bgEsc(bgLoc(b.name))}</div>
            </div>
        </div>
    </button>`).join('');
}

function bgBuildYoutubeCarouselMarkup(videos) {
  const slides = (videos||[])
    .map(v => ({ v, id: bgParseYouTubeId(v?.youtubeId||v?.youtubeUrl||v?.url||'') }))
    .filter(x => x.id);
  if (!slides.length) return '';
  const isTouchLike = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const linkAttrs = isTouchLike ? '' : ' target="_blank" rel="noopener noreferrer"';
  const slidesHtml = slides.map((x, idx) => `
    <div class="combo-slide${idx===0?' is-active':''}" data-index="${idx}">
      <div class="combo-slide-title">${bgEsc(bgLoc(x.v.title) || '')}</div>
      <a class="combo-stage guide-stage-link" data-yt-id="${x.id}" href="https://www.youtube.com/watch?v=${x.id}"${linkAttrs}>
        <img class="combo-poster" src="${bgYtThumb(x.id)}" alt="${bgEsc(bgLoc(x.v.title))}" loading="lazy" />
        <span class="youtube-play"></span>
      </a>
    </div>
  `).join('');
  const navHtml = slides.length > 1 ? `
    <button class="combo-nav prev" type="button" aria-label="${bgT('prevVideo')}">&#10094;</button>
    <button class="combo-nav next" type="button" aria-label="${bgT('nextVideo')}">&#10095;</button>
    <div class="combo-dots">${slides.map((_,idx)=>`<span class="combo-dot${idx===0?' is-active':''}" data-dot="${idx}"></span>`).join('')}</div>
  ` : '';
  return `<div class="combo-carousel">${slidesHtml}${navHtml}</div>`;
}

function bindBgCarousel() {
  bgEls.detailView.querySelectorAll('.combo-carousel').forEach(carousel => {
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
      slides[active].classList.remove('is-active');
      dots[active]?.classList.remove('is-active');
      active = idx;
      slides[active].classList.add('is-active');
      dots[active]?.classList.add('is-active');
    }
    prevBtn?.addEventListener('click', () => goTo(active - 1));
    nextBtn?.addEventListener('click', () => goTo(active + 1));
    dots.forEach(d => d.addEventListener('click', () => goTo(Number(d.dataset.dot))));

    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
      slides.forEach(slide => {
        const link = slide.querySelector('.guide-stage-link[data-yt-id]');
        if (!link) return;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          bgOpenYoutubeForceApp(link.dataset.ytId);
        });
      });
    }
  });
}

function bgOpenYoutubeForceApp(id) {
  const fallbackUrl = `https://www.youtube.com/watch?v=${id}`;
  const ua = navigator.userAgent || '';
  if (/Android/i.test(ua)) {
    window.location.href = `intent://www.youtube.com/watch?v=${id}#Intent;package=com.google.android.youtube;scheme=https;S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end;`;
    return;
  }
  if (/iPhone|iPad|iPod/i.test(ua)) {
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

function renderBgDetail() {
  const b = bgCurrent();
  if (!b) {
    bgEls.detailView.innerHTML = `<div class="empty-state">${bgT('selectPrompt')}</div>`;
    return;
  }
  const tipsHtml = (b.tips||[]).length
    ? `<ul class="bullet-list">${b.tips.map(tip=>`<li>${bgEsc(bgLoc(tip))}</li>`).join('')}</ul>`
    : `<p>${bgEsc(bgT('noVideosYet'))}</p>`;
  const campsHtml = (b.mercenaryCamps||[]).length
    ? `<ul class="bullet-list">${b.mercenaryCamps.map(c=>`<li><strong>${bgEsc(bgLoc(c.name))}</strong> — ${bgEsc(bgLoc(c.description))}</li>`).join('')}</ul>`
    : `<p>${bgEsc(bgT('noVideosYet'))}</p>`;
  const videoMarkup = bgBuildYoutubeCarouselMarkup(b.guideVideos);
  const videoSectionHtml = videoMarkup
    ? `<section class="guide-video-section">${videoMarkup}</section>`
    : `<div class="empty-state">${bgT('noVideosYet')}</div>`;
  const minimapHtml = b.minimapImage
    ? `<section class="bg-minimap-section">
        <div class="bg-minimap-frame"><img src="${bgEsc(b.minimapImage)}" alt="${bgEsc(bgT('minimap'))} — ${bgEsc(bgLoc(b.name))}" loading="lazy" /></div>
        <div class="bg-minimap-caption">${bgEsc(bgT('minimap'))} — ${bgEsc(bgLoc(b.name))}</div>
      </section>`
    : '';

  bgEls.detailView.innerHTML = `
    <section class="hero-header">
      <div class="detail-portrait" data-fallback="${bgEsc(bgInitials(bgLoc(b.name)))}">
        <img src="${b.image||''}" alt="${bgEsc(bgLoc(b.name))}" loading="lazy" onerror="this.parentNode.classList.add('fallback');this.remove();" />
      </div>
      <div>
        <h2 class="detail-title">${bgEsc(bgLoc(b.name))}</h2>
        <p class="detail-headline">${bgEsc(bgLoc(b.headline))}</p>
      </div>
    </section>
    ${minimapHtml}
    <section class="meta-grid">
      <article class="card">
        <div class="card-head">${bgT('objectives')}</div>
        <div class="card-body"><p>${bgEsc(bgLoc(b.objectives))}</p></div>
      </article>
      <article class="card">
        <div class="card-head">${bgT('tips')}</div>
        <div class="card-body">${tipsHtml}</div>
      </article>
    </section>
    <section class="meta-grid">
      <article class="card">
        <div class="card-head">${bgT('camps')}</div>
        <div class="card-body">${campsHtml}</div>
      </article>
      <article class="card">
        <div class="card-head">${bgT('guideVideos')}</div>
        <div class="card-body">${videoSectionHtml}</div>
      </article>
    </section>
  `;
  bindBgCarousel();
}

function renderBgAll() {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === bgState.lang));
  bgEls.searchInput.placeholder = bgT('searchPlaceholder');
  bgEls.bgTitle.textContent = bgT('bgTitle');
  bgEls.bgNote.textContent = bgT('bgNote');
  renderBgHeader();
  renderBgList();
  renderBgDetail();
}

bgEls.bgList.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-bg-id]');
  if (!btn) return;
  bgState.bgId = btn.dataset.bgId;
  renderBgAll();
});

let bgSearchTimeout;
bgEls.searchInput.addEventListener('input', (e) => {
  clearTimeout(bgSearchTimeout);
  bgSearchTimeout = setTimeout(() => {
    bgState.search = e.target.value;
    renderBgAll();
  }, 250);
});

bgEls.langSwitcher.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  bgState.lang = btn.dataset.lang;
  localStorage.setItem('eowea_lang', bgState.lang);
  renderBgAll();
});

document.addEventListener('click', function(e) {
  const socials = document.getElementById('socials');
  if (socials && !socials.contains(e.target)) {
    socials.classList.remove('active');
  }
});

const bgBackToTopBtn = document.getElementById('backToTop');
if (bgBackToTopBtn) {
  window.addEventListener('scroll', () => {
    bgBackToTopBtn.classList.toggle('is-visible', window.scrollY > 300);
  });
  bgBackToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

renderBgAll();
