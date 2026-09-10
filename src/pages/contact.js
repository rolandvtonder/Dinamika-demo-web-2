import { SCHOOL } from '../site.js';
import { icon } from '../icons.js';
import { esc } from '../lib/util.js';
import { section, sectionHead, pageHero, infoCard, btn } from '../components.js';

export default {
  contact(ctx) {
    const { L } = ctx;
    const req = `<span class="req" aria-hidden="true">*</span>`;
    const field = (id, label, input, { required = true, hint = '' } = {}) => `<div class="field">
      <label for="cf-${id}">${label} ${required ? req : `<span class="field__hint">${L('(opsioneel)', '(optional)')}</span>`}</label>
      ${input}
      ${hint ? `<p class="field__hint" id="cf-${id}-hint">${hint}</p>` : ''}
      ${required ? `<p class="field__error" id="cf-${id}-error" aria-live="polite"></p>` : ''}
    </div>`;

    const topics = [
      { v: L('Algemene navraag', 'General enquiry'), email: SCHOOL.email },
      { v: L('Aansoeke en inskrywings', 'Applications and admissions'), email: SCHOOL.email },
      { v: L('Skoolfonds en rekeninge', 'School fees and accounts'), email: SCHOOL.accounts.email },
      { v: L('Boodskap aan die hoof', 'Message for the principal'), email: SCHOOL.principalEmail },
    ];

    const form = `<form class="form" data-contact-form novalidate
      data-to="${SCHOOL.email}"
      data-msg-required="${esc(L('Hierdie veld is verpligtend.', 'This field is required.'))}"
      data-msg-invalid="${esc(L('Tik asseblief ’n geldige e-posadres in, byvoorbeeld naam@voorbeeld.co.za.', 'Please enter a valid e-mail address, for example name@example.co.za.'))}"
      data-msg-sent="${esc(L('U e-posprogram behoort nou oop te maak met u boodskap aan {to}. Gebeur dit nie? Stuur dan asseblief direk ’n e-pos na {to}.', 'Your e-mail app should now open with your message to {to}. If it doesn’t, please e-mail {to} directly.'))}">
      <p class="small muted">${req} ${L('Verpligte velde', 'Required fields')}</p>
      <div class="form__row">
        ${field('name', L('Naam en van', 'Full name'), `<input id="cf-name" name="name" type="text" autocomplete="name" required aria-describedby="cf-name-error">`)}
        ${field('email', L('E-posadres', 'E-mail address'), `<input id="cf-email" name="email" type="email" autocomplete="email" required aria-describedby="cf-email-error">`)}
      </div>
      <div class="form__row">
        ${field('phone', L('Telefoonnommer', 'Phone number'), `<input id="cf-phone" name="phone" type="tel" autocomplete="tel">`, { required: false })}
        ${field('topic', L('Onderwerp', 'Topic'), `<select id="cf-topic" name="topic">${topics.map((t) => `<option data-email="${t.email}">${t.v}</option>`).join('')}</select>`, { required: false })}
      </div>
      ${field('message', L('Boodskap', 'Message'), `<textarea id="cf-message" name="message" required aria-describedby="cf-message-error cf-message-hint"></textarea>`, { hint: L('Wanneer u op “Stuur” klik, maak u e-posprogram oop met die boodskap reeds ingevul.', 'When you select “Send”, your e-mail app opens with the message already filled in.') })}
      <div><button class="btn btn--navy" type="submit">${icon('send', { size: 18 })}<span>${L('Stuur boodskap', 'Send message')}</span></button></div>
      <p class="form__status" role="status"></p>
    </form>`;

    const offices = [
      { ico: 'banknote', t: L('Rekeninge en skoolfonds', 'Accounts and school fees'), b: `<p>${SCHOOL.accounts.name}</p><p><a href="mailto:${SCHOOL.accounts.email}">${SCHOOL.accounts.email}</a></p><p><a href="${SCHOOL.accounts.phoneHref}">${SCHOOL.accounts.phone}</a></p>` },
      { ico: 'clipboard-list', t: L('Ontvangs en aansoeke', 'Reception and applications'), b: `<p>${SCHOOL.reception.name}</p><p><a href="mailto:${SCHOOL.reception.email}">${SCHOOL.reception.email}</a></p>` },
      { ico: 'school', t: L('Kantoor van die hoof', 'Principal’s office'), b: `<p>Johan Schutte</p><p><a href="mailto:${SCHOOL.principalEmail}">${SCHOOL.principalEmail}</a></p>` },
    ];

    return {
      desc: L(`Kontak Hoërskool Dinamika: ${SCHOOL.addressLine}. Tel ${SCHOOL.phone}, e-pos ${SCHOOL.email}.`, `Contact Hoërskool Dinamika: ${SCHOOL.addressLine}. Tel ${SCHOOL.phone}, e-mail ${SCHOOL.email}.`),
      image: 'photos/skoolgebou.jpg',
      body: `${pageHero(ctx, {
        image: 'photos/skoolgebou.jpg', pos: '50% 50%',
        lead: L('Ons help graag. Skakel, stuur ’n e-pos of kom kuier by die skoolkantoor.', 'We’re happy to help. Call, send an e-mail or visit the school office.'),
      })}
${section(`<div class="grid grid--4" data-reveal data-reveal-stagger>
    ${infoCard({ ico: 'map-pin', title: L('Adres', 'Address'), body: `<p>${SCHOOL.street}<br>${SCHOOL.suburb}, ${SCHOOL.city}, ${SCHOOL.code}</p><p><a href="${SCHOOL.mapsUrl}" target="_blank" rel="noopener">${L('Kry aanwysings', 'Get directions')}<span class="sr-only"> (${L('maak in nuwe oortjie oop', 'opens in a new tab')})</span></a></p>` })}
    ${infoCard({ ico: 'phone', title: L('Telefoon', 'Phone'), body: `<p><a href="${SCHOOL.phoneHref}">${SCHOOL.phone}</a></p>` })}
    ${infoCard({ ico: 'mail', title: L('E-pos', 'E-mail'), body: `<p><a href="mailto:${SCHOOL.email}">${SCHOOL.email.replace('@', '@<wbr>')}</a></p>` })}
    ${infoCard({ ico: 'clock', title: L('Kantoorure', 'Office hours'), body: `<p>${SCHOOL.hours[ctx.lang]}</p><p>${L('Naweke en openbare vakansiedae: gesluit', 'Weekends and public holidays: closed')}</p>` })}
  </div>`)}
${section(`<div class="split" style="align-items:start">
    <div>
      ${sectionHead({ kicker: L('Stuur ’n boodskap', 'Send a message'), title: L('Hoe kan ons help?', 'How can we help?') })}
      ${form}
    </div>
    <div class="stack">
      <div class="map" data-map="${SCHOOL.mapsEmbed}" data-title="${esc(L('Kaart: Hoërskool Dinamika, Brackenhurst', 'Map: Hoërskool Dinamika, Brackenhurst'))}">
        <div class="map__inner">
          ${icon('map', { size: 40 })}
          <p>${L('Die kaart word van Google Maps gelaai sodra u dit oopmaak.', 'The map loads from Google Maps once you open it.')}</p>
          <div class="btn-row" style="justify-content:center">
            <button class="btn btn--primary" type="button">${icon('map-pin', { size: 18 })}<span>${L('Wys kaart', 'Show map')}</span></button>
            ${btn({ href: SCHOOL.mapsUrl, label: 'Google Maps', variant: 'light', external: true, ctx })}
          </div>
        </div>
      </div>
      ${offices.map((o) => infoCard({ ico: o.ico, title: o.t, body: o.b })).join('')}
    </div>
  </div>`, { tone: 'tint' })}`,
    };
  },

  404(ctx) {
    return {
      desc: 'Bladsy nie gevind nie / Page not found',
      body: `<section class="section error-page"><div class="container container--narrow">
  <p class="error-page__code" aria-hidden="true">404</p>
  <h1 class="section-title">Bladsy nie gevind nie</h1>
  <p class="lead">Jammer, ons kon nie hierdie bladsy vind nie. Dit is dalk geskuif, of die adres is verkeerd ingetik.</p>
  <p class="lead" lang="en">Sorry, we couldn’t find this page. It may have moved, or the address was mistyped.</p>
  <div class="btn-row" style="justify-content:center;margin-top:2rem">
    ${btn({ href: ctx.href('home', 'af'), label: 'Na die tuisblad' })}
    <a class="btn btn--outline" href="${ctx.href('home', 'en')}" lang="en"><span>English home page</span></a>
    <a class="btn btn--outline" href="${ctx.href('contact', 'af')}"><span>Kontak ons</span></a>
  </div>
</div></section>`,
    };
  },
};
