import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'streetball-3x3-resultatraknare';
const title = 'Premium Streetball 3x3 Resultaträknare med Skottklocka';
const description = 'Håll koll på FIBA 3x3 Streetball-poäng med en integrerad 12-sekunders skottklocka, lagfoular, sudden death-poäng och dynamiska halvplanindikatorer.';

const faq = [
  {
    question: 'Hur fungerar 12-sekunders skottklockan i 3x3 Streetball?',
    answer: 'I FIBA 3x3 har lagen bara 12 sekunder på sig att försöka skjuta när de fått bollinnehav. Skottklockan återställs till 12 vid byte av bollinnehav eller till 14 sekunder vid offensiva returer och foular under specifika förhållanden.',
  },
  {
    question: 'Vad är sudden death-poänggränsen i 3x3 Basket?',
    answer: 'Det första laget som når 21 poäng vinner matchen omedelbart, oavsett återstående tid på matchklockan. Detta är sudden death-regeln.',
  },
  {
    question: 'Hur påverkar lagfoular matchen?',
    answer: 'Från och med den 7:e lagfoulen tilldelas motståndarna 2 frikast. Vid den 10:e och efterföljande foular får de 2 frikast plus bollinnehav, vilket utlöser straffstatus.',
  },
];

const howTo = [
  {
    name: 'Ställ in Lag namn',
    text: 'Anpassa namnen för de två streetball-lagen för att skräddarsy HUD:en.',
  },
  {
    name: 'Logga Poäng och Bollinnehav',
    text: 'Tryck på den interaktiva asfaltsplanen för att lägga till 1 poäng (innanför bågen) eller 2 poäng (utanför bågen) och växla bollinnehavsindikatorn.',
  },
  {
    name: 'Kontrollera Skottklockan',
    text: 'Tryck på skottklockan för att återställa till 12, klicka på sekundär återställning för 14 eller dubbeltryck för att pausa nedräkningen.',
  },
  {
    name: 'Hantera Lagfoular',
    text: 'Håll koll på lagfoular med räknaren, som blir röd när straffstatus uppnås (7+ foular).',
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

export const content: StreetballLocaleContent = {
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
      text: 'Gratis Online 3x3 Streetball Resultattavla',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att hålla poäng i snabba 3v3 basketmatcher kan vara svårt när man samtidigt hanterar en kort skottklocka och håller koll på lagfoular. Denna gratis online 3x3 streetball resultattavla har ett industriellt asfaltstema med neonstyling med hög kontrast. Den hanterar automatiskt 12-sekunders skottklockan, matchklockan, fouls straffsystem och bollinnehavsindikatorer.',
    },
    {
      type: 'title',
      text: 'FIBA 3x3 Streetball Poäng- och Skottklockeregler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3 streetball skiljer sig från traditionell 5v5 basket. Matcher pågår i en 10-minutersperiod eller slutar omedelbart när ett lag når 21 poäng (sudden death). Skott innanför bågen och frikast ger 1 poäng, medan skott från bakom 6,75 m-bågen ger 2 poäng. 12-sekunders skottklockan tvingar fram snabba anfallsspel, och spelare måste rensa bollen bakom bågen vid byte av bollinnehav.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Casual Pickup Spel',
          description: 'Snabba poängräkning för streetbasket med vänner på lokala planer.',
          icon: 'mdi:basketball',
          points: ['Enkla poängknappar', 'Responsiv layout', 'Fungerar offline'],
        },
        {
          title: 'Turneringsspel',
          description: 'Perfekt för officiella 3x3-turneringar och streetball-ligor.',
          icon: 'mdi:trophy-outline',
          points: ['10 minuters nedräkning', 'Sudden death vid 21 poäng', 'Straffstatus för foular'],
        },
        {
          title: 'Domarpanel',
          description: 'Designad för domare att snabbt hantera skottklocka och bollinnehav.',
          icon: 'mdi:school',
          points: ['12s och 14s skottklocksåterställning', 'Signalhorn', 'Taktila knappgester'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktiva Kontroller och Taktila Animationer',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12-sekunders Skottklocka</strong> blinkar rött och visar decimaler under 4 sekunder, följt av ett simulerat signalhorn.',
        '<strong>Interaktiv Betonghalvplan</strong> låter dig trycka på 1-poängs- och 2-poängsområdena för att registrera poäng direkt på diagrammet.',
        '<strong>Foulräknare Varning</strong> blir röd och skakar för att indikera lagfoulsstraff (7+ och 10+ foular).',
        '<strong>Bollrensningsindikator</strong> visar en påminnelse när bollinnehavet ändras tills bollen har rensats bakom bågen.',
        '<strong>Timeout-räknare</strong> startar en 30-sekunders nedräkning med anpassade ljudvarningar.',
      ],
    },
    {
      type: 'title',
      text: 'Varför Använda en Digital Streetball-spårare?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En digital resultattavla eliminerar oenigheter om poäng, foular eller skottklocksöverträdelser på asfalten. De ljusa neonsiffrorna är lätta att läsa på avstånd, och de automatiska påminnelserna om bollinnehav och rensning säkerställer att matchen flyter smidigt utan avbrott.',
    },
  ],
  ui: {
    teamA: 'Lag 1',
    teamB: 'Lag 2',
    points: 'Poäng',
    fouls: 'Foular',
    timeouts: 'Timeouter',
    shotClock: 'Skottklocka',
    reset: 'Återställ',
    resetConfirm: 'Återställ match? All data kommer att förloras.',
    cancel: 'Avbryt',
    gameTime: 'Tid',
    possession: 'Bollinnehav',
    clearBall: 'Rensa Bollen',
    matchWon: 'Match Vunnen',
    timeoutActive: 'Timeout',
    penalty: 'Straff',
    fullscreen: 'Fullskärm',
    exitFullscreen: 'Avsluta Fullskärm',
    overtime: 'Förlängning',
    ptsInside: '+1 Poäng',
    ptsOutside: '+2 Poäng',
    toggleSound: 'Växla Ljud',
    soundOn: 'Ljud På',
    soundOff: 'Ljud Av',
  },
};
