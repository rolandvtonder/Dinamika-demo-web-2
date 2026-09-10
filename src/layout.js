// Page shell: <head>, top bar, header with crest pennant, main navigation, mobile drawer, footer.
import { esc, plain } from './lib/util.js';
import { icon } from './icons.js';
import { SCHOOL, SITE_URL, UI, byId, childrenOf, trail, TOP_NAV, LANGS, fileFor } from './site.js';

const YEAR = new Date().getFullYear();

const LANG_LABEL = { af: 'AF', en: 'ENG' };

function langSwitch(ctx, cls = '') {
  const target = byId[ctx.page.id] ? ctx.page.id : 'home';
  return `<div class="lang-switch${cls ? ` ${cls}` : ''}" role="group" aria-label="${UI.language[ctx.lang]} / Language">${LANGS.map((l) => {
    const cur = l === ctx.lang;
    return `<a class="lang-switch__link${cur ? ' is-current' : ''}" href="${ctx.href(target, l)}" hreflang="${l}" lang="${l}"${cur ? ' aria-current="true"' : ''}><span aria-hidden="true">${LANG_LABEL[l]}</span><span class="sr-only">${l === 'af' ? 'Afrikaans' : 'English'}</span></a>`;
  }).join('')}</div>`;
}

const social = (ctx, cls = '') => `<ul class="social${cls ? ` ${cls}` : ''}">
  <li><a href="${SCHOOL.facebook}" target="_blank" rel="noopener" aria-label="Facebook ${UI.newTab[ctx.lang]}">${icon('facebook', { size: 18 })}</a></li>
  <li><a href="${SCHOOL.instagram}" target="_blank" rel="noopener" aria-label="Instagram ${UI.newTab[ctx.lang]}">${icon('instagram', { size: 18 })}</a></li>
</ul>`;

// Top-level item + its dropdown entries ("Overview" first, then children).
function menuItems(ctx, id) {
  const p = byId[id];
  const kids = id === 'home' ? [] : childrenOf(id);
  const items = kids.length ? [{ id, label: (p.menu || UI.overview)[ctx.lang], overview: true }, ...kids.map((k) => ({ id: k.id, label: k.title[ctx.lang] }))] : [];
  return { label: (p.nav || p.title)[ctx.lang], items };
}

const curAttr = (ctx, id) => (ctx.page.id === id ? ' aria-current="page"' : '');

function desktopNav(ctx, activeTop) {
  return TOP_NAV.map((id) => {
    const { label, items } = menuItems(ctx, id);
    const active = id === activeTop ? ' is-active' : '';
    const link = `<a class="mainnav__link" href="${ctx.href(id)}"${curAttr(ctx, id)}>${label}</a>`;
    if (!items.length) return `<li class="mainnav__item${active}">${link}</li>`;
    return `<li class="mainnav__item has-sub${active}">${link}<button class="mainnav__toggle" type="button" aria-expanded="false" aria-controls="sub-${id}"><span class="sr-only">${UI.submenu[ctx.lang]} ${label}</span>${icon('chevron-down', { size: 16 })}</button>
      <div class="mainnav__panel${items.length > 8 ? ' mainnav__panel--wide' : ''}" id="sub-${id}"><ul class="mainnav__sub">${items
        .map((i) => `<li${i.overview ? ' class="is-overview"' : ''}><a href="${ctx.href(i.id)}"${curAttr(ctx, i.id)}>${i.label}</a></li>`).join('')}</ul></div></li>`;
  }).join('');
}

function drawerNav(ctx, activeTop) {
  return TOP_NAV.map((id) => {
    const { label, items } = menuItems(ctx, id);
    if (!items.length) return `<li><a href="${ctx.href(id)}"${curAttr(ctx, id)}>${label}</a></li>`;
    return `<li><details${id === activeTop ? ' open' : ''}><summary>${label}${icon('chevron-down', { size: 18 })}</summary><ul>${items
      .map((i) => `<li><a href="${ctx.href(i.id)}"${curAttr(ctx, i.id)}>${i.label}</a></li>`).join('')}</ul></details></li>`;
  }).join('');
}

const crest = (ctx, cls = '') => `<img class="${cls}" src="${ctx.asset('img/brand/wapen.webp')}" alt="" width="400" height="415" decoding="async">`;

function head(ctx, out) {
  const { lang, page } = ctx;
  const real = Boolean(byId[page.id]);
  const title = page.id === 'home'
    ? `${SCHOOL.name} | ${ctx.L('Reik na die Lig · Alberton', 'Reach for the Light · Alberton')}`
    : `${page.title[lang]} | ${SCHOOL.name}`;
  const desc = esc(plain(out.desc || ''));
  const url = (l) => `${SITE_URL}/${fileFor(page.id, l)}`;
  const ogImage = `${SITE_URL}/assets/img/${out.image || 'photos/leerderleiers.jpg'}`;
  const ld = page.id === 'home' ? `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'HighSchool', name: SCHOOL.name, url: SITE_URL,
    logo: `${SITE_URL}/assets/img/brand/wapen-512.png`, telephone: '+27118675986', email: SCHOOL.email,
    address: { '@type': 'PostalAddress', streetAddress: SCHOOL.street, addressLocality: `${SCHOOL.suburb}, ${SCHOOL.city}`, postalCode: SCHOOL.code, addressRegion: 'Gauteng', addressCountry: 'ZA' },
    sameAs: [SCHOOL.facebook, SCHOOL.instagram],
  })}</script>` : '';
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${desc}">
${real ? `<link rel="canonical" href="${url(lang)}">
${LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${url(l)}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${url('af')}">` : '<meta name="robots" content="noindex">'}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SCHOOL.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${ogImage}">
<meta property="og:locale" content="${lang === 'af' ? 'af_ZA' : 'en_ZA'}">
${real ? `<meta property="og:url" content="${url(lang)}">` : ''}
<meta name="theme-color" content="#0F1D40">
<link rel="icon" type="image/png" sizes="32x32" href="${ctx.asset('img/brand/wapen-32.png')}">
<link rel="apple-touch-icon" href="${ctx.asset('img/brand/wapen-180.png')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Questrial&display=swap">
<link rel="stylesheet" href="${ctx.asset('css/site.css')}">
<script>document.documentElement.classList.replace('no-js','js')</script>
${ld}
</head>`;
}

export function renderLayout(ctx, out) {
  const { lang, page, L } = ctx;
  const t = byId[page.id] ? trail(page.id) : [byId.home];
  const activeTop = t.length > 1 ? t[1].id : 'home';
  const apply = ctx.href('applications');
  const home = ctx.href('home');

  return `<!doctype html>
<html lang="${lang}" class="no-js">
${head(ctx, out)}
<body class="page-${page.id}">
<a class="skip-link" href="#main">${UI.skip[lang]}</a>

<div class="topbar">
  <div class="container topbar__inner">
    <ul class="topbar__contact">
      <li><a href="${SCHOOL.phoneHref}">${icon('phone', { size: 16 })}<span>${SCHOOL.phone}</span></a></li>
      <li class="topbar__email"><a href="mailto:${SCHOOL.email}">${icon('mail', { size: 16 })}<span>${SCHOOL.email}</span></a></li>
      <li class="topbar__hours">${icon('clock', { size: 16 })}<span>${SCHOOL.hours[lang]}</span></li>
    </ul>
    <div class="topbar__end">${social(ctx)}${langSwitch(ctx)}</div>
  </div>
</div>

<header class="site-header">
  <div class="container site-header__inner">
    <a class="brand" href="${home}">
      <span class="brand__crest" aria-hidden="true"><span class="brand__pennant"><span class="brand__plate">${crest(ctx)}</span></span></span>
      <span class="brand__text"><span class="brand__kicker">Hoërskool</span><span class="brand__name">Dinamika</span><span class="brand__motto">${SCHOOL.motto}</span></span>
      <span class="sr-only"> — ${byId.home.title[lang]}</span>
    </a>
    <div class="site-header__actions">
      <a class="btn btn--primary btn--header" href="${apply}"><span>${UI.apply[lang]}</span>${icon('arrow-right', { size: 18, cls: 'btn__end' })}</a>
      <button class="menu-btn" type="button" aria-controls="drawer" aria-expanded="false">${icon('menu', { size: 24 })}<span>${UI.menu[lang]}</span></button>
    </div>
  </div>
</header>

<div class="nav-sentinel" aria-hidden="true"></div>
<nav class="mainnav" aria-label="${UI.mainNav[lang]}">
  <div class="container mainnav__inner">
    <a class="mainnav__mini" href="${home}" tabindex="-1" aria-hidden="true">${crest(ctx)}</a>
    <ul class="mainnav__list">${desktopNav(ctx, activeTop)}</ul>
  </div>
</nav>

<dialog class="drawer" id="drawer" aria-label="${UI.menu[lang]}">
  <div class="drawer__head">
    <a class="drawer__brand" href="${home}"><span class="drawer__crest">${crest(ctx)}</span><span>${SCHOOL.name}</span></a>
    <button class="icon-btn" type="button" data-close aria-label="${UI.close[lang]}">${icon('x', { size: 24 })}</button>
  </div>
  <nav class="drawer__nav" aria-label="${UI.mainNav[lang]}"><ul>${drawerNav(ctx, activeTop)}</ul></nav>
  <div class="drawer__foot">
    <a class="btn btn--primary" href="${apply}"><span>${UI.apply[lang]}</span>${icon('arrow-right', { size: 18, cls: 'btn__end' })}</a>
    <div class="drawer__row">${langSwitch(ctx, 'lang-switch--dark')}${social(ctx, 'social--light')}</div>
    <p class="drawer__contact"><a href="${SCHOOL.phoneHref}">${icon('phone', { size: 16 })}${SCHOOL.phone}</a><a href="mailto:${SCHOOL.email}">${icon('mail', { size: 16 })}${SCHOOL.email}</a></p>
  </div>
</dialog>

<main id="main" tabindex="-1">
${out.body}
</main>

<footer class="site-footer">
  <div class="container site-footer__grid">
    <div class="site-footer__brand">
      <span class="footer-crest">${crest(ctx)}</span>
      <p class="site-footer__name">${SCHOOL.name}</p>
      <p class="site-footer__motto">${SCHOOL.motto}</p>
      <p>${L('’n Parallelmedium-hoërskool (Afrikaans en Engels) in Brackenhurst, Alberton.', 'A parallel-medium high school (Afrikaans and English) in Brackenhurst, Alberton.')}</p>
      ${social(ctx, 'social--light')}
    </div>
    <div>
      <h2 class="site-footer__title">${UI.quickLinks[lang]}</h2>
      <ul class="site-footer__links">${['home', 'our-school', 'academics', 'sport', 'culture', 'contact'].map((id) => `<li><a href="${ctx.href(id)}">${byId[id].title[lang]}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="site-footer__title">${UI.info[lang]}</h2>
      <ul class="site-footer__links">${['applications', 'fees', 'uniform', 'staff', 'news', 'gallery'].map((id) => `<li><a href="${ctx.href(id)}">${byId[id].title[lang]}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="site-footer__title">${UI.contact[lang]}</h2>
      <ul class="site-footer__contact">
        <li>${icon('map-pin', { size: 18 })}<a href="${SCHOOL.mapsUrl}" target="_blank" rel="noopener">${SCHOOL.addressLine}<span class="sr-only"> ${UI.newTab[lang]}</span></a></li>
        <li>${icon('phone', { size: 18 })}<a href="${SCHOOL.phoneHref}">${SCHOOL.phone}</a></li>
        <li>${icon('mail', { size: 18 })}<a href="mailto:${SCHOOL.email}">${SCHOOL.email}</a></li>
      </ul>
      <h2 class="site-footer__title site-footer__title--spaced">${UI.schoolHours[lang]}</h2>
      <p class="site-footer__hours">${SCHOOL.hours[lang]}<br>${UI.weekend[lang]}</p>
      <a class="btn btn--primary btn--sm" href="${SCHOOL.phoneHref}">${icon('phone', { size: 16 })}<span>${UI.callUs[lang]}</span></a>
    </div>
  </div>
  <div class="site-footer__bottom">
    <div class="container site-footer__bottom-inner">
      <p>© ${YEAR} ${SCHOOL.name}. ${UI.rights[lang]}</p>
      <a class="site-footer__top" href="#main">${icon('arrow-up', { size: 16 })}<span>${UI.backToTop[lang]}</span></a>
    </div>
  </div>
</footer>

${out.body.includes('data-gallery') ? `<dialog class="lightbox" id="lightbox" aria-label="${L('Foto-aansig', 'Photo viewer')}">
  <figure class="lightbox__figure"><img class="lightbox__img" src="data:," alt=""><figcaption class="lightbox__caption"></figcaption></figure>
  <button class="lightbox__btn lightbox__close" type="button" data-close aria-label="${UI.close[lang]}">${icon('x', { size: 24 })}</button>
  <button class="lightbox__btn lightbox__prev" type="button" aria-label="${L('Vorige foto', 'Previous photo')}">${icon('chevron-left', { size: 28 })}</button>
  <button class="lightbox__btn lightbox__next" type="button" aria-label="${L('Volgende foto', 'Next photo')}">${icon('chevron-right', { size: 28 })}</button>
</dialog>` : ''}
<a class="to-top" href="#main" aria-label="${UI.backToTop[lang]}">${icon('arrow-up', { size: 22 })}</a>
<script src="${ctx.asset('js/main.js')}" defer></script>
</body>
</html>
`;
}
