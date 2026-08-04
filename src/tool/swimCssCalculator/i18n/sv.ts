import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'css-simkalkylator';
const title = 'Kritisk Simhastighet CSS Kalkylator';
const description = 'Berakna din kritiska simhastighet CSS troskeltempo per 100m eller 100yd fran 400m och 200m simtester.';

const faqData = [
  {
    question: 'Hur ofta bor simmare testa sin kritiska simhastighet?',
    answer: 'Det rekommenderas att genomfora 400m och 200m testet var 4e till 6e vecka for att justera malfarter.',
  },
  {
    question: 'Kan CSS beraknas i yards istallet for meter?',
    answer: 'Ja. Den matematiska CSS formeln galler pa exakt samma satt for yard bassanger.',
  },
];

const howToData = [
  {
    name: 'Valj Bassangens Enhet',
    text: 'Valj mellan Meter (25m eller 50m bassang) eller Yards (25yd bassang).',
  },
  {
    name: 'Ange 400m Testtid',
    text: 'Fyll i minuter och sekunder fran ditt maximala 400 meter simtest.',
  },
  {
    name: 'Ange 200m Testtid',
    text: 'Fyll i minuter och sekunder fran ditt maximala 200 meter simtest.',
  },
  {
    name: 'Berakna och Granska Mellantider',
    text: 'Klicka pa Berakna for att se din aeroba hastighet och malmellantider.',
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

const ui: SwimCssCalculatorUI = {
  title: 'Kritisk Simhastighet CSS Kalkylator',
  subtitle: 'Berakna ditt aeroba troskeltempo per 100m och maltider per intensitetszon.',
  unitLabel: 'Bassangens Enhet',
  unitMeters: 'Meter (25m / 50m bassang)',
  unitYards: 'Yards (25yd bassang)',
  t400Label: '400m / 400yd Testtid',
  t200Label: '200m / 200yd Testtid',
  minutesLabel: 'Minuter',
  secondsLabel: 'Sekunder',
  calculateButton: 'Berakna CSS och Mellantider',
  resetButton: 'Aterstall',
  cssResultTitle: 'Resultat for Kritisk Simhastighet',
  cssSpeedLabel: 'Aerob Hastighet',
  cssPace100Label: 'CSS Tempo per 100',
  lapPaceLabel: 'Mal per 25m / 25yd Bassanglangd',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Maltider och Traningszoner Matris',
  zoneHeader: 'Intensitetszon',
  pace100Header: 'Maltempo / 100',
  split50Header: '50m Tid',
  split100Header: '100m Tid',
  split200Header: '200m Tid',
  split400Header: '400m Tid',
  zoneAerobic: 'Aerob Uthallighet',
  zoneAerobicDesc: 'For langa aeroba serier och uppvarmning (~104% CSS tempo)',
  zoneAerobicRest: 'Vila: 10s - 15s per serie',
  zoneCss: 'CSS Troskel',
  zoneCssDesc: 'Maltempo for troskelserier och tavlingsfart (~100% CSS tempo)',
  zoneCssRest: 'Vila: 15s - 20s per serie',
  zoneVo2Max: 'VO2 Max Hastighet',
  zoneVo2MaxDesc: 'Hogintensiv intervalltraning (~96% CSS tempo)',
  zoneVo2MaxRest: 'Vila: 30s - 45s per serie',
  invalidNotice: '400m testtiden maste vara strikt storre an 200m testtiden.',
  copySplitsButton: 'Kopiera Mellantider',
  copiedNotice: 'Mellantider kopierade',
  seo: {
    title: 'Kritisk Simhastighet CSS Kalkylator Simtider',
    description: 'Berakna din kritiska simhastighet CSS troskeltempo per 100m eller 100yd fran 400m och 200m simtester.',
    h1: 'Kritisk Simhastighet CSS Kalkylator och Traningsmatris',
    intro: 'Kritisk simhastighet ar standardmattet for simmare och triatleter for att strukturera simpass utifran aerob troskel.',
    statsTitle: 'Viktiga Prestandaindikatorer',
    stat1Label: 'Test 1',
    stat1Value: '400m Maximalt Test',
    stat2Label: 'Test 2',
    stat2Value: '200m Maximalt Test',
    stat3Label: 'Troskelindikator',
    stat3Value: '100m Bas CSS Tempo',
    stat4Label: 'Praktisk Anvandning',
    stat4Value: 'Maltider pa Tidtagaruret',
    comparativeTitle: 'CSS Metod kontra Pulsmatning i Vatten',
    comparativeItem1Title: 'Kritisk Simhastighet CSS Metod',
    comparativeItem1Desc: 'Mater den faktiska framdrivningshastigheten i vattnet utan storning fran pulssensorer.',
    comparativeItem2Title: 'Klassisk Pulsmatning',
    comparativeItem2Desc: 'Har ofta fordrojning i vatten och tar inte hansyn till att simtekniken forsämras vid trotthet.',
    tableTitle: 'Oversikt over Intensitetszoner och Vilotider',
    tableCol1: 'Traningszon',
    tableCol2: 'Fysiologisk Adaption',
    tableCol3: 'Rekommenderade Distanser',
    tableRow1Col1: 'Aerob Uthallighet',
    tableRow1Col2: 'Okad kapillarisering och fettforbranning.',
    tableRow1Col3: '400m till 800m upprepningar med kort vila (10-15s).',
    tableRow2Col1: 'CSS Troskel',
    tableRow2Col2: 'Okad laktattolerans och aerob effekt.',
    tableRow2Col3: '100m till 300m upprepningar med 15-20s vila.',
    tableRow3Col1: 'VO2 Max Hastighet',
    tableRow3Col2: 'Maximal syreupptagningsformaga och armtagsfrekvens.',
    tableRow3Col3: '50m till 100m intervaller med langre vila.',
    tipTitle: 'Traningstips for Exakta Tester',
    tipText: 'Hall en jamn fart under 400m testet for att undvika tidig mjolksyraelimination.',
    faqTitle: 'Vanliga Fragor om Kritisk Simhastighet',
    faq1Q: 'Hur ofta bor testet upprepas?',
    faq1A: 'Rekommenderas var 4e till 6e vecka.',
    faq2Q: 'Fungerar det for yard bassanger?',
    faq2A: 'Ja. Formeln ar exakt densamma.',
    glossaryTitle: 'Ordlista Simfysiologi',
    term1Name: 'Kritisk Simhastighet',
    term1Def: 'Den teoretiska maximala simhastigheten som kan uppratthallas utan snabb utmattning.',
    term2Name: 'Mellantid',
    term2Def: 'Maltiden vid bassangvandningen.',
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
      text: 'Biomekaniska Principer for Kritisk Simhastighet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kritisk simhastighet definierar lutningen i sambandet mellan distans och tid. Genom att dra av 200m tiden fran 400m tiden isoleras den aeroba kapaciteten.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Standard Testpar' },
        { value: '100m Bas', label: 'Tempostandard' },
        { value: '3 Zoner', label: 'Intensitetsmatris' },
        { value: '4 Tider', label: 'Vandningsmal' },
      ],
    },
    {
      type: 'title',
      text: 'CSS Tempo vs Pulsmatning i Simtraning',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Direkt CSS Tempo',
          description: 'Mater den reella farten i vattnet inklusive vandningar och glid.',
        },
        {
          title: 'Pulssensorer i Vatten',
          description: 'Visar ofta fordrojning och paverkas av vattentemperatur.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabell over Traningszoner och Vilotider',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Zonnamn', 'Tempo Relativt CSS', 'Huvudsakligt Traningsmal', 'Rekommenderad Vila'],
      rows: [
        ['Aerob Uthallighet', '104% av CSS tid', 'Grundlaggande aerob uthallighet', '10 till 15 sekunder'],
        ['CSS Troskel', '100% av CSS tid', 'Laktathantering och tavlingsfart', '15 till 20 sekunder'],
        ['VO2 Max Hastighet', '96% av CSS tid', 'Maximal syreupptagningsformaga', '30 till 45 sekunder'],
      ],
    },
    {
      type: 'title',
      text: 'Strategi for Intervallpass i Bassangen',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Råd for Tempojamnhet',
      html: 'Hall mellantiden pa varje 50 meter strikt. Att oppna 2 sekunder for snabbt leder till kraftigt fartsankning mot slutet.',
    },
  ],
  ui,
};
