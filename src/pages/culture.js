import { icon } from '../icons.js';
import { section, sectionHead, pageHero, linkCard, cardGrid, ctaBand, btn, prose, gallery, quote, iconList, infoCard } from '../components.js';
import { PHOTOS } from './news.js';

const cultureCta = (ctx) => ctaBand({
  title: ctx.L('Klaar vir die kollig?', 'Ready for the spotlight?'),
  text: ctx.L('Kontak mev. Zelanda Vosloo, ons kultuurvoog, of die skoolkantoor om betrokke te raak.', 'Contact Mrs Zelanda Vosloo, our culture organiser, or the school office to get involved.'),
  actions: [btn({ href: 'mailto:zvosloo@namies.co.za', label: ctx.L('E-pos mev. Vosloo', 'E-mail Mrs Vosloo'), ico: 'mail', iconEnd: null }), btn({ href: ctx.href('contact'), label: ctx.L('Kontak Ons', 'Contact Us'), variant: 'light', iconEnd: null })],
});

export default {
  culture(ctx) {
    const { L } = ctx;
    return {
      desc: L('Kultuur by Hoërskool Dinamika: koor, toneel, redenaars, die eisteddfod en sosiale geleenthede.', 'Culture at Hoërskool Dinamika: choir, drama, public speaking, the eisteddfod and social events.'),
      image: 'photos/toneel-verhoog.jpg',
      body: `${pageHero(ctx, {
        image: 'photos/toneel-verhoog.jpg', pos: '50% 60%',
        lead: L('Van tonele, produksies en konserte tot kunswedstryde en kore — kultuur gee elke leerder die kans om te skitter.', 'From plays, productions and concerts to art competitions and choirs — culture gives every learner the chance to shine.'),
      })}
${section(`<div class="split">
    <div class="split__media split__media--frame">${ctx.img('staff/new-zelanda-vosloo.webp', { alt: L('Mev. Zelanda Vosloo, kultuurvoog', 'Mrs Zelanda Vosloo, culture organiser') })}</div>
    <div>
      <p class="kicker">${L('Ons kultuurvoog', 'Our culture organiser')}</p>
      <h2 class="section-title">Zelanda Vosloo</h2>
      ${prose(`<p>${L('Mev. Zelanda Vosloo is die kultuurvoog by Hoërskool Dinamika en oorsien alle aspekte van die kultuur. Sy is die afgelope 18 jaar by kultuur betrokke: van tonele afrig, produksies en konserte tot kunswedstryd-afrigting — en sy het ’n voorliefde vir kore.', 'Mrs Zelanda Vosloo is the culture organiser at Hoërskool Dinamika and oversees all aspects of culture. She has been involved in culture for the past 18 years: from coaching plays, productions and concerts to art competition coaching — and she has a fondness for choirs.')}</p>
      <p>${L('Haar dramalisensiaat het haar ondervinding as ’n Dramatiese Kunste-onderwyseres op IEB-vlak uitgebrei. Alhoewel haar hoofvak Afrikaans is, bly toneelspel haar voorliefde. Haar doel is om elke leerder die kans te gun om sy of haar potensiaal op die verhoog te ontdek en te skitter!', 'Her drama licentiate expanded her experience as a Dramatic Arts teacher at IEB level. Although her major is Afrikaans, acting remains her passion. Her goal is to give every learner the chance to discover his or her potential on stage — and to shine!')}</p>`)}
    </div>
  </div>`)}
${section(`${sectionHead({ kicker: L('Aktiwiteite', 'Activities'), title: L('Ontdek ons kultuur', 'Discover our culture') })}
  ${cardGrid([
    linkCard({ href: ctx.href('choir'), media: ctx.img('photos/koor.jpg', { alt: '' }), title: L('Koor', 'Choir'), text: L('’n Gemengde koor onder leiding van mev. Irene Morrick.', 'A mixed choir led by Mrs Irene Morrick.'), cta: L('Lees meer', 'Read more') }),
    linkCard({ href: ctx.href('drama'), media: ctx.img('photos/toneel-spelers.jpg', { alt: '' }), title: L('Toneel', 'Drama'), text: L('Produksies en tonele onder leiding van mnr. Ruan Coetzee.', 'Productions and plays led by Mr Ruan Coetzee.'), cta: L('Lees meer', 'Read more') }),
    linkCard({ href: ctx.href('public-speaking'), media: ctx.img('photos/redenaars.jpg', { alt: '' }), title: L('Redenaars', 'Public Speaking'), text: L('Leer om jou sê te sê — met die ATKV-kompetisie as teiken.', 'Learn to have your say — with the ATKV competition as a goal.'), cta: L('Lees meer', 'Read more') }),
    linkCard({ href: ctx.href('eisteddfod'), media: `<div class="tile">${icon('music', { size: 64 })}</div>`, title: 'Eisteddfod', text: L('Optredes op die verhoog en terugvoer van beoordelaars.', 'Performances on stage and feedback from adjudicators.'), cta: L('Lees meer', 'Read more') }),
    linkCard({ href: ctx.href('social'), media: ctx.img('photos/cheerleaders.jpg', { alt: '' }), title: L('Sosiaal & Namie-gees', 'Social & Namie Spirit'), text: L('Van Meneer en Mejuffrou Dinamika tot die matriekafskeid.', 'From Mr and Ms Dinamika to the matric farewell.'), cta: L('Lees meer', 'Read more') }),
  ], 3)}`, { tone: 'tint' })}
${section(`${sectionHead({ kicker: L('Foto’s', 'Photos'), title: L('Kultuur in beeld', 'Culture in pictures') })}
  ${gallery(ctx, PHOTOS.filter((p) => p.album === 'culture'))}`)}
${cultureCta(ctx)}`,
    };
  },

  choir(ctx) {
    const { L } = ctx;
    return {
      desc: L('Hoërskool Dinamika se gemengde koor onder leiding van mev. Irene Morrick.', 'Hoërskool Dinamika’s mixed choir, led by Mrs Irene Morrick.'),
      image: 'photos/koor.jpg',
      body: `${pageHero(ctx, { image: 'photos/koor.jpg', pos: '50% 30%', kicker: L('Kultuur', 'Culture'), lead: L('Ná die Covid-gogga het Dinamika weer ’n koor gestig — en dié musiek-gogga het behoorlik gebyt!', 'After the Covid bug, Dinamika started a choir again — and this music bug has truly bitten!') })}
${section(`<dl class="facts">
    <div><dt>${L('Soort koor', 'Type of choir')}</dt><dd>${L('Gemengde koor', 'Mixed choir')}</dd></div>
    <div><dt>${L('Dirigent', 'Conductor')}</dt><dd>${L('Mev. Irene Morrick', 'Mrs Irene Morrick')}</dd></div>
    <div><dt>${L('Ondersteuning', 'Support')}</dt><dd>${L('Mev. Carelse', 'Mrs Carelse')}</dd></div>
  </dl>
  <div class="split">
    <div>${prose(`<p class="lead">${L('Die gemengde koor staan onder leiding van ’n welbekwame en ou bekende van Alberton, mev. Irene Morrick, wat 38 jaar se ondervinding in koorafrigting en musiek het.', 'The mixed choir is led by an able and well-known Alberton figure, Mrs Irene Morrick, who has 38 years of experience in coaching choirs and music.')}</p>
      <p>${L('Op eie bodem help mev. Carelse met die administrasie en by oefeninge met die inoefening van stemme en stempartye. Mev. Carelse het self as jongmens in die Cantare Kinderkoor en die Colla Voce-jeugkoor gesing, en ook op universiteit by die serregroepe.', 'On home ground, Mrs Carelse helps with the administration and at rehearsals, practising voices and voice parts. Mrs Carelse herself sang in the Cantare Children’s Choir and the Colla Voce Youth Choir as a young person, and in the serenade groups at university.')}</p>`)}
      ${quote({ text: L('Dit is vir my lekker om my liefde vir sang en koor by Dinamika te kan uitleef deur van hulp te wees by die koor.', 'It’s lovely for me to live out my love for singing and choir at Dinamika by helping with the choir.'), name: L('Mev. Carelse', 'Mrs Carelse') })}
    </div>
    <div class="split__media split__media--frame">${ctx.img('photos/koor.jpg', { alt: L('Plakkaat van Dinamika se koor: die koorlede in skooldrag met blougroen serpe', 'Dinamika choir poster: choir members in school uniform with teal stoles') })}</div>
  </div>`)}
${cultureCta(ctx)}`,
    };
  },

  drama(ctx) {
    const { L } = ctx;
    return {
      desc: L('Toneel by Hoërskool Dinamika onder leiding van mnr. Ruan Coetzee.', 'Drama at Hoërskool Dinamika, led by Mr Ruan Coetzee.'),
      image: 'photos/toneel-spelers.jpg',
      body: `${pageHero(ctx, { image: 'photos/toneel-spelers.jpg', pos: '50% 55%', kicker: L('Kultuur', 'Culture'), lead: L('Waar leerders leer om stories op die verhoog lewe te gee.', 'Where learners learn to bring stories to life on stage.') })}
${section(`<div class="split" style="align-items:start">
    <div class="split__media split__media--frame">${ctx.img('staff/new-ruan-coetzee.webp', { alt: L('Mnr. Ruan Coetzee', 'Mr Ruan Coetzee') })}</div>
    <div>
      <p class="kicker">${L('Toneel', 'Drama')}</p>
      <h2 class="section-title">Ruan Coetzee</h2>
      ${prose(`<p>${L('Mnr. Ruan Coetzee het sy honneurs in film en visuele media by Kovsies verwerf, en hy het ’n graad in drama- en teaterkuns saam met sy graad in onderwys. Sy passie vir drama en toneelspel is van jongs af deel van hom — sy hart klop vir die teater en hy kyk graag produksies wanneer hy kan.', 'Mr Ruan Coetzee obtained his honours in film and visual media at Kovsies, and he has a degree in drama and theatre arts along with his degree in education. His passion for drama and acting has been part of him from a young age — his heart beats for the theatre and he likes to watch productions whenever he can.')}</p>
      <p>${L('Sy studies in Bloemfontein het hom die nodige ondervinding gegee om drama in elke aspek van sy lewe te benut en te geniet. Hy het in produksies soos <em>Swannemeer</em> en <em>Romeo and Juliet</em> gespeel, en saam met Nadia Valvekens en Theodor Meintjies aan internasionale produksies gewerk.', 'His studies in Bloemfontein gave him the experience to use and enjoy drama in every aspect of his life. He performed in productions such as <em>Swannemeer</em> and <em>Romeo and Juliet</em>, and worked with Nadia Valvekens and Theodor Meintjies on international productions.')}</p>
      <p>${L('Hy skryf tans produksies vir die verhoog en speel in sy vrye tyd met digkuns en boekskryf.', 'He currently writes productions for the stage and plays with poetry and writing books in his spare time.')}</p>`)}
      <p>${L('Dramatiese Kunste is ook ’n keusevak in graad 10 tot 12.', 'Dramatic Arts is also a choice subject in Grades 10 to 12.')} <a href="${ctx.href('subjects-10-12')}">${L('Sien die vakke', 'See the subjects')}</a></p>
    </div>
  </div>`)}
${section(`${sectionHead({ kicker: L('Foto’s', 'Photos'), title: L('Op die verhoog', 'On stage') })}
  ${gallery(ctx, PHOTOS.filter((p) => ['photos/toneel-verhoog.jpg', 'photos/toneel-spelers.jpg'].includes(p.src)))}`, { tone: 'tint' })}
${cultureCta(ctx)}`,
    };
  },

  'public-speaking'(ctx) {
    const { L } = ctx;
    return {
      desc: L('Redenaars by Hoërskool Dinamika: ’n interne kompetisie in Februarie en deelname aan die ATKV-redenaarskompetisie.', 'Public speaking at Hoërskool Dinamika: an internal competition in February and entry into the ATKV public speaking competition.'),
      image: 'photos/redenaars.jpg',
      body: `${pageHero(ctx, { image: 'photos/redenaars.jpg', pos: '50% 40%', kicker: L('Kultuur', 'Culture'), lead: L('’n Mens moet weet hoe om jou sê te sê — en redenaars help leerders om dit te kan doen.', 'You need to know how to have your say — and public speaking helps learners do exactly that.') })}
${section(`<dl class="facts">
    <div><dt>${L('Interne kompetisie', 'Internal competition')}</dt><dd>${L('Vroeg in Februarie', 'Early in February')}</dd></div>
    <div><dt>${L('Eksterne kompetisie', 'External competition')}</dt><dd>${L('ATKV-redenaarskompetisie', 'ATKV public speaking competition')}</dd></div>
    <div><dt>${L('In beheer', 'In charge')}</dt><dd>${L('Mev. Feenstra', 'Mrs Feenstra')}</dd></div>
  </dl>
  <div class="container--narrow">${prose(`<p class="lead">${L('Mev. Feenstra is die afgelope sewe jaar in beheer van die redenaars. Sy het ’n BA(Ed)- en BEd Hons-graad, wat handig te pas kom aangesien haar hoofvakke Afrikaans en Engels is.', 'Mrs Feenstra has been in charge of public speaking for the past seven years. She holds a BA(Ed) and a BEd Hons degree, which come in handy as her majors are Afrikaans and English.')}</p>
    <p>${L('Redenasievermoë is ’n belangrike vaardigheid wat elke mens in die lewe nodig het. Daarom gaan dit by die redenaars nie regtig oor wie wen nie, maar eerder oor deelname.', 'The ability to speak well is an important skill everyone needs in life. That is why public speaking is not really about who wins, but about taking part.')}</p>
    <p>${L('Elke jaar hou ons vroeg in Februarie ’n interne kompetisie, en ons skool neem ook deel aan die ATKV-redenaarskompetisie. Ons het nog nie tot die landsfinaal deurgedring nie, maar ons werk daaraan. Hoe sê hulle nou weer? Aanhouer wen!', 'Every year we hold an internal competition early in February, and our school also takes part in the ATKV public speaking competition. We have not made it to the national final yet, but we are working on it. As they say: perseverance wins!')}</p>`)}</div>`)}
${cultureCta(ctx)}`,
    };
  },

  eisteddfod(ctx) {
    const { L } = ctx;
    const kinds = [
      { ico: 'music', t: L('Sang en musiek', 'Singing and music') },
      { ico: 'mic', t: L('Voordrag', 'Recitation') },
      { ico: 'sparkles', t: L('Drama', 'Drama') },
      { ico: 'palette', t: L('Kuns', 'Art') },
    ];
    return {
      desc: L('Die eisteddfod as deel van die kultuurprogram by Hoërskool Dinamika.', 'The eisteddfod as part of the culture programme at Hoërskool Dinamika.'),
      body: `${pageHero(ctx, { kicker: L('Kultuur', 'Culture'), lead: L('Die eisteddfod is deel van Dinamika se kultuurprogram — ’n kans om op te tree en van beoordelaars te leer.', 'The eisteddfod is part of Dinamika’s culture programme — a chance to perform and to learn from adjudicators.') })}
${section(`<div class="split" style="align-items:start">
    <div>
      ${sectionHead({ kicker: 'Eisteddfod', title: L('Groei deur op te tree', 'Growing through performance') })}
      ${prose(`<p>${L('By ’n eisteddfod tree deelnemers individueel of in groepe op en ontvang hulle terugvoer van kundige beoordelaars. Dit bou selfvertroue, verhoogervaring en die dissipline om vir ’n optrede voor te berei.', 'At an eisteddfod participants perform individually or in groups and receive feedback from expert adjudicators. It builds confidence, stage experience and the discipline to prepare for a performance.')}</p>
      <p>${L('Kontak mev. Zelanda Vosloo, die kultuurvoog, vir inligting oor inskrywings en die kategorieë vir die jaar.', 'Contact Mrs Zelanda Vosloo, the culture organiser, for information about entries and the year’s categories.')}</p>`)}
    </div>
    <div class="info-card"><div><h3 class="info-card__title">${L('Tipiese kategorieë', 'Typical categories')}</h3>${iconList(kinds.map((k) => k.t), 'star')}</div></div>
  </div>`)}
${cultureCta(ctx)}`,
    };
  },

  social(ctx) {
    const { L } = ctx;
    const learners = [L('Meneer en Mejuffrou Dinamika', 'Mr and Ms Dinamika'), L('Matriekafskeid', 'Matric farewell'), L('Valentynsbal', 'Valentine’s ball'), L('Kultuuraande', 'Culture evenings'), L('Groentjiekonsert (graad 8)', 'Grade 8 concert'), L('Prysuitdeling', 'Prize-giving')];
    const parents = [L('Manne-aand', 'Men’s evening'), L('Gholfdag', 'Golf day'), L('Potjiekoskompetisie', 'Potjie competition'), L('Damestee', 'Ladies’ tea'), L('Musiekpret', 'Music evening')];
    return {
      desc: L('Namie-gees en sosiale geleenthede by Hoërskool Dinamika vir leerders en ouers.', 'Namie spirit and social events at Hoërskool Dinamika for learners and parents.'),
      image: 'photos/cheerleaders.jpg',
      body: `${pageHero(ctx, { image: 'photos/cheerleaders.jpg', pos: '50% 55%', kicker: L('Kultuur', 'Culture'), lead: L('Skoolgees bou verhoudings en ’n gevoel van behoort, en bevorder ’n dieper, ryker aanvaarding van ons verskille.', 'School spirit builds relationships and a sense of belonging, and promotes a deeper, richer acceptance of our differences.') })}
${section(`<div class="container--narrow" style="margin-inline:auto">${quote({ text: L('Gees lê in die lied wat ons sing, maar bo alles die lied in ons hart.', 'Spirit lies within the song we sing, but above all the song in our hearts.'), name: L('Namie-gees', 'Namie spirit') })}</div>`)}
${section(`${sectionHead({ kicker: L('Sosiale kalender', 'Social calendar'), title: L('Geleenthede by Dinamika', 'Events at Dinamika'), center: true })}
  <div class="grid grid--2" style="align-items:start" data-reveal data-reveal-stagger>
    ${infoCard({ ico: 'sparkles', title: L('Vir leerders', 'For learners'), body: iconList(learners, 'star') })}
    ${infoCard({ ico: 'users', title: L('Vir ouers', 'For parents'), body: iconList(parents, 'star') })}
  </div>`, { tone: 'tint' })}
${section(`${sectionHead({ kicker: L('Foto’s', 'Photos'), title: L('Namie-gees in beeld', 'Namie spirit in pictures') })}
  ${gallery(ctx, PHOTOS.filter((p) => ['photos/cheerleaders.jpg', 'photos/leerderleiers.jpg', 'news/saalopening.jpg'].includes(p.src)))}`)}
${cultureCta(ctx)}`,
    };
  },
};
