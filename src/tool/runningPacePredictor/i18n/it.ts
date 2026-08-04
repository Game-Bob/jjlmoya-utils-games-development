import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'calcolatore-passo-corsa';
const title = 'Calcolatore Passo Corsa e Previsione Tempi di Gara';
const description =
  'Calcola il tuo passo di corsa, prevedi i tempi finali per 5k, 10k, mezza maratona e maratona con la formula di Riegel e genera le tue zone di allenamento.';

const faqData = [
  {
    question: 'Quanto è accurata la formula di Peter Riegel per la maratona?',
    answer:
      'La formula di Riegel T2 = T1 * (D2 / D1)^1.06 offre un elevata accuratezza con una solida base aerobica. Nella maratona, il tempo finale dipende dal chilometraggio settimanale e dai lunghi.',
  },
  {
    question: 'Come convertire esattamente min/km in min/miglio?',
    answer:
      'Moltiplica i secondi totali al chilometro per 1,609344. Un passo di 5:00 min/km (300 secondi) corrisponde a 8:03 min/miglio.',
  },
  {
    question: 'Perché le previsioni di gara a volte sembrano troppo ambiziose sulle lunghe distanze?',
    answer:
      'L esponente standard 1.06 presuppone un ottima resistenza alla fatica. Senza un adeguata preparazione aerobica, il calo finale rallenta il tempo reale.',
  },
  {
    question: 'Come impostare le zone di ritmo per ripetute e tempo run?',
    answer:
      'Le ripetute (VO2 max) vanno eseguite tra il 95% e il 105% del passo sui 5k, le corse a ritmo soglia tra il 110% e il 120%, e la corsa lenta tra il 125% e il 145%.',
  },
];

const howToData = [
  {
    name: 'Seleziona il Sistema di Unità',
    text: 'Scegli tra sistema Metrico (km, min/km) o Imperiale (miglia, min/miglio) usando il selettore.',
  },
  {
    name: 'Scegli la Distanza',
    text: 'Clicca su un chip di distanza (5K, 10K, Mezza Maratona, 42K) o inserisci una distanza personalizzata.',
  },
  {
    name: 'Imposta il Tempo di Riferimento',
    text: 'Usa i pulsanti di regolazione (+1m, +5m, -1m, -5m) o inserisci ore e minuti di una gara recente.',
  },
  {
    name: 'Analizza Previsioni e Zone',
    text: 'Visualizza subito il passo medio, i tempi stimati con la formula di Riegel e le zone di allenamento.',
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
  inLanguage: 'it',
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
      text: 'Principi Biomeccanici del Calcolo del Passo di Corsa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il calcolo del passo di corsa e la previsione dei tempi di gara richiedono la comprensione dei sistemi energetici metabolici. La prestazione di resistenza dipende dal VO2 max, dalla soglia anaerobica e dall economia di corsa.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Esponente Riegel' },
        { value: '4 Principali', label: 'Distanze Ufficiali' },
        { value: '3 Modi', label: 'Calcolo Reattivo' },
        { value: '3 Livelli', label: 'Zone Obiettivo' },
      ],
    },
    {
      type: 'title',
      text: 'La Formula di Riegel e la Modellazione della Prestazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Formulata dall ingegnere Peter Riegel nel 1977, la formula T2 = T1 * (D2 / D1)^1.06 modella il decadimento della velocità all aumentare della distanza. L esponente di fatica di 1.06 rispecchia il calo medio negli atleti allenati.',
    },
    {
      type: 'title',
      text: 'Confronto Sistema Metrico vs Imperiale',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sistema Metrico (min/km)',
          description: 'Standard internazionale. Consente un controllo preciso degli intertempi ogni 1000 metri.',
        },
        {
          title: 'Sistema Imperiale (min/miglio)',
          description: 'Standard negli USA e nel Regno Unito. Un miglio equivale a 1,609344 chilometri.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Panoramica Distanze Ufficiali su Strada',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Gara', 'Distanza Metrica (km)', 'Distanza Imperiale (mi)', 'Sistema Energetico Principale'],
      rows: [
        ['5K Corsa su Strada', '5.00 km', '3.11 mi', '90% Aerobico / 10% Anaerobico'],
        ['10K Corsa su Strada', '10.00 km', '6.21 mi', '95% Aerobico / 5% Anaerobico'],
        ['Mezza Maratona', '21.0975 km', '13.11 mi', '99% Aerobico (Soglia Anaerobica)'],
        ['Maratona', '42.195 km', '26.22 mi', '100% Aerobico (Limitato da Glicogeno)'],
      ],
    },
    {
      type: 'title',
      text: 'Strategia di Corsa e Negative Split',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Efficacia del Negative Split',
      html: 'Correre la seconda metà di gara leggermente più velocemente della prima preserva il glicogeno ed evita l acidosi precoce.',
    },
  ],
  ui: {
    title: 'Calcolatore Passo Corsa e Previsione Tempi di Gara',
    subtitle: 'Calcola il tuo passo e prevedi i tempi di gara con la formula di Riegel',
    paceCalculatorTitle: 'Calcolatore Passo, Distanza e Tempo',
    racePredictorTitle: 'Previsione Tempi di Gara',
    trainingZonesTitle: 'Zone Obiettivo di Passo per l Allenamento',
    distanceLabel: 'Distanza',
    timeLabel: 'Tempo',
    paceLabel: 'Passo Medio',
    hoursLabel: 'Ore',
    minutesLabel: 'Minuti',
    secondsLabel: 'Secondi',
    unitKm: 'Chilometri',
    unitMiles: 'Miglia',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/miglio',
    presetsTitle: 'Distanze Rapide',
    calculateButton: 'Calcola',
    resetButton: 'Reimposta',
    recentRaceTitle: 'Tempo di Riferimento Recente',
    predictedTimesTitle: 'Tempi Stimati in Gara',
    distanceHeader: 'Distanza',
    estimatedTimeHeader: 'Tempo Stimato',
    targetPaceHeader: 'Passo Obiettivo',
    trainingZoneHeader: 'Zona di Allenamento',
    paceRangeHeader: 'Intervallo di Passo',
    zoneEasy: 'Corsa Lenta e Rigenerante',
    zoneEasyDesc: 'Costruzione della base aerobica e recupero',
    zoneTempo: 'Corsa Medio & Fartlek',
    zoneTempoDesc: 'Miglioramento della soglia anaerobica',
    zoneIntervals: 'Ripetute e Velocità',
    zoneIntervalsDesc: 'Sviluppo del VO2 max e resistenza alla velocità',
    riegelExplanation: 'Le previsioni usano la formula di Riegel T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Calcolatore Passo Corsa e Previsione Tempi di Gara',
      description: 'Calcola il tuo passo di corsa e prevedi i tempi su 5k, 10k, mezza maratona e maratona.',
      h1: 'Calcolatore Passo Corsa e Previsione Tempi di Gara',
      intro: 'Un calcolo preciso del passo e la previsione dei tempi sono strumenti fondamentali per i podisti.',
      statsTitle: 'Indicatori di Prestazione',
      stat1Label: 'Esponente Riegel',
      stat1Value: '1.06',
      stat2Label: 'Distanze Chiave',
      stat2Value: '4 Gare',
      stat3Label: 'Calcolo Passo',
      stat3Value: '3 Modi',
      stat4Label: 'Zone Obiettivo',
      stat4Value: '3 Livelli',
      comparativeTitle: 'Confronto Unità',
      comparativeItem1Title: 'Sistema Metrico (min/km)',
      comparativeItem1Desc: 'Lo standard internazionale.',
      comparativeItem2Title: 'Sistema Imperiale (min/miglio)',
      comparativeItem2Desc: 'Lo standard negli USA e nel Regno Unito.',
      tableTitle: 'Panoramica Distanze di Gara',
      tableCol1: 'Gara',
      tableCol2: 'Chilometri',
      tableCol3: 'Miglia',
      tableRow1Col1: 'Corsa 5K',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: 'Corsa 10K',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Mezza Maratona',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Strategia di Corsa',
      tipText: 'Il negative split ottimizza la resa metabolica durante la gara.',
      faqTitle: 'Domande Frequenti',
      faq1Q: 'Quanto è accurata la formula di Riegel?',
      faq1A: 'Richiede una buona preparazione aerobica.',
      faq2Q: 'Differenza tra min/km e min/miglio?',
      faq2A: 'Min/km indica i minuti per chilometro.',
      glossaryTitle: 'Glossario Podistico',
      term1Name: 'Formula di Riegel',
      term1Def: 'Formula matematica di previsione tempi ideata da Peter Riegel.',
      term2Name: 'Soglia Anaerobica',
      term2Def: 'Intensità in cui l acido lattico si accumula rapidamente.',
    },
  },
};
