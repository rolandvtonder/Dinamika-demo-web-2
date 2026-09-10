import { SCHOOL } from '../site.js';
import { icon } from '../icons.js';
import { section, sectionHead, pageHero, linkCard, cardGrid, ctaBand, btn, prose, gallery, infoCard, stats } from '../components.js';

const principalMessage = (L) => [
  L('Hoërskool Dinamika het ontstaan nadat Hoërskool Palmietfontein en Hoërskool Die Varing in Oktober 1993 saamgesmelt het.',
    'Hoërskool Dinamika came into being when Hoërskool Palmietfontein and Hoërskool Die Varing merged in October 1993.'),
  L('In skoolterme is Hoërskool Dinamika ’n relatief jong skool: ’n jong, dinamiese skool met ’n groeiende tradisie. Dié tradisie word gebou deur passievolle personeel, talentvolle leerders, ondersteunende ouers en die gemeenskap.',
    'In school terms Hoërskool Dinamika is relatively young: a young, dynamic school with a growing tradition. That tradition is built by passionate staff, talented learners, supportive parents and the community.'),
  L('Hoërskool Dinamika het van ’n enkelmedium-skool na ’n parallelmedium-skool beweeg: ’n hoërskool vir die gemeenskap.',
    'Hoërskool Dinamika has moved from a single-medium to a parallel-medium school: a high school for the community.'),
  L('Ons visie is om leerders te bemagtig vir hul toekoms. Ons visie en missie is gefundeer in die volgende beginsels: Akademie, Dissipline, Holistiese Ontwikkeling en Waardes.',
    'Our vision is to empower learners for their future. Our vision and mission are founded on the following principles: Academics, Discipline, Holistic Development and Values.'),
  L('Die onderskeidende faktor is dat elke leerder op alle terreine blootgestel word aan die beste infrastruktuur, spesialis-onderwysers en -afrigters, en geleenthede om op die hoogste vlak te kompeteer.',
    'What sets us apart is that every learner is exposed, in every field, to the best infrastructure, specialist teachers and coaches, and opportunities to compete at the highest level.'),
  L('Met die visie as baken funksioneer Hoërskool Dinamika as ’n eenheid met ons vennote in die onderwys, om ’n daadwerklike verskil te maak in elke leerder se lewe sodat elkeen sy of haar rol in die samelewing kan vervul.',
    'With this vision as our beacon, Hoërskool Dinamika works as one with our partners in education to make a real difference in every learner’s life, so that each can fulfil his or her role in society.'),
];

const PILLARS = [
  { img: 'icons/academics.webp', id: 'academics', t: ['Akademie', 'Academics'],
    d: ['Akademie is en sal altyd die nommer een prioriteit wees. Ons skep ’n omgewing wat optimale leer bevorder: vakspesialiste, tegnologie in die klaskamers, hulpbronne vir leerders, realistiese klasgetalle en ’n wye keuse van vakke.',
      'Academics is and will always be the number one priority. We create an environment that promotes optimal learning: subject specialists, technology in the classrooms, resources for learners, realistic class sizes and a wide choice of subjects.'] },
  { img: 'icons/discipline.webp', id: 'discipline', t: ['Dissipline', 'Discipline'],
    d: ['Voorkomende, ondersteunende en korrektiewe dissipline, met ’n meriete- en demerietestelsel wat goeie gedrag beloon en leerders help om verantwoordelike keuses te maak.',
      'Preventative, supportive and corrective discipline, with a merit and demerit system that rewards good behaviour and helps learners make responsible choices.'] },
  { img: 'icons/values.webp', id: 'values', t: ['Christelike Waardes', 'Christian Values'],
    d: ['Waardes is positiewe onderrig wat ons help om die regte pad in die lewe te volg. ’n Kind met ’n goeie waardesisteem word ’n verantwoordelike volwassene.',
      'Values are the positive teachings that help us follow the right path in life. A child with good values grows up to be a responsible adult.'] },
  { img: 'icons/holistic-development.webp', id: 'holistic', t: ['Holistiese Ontwikkeling', 'Holistic Development'],
    d: ['’n Holistiese benadering fokus op alle aspekte van ’n kind se ontwikkeling — nie net akademiese vordering nie — deur sport, kultuur en sosiale geleenthede.',
      'A holistic approach focuses on every aspect of a child’s growth — not just academic progress — through sport, culture and social opportunities.'] },
];

const VALUES = [
  { img: 'icons/excellence.webp', t: ['Uitnemendheid', 'Excellence'], d: ['Ons stel ons nie tevrede met middelmatigheid nie: ons reik hoër, gaan verder, probeer harder en mik altyd na uitnemendheid.', 'We don’t settle for mediocrity: we reach higher, go further, push harder and always aim for excellence.'] },
  { img: 'icons/pride.webp', t: ['Trots', 'Pride'], d: ['Ons dra ons skool se naam, kleure en skooldrag met trots — elke leerder is ’n ambassadeur van Dinamika.', 'We carry our school’s name, colours and uniform with pride — every learner is an ambassador of Dinamika.'] },
  { img: 'icons/respect.webp', t: ['Respek', 'Respect'], d: ['Ons behandel mekaar, ons onderwysers en ons skool met respek, in die klas en daarbuite.', 'We treat one another, our teachers and our school with respect, in class and beyond.'] },
  { img: 'icons/inclusion.webp', t: ['Insluiting', 'Inclusion'], d: ['As parallelmedium-skool verwelkom ons leerders in Afrikaans en Engels, en ons waardeer ons verskille.', 'As a parallel-medium school we welcome learners in Afrikaans and English, and we value our differences.'] },
  { img: 'icons/accountability.webp', t: ['Aanspreeklikheid', 'Accountability'], d: ['Ons neem verantwoordelikheid vir ons woorde, ons dade en ons werk.', 'We take responsibility for our words, our actions and our work.'] },
];

const TIMELINE = [
  ['1993', 'In 1993 het Hoërskool Palmietfontein en Hoërskool Die Varing besluit om die proses van samesmelting te begin. Daar is besluit dat Hoërskool Die Varing se gebou as die nuwe skoolgebou sou dien. Die nuwe skool het sy deure aan die begin van die vierde kwartaal, op 6 Oktober 1993, met amper 900 leerders geopen. Mnr. André Bouwer was die eerste waarnemende hoof van Hoërskool Dinamika.',
    'In 1993 Hoërskool Palmietfontein and Hoërskool Die Varing decided to start the process of merging. It was decided that Hoërskool Die Varing’s building would serve as the new school building. The new school opened its doors at the beginning of the fourth term, on 6 October 1993, with almost 900 learners. Mr André Bouwer was the first acting principal of Hoërskool Dinamika.'],
  ['1994', 'Mnr. Dieter Böhmer is aangestel as die eerste permanente hoof van Hoërskool Dinamika. Mnr. Böhmer was baie ingestel op akademie, Christelike waardes en dissipline.',
    'Mr Dieter Böhmer was appointed as the first permanent principal of Hoërskool Dinamika. Mr Böhmer was very focused on academics, Christian values and discipline.'],
  ['2008', 'Mnr. Vollaard is aangestel as Hoërskool Dinamika se tweede hoof. Mnr. Vollaard was ’n mensemens wat vir sy personeel en leerders omgegee het, en hy het ’n groot liefde vir sport gehad.',
    'Mr Vollaard was appointed as Hoërskool Dinamika’s second principal. Mr Vollaard was a people person who cared about his staff and learners, and he had a great love for sport.'],
  ['2016', 'Mnr. Johan Schutte word as waarnemende hoof aangestel. Sy eerste groot verandering is om Dinamika ’n parallelmedium-skool te maak — in lyn met die skool se missie — sodat die skool meer toeganklik is vir leerders in Alberton.',
    'Mr Johan Schutte is appointed as acting principal. His first major change is to make Dinamika a parallel-medium school — in line with the school’s mission — so that the school is more accessible to learners in Alberton.'],
  ['2017', 'Mnr. Schutte word bevorder tot permanente hoof. Van sy aanstelling af is hy ingestel op die skool se infrastruktuur: hy het projektors in elke klaskamer laat installeer en spesialis-onderwysers en sportafrigters aangestel. Hy glo daaraan om personeel en leerders geleenthede vir groei in akademie, sport, leierskap en kultuur te gee, en dat elke leerder sy of haar plek in die samelewing moet kan volstaan. Daarom het hy die skool op vier pilare begin bestuur: akademie, dissipline, holistiese ontwikkeling en Christelike waardes.',
    'Mr Schutte is promoted to permanent principal. From his appointment he focused on the school’s infrastructure: he had projectors installed in every classroom and appointed specialist teachers and sports coaches. He believes in giving staff and learners opportunities to grow in academics, sport, leadership and culture, and that every learner must be able to take his or her place in society. He therefore began to lead the school on four pillars: academics, discipline, holistic development and Christian values.'],
  ['2022', 'Die skoollied is herskryf in Hoërskool Dinamika se twee tale van onderrig. Die V-blok is gebou om plek te maak vir die stygende getal leerders: vyf ekstra klaskamers en een werkswinkel is aangebou.',
    'The school anthem was rewritten in Hoërskool Dinamika’s two languages of learning and teaching. The V block was built to make room for the growing number of learners: five extra classrooms and one workshop were added.'],
  ['2023', 'Dinamika het die eerste fase aangepak om teen beurtkrag te werk: die skool het ’n 80 kVA-kragopwekker aangekoop, sodat elke klas tydens beurtkrag ten volle elektrisiteit het. ’n Energiekomitee is aangestel om fase 2 — sonkrag en batterye — te beplan. Fase 1 van die boorgatprojek is ook voltooi: die boorgat is geboor en ons het water. Fase 2 sluit die installering van die pomp en watertenks in.',
    'Dinamika took on the first phase of beating load shedding: the school bought an 80 kVA generator, so every class has full electricity during load shedding. An energy committee was appointed to plan phase 2 — solar power and batteries. Phase 1 of the borehole project was also completed: the borehole has been drilled and we have water. Phase 2 includes installing the pump and water tanks.'],
];

export default {
  'our-school'(ctx) {
    const { L } = ctx;
    const links = [
      ['foundation', 'layers', L('Die vier pilare waarop Dinamika gebou is.', 'The four pillars Dinamika is built on.')],
      ['values', 'heart', L('Uitnemendheid, trots, respek, insluiting en aanspreeklikheid.', 'Excellence, pride, respect, inclusion and accountability.')],
      ['history', 'landmark', L('Van twee skole na een — sedert 1993.', 'From two schools to one — since 1993.')],
      ['discipline', 'shield-check', L('Verhoudings, insentiewe en gevolge.', 'Relationships, incentives and consequences.')],
      ['holistic', 'sprout', L('Sport, kultuur en sosiale ontwikkeling.', 'Sport, culture and social development.')],
      ['staff', 'users', L('Ontmoet ons bestuur en onderwysers.', 'Meet our management and teachers.')],
      ['anthem', 'music', L('Ons skoollied en leuse: Reik na die Lig.', 'Our anthem and motto: Reach for the Light.')],
    ];
    return {
      desc: L('Leer Hoërskool Dinamika ken: ’n waardegebaseerde parallelmedium-hoërskool in Brackenhurst, Alberton.', 'Get to know Hoërskool Dinamika: a value-based, parallel-medium high school in Brackenhurst, Alberton.'),
      image: 'photos/hoof-banier.webp',
      body: `${pageHero(ctx, {
        image: 'photos/hoof-banier.webp', pos: '85% 30%',
        lead: L('’n Waardegebaseerde parallelmedium-hoërskool in Brackenhurst, Alberton — ’n hoërskool vir die gemeenskap.', 'A value-based, parallel-medium high school in Brackenhurst, Alberton — a high school for the community.'),
      })}
${section(`<div class="split">
    <div class="split__media split__media--frame">${ctx.img('staff/new-johan-schutte.webp', { alt: L('Mnr. Johan Schutte, hoof', 'Mr Johan Schutte, principal') })}</div>
    <div>
      <p class="kicker">${L('Boodskap van die hoof', 'Message from the principal')}</p>
      <h2 class="section-title">${L('Reik na die lig', 'Reach for the light')}</h2>
      ${prose(principalMessage(L).map((p) => `<p>${p}</p>`).join(''))}
      <div class="principal__sign"><div><strong>Johan Schutte</strong><span>${L('Hoof', 'Principal')} · <a href="mailto:${SCHOOL.principalEmail}">${SCHOOL.principalEmail}</a></span></div></div>
    </div>
  </div>`)}
${section(`${sectionHead({ kicker: L('Visie & missie', 'Vision & mission'), title: L('Waarvoor ons staan', 'What we stand for'), center: true })}
  <div class="vm" style="margin-top:0">
    <div class="vm-card"><h3>${icon('target', { size: 26 })}${L('Ons Visie', 'Our Vision')}</h3><p>${L('Om ons leerders te bemagtig vir die toekoms.', 'To empower our learners for the future.')}</p></div>
    <div class="vm-card"><h3>${icon('star', { size: 26 })}${L('Ons Missie', 'Our Mission')}</h3><p>${L('Ons is trots op ons skooltradisies, etos en toeganklikheid. Ons is ’n waardegebaseerde skool wat bekwame, goedafgeronde, beleefde en sosiaal verantwoordelike jongmense ontwikkel wat met selfvertroue die toekoms ingaan.', 'We take pride in our school traditions, ethos and approachability. We are a value-based school developing competent, well-rounded, polite and socially responsible young people who face the future with confidence.')}</p></div>
  </div>`, { tone: 'tint' })}
${section(stats([
    { value: '1993', label: L('Gestig', 'Founded'), note: L('Samesmelting van Palmietfontein en Die Varing', 'Merger of Palmietfontein and Die Varing') },
    { value: '1 158', label: L('Leerders', 'Learners'), note: L('Afrikaans- en Engelsmedium', 'Afrikaans and English medium') },
    { value: '81', label: L('Personeellede', 'Staff members'), note: L('Senior personeel onderrig ook junior klasse', 'Senior staff also teach junior classes') },
    { value: '15–30', label: L('Klasgrootte', 'Class size'), note: L('Leerders per klas', 'Learners per class') },
  ]), { tone: 'navy', cls: 'section--tight' })}
${section(`${sectionHead({ kicker: L('Verken', 'Explore'), title: L('Meer oor ons skool', 'More about our school') })}
  ${cardGrid(links.map(([id, ico, text]) => linkCard({ href: ctx.href(id), ico, title: ctx.title(id), text, cta: L('Lees meer', 'Read more') })), 3)}`)}
${ctaBand({ title: L('Kom kuier by Dinamika', 'Come and visit Dinamika'), text: L('Skakel die skoolkantoor om ’n afspraak te maak of vir meer inligting oor aansoeke.', 'Call the school office to make an appointment or for more information about applications.'), actions: [btn({ href: ctx.href('contact'), label: L('Kontak Ons', 'Contact Us') }), btn({ href: ctx.href('applications'), label: L('Aansoeke', 'Applications'), variant: 'light', iconEnd: null })] })}`,
    };
  },

  foundation(ctx) {
    const { L } = ctx;
    return {
      desc: L('Hoërskool Dinamika is gebou op vier pilare: akademie, dissipline, Christelike waardes en holistiese ontwikkeling.', 'Hoërskool Dinamika is built on four pillars: academics, discipline, Christian values and holistic development.'),
      image: 'photos/leerderleiers.jpg',
      body: `${pageHero(ctx, { image: 'photos/leerderleiers.jpg', pos: '50% 40%', lead: L('Hoërskool Dinamika is gebou op vier pilare.', 'Hoërskool Dinamika is built on four pillars.') })}
${section(`${sectionHead({
    center: true, kicker: L('Ons mikpunt', 'Our goal'), title: L('Toegerus om te floreer', 'Equipped to thrive'),
    lead: L('Ons mikpunt is dat ons leerders in Hoërskool Dinamika sal floreer, en om hulle te help om hul eie potensiaal te bereik. Ons glo dat die vier pilare waarop Dinamika gebou is, ons leerders sal toerus om eendag sukses te behaal.', 'Our goal is that learners will thrive at Dinamika, and to enable them to reach their full potential. We believe that the four pillars on which Dinamika is built will equip our learners to succeed one day.'),
  })}
  <div class="pillars" data-reveal data-reveal-stagger>${PILLARS.map((p) => `<article class="pillar">${ctx.img(p.img, { alt: '' })}<h3>${L(...p.t)}</h3><p>${L(...p.d)}</p><a href="${ctx.href(p.id)}">${L('Lees meer', 'Read more')}<span class="sr-only">: ${L(...p.t)}</span></a></article>`).join('')}</div>`, { tone: 'tint' })}
${ctaBand({ title: L('Ons waardes', 'Our values'), text: L('Lees meer oor die kernwaardes wat elke dag by Dinamika rig.', 'Read more about the core values that guide every day at Dinamika.'), actions: [btn({ href: ctx.href('values'), label: L('Ons Waardes', 'Our Values') })] })}`,
    };
  },

  values(ctx) {
    const { L } = ctx;
    return {
      desc: L('Die kernwaardes van Hoërskool Dinamika: uitnemendheid, trots, respek, insluiting en aanspreeklikheid.', 'The core values of Hoërskool Dinamika: excellence, pride, respect, inclusion and accountability.'),
      image: 'photos/leerderleiers.jpg',
      body: `${pageHero(ctx, { image: 'photos/leerderleiers.jpg', pos: '50% 30%', lead: L('Dinamika fokus op die volgende kernwaardes.', 'Dinamika focuses on the following core values.') })}
${section(`<div class="split">
    <div>${sectionHead({ kicker: L('Waarom waardes?', 'Why values?'), title: L('Die regte pad in die lewe', 'The right path in life') })}
      ${prose(`<p class="lead">${L('Waardes is positiewe onderrig wat ons help om die regte pad in die lewe te volg.', 'Values are the positive teachings that help us to follow the right path in life.')}</p>
      <p>${L('’n Kind wat opgroei met ’n goeie waardesisteem word ’n verantwoordelike volwassene en is bevoeg om tussen reg en verkeerd te onderskei.', 'A child who grows up with good values becomes a responsible adult who is able to distinguish between right and wrong.')}</p>`)}</div>
    <div class="split__media split__media--frame">${ctx.img('photos/leerderleiers.jpg', { alt: L('Leerders voor die skoolgebou onder die borde Respek, Insluiting en Trots', 'Learners in front of the school building beneath the signs Respect, Inclusion and Pride') })}</div>
  </div>`)}
${section(`${sectionHead({ kicker: L('Ons kernwaardes', 'Our core values'), title: L('Wat ons elke dag uitleef', 'What we live out every day'), center: true })}
  <div class="grid grid--3" data-reveal data-reveal-stagger>${VALUES.map((v) => `<article class="value-card">${ctx.img(v.img, { alt: '' })}<h3>${L(...v.t)}</h3><p>${L(...v.d)}</p></article>`).join('')}</div>`, { tone: 'tint' })}`,
    };
  },

  history(ctx) {
    const { L } = ctx;
    const heads = [
      { name: 'André Bouwer', years: L('1993 · Waarnemende hoof', '1993 · Acting principal') },
      { name: 'Dieter Böhmer', years: L('1994 · Eerste permanente hoof', '1994 · First permanent principal'), img: 'history/bohmer.webp' },
      { name: 'Mnr. Vollaard', nameEn: 'Mr Vollaard', years: L('2008 · Tweede hoof', '2008 · Second principal'), img: 'history/vollaard.webp' },
      { name: 'Johan Schutte', years: L('2016 · Huidige hoof', '2016 · Current principal'), img: 'staff/new-johan-schutte.webp' },
    ];
    return {
      desc: L('Die geskiedenis van Hoërskool Dinamika: van die samesmelting van Palmietfontein en Die Varing in 1993 tot vandag.', 'The history of Hoërskool Dinamika: from the merger of Palmietfontein and Die Varing in 1993 to today.'),
      image: 'history/koerant-nuwe-hoerskool.webp',
      body: `${pageHero(ctx, { image: 'history/koerant-nuwe-hoerskool.webp', pos: '30% 20%', lead: L('Van twee skole na een: die verhaal van Hoërskool Dinamika sedert 1993.', 'From two schools to one: the story of Hoërskool Dinamika since 1993.') })}
${section(`<div class="container--narrow" style="margin-inline:auto">
    ${sectionHead({ kicker: L('Tydlyn', 'Timeline'), title: L('Ons verhaal', 'Our story') })}
    <ol class="timeline">${TIMELINE.map(([y, af, en]) => `<li class="timeline__item" data-reveal><span class="timeline__year">${y}</span><div class="timeline__body"><p>${L(af, en)}</p></div></li>`).join('')}</ol>
  </div>`, { tone: 'tint' })}
${section(`${sectionHead({ kicker: L('Leierskap', 'Leadership'), title: L('Ons hoofde', 'Our principals') })}
  <div class="portraits">${heads.map((h) => `<figure class="portrait">${h.img ? ctx.img(h.img, { alt: '' }) : `<div class="portrait__ph" aria-hidden="true">AB</div>`}<figcaption><strong>${ctx.lang === 'en' && h.nameEn ? h.nameEn : h.name}</strong><span>${h.years}</span></figcaption></figure>`).join('')}</div>`)}
${section(`${sectionHead({ kicker: L('Uit die argief', 'From the archive'), title: L('Koerantberigte', 'Newspaper reports'), lead: L('Berigte oor Hoërskool Palmietfontein en die opening van die nuwe hoërskool. Klik op ’n berig om dit te vergroot.', 'Reports on Hoërskool Palmietfontein and the opening of the new high school. Select a report to enlarge it.') })}
  <div class="gallery--contain">${gallery(ctx, [
    { src: 'history/koerant-palmietfontein.webp', caption: { af: 'Koerantberig oor Hoërskool Palmietfontein', en: 'Newspaper report on Hoërskool Palmietfontein' } },
    { src: 'history/koerant-nuwe-hoerskool.webp', caption: { af: '“Nuwe hoërskool open sy deure”', en: '“New high school opens its doors”' } },
  ])}</div>`, { tone: 'tint' })}`,
    };
  },

  discipline(ctx) {
    const { L } = ctx;
    const legs = [
      { ico: 'heart', t: L('Verhoudings', 'Relationships'), d: L('Ons gaan as onderwysers hard werk om in ’n goeie verhouding met die leerders te staan. Die getalle en druk van die skool maak dit soms moeilik, maar ons is 100% oortuig daarvan dat liefdevolle verhoudings die enigste manier is om ’n kind werklik te vorm, te beïnvloed en te leer.', 'We as teachers work hard to build good relationships with the learners. The numbers and pressure at school make it slightly difficult, but we are 100% convinced that loving relationships are the only way to truly form, influence and teach a child.') },
      { ico: 'award', t: L('Insentiewe', 'Incentives'), d: L('Met die stelsel gee ons merietes aan leerders vir alles wat hulle goed doen. Dit lei tot insentiewe wat leerders motiveer om betrokke te raak en besig te wees met positiewe, konstruktiewe dinge by die skool.', 'With the system we award merits to learners for everything they do well. These lead to incentives that motivate learners to get involved and be busy with positive, constructive things at school.') },
      { ico: 'shield-check', t: L('Gevolge', 'Consequences'), d: L('Demerietes word toegeken vir luiheid en dinge wat ons nie wil hê leerders moet doen nie. Dit het detensie as gevolg, waarmee ons leerders ontmoedig om met verkeerde dinge besig te wees.', 'Demerits are awarded for laziness and for things we don’t want learners to do. These have detention as a consequence, through which we discourage learners from being busy with the wrong things.') },
    ];
    return {
      desc: L('Dissipline by Hoërskool Dinamika: voorkomende, ondersteunende en korrektiewe dissipline met ’n meriete- en demerietestelsel.', 'Discipline at Hoërskool Dinamika: preventative, supportive and corrective discipline with a merit and demerit system.'),
      image: 'photos/dissipline-banier.webp',
      body: `${pageHero(ctx, { image: 'photos/dissipline-banier.webp', pos: '88% 30%', lead: L('Die vermoë om ’n reeks beginsels in verband met orde en bestendigheid toe te pas.', 'The practice of training people to follow rules or a code of behaviour.') })}
${section(`${sectionHead({ kicker: L('Ons beginsels', 'Our principles'), title: L('By Dinamika fokus ons op', 'At Dinamika we focus on') })}
  <div class="grid grid--3" data-reveal data-reveal-stagger>
    ${infoCard({ ico: 'shield-check', title: L('Voorkomende dissipline', 'Preventative discipline'), body: `<p>${L('Duidelike reëls en verwagtinge wat probleme voorkom voordat dit ontstaan.', 'Clear rules and expectations that prevent problems before they arise.')}</p>` })}
    ${infoCard({ ico: 'heart', title: L('Ondersteunende dissipline', 'Supportive discipline'), body: `<p>${L('Leiding en berading wat leerders help om die regte keuses te maak.', 'Guidance and counselling that help learners make the right choices.')}</p>` })}
    ${infoCard({ ico: 'target', title: L('Korrektiewe dissipline', 'Corrective discipline'), body: `<p>${L('Merietes vir die beloning van goeie dade; demerietes as straf vir oortredings.', 'Merits reward good deeds; demerits are used as punishment for offences.')}</p>` })}
  </div>`)}
${section(`<div class="split" style="align-items:start">
    <div class="split__media split__media--frame">${ctx.img('staff/new-chirs-vd-schyff.webp', { alt: L('Mnr. Chris van der Schyff, adjunkhoof: dissipline en berading', 'Mr Chris van der Schyff, deputy principal: discipline and counselling') })}</div>
    <div>
      <p class="kicker">Chris van der Schyff · ${L('Adjunkhoof', 'Deputy Principal')}</p>
      <h2 class="section-title">${L('Dissipline by Dinamika', 'Discipline at Dinamika')}</h2>
      ${prose(`<p>${L('Daar word van alle skole verwag om ’n volledige dissiplinêre beleid in plek te hê waarmee die leerders volgens die Suid-Afrikaanse Skolewet bestuur word. Hierdie wet is baie groot en kompleks, en te moeilik om aan kinders te verduidelik en daagliks by die skool te gebruik.', 'All schools are required to have a full disciplinary policy in place, based on the South African Schools Act, through which learners are governed. This law is too big and complex to explain to learners and to use daily at school.')}</p>
      <p>${L('Daarom het die meeste skole ’n meriete- en demerietestelsel ontwikkel wat op die skolewet gebaseer is, maar ’n baie makliker manier is om leerders se gedrag en hul verhoudings met mekaar en hul onderwysers te bestuur. Dinamika se stelsel staan op drie eenvoudige bene:', 'That is why most schools have developed a merit and demerit system based on the Schools Act, which is an easy and practical way to manage learners’ behaviour and their relationships with one another and their teachers. Dinamika’s system stands on three simple principles:')}</p>`)}
    </div>
  </div>
  <div class="grid grid--3" style="margin-top:2.5rem" data-reveal data-reveal-stagger>${legs.map((g) => infoCard({ ico: g.ico, title: g.t, body: `<p>${g.d}</p>` })).join('')}</div>`, { tone: 'tint' })}`,
    };
  },

  holistic(ctx) {
    const { L } = ctx;
    return {
      desc: L('Holistiese ontwikkeling by Hoërskool Dinamika: sport, kultuur en sosiale geleenthede vir die ontwikkeling van die kind in totaliteit.', 'Holistic development at Hoërskool Dinamika: sport, culture and social opportunities that develop the whole child.'),
      image: 'photos/cheerleaders.jpg',
      body: `${pageHero(ctx, { image: 'photos/cheerleaders.jpg', pos: '50% 60%', lead: L('’n Holistiese benadering in opvoeding fokus op alle aspekte van ’n kind se ontwikkeling — nie net hul akademiese vordering nie.', 'A holistic approach to education focuses on all aspects of a child’s growth — not just their academic progress.') })}
${section(`${sectionHead({ kicker: L('Die kind in totaliteit', 'The whole child'), title: L('Ontwikkeling op elke terrein', 'Growth in every area'), center: true })}
  ${cardGrid([
    linkCard({ href: ctx.href('sport'), media: ctx.img('photos/hokkie-medaljes.jpg', { alt: '' }), meta: L('12 sportsoorte', '12 sports'), title: L('Sport', 'Sport'), text: L('Sport blaas sosiale en kulturele lewe in ’n skool in. Dit vestig ’n gemeenskap binne die skool en skep lewenslange verbintenisse tussen leerders.', 'Sport breathes social and cultural life into a school. It establishes a community within the school and creates lifelong connections between learners.'), cta: L('Ontdek sport', 'Explore sport') }),
    linkCard({ href: ctx.href('culture'), media: ctx.img('photos/toneel-verhoog.jpg', { alt: '' }), meta: L('Koor · Toneel · Redenaars · Eisteddfod', 'Choir · Drama · Public speaking · Eisteddfod'), title: L('Kultuur', 'Culture'), text: L('Van tonele en produksies tot konserte en kore — elke leerder kry die kans om op die verhoog te skitter.', 'From plays and productions to concerts and choirs — every learner gets the chance to shine on stage.'), cta: L('Ontdek kultuur', 'Explore culture') }),
    linkCard({ href: ctx.href('social'), media: ctx.img('photos/cheerleaders.jpg', { alt: '' }), meta: L('Namie-gees', 'Namie spirit'), title: L('Sosiaal', 'Social'), text: L('Skoolgees bou verhoudings en ’n gevoel van behoort, en bevorder ’n dieper aanvaarding van ons verskille.', 'School spirit builds relationships and a sense of belonging, and promotes a deeper acceptance of our differences.'), cta: L('Lees meer', 'Read more') }),
  ], 3)}`, { tone: 'tint' })}`,
    };
  },

  anthem(ctx) {
    const { L } = ctx;
    return {
      desc: L('Die skoollied en leuse van Hoërskool Dinamika: Reik na die Lig.', 'The school anthem and motto of Hoërskool Dinamika: Reach for the Light.'),
      body: `${pageHero(ctx, { lead: L('Die skoollied is in 2022 herskryf in Hoërskool Dinamika se twee tale van onderrig.', 'The school anthem was rewritten in 2022 in Hoërskool Dinamika’s two languages of learning and teaching.') })}
${section(`<div class="container--narrow" style="margin-inline:auto">
    <div class="lyrics">
      <p class="lyrics__motto">${SCHOOL.motto}</p>
      <!-- Plak die skoollied se woorde hier (src/pages/our-school.js → anthem). -->
      <p class="muted">${L('Die woorde van die skoollied — in Afrikaans en Engels — word hier geplaas.', 'The words of the school anthem — in Afrikaans and English — appear here.')}</p>
    </div>
  </div>`)}
${section(`<div class="split">
    <div class="crest-badge">${ctx.img('brand/wapen.webp', { alt: L('Wapen van Hoërskool Dinamika met die leuse Reik na die Lig', 'Hoërskool Dinamika crest with the motto Reik na die Lig') })}</div>
    <div>
      ${sectionHead({ kicker: L('Ons leuse', 'Our motto'), title: 'Reik na die Lig' })}
      ${prose(`<p>${L('Ons skoolleuse motiveer ons om nie tevrede te wees met middelmatigheid nie, maar eerder om hoër te reik, verder te gaan, harder te probeer en altyd na uitnemendheid te mik.', 'Our school motto motivates us not to settle for mediocrity, but instead to reach higher, go further, push harder and always aim for excellence.')}</p>
      <p>${L('Ons handel nie in die donker nie, maar wandel in die lig. Ons reik na die lig by Dinamika.', 'We do not operate in the dark, but walk in the light. We reach for the light at Dinamika.')}</p>`)}
    </div>
  </div>`, { tone: 'tint' })}`,
    };
  },
};
