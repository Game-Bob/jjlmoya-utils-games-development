import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'yuzme-css-hesaplayici';
const title = 'Kritik Yuzme Hizi CSS Hesaplayici';
const description = '400m ve 200m yuzme testlerinden kritik yuzme hizi CSS esik temponuzu 100m veya 100yd basina hesaplayin.';

const faqData = [
  {
    question: 'Yuzuculer CSS testini ne siklikla tekrarlamalidir?',
    answer: 'Yuzuculerin ve triatletlerin antrenman temposunu guncellemek icin 400m ve 200m testini her 4 ila 6 haftada bir tekrarlamalari onerilir.',
  },
  {
    question: 'CSS yard cinsinden hesaplanabilir mi?',
    answer: 'Evet. Kritik yuzme hizi matematiksel formulu yardlik kulvarlarda da birebir ayni sekilde gecerlidir.',
  },
];

const howToData = [
  {
    name: 'Havuz Birimini Secin',
    text: 'Ust anahtardan Metre (25m veya 50m havuz) veya Yard (25yd havuz) secin.',
  },
  {
    name: '400m Test Suresini Girin',
    text: 'Maksimum eforla yuzdugunuz 400 metre testinin dakika ve saniyesini girin.',
  },
  {
    name: '200m Test Suresini Girin',
    text: 'Maksimum eforla yuzdugunuz 200 metre testinin dakika ve saniyesini girin.',
  },
  {
    name: 'Hedef Zamanlari Hesaplayin',
    text: 'Hesapla butonuna basarak aerobik hizinizi ve hedef ara zamanlarinizi inceleyin.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

const ui: SwimCssCalculatorUI = {
  title: 'Kritik Yuzme Hizi CSS Hesaplayici',
  subtitle: '400m ve 200m testlerinden aerobik esik temponuzu ve bolge bazli hedef ara zamanlarinizi hesaplayin.',
  unitLabel: 'Havuz Kulvar Birimi',
  unitMeters: 'Metre (25m / 50m havuz)',
  unitYards: 'Yard (25yd havuz)',
  t400Label: '400m / 400yd Test Suresi',
  t200Label: '200m / 200yd Test Suresi',
  minutesLabel: 'Dakika',
  secondsLabel: 'Saniye',
  calculateButton: 'CSS ve Ara Zamanlari Hesapla',
  resetButton: 'Sifirla',
  cssResultTitle: 'Kritik Yuzme Hizi Sonuclari',
  cssSpeedLabel: 'Aerobik Hiz',
  cssPace100Label: '100m Basina CSS Temposu',
  lapPaceLabel: '25m / 25yd Tur Hedefi',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Havuz Antrenmani Hedef Tempo Matrisi',
  zoneHeader: 'Yogunluk Bolgesi',
  pace100Header: 'Hedef Tempo / 100',
  split50Header: '50m Gecis',
  split100Header: '100m Gecis',
  split200Header: '200m Gecis',
  split400Header: '400m Gecis',
  zoneAerobic: 'Aerobik Dayaniklilik',
  zoneAerobicDesc: 'Uzun aerobik seriler ve isinmalar icin (~104% CSS temposu)',
  zoneAerobicRest: 'Dinlenme: Seri basina 10s - 15s',
  zoneCss: 'CSS Esigi',
  zoneCssDesc: 'Esik serileri ve yaris temposu dayanikliligi icin (~100% CSS temposu)',
  zoneCssRest: 'Dinlenme: Seri basina 15s - 20s',
  zoneVo2Max: 'VO2 Max Hizi',
  zoneVo2MaxDesc: 'Yuksek yogunluklu interval antrenmani (~96% CSS temposu)',
  zoneVo2MaxRest: 'Dinlenme: Seri basina 30s - 45s',
  invalidNotice: '400m test suresi 200m test suresinden buyuk olmalidir.',
  copySplitsButton: 'Ara Zamanlari Kopyala',
  copiedNotice: 'Ara zamanlar kopyalandi',
  seo: {
    title: 'Kritik Yuzme Hizi CSS Hesaplayici Ara Zamanlar',
    description: '400m ve 200m yuzme testlerinden kritik yuzme hizi CSS esik temponuzu 100m veya 100yd basina hesaplayin.',
    h1: 'Kritik Yuzme Hizi CSS Hesaplayici ve Antrenman Matrisi',
    intro: 'Kritik Yuzme Hizi, yuzuculerin ve triatletlerin havuz antrenmanlarini aerobik esige gore planlamalarini saglayan standart olcutur.',
    statsTitle: 'Temel Performans Göstergeleri',
    stat1Label: 'Test 1',
    stat1Value: '400m Maksimum Efor',
    stat2Label: 'Test 2',
    stat2Value: '200m Maksimum Efor',
    stat3Label: 'Esik Göstergesi',
    stat3Value: '100m Temel CSS Temposu',
    stat4Label: 'Uygulama',
    stat4Value: 'Kronometre Hedef Gecisleri',
    comparativeTitle: 'Suda Nabiz Ölçümüne Karsi CSS Metodu',
    comparativeItem1Title: 'Kritik Yuzme Hizi CSS Yontemi',
    comparativeItem1Desc: 'Su icindeki gercek ilerleme hizini donus teknigi ve hidrodinamik ile birlikte olcer.',
    comparativeItem2Title: 'Geleneksel Nabiz Ölçümü',
    comparativeItem2Desc: 'Suda gecikmeli tepki verir ve yorgunlukla bozulan yuzme teknigini yansitmaz.',
    tableTitle: 'Yogunluk Bolgeleri ve Dinlenme Sureleri Tablosu',
    tableCol1: 'Antrenman Bolgesi',
    tableCol2: 'Fizyolojik Uyum',
    tableCol3: 'Onerilen Mesafeler',
    tableRow1Col1: 'Aerobik Dayaniklilik',
    tableRow1Col2: 'Kilcal damarlanma ve yag metabolizmasi gelisimi.',
    tableRow1Col3: '10-15s kisa dinlenmeli 400m - 800m tekrarlari.',
    tableRow2Col1: 'CSS Esigi',
    tableRow2Col2: 'Laktat uzaklastirma kapasitesi ve aerobik guc.',
    tableRow2Col3: '15-20s dinlenmeli 100m - 300m tekrarlari.',
    tableRow3Col1: 'VO2 Max Hizi',
    tableRow3Col2: 'Maksimum oksijen alimi ve kulac frekansi.',
    tableRow3Col3: 'Uzun dinlenmeli 50m - 100m intervalleri.',
    tipTitle: 'Dogru Test Icin Antrenor Tavsiyesi',
    tipText: '400m testinde temponuzu dengeli ayarlayin, ilk 100 metrede erken laktat birikiminden kacinin.',
    faqTitle: 'Kritik Yuzme Hizi Hakkinda Sıkca Sorulan Sorular',
    faq1Q: 'CSS testi ne siklikla tekrarlanmali?',
    faq1A: 'Her 4 ila 6 haftada bir tekrarlanmasi onerilir.',
    faq2Q: 'Yardlik havuzlarda kullanilabilir mi?',
    faq2A: 'Evet. Matematiksel formul birebir aynidir.',
    glossaryTitle: 'Yuzme Fizyolojisi Terimleri',
    term1Name: 'Kritik Yuzme Hizi',
    term1Def: 'Erken yorgunluk olmaksizin surekli surdurulebilen teorik maksimum yuzme hizi.',
    term2Name: 'Ara Zaman',
    term2Def: 'Havuz donusunde kronometreden takip edilecek hedef zaman.',
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
      text: 'Kritik Yuzme Hizinin Biyomekanik Ilkeleri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kritik Yuzme Hizi, yuzulen mesafe ile zaman arasindaki dogrusal ilskinin egimini ifade eder. 400m suresinden 200m suresi cikarilarak anaerobik katkı elenebilir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Standart Test Cifti' },
        { value: '100m Temel', label: 'Tempo Standarti' },
        { value: '3 Bolge', label: 'Yogunluk Matrisi' },
        { value: '4 Gecis', label: 'Donus Hedefleri' },
      ],
    },
    {
      type: 'title',
      text: 'CSS Temposu vs Yuzmede Nabiz Takibi',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Dogrudan CSS Temposu',
          description: 'Donusler ve su alti kayma dahil gercek ilerleme hizini olcer.',
        },
        {
          title: 'Su Ici Nabiz Sensorleri',
          description: 'Gecikmeli veri sunar ve su sicakligindan etkilenebilir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Antrenman Bolgeleri ve Dinlenme Sureleri Tablosu',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Bolge Adi', 'CSSye Gore Tempo', 'Temel Antrenman Amaci', 'Onerilen Dinlenme'],
      rows: [
        ['Aerobik Dayaniklilik', 'CSS suresinin %104u', 'Temel aerobik kapasite', '10 ila 15 saniye'],
        ['CSS Esigi', 'CSS suresinin %100u', 'Laktat toleransi ve yaris temposu', '15 ila 20 saniye'],
        ['VO2 Max Hizi', 'CSS suresinin %96si', 'Maksimum oksijen alimi', '30 ila 45 saniye'],
      ],
    },
    {
      type: 'title',
      text: 'Havuzda Interval Serileri Yonetimi Strategy',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Hedef Tempo Koruma Tavsiyesi',
      html: 'Her 50 metredeki gecis surenize kesinlikle uyun. Ilk 50mye 2 saniye hizli baslamak sonlarda ciddi hiz kaybina yol acar.',
    },
  ],
  ui,
};
