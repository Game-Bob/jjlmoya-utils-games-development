import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'hardloop-tempo-calculator';
const title = 'Hardloop Tempo Calculator en Racetijd Voorspeller';
const description =
  'Bereken je hardlooptempo, voorspel eindtijden voor 5k, 10k, halve marathon en marathon met de formule van Riegel en genereer trainingszones.';

const faqData = [
  {
    question: 'Hoe nauwkeurig is de formule van Peter Riegel voor marathonvoorspellingen?',
    answer:
      'De formule van Riegel T2 = T1 * (D2 / D1)^1.06 biedt een hoge nauwkeurigheid bij een goede aerobe basis. Bij marathons hangt het resultaat ook af van weekkilometers en lange duurlopen.',
  },
  {
    question: 'Hoe reken je min/km precies om naar min/mijl?',
    answer:
      'Vermenigvuldig het totaal aantal seconden per kilometer met 1,609344. Een tempo van 5:00 min/km (300 seconden) komt overeen met 8:03 min/mijl.',
  },
  {
    question: 'Waarom lijken voorspelde tijden op lange afstanden soms te ambitieus?',
    answer:
      'De standaard exponent 1.06 gaat uit van een optimale vermoeidheidsweerstand. Zonder voldoende duurtraining leidt vermoeidheid tot een trager tempo.',
  },
  {
    question: 'Hoe stel je trainingszones in voor intervallen en tempoloop?',
    answer:
      'Intervaltraining (VO2 max) voer je uit tussen 95% en 105% van je 5k-tempo, tempolopen op 110% tot 120%, en rustige duurlopen op 125% tot 145%.',
  },
];

const howToData = [
  {
    name: 'Kies het eenhedensysteem',
    text: 'Kies tussen het metriek systeem (km, min/km) of imperiaal systeem (mijlen, min/mijl) met de knop bovenaan.',
  },
  {
    name: 'Selecteer afstand',
    text: 'Klik op een bekende afstand (5K, 10K, Halve Marathon, 42K) of vul een eigen afstand in.',
  },
  {
    name: 'Past tijd aan',
    text: 'Gebruik de knoppen (+1m, +5m, -1m, -5m) of vul de uren en minuten van je recente wedstrijd in.',
  },
  {
    name: 'Bekijk voorspellingen en zones',
    text: 'Zie direct je gemiddelde tempo, verwachte racetijden volgens Riegel en je persoonlijke trainingszones.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
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
      text: 'Biomechanische Principes van Hardlooptempoberekening',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het berekenen van hardlooptempo en het voorspellen van racetijden vereist inzicht in metabole energiesystemen. Duurprestaties worden bepaald door de maximale zuurstofopname (VO2 max), anaërobe drempel en loop-efficiëntie.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Riegel Exponent' },
        { value: '4 Belangrijkste', label: 'Wedstrijdafstanden' },
        { value: '3 Manieren', label: 'Tempoberekening' },
        { value: '3 Niveaus', label: 'Trainingszones' },
      ],
    },
    {
      type: 'title',
      text: 'De Formule van Riegel in de Praktijk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De in 1977 door ingenieur Peter Riegel ontwikkelde formule T2 = T1 * (D2 / D1)^1.06 beschrijft de snelheidsafname naarmate de afstand toeneemt. De exponent 1,06 staat voor de gemiddelde aerobe vermoeidheid bij getrainde lopers.',
    },
    {
      type: 'title',
      text: 'Vergelijking Metriek vs Imperiaal Systeem',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Metriek Systeem (min/km)',
          description: 'De standaard in Europese wegwedstrijden. Zorgt voor nauwkeurige tussentijden per 1000 meter.',
        },
        {
          title: 'Imperiaal Systeem (min/mijl)',
          description: 'De standaard in de VS en het VK. Één mijl is gelijk aan 1,609344 kilometer.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Overzicht van Officiële Wedstrijdafstanden',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Wedstrijd', 'Metrieke Afstand (km)', 'Imperiale Afstand (mi)', 'Primaire Energievoorziening'],
      rows: [
        ['5K Wegwedstrijd', '5.00 km', '3.11 mi', '90% Aëroob / 10% Anaëroob Glycolytisch'],
        ['10K Wegwedstrijd', '10.00 km', '6.21 mi', '95% Aëroob / 5% Anaëroob Glycolytisch'],
        ['Halve Marathon', '21.0975 km', '13.11 mi', '99% Aëroob (Lactaatdrempel Dominant)'],
        ['Hele Marathon', '42.195 km', '26.22 mi', '100% Aëroob (Beperkt door Glycogeen)'],
      ],
    },
    {
      type: 'title',
      text: 'Pacing Strategie en Negative Splits',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Het Nut van een Negative Split',
      html: 'De tweede helft van een wedstrijd iets sneller lopen dan de eerste helft spaart de glycogeenvoorraad en voorkomt vroege verzuring.',
    },
  ],
  ui: {
    title: 'Hardloop Tempo Calculator en Racetijd Voorspeller',
    subtitle: 'Bereken je tempo en voorspel streeftijden met de formule van Riegel',
    paceCalculatorTitle: 'Tempo, Afstand en Tijd Calculator',
    racePredictorTitle: 'Voorspelling Wedstrijdtijden',
    trainingZonesTitle: 'Doeltempozones voor Training',
    distanceLabel: 'Afstand',
    timeLabel: 'Tijd',
    paceLabel: 'Gemiddeld Tempo',
    hoursLabel: 'Uren',
    minutesLabel: 'Minuten',
    secondsLabel: 'Seconden',
    unitKm: 'Kilometer',
    unitMiles: 'Mijlen',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mijl',
    presetsTitle: 'Snelle Afstanden',
    calculateButton: 'Berekenen',
    resetButton: 'Resetten',
    recentRaceTitle: 'Recente Referentietijd',
    predictedTimesTitle: 'Verwachte Tijden op Afstanden',
    distanceHeader: 'Afstand',
    estimatedTimeHeader: 'Verwachte Tijd',
    targetPaceHeader: 'Doeltempo',
    trainingZoneHeader: 'Trainingszone',
    paceRangeHeader: 'Tempobereik',
    zoneEasy: 'Rustige Duurloop & Herstel',
    zoneEasyDesc: 'Aerobe basisopbouw en herstel',
    zoneTempo: 'Tempoloop & Fartlek',
    zoneTempoDesc: 'Verhoging van de anaërobe drempel',
    zoneIntervals: 'Interval & Snelheidstraining',
    zoneIntervalsDesc: 'Verbetering van VO2 max en snelheidshuishouding',
    riegelExplanation: 'Voorspellingen gebruiken de Riegel-formule T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Hardloop Tempo Calculator en Racetijd Voorspeller',
      description: 'Bereken je hardlooptempo en voorspel tijden voor 5k, 10k, halve marathon en hele marathon.',
      h1: 'Hardloop Tempo Calculator en Racetijd Voorspeller',
      intro: 'Het nauwkeurig berekenen van tempo en verwachte tijden is essentieel voor lopers.',
      statsTitle: 'Prestatie-indicatoren',
      stat1Label: 'Riegel Exponent',
      stat1Value: '1.06',
      stat2Label: 'Belangrijkste Afstanden',
      stat2Value: '4 Afstanden',
      stat3Label: 'Tempoberekening',
      stat3Value: '3 Manieren',
      stat4Label: 'Trainingszones',
      stat4Value: '3 Niveaus',
      comparativeTitle: 'Vergelijking van Eenheden',
      comparativeItem1Title: 'Metriek (min/km)',
      comparativeItem1Desc: 'De Europese standaard.',
      comparativeItem2Title: 'Imperiaal (min/mijl)',
      comparativeItem2Desc: 'De standaard in de VS en het VK.',
      tableTitle: 'Overzicht Wedstrijdafstanden',
      tableCol1: 'Wedstrijd',
      tableCol2: 'Kilometer',
      tableCol3: 'Mijlen',
      tableRow1Col1: '5K Loop',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: '10K Loop',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Halve Marathon',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Pacing Strategie',
      tipText: 'Met een negative split behaal je betere resultaten.',
      faqTitle: 'Veelgestelde Vragen',
      faq1Q: 'Hoe nauwkeurig is de Riegel formule?',
      faq1A: 'Vereist een goede aerobe conditie.',
      faq2Q: 'Verschil tussen min/km en min/mijl?',
      faq2A: 'Min/km is de tijd per kilometer.',
      glossaryTitle: 'Hardloopbegrippen',
      term1Name: 'Formule van Riegel',
      term1Def: 'Mathematisch voorspellingsmodel ontwikkeld door Peter Riegel.',
      term2Name: 'Anaërobe Drempel',
      term2Def: 'Intensiteit waarbij melkzuur zich sneller ophoopt dan het wordt afgebroken.',
    },
  },
};
