import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'lauf-tempo-rechner';
const title = 'Lauftempo Rechner und Wettzeit Prognose';
const description =
  'Berechnen Sie Ihr Lauftempo, schätzen Sie Zielzeiten für 5k, 10k, Halbmarathon und Marathon mit der Riegel-Formel und erstellen Sie Trainingszonen.';

const faqData = [
  {
    question: 'Wie genau ist die Peter Riegel Formel für Marathon-Prognosen?',
    answer:
      'Die Riegel-Formel T2 = T1 * (D2 / D1)^1.06 bietet eine hohe Genauigkeit bei gut entwickeltem Ausdauerfundament. Bei Marathons hängt das Ergebnis stark vom wöchentlichen Kilometerumfang, den langen Läufen über 25 km und der Verpflegungsstrategie ab.',
  },
  {
    question: 'Wie rechnet man min/km genau in min/meile um?',
    answer:
      'Multiplizieren Sie die Sekunden pro Kilometer mit 1,609344. Ein Tempo von 5:00 min/km (300 Sekunden) entspricht beispielsweise 482,8 Sekunden pro Meile bzw. 8:03 min/meile.',
  },
  {
    question: 'Warum wirken prognostizierte Wettkampfzeiten bei langen Distanzen manchmal zu ambitioniert?',
    answer:
      'Der Standardexponent 1.06 setzt eine optimale Ermüdungswiderstandsfähigkeit voraus. Fehlt die aerobe Basis, führen Ermüdung und Glykogenmangel zu langsameren Zeiten als die theoretische Riegel-Prognose.',
  },
  {
    question: 'Wie sollten Zieltempobereiche für Intervall- und Tempoläufe strukturiert werden?',
    answer:
      'Intervalltraining (VO2max) sollte zwischen 95% und 105% des aktuellen 5k-Wettkampftempos absolviert werden. Schwellenläufe liegen bei 110% bis 120%, während langsame Erholungsläufe bei 125% bis 145% liegen.',
  },
];

const howToData = [
  {
    name: 'Einheitensystem wählen',
    text: 'Wählen Sie zwischen metrischem System (km, min/km) und imperiale System (Meilen, min/meile) über den Schalter oben.',
  },
  {
    name: 'Distanz wählen',
    text: 'Klicken Sie auf ein Wettkampf-Preset (5K, 10K, Halbmarathon, 42K) oder geben Sie eine eigene Distanz ein.',
  },
  {
    name: 'Referenzzeit anpassen',
    text: 'Nutzen Sie die Buttons (-5m, -1m, +1m, +5m) oder das Eingabefeld für Ihre aktuelle Wettkampfzeit.',
  },
  {
    name: 'Prognosen und Zonen analysieren',
    text: 'Sehen Sie sofort Ihr gewohntes Tempo, Zielzeiten für alle Hauptdistanzen und individuelle Trainingsbereiche.',
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
  inLanguage: 'de',
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
      text: 'Biomechanische Grundlagen der Lauftempoberechnung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Berechnung des Lauftempos und die Vorhersage von Wettkampfzeiten erfordern ein Verständnis der metabolischen Energiesysteme und der Muskelfaserrekrutierung. Die Ausdauerleistung wird maßgeblich durch die maximale Sauerstoffaufnahme (VO2max), die laktatfreie Schwelle und die Laufökonomie bestimmt. Beim Übergang von kurzen Distanzen zum Marathon werden mechanische Effizienz und Glykogenspeicherkapazität zu entscheidenden Faktoren.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Riegel Exponent' },
        { value: '4 Haupt', label: 'Wettkampf Distanzen' },
        { value: '3 Wege', label: 'Tempo Berechnung' },
        { value: '3 Stufen', label: 'Trainings Zonen' },
      ],
    },
    {
      type: 'title',
      text: 'Mathematische Mechanik der Riegel Formel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die 1977 vom Ingenieur Peter Riegel entwickelte Formel T2 = T1 * (D2 / D1)^1.06 modelliert den Geschwindigkeitsabfall bei zunehmender Distanz. Der Ermüdungsexponent von 1,06 spiegelt den durchschnittlichen Leistungsabfall gut trainierter Athleten wider. Bei Spitzenathleten kann der Exponent nahe 1,03 liegen, während Einsteiger Werte von 1,08 bis 1,10 aufweisen.',
    },
    {
      type: 'title',
      text: 'Metrisches vs Imperiales System im Laufsport',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Metrisches System (min/km)',
          description: 'Standard im internationalen Leichtathletik- und europäischen Straßenlauf. Ermöglicht präzise 1000m-Zwischenzeiten zur Schwellensteuerung.',
        },
        {
          title: 'Imperiales System (min/meile)',
          description: 'Standard in den USA und Großbritannien. Eine Meile entspricht 1,609344 Kilometern und bietet längere Spliteinheiten.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Übersicht offizieller Wettkampfdistanzen',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Wettkampf', 'Metrische Distanz (km)', 'Imperiale Distanz (mi)', 'Haupt-Energiesystem'],
      rows: [
        ['5K Straßenlauf', '5.00 km', '3.11 mi', '90% Aerob / 10% Anaerob Glykolytisch'],
        ['10K Straßenlauf', '10.00 km', '6.21 mi', '95% Aerob / 5% Anaerob Glykolytisch'],
        ['Halbmarathon', '21.0975 km', '13.11 mi', '99% Aerob (Laktatschwelle Dominant)'],
        ['Marathon', '42.195 km', '26.22 mi', '100% Aerob (Fettverbrennung & Glykogen-Limitert)'],
      ],
    },
    {
      type: 'title',
      text: 'Pacing Strategie und Negative Splits',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Erfolgsfaktor Negative Split',
      html: 'Statistische Analysen von Weltrekorden belegen, dass ein Negative Split (zweite Hälfte leicht schneller als die erste) den Stoffwechsel schont. Ein Anlaufen 2% unter dem Riegel-Zieltempo schützt vor vorzeitiger Übersäuerung.',
    },
  ],
  ui: {
    title: 'Lauftempo Rechner und Wettzeit Prognose',
    subtitle: 'Berechnen Sie Tempo und Zielzeiten mit der Riegel Formel',
    paceCalculatorTitle: 'Tempo, Distanz und Zeit Rechner',
    racePredictorTitle: 'Wettkampfzeit Prognose',
    trainingZonesTitle: 'Zieltempobereiche fürs Training',
    distanceLabel: 'Distanz',
    timeLabel: 'Zeit',
    paceLabel: 'Lauftempo',
    hoursLabel: 'Stunden',
    minutesLabel: 'Minuten',
    secondsLabel: 'Sekunden',
    unitKm: 'Kilometer',
    unitMiles: 'Meilen',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/meile',
    presetsTitle: 'Schnelldistanzen',
    calculateButton: 'Berechnen',
    resetButton: 'Zurücksetzen',
    recentRaceTitle: 'Aktuelle Referenzzeit',
    predictedTimesTitle: 'Geschätzte Wettkampfzeiten',
    distanceHeader: 'Distanz',
    estimatedTimeHeader: 'Geschätzte Zeit',
    targetPaceHeader: 'Zieltempo',
    trainingZoneHeader: 'Trainingszone',
    paceRangeHeader: 'Tempobereich',
    zoneEasy: 'Lockerer Dauerlauf',
    zoneEasyDesc: 'Aerober Grundlagenaufbau und Regeneration',
    zoneTempo: 'Tempolauf & Schwellenlauf',
    zoneTempoDesc: 'Anhebung der Laktatschwelle',
    zoneIntervals: 'Intervalltraining & Serien',
    zoneIntervalsDesc: 'VO2max Steigerung und Schnelligkeitsausdauer',
    riegelExplanation: 'Die Vorhersage basiert auf der Riegel-Formel T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Lauftempo Rechner und Wettzeit Prognose',
      description: 'Lauftempo berechnen und Wettkampfzeiten für 5k, 10k, Halbmarathon und Marathon prognostizieren.',
      h1: 'Lauftempo Rechner und Wettzeit Prognose',
      intro: 'Präzise Tempoberechnung und Laufzeitprognose sind essenzielle Werkzeuge für Ausdauerläufer.',
      statsTitle: 'Leistungsparameter',
      stat1Label: 'Riegel Exponent',
      stat1Value: '1.06',
      stat2Label: 'Hauptdistanzen',
      stat2Value: '4 Haupt',
      stat3Label: 'Tempoberechnung',
      stat3Value: '3 Wege',
      stat4Label: 'Trainingszonen',
      stat4Value: '3 Stufen',
      comparativeTitle: 'Einheitenvergleich',
      comparativeItem1Title: 'Metrisch (min/km)',
      comparativeItem1Desc: 'Standard im europäischen Straßenlauf.',
      comparativeItem2Title: 'Imperial (min/meile)',
      comparativeItem2Desc: 'Standard in den USA und UK.',
      tableTitle: 'Wettkampfdistanzen im Überblick',
      tableCol1: 'Wettkampf',
      tableCol2: 'Kilometer',
      tableCol3: 'Meilen',
      tableRow1Col1: '5K Lauf',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: '10K Lauf',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Halbmarathon',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Pacing Strategie',
      tipText: 'Vermeiden Sie zu schnelles Anlaufen. Ein Negative Split führt zu besseren Zeiten.',
      faqTitle: 'Häufig gestellte Fragen',
      faq1Q: 'Wie genau ist die Riegel Formel?',
      faq1A: 'Sie setzt gutes Ausdauertraining voraus.',
      faq2Q: 'Unterschied min/km zu min/meile?',
      faq2A: 'Min/km gibt Minuten pro km an, min/meile pro Meile.',
      glossaryTitle: 'Lauf-Glossar',
      term1Name: 'Riegel Formel',
      term1Def: 'Mathematische Formel zur Laufzeitprognose von Peter Riegel.',
      term2Name: 'Laktatschwelle',
      term2Def: 'Intensität, ab der Laktat im Blut anreichert.',
    },
  },
};
