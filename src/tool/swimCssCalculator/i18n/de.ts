import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'css-schwimmrechner';
const title = 'Kritische Schwimmgeschwindigkeit CSS Rechner';
const description = 'Berechnen Sie Ihre kritische Schwimmgeschwindigkeit CSS Schwellentempo pro 100m oder 100yd aus 400m und 200m Schwimmtests.';

const faqData = [
  {
    question: 'Wie oft sollten Schwimmer ihre kritische Schwimmgeschwindigkeit testen?',
    answer: 'Schwimmer und Triathleten sollten das 400m und 200m CSS Testprotokoll alle 4 bis 6 Wochen durchführen, um die Zielzeiten anzupassen.',
  },
  {
    question: 'Kann CSS auch in Yards statt Metern berechnet werden?',
    answer: 'Ja. Die mathematische CSS Formel gilt auf Kurzbahnen in Yards genau gleich. Schalten Sie den Einheiten Umschalter einfach auf Yards um.',
  },
];

const howToData = [
  {
    name: 'Wählen Sie das Bahnmesssystem',
    text: 'Wählen Sie zwischen Metrisch (Meter, 25m oder 50m Bahn) oder Imperial (Yards, 25yd Bahn).',
  },
  {
    name: 'Geben Sie die 400m Testzeit ein',
    text: 'Tragen Sie Minuten und Sekunden Ihres maximalen 400 Meter Schwimmtests ein.',
  },
  {
    name: 'Geben Sie die 200m Testzeit ein',
    text: 'Tragen Sie Minuten und Sekunden Ihres maximalen 200 Meter Schwimmtests ein.',
  },
  {
    name: 'Ergebnisse und Zwischenzeiten analysieren',
    text: 'Klicken Sie auf Berechnen, um Ihre aerobe Geschwindigkeit und Zielzeiten für alle Serien zu sehen.',
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

const ui: SwimCssCalculatorUI = {
  title: 'Kritische Schwimmgeschwindigkeit CSS Rechner',
  subtitle: 'Berechnen Sie Ihr Schwimmschwellentempo pro 100m und Zielzeiten nach Intensitätszonen.',
  unitLabel: 'Bahnlängeneinheit',
  unitMeters: 'Meter (25m / 50m Bahn)',
  unitYards: 'Yards (25yd Bahn)',
  t400Label: '400m / 400yd Testzeit',
  t200Label: '200m / 200yd Testzeit',
  minutesLabel: 'Minuten',
  secondsLabel: 'Sekunden',
  calculateButton: 'CSS und Zeiten berechnen',
  resetButton: 'Zurücksetzen',
  cssResultTitle: 'Ergebnisse der kritischen Schwimmgeschwindigkeit',
  cssSpeedLabel: 'Aerobe Geschwindigkeit',
  cssPace100Label: 'CSS Tempo pro 100',
  lapPaceLabel: '25m / 25yd Bahn Zielzeit',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Trainingszonen und Zwischenzeiten Matrix',
  zoneHeader: 'Intensitätszone',
  pace100Header: 'Zieltempo / 100',
  split50Header: '50m Zeit',
  split100Header: '100m Zeit',
  split200Header: '200m Zeit',
  split400Header: '400m Zeit',
  zoneAerobic: 'Aerobe Ausdauer',
  zoneAerobicDesc: 'Für lange aerobe Serien und Aufwärmen (~104% CSS Tempo)',
  zoneAerobicRest: 'Pause: 10s - 15s pro Serie',
  zoneCss: 'CSS Schwelle',
  zoneCssDesc: 'Zieltempo für Schwellenserien und Wettkampfausdauer (~100% CSS Tempo)',
  zoneCssRest: 'Pause: 15s - 20s pro Serie',
  zoneVo2Max: 'VO2 Max Geschwindigkeit',
  zoneVo2MaxDesc: 'Hochintensives Intervalltraining (~96% CSS Tempo)',
  zoneVo2MaxRest: 'Pause: 30s - 45s pro Serie',
  invalidNotice: 'Die 400m Testzeit muss strikt größer als die 200m Testzeit sein.',
  copySplitsButton: 'Zwischenzeiten kopieren',
  copiedNotice: 'Zwischenzeiten kopiert',
  seo: {
    title: 'Kritische Schwimmgeschwindigkeit CSS Rechner Schwimmzeiten Matrix',
    description: 'Berechnen Sie Ihre kritische Schwimmgeschwindigkeit CSS Schwellentempo pro 100m oder 100yd aus 400m und 200m Schwimmtests.',
    h1: 'Kritische Schwimmgeschwindigkeit CSS Rechner und Trainingsmatrix',
    intro: 'Die kritische Schwimmgeschwindigkeit ist ein etablierter Leistungsindikator im Schwimmsport und Triathlontraining. Basierend auf zwei maximalen Testschwimmen über 400 Meter und 200 Meter berechnet dieser Rechner Ihre funktionelle aerobe Schwimmgeschwindigkeit.',
    statsTitle: 'Wichtige Leistungskennzahlen',
    stat1Label: 'Benchmark Test 1',
    stat1Value: '400m Maximaler Test',
    stat2Label: 'Benchmark Test 2',
    stat2Value: '200m Maximaler Test',
    stat3Label: 'Schwellenwert',
    stat3Value: '100m CSS Basistempo',
    stat4Label: 'Trainingsanwendung',
    stat4Value: 'Praktische Zwischenzeiten',
    comparativeTitle: 'CSS Tempo versus Herzfrequenztraining im Wasser',
    comparativeItem1Title: 'Kritische Schwimmgeschwindigkeit Methode',
    comparativeItem1Desc: 'Misst die effektive Vortriebsgeschwindigkeit direkt im Wasser ohne Störungen durch Herzfrequenzsensoren.',
    comparativeItem2Title: 'Klassisches Herzfrequenztraining',
    comparativeItem2Desc: 'Unterliegt im Wasser oft Messverzögerungen und berücksichtigt keine Veränderungen der Schwimmtechnik unter Ermüdung.',
    tableTitle: 'Übersicht der Intensitätszonen und Zwischenzeiten',
    tableCol1: 'Trainingszone',
    tableCol2: 'Physiologische Anpassung',
    tableCol3: 'Empfohlene Serienlängen',
    tableRow1Col1: 'Aerobe Ausdauer',
    tableRow1Col2: 'Kapillarisierung und Fettstoffwechseloptimierung.',
    tableRow1Col3: '400m bis 800m Wiederholungen mit kurzen Pausen von 10 bis 15 Sekunden.',
    tableRow2Col1: 'CSS Schwelle',
    tableRow2Col2: 'Steigerung der Laktattoleranz und aeroben Leistung.',
    tableRow2Col3: '100m bis 300m Wiederholungen mit 15 bis 20 Sekunden Pause.',
    tableRow3Col1: 'VO2 Max Geschwindigkeit',
    tableRow3Col2: 'Maximale Sauerstoffaufnahme und neuromuskuläre Kurbelfrequenz.',
    tableRow3Col3: '50m bis 100m Intervalle mit längeren Erholungszeiten.',
    tipTitle: 'Trainingshinweis für exakte Tests',
    tipText: 'Achten Sie auf eine gleichmäßige Tempoeinteilung beim 400m Test. Ein zu schnelles Angehen der ersten 100 Meter führt zu vorzeitiger Laktatakkumulation.',
    faqTitle: 'Häufig gestellte Fragen zur kritischen Schwimmgeschwindigkeit',
    faq1Q: 'Wie oft sollte der CSS Test wiederholt werden?',
    faq1A: 'Eine Re-Evaluation empfiehlt sich alle 4 bis 6 Wochen während des Trainingsmakrozyklus.',
    faq2Q: 'Kann CSS auch auf Yards Bahnen genutzt werden?',
    faq2A: 'Ja. Die mathematische Formel gilt auf Kurzbahnen in Yards genau gleich.',
    glossaryTitle: 'Schwimmphysiologie Glossar',
    term1Name: 'Kritische Schwimmgeschwindigkeit',
    term1Def: 'Die theoretische maximale Schwimmgeschwindigkeit, die ohne Erschöpfung aufrechterhalten werden kann.',
    term2Name: 'Zwischenzeit',
    term2Def: 'Die vorgegebene Durchgangszeit bei Bahnwenden zur Temposteuerung.',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
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
      text: 'Biologische Grundlagen der kritischen Schwimmgeschwindigkeit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die kritische Schwimmgeschwindigkeit definiert den Übergang zwischen rein aerober Energiebereitstellung und kumulativer Laktatakkumulation im Muskelgewebe.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Standard Testpaar' },
        { value: '100m Basis', label: 'Tempo Standard' },
        { value: '3 Zonen', label: 'Intensitätsmatrix' },
        { value: '4 Zeiten', label: 'Durchgangszeiten' },
      ],
    },
    {
      type: 'title',
      text: 'CSS Tempo versus Herzfrequenzsteuerung im Schwimmtraining',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vortriebsorientiertes CSS Tempo',
          description: 'Erfasst die reale Wassergeschwindigkeit inklusive Wenden und Gleitphasen ohne Messverzögerung.',
        },
        {
          title: 'Sensorbasierte Herzfrequenzmessung',
          description: 'Unterliegt im Wasser oft Messfehlern und reagiert träge auf Geschwindigkeitsänderungen.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Trainingszonen und Pausenzeiten Übersicht',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Zonenbezeichnung', 'Relativtempo zu CSS', 'Physiologisches Hauptziel', 'Empfohlene Serienpause'],
      rows: [
        ['Aerobe Ausdauer', '104% der CSS Zeit', 'Grundlagenausdauer und Fettverbrennung', '10 bis 15 Sekunden'],
        ['CSS Schwelle', '100% der CSS Zeit', 'Laktatkompensation und Schwellenleistung', '15 bis 20 Sekunden'],
        ['VO2 Max Geschwindigkeit', '96% der CSS Zeit', 'Maximale Sauerstoffaufnahme und Schnelligkeit', '30 bis 45 Sekunden'],
      ],
    },
    {
      type: 'title',
      text: 'Praktische Steuerung im Ausdauertraining',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Tipp zur Durchführung von Schwellenserien',
      html: 'Halten Sie die berechnete Zielzeit auf jedem 50m Durchgang exakt ein. Ein Überpace auf den ersten Metern zerstört den aeroben Trainingsreiz.',
    },
  ],
  ui,
};
