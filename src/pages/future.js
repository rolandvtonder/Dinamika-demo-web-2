import { SCHOOL } from '../site.js';
import { SPORTS } from '../data/sports.js';
import { icon } from '../icons.js';
import { section, sectionHead, pageHero, linkCard, cardGrid, ctaBand, btn, prose, infoCard, iconList, accordion, table, termDates } from '../components.js';

const docList = (L) => [
  L('ID of paspoort', 'ID or passport'),
  L('SA-geboortesertifikaat', 'SA birth certificate'),
  L('Bewys van huisadres: ’n munisipale rekening, nie ouer as 3 maande nie, in die naam van die aansoeker se ouer', 'Proof of residence: a municipal account, not older than 3 months, in the name of the applicant’s parent'),
  L('Bewys van werksadres, indien onder die werksadres aansoek gedoen word', 'Proof of work address, if applying under the work address'),
];
const tenantList = (L) => [
  L('Munisipale rekening, nie ouer as 3 maande nie, in die naam van die huiseienaar', 'Municipal account, not older than 3 months, in the name of the landlord'),
  L('ID van die huiseienaar', 'ID of the landlord'),
  L('Huurooreenkoms geteken deur die huurder en verhuurder', 'Lease agreement signed by the tenant and landlord'),
  L('Huurbetalingstrokie, nie ouer as 3 maande nie', 'Rental payment slip, not older than 3 months'),
  L('Enige rekening in die naam van die aansoeker met die volle fisiese adres', 'Any statement of account in the applicant’s name showing the full physical address'),
];

const officeContacts = (ctx) => `<div class="grid grid--2">
  ${infoCard({ ico: 'banknote', title: `${SCHOOL.accounts.name} · ${ctx.L('Rekeninge', 'Accounts')}`, body: `<p><a href="mailto:${SCHOOL.accounts.email}">${SCHOOL.accounts.email}</a></p><p><a href="${SCHOOL.accounts.phoneHref}">${SCHOOL.accounts.phone}</a></p>` })}
  ${infoCard({ ico: 'clipboard-list', title: `${SCHOOL.reception.name} · ${ctx.L('Ontvangs', 'Reception')}`, body: `<p><a href="mailto:${SCHOOL.reception.email}">${SCHOOL.reception.email}</a></p><p><a href="${SCHOOL.phoneHref}">${SCHOOL.phone}</a></p>` })}
</div>`;

export default {
  future(ctx) {
    const { L } = ctx;
    const reasons = [
      { ico: 'languages', t: L('Parallelmedium', 'Parallel medium'), d: L('Onderrig in Afrikaans én Engels — ’n hoërskool vir die hele gemeenskap.', 'Teaching in Afrikaans and English — a high school for the whole community.') },
      { ico: 'users', t: L('Klein klasse', 'Small classes'), d: L('Klasgroottes wissel van 15 tot 30 leerders, sodat elke leerder aandag kry.', 'Class sizes range from 15 to 30 learners, so every learner gets attention.') },
      { ico: 'layers', t: L('Vier pilare', 'Four pillars'), d: L('Akademie, dissipline, Christelike waardes en holistiese ontwikkeling.', 'Academics, discipline, Christian values and holistic development.') },
      { ico: 'book-open', t: L('Wye vakkeuse', 'Wide subject choice'), d: L('Van Wiskunde en IT tot Landboutegnologie, Gasvryheidstudies en die kunste.', 'From Mathematics and IT to Agricultural Technology, Hospitality Studies and the arts.') },
      { ico: 'trophy', t: L('Sport en kultuur', 'Sport and culture'), d: L('Twaalf sportsoorte plus koor, toneel, redenaars en die eisteddfod.', 'Twelve sports, plus choir, drama, public speaking and the eisteddfod.') },
      { ico: 'lightbulb', t: L('Moderne klaskamers', 'Modern classrooms'), d: L('’n Projektor in elke klaskamer en ’n kragopwekker wat klasse tydens beurtkrag aan die gang hou.', 'A projector in every classroom and a generator that keeps classes running during load shedding.') },
    ];
    return {
      desc: L('Toekomstige Namies: waarom Hoërskool Dinamika, hoe om aansoek te doen, skoolfonds en skooldrag.', 'Future Namies: why Hoërskool Dinamika, how to apply, school fees and uniform.'),
      image: 'photos/leerderleiers.jpg',
      body: `${pageHero(ctx, { image: 'photos/leerderleiers.jpg', pos: '50% 60%', lead: L('Alles wat nuwe ouers en leerders nodig het om deel van die Dinamika-familie te word.', 'Everything new parents and learners need to become part of the Dinamika family.') })}
${section(`${sectionHead({ kicker: L('Waarom Dinamika?', 'Why Dinamika?'), title: L('’n Skool wat leerders bemagtig', 'A school that empowers learners'), center: true })}
  <div class="grid grid--3" data-reveal data-reveal-stagger>${reasons.map((r) => infoCard({ ico: r.ico, title: r.t, body: `<p>${r.d}</p>` })).join('')}</div>`)}
${section(`<div class="split" style="align-items:start">
    <div>
      ${sectionHead({ kicker: L('In drie stappe', 'In three steps'), title: L('Hoe om aansoek te doen', 'How to apply') })}
      <ol class="steps">
        <li><strong>${L('Graad 8', 'Grade 8')}:</strong> ${L('doen aanlyn aansoek by die Gauteng Departement van Onderwys (GDE).', 'apply online with the Gauteng Department of Education (GDE).')}</li>
        <li><strong>${L('Graad 9–12', 'Grades 9–12')}:</strong> ${L('haal ’n aansoekvorm vir interne plasing by die skoolkantoor af.', 'collect an internal placement application form at the school office.')}</li>
        <li>${L('Handig die voltooide vorm en die oorspronklike gesertifiseerde dokumente by die skool in.', 'Hand in the completed form and the original certified documents at the school.')}</li>
      </ol>
      <p style="margin-top:1.5rem">${btn({ href: ctx.href('applications'), label: L('Volledige aansoekproses', 'Full application process'), variant: 'navy' })}</p>
    </div>
    ${termDates(ctx)}
  </div>`, { tone: 'tint' })}
${section(cardGrid([
    linkCard({ href: ctx.href('applications'), ico: 'clipboard-list', title: ctx.title('applications'), text: L('Die aansoekproses en die dokumente wat u benodig.', 'The application process and the documents you need.'), cta: L('Lees meer', 'Read more') }),
    linkCard({ href: ctx.href('fees'), ico: 'banknote', title: ctx.title('fees'), text: L('Skoolgeld, deposito, kortings en betaalopsies.', 'Tuition fees, deposit, discounts and payment options.'), cta: L('Lees meer', 'Read more') }),
    linkCard({ href: ctx.href('uniform'), ico: 'shirt', title: ctx.title('uniform'), text: L('Somer- en winterdrag, sportdrag en verskaffers.', 'Summer and winter uniform, sports kit and stockists.'), cta: L('Lees meer', 'Read more') }),
  ], 3))}
${ctaBand({ title: L('Vrae oor inskrywings?', 'Questions about admissions?'), text: L('Die skoolkantoor help graag gedurende kantoorure.', 'The school office is happy to help during office hours.'), actions: [btn({ href: ctx.href('contact'), label: L('Kontak Ons', 'Contact Us') }), btn({ href: SCHOOL.phoneHref, label: SCHOOL.phone, ico: 'phone', variant: 'light', iconEnd: null })] })}`,
    };
  },

  applications(ctx) {
    const { L } = ctx;
    const gr8 = [
      `${L('Ouers doen aanlyn aansoek by die Gauteng Departement van Onderwys', 'Parents apply online with the Gauteng Department of Education')}: <a href="${SCHOOL.gdeAdmissions}" target="_blank" rel="noopener">gdeadmissions.gov.za<span class="sr-only"> (${L('maak in nuwe oortjie oop', 'opens in a new tab')})</span></a>.`,
      L('Voltooi die aansoekvorm volledig.', 'Complete the application form in full.'),
      L('Laat die vereiste dokumente sertifiseer (sien die lys hieronder).', 'Have the required documents certified (see the list below).'),
      L('Handig die leerder se graad 7-skoolrapport in.', 'Hand in the learner’s Grade 7 school report.'),
      L('Handig die aansoekvorm sowel as die oorspronklike gesertifiseerde dokumente by die skool in.', 'Submit the application form as well as the original certified documents at the school.'),
      L('Hoërskool Dinamika en die Gauteng Departement van Onderwys verifieer al die dokumente. Alle graad 8-plasings word deur die Departement gedoen.', 'Hoërskool Dinamika and the Gauteng Department of Education verify all the documents. All Grade 8 placements are made by the Department.'),
      L('Na plasings ontvang ouers verdere korrespondensie van die skool.', 'After placements, parents receive further correspondence from the school.'),
    ];
    const internal = [
      L('Haal ’n aansoekvorm by Hoërskool Dinamika se kantore af.', 'Collect an application form from Hoërskool Dinamika’s offices.'),
      L('Voltooi die aansoekvorm volledig.', 'Complete the application form in full.'),
      L('Laat die vereiste dokumente sertifiseer (sien die lys hieronder).', 'Have the required documents certified (see the list below).'),
      L('Handig die leerder se nuutste skoolrapport en portefeuljes in.', 'Hand in the learner’s latest school report and portfolios.'),
      L('Handig die aansoekvorm sowel as die oorspronklike gesertifiseerde dokumente by die skool in.', 'Submit the application form as well as the original certified documents at the school.'),
      L('Ouers ontvang verdere korrespondensie van die skool.', 'Parents receive further correspondence from the school.'),
    ];
    return {
      desc: L('Aansoeke by Hoërskool Dinamika: graad 8 via die GDE en interne plasings vir graad 9 tot 12, met die dokumente wat u benodig.', 'Applications at Hoërskool Dinamika: Grade 8 via the GDE and internal placements for grades 9 to 12, with the documents you need.'),
      body: `${pageHero(ctx, { lead: L('Graad 8-aansoeke word aanlyn by die GDE gedoen. Vir interne plasings in graad 9 tot 12 doen u direk by die skool aansoek.', 'Grade 8 applications are made online with the GDE. For internal placements in grades 9 to 12 you apply directly at the school.') })}
${section(`<div class="grid grid--2" style="align-items:start">
    <div>
      ${sectionHead({ kicker: L('Graad 8', 'Grade 8'), title: L('Graad 8-aansoeke', 'Grade 8 applications') })}
      <ol class="steps">${gr8.map((s) => `<li>${s}</li>`).join('')}</ol>
      <div class="note">${icon('info', { size: 20 })}<p>${L('Die GDE kondig die aanlyn aansoektydperk vir graad 1 en graad 8 elke jaar aan. Hou die Departement se webwerf dop vir die datums.', 'The GDE announces the online application period for Grade 1 and Grade 8 every year. Keep an eye on the Department’s website for the dates.')}</p></div>
      ${btn({ href: SCHOOL.gdeAdmissions, label: L('GDE aanlyn aansoeke', 'GDE online admissions'), external: true, ctx })}
    </div>
    <div>
      ${sectionHead({ kicker: L('Graad 9–12', 'Grades 9–12'), title: L('Interne graadplasings', 'Internal grade placements') })}
      <ol class="steps">${internal.map((s) => `<li>${s}</li>`).join('')}</ol>
    </div>
  </div>`)}
${section(`${sectionHead({ kicker: L('Kontrolelys', 'Checklist'), title: L('Dokumente wat gesertifiseer moet word', 'Documents that must be certified') })}
  <div class="grid grid--2" style="align-items:start">
    <div class="info-card"><div><h3 class="info-card__title">${L('Alle aansoekers', 'All applicants')}</h3>${iconList(docList(L))}</div></div>
    <div class="info-card"><div><h3 class="info-card__title">${L('Huurders — bewys van adres', 'Tenants — proof of address')}</h3>${iconList(tenantList(L))}</div></div>
  </div>`, { tone: 'tint' })}
${section(`${sectionHead({ kicker: L('Vrae?', 'Questions?'), title: L('Kontak mev. Lotriet of mev. Labotski', 'Contact Mrs Lotriet or Mrs Labotski') })}${officeContacts(ctx)}`)}`,
    };
  },

  fees(ctx) {
    const { L } = ctx;
    const r = (n) => `R${n}`;
    return {
      desc: L('Skoolfonds by Hoërskool Dinamika: jaarlikse skoolgeld, deposito, broer-en-suster-kortings en vroeë betaling.', 'School fees at Hoërskool Dinamika: annual tuition, deposit, sibling discounts and early payment.'),
      body: `${pageHero(ctx, { lead: L('Skoolgeld, deposito, kortings en wie om te kontak.', 'Tuition fees, deposit, discounts and who to contact.') })}
${section(`<div class="note">${icon('info', { size: 20 })}<p>${L('<strong>Let wel:</strong> die bedrae hieronder is vir die <strong>2023-begrotingsjaar</strong>, soos op die vorige webwerf gepubliseer. Skoolgelde word elke November by die algemene jaarvergadering vir die volgende jaar bepaal — kontak die rekeningekantoor vir die huidige bedrae.', '<strong>Please note:</strong> the amounts below are for the <strong>2023 financial year</strong>, as published on the previous website. School fees are set every November at the annual general meeting for the following year — contact the accounts office for the current amounts.')}</p></div>
  <div class="grid grid--2" style="align-items:start">
    ${table({
      caption: L('Onderriggelde per kind (2023)', 'Tuition fees per child (2023)'),
      head: [L('Kind', 'Child'), L('Per jaar', 'Per year')],
      rows: [
        [L('Eerste kind', 'First child'), `<span class="num">${r('25 000.00')}</span>`],
        [L('Tweede kind', 'Second child'), `<span class="num">${r('25 000.00')}</span>`],
        [L('Derde kind', 'Third child'), `<span class="num">${r('12 500.00')}</span>`],
        [L('Vierde kind of meer', 'Fourth child or more'), `<strong>${L('Gratis', 'Free')}</strong>`],
      ],
    })}
    ${table({
      caption: L('Korting op R25 000.00 (2023)', 'Discount on R25 000.00 (2023)'),
      head: [L('Ten volle betaal voor of op', 'Paid in full before or on'), L('Korting', 'Discount')],
      rows: [
        [L('31 Desember', '31 December'), '10%'],
        [L('31 Januarie', '31 January'), '7,5%'],
        [L('31 Maart', '31 March'), '5%'],
      ],
    })}
  </div>
  <div class="grid grid--3" style="margin-top:2rem" data-reveal data-reveal-stagger>
    ${infoCard({ ico: 'calendar', title: L('Maandeliks', 'Monthly'), body: `<p>${L('R2 500.00 per kind per maand vir 10 maande.', 'R2 500.00 per child per month for 10 months.')}</p>` })}
    ${infoCard({ ico: 'banknote', title: L('Deposito', 'Deposit'), body: `<p>${L('’n Deposito van R2 500.00 is jaarliks voor 30 November betaalbaar, vir huidige sowel as nuwe leerders. Dit word van die skoolfonds afgetrek; die balans is oor 10 maande betaalbaar.', 'A deposit of R2 500.00 is payable annually before 30 November, for current as well as new learners. It is deducted from the school fees; the balance is payable over 10 months.')}</p>` })}
    ${infoCard({ ico: 'info', title: L('Nie ingesluit nie', 'Not included'), body: `<p>${L('Akademiese, sport- en kultuurtoere is vrywillig en word nie deur skoolgeld gedek nie.', 'Academic, sports and cultural tours are voluntary and are not covered by school fees.')}</p>` })}
  </div>`)}
${section(`${sectionHead({ kicker: L('Navrae', 'Enquiries'), title: L('Rekeningekantoor', 'Accounts office'), lead: L('Vir enige verdere navrae oor skoolfonds, kontak mev. Naomi Lotriet.', 'For any further enquiries about school fees, contact Mrs Naomi Lotriet.') })}
  ${infoCard({ ico: 'banknote', title: SCHOOL.accounts.name, body: `<p><a href="mailto:${SCHOOL.accounts.email}">${SCHOOL.accounts.email}</a></p><p><a href="${SCHOOL.accounts.phoneHref}">${SCHOOL.accounts.phone}</a></p>` })}`, { tone: 'tint' })}`,
    };
  },

  uniform(ctx) {
    const { L, lang } = ctx;
    const head = [L('Item', 'Item'), L('Meisies', 'Girls'), L('Seuns', 'Boys')];
    const same = (label, value) => [label, value, value];
    const common = [
      same(L('Hemp', 'Shirt'), L('Wit met skoolwapen', 'White with school badge')),
      same(L('Das', 'Tie'), L('Navy en blougroen', 'Navy and teal')),
      same(L('Baadjie', 'Blazer'), L('Navy met skoolwapen', 'Navy with school badge')),
      same(L('Trui', 'Jersey'), L('Navy en blougroen', 'Navy and teal')),
      same(L('Kortmoutrui', 'Pullover'), L('Navy en blougroen', 'Navy and teal')),
    ];
    const shoes = same(L('Skoene', 'Shoes'), L('Skoolskoene (swart)', 'School shoes (black)'));
    const kits = SPORTS.filter((s) => s.kit);
    const stockists = [
      { name: 'Fays', where: 'Bracken City Shopping Centre', tel: '011 869 9163', href: 'tel:+27118699163' },
      { name: 'Simply Schools', where: 'New Market Mall', tel: '011 907 0512', href: 'tel:+27119070512' },
    ];
    return {
      desc: L('Skooldrag by Hoërskool Dinamika: somer- en winterdrag, Vrydagdrag, sportdrag en verskaffers.', 'School uniform at Hoërskool Dinamika: summer and winter uniform, Friday wear, sports kit and stockists.'),
      image: 'photos/leerderleiers.jpg',
      body: `${pageHero(ctx, { image: 'photos/leerderleiers.jpg', pos: '50% 70%', lead: L('’n Netjiese, eenvormige kleredrag bevorder eenheid en trots. Elke leerder dra die skooldrag as ’n ambassadeur van Dinamika.', 'A neat, uniform dress code promotes unity and pride. Every learner wears the uniform as an ambassador of Dinamika.') })}
${section(`<div class="container--narrow" style="margin-inline:auto">${prose(`<p class="lead">${L('By Hoërskool Dinamika is ons trots op ons skooltradisies, etos en toeganklikheid. Ons is ’n Christelike, waardegebaseerde skool wat daartoe verbind is om bekwame, goedafgeronde, beleefde en sosiaal verantwoordelike jongmense te ontwikkel wat met selfvertroue die toekoms ingaan.', 'At Hoërskool Dinamika we take pride in our school traditions, ethos and approachability. We are a values-based school committed to developing competent, well-rounded, polite and socially responsible young people equipped to face the future with confidence.')}</p>
  <p>${L('Skool-eenheid en trots is een van die maniere waarop ons ons missie bereik. ’n Netjiese, eenvormige kleredrag in alle aspekte van ons skoollewe bevorder hierdie eenheid en trots.', 'School unity and pride is one of the ways in which we achieve our mission. A neat, uniform dress code in all aspects of school life promotes this unity and pride.')}</p>`)}</div>`)}
${section(`<div class="grid grid--2" style="align-items:start">
    ${table({ caption: L('Somer · 1 September – 30 April', 'Summer · 1 September – 30 April'), head, rows: [
      [L('Romp / broek', 'Skirt / shorts'), L('Romp (blougroen)', 'Skirt (teal)'), L('Kortbroek (grys)', 'Shorts (grey)')],
      ...common,
      same(L('Sokkies', 'Socks'), L('Kort sokkies (navy)', 'Short socks (navy)')),
      shoes,
    ] })}
    ${table({ caption: L('Winter · 1 Mei – 31 Augustus', 'Winter · 1 May – 31 August'), head, rows: [
      [L('Romp / broek', 'Skirt / trousers'), L('Romp (blougroen)', 'Skirt (teal)'), L('Langbroek (grys)', 'Long trousers (grey)')],
      ...common,
      [L('Sokkies', 'Socks'), L('Sykouse of lang sokkies (navy)', 'Tights or long socks (navy)'), L('Kort sokkies (navy)', 'Short socks (navy)')],
      shoes,
    ] })}
  </div>
  <div class="note">${icon('info', { size: 20 })}<p>${L('Dasse en baadjies is verpligtend op Dinsdae en by amptelike skoolfunksies. Wanneer ’n das nie gedra word nie, dra leerders ’n oopknoophemp. Baadjies mag op ander dae ook gedra word, maar dan met ’n das. Lang- en kortmoutruie mag met of sonder ’n baadjie en das gedra word.', 'Ties and blazers are compulsory on Tuesdays and at official school events. When no tie is worn, learners wear an open-neck shirt. Blazers may be worn on other days too, but then with a tie. Jerseys and pullovers may be worn with or without a blazer and tie.')}</p></div>`, { tone: 'tint' })}
${section(`<div class="grid grid--3" data-reveal data-reveal-stagger>
    ${infoCard({ ico: 'shirt', title: L('Vrydagdrag', 'Friday wear'), body: `<p>${L('Vrydaghemp, blou denims en wit tekkies. Op koue dae mag die skooltrui, sweetpakbaadjie en/of bomberbaadjie daarby gedra word.', 'Friday shirt, blue denims and white sneakers. On cold days the school jersey, tracksuit jacket and/or bomber jacket may be worn as well.')}</p>` })}
    ${infoCard({ ico: 'medal', title: L('Sweetpak', 'Tracksuit'), body: `<p>${L('Skoolsweetpakke en tekkies word deur atlete na sportbyeenkomste gedra.', 'School tracksuits and sneakers are worn by athletes to sports events.')}</p>` })}
    ${infoCard({ ico: 'star', title: L('Bomberbaadjie', 'Bomber jacket'), body: `<p>${L('Mag saam met Vrydagdrag of sportdrag gedra word. Hierdie baadjie is nie ’n verpligte item nie.', 'May be worn with Friday wear or sports attire. This jacket is not a compulsory item.')}</p>` })}
  </div>`)}
${section(`${sectionHead({ kicker: L('Sportdrag', 'Sports kit'), title: L('Drag per sportsoort', 'Kit per sport') })}
  ${accordion(kits.map((s) => ({ title: `${s.name[lang]}`, body: `${iconList(s.kit[lang], 'shirt')}<p><a href="${ctx.href(`sport-${s.id}`)}">${L('Meer oor', 'More about')} ${s.name[lang]}</a></p>` })))}`, { tone: 'tint' })}
${section(`${sectionHead({ kicker: L('Verskaffers', 'Stockists'), title: L('Waar om skooldrag te koop', 'Where to buy the uniform') })}
  <div class="grid grid--2">${stockists.map((s) => infoCard({ ico: 'map-pin', title: s.name, body: `<p>${s.where}</p><p><a href="${s.href}">${s.tel}</a></p>` })).join('')}</div>`)}`,
    };
  },
};
