/* =========================================================================
   PAGE CONTACT
   Page indépendante : elle ne charge pas app.js, donc elle refait ses propres
   helpers, comme battlegrounds.js. La langue est partagée avec les autres
   pages par la clé localStorage 'eowea_lang'.
   ========================================================================= */
const CT_DICT = {
  siteUpdateLabel: { fr: "Mise à jour", en: "Update" },
  pageTitle: { fr: "Contact", en: "Contact" },
  intro: {
    fr: "Une erreur dans un build, un talent mal décrit, une icône qui ne correspond pas, un code qui ne donne pas le bon build en jeu ? Dis-le moi : c'est comme ça que le site se corrige. Et si tu as une question ou une remarque, c'est le même endroit.",
    en: "A mistake in a build, a badly worded talent, an icon that doesn't match, a code that doesn't give the right build in game? Tell me: that's how the site gets fixed. And if you just have a question or a remark, same place."
  },
  discordLabel: { fr: "Discord", en: "Discord" },
  discordHint: {
    fr: "C'est là que je réponds le plus vite. Écris-moi directement, ou passe par le serveur.",
    en: "This is where I answer fastest. Message me directly, or drop by the server."
  },
  discordServer: { fr: "Rejoindre le serveur", en: "Join the server" },
  mailLabel: { fr: "E-mail", en: "Email" },
  mailHint: {
    fr: "Pour les messages plus longs, ou si tu n'es pas sur Discord.",
    en: "For longer messages, or if you're not on Discord."
  },
  reportTitle: { fr: "Remonter un problème", en: "Reporting a problem" },
  reportIntro: {
    fr: "Pour que je puisse corriger vite, le plus utile à me donner :",
    en: "To let me fix it quickly, the most useful things to give me:"
  },
  report1: { fr: "Le héros et le build concernés.", en: "Which hero and which build." },
  report2: { fr: "Ce qui cloche : un talent, une description, une icône, un code, un conseil.", en: "What is wrong: a talent, a description, an icon, a code, a tip." },
  report3: { fr: "Ce que le jeu affiche de son côté, si tu l'as sous les yeux.", en: "What the game shows on its side, if you have it in front of you." },
  socialsTitle: { fr: "Où me trouver", en: "Where to find me" },
  socialsIntro: {
    fr: "Je suis joignable sur tous ces réseaux, choisis celui que tu préfères.",
    en: "You can reach me on any of these, whichever you prefer."
  },
};

/* ── Utilities (copie autonome des helpers d'app.js, page indépendante) ── */
const getInitialLangCt = () => {
  const saved = localStorage.getItem('eowea_lang');
  if (saved) return saved;
  const browserLang = navigator.language || navigator.userLanguage;
  return (browserLang && browserLang.toLowerCase().startsWith('fr')) ? 'fr' : 'en';
};

const ctState = { lang: getInitialLangCt() };

const $ct = id => document.getElementById(id);
const ctEls = {
  siteTitle: $ct('siteTitle'), headerNav: $ct('headerNav'), socials: $ct('socials'),
  siteUpdate: $ct('siteUpdate'), langSwitcher: $ct('langSwitcher'), contactView: $ct('contactView'),
};

const ctLoc = (val) => (val && typeof val === 'object' && !Array.isArray(val)) ? (val[ctState.lang] !== undefined ? val[ctState.lang] : (val['fr'] || '')) : (val || '');
const ctT = (key) => ctLoc(CT_DICT[key]) || '';
const ctEsc = (v) => String(v||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
function ctNormalize(text) { return String(text||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }
// Même règle que navSlug() dans app.js : un lien doit produire le même identifiant
// sur toutes les pages, sinon ses clics seraient comptés deux fois.
function ctNavSlug(lien) {
  const brut = (lien && lien.label && lien.label.fr) || (lien && lien.label && lien.label.en) || (lien && lien.url) || 'lien';
  return ctNormalize(brut).replace(/ /g, '-') || 'lien';
}

const CT_ICONS = {
  twitch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16v11l-4 4h-4l-2 2H7v-2H4V3zm2 2v9h3v3l3-3h3l3-3V5H6zm4 2h2v5h-2V7zm5 0h2v5h-2V7z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.4-5c-.2-1-.9-1.8-1.9-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.5c-1 .2-1.7 1-1.9 2C1 8.6 1 12 1 12s0 3.4.4 5c.2 1 .9 1.8 1.9 2 1.8.5 8.7.5 8.7.5s6.9 0 8.7-.5c1-.2 1.7-1 1.9-2 .4-1.6.4-5 .4-5zm-13 3.5v-7l6 3.5-6 3.5z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.6L6.4 22H3.3l7.3-8.3L1 2h6.2l4.3 6L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.335-.403.78-.553 1.125a18.27 18.27 0 0 0-5.669 0A11.18 11.18 0 0 0 9.109 3a19.736 19.736 0 0 0-4.434 1.369C1.873 8.583 1.113 12.692 1.493 16.743a19.9 19.9 0 0 0 5.43 2.757c.44-.6.833-1.233 1.172-1.897-.646-.245-1.262-.55-1.838-.907.154-.112.304-.229.45-.349 3.545 1.664 7.39 1.664 10.893 0 .148.12.298.237.45.349-.577.358-1.195.664-1.842.909.34.662.733 1.295 1.174 1.895a19.86 19.86 0 0 0 5.432-2.757c.446-4.698-.761-8.77-3.497-12.374ZM8.02 14.323c-1.058 0-1.925-.966-1.925-2.153 0-1.187.847-2.153 1.925-2.153 1.087 0 1.944.976 1.925 2.153 0 1.187-.848 2.153-1.925 2.153Zm7.96 0c-1.058 0-1.925-.966-1.925-2.153 0-1.187.847-2.153 1.925-2.153 1.087 0 1.944.976 1.925 2.153 0 1.187-.838 2.153-1.925 2.153Z"/></svg>',
  kofi: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 5H5a2 2 0 0 0-2 2v3a7 7 0 0 0 7 7h4a7 7 0 0 0 7-7V9h1a2 2 0 1 0 0-4h-4zm1 4v1a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V7h13a1 1 0 0 1 1 1v1zm2-2h-1V5h1a1 1 0 1 1 0 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
};

/* ── Coordonnées ──
   Le pseudo et l'adresse sont écrits ici : ce sont les seules données de la page
   qui ne viennent pas de data.js. L'invitation Discord, elle, est reprise des
   réseaux configurés pour qu'un changement de lien n'ait à se faire qu'à un endroit. */
const CT_DISCORD_PSEUDO = 'Eowea';
const CT_MAIL = 'eowea.contact@gmail.com';
const ctDiscordInvite = () =>
  ((STREAMER_CONFIG.socials || []).find(s => s.icon === 'discord') || {}).url || '';

function renderCtHeader() {
  if (STREAMER_CONFIG.logoImage) {
    ctEls.siteTitle.innerHTML = `<img class="site-logo-img" src="${ctEsc(STREAMER_CONFIG.logoImage)}" alt="${ctEsc(ctLoc(STREAMER_CONFIG.siteTitle))}" />`;
  } else {
    ctEls.siteTitle.textContent = ctLoc(STREAMER_CONFIG.siteTitle);
  }
  ctEls.socials.innerHTML = (STREAMER_CONFIG.socials || []).map(s =>
    `<a class="social-link" data-network="${ctEsc(s.icon)}" href="${ctEsc(s.url)}" target="_blank" rel="noreferrer">${CT_ICONS[s.icon]||''}<span>${ctEsc(s.label)}</span></a>`).join('');
  ctEls.headerNav.innerHTML = (STREAMER_CONFIG.navLinks || [])
    .filter(l => l.enabled !== false)
    .map(l => `<a class="header-nav-link" href="${ctEsc(l.url || '#')}" data-nav-id="${ctEsc(ctNavSlug(l))}"${l.newTab ? ' target="_blank" rel="noreferrer"' : ''}>${ctEsc(ctLoc(l.label))}</a>`)
    .join('');
  renderCtSiteUpdate();
}

// Bandeau "Mise à jour du site", identique aux autres pages (même donnée partagée).
function renderCtSiteUpdate() {
  if (!ctEls.siteUpdate) return;
  const u = STREAMER_CONFIG.siteUpdate || {};
  const date = u.enabled === false ? '' : ctLoc(u.date);
  if (!date) { ctEls.siteUpdate.innerHTML = ''; ctEls.siteUpdate.hidden = true; return; }
  ctEls.siteUpdate.hidden = false;
  ctEls.siteUpdate.innerHTML = `<span class="site-update-label">${ctT('siteUpdateLabel')}</span>`
    + `<span class="site-update-date">${ctEsc(date)}</span>`;
}

function renderContact() {
  const invite = ctDiscordInvite();
  const lienServeur = invite
    ? `<div class="contact-card-hint"><a href="${ctEsc(invite)}" target="_blank" rel="noreferrer">${ctT('discordServer')}</a></div>`
    : '';

  const cartes = [
    { icone: 'discord', label: ctT('discordLabel'),
      valeur: `<span class="contact-value">${ctEsc(CT_DISCORD_PSEUDO)}</span>`,
      hint: ctT('discordHint'), extra: lienServeur },
    { icone: 'mail', label: ctT('mailLabel'),
      valeur: `<a class="contact-value" href="mailto:${ctEsc(CT_MAIL)}">${ctEsc(CT_MAIL)}</a>`,
      hint: ctT('mailHint'), extra: '' },
  ].map(c =>
    `<div class="contact-card">`
      + `<div class="contact-card-icon" aria-hidden="true">${CT_ICONS[c.icone]||''}</div>`
      + `<div class="contact-card-body">`
        + `<div class="contact-card-label">${ctEsc(c.label)}</div>`
        + c.valeur
        + `<div class="contact-card-hint">${ctEsc(c.hint)}</div>`
        + c.extra
      + `</div>`
    + `</div>`).join('');

  const reseaux = (STREAMER_CONFIG.socials || []).map(s =>
    `<a class="contact-social" href="${ctEsc(s.url)}" target="_blank" rel="noreferrer">${CT_ICONS[s.icon]||''}<span>${ctEsc(s.label)}</span></a>`).join('');

  ctEls.contactView.innerHTML =
      `<h2 class="section-title">${ctEsc(ctT('pageTitle'))}</h2>`
    + `<p class="contact-intro">${ctEsc(ctT('intro'))}</p>`
    + `<div class="contact-grid">${cartes}</div>`
    + `<h2 class="section-title">${ctEsc(ctT('reportTitle'))}</h2>`
    + `<p class="contact-intro">${ctEsc(ctT('reportIntro'))}</p>`
    + `<ul class="bullet-list" style="margin-bottom:26px;">`
      + `<li>${ctEsc(ctT('report1'))}</li>`
      + `<li>${ctEsc(ctT('report2'))}</li>`
      + `<li>${ctEsc(ctT('report3'))}</li>`
    + `</ul>`
    + `<h2 class="section-title">${ctEsc(ctT('socialsTitle'))}</h2>`
    + `<p class="contact-intro">${ctEsc(ctT('socialsIntro'))}</p>`
    + `<div class="contact-socials">${reseaux}</div>`;
}

function renderCtAll() {
  document.documentElement.lang = ctState.lang;
  renderCtHeader();
  renderContact();
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === ctState.lang));
}

ctEls.langSwitcher.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  ctState.lang = btn.dataset.lang;
  localStorage.setItem('eowea_lang', ctState.lang);
  renderCtAll();
});

document.addEventListener('click', function(e) {
  const socials = document.getElementById('socials');
  if (socials && !socials.contains(e.target)) {
    socials.classList.remove('active');
  }
});

const ctBackToTopBtn = document.getElementById('backToTop');
if (ctBackToTopBtn) {
  window.addEventListener('scroll', () => {
    ctBackToTopBtn.classList.toggle('is-visible', window.scrollY > 300);
  });
  ctBackToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

renderCtAll();
