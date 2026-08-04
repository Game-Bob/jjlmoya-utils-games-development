import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'lopaptempo-kalkylator';
const title = 'Löpartempo Kalkylator och Racetid Prognos';
const description =
  'Beräkna ditt löpartempo, förutsäg sluttider för 5k, 10k, halvmaraton och maraton med Riegels formel och generera träningszoner.';

const faqData = [
  {
    question: 'Hur exakt är Peter Riegels formel för maratonprognoser?',
    answer:
      'Riegels formel T2 = T1 * (D2 / D1)^1.06 ger hög noggrannhet om du har en god aerob grund. För maraton beror resultatet starkt på veckovolym och långpass.',
  },
  {
    question: 'Hur omvandlar man min/km till min/mile exakt?',
    answer:
      'Multiplicera totala sekunder per kilometer med 1,609344. Ett tempo på 5:00 min/km motsvarar 8:03 min/mile.',
  },
  {
    question: 'Varför verkar förutsagda tider ibland för utmanande på långa distanser?',
    answer:
      'Standardexponenten 1,06 förutsätter optimal uthållighet. Utan tillräcklig volymträning leder trötthet till långsammare tider.',
  },
  {
    question: 'Hur bör jag ställa in tempogränser för intervaller och tröskelpass?',
    answer:
      'Intervallpass (VO2-max) bör springas i 95%-105% av 5k-tempot, tröskelpass i 110%-120%, och lugn distans i 125%-145%.',
  },
];

const howToData = [
  {
    name: 'Välj enhetssystem',
    text: 'Välj mellan metriskt system (km, min/km) eller imperialt system (miles, min/mile).',
  },
  {
    name: 'Välj distans',
    text: 'Klicka på en snabbvalsknapp (5K, 10K, Halvmaraton, 42K) eller ange en egen distans.',
  },
  {
    name: 'Justera referenstid',
    text: 'Använd knapparna (+1m, +5m, -1m, -5m) eller ange timmar och minuter från ett nyligen genomfört lopp.',
  },
  {
    name: 'Analysera resultat',
    text: 'Se ditt medeltempo, beräknade sluttider enligt Riegel och träningszoner direkt.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Biomekaniska Principer för Beräkning av Löpartempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att beräkna löpartempo och förutsäga lopptider kräver förståelse för metabola energisystem. Uthållighet styrs av VO2-max, laktattröskel och löpekonomi.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Riegel Exponent' },
        { value: '4 Huvud', label: 'Officiella Distanser' },
        { value: '3 Sätt', label: 'Interaktiv Beräkning' },
        { value: '3 Nivåer', label: 'Träningszoner' },
      ],
    },
    {
      type: 'title',
      text: 'Riegels Formel och Dess Användning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Formeln T2 = T1 * (D2 / D1)^1.06 av Peter Riegel (1977) modellerar farttappet när distansen ökar. Exponenten 1,06 motsvarar genomsnittligt farttapp hos vältränade löpare.',
    },
    {
      type: 'title',
      text: 'Jämförelse mellan Metriskt och Imperialt System',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Metriskt System (min/km)',
          description: 'Standard i Europa. Ger exakt kontroll över kilometertider.',
        },
        {
          title: 'Imperialt System (min/mile)',
          description: 'Standard i USA och Storbritannien. En mile motsvarar 1,609344 km.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Översikt över Officiella Loppdistanser',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Lopp', 'Metrisk Distans (km)', 'Imperial Distans (mi)', 'Huvudsakligt Energisystem'],
      rows: [
        ['5K Gatu-lopp', '5.00 km', '3.11 mi', '90% Aerobt / 10% Anaerobt'],
        ['10K Gatu-lopp', '10.00 km', '6.21 mi', '95% Aerobt / 5% Anaerobt'],
        ['Halvmaraton', '21.0975 km', '13.11 mi', '99% Aerobt (Laktattröskel)'],
        ['Maraton', '42.195 km', '26.22 mi', '100% Aerobt (Glykogenbegränsat)'],
      ],
    },
    {
      type: 'title',
      text: 'Loppstrategi och Negative Split',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Fördelen med Negative Split',
      html: 'Att springa andra halvan något snabbare sparar glykogen och förhindrar tidig mjölksyra.',
    },
  ],
  ui: {
    title: 'Löpartempo Kalkylator och Racetid Prognos',
    subtitle: 'Beräkna tempo och förutsäg sluttider med Riegels formel',
    paceCalculatorTitle: 'Kalkylator för Tempo, Distans och Tid',
    racePredictorTitle: 'Prognos för Sluttider i Lopp',
    trainingZonesTitle: 'Målzoner för Träningspass',
    distanceLabel: 'Distans',
    timeLabel: 'Tid',
    paceLabel: 'Medeltempo',
    hoursLabel: 'Timmar',
    minutesLabel: 'Minuter',
    secondsLabel: 'Sekunder',
    unitKm: 'Kilometer',
    unitMiles: 'Miles',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mile',
    presetsTitle: 'Snabbval Distans',
    calculateButton: 'Beräkna',
    resetButton: 'Återställ',
    recentRaceTitle: 'Nyligen Genomfört Lopp',
    predictedTimesTitle: 'Beräknade Sluttider',
    distanceHeader: 'Distans',
    estimatedTimeHeader: 'Beräknad Tid',
    targetPaceHeader: 'Måltempo',
    trainingZoneHeader: 'Träningszon',
    paceRangeHeader: 'Tempogränser',
    zoneEasy: 'Lugn Distans & Återhämtning',
    zoneEasyDesc: 'Aerob basbyggnad och återhämtning',
    zoneTempo: 'Tröskelpass & Fartlek',
    zoneTempoDesc: 'Höjning av laktattröskel',
    zoneIntervals: 'Intervaller & Snabbhet',
    zoneIntervalsDesc: 'Utveckling av VO2-max och snabbhetsuthållighet',
    riegelExplanation: 'Prognosen baseras på Riegels formel T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Löpartempo Kalkylator och Racetid Prognos',
      description: 'Beräkna ditt löpartempo och förutsäg sluttider för 5k, 10k, halvmaraton och maraton.',
      h1: 'Löpartempo Kalkylator och Racetid Prognos',
      intro: 'Exakt tempoberäkning och tidsförutsägelse är viktiga verktyg för löpare.',
      statsTitle: 'Prestandaindikatorer',
      stat1Label: 'Riegel Exponent',
      stat1Value: '1.06',
      stat2Label: 'Huvuddistanser',
      stat2Value: '4 Lopp',
      stat3Label: 'Tempoberäkning',
      stat3Value: '3 Sätt',
      stat4Label: 'Målzoner',
      stat4Value: '3 Nivåer',
      comparativeTitle: 'Enhetsjämförelse',
      comparativeItem1Title: 'Metriskt (min/km)',
      comparativeItem1Desc: 'Standard i Europa.',
      comparativeItem2Title: 'Imperialt (min/mile)',
      comparativeItem2Desc: 'Standard i USA och UK.',
      tableTitle: 'Översikt över Loppdistanser',
      tableCol1: 'Lopp',
      tableCol2: 'Kilometer',
      tableCol3: 'Miles',
      tableRow1Col1: '5K Lopp',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: '10K Lopp',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Halvmaraton',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Loppstrategi',
      tipText: 'Negative split ger bäst resultat.',
      faqTitle: 'Vanliga Frågor',
      faq1Q: 'Hur exakt är Riegels formel?',
      faq1A: 'Kräver god aerob grundträning.',
      faq2Q: 'Skillnad på min/km och min/mile?',
      faq2A: 'Min/km är tid per kilometer.',
      glossaryTitle: 'Löparordlista',
      term1Name: 'Riegels Formel',
      term1Def: 'Matematisk modell för tidsförutsägelse av Peter Riegel.',
      term2Name: 'Laktattröskel',
      term2Def: 'Intensitet där mjölksyra ansamlas snabbt.',
    },
  },
};
