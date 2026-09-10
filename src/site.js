// Site-wide configuration: school details, page registry, navigation and UI strings.
import { SPORTS } from './data/sports.js';

// Used for canonical/hreflang/Open Graph URLs. Change when the new site gets its domain.
// The GitHub Pages workflow sets SITE_URL to the Pages address automatically.
export const SITE_URL = (process.env.SITE_URL || 'https://www.hsdinamika.com').replace(/\/+$/, '');
export const LANGS = ['af', 'en'];

export const SCHOOL = {
  name: 'Hoërskool Dinamika',
  motto: 'Reik na die Lig',
  street: '55 Roy Campbell St',
  suburb: 'Brackenhurst',
  city: 'Alberton',
  code: '1448',
  addressLine: '55 Roy Campbell St, Brackenhurst, Alberton, 1448',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ho%C3%ABrskool%20Dinamika%2C%2055%20Roy%20Campbell%20St%2C%20Brackenhurst%2C%20Alberton',
  mapsEmbed: 'https://www.google.com/maps?q=Ho%C3%ABrskool%20Dinamika%2C%2055%20Roy%20Campbell%20St%2C%20Brackenhurst%2C%20Alberton&output=embed',
  phone: '011 867 5986',
  phoneHref: 'tel:+27118675986',
  email: 'ontvangs@namies.co.za',
  principalEmail: 'skoolhoof@namies.co.za',
  accounts: { name: 'Naomi Lotriet', email: 'accounts@namies.co.za', phone: '011 867 0774', phoneHref: 'tel:+27118670774' },
  reception: { name: 'Lientjie Labotski', email: 'ontvangs@namies.co.za' },
  hours: { af: 'Ma – Vr: 07:40 – 14:00', en: 'Mon – Fri: 07:40 – 14:00' },
  facebook: 'https://www.facebook.com/HsDinamika99',
  instagram: 'https://www.instagram.com/hs_dinamika/',
  gdeAdmissions: 'https://www.gdeadmissions.gov.za/',
};

// 2026 public school calendar for learners (DBE, gazetted).
export const TERMS = {
  year: 2026,
  list: [
    { n: 1, start: '2026-01-14', end: '2026-03-27' },
    { n: 2, start: '2026-04-08', end: '2026-06-26' },
    { n: 3, start: '2026-07-21', end: '2026-09-23' },
    { n: 4, start: '2026-10-06', end: '2026-12-09' },
  ],
};

const P = (id, parent, af, en, title, extra = {}) => ({ id, parent, slug: { af, en }, title, ...extra });

// Every page exists in both languages: Afrikaans at the root, English under /en/.
export const PAGES = [
  P('home', null, 'index', 'index', { af: 'Tuis', en: 'Home' }),

  P('our-school', 'home', 'ons-skool', 'our-school', { af: 'Ons Skool', en: 'Our School' }),
  P('foundation', 'our-school', 'fondasie', 'foundation', { af: 'Ons Fondasie', en: 'Our Foundation' }),
  P('values', 'our-school', 'waardes', 'values', { af: 'Ons Waardes', en: 'Our Values' }),
  P('history', 'our-school', 'geskiedenis', 'history', { af: 'Ons Geskiedenis', en: 'Our History' }),
  P('discipline', 'our-school', 'dissipline', 'discipline', { af: 'Dissipline', en: 'Discipline' }),
  P('holistic', 'our-school', 'holistiese-ontwikkeling', 'holistic-development', { af: 'Holistiese Ontwikkeling', en: 'Holistic Development' }),
  P('staff', 'our-school', 'personeel', 'staff', { af: 'Personeel', en: 'Staff' }),
  P('anthem', 'our-school', 'skoollied', 'school-anthem', { af: 'Skoollied', en: 'School Anthem' }),

  P('future', 'home', 'toekomstige-namies', 'future-namies', { af: 'Toekomstige Namies', en: 'Future Namies' }),
  P('applications', 'future', 'aansoeke', 'applications', { af: 'Aansoeke', en: 'Applications' }),
  P('fees', 'future', 'skoolfonds', 'school-fees', { af: 'Skoolfonds', en: 'School Fees' }),
  P('uniform', 'future', 'skooldrag', 'school-uniform', { af: 'Skooldrag', en: 'School Uniform' }),

  P('academics', 'home', 'akademie', 'academics', { af: 'Akademie', en: 'Academics' }),
  P('subjects-8-9', 'academics', 'graad-8-9-vakke', 'grade-8-9-subjects', { af: 'Graad 8 & 9 Vakke', en: 'Grade 8 & 9 Subjects' }),
  P('subjects-10-12', 'academics', 'graad-10-12-vakke', 'grade-10-12-subjects', { af: 'Graad 10–12 Vakke', en: 'Grade 10–12 Subjects' }),

  P('sport', 'home', 'sport', 'sport', { af: 'Sport', en: 'Sport' }),
  ...SPORTS.map((s) => P(`sport-${s.id}`, 'sport', `sport-${s.slug.af}`, `sport-${s.slug.en}`, s.name)),

  P('culture', 'home', 'kultuur', 'culture', { af: 'Kultuur', en: 'Culture' }),
  P('choir', 'culture', 'kultuur-koor', 'culture-choir', { af: 'Koor', en: 'Choir' }),
  P('drama', 'culture', 'kultuur-toneel', 'culture-drama', { af: 'Toneel', en: 'Drama' }),
  P('public-speaking', 'culture', 'kultuur-redenaars', 'culture-public-speaking', { af: 'Redenaars', en: 'Public Speaking' }),
  P('eisteddfod', 'culture', 'kultuur-eisteddfod', 'culture-eisteddfod', { af: 'Eisteddfod', en: 'Eisteddfod' }),
  P('social', 'culture', 'kultuur-sosiaal', 'culture-social', { af: 'Sosiaal & Namie-gees', en: 'Social & Namie Spirit' }),

  P('news', 'home', 'nuus', 'news', { af: 'Namies Nuus', en: 'Namies News' }, { nav: { af: 'Nuus', en: 'News' }, menu: { af: 'Namies Nuus', en: 'Namies News' } }),
  P('news-term2', 'news', 'nuus-afskop-tweede-kwartaal', 'news-second-term-kick-off',
    { af: 'Afskop van die tweede kwartaal', en: 'Kick-off to the second term' }, { hidden: true }),
  P('gallery', 'news', 'galery', 'gallery', { af: 'Fotogalery', en: 'Photo Gallery' }),

  P('contact', 'home', 'kontak', 'contact', { af: 'Kontak Ons', en: 'Contact Us' }, { nav: { af: 'Kontak', en: 'Contact' } }),
];

export const byId = Object.fromEntries(PAGES.map((p) => [p.id, p]));
export const TOP_NAV = ['home', 'our-school', 'future', 'academics', 'sport', 'culture', 'news', 'contact'];
export const childrenOf = (id) => PAGES.filter((p) => p.parent === id && !p.hidden);

// Home → … → page, used for breadcrumbs and to find the active top-level item.
export function trail(id) {
  const out = [];
  for (let p = byId[id]; p; p = p.parent ? byId[p.parent] : null) out.unshift(p);
  return out;
}

export const fileFor = (id, lang) => (lang === 'af' ? '' : 'en/') + `${byId[id].slug[lang]}.html`;

export const UI = {
  skip: { af: 'Spring na die inhoud', en: 'Skip to content' },
  apply: { af: 'Doen Aansoek', en: 'Apply Now' },
  menu: { af: 'Kieslys', en: 'Menu' },
  close: { af: 'Maak toe', en: 'Close' },
  overview: { af: 'Oorsig', en: 'Overview' },
  submenu: { af: 'Wys submenu vir', en: 'Show submenu for' },
  mainNav: { af: 'Hoofnavigasie', en: 'Main navigation' },
  language: { af: 'Taal', en: 'Language' },
  otherLang: { af: 'Lees hierdie bladsy in Engels', en: 'Lees hierdie bladsy in Afrikaans' },
  breadcrumb: { af: 'Broodkrummels', en: 'Breadcrumb' },
  inSection: { af: 'In hierdie afdeling', en: 'In this section' },
  readMore: { af: 'Lees meer', en: 'Read more' },
  quickLinks: { af: 'Vinnige skakels', en: 'Quick links' },
  info: { af: 'Inligting', en: 'Information' },
  contact: { af: 'Kontak', en: 'Contact' },
  schoolHours: { af: 'Skoolure', en: 'School hours' },
  weekend: { af: 'Naweke: Gesluit', en: 'Weekends: Closed' },
  callUs: { af: 'Skakel Ons', en: 'Call Us' },
  backToTop: { af: 'Terug na bo', en: 'Back to top' },
  rights: { af: 'Alle regte voorbehou.', en: 'All rights reserved.' },
  crestAlt: { af: 'Wapen van Hoërskool Dinamika', en: 'Hoërskool Dinamika crest' },
  followUs: { af: 'Volg ons', en: 'Follow us' },
  newTab: { af: '(maak in nuwe oortjie oop)', en: '(opens in a new tab)' },
};
