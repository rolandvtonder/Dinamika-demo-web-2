// Staff list as published on the old website (www.hsdinamika.com/personeel-staff/).
import { icon } from '../icons.js';
import { section, pageHero, ctaBand, btn, initials } from '../components.js';

const SUB = {
  lo: ['Lewensoriëntering', 'Life Orientation'], math: ['Wiskunde', 'Mathematics'], ml: ['Wiskundige Geletterdheid', 'Mathematical Literacy'],
  engHL: ['Engels HT', 'English HL'], engFAL: ['Engels EAT', 'English FAL'], afrHL: ['Afrikaans HT', 'Afrikaans HL'], afrFAL: ['Afrikaans EAT', 'Afrikaans FAL'],
  geo: ['Geografie', 'Geography'], hist: ['Geskiedenis', 'History'], ls: ['Lewenswetenskappe', 'Life Sciences'], ns: ['Natuurwetenskappe', 'Natural Sciences'],
  ps: ['Fisiese Wetenskappe', 'Physical Sciences'], it: ['IT', 'IT'], cat: ['RTT', 'CAT'], egd: ['IGO', 'EGD'], tech: ['Tegnologie', 'Technology'],
  dt: ['Digitale Tegnologie', 'Digital Technology'], agri: ['Landboutegnologie', 'Agricultural Technology'], acc: ['Rekeningkunde', 'Accounting'],
  bs: ['Besigheidstudies', 'Business Studies'], ems: ['EBW', 'EMS'], tour: ['Toerisme', 'Tourism'], hosp: ['Gasvryheidstudies', 'Hospitality Studies'],
  da: ['Dramatiese Kunste', 'Dramatic Arts'], va: ['Visuele Kunste', 'Visual Arts'], ca: ['Skeppende Kunste', 'Creative Arts'],
};
const R = (af, en) => ({ af, en });
const P = (name, email, photo, subjects = '', roles = []) => ({ name, email, photo, subjects: subjects.split(' ').filter(Boolean), roles });

const GROUPS = [
  { title: R('Hoof', 'Principal'), lead: true, people: [
    P('Johan Schutte', 'skoolhoof@namies.co.za', 'new-johan-schutte.webp', '', [R('Hoof', 'Principal')]),
  ] },
  { title: R('Adjunkhoofde', 'Deputy Principals'), lead: true, people: [
    P('Chris van der Schyff', 'cvdschyf@namies.co.za', 'new-chirs-vd-schyff.webp', 'lo', [R('Dissipline & Berading', 'Discipline & Counselling')]),
    P('Ethel Marais', 'emarais@namies.co.za', 'new-ethel-marais.webp', 'engFAL', [R('Akademie', 'Academics'), R('Departementshoof: Engels EAT', 'Departmental Head: English FAL')]),
    P('Marthie Kruger', 'mkruger@namies.co.za', 'new-marthie-krger.webp', 'math', [R('Departementshoof: Wiskunde', 'Departmental Head: Mathematics')]),
    P('Jaco Pretorius', 'jpretorius@namies.co.za', 'new-jaco-pretorius.webp', 'agri egd', [R('Logistiek', 'Logistics'), R('Departementshoof: Landboutegnologie', 'Departmental Head: Agricultural Technology')]),
  ] },
  { title: R('Bestuur', 'Management'), people: [
    P('Wally Anderson', 'wanderson@namies.co.za', 'new-wally-anderson.webp', 'math', [R('Vakhoof: Wiskundige Geletterdheid', 'Subject Head: Mathematical Literacy')]),
    P('Jattie du Toit', 'jdutoit@namies.co.za', 'new-jattie-du-toit.webp', 'tech egd', [R('Vakhoof: Tegnologie', 'Subject Head: Technology')]),
    P('Nell-Mirrie Els', 'nell-mirrie@namies.co.za', 'new-nell-mirrie-els.webp', 'afrHL', [R('Departementshoof: Afrikaans', 'Departmental Head: Afrikaans')]),
    P('Karen Feenstra', 'kfeenstra@namies.co.za', 'new-karen-feenstra-2.webp', '', [R('Vakhoof: Engels Huistaal', 'Subject Head: English Home Language')]),
    P('Jaco Feenstra', 'jfeenstra@namies.co.za', 'new-jaco-feenstra.webp', 'geo lo', [R('Vakhoof: Geografie', 'Subject Head: Geography')]),
    P('Melissa Fourie', 'mfourie@namies.co.za', 'new-melissa-fourie.webp', 'ls lo', [R('Departementshoof: Lewensoriëntering', 'Departmental Head: Life Orientation')]),
    P('Gizelle Gouws', 'ggouws@namies.co.za', 'new-gizelle-gouws.webp', 'it cat', [R('Departementshoof: IT & RTT', 'Departmental Head: IT & CAT')]),
    P('Pierre Gouws', 'pgouws@namies.co.za', 'new-pierre-gouws.webp', 'acc', [R('Departementshoof: Besigheid, Handel en Bestuur', 'Departmental Head: Business, Commerce and Management')]),
    P('Reinhald Nöffke', 'rnoffke@namies.co.za', 'new-reinhalt-noffke.webp', 'egd', [R('Departementshoof: IGO', 'Departmental Head: EGD')]),
    P('Nicola Reynolds', 'nreynolds@namies.co.za', 'new-nicola-reynolds.webp', 'ps ns', [R('Vakhoof: Geesteswetenskappe', 'Subject Head: Human Sciences')]),
    P('Anet Rademeyer', 'admin@namies.co.za', 'new-anet.webp', '', [R('Hoof: Administrasie', 'Head: Administration')]),
    P('Sandra Smit-Marais', 'ssmit@namies.co.za', 'new-sandra-smit.webp', 'hosp ls', [R('Vakhoof: Gasvryheidstudies', 'Subject Head: Hospitality Studies')]),
    P('Marizelle Theron', 'mtheron@namies.co.za', 'new-marizelle-theron.webp', 'ps ns', [R('Departementshoof: Wetenskappe', 'Departmental Head: Sciences')]),
    P('Zelanda Vosloo', 'zvosloo@namies.co.za', 'new-zelanda-vosloo.webp', 'afrFAL', [R('Vakhoof: Afrikaans EAT', 'Subject Head: Afrikaans FAL'), R('Kultuurvoog', 'Culture organiser')]),
  ] },
  { title: R('Doserende personeel', 'Teaching staff'), people: [
    P('Shanté Bekker', 'sbekker@namies.co.za', null, 'lo'),
    P('Rika Bezuidenhoudt', 'rbezuidenhoudt@namies.co.za', 'new-rika-bezuidenhoudt.webp', 'geo lo'),
    P('Karen Bezuidenhoudt', 'kbezuidenhoudt@namies.co.za', null, 'math ml'),
    P('Marianne Carelse', 'mcarelse@namies.co.za', 'new-marianne-carelse.webp', 'math ml'),
    P('Yolaine de Beer', 'ydebeer@namies.co.za', 'new-yolaine-de-beer.webp', 'math cat'),
    P('Ruan Coetzee', 'rcoetzee@namies.co.za', 'new-ruan-coetzee.webp', 'engHL da va'),
    P('Christo de Wet', 'christo@namies.co.za', 'new-christo.webp', 'it cat'),
    P('Anika du Toit', 'acoertze@namies.co.za', 'new-anika-du-toit.webp', 'ls ns lo'),
    P('Mariska Dreyer', 'mdreyer@namies.co.za', 'new-mariska-dreyer.webp', 'engHL engFAL'),
    P('Martin Els', 'mels@namies.co.za', null, 'hist'),
    P('Daniëlle Erasmus', 'd.erasmus@namies.co.za', 'new-danielle-erasmus.webp', 'ems tour'),
    P('Fleur Geel', 'fgeel@namies.co.za', 'fleur-geel.webp', 'math ml'),
    P('Natasha Fourie', 'nfourie@namies.co.za', 'new-natasha-fourie.webp', 'afrFAL'),
    P('Barry Geel', 'bgeel@namies.co.za', 'new-barry-geel.webp', 'geo lo'),
    P('Nanet Haasbroek', 'nhaasbroek@namies.co.za', 'new-nanet-haasbroek.webp', 'cat'),
    P('Oliver Hart', 'ohart@namies.co.za', 'new-oliver-hart.webp', 'geo ml lo'),
    P('Elrie Hanekom', 'ehanekom@namies.co.za', 'new-elrie-hanekom.webp', 'afrHL va'),
    P('Jahn Hart', 'jhart@namies.co.za', 'new-jahn-hart.webp', 'lo tech ml'),
    P('Karla Heystek', 'kheystek@namies.co.za', 'new-karla-heystek.webp', 'engHL'),
    P('Jani Human', 'jhuman@namies.co.za', 'new-jani-human.webp', 'ems bs'),
    P('Christo Kruger', 'ckruger@namies.co.za', 'new-christo-kruger.webp', 'tech dt lo'),
    P('Daleen Janse van Vuuren', 'djvvuuren@namies.co.za', 'new-daleen-janse-van-vuuren.webp', 'ems bs'),
    P('Veronica Kemp', 'vkemp@namies.co.za', 'new-veronica-kemp.webp', 'afrFAL afrHL'),
    P('Rochelle Kruger', 'raucamp@namies.co.za', 'new-rochelle-kruger.webp', 'math'),
    P('Susan Labuschagne', 'slabuschagne@namies.co.za', 'new-susan-labuschagne.webp', 'afrHL'),
    P('Antoinette Moutsatsos', 'amoutsatsos@namies.co.za', 'new-antoinette-moutsatsos.webp', 'afrFAL'),
    P('Leandra Mynhardt', 'lpotgeiter@namies.co.za', 'new-leandra-potgieter.webp', 'ns ps'),
    P('Mardi Nöffke', 'mnoffke@namies.co.za', 'new-mardi-noffke.webp', 'engFAL math'),
    P('Vicky Olivier', 'volivier@namies.co.za', 'new-vikcy-olivier.webp', 'math lo'),
    P('Luzaan Oelofse', 'loelofse@namies.co.za', 'new-luzaan-oelofse.webp', 'ems acc'),
    P('Francios Oosthuizen', 'foosthuizen@namies.co.za', 'new-francios-oosthuizen.webp', 'ns tour'),
    P('Sharné Potgieter', 'spotgieter@namies.co.za', null, 'engFAL'),
    P('Ingrid Schroeder', 'ischroeder@namies.co.za', 'new-ingrid-schroeder.webp', 'ns ls'),
    P('Aneke Reyneke', 'areyneke@namies.co.za', 'new-aneke-reyneke.webp', 'ems bs tour'),
    P('George Reynolds', 'greynolds@namies.co.za', 'new-goerge-reynolds.webp', 'agri tech'),
    P('Louw Schultz', 'lschultz@namies.co.za', 'new-louw.webp', 'afrHL'),
    P('Thelma Schutte', 'tschutte@namies.co.za', 'new-thelma-schutte.webp', 'afrHL'),
    P('Damian Smith', 'dsmith@namies.co.za', 'new-damian-smith.webp', 'lo'),
    P('Rozelle Stegmann', 'rstegmann@namies.co.za', 'new-ruzelle-stegmann.webp', 'engFAL va ca da'),
    P('Ina van Staden', 'ivstaden@namies.co.za', 'new-ina-van-staden.webp', 'ca'),
    P('Marko van Rooyen', 'mvrooyen@namies.co.za', 'new-marko-van-rooyen.webp', 'ml lo agri dt'),
    P('Nadine van Wyk', 'nvwyk@namies.co.za', 'new-nadine-van-wyk.webp', 'tour hosp'),
    P('Jaques Venter', 'jventer@namies.co.za', 'new-jacques-venter.webp', 'engHL'),
    P('Michelaine Walker', 'mwalker@namies.co.za', 'new-michelaine-walker.webp', 'engFAL'),
    P('Roedolf Walker', 'rwalker@namies.co.za', 'new-roedolf-walker.webp', 'afrFAL engHL'),
  ] },
];

const listJoin = (items, and) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} ${and} ${items.at(-1)}`);
const fold = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export default {
  staff(ctx) {
    const { L, lang } = ctx;
    const i = lang === 'af' ? 0 : 1;
    const total = GROUPS.reduce((n, g) => n + g.people.length, 0);

    const card = (p) => {
      const subjects = listJoin(p.subjects.map((c) => SUB[c][i]), L('en', 'and'));
      const search = fold([p.name, ...p.subjects.flatMap((c) => SUB[c]), ...p.roles.flatMap((r) => [r.af, r.en])].join(' '));
      return `<li class="person" data-search="${search}">
      <div class="person__photo">${p.photo ? ctx.img(`staff/${p.photo}`, { alt: '' }) : `<span class="person__initials" aria-hidden="true">${initials(p.name)}</span>`}</div>
      <div class="person__body">
        <h3 class="person__name">${p.name}</h3>
        ${p.roles.map((r) => `<p class="person__role">${r[lang]}</p>`).join('')}
        ${subjects ? `<p class="person__subjects">${L('Vakke', 'Subjects')}: ${subjects}</p>` : ''}
        <a class="person__mail" href="mailto:${p.email}">${icon('mail', { size: 16 })}<span>${p.email}</span></a>
      </div>
    </li>`;
    };

    return {
      desc: L('Ontmoet die bestuur en onderwysers van Hoërskool Dinamika, met hul vakke en e-posadresse.', 'Meet the management and teachers of Hoërskool Dinamika, with their subjects and e-mail addresses.'),
      image: 'photos/personeel-groep.webp',
      body: `${pageHero(ctx, {
        image: 'photos/personeel-groep.webp', pos: '50% 35%',
        lead: L('Passievolle personeel is die hart van Dinamika. Ons senior personeel onderrig ook junior klasse.', 'Passionate staff are the heart of Dinamika. Our senior staff also teach junior classes.'),
      })}
${section(`<div class="staff-tools">
    <div class="search">
      <label class="sr-only" for="staff-search">${L('Soek personeel volgens naam of vak', 'Search staff by name or subject')}</label>
      ${icon('search', { size: 20 })}
      <input id="staff-search" type="search" data-staff-search placeholder="${L('Soek volgens naam of vak…', 'Search by name or subject…')}" autocomplete="off">
    </div>
    <p class="staff-count" data-staff-count data-template="${L('{n} personeellede', '{n} staff members')}" aria-live="polite">${total} ${L('personeellede', 'staff members')}</p>
  </div>
  ${GROUPS.map((g) => `<section class="staff-group" aria-labelledby="sg-${fold(g.title.en).replace(/\s+/g, '-')}">
    <h2 class="staff-group__title" id="sg-${fold(g.title.en).replace(/\s+/g, '-')}">${g.title[lang]}</h2>
    <ul class="people${g.lead ? ' people--lead' : ''}">${g.people.map(card).join('')}</ul>
  </section>`).join('')}
  <p class="empty-state" data-staff-empty hidden>${L('Geen personeellede stem ooreen met u soektog nie. Probeer ’n ander naam of vak.', 'No staff members match your search. Try another name or subject.')}</p>`, { tone: 'tint' })}
${ctaBand({ title: L('Wil u ’n onderwyser kontak?', 'Want to contact a teacher?'), text: L('Stuur ’n e-pos direk aan die onderwyser, of skakel die skoolkantoor gedurende kantoorure.', 'E-mail the teacher directly, or call the school office during office hours.'), actions: [btn({ href: ctx.href('contact'), label: L('Kontak Ons', 'Contact Us') })] })}`,
    };
  },
};
