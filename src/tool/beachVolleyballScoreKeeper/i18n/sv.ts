import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'beachvolleyboll-resultatraknare';
const title = 'Beachvolleyboll Resultaträknare och Rotation Tracker';
const description = 'Håll koll på beachvolleybollpoäng, serveringsrotation, vindbaserade sidbyten och set med en interaktiv top-ned visualisering av en gyllene sandplan.';

const faq = [
  {
    question: 'När byter lagen sida i beachvolleyboll?',
    answer: 'För att säkerställa rättvisa under utomhusförhållanden (vind, sol, sand) byter lagen sida var 7:e poäng under de första två seten och var 5:e poäng under det tredje avgörande setet.',
  },
  {
    question: 'Hur fungerar serveringsrotation i beachvolleyboll?',
    answer: 'Varje lag har 2 spelare som måste turas om att serva. När ett lag vinner en sidout måste de byta servare så att spelaren som inte serverade förra gången serverar nästa.',
  },
  {
    question: 'Hur många poäng krävs för att vinna ett set i beachvolleyboll?',
    answer: 'Set 1 och 2 spelas till 21 poäng. Om ett tredje set behövs spelas det till 15 poäng. I alla fall måste ett lag vinna med minst 2 poängs marginal.',
  },
];

const howTo = [
  {
    name: 'Ställ In Uppställning',
    text: 'Ange anpassade namn för de två spelarna i både Lag A och Lag B.',
  },
  {
    name: 'Registrera Poäng',
    text: 'Tryck på ett lagkort eller klicka på den interaktiva sandplanen för att lägga till poäng. Uppställningen och rotationen uppdateras automatiskt.',
  },
  {
    name: 'Följ Varningar om Sidbyte',
    text: 'När bytesbanderollen glider ner, utför ett fysiskt sidbyte och klicka på bytesknappen för att invertera planens orientering.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: BeachVolleyballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Online Beachvolleyboll Resultattavla och Serveringsrotation Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att hålla reda på serveringsordning och lagpositioner under den heta solen kan vara svårt. Denna professionella beachvolleyboll resultaträknare har en sandtexturerad, högkontrast digital planlayout optimerad för utomhussikt. Den förhindrar problem med bländning, automatiserar sidbytesreglerna och håller reda på vilken av de två spelarna som ska serva efter varje sidout.',
    },
    {
      type: 'title',
      text: 'Förstå Beachvolleybolls Rotation och Serveringsregler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Även om det inte finns några fasta positioner eller rotationsfel baserade på plankoordinater i 2v2 beachvolleyboll måste spelare strikt alternera serveringen. När ett mottagande lag vinner en rally (kallat sidout) får de rätten att serva. Spelaren som inte serverade förra gången deras lag servade måste vara den nya servaren. Att serva i fel ordning är ett regelbrott och resulterar i en poäng för motståndarna. Denna digitala tavla har aktiva serveringsindikatorer och studsande bollar bredvid spelarcirklarna för att förhindra rotationsfel.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Officiella FIVB Regler',
          description: 'Uppfyll officiella poängriktlinjer, inklusive setgränser och sidbyten.',
          icon: 'mdi:volleyball',
          points: ['Set till 21 (tiebreak till 15)', 'Strikt vinst med 2 poäng', 'Automatiserade sidbyten'],
        },
        {
          title: 'Rotationsspårning',
          description: 'Aldrig mer argumentera om vems tur det är att serva.',
          icon: 'mdi:account-sync-outline',
          points: ['Lysande serveringsindikatorer', 'Initialer på sanden', 'Uppställnings overlay modal'],
        },
        {
          title: 'Optimerad för Utomhusbruk',
          description: 'Byggd för verkligt spel på sandplaner under direkt solljus.',
          icon: 'mdi:weather-sunny',
          points: ['Högkontrast gult tema', 'Wake Lock skärm persistence', 'Svepgest för att ångra poäng'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktiva Funktioner och Spelinställningar',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gyllene Sand SVG Plan:</strong> Återspeglar visuellt spelets tillstånd. Tryck direkt på någon planhalva för att tilldela ett poäng till det laget.',
        '<strong>Planrotationsanimation:</strong> När sidbytesvarningen aktiveras roterar ett klick på bytesknappen hela SVG planen 180 grader så att displayen överensstämmer med era fysiska positioner.',
        '<strong>FIVB Sidbyteslarm:</strong> Visar en synlig varningsbanderoll när den sammanlagda poängen är en multipel av 7 (i set 1 och 2) eller en multipel av 5 (i det sista setet).',
        '<strong>Sandstänk Partiklar:</strong> Lägger till visuell återkoppling vid poängförändringar med animerade sandpartiklar som sprutar från tryckkoordinaterna.',
        '<strong>Gest Ångra Kontroll:</strong> Svep ner på kortet för att omedelbart ångra den senast registrerade poängen.',
      ],
    },
    {
      type: 'title',
      text: 'Varför Byter Lagen Sida i Beachvolleyboll?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Till skillnad från inomhusvolleyboll påverkas beachvolleybollmatcher starkt av miljöfaktorer som solbländning, värme, vindstyrka och sandkonsistens. Att byta sida ofta säkerställer att inget lag får en orättvis fördel på grund av en gynnsam vindriktning eller solen i ögonen. Reglerna föreskriver att lagen byter sida var 7:e poäng under de första två seten och var 5:e poäng under det tredje setet.',
    },
  ],
  ui: {
    teamA: 'Lag 1',
    teamB: 'Lag 2',
    points: 'Poäng',
    sets: 'Set',
    reset: 'Återställ',
    resetConfirm: 'Återställa match? Alla poäng och uppställningar förloras.',
    cancel: 'Avbryt',
    switchSides: 'Byt Sida',
    switchSidesDesc: 'Kumulativ poäng har nått bytesgräns!',
    fullscreen: 'Fullskärm',
    exitFullscreen: 'Avsluta Fullskärm',
    player1: 'Spelare 1',
    player2: 'Spelare 2',
    serving: 'Servar',
    winner: 'Vinnare',
    undo: 'Ångra',
  },
};
