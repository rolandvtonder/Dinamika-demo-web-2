import { SPORTS } from '../data/sports.js';
import { icon } from '../icons.js';
import { section, sectionHead, pageHero, linkCard, cardGrid, ctaBand, btn, iconList, gallery, prose } from '../components.js';

const media = (ctx, s) => (s.photos?.length
  ? ctx.img(s.photos[0].src, { alt: '' })
  : `<div class="tile">${icon(s.icon, { size: 64 })}</div>`);

const joinCta = (ctx) => ctaBand({
  title: ctx.L('Wil jy deelneem?', 'Want to take part?'),
  text: ctx.L('Kontak die skool vir meer inligting oor oefentye, afrigters en wedstryde.', 'Contact the school for more information about practice times, coaches and matches.'),
  actions: [btn({ href: ctx.href('contact'), label: ctx.L('Kontak Ons', 'Contact Us') }), btn({ href: ctx.href('uniform'), label: ctx.L('Sportdrag', 'Sports kit'), variant: 'light', iconEnd: null })],
});

function hub(ctx) {
  const { L, lang } = ctx;
  return {
    desc: L('Sport by Hoërskool Dinamika: atletiek, landloop, rugby, netbal, hokkie, krieket, bergfiets, hengel, tennis, perdry, skaak en robotika.', 'Sport at Hoërskool Dinamika: athletics, cross country, rugby, netball, hockey, cricket, mountain biking, angling, tennis, equestrian, chess and robotics.'),
    image: 'photos/hokkie-medaljes.jpg',
    body: `${pageHero(ctx, {
      image: 'photos/hokkie-medaljes.jpg', pos: '50% 45%',
      lead: L('Sport blaas sosiale en kulturele lewe in ’n skool in. Dit vestig ’n gemeenskap binne die skool en skep lewenslange verbintenisse tussen leerders.', 'Sport breathes social and cultural life into a school. It establishes a community within the school and creates lifelong connections between learners.'),
    })}
${section(`${sectionHead({ kicker: L('Sportsoorte', 'Sports'), title: L('Kies jou sport', 'Find your sport'), lead: L('Dinamika bied twaalf sportsoorte aan, elk met sy eie bladsy.', 'Dinamika offers twelve sports, each with its own page.') })}
  <div class="grid grid--4" data-reveal data-reveal-stagger>${SPORTS.map((s) => linkCard({
    href: ctx.href(`sport-${s.id}`), media: media(ctx, s), meta: s.season[lang], title: s.name[lang], text: s.who[lang], cta: L('Meer inligting', 'More info'),
  })).join('')}</div>`, { tone: 'tint' })}
${section(`<div class="split">
    <div class="split__media split__media--frame">${ctx.img('photos/krieket-meisies.jpg', { alt: L('Dinamika se dogters-krieketspan in navy-en-blougroen drag', 'Dinamika girls’ cricket team in navy and teal kit') })}</div>
    <div>
      ${sectionHead({ kicker: L('Trots in navy en blougroen', 'Proud in navy and teal'), title: L('Sportdrag en sweetpakke', 'Sports kit and tracksuits') })}
      ${prose(`<p>${L('Elke leerder dra die skool se sportdrag as ’n ambassadeur van Dinamika. Skoolsweetpakke en tekkies word deur atlete na sportbyeenkomste gedra, en die bomberbaadjie mag saam met sportdrag gedra word.', 'Every learner wears the school’s sports kit as an ambassador of Dinamika. School tracksuits and sneakers are worn by athletes to sports events, and the bomber jacket may be worn with sports attire.')}</p>`)}
      ${btn({ href: ctx.href('uniform'), label: L('Sien die sportdrag', 'See the sports kit'), variant: 'navy' })}
    </div>
  </div>`)}
${joinCta(ctx)}`,
  };
}

function sportPage(ctx, s) {
  const { L, lang } = ctx;
  const name = s.name[lang];
  const photos = s.photos || [];
  return {
    desc: `${name} — ${s.intro[lang]}`,
    image: photos[0]?.src,
    body: `${pageHero(ctx, { image: photos[0]?.src, pos: '50% 40%', kicker: 'Sport', lead: s.intro[lang] })}
${section(`<dl class="facts">
    <div><dt>${L('Seisoen', 'Season')}</dt><dd>${s.season[lang]}</dd></div>
    <div><dt>${L('Vir wie', 'Who can play')}</dt><dd>${s.who[lang]}</dd></div>
    <div><dt>${L('Navrae', 'Enquiries')}</dt><dd><a href="${ctx.href('contact')}">${L('Die skoolkantoor', 'The school office')}</a></dd></div>
  </dl>
  <div class="split" style="align-items:start">
    <div>
      ${sectionHead({ kicker: name, title: L(`${name} by Dinamika`, `${name} at Dinamika`) })}
      ${prose(`<p class="lead">${L(`${name} is een van twaalf sportsoorte by Hoërskool Dinamika — deel van ons holistiese benadering, waar sport die sosiale en kulturele lewe van die skool verryk.`, `${name} is one of twelve sports at Hoërskool Dinamika — part of our holistic approach, in which sport enriches the social and cultural life of the school.`)}</p>
      <p>${L('Kontak die skool vir meer inligting oor oefentye, afrigters en wedstryde. Nuwe spelers en atlete is altyd welkom.', 'Contact the school for more information about practice times, coaches and matches. New players and athletes are always welcome.')}</p>`)}
    </div>
    ${s.kit
      ? `<div class="info-card"><span class="info-card__icon">${icon('shirt', { size: 22 })}</span><div><h3 class="info-card__title">${L('Sportdrag', 'Sports kit')}</h3>${iconList(s.kit[lang])}<p><a href="${ctx.href('uniform')}">${L('Volledige skooldrag', 'Full school uniform')}</a></p></div></div>`
      : `<div class="card"><div class="card__media">${media(ctx, s)}</div></div>`}
  </div>`)}
${photos.length > 1 ? section(`${sectionHead({ kicker: L('Foto’s', 'Photos'), title: L(`${name} in beeld`, `${name} in pictures`) })}
  ${gallery(ctx, photos.map((p) => ({ src: p.src, caption: p.alt, alt: p.alt })))}`, { tone: 'tint' }) : ''}
${joinCta(ctx)}`,
  };
}

const pages = { sport: hub };
for (const s of SPORTS) pages[`sport-${s.id}`] = (ctx) => sportPage(ctx, s);
export default pages;
