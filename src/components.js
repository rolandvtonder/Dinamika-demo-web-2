// Reusable page blocks. Every function returns an HTML string.
import { esc } from './lib/util.js';
import { icon } from './icons.js';
import { byId, childrenOf, trail, TERMS, UI } from './site.js';

const MONTHS = {
  af: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
export const fmtDate = (lang, iso, withYear = false) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[lang][m - 1]}${withYear ? ` ${y}` : ''}`;
};

export function btn({ href, label, variant = 'primary', ico, iconEnd = 'arrow-right', external = false, ctx, cls = '' }) {
  const ext = external ? ` target="_blank" rel="noopener"` : '';
  const note = external && ctx ? `<span class="sr-only"> ${UI.newTab[ctx.lang]}</span>` : '';
  return `<a class="btn btn--${variant}${cls ? ` ${cls}` : ''}" href="${href}"${ext}>${ico ? icon(ico, { size: 18 }) : ''}<span>${label}</span>${note}${iconEnd ? icon(external ? 'external-link' : iconEnd, { size: 18, cls: 'btn__end' }) : ''}</a>`;
}

export const section = (content, { tone = '', id, cls = '', inner = 'container' } = {}) =>
  `<section class="section${tone ? ` section--${tone}` : ''}${cls ? ` ${cls}` : ''}"${id ? ` id="${id}"` : ''}><div class="${inner}">${content}</div></section>`;

export const sectionHead = ({ kicker, title, lead, center = false, tag = 'h2', id }) => `
<header class="section-head${center ? ' section-head--center' : ''}">
  ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
  <${tag} class="section-title"${id ? ` id="${id}"` : ''}>${title}</${tag}>
  ${lead ? `<p class="section-lead">${lead}</p>` : ''}
</header>`;

export function breadcrumb(ctx) {
  const items = ctx.page.id === '404' ? [byId.home, ctx.page] : trail(ctx.page.id);
  return `<nav class="breadcrumb" aria-label="${UI.breadcrumb[ctx.lang]}"><ol>${items
    .map((p, i) => (i === items.length - 1
      ? `<li><span aria-current="page">${p.title[ctx.lang]}</span></li>`
      : `<li><a href="${ctx.href(p.id)}">${p.title[ctx.lang]}</a>${icon('chevron-right', { size: 14 })}</li>`))
    .join('')}</ol></nav>`;
}

// Sibling pages as chips under the page title ("In this section").
export function sectionChips(ctx) {
  const p = ctx.page;
  if (!byId[p.id] || p.id === 'home') return '';
  const hubId = p.parent === 'home' ? p.id : p.parent;
  const kids = childrenOf(hubId);
  if (!kids.length) return '';
  const hub = byId[hubId];
  const items = [{ id: hubId, label: (hub.menu || UI.overview)[ctx.lang] }, ...kids.map((k) => ({ id: k.id, label: k.title[ctx.lang] }))];
  return `<nav class="chips" aria-label="${UI.inSection[ctx.lang]}"><div class="container chips__inner">
  <span class="chips__label">${UI.inSection[ctx.lang]}</span>
  <ul class="chips__list">${items.map((i) => `<li><a class="chip" href="${ctx.href(i.id)}"${i.id === p.id ? ' aria-current="page"' : ''}>${i.label}</a></li>`).join('')}</ul>
</div></nav>`;
}

export function pageHero(ctx, { title, lead, image, pos = 'center', kicker } = {}) {
  return `<section class="page-hero${image ? ' page-hero--image' : ''}">
  ${image ? `<div class="page-hero__media">${ctx.img(image, { priority: true, cls: 'page-hero__img', style: `object-position:${pos}` })}</div>` : ''}
  <div class="container page-hero__inner">
    ${breadcrumb(ctx)}
    ${kicker ? `<p class="kicker kicker--light">${kicker}</p>` : ''}
    <h1 class="page-hero__title">${title ?? ctx.title(ctx.page.id)}</h1>
    ${lead ? `<p class="page-hero__lead">${lead}</p>` : ''}
  </div>
  <svg class="page-hero__chevron" viewBox="0 0 200 200" aria-hidden="true" focusable="false"><path d="M0 0h60l40 70L140 0h60L100 170z"/></svg>
</section>
${sectionChips(ctx)}`;
}

export function linkCard({ href, title, text, media, ico, meta, cta, cls = '' }) {
  return `<article class="card${cls ? ` ${cls}` : ''}">
  ${media ? `<div class="card__media">${media}</div>` : ico ? `<div class="card__icon">${icon(ico, { size: 26 })}</div>` : ''}
  <div class="card__body">
    ${meta ? `<p class="card__meta">${meta}</p>` : ''}
    <h3 class="card__title"><a class="card__link" href="${href}">${title}</a></h3>
    ${text ? `<p class="card__text">${text}</p>` : ''}
    ${cta ? `<span class="card__cta" aria-hidden="true">${cta}${icon('arrow-right', { size: 16 })}</span>` : ''}
  </div>
</article>`;
}

export const cardGrid = (cards, cols = 3) => `<div class="grid grid--${cols}">${cards.join('')}</div>`;

export const stats = (items) => `<ul class="stats">${items
  .map((s) => `<li class="stat"><span class="stat__value">${s.value}</span><span class="stat__label">${s.label}</span>${s.note ? `<span class="stat__note">${s.note}</span>` : ''}</li>`)
  .join('')}</ul>`;

export const quote = ({ text, name, role, media }) => `<figure class="quote">
  ${media ? `<div class="quote__media">${media}</div>` : ''}
  <div class="quote__body">
    <svg class="quote__mark" viewBox="0 0 32 24" aria-hidden="true" focusable="false"><path d="M0 24V13.7C0 5.9 4.4 1.3 12.2 0l1.5 3.6C9.4 5 7.3 7.6 7 11.2h6.2V24H0Zm18.3 0V13.7C18.3 5.9 22.7 1.3 30.5 0L32 3.6c-4.3 1.4-6.4 4-6.7 7.6h6.2V24H18.3Z"/></svg>
    <blockquote><p>${text}</p></blockquote>
    ${name ? `<figcaption><strong>${name}</strong>${role ? `<span>${role}</span>` : ''}</figcaption>` : ''}
  </div>
</figure>`;

export const ctaBand = ({ kicker, title, text, actions = [] }) => `<section class="cta-band">
  <div class="container cta-band__inner">
    <div>
      ${kicker ? `<p class="kicker kicker--light">${kicker}</p>` : ''}
      <h2 class="cta-band__title">${title}</h2>
      ${text ? `<p class="cta-band__text">${text}</p>` : ''}
    </div>
    <div class="cta-band__actions">${actions.join('')}</div>
  </div>
</section>`;

export const split = ({ media, body, reverse = false, cls = '' }) =>
  `<div class="split${reverse ? ' split--reverse' : ''}${cls ? ` ${cls}` : ''}"><div class="split__media">${media}</div><div class="split__body">${body}</div></div>`;

export const iconList = (items, ico = 'check') =>
  `<ul class="icon-list">${items.map((t) => `<li>${icon(ico, { size: 18 })}<span>${t}</span></li>`).join('')}</ul>`;

export const infoCard = ({ ico, title, body, cls = '' }) => `<div class="info-card${cls ? ` ${cls}` : ''}">
  ${ico ? `<span class="info-card__icon">${icon(ico, { size: 22 })}</span>` : ''}
  <div><h3 class="info-card__title">${title}</h3><div class="info-card__body">${body}</div></div>
</div>`;

export const accordion = (items) => `<div class="accordion">${items
  .map((i) => `<details class="acc"${i.open ? ' open' : ''}><summary><span>${i.title}</span>${icon('chevron-down', { size: 20, cls: 'acc__chev' })}</summary><div class="acc__body">${i.body}</div></details>`)
  .join('')}</div>`;

export const table = ({ caption, head, rows, cls = '' }) => `<div class="table-wrap" role="region" tabindex="0" aria-label="${esc(caption)}">
  <table class="table${cls ? ` ${cls}` : ''}"><caption>${caption}</caption>
  <thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
  <tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('')}</tbody>
  </table></div>`;

export const prose = (content, cls = '') => `<div class="prose${cls ? ` ${cls}` : ''}">${content}</div>`;

export function termDates(ctx) {
  const L = ctx.L;
  return `<div class="terms" data-terms data-now="${L('Nou', 'Now')}" data-next="${L('Volgende', 'Next')}">
  <h3 class="terms__title">${icon('calendar', { size: 22 })}<span>${L('Kwartaaldatums', 'Term dates')} ${TERMS.year}</span></h3>
  <ol class="terms__list">${TERMS.list.map((t) => `<li class="term" data-start="${t.start}" data-end="${t.end}">
    <span class="term__n">${L('Kwartaal', 'Term')} ${t.n}</span>
    <span class="term__dates"><time datetime="${t.start}">${fmtDate(ctx.lang, t.start)}</time> – <time datetime="${t.end}">${fmtDate(ctx.lang, t.end)}</time></span>
    <span class="term__badge" hidden></span></li>`).join('')}</ol>
  <p class="terms__note">${L('Openbare skole — soos deur die Departement van Basiese Onderwys gepubliseer.', 'Public schools — as published by the Department of Basic Education.')}</p>
</div>`;
}

// Photo grid with optional album filters; opens in the shared lightbox (see layout + main.js).
export function gallery(ctx, items, { albums } = {}) {
  const L = ctx.L;
  const filters = albums
    ? `<div class="gallery__filters" role="group" aria-label="${L('Filtreer foto’s', 'Filter photos')}">
      <button type="button" class="filter" data-filter="all" aria-pressed="true">${L('Alles', 'All')}</button>
      ${Object.entries(albums).map(([k, v]) => `<button type="button" class="filter" data-filter="${k}" aria-pressed="false">${v[ctx.lang]}</button>`).join('')}
    </div>`
    : '';
  return `<div class="gallery" data-gallery>${filters}
  <ul class="gallery__grid">${items.map((it) => {
    const cap = L(it.caption);
    return `<li class="gallery__item" data-album="${it.album || ''}">
      <button type="button" class="gallery__btn" data-full="${ctx.asset(`img/${it.src}`)}" data-caption="${esc(cap)}" aria-label="${esc(`${L('Vergroot foto', 'Enlarge photo')}: ${cap}`)}">
        ${ctx.img(it.src, { alt: L(it.alt || it.caption) })}
      </button>
      <p class="gallery__caption">${cap}</p></li>`;
  }).join('')}</ul></div>`;
}

export const initials = (name) => name.split(/\s+/).filter((w) => /^[A-ZÀ-Ý]/.test(w)).map((w) => w[0]).slice(0, 2).join('');
