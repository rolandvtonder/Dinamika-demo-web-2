// Sports offered (per the old website) with kit taken from the uniform page.
// Seasons are the usual South African school seasons — confirm with the sport office.
export const SPORTS = [
  {
    id: 'athletics', slug: { af: 'atletiek', en: 'athletics' }, name: { af: 'Atletiek', en: 'Athletics' }, icon: 'timer',
    season: { af: 'Kwartaal 1 (somer)', en: 'Term 1 (summer)' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Atletiek gee elke leerder die kans om spoed, uithouvermoë en krag op die baan en in die veld te toets — van naellope en afstandnommers tot spring- en gooi-items.',
      en: 'Athletics gives every learner the chance to test their speed, endurance and strength on the track and in the field — from sprints and distance events to jumps and throws.',
    },
    kit: {
      af: ['Dogters: vollengte hemp of “crop top” (navy en wit met skoolwapen)', 'Dogters: knielengte- of middel-dy-skibroek, of jogger (navy)', 'Seuns: vollengte hemp (navy en wit met skoolwapen)', 'Seuns: knielengte-skibroek of jogger (navy)', 'Skoolsweetpak en tekkies na byeenkomste'],
      en: ['Girls: full-length top or crop top (navy and white with school badge)', 'Girls: knee-length or mid-thigh ski pants, or joggers (navy)', 'Boys: full-length shirt (navy and white with school crest)', 'Boys: knee-length ski pants or joggers (navy)', 'School tracksuit and sneakers to meetings'],
    },
  },
  {
    id: 'cross-country', slug: { af: 'landloop', en: 'cross-country' }, name: { af: 'Landloop', en: 'Cross Country' }, icon: 'footprints',
    season: { af: 'Kwartaal 2–3 (winter)', en: 'Terms 2–3 (winter)' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Landloop bou uithouvermoë, selfdissipline en deursettingsvermoë. Dit is ’n sportsoort waar elke atleet teen die klok, die terrein en hulself kompeteer.',
      en: 'Cross country builds endurance, self-discipline and perseverance. It is a sport in which every athlete competes against the clock, the terrain and themselves.',
    },
  },
  {
    id: 'rugby', slug: { af: 'rugby', en: 'rugby' }, name: { af: 'Rugby', en: 'Rugby' }, icon: 'trophy',
    season: { af: 'Kwartaal 2–3 (winter)', en: 'Terms 2–3 (winter)' },
    who: { af: 'Seuns', en: 'Boys' },
    intro: {
      af: 'Rugby leer spanwerk, moed en respek vir die teenstander. Ons spelers dra die navy-en-blougroen trui met trots, op die veld en langs die kantlyn.',
      en: 'Rugby teaches teamwork, courage and respect for the opposition. Our players wear the navy and teal jersey with pride, on the field and along the touchline.',
    },
    kit: {
      af: ['Skool-rugbybroek (navy)', 'Skool-rugbytrui', 'Skool-rugbykouse'],
      en: ['School rugby shorts (navy)', 'School rugby jersey', 'School rugby socks'],
    },
  },
  {
    id: 'netball', slug: { af: 'netbal', en: 'netball' }, name: { af: 'Netbal', en: 'Netball' }, icon: 'target',
    season: { af: 'Kwartaal 2–3 (winter)', en: 'Terms 2–3 (winter)' },
    who: { af: 'Dogters', en: 'Girls' },
    intro: {
      af: 'Netbal vra vinnige besluite, presiese aangee en hegte spanwerk. Dit is een van die gewildste spansporte vir ons dogters.',
      en: 'Netball calls for quick decisions, precise passing and close teamwork. It is one of the most popular team sports among our girls.',
    },
    kit: {
      af: ['Skool-netbalromp', 'Skool-netbalhemp', 'Skool-netbalkouse'],
      en: ['School netball skirt', 'School netball shirt', 'School netball socks'],
    },
    photos: [{ src: 'photos/netbal.webp', alt: { af: 'Netbalspelers van Dinamika in aksie op die baan', en: 'Dinamika netball players in action on court' } }],
  },
  {
    id: 'hockey', slug: { af: 'hokkie', en: 'hockey' }, name: { af: 'Hokkie', en: 'Hockey' }, icon: 'trophy',
    season: { af: 'Kwartaal 2–3 (winter)', en: 'Terms 2–3 (winter)' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Hokkie word by Dinamika vir seuns én dogters aangebied. Dit is ’n vinnige, tegniese spansport wat vaardigheid, fiksheid en spangees beloon.',
      en: 'At Dinamika hockey is offered to boys and girls. It is a fast, technical team sport that rewards skill, fitness and team spirit.',
    },
    kit: {
      af: ['Dogters: skool-hokkieromp', 'Seuns: skool-hokkiebroek', 'Skool-hokkiehemp', 'Skool-hokkiekouse'],
      en: ['Girls: school hockey skirt', 'Boys: school hockey shorts', 'School hockey shirt', 'School hockey socks'],
    },
    photos: [
      { src: 'photos/hokkie-medaljes.jpg', alt: { af: 'Hokkiespan van Dinamika met medaljes by sononder', en: 'Dinamika hockey team with medals at sunset' } },
      { src: 'photos/hokkie-span.jpg', alt: { af: 'Hokkiespan van Dinamika saam met hul afrigters op die kunsgrasbaan', en: 'Dinamika hockey team with their coaches on the astro' } },
    ],
  },
  {
    id: 'cricket', slug: { af: 'krieket', en: 'cricket' }, name: { af: 'Krieket', en: 'Cricket' }, icon: 'trophy',
    season: { af: 'Kwartaal 1 en 4 (somer)', en: 'Terms 1 and 4 (summer)' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Krieket vra geduld, konsentrasie en spanwerk. Ons spanne speel in die tradisionele wit klere sowel as in die skool se kleurdrag.',
      en: 'Cricket calls for patience, concentration and teamwork. Our teams play in traditional whites as well as in the school’s coloured kit.',
    },
    kit: {
      af: ['Wedstryde: krieket-hemp (wit met skoolwapen)', 'Wedstryde: krieket-langbroek (wit)', 'Wedstryde: krieketpet (wit)', 'Opwarm: hemp (navy en wit met skoolwapen)', 'Opwarm: kortbroek (navy en wit met skoolwapen)'],
      en: ['Games: cricket shirt (white with school badge)', 'Games: cricket longs (white)', 'Games: cricket cap (white)', 'Warm-ups: shirt (navy and white with school badge)', 'Warm-ups: shorts (navy and white with badge)'],
    },
    photos: [
      { src: 'photos/krieket-meisies.jpg', alt: { af: 'Dinamika se dogters-krieketspan in navy-en-blougroen drag by sononder', en: 'Dinamika girls’ cricket team in navy and teal kit at sunset' } },
      { src: 'photos/krieket-wit.jpg', alt: { af: 'Krieketspelers van Dinamika in wit klere op die veld', en: 'Dinamika cricketers in whites on the field' } },
    ],
  },
  {
    id: 'mountain-biking', slug: { af: 'bergfiets', en: 'mountain-biking' }, name: { af: 'Bergfiets', en: 'Mountain Biking' }, icon: 'bike',
    season: { af: 'Deur die jaar', en: 'Year-round' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Bergfietsry kombineer fiksheid, tegniek en avontuur. Ryers leer om met selfvertroue en veilig oor uitdagende roetes te ry.',
      en: 'Mountain biking combines fitness, technique and adventure. Riders learn to tackle challenging trails safely and with confidence.',
    },
    kit: {
      af: ['Fietsrybroek (swart)', 'Skool-fietsrytrui', 'Span-fietsrykouse'],
      en: ['Cycling shorts (black)', 'School cycling jersey', 'Team cycling socks'],
    },
  },
  {
    id: 'angling', slug: { af: 'hengel', en: 'angling' }, name: { af: 'Hengel', en: 'Angling' }, icon: 'fish',
    season: { af: 'Deur die jaar', en: 'Year-round' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Hengel leer geduld, respek vir die natuur en noukeurige tegniek — ’n sportsoort vir leerders wat graag buite is.',
      en: 'Angling teaches patience, respect for nature and careful technique — a sport for learners who love the outdoors.',
    },
    kit: {
      af: ['Skool-hengelhemp', 'Kortbroek (navy)'],
      en: ['School angling shirt', 'Shorts (navy)'],
    },
  },
  {
    id: 'tennis', slug: { af: 'tennis', en: 'tennis' }, name: { af: 'Tennis', en: 'Tennis' }, icon: 'trophy',
    season: { af: 'Kwartaal 1 en 4 (somer)', en: 'Terms 1 and 4 (summer)' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Tennis ontwikkel ratsheid, fokus en ’n sterk wedstrydtemperament, in enkelspel sowel as dubbelspel.',
      en: 'Tennis develops agility, focus and a strong match temperament, in singles as well as doubles.',
    },
    kit: {
      af: ['Dogters: skool-tennisrok en wit kouse', 'Seuns: skool-Vrydaghemp, skool-rugbybroek en wit kouse'],
      en: ['Girls: school tennis dress and white socks', 'Boys: school Friday shirt, school rugby shorts and white socks'],
    },
  },
  {
    id: 'equestrian', slug: { af: 'perdry', en: 'equestrian' }, name: { af: 'Perdry', en: 'Equestrian' }, icon: 'award',
    season: { af: 'Deur die jaar', en: 'Year-round' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Ruiterkuns bou ’n besondere band tussen ruiter en perd, en vra toewyding, verantwoordelikheid en fyn beheer.',
      en: 'Equestrian sport builds a special bond between rider and horse, and asks for dedication, responsibility and fine control.',
    },
    kit: {
      af: ['Perdrybroek (wit)', 'Skool-rybaadjie (navy met embleem)'],
      en: ['Riding breeches (white)', 'School riding jacket (navy with logo)'],
    },
  },
  {
    id: 'chess', slug: { af: 'skaak', en: 'chess' }, name: { af: 'Skaak', en: 'Chess' }, icon: 'crown',
    season: { af: 'Deur die jaar', en: 'Year-round' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Skaak skerp logiese denke, beplanning en konsentrasie aan — vaardighede wat ook in die klaskamer ’n verskil maak.',
      en: 'Chess sharpens logical thinking, planning and concentration — skills that make a difference in the classroom too.',
    },
  },
  {
    id: 'robotics', slug: { af: 'robotika', en: 'robotics' }, name: { af: 'Robotika', en: 'Robotics' }, icon: 'bot',
    season: { af: 'Deur die jaar', en: 'Year-round' },
    who: { af: 'Seuns en dogters', en: 'Boys and girls' },
    intro: {
      af: 'Robotika kombineer kodering, ingenieurswese en probleemoplossing. Leerders ontwerp, bou en programmeer hul eie robotte in die skool se Digitale Tegnologie-sentrum.',
      en: 'Robotics combines coding, engineering and problem-solving. Learners design, build and program their own robots in the school’s Digital Technology centre.',
    },
  },
];
