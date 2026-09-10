import { SCHOOL } from '../site.js';
import { icon } from '../icons.js';
import { section, sectionHead, pageHero, linkCard, termDates, btn, gallery, prose } from '../components.js';

const ALBUMS = {
  sport: { af: 'Sport', en: 'Sport' },
  culture: { af: 'Kultuur', en: 'Culture' },
  school: { af: 'Skoollewe', en: 'School life' },
};

export const PHOTOS = [
  { src: 'photos/hokkie-medaljes.jpg', album: 'sport', caption: { af: 'Hokkie: medaljes by sononder', en: 'Hockey: medals at sunset' }, alt: { af: 'Dinamika se hokkiespan met medaljes by sononder op die kunsgrasbaan', en: 'Dinamika hockey team with medals at sunset on the astro' } },
  { src: 'photos/hokkie-span.jpg', album: 'sport', caption: { af: 'Hokkiespan saam met die afrigters', en: 'Hockey team with the coaches' } },
  { src: 'photos/krieket-meisies.jpg', album: 'sport', caption: { af: 'Dogters-krieket', en: 'Girls’ cricket' }, alt: { af: 'Dinamika se dogters-krieketspan in navy-en-blougroen drag by sononder', en: 'Dinamika girls’ cricket team in navy and teal kit at sunset' } },
  { src: 'photos/krieket-wit.jpg', album: 'sport', caption: { af: 'Krieket in wit klere', en: 'Cricket in whites' } },
  { src: 'photos/netbal.webp', album: 'sport', caption: { af: 'Netbal in aksie', en: 'Netball in action' } },
  { src: 'photos/koor.jpg', album: 'culture', caption: { af: 'Dinamika se koor', en: 'The Dinamika choir' }, alt: { af: 'Plakkaat van Dinamika se koor: die koorlede in skooldrag met blougroen serpe', en: 'Dinamika choir poster: choir members in school uniform with teal stoles' } },
  { src: 'photos/toneel-verhoog.jpg', album: 'culture', caption: { af: 'Toneel in die skoolsaal', en: 'Drama in the school hall' } },
  { src: 'photos/toneel-spelers.jpg', album: 'culture', caption: { af: 'Toneelspelers op die verhoog', en: 'Actors on stage' } },
  { src: 'photos/redenaars.jpg', album: 'culture', caption: { af: 'Op die verhoog in die skoolsaal', en: 'On stage in the school hall' }, alt: { af: '’n Leerder praat voor ’n gehoor op die verhoog van die skoolsaal', en: 'A learner speaks to an audience on the school hall stage' } },
  { src: 'photos/leerderleiers.jpg', album: 'school', caption: { af: 'Respek, insluiting en trots', en: 'Respect, inclusion and pride' }, alt: { af: 'Leerders in skoolbaadjies voor die skoolgebou met die waardes Respek, Insluiting en Trots', en: 'Learners in blazers in front of the school with the values Respect, Inclusion and Pride' } },
  { src: 'photos/cheerleaders.jpg', album: 'school', caption: { af: 'Ons cheerleaders', en: 'Our cheerleaders' } },
  { src: 'photos/personeel-groep.webp', album: 'school', caption: { af: 'Dinamika se personeel', en: 'Dinamika staff' }, alt: { af: 'Personeellede van Dinamika in skoolbaadjies voor die skoolgebou', en: 'Dinamika staff members in school blazers in front of the school building' } },
  { src: 'news/saalopening.jpg', album: 'school', caption: { af: 'Afskop van die tweede kwartaal', en: 'Kick-off to the second term' } },
  { src: 'photos/skoolgebou.jpg', album: 'school', caption: { af: 'Die hoofingang', en: 'The main entrance' }, alt: { af: 'Die hoofingang van Hoërskool Dinamika met grasperk en tuin', en: 'The main entrance of Hoërskool Dinamika with lawn and garden' } },
  { src: 'photos/v-blok.webp', album: 'school', caption: { af: 'Een van ons klaskamerblokke', en: 'One of our classroom blocks' } },
  { src: 'photos/klaskamer.jpg', album: 'school', caption: { af: 'In die klaskamer', en: 'In the classroom' }, alt: { af: 'Leerders in sportdrag lees saam in die klaskamer', en: 'Learners in sports shirts reading together in class' } },
];

const socialBlock = (ctx) => `<div class="social-card">
  <h3>${ctx.L('Volg die Namies aanlyn', 'Follow the Namies online')}</h3>
  <p>${ctx.L('Die jongste nuus, foto’s en uitslae verskyn eerste op ons Facebook- en Instagram-blaaie.', 'The latest news, photos and results appear first on our Facebook and Instagram pages.')}</p>
  <div class="btn-row">
    ${btn({ href: SCHOOL.facebook, label: 'Facebook', ico: 'facebook', external: true, ctx })}
    ${btn({ href: SCHOOL.instagram, label: 'Instagram', ico: 'instagram', external: true, ctx, variant: 'light' })}
  </div>
</div>`;

export default {
  news(ctx) {
    const { L } = ctx;
    return {
      desc: L('Namies Nuus: nuus, kwartaaldatums en aankondigings van Hoërskool Dinamika in Alberton.', 'Namies News: news, term dates and announcements from Hoërskool Dinamika in Alberton.'),
      image: 'news/saalopening.jpg',
      body: `${pageHero(ctx, {
        image: 'news/saalopening.jpg', pos: '50% 40%',
        lead: L('Nuus, gebeure en belangrike datums van Hoërskool Dinamika.', 'News, events and important dates from Hoërskool Dinamika.'),
      })}
${section(`<div class="news-layout">
    ${linkCard({
      href: ctx.href('news-term2'),
      media: ctx.img('news/saalopening.jpg', { alt: L('Leerders van Dinamika by die saalopening op die sportveld', 'Dinamika learners at the assembly on the sports field') }),
      meta: L('3 April 2024 · Skoolnuus', '3 April 2024 · School news'),
      title: L('Afskop van die tweede kwartaal', 'Kick-off to the second term'),
      text: L('Hoërskool Dinamika het die tweede kwartaal begin met ’n saalopening wat mnr. Van der Schyff aangebied het.', 'Hoërskool Dinamika started the second term with an assembly presented by Mr Van der Schyff.'),
      cta: L('Lees meer', 'Read more'),
    })}
    ${termDates(ctx)}
    ${socialBlock(ctx)}
  </div>`)}
${section(`${sectionHead({ kicker: L('Fotogalery', 'Photo gallery'), title: L('Oomblikke by Dinamika', 'Moments at Dinamika'), lead: L('Blaai deur foto’s van sport, kultuur en die skoollewe.', 'Browse photos of sport, culture and school life.') })}
  ${btn({ href: ctx.href('gallery'), label: L('Besoek die galery', 'Visit the gallery'), ico: 'image' })}`, { tone: 'tint', cls: 'section--tight' })}`,
    };
  },

  'news-term2'(ctx) {
    const { L } = ctx;
    return {
      desc: L('Hoërskool Dinamika het die tweede kwartaal met ’n saalopening begin.', 'Hoërskool Dinamika started the second term with an assembly.'),
      image: 'news/saalopening.jpg',
      body: `${pageHero(ctx, { kicker: L('Skoolnuus', 'School news') })}
${section(`<article class="article">
    <div class="article__meta">
      <span>${icon('calendar', { size: 16 })}<time datetime="2024-04-03">${L('3 April 2024', '3 April 2024')}</time></span>
      <span>${icon('newspaper', { size: 16 })}${L('Namies Nuus', 'Namies News')}</span>
    </div>
    ${ctx.img('news/saalopening.jpg', { alt: L('Leerders van Dinamika sit op die pawiljoen en op die gras by die saalopening', 'Dinamika learners seated on the stand and on the lawn at the assembly'), cls: 'article__img' })}
    ${prose(`<p class="lead">${L('Hoërskool Dinamika het die tweede kwartaal begin met ’n saalopening wat mnr. Van der Schyff aangebied het.', 'Hoërskool Dinamika started the second term with an assembly presented by Mr Van der Schyff.')}</p>`)}
    <a class="back-link" href="${ctx.href('news')}">${icon('arrow-right', { size: 16, cls: 'flip' })}${L('Terug na Namies Nuus', 'Back to Namies News')}</a>
  </article>`)}`,
    };
  },

  gallery(ctx) {
    const { L } = ctx;
    return {
      desc: L('Foto’s van sport, kultuur en die skoollewe by Hoërskool Dinamika, Alberton.', 'Photos of sport, culture and school life at Hoërskool Dinamika, Alberton.'),
      image: 'photos/krieket-meisies.jpg',
      body: `${pageHero(ctx, {
        image: 'photos/krieket-meisies.jpg', pos: '50% 35%',
        lead: L('Sport, kultuur en die skoollewe by Dinamika — kies ’n album of klik op ’n foto om dit te vergroot.', 'Sport, culture and school life at Dinamika — pick an album or select a photo to enlarge it.'),
      })}
${section(gallery(ctx, PHOTOS, { albums: ALBUMS }))}
${section(`<div class="split">
    <div>${sectionHead({ kicker: L('Meer foto’s', 'More photos'), title: L('Volg ons vir die nuutste', 'Follow us for the latest'), lead: L('Nuwe foto’s van wedstryde, konserte en skoolgeleenthede word gereeld op ons sosiale media gedeel.', 'New photos of matches, concerts and school events are shared regularly on our social media.') })}</div>
    ${socialBlock(ctx)}
  </div>`, { tone: 'tint' })}`,
    };
  },
};
