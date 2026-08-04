import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'straffsparkslaggning-raknare';
const title = 'Straffläggning Anslagstavla Online: Live Straffräknare Fotboll';
const description =
  'Följ straffläggningar i fotboll i realtid. Med 5-straffars indikator, matematisk eliminering, sudden death och vinnaranimationer.';

const faqData = [
  {
    question: 'När avslutas en straffläggning i förtid?',
    answer:
      'En straffläggning avbryts så snart ett lag uppnår en målskillnad som motståndaren matematiskt inte längre kan hämta in med sina återstående straffar.',
  },
  {
    question: 'Hur fungerar sudden death vid straffläggning?',
    answer:
      'Om det är oavgjort efter 5 straffar var, fortsätter straffläggningen med en omgång i taget tills ett lag gör mål och det andra missar i samma omgång.',
  },
  {
    question: 'Vem skjuter först i en straffläggning?',
    answer:
      'Domaren singlar slant för att välja mål och gör en andra singling för att avgöra vilket lag som börjar skjuta.',
  },
  {
    question: 'Kan en målvakt bytas ut under straffläggningen?',
    answer:
      'En skadad målvakt som inte kan fortsätta får ersättas av en namngiven ersättare, förutsatt att laget inte har förbrukat sina tillåtna byten.',
  },
];

const howToData = [
  {
    name: 'Ange lagnamn',
    text: 'Fyll i lagens namn i inmatningsfälten innan straffläggningen startar.',
  },
  {
    name: 'Registrera varje straff',
    text: 'Klicka på MÅL eller MISSA efter varje skott. Appen uppdaterar ställning, indikatorer och turordning automatiskt.',
  },
  {
    name: 'Overgång till Sudden Death',
    text: 'Vid oavgjort efter 5 straffar var kopplar verktyget automatiskt om till sudden death-läge.',
  },
  {
    name: 'Tillkännage vinnaren',
    text: 'Vid matematisk seger eller avgörande i sudden death utropar en animerad ruta det vinnande laget.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
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
  step: howToData.map((step, i) => ({
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Officiella IFAB-regler för Straffsparksläggning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Straffsparksläggning (officiellt <em>sparkar från straffpunkten</em>) avgör vinnaren i en oavgjord utslagsmatch i fotboll enligt Regel 10 i IFAB:s Spelregler.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Inledande Straffar' },
        { value: '11m', label: 'Avstånd till Mål' },
        { value: '1v1', label: 'Skytt vs Målvakt' },
        { value: 'ABBA / AB', label: 'Turordningsmönster' },
      ],
    },
    {
      type: 'tip',
      title: 'Regel om Matematisk Eliminering',
      html: 'Om ett lag gör fler mål än vad motståndaren matematiskt kan nå med sina återstående straffar, blåser domaren omedelbart av straffläggningen.',
    },
    {
      type: 'title',
      text: 'Jämförelse Ordinarie Omgångar vs Sudden Death',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ordinarie Omgångar (5 Straffar)',
          description: 'Serie med 5 alternerande straffar per lag. Förtida avbrott endast vid matematisk omöjlighet att komma ikapp.',
        },
        {
          title: 'Sudden Death Omgångar',
          description: 'Enskilda straffomgångar från omgång 6. Målskillnad efter lika antal straffar ger omedelbar seger.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Viktiga IFAB-bestämmelser',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Regel / Krav', 'Officiell IFAB-standard'],
      rows: [
        ['Behöriga Spelare', 'Endast spelare som befinner sig på planen vid slutvisstlingen får delta i straffläggningen.'],
        ['Målvaktens Position', 'Måste ha minst en del av en fot på mållinjen i skottögonblicket.'],
        ['Finter i Tillloppet', 'Finter under tillloppet är tillåtna; finter efter fullföljt tilllopp bestraffas.'],
        ['Lika Antal Spelare', 'Om ett lag har färre spelare på grund av utvisning måste motståndaren reducera sitt lag till motsvarande antal.'],
      ],
    },
    {
      type: 'title',
      text: 'För och Nackdelar med Straffsparksläggning',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Utvärdering av Formatet',
      items: [
        {
          pro: 'Garanterar en tydlig vinnare inom en förutsägbar tidsram.',
          con: 'Den extrema psykologiska pressen kan överskugga prestationen under 120 minuters spel.',
        },
        {
          pro: 'Ger maximal spänning och dramatik för alla åskådare.',
          con: 'En enskild spelares miss kan medföra en oproportionerligt stor skuld.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Hemmalag',
    teamBLabel: 'Bortalag',
    scoreGoal: 'MÅL',
    scoreMiss: 'MISSA',
    undo: 'Ångra',
    reset: 'Återställ',
    suddenDeath: 'Sudden Death',
    regularRounds: 'Ordinarie Omgång',
    roundLabel: 'Omgång',
    turnLabel: 'Tur att skjuta',
    winnerTitle: 'Vinnare Utramad',
    unreachableLead: 'Oinhämtbar ledning i ordinarie omgång',
    regularRoundsWin: 'Seger efter 5 ordinarie straffar',
    suddenDeathWin: 'Seger i sudden death',
    statusPending: 'Väntar',
    statusScored: 'Mål',
    statusMissed: 'Missad',
  },
};
