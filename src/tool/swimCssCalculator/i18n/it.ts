import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'calcolatore-css-nuoto';
const title = 'Calcolatore Velocita Critica Nuoto CSS';
const description = 'Calcola la tua velocita critica di nuoto CSS passo soglia per 100m o 100yd da test su 400m e 200m in piscina.';

const faqData = [
  {
    question: 'Ogni quanto eseguire il test CSS nel nuoto?',
    answer: 'Si consiglia di ripetere il test su 400m e 200m ogni 4 a 6 settimane durante i cicli di allenamento.',
  },
  {
    question: 'Si puo calcolare il CSS in vasche da yarde?',
    answer: 'Sì. La formula matematica si applica esattamente allo stesso modo in vasche da yarde.',
  },
];

const howToData = [
  {
    name: 'Seleziona l unita della vasca',
    text: 'Scegli tra Metri (vasca da 25m o 50m) o Yarde (vasca da 25yd) tramite il selettore.',
  },
  {
    name: 'Inserisci il tempo del test 400m',
    text: 'Inserisci minuti e secondi del tuo test su 400 metri al massimo sforzo.',
  },
  {
    name: 'Inserisci il tempo del test 200m',
    text: 'Inserisci minuti e secondi del tuo test su 200 metri al massimo sforzo.',
  },
  {
    name: 'Calcola e analizza i tempi di passaggio',
    text: 'Clicca su Calcola per visualizzare la velocità aerobica e la matrice dei tempi di passaggio.',
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

const ui: SwimCssCalculatorUI = {
  title: 'Calcolatore Velocita Critica Nuoto CSS',
  subtitle: 'Calcola il tuo passo soglia aerobica per 100m e la matrice dei tempi di passaggio per zona.',
  unitLabel: 'Unita della vasca',
  unitMeters: 'Metri (Vasca 25m / 50m)',
  unitYards: 'Yarde (Vasca 25yd)',
  t400Label: 'Test 400m / 400yd',
  t200Label: 'Test 200m / 200yd',
  minutesLabel: 'Minuti',
  secondsLabel: 'Secondi',
  calculateButton: 'Calcola CSS e Passaggi',
  resetButton: 'Ripristina',
  cssResultTitle: 'Risultati Velocita Critica Nuoto',
  cssSpeedLabel: 'Velocita Aerobica',
  cssPace100Label: 'Passo CSS per 100',
  lapPaceLabel: 'Obiettivo per Vasca 25m / 25yd',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Matrice Tempi di Passaggio in Piscina',
  zoneHeader: 'Zona di Intensita',
  pace100Header: 'Passo Obiettivo / 100',
  split50Header: 'Passaggio 50',
  split100Header: 'Passaggio 100',
  split200Header: 'Passaggio 200',
  split400Header: 'Passaggio 400',
  zoneAerobic: 'Resistenza Aerobica',
  zoneAerobicDesc: 'Per serie lunghe aerobiche e riscaldamento (~104% passo CSS)',
  zoneAerobicRest: 'Pausa: 10s - 15s per serie',
  zoneCss: 'Soglia CSS',
  zoneCssDesc: 'Passo obiettivo per serie di soglia e ritmo gara (~100% passo CSS)',
  zoneCssRest: 'Pausa: 15s - 20s per serie',
  zoneVo2Max: 'Velocita VO2 Max',
  zoneVo2MaxDesc: 'Allenamento ad intervalli ad alta intensità (~96% passo CSS)',
  zoneVo2MaxRest: 'Pausa: 30s - 45s per serie',
  invalidNotice: 'Il tempo del test 400m deve essere strettamente maggiore del tempo 200m.',
  copySplitsButton: 'Copia Tempi di Passaggio',
  copiedNotice: 'Tempi di passaggio copiati',
  seo: {
    title: 'Calcolatore Velocita Critica Nuoto CSS Tempi Passaggio',
    description: 'Calcola la tua velocita critica di nuoto CSS passo soglia per 100m o 100yd da test su 400m e 200m in piscina.',
    h1: 'Calcolatore Velocita Critica di Nuoto e Matrice di Allenamento',
    intro: 'La Velocità Critica di Nuoto è il parametro ideale utilizzato da nuotatori e triatleti per pianificare le serie in piscina in base alla soglia aerobica.',
    statsTitle: 'Indicatori Chiave di Performance',
    stat1Label: 'Test 1',
    stat1Value: '400m Massimo Sforzo',
    stat2Label: 'Test 2',
    stat2Value: '200m Massimo Sforzo',
    stat3Label: 'Soglia Aerobica',
    stat3Value: 'Passo Base 100m CSS',
    stat4Label: 'Applicazione Pratica',
    stat4Value: 'Tempi di Passaggio Cronometro',
    comparativeTitle: 'Metodo CSS vs Frequenza Cardiaca in Nuoto',
    comparativeItem1Title: 'Metodologia Velocita Critica CSS',
    comparativeItem1Desc: 'Misura la reale velocità di avanzamento in acqua tenendo conto della tecnica e delle virate.',
    comparativeItem2Title: 'Frequenza Cardiaca Tradizionale',
    comparativeItem2Desc: 'Soffre di ritardi di misurazione in acqua e problemi di aderenza dei sensori.',
    tableTitle: 'Prospetto Zone di Intensita e Tempi di Pausa',
    tableCol1: 'Zona di Allenamento',
    tableCol2: 'Adattamento Fisiologico',
    tableCol3: 'Distanze Consigliate',
    tableRow1Col1: 'Resistenza Aerobica',
    tableRow1Col2: 'Capillarizzazione e metabolismo dei grassi.',
    tableRow1Col3: 'Ripetute da 400m a 800m con pausa breve 10-15 secondi.',
    tableRow2Col1: 'Soglia CSS',
    tableRow2Col2: 'Tolleranza al lattato e potenza aerobica.',
    tableRow2Col3: 'Ripetute da 100m a 300m con pausa 15-20 secondi.',
    tableRow3Col1: 'Velocita VO2 Max',
    tableRow3Col2: 'Massimo consumo di ossigeno e frequenza di bracciata.',
    tableRow3Col3: 'Intervalli da 50m a 100m con pause piu ampie.',
    tipTitle: 'Consiglio per l Esecuzione del Test',
    tipText: 'Gestisci il ritmo nei 400m per evitare di accumulare acido lattico nei primi 100 metri.',
    faqTitle: 'Domande Frequenti sulla Velocita Critica di Nuoto',
    faq1Q: 'Ogni quanto ripetere il test CSS?',
    faq1A: 'Si raccomanda la ripetizione ogni 4-6 settimane.',
    faq2Q: 'Si puo usare per vasche in yarde?',
    faq2A: 'Sì. La formula matematica è identica.',
    glossaryTitle: 'Glossario Fisiologia del Nuoto',
    term1Name: 'Velocita Critica di Nuoto',
    term1Def: 'La massima velocità teorica mantenibile in modo continuo senza esaurimento immediato.',
    term2Name: 'Tempo di Passaggio',
    term2Def: 'Il tempo target al passaggio ai 50m o 100m.',
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
      text: 'Principi Biomeccanici della Velocita Critica di Nuoto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La Velocità Critica di Nuoto definisce la pendenza della relazione tra distanza e tempo. Consente di isolare la soglia aerobica sottraendo lo sforzo dei 200m a quello dei 400m.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Coppia Test Standard' },
        { value: 'Base 100m', label: 'Passo Standard' },
        { value: '3 Zone', label: 'Matrice Intensita' },
        { value: '4 Passaggi', label: 'Tempi Cronometro' },
      ],
    },
    {
      type: 'title',
      text: 'Passo CSS vs Monitoraggio della Frequenza Cardiaca',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Passo CSS in Acqua',
          description: 'Misura la velocità reale di scivolamento tenendo conto dell efficienza di virata.',
        },
        {
          title: 'Sensori Frequenza Cardiaca',
          description: 'Mostrano ritardi nella lettura e problemi di tenuta durante le virate veloci.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabella Zone di Intensita e Tempi di Pausa',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nome Zona', 'Passo Relativo a CSS', 'Obiettivo Principale', 'Pausa Consigliata'],
      rows: [
        ['Resistenza Aerobica', '104% del tempo CSS', 'Efficienza metabolica aerobica', '10 - 15 secondi'],
        ['Soglia CSS', '100% del tempo CSS', 'Capacita di smaltimento lattato', '15 - 20 secondi'],
        ['Velocita VO2 Max', '96% del tempo CSS', 'Potenza aerobica massima', '30 - 45 secondi'],
      ],
    },
    {
      type: 'title',
      text: 'Strategia di Esecuzione delle Serie',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Consiglio per Mantenere il Passo Target',
      html: 'Rispetta in modo rigoroso il tempo di passaggio ai 50 metri. Partire troppo velocemente compromette l efficacia della serie.',
    },
  ],
  ui,
};
