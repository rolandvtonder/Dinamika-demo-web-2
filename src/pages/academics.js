import { icon } from '../icons.js';
import { section, sectionHead, pageHero, linkCard, cardGrid, ctaBand, btn, prose, infoCard, accordion, iconList } from '../components.js';

const pills = (items, cls = '') => `<ul class="pill-list">${items.map((t) => `<li class="pill${cls ? ` ${cls}` : ''}">${t}</li>`).join('')}</ul>`;
const group = (ico, title, items) => `<div class="subject-group"><h3>${icon(ico, { size: 20 })}${title}</h3>${pills(items)}</div>`;

// Grade 10–12 subject guide (summarised from the old website).
const GUIDE = [
  { t: ['Afrikaans Huistaal', 'Afrikaans Home Language'], d: ['Verpligtend vir alle leerders in die Afrikaanse klasse. Die slaagsyfer is 40% en die sillabus sluit luister en praat, lees en kyk, skryf en aanbied, en taalstrukture en -konvensies in. Leerders wat die huistaal druip, druip die graad.', 'Compulsory for all learners in the Afrikaans classes. The pass mark is 40% and the syllabus covers listening and speaking, reading and viewing, writing and presenting, and language structures and conventions. Learners who fail their home language fail the grade.'] },
  { t: ['English Home Language', 'English Home Language'], d: ['Verpligtend vir alle leerders in die Engelse klasse, met ’n slaagsyfer van 40%. Lees by die huis is die beste manier om kommunikasie en punte te verbeter, en die voorgeskrewe werk vra deeglike studie.', 'Compulsory for all learners in the English classes, with a pass mark of 40%. Reading at home is the best way to improve communication and marks, and the prescribed literature requires thorough study.'] },
  { t: ['Eerste Addisionele Tale', 'First Additional Languages'], d: ['Engels EAT is verpligtend vir Afrikaanssprekende leerders en Afrikaans EAT vir leerders in die Engelse klasse. Die slaagsyfer is 30%. Toegang tot leesstof in die tweede taal by die huis maak ’n groot verskil.', 'English FAL is compulsory for Afrikaans-speaking learners and Afrikaans FAL for learners in the English classes. The pass mark is 30%. Access to reading material in the second language at home makes a big difference.'] },
  { t: ['Wiskunde', 'Mathematics'], d: ['’n Taal van simbole en notasies wat logiese en kritiese denke, akkuraatheid en probleemoplossing ontwikkel. Dit vra daaglikse werk en selfdissipline, maar sluit bykans geen loopbaan uit nie.', 'A language of symbols and notation that develops logical and critical thinking, accuracy and problem-solving. It demands daily work and self-discipline, but closes almost no career doors.'], c: ['Ingenieurswese, medies, aktuariële wetenskap, CA, IT, statistiek, rekenaarwetenskap', 'Engineering, medicine, actuarial science, CA, IT, statistics, computer science'] },
  { t: ['Wiskundige Geletterdheid', 'Mathematical Literacy'], d: ['Prakties en lewensgerig: huurkoop, verbandlenings, beleggings, kaartlees, roosters, areas en volumes en huisplanne. Dit is ’n alternatief vir Wiskunde, maar beperk sekere tersiêre studies.', 'Practical and life-related: hire purchase, bonds, investments, map reading, timetables, areas and volumes and house plans. It is an alternative to Mathematics, but limits some tertiary studies.'] },
  { t: ['Rekenaartoepassingstegnologie (RTT)', 'Computer Applications Technology (CAT)'], d: ['Die doeltreffende gebruik van ’n rekenaar vir werk en studie: Word, Excel, Access en PowerPoint, bedryfstelsels en basiese webblaaie, plus teorie oor netwerke, die internet en inligtingsbestuur.', 'Using a computer effectively for work and study: Word, Excel, Access and PowerPoint, operating systems and basic web pages, plus theory on networks, the internet and information management.'] },
  { t: ['Inligtingstegnologie (IT)', 'Information Technology (IT)'], d: ['Die studie van tegnologie vir die vaslegging, verwerking en bestuur van data, en probleemoplossing deur logiese denke en programmering. Wiskunde word sterk aanbeveel.', 'The study of technology for capturing, processing and managing data, and problem-solving through logical thinking and programming. Mathematics is highly recommended.'], c: ['Programmeerder, webontwikkelaar, IT-direkteur, tegnologiehoof', 'Programmer, web developer, IT director, chief technology officer'] },
  { t: ['Lewenswetenskappe', 'Life Sciences'], d: ['Die wetenskaplike studie van lewende organismes — van mikro-organismes tot plante, diere en die mens — sowel as omgewingstudies en diversiteit, verandering en kontinuïteit.', 'The scientific study of living organisms — from micro-organisms to plants, animals and humans — as well as environmental studies and diversity, change and continuity.'], c: ['Verpleging, fisioterapie, natuurbewaring, botanie, dierkunde, mikrobiologie', 'Nursing, physiotherapy, nature conservation, botany, zoology, microbiology'] },
  { t: ['Fisiese Wetenskappe', 'Physical Sciences'], d: ['Fisika en Chemie. Wiskunde is ’n vereiste (nie Wiskundige Geletterdheid nie) en leerders benodig minstens 50% vir NW 1 en Wiskunde in graad 8 en 9, gemotiveerdheid en toewyding.', 'Physics and Chemistry. Mathematics is a requirement (not Mathematical Literacy) and learners need at least 50% for NS 1 and Mathematics in Grades 8 and 9, plus motivation and dedication.'], c: ['Medies, optometrie, ingenieurswese, radiografie, bourekenkunde, arbeidsterapie', 'Medicine, optometry, engineering, radiography, quantity surveying, occupational therapy'] },
  { t: ['Rekeningkunde', 'Accounting'], d: ['Die meting, verwerking en kommunikasie van finansiële inligting. Dit vra analitiese denke en daaglikse werk, en Wiskunde moet saam met Rekeningkunde geneem word.', 'The measurement, processing and communication of financial information. It calls for analytical thinking and daily work, and Mathematics must be taken with Accounting.'], c: ['BCom Rekeningkunde (CA), ingenieurswese (kosteberekening), argitektuur, bourekenkunde', 'BCom Accounting (CA), engineering (costing), architecture, quantity surveying'] },
  { t: ['Besigheidstudies', 'Business Studies'], d: ['Kombineer elemente van rekeningkunde, finansies, bemarking, ondernemingstrukture en menslike hulpbronne. Daar is geen formele vereistes nie; saam met Wiskunde en Rekeningkunde is dit ’n goeie grondslag vir ’n BCom-graad.', 'Combines elements of accounting, finance, marketing, organisational studies and human resources. There are no formal prerequisites; with Mathematics and Accounting it is a solid platform for a BCom degree.'] },
  { t: ['Ingenieursgrafika en -ontwerp (IGO)', 'Engineering Graphics and Design (EGD)'], d: ['’n Grafiese taal van lyne, simbole en tekens: vryhand-, instrument- en CAD-tekeninge, siviele en meganiese tekene, beskrywende meetkunde en die ontwerpproses.', 'A graphic language of lines, symbols and signs: freehand, instrument and CAD drawings, civil and mechanical drawings, descriptive geometry and the design process.'], c: ['Argitektuur, ingenieurswese, grafiese ontwerp, konstruksiebestuur', 'Architecture, engineering, graphic design, construction management'] },
  { t: ['Elektriese Tegnologie', 'Electrical Technology'], d: ['Dinamika fokus op elektronika: van die beginsels van elektrisiteit in graad 10 tot halfgeleiers en geïntegreerde kringe. Moet saam met Wiskunde, Fisiese Wetenskappe en IGO geneem word.', 'Dinamika focuses on electronics: from the principles of electricity in Grade 10 to semiconductors and integrated circuits. Must be taken with Mathematics, Physical Sciences and EGD.'], c: ['Elektrisiën, elektroniese ingenieur of tegnikus, robotika, megatronika', 'Electrician, electronic engineer or technician, robotics, mechatronics'] },
  { t: ['Lewensoriëntering', 'Life Orientation'], d: ['Verpligtend vir alle leerders in graad 10 tot 12: selfontwikkeling, sosiale en omgewingsverantwoordelikheid, demokrasie en menseregte, loopbane, studievaardighede en liggaamlike opvoeding.', 'Compulsory for all learners in Grades 10 to 12: development of the self, social and environmental responsibility, democracy and human rights, careers, study skills and physical education.'] },
  { t: ['Geografie', 'Geography'], d: ['Die studie van die aarde, die atmosfeer en die bevolking — menslike en fisiese geografie — met praktiese kaartwerk elke kwartaal.', 'The study of the earth, the atmosphere and its people — human and physical geography — with practical map work every term.'], c: ['Stadsbeplanning, geologie, meteorologie, omgewingsimpakstudies, hidrologie', 'City planning, geology, meteorology, environmental impact studies, hydrology'] },
  { t: ['Landboutegnologie', 'Agricultural Technology'], d: ['Die tegnologie, gereedskap, toerusting en vaardighede wat in die landbou gebruik word. Die vak het ’n groot praktiese komponent en addisionele kostes om mee te begin.', 'The technology, tools, equipment and skills used in agriculture. The subject has a large practical component and additional start-up costs.'] },
  { t: ['Gasvryheidstudies', 'Hospitality Studies'], d: ['Higiëne, voedselproduksie, voedsel- en drankbediening en kliëntediens. Die vak het ’n groot praktiese komponent en addisionele kostes om mee te begin.', 'Hygiene, food production, food and beverage service and customer service. The subject has a large practical component and additional start-up costs.'] },
  { t: ['Toerisme', 'Tourism'], d: ['Toerismesektore, kaartwerk en toerbeplanning, besienswaardighede, kultuur- en erfenistoerisme, buitelandse valuta, kliëntediens en bemarking. Die praktiese komponent tel by die finale punt.', 'Tourism sectors, map work and tour planning, attractions, culture and heritage, foreign exchange, customer care and marketing. The practical component counts towards the final mark.'] },
  { t: ['Dramatiese Kunste', 'Dramatic Arts'], d: ['Hoe menslike belewenis in dramatiese vorm aan ’n gehoor voorgestel word: improvisasie, stem- en liggaamskommunikasie, vertolking en die skep en aanbied van opvoerings.', 'How human experience is presented to an audience in dramatic form: improvisation, vocal and physical communication, interpretation, and creating and presenting performances.'] },
  { t: ['Visuele Kunste', 'Visual Arts'], d: ['Kreatiewe en tegniese ontwikkeling in die beeldende kunste, gekombineer met die studie van kunsgeskiedenis en visuele kultuur.', 'Creative and technical development in the visual arts, combined with the study of art history and visual culture.'] },
];

export default {
  academics(ctx) {
    const { L } = ctx;
    const highlights = [
      { ico: 'graduation-cap', t: L('Vakspesialiste', 'Subject specialists'), d: L('Die kurrikulum word deur vakspesialiste aangebied.', 'The curriculum is presented by subject specialists.') },
      { ico: 'lightbulb', t: L('Tegnologie in die klas', 'Technology in class'), d: L('Tegnologie in die klaskamers bevorder visuele, ouditiewe en praktiese onderrig.', 'Technology in the classrooms supports visual, auditory and practical teaching.') },
      { ico: 'users', t: L('Realistiese klasgetalle', 'Realistic class sizes'), d: L('Klasgroottes van 15 tot 30 leerders.', 'Class sizes of 15 to 30 learners.') },
      { ico: 'bot', t: L('Digitale Tegnologie', 'Digital Technology'), d: L('Robotika, basiese kodering en rekenaarvaardighede in die rekenaarsentrums.', 'Robotics, basic coding and computer skills in the computer centres.') },
      { ico: 'sprout', t: L('Praktiese vakke', 'Practical subjects'), d: L('Landboutegnologie, Gasvryheidstudies, Dramatiese Kunste en Visuele Kunste in ons werksentrums.', 'Agricultural Technology, Hospitality Studies, Dramatic Arts and Visual Arts in our work centres.') },
      { ico: 'star', t: L('Kernwetenskap', 'Nuclear Sciences'), d: L('Dinamika is gekies om Kernwetenskap as verrykingsvak bekend te stel.', 'Dinamika was selected to launch Nuclear Sciences as an enrichment subject.') },
    ];
    return {
      desc: L('Akademie by Hoërskool Dinamika: vakspesialiste, realistiese klasgroottes en ’n wye keuse van vakke vir graad 8 tot 12.', 'Academics at Hoërskool Dinamika: subject specialists, realistic class sizes and a wide choice of subjects for Grades 8 to 12.'),
      image: 'photos/akademie-banier.webp',
      body: `${pageHero(ctx, { image: 'photos/akademie-banier.webp', pos: '88% 30%', lead: L('Akademie is en sal altyd die nommer een prioriteit by Hoërskool Dinamika wees.', 'Academics is and will always be the number one priority at Hoërskool Dinamika.') })}
${section(`<div class="split">
    <div class="split__media split__media--frame">${ctx.img('staff/new-ethel-marais.webp', { alt: L('Mev. Ethel Marais, adjunkhoof: akademie', 'Mrs Ethel Marais, deputy principal: academics') })}</div>
    <div>
      <p class="kicker">Ethel Marais · ${L('Adjunkhoof: Akademie', 'Deputy Principal: Academics')}</p>
      <h2 class="section-title">${L('“Kwaliteit is nie ’n daad nie, dit is ’n gewoonte.”', '“Quality is not an act, it is a habit.”')}</h2>
      ${prose(`<p>${L('Ons streef daarna om ’n omgewing te skep wat optimale leer bevorder: vakspesialiste wat die kurrikulum aanbied, tegnologie in die klaskamers, hulpbronne beskikbaar aan leerders, realistiese klasgetalle en ’n verskeidenheid vakke om van te kies.', 'We strive to create an environment that promotes optimal learning: subject specialists presenting the curriculum, technology in the classrooms, resources available to learners, realistic class sizes and a variety of subjects to choose from.')}</p>
      <p>${L('Hoërskool Dinamika spog binnekort met vier rekenaarsentrums, waarvan een as ’n leessentrum en Digitale Tegnologie-sentrum vir robotika, basiese kodering en rekenaarvaardighede gebruik word. Ons bied gespesialiseerde vakke soos Landboutegnologie, Gasvryheidstudies, Dramatiese Kunste en Visuele Kunste aan, waarin leerders hul praktiese vaardighede in ons nuwe werksentrums ontwikkel.', 'Hoërskool Dinamika will soon boast four computer centres, one of which serves as a reading centre and Digital Technology centre for robotics, basic coding and computer skills. We offer specialised subjects like Agricultural Technology, Hospitality Studies, Dramatic Arts and Visual Arts, in which learners develop their practical skills in our new work centres.')}</p>
      <p>${L('Akademie is die hartklop van Dinamika. Hier word elke leerder die geleentheid gegun, met al die nodige hulpbronne, om tot die beste van sy of haar potensiaal te presteer.', 'Academics is the heartbeat that pulsates in Dinamika. Here every learner is given the opportunity, with all the necessary resources, to perform to the best of his or her potential.')}</p>`)}
    </div>
  </div>`)}
${section(`${sectionHead({ kicker: L('Waarom ons uitstaan', 'Why we stand out'), title: L('’n Omgewing vir optimale leer', 'An environment for optimal learning'), center: true })}
  <div class="grid grid--3" data-reveal data-reveal-stagger>${highlights.map((h) => infoCard({ ico: h.ico, title: h.t, body: `<p>${h.d}</p>` })).join('')}</div>`, { tone: 'tint' })}
${section(`${sectionHead({ kicker: L('Vakke', 'Subjects'), title: L('Vakke per fase', 'Subjects per phase') })}
  ${cardGrid([
    linkCard({ href: ctx.href('subjects-8-9'), ico: 'book-open', meta: L('Senior fase', 'Senior phase'), title: ctx.title('subjects-8-9'), text: L('Die elf vakke wat alle graad 8- en 9-leerders neem.', 'The eleven subjects that all Grade 8 and 9 learners take.'), cta: L('Sien vakke', 'See subjects') }),
    linkCard({ href: ctx.href('subjects-10-12'), ico: 'graduation-cap', meta: L('VOO-fase', 'FET phase'), title: ctx.title('subjects-10-12'), text: L('Verpligte vakke, keusevakke en ’n gids tot elke vak.', 'Compulsory subjects, choice subjects and a guide to every subject.'), cta: L('Sien vakke', 'See subjects') }),
  ], 2)}`)}
${ctaBand({ title: L('Vrae oor vakkeuses?', 'Questions about subject choices?'), text: L('Kontak die skool vir meer inligting oor die akademiese program.', 'Contact the school for more information about the academic programme.'), actions: [btn({ href: ctx.href('contact'), label: L('Kontak Ons', 'Contact Us') })] })}`,
    };
  },

  'subjects-8-9'(ctx) {
    const { L } = ctx;
    return {
      desc: L('Die vakke wat Hoërskool Dinamika vir graad 8- en 9-leerders aanbied.', 'The subjects Hoërskool Dinamika offers Grade 8 and 9 learners.'),
      body: `${pageHero(ctx, { lead: L('Gepaste klasgroottes en uitsonderlike onderwysers bied aan elke leerder ’n aanmoedigende en inklusiewe opvoedkundige omgewing.', 'Suitable class sizes and exceptional teachers offer every learner an encouraging and inclusive educational environment.') })}
${section(`<div class="container--narrow" style="margin-inline:auto">${prose(`<p class="lead">${L('Die akademiese program by Hoërskool Dinamika beklemtoon elke aspek van leerders se potensiaal en ontwikkeling, terwyl ons ook aan die Departement van Onderwys se vereistes voldoen. Leerders geniet individuele aandag in alle aspekte.', 'The academic programme at Hoërskool Dinamika places an emphasis on every aspect of learner growth and development, while meeting the requirements of the Department of Education. Every learner receives the individual attention and support they need.')}</p>`)}</div>`)}
${section(`${sectionHead({ kicker: L('Graad 8 en 9', 'Grades 8 and 9'), title: L('Ons vakke', 'Our subjects') })}
  <div class="subject-grid" data-reveal data-reveal-stagger>
    ${group('languages', L('Tale', 'Languages'), [L('Afrikaans Huistaal of Eerste Addisionele Taal', 'Afrikaans Home Language or First Additional Language'), L('English Home Language of First Additional Language', 'English Home Language or First Additional Language')])}
    ${group('target', L('Wiskunde en wetenskappe', 'Mathematics and sciences'), [L('Wiskunde', 'Mathematics'), L('Natuurwetenskappe 1', 'Natural Sciences 1'), L('Natuurwetenskappe 2', 'Natural Sciences 2')])}
    ${group('landmark', L('Menslike en sosiale wetenskappe', 'Human and social sciences'), [L('Sosiale Wetenskappe 1', 'Social Sciences 1'), L('Sosiale Wetenskappe 2', 'Social Sciences 2'), L('Lewensoriëntering', 'Life Orientation')])}
    ${group('palette', L('Tegnologie en kunste', 'Technology and arts'), [L('Tegnologie', 'Technology'), L('Skeppende Kunste', 'Creative Arts')])}
    ${group('banknote', L('Ekonomie', 'Economics'), [L('Ekonomiese en Bestuurswetenskappe', 'Economic and Management Sciences')])}
  </div>`, { tone: 'tint' })}
${section(`<div class="split" style="align-items:start">
    <div>${sectionHead({ kicker: L('Beplan vooruit', 'Plan ahead'), title: L('Vakkeuse vir graad 10', 'Choosing subjects for Grade 10'), lead: L('Die punte in graad 8 en 9 bepaal watter vakke in graad 10 oop is.', 'Marks in Grades 8 and 9 determine which subjects are open in Grade 10.') })}
      ${btn({ href: ctx.href('subjects-10-12'), label: L('Graad 10–12 vakke', 'Grade 10–12 subjects'), variant: 'navy' })}</div>
    <div class="info-card"><div>${iconList([
      L('Fisiese Wetenskappe: minstens 50% vir NW 1 (Fisiese Wetenskappe) en Wiskunde in graad 8 en 9.', 'Physical Sciences: at least 50% for NS 1 (Physical Sciences) and Mathematics in Grades 8 and 9.'),
      L('Wiskunde is verpligtend vir Fisiese Wetenskappe en Rekeningkunde.', 'Mathematics is compulsory for Physical Sciences and Accounting.'),
      L('Wiskunde word sterk aanbeveel vir Inligtingstegnologie.', 'Mathematics is highly recommended for Information Technology.'),
      L('Elektriese Tegnologie moet saam met Wiskunde, Fisiese Wetenskappe en IGO geneem word.', 'Electrical Technology must be taken with Mathematics, Physical Sciences and EGD.'),
    ], 'info')}</div></div>
  </div>`)}`,
    };
  },

  'subjects-10-12'(ctx) {
    const { L, lang } = ctx;
    const i = lang === 'af' ? 0 : 1;
    return {
      desc: L('Graad 10 tot 12 by Hoërskool Dinamika: verpligte vakke, keusevakke per studierigting en ’n gids tot elke vak.', 'Grades 10 to 12 at Hoërskool Dinamika: compulsory subjects, choice subjects per field and a guide to every subject.'),
      body: `${pageHero(ctx, { lead: L('Leerders in graad 10 tot 12 neem ten minste sewe vakke: vier verpligte vakke en drie keusevakke.', 'Learners in Grades 10 to 12 take at least seven subjects: four compulsory subjects and three choice subjects.') })}
${section(`<div class="grid grid--2" style="align-items:start">
    <div class="subject-group">
      <h3>${icon('check', { size: 20 })}${L('Vier verpligte vakke', 'Four compulsory subjects')}</h3>
      ${iconList([
        L('<strong>Huistaal</strong> — Afrikaans Huistaal (Afrikaanse klasse) of English Home Language (Engelse klasse)', '<strong>Home Language</strong> — Afrikaans Home Language (Afrikaans classes) or English Home Language (English classes)'),
        L('<strong>Eerste Addisionele Taal</strong> — English FAL of Afrikaans EAT', '<strong>First Additional Language</strong> — English FAL or Afrikaans FAL'),
        L('<strong>Lewensoriëntering</strong>', '<strong>Life Orientation</strong>'),
        L('<strong>Wiskunde</strong> of <strong>Wiskundige Geletterdheid</strong>', '<strong>Mathematics</strong> or <strong>Mathematical Literacy</strong>'),
      ])}
    </div>
    <div class="subject-group">
      <h3>${icon('info', { size: 20 })}${L('Belangrike kombinasies', 'Important combinations')}</h3>
      ${iconList([
        L('Fisiese Wetenskappe en Rekeningkunde vereis Wiskunde.', 'Physical Sciences and Accounting require Mathematics.'),
        L('Elektriese Tegnologie word saam met Wiskunde, Fisiese Wetenskappe en IGO geneem.', 'Electrical Technology is taken with Mathematics, Physical Sciences and EGD.'),
        L('Landboutegnologie en Gasvryheidstudies het addisionele kostes.', 'Agricultural Technology and Hospitality Studies carry additional costs.'),
        L('Wiskundige Geletterdheid beperk sekere tersiêre studies.', 'Mathematical Literacy limits some tertiary studies.'),
      ], 'chevron-right')}
    </div>
  </div>`)}
${section(`${sectionHead({ kicker: L('Keusevakke', 'Choice subjects'), title: L('Kies drie vakke', 'Choose three subjects'), lead: L('Hierdie fase sluit beroepsgerigte onderwys en opleiding in.', 'This phase includes career-oriented education and training.') })}
  <div class="subject-grid" data-reveal data-reveal-stagger>
    ${group('banknote', L('Besigheid, Handel en Bestuur', 'Business, Commerce and Management'), [L('Rekeningkunde', 'Accounting'), L('Besigheidstudies', 'Business Studies')])}
    ${group('target', L('Fisiese, Rekenaar- en Lewenswetenskappe', 'Physical, Computer and Life Sciences'), [L('RTT', 'CAT'), L('Inligtingstegnologie', 'Information Technology'), L('Lewenswetenskappe', 'Life Sciences'), L('Fisiese Wetenskappe', 'Physical Sciences')])}
    ${group('layers', L('Ingenieurswese en Tegnologie', 'Engineering and Technology'), [L('IGO', 'EGD'), L('Elektriese Tegnologie', 'Electrical Technology')])}
    ${group('star', L('Dienste', 'Services'), [L('Gasvryheidstudies', 'Hospitality Studies'), L('Toerisme', 'Tourism')])}
    ${group('palette', L('Skeppende Kunste', 'Creative Arts'), [L('Dramatiese Kunste', 'Dramatic Arts'), L('Visuele Kunste', 'Visual Arts')])}
    ${group('landmark', L('Menslike en Sosiale Studies', 'Human and Social Studies'), [L('Geografie', 'Geography')])}
    ${group('sprout', L('Landbou', 'Agriculture'), [L('Landboutegnologie', 'Agricultural Technology')])}
  </div>`, { tone: 'tint' })}
${section(`${sectionHead({ kicker: L('Vakgids', 'Subject guide'), title: L('Meer oor elke vak', 'More about each subject') })}
  ${accordion(GUIDE.map((g) => ({ title: g.t[i], body: `<p>${g.d[i]}</p>${g.c ? `<p><strong>${L('Moontlike loopbane', 'Possible careers')}:</strong> ${g.c[i]}</p>` : ''}` })))}`)}`,
    };
  },
};
