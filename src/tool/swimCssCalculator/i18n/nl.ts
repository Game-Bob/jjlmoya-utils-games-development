import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'css-zwemcalculator';
const title = 'Kritische Zwemsnelheid CSS Calculator';
const description = 'Bereken uw kritische zwemsnelheid CSS drempeltempo per 100m of 100yd uit 400m en 200m zwemtesten.';

const faqData = [
  {
    question: 'Hoe vaak moeten zwemmers hun kritische zwemsnelheid testen?',
    answer: 'Het wordt aanbevolen om het 400m en 200m testprotocol elke 4 tot 6 weken te herhalen om streeftijden aan te passen.',
  },
  {
    question: 'Kan CSS ook in yards worden berekend?',
    answer: 'Ja. De wiskundige CSS formule geldt exact hetzelfde voor kortere yard banen.',
  },
];

const howToData = [
  {
    name: 'Selecteer Baanlengte',
    text: 'Kies tussen Meter (25m of 50m baan) of Yards (25yd baan).',
  },
  {
    name: 'Voer 400m Testtijd in',
    text: 'Vul de minuten en seconden in van uw maximale 400 meter zwemtest.',
  },
  {
    name: 'Voer 200m Testtijd in',
    text: 'Vul de minuten en seconden in van uw maximale 200 meter zwemtest.',
  },
  {
    name: 'Bereken en Bekijk Tussentijden',
    text: 'Klik op Berekenen om uw aerobe snelheid en streeftijden te zien.',
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

const ui: SwimCssCalculatorUI = {
  title: 'Kritische Zwemsnelheid CSS Calculator',
  subtitle: 'Bereken uw aerobe drempeltempo per 100m en streeftijden per trainingszone.',
  unitLabel: 'Baanlengte Eenheid',
  unitMeters: 'Meter (25m / 50m baan)',
  unitYards: 'Yards (25yd baan)',
  t400Label: '400m / 400yd Testtijd',
  t200Label: '200m / 200yd Testtijd',
  minutesLabel: 'Minuten',
  secondsLabel: 'Seconden',
  calculateButton: 'Bereken CSS en Tussentijden',
  resetButton: 'Herstellen',
  cssResultTitle: 'Resultaten Kritische Zwemsnelheid',
  cssSpeedLabel: 'Aerobe Snelheid',
  cssPace100Label: 'CSS Tempo per 100',
  lapPaceLabel: '25m / 25yd Banen Target',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Trainingszones en Tussentijden Matrix',
  zoneHeader: 'Intensiteitszone',
  pace100Header: 'Streeftempo / 100',
  split50Header: '50m Tijd',
  split100Header: '100m Tijd',
  split200Header: '200m Tijd',
  split400Header: '400m Tijd',
  zoneAerobic: 'Aerobe Conditie',
  zoneAerobicDesc: 'Voor lange aerobe series en warming-up (~104% CSS tempo)',
  zoneAerobicRest: 'Rust: 10s - 15s per serie',
  zoneCss: 'CSS Drempel',
  zoneCssDesc: 'Streeftempo voor drempelseries en wedstrijdtempo (~100% CSS tempo)',
  zoneCssRest: 'Rust: 15s - 20s per serie',
  zoneVo2Max: 'VO2 Max Snelheid',
  zoneVo2MaxDesc: 'Hoge intensiteit intervaltraining (~96% CSS tempo)',
  zoneVo2MaxRest: 'Rust: 30s - 45s per serie',
  invalidNotice: 'De 400m testtijd moet groter zijn dan de 200m testtijd.',
  copySplitsButton: 'Kopieer Tussentijden',
  copiedNotice: 'Tussentijden gekopieerd',
  seo: {
    title: 'Kritische Zwemsnelheid CSS Calculator Tussentijden',
    description: 'Bereken uw kritische zwemsnelheid CSS drempeltempo per 100m of 100yd uit 400m en 200m zwemtesten.',
    h1: 'Kritische Zwemsnelheid CSS Calculator en Zwemtempo Matrix',
    intro: 'De kritische zwemsnelheid is de gouden standaard voor zwemmers en triatleten om zwemtrainingen af te stemmen op de aerobe drempel.',
    statsTitle: 'Belangrijkste Prestatie-indicatoren',
    stat1Label: 'Test 1',
    stat1Value: '400m Maximale Test',
    stat2Label: 'Test 2',
    stat2Value: '200m Maximale Test',
    stat3Label: 'Drempelwaarde',
    stat3Value: '100m Basis CSS Tempo',
    stat4Label: 'Toepassing',
    stat4Value: 'Praktische Tussentijden',
    comparativeTitle: 'CSS Tempo versus Hartslagmeting in het Water',
    comparativeItem1Title: 'Kritische Zwemsnelheid Methode',
    comparativeItem1Desc: 'Meet de werkelijke voortbewegingssnelheid zonder verstoring door sensoren.',
    comparativeItem2Title: 'Klassieke Hartslagmeting',
    comparativeItem2Desc: 'Heeft in het water vaak vertraging en houdt geen rekening met techniekverlies.',
    tableTitle: 'Overzicht van Intensiteitszones en Rusttijden',
    tableCol1: 'Trainingszone',
    tableCol2: 'Fysiologische Adaptatie',
    tableCol3: 'Aanbevolen Afstanden',
    tableRow1Col1: 'Aerobe Conditie',
    tableRow1Col2: 'Verbetering van vetverbranding en capillarisatie.',
    tableRow1Col3: '400m tot 800m herhalingen met korte rust (10-15s).',
    tableRow2Col1: 'CSS Drempel',
    tableRow2Col2: 'Verhoging van de lactaattolerantie en aerobe kracht.',
    tableRow2Col3: '100m tot 300m herhalingen met 15-20s rust.',
    tableRow3Col1: 'VO2 Max Snelheid',
    tableRow3Col2: 'Maximale zuurstofopname en slagfrequentie.',
    tableRow3Col3: '50m tot 100m intervallen met langere rust.',
    tipTitle: 'Trainingsadvies voor Nauwkeurige Testen',
    tipText: 'Verdeel uw krachten goed tijdens de 400m test om verzuring in de eerste 100m te voorkomen.',
    faqTitle: 'Veelgestelde Vragen over Kritische Zwemsnelheid',
    faq1Q: 'Hoe vaak herhaalt u de CSS test?',
    faq1A: 'Elke 4 tot 6 weken gedurende het trainingsblok.',
    faq2Q: 'Werkt dit ook voor yard banen?',
    faq2A: 'Ja. De wiskundige formule is exact gelijk.',
    glossaryTitle: 'Begrippenlijst Zwemfysiologie',
    term1Name: 'Kritische Zwemsnelheid',
    term1Def: 'De theoretische maximale zwemsnelheid die zonder snelle uitputting volgehouden kan worden.',
    term2Name: 'Tussentijd',
    term2Def: 'De richttijd op het klokje bij het keerpunt.',
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
      text: 'Biomechanische Principes van de Kritische Zwemsnelheid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De kritische zwemsnelheid isoleert de aerobe capaciteit door de 200m tijd af te trekken van de 400m tijd. Dit schakelt de anaerobe energie-inbreng uit.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Standaard Testpaar' },
        { value: '100m Basis', label: 'Tempo Standaard' },
        { value: '3 Zones', label: 'Intensiteitsmatrix' },
        { value: '4 Tijden', label: 'Keerpunt Doelen' },
      ],
    },
    {
      type: 'title',
      text: 'CSS Tempo vs Hartslagmeting bij het Zwemmen',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Direct CSS Tempo',
          description: 'Meet de werkelijke snelheid in het water inclusief keerpunten en stroomlijnen.',
        },
        {
          title: 'Hartslagsensoren in het Water',
          description: 'Vertoont vertraging en kan beïnvloed worden door watertemperatuur.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabel Trainingszones en Rustintervallen',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Zonenaam', 'Tempo Relatief tot CSS', 'Hoofddoel Training', 'Aanbevolen Rust'],
      rows: [
        ['Aerobe Conditie', '104% van CSS tijd', 'Aerobe basisconditie', '10 tot 15 seconden'],
        ['CSS Drempel', '100% van CSS tijd', 'Lactaatverwerking en wedstrijdtempo', '15 tot 20 seconden'],
        ['VO2 Max Snelheid', '96% van CSS tijd', 'Maximale zuurstofopname', '30 tot 45 seconden'],
      ],
    },
    {
      type: 'title',
      text: 'Strategie voor Intervalsets in het Zwembad',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Advies voor Tempobewaking',
      html: 'Houd de tussentijd op elke 50 meter strikt aan. 2 seconden te snel starten leidt tot grote snelheidsafname op het einde.',
    },
  ],
  ui,
};
