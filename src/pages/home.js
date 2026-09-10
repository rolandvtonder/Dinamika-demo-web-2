import { SCHOOL } from '../site.js';
import { icon } from '../icons.js';
import { esc } from '../lib/util.js';
import { section, sectionHead, stats, quote, ctaBand, btn, termDates, linkCard } from '../components.js';

const SLIDES = [
  {
    src: 'photos/leerderleiers.jpg', pos: '50% 45%',
    caption: { af: 'Respek · Insluiting · Trots', en: 'Respect · Inclusion · Pride' },
    alt: { af: 'Leerders van Hoërskool Dinamika in skoolbaadjies voor die skoolgebou, onder die waardes Respek, Insluiting en Trots', en: 'Hoërskool Dinamika learners in school blazers in front of the school building, beneath the values Respect, Inclusion and Pride' },
  },
  {
    src: 'photos/hokkie-medaljes.jpg', pos: '50% 50%',
    caption: { af: 'Hokkie', en: 'Hockey' },
    alt: { af: 'Dinamika se hokkiespan met medaljes by sononder', en: 'Dinamika hockey team wearing medals at sunset' },
  },
  {
    src: 'photos/krieket-meisies.jpg', pos: '50% 45%',
    caption: { af: 'Krieket', en: 'Cricket' },
    alt: { af: 'Dinamika se dogters-krieketspan in navy-en-blougroen drag', en: 'Dinamika girls’ cricket team in navy and teal kit' },
  },
  {
    src: 'photos/cheerleaders.jpg', pos: '50% 60%',
    caption: { af: 'Namie-gees', en: 'Namie spirit' },
    alt: { af: 'Dinamika se cheerleaders met blougroen en silwer pompons op die gras', en: 'Dinamika cheerleaders with teal and silver pom-poms on the lawn' },
  },
];

const MOSAIC = [
  { src: 'photos/krieket-meisies.jpg', alt: { af: 'Krieketspelers van Dinamika by sononder', en: 'Dinamika cricketers at sunset' } },
  { src: 'photos/netbal.webp', alt: { af: 'Netbal in aksie', en: 'Netball in action' } },
  { src: 'photos/toneel-spelers.jpg', alt: { af: 'Toneelspelers op die verhoog', en: 'Actors on stage' } },
  { src: 'photos/leerderleiers.jpg', alt: { af: 'Leerders in skoolbaadjies voor die skool', en: 'Learners in blazers in front of the school' } },
];

export default {
  home(ctx) {
    const { L } = ctx;
    const n = SLIDES.length;

    const hero = `<section class="hero" data-slider aria-roledescription="${L('karrousel', 'carousel')}" aria-label="${L('Hoogtepunte by Dinamika', 'Highlights at Dinamika')}">
  <div class="hero__slides">${SLIDES.map((s, i) => `
    <figure class="hero__slide${i === 0 ? ' is-active' : ''}" data-caption="${esc(L(s.caption))}" aria-roledescription="${L('skyfie', 'slide')}" aria-label="${i + 1} / ${n}"${i ? ' aria-hidden="true"' : ''}>
      ${ctx.img(s.src, { alt: L(s.alt), priority: i === 0, style: `object-position:${s.pos}` })}
    </figure>`).join('')}
  </div>
  <div class="hero__content">
    <div class="container hero__row">
      <div class="hero__copy">
        <p class="hero__caption" data-caption-out aria-hidden="true">${L(SLIDES[0].caption)}</p>
        <h1 class="hero__title"><span class="sr-only">${SCHOOL.name}: </span>${L('Reik na die Lig', 'Reach for the Light')}</h1>
        <p class="hero__text">${L('’n Parallelmedium-hoërskool in Brackenhurst, Alberton — waar ons leerders bemagtig vir die toekoms.', 'A parallel-medium high school in Brackenhurst, Alberton — where we empower learners for the future.')}</p>
        <div class="btn-row">
          ${btn({ href: ctx.href('applications'), label: L('Doen Aansoek', 'Apply Now') })}
          ${btn({ href: ctx.href('our-school'), label: L('Ontdek Ons Skool', 'Discover Our School'), variant: 'light', iconEnd: null })}
        </div>
      </div>
      <div class="hero__controls" role="group" aria-label="${L('Skyfie-kontroles', 'Slide controls')}">
        <button class="hero__btn" type="button" data-prev aria-label="${L('Vorige skyfie', 'Previous slide')}">${icon('chevron-left', { size: 22 })}</button>
        <div class="hero__dots">${SLIDES.map((s, i) => `<button class="hero__dot" type="button" aria-label="${esc(`${L('Wys skyfie', 'Show slide')} ${i + 1}: ${L(s.caption)}`)}" aria-current="${i === 0}"></button>`).join('')}</div>
        <button class="hero__btn" type="button" data-next aria-label="${L('Volgende skyfie', 'Next slide')}">${icon('chevron-right', { size: 22 })}</button>
        <button class="hero__btn" type="button" data-play data-pause-label="${L('Pouseer skyfievertoning', 'Pause slideshow')}" data-play-label="${L('Speel skyfievertoning', 'Play slideshow')}" aria-label="${L('Pouseer skyfievertoning', 'Pause slideshow')}"><span class="i-pause">${icon('pause', { size: 18 })}</span><span class="i-play">${icon('play', { size: 18 })}</span></button>
      </div>
    </div>
  </div>
</section>`;

    const quick = [
      { id: 'applications', ico: 'clipboard-list', t: L('Aansoeke', 'Applications'), d: L('Graad 8 en interne plasings', 'Grade 8 and internal placements') },
      { id: 'fees', ico: 'banknote', t: L('Skoolfonds', 'School Fees'), d: L('Skoolgeld, kortings en betaling', 'Fees, discounts and payment') },
      { id: 'news', ico: 'newspaper', t: L('Namies Nuus', 'Namies News'), d: L('Nuus, foto’s en gebeure', 'News, photos and events') },
      { id: 'contact', ico: 'phone', t: L('Kontak Ons', 'Contact Us'), d: `${SCHOOL.phone} · ${SCHOOL.hours[ctx.lang].replace(/^[^:]+:\s*/, '')}` },
    ];
    const quicklinks = `<div class="quicklinks"><div class="container"><nav class="quicklinks__grid" aria-label="${L('Vinnige skakels', 'Quick links')}">${quick.map((q) => `
      <a class="quicklink" href="${ctx.href(q.id)}"><span class="quicklink__icon">${icon(q.ico, { size: 22 })}</span><span><span class="quicklink__title">${q.t}</span><span class="quicklink__text">${q.d}</span></span></a>`).join('')}
    </nav></div></div>`;

    const chevron = '<svg class="welcome__chevron" viewBox="0 0 200 170" aria-hidden="true" focusable="false"><path d="M0 0h60l40 70L140 0h60L100 170z"/></svg>';
    const welcome = `<section class="section welcome">${chevron}<div class="container">
  <h2 class="welcome__title"><span>${L('Welkom by', 'Welcome to')}</span>${SCHOOL.name}</h2>
  <p class="welcome__text">${L(
    'Ons skoolleuse motiveer ons om nie tevrede te wees met middelmatigheid nie, maar eerder om hoër te reik, verder te gaan, harder te probeer en altyd na uitnemendheid te mik. Ons handel nie in die donker nie, maar wandel in die lig. Ons reik na die lig by Dinamika.',
    'Our school motto motivates us not to settle for mediocrity, but instead to reach higher, go further, push harder and always aim for excellence. We do not operate in the dark, but walk in the light. We reach for the light at Dinamika.',
  )}</p>
  <p class="welcome__motto">${SCHOOL.motto}</p>
  <div class="vm" data-reveal data-reveal-stagger>
    <div class="vm-card"><h3>${icon('target', { size: 26 })}${L('Ons Visie', 'Our Vision')}</h3><p>${L('Ons visie hier by Hoërskool Dinamika is om ons leerders te bemagtig vir die toekoms.', 'Our vision here at Hoërskool Dinamika is to empower learners for the future.')}</p></div>
    <div class="vm-card"><h3>${icon('star', { size: 26 })}${L('Ons Missie', 'Our Mission')}</h3><p>${L(
      'By Hoërskool Dinamika is ons trots op ons skooltradisies, etos en toeganklikheid. Ons is ’n waardegebaseerde skool wat daartoe verbind is om bekwame, goedafgeronde, beleefde en sosiaal verantwoordelike jongmense te ontwikkel wat met selfvertroue die toekoms ingaan.',
      'At Dinamika we take pride in our school traditions, ethos and approachability. We are a value-based school committed to developing competent, well-rounded, polite and socially responsible young people equipped to face the future with confidence.',
    )}</p></div>
  </div>
</div></section>`;

    const numbers = section(`${sectionHead({ kicker: L('Dinamika in syfers', 'Dinamika in numbers'), title: L('’n Skool vir die gemeenskap', 'A school for the community') })}
  ${stats([
    { value: '1 158', label: L('Leerders', 'Learners'), note: L('’n Parallelmedium-skool', 'A parallel-medium school') },
    { value: '81', label: L('Personeellede', 'Staff members'), note: L('Senior personeel onderrig ook junior klasse', 'Senior staff also teach junior classes') },
    { value: '2', label: L('Onderrigtale', 'Languages of instruction'), note: L('Afrikaans en Engels', 'Afrikaans and English') },
    { value: '15–30', label: L('Klasgrootte', 'Class size'), note: L('Leerders per klas', 'Learners per class') },
  ])}`, { tone: 'navy' });

    const pillarsData = [
      { img: 'icons/academics.webp', id: 'academics', t: L('Akademie', 'Academics'), d: L('Akademie is en sal altyd die nommer een prioriteit by Dinamika wees.', 'Academics is and will always be the number one priority at Dinamika.') },
      { img: 'icons/discipline.webp', id: 'discipline', t: L('Dissipline', 'Discipline'), d: L('’n Meriete- en demerietestelsel gebou op verhoudings, insentiewe en gevolge.', 'A merit and demerit system built on relationships, incentives and consequences.') },
      { img: 'icons/values.webp', id: 'values', t: L('Christelike Waardes', 'Christian Values'), d: L('Uitnemendheid, trots, respek en insluiting rig alles wat ons doen.', 'Excellence, pride, respect and inclusion guide everything we do.') },
      { img: 'icons/holistic-development.webp', id: 'holistic', t: L('Holistiese Ontwikkeling', 'Holistic Development'), d: L('Sport, kultuur en sosiale geleenthede ontwikkel die kind in totaliteit.', 'Sport, culture and social opportunities develop the child as a whole.') },
    ];
    const pillars = section(`${sectionHead({
      kicker: L('Ons fondasie', 'Our foundation'), center: true,
      title: L('Gebou op vier pilare', 'Built on four pillars'),
      lead: L('Ons mikpunt is dat ons leerders in Hoërskool Dinamika sal floreer, en om hulle te help om hul eie potensiaal te bereik.', 'Our goal is that learners will thrive at Dinamika, and to enable them to reach their full potential.'),
    })}
  <div class="pillars" data-reveal data-reveal-stagger>${pillarsData.map((p) => `<article class="pillar">${ctx.img(p.img, { alt: '' })}<h3>${p.t}</h3><p>${p.d}</p><a href="${ctx.href(p.id)}">${L('Lees meer', 'Read more')}<span class="sr-only">: ${p.t}</span></a></article>`).join('')}</div>`, { tone: 'tint' });

    const principal = section(`<div class="principal" data-reveal>
    <div class="principal__media">${ctx.img('photos/hoof-banier.webp', { alt: L('Mnr. Johan Schutte, hoof van Hoërskool Dinamika', 'Mr Johan Schutte, principal of Hoërskool Dinamika') })}</div>
    <div class="principal__body">
      <p class="kicker">${L('Boodskap van die hoof', 'Message from the principal')}</p>
      <h2 class="section-title">${L('’n Jong, dinamiese skool met ’n groeiende tradisie', 'A young, dynamic school with a growing tradition')}</h2>
      <p>${L(
        'Hoërskool Dinamika het ontstaan nadat Hoërskool Palmietfontein en Hoërskool Die Varing in Oktober 1993 saamgesmelt het. In skoolterme is Dinamika ’n relatief jong skool — ’n jong, dinamiese skool met ’n groeiende tradisie, gebou deur passievolle personeel, talentvolle leerders, ondersteunende ouers en die gemeenskap.',
        'Hoërskool Dinamika came into being when Hoërskool Palmietfontein and Hoërskool Die Varing merged in October 1993. In school terms Dinamika is relatively young — a young, dynamic school with a growing tradition, built by passionate staff, talented learners, supportive parents and the community.',
      )}</p>
      <p>${L(
        'Die onderskeidende faktor is dat elke leerder op alle terreine blootgestel word aan die beste infrastruktuur, spesialis-onderwysers en -afrigters, en geleenthede om op die hoogste vlak te kompeteer.',
        'What sets us apart is that every learner is exposed, in every field, to the best infrastructure, specialist teachers and coaches, and opportunities to compete at the highest level.',
      )}</p>
      <div class="principal__sign"><div><strong>Johan Schutte</strong><span>${L('Hoof', 'Principal')}</span></div></div>
      <p style="margin-top:1.5rem">${btn({ href: ctx.href('our-school'), label: L('Lees die volle boodskap', 'Read the full message'), variant: 'outline' })}</p>
    </div>
  </div>
  <div class="leaders" data-reveal data-reveal-stagger>
    ${quote({
      media: ctx.img('photos/akademie-banier.webp', { alt: '' }),
      text: L('Akademie is die hartklop van Dinamika. Hier word elke leerder die geleentheid gegun, met al die nodige hulpbronne, om tot die beste van sy of haar potensiaal te presteer.', 'Academics is the heartbeat that pulsates in Dinamika. Here every learner is given the opportunity, with all the necessary resources, to perform to the best of his or her potential.'),
      name: 'Ethel Marais', role: L('Adjunkhoof: Akademie', 'Deputy Principal: Academics'),
    })}
    ${quote({
      media: ctx.img('photos/dissipline-banier.webp', { alt: '' }),
      text: L('Ons is 100% oortuig daarvan dat liefdevolle verhoudings die enigste manier is om ’n kind werklik te vorm, te beïnvloed en te leer.', 'We are 100% convinced that loving relationships are the only way to truly form, influence and teach a child.'),
      name: 'Chris van der Schyff', role: L('Adjunkhoof: Dissipline & Berading', 'Deputy Principal: Discipline & Counselling'),
    })}
  </div>`);

    const news = section(`${sectionHead({ kicker: L('Nuus & gebeure', 'News & events'), title: L('Wat gebeur by Dinamika', 'What’s happening at Dinamika') })}
  <div class="news-layout" data-reveal data-reveal-stagger>
    ${linkCard({
      href: ctx.href('news-term2'),
      media: ctx.img('news/saalopening.jpg', { alt: L('Leerders van Dinamika sit op die pawiljoen en die gras by die saalopening', 'Dinamika learners seated on the stand and lawn at the assembly') }),
      meta: L('3 April 2024 · Skoolnuus', '3 April 2024 · School news'),
      title: L('Afskop van die tweede kwartaal', 'Kick-off to the second term'),
      text: L('Hoërskool Dinamika het die tweede kwartaal begin met ’n saalopening wat mnr. Van der Schyff aangebied het.', 'Hoërskool Dinamika started the second term with an assembly presented by Mr Van der Schyff.'),
      cta: L('Lees meer', 'Read more'),
    })}
    ${termDates(ctx)}
    <div class="social-card">
      <h3>${L('Volg die Namies aanlyn', 'Follow the Namies online')}</h3>
      <p>${L('Die jongste foto’s, uitslae en aankondigings verskyn eerste op ons Facebook- en Instagram-blaaie.', 'The latest photos, results and announcements appear first on our Facebook and Instagram pages.')}</p>
      <div class="btn-row">
        ${btn({ href: SCHOOL.facebook, label: 'Facebook', ico: 'facebook', external: true, ctx, variant: 'primary' })}
        ${btn({ href: SCHOOL.instagram, label: 'Instagram', ico: 'instagram', external: true, ctx, variant: 'light' })}
      </div>
    </div>
  </div>`, { tone: 'tint' });

    const duo = section(`${sectionHead({ kicker: L('Meer as die klaskamer', 'Beyond the classroom'), title: L('Sport & Kultuur', 'Sport & Culture'), center: true })}
  <div class="duo" data-reveal data-reveal-stagger>
    <article class="duo__card">${ctx.img('photos/hokkie-span.jpg', { alt: '', style: 'object-position:50% 40%' })}
      <div class="duo__body">
        <h3>${L('Sport', 'Sport')}</h3>
        <p>${L('Sport blaas sosiale en kulturele lewe in ’n skool in, vestig ’n gemeenskap en skep lewenslange verbintenisse tussen leerders.', 'Sport breathes social and cultural life into a school, establishes a community and creates lifelong connections between learners.')}</p>
        <ul class="duo__tags"><li>Rugby</li><li>${L('Netbal', 'Netball')}</li><li>${L('Hokkie', 'Hockey')}</li><li>${L('Krieket', 'Cricket')}</li><li>${L('Atletiek', 'Athletics')}</li><li>${L('+7 meer', '+7 more')}</li></ul>
        <a class="duo__link" href="${ctx.href('sport')}">${L('Ontdek ons sport', 'Explore our sport')}${icon('arrow-right', { size: 16 })}</a>
      </div>
    </article>
    <article class="duo__card">${ctx.img('photos/toneel-spelers.jpg', { alt: '', style: 'object-position:50% 60%' })}
      <div class="duo__body">
        <h3>${L('Kultuur', 'Culture')}</h3>
        <p>${L('Elke leerder kry die kans om sy of haar potensiaal op die verhoog te ontdek en te skitter.', 'Every learner gets the chance to discover his or her potential on stage — and to shine.')}</p>
        <ul class="duo__tags"><li>${L('Koor', 'Choir')}</li><li>${L('Toneel', 'Drama')}</li><li>${L('Redenaars', 'Public speaking')}</li><li>Eisteddfod</li></ul>
        <a class="duo__link" href="${ctx.href('culture')}">${L('Ontdek ons kultuur', 'Explore our culture')}${icon('arrow-right', { size: 16 })}</a>
      </div>
    </article>
  </div>`);

    const mosaic = section(`<div class="head-row">
    ${sectionHead({ kicker: L('Fotogalery', 'Photo gallery'), title: L('Oomblikke by Dinamika', 'Moments at Dinamika') })}
    ${btn({ href: ctx.href('gallery'), label: L('Besoek die galery', 'Visit the gallery'), variant: 'outline' })}
  </div>
  <ul class="mosaic" data-reveal data-reveal-stagger>${MOSAIC.map((m) => `<li>${ctx.img(m.src, { alt: L(m.alt) })}</li>`).join('')}</ul>`, { tone: 'tint' });

    const cta = ctaBand({
      kicker: L('Toekomstige Namies', 'Future Namies'),
      title: L('Word deel van die Dinamika-familie', 'Become part of the Dinamika family'),
      text: L('Graad 8-aansoeke word aanlyn by die Gauteng Departement van Onderwys gedoen. Vir interne plasings in graad 9 tot 12 kan u ’n aansoekvorm by die skoolkantoor afhaal.', 'Grade 8 applications are made online with the Gauteng Department of Education. For internal placements in grades 9 to 12 you can collect an application form at the school office.'),
      actions: [
        btn({ href: ctx.href('applications'), label: L('Doen Aansoek', 'Apply Now') }),
        btn({ href: ctx.href('contact'), label: L('Kontak Ons', 'Contact Us'), variant: 'light', iconEnd: null }),
      ],
    });

    return {
      desc: L(
        'Hoërskool Dinamika is ’n parallelmedium-hoërskool (Afrikaans en Engels) in Brackenhurst, Alberton. Reik na die lig: akademie, dissipline, waardes en holistiese ontwikkeling.',
        'Hoërskool Dinamika is a parallel-medium high school (Afrikaans and English) in Brackenhurst, Alberton. Reach for the light: academics, discipline, values and holistic development.',
      ),
      image: 'photos/leerderleiers.jpg',
      body: [hero, quicklinks, welcome, numbers, pillars, principal, news, duo, mosaic, cta].join('\n'),
    };
  },
};
