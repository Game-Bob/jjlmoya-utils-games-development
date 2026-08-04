import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'kosu-temposu-hesaplama';
const title = 'Koşu Temposu Hesaplama ve Yarış Süresi Tahmini';
const description =
  'Koşu temponuzu hesaplayın, Riegel formülü ile 5k, 10k, yarı maraton ve maraton bitiş sürelerinizi tahmin edin ve antrenman bölgelerinizi belirleyin.';

const faqData = [
  {
    question: 'Peter Riegel formülü maraton süre tahmininde ne kadar hassastır?',
    answer:
      'Riegel formülü T2 = T1 * (D2 / D1)^1.06, iyi bir aerobik altyapıya sahip koşucularda yüksek hassasiyet sunar. Maratonda sonuç, haftalık km hacmi ve uzun koşulara da bağlıdır.',
  },
  {
    question: 'min/km değeri min/mile değerine tam olarak nasıl çevrilir?',
    answer:
      'Kilometre başına düşen toplam saniyeyi 1,609344 ile çarpın. 5:00 min/km (300 saniye) temposu 8:03 min/mile değerine karşılık gelir.',
  },
  {
    question: 'Tahmin edilen süreler uzun mesafelerde neden bazen zorlayıcı görünür?',
    answer:
      'Standart 1.06 katsayısı ideal yorgunluk direncini varsayar. Yeterli hacim antrenmanı yoksa kas yorgunluğu süreyi yavaşlatır.',
  },
  {
    question: 'İnterval ve tempo koşuları için hedef tempo bölgeleri nasıl ayarlanmalıdır?',
    answer:
      'İnterval antrenmanları (VO2 max) 5k temponuzun %95-%105 i, eşik koşuları %110-%120 si ve rahat toparlanma koşuları %125-%145 i arasında yapılmalıdır.',
  },
];

const howToData = [
  {
    name: 'Birim Sistemini Seçin',
    text: 'Metrik (km, min/km) veya İmparatorluk (mil, min/mil) birim sistemini üstteki anahtarla seçin.',
  },
  {
    name: 'Mesafe Seçin',
    text: 'Hazır yarış butonlarına (5K, 10K, Yarı Maraton, 42K) tıklayın veya özel bir mesafe girin.',
  },
  {
    name: 'Referans Sürenizi Ayarlayın',
    text: 'Ayar butonlarını (+1d, +5d, -1d, -5d) kullanarak son yarış derecenizi girin.',
  },
  {
    name: 'Tahmin ve Bölgeleri İnceleyin',
    text: 'Ortalama temponuzu, Riegel formülüne göre tahmini bitiş sürelerinizi ve antrenman bölgelerinizi anında görün.',
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
      text: 'Koşu Temposu Hesaplamanın Biyomekanik Ilkeleri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Koşu temposunun hesaplanması ve yarış sürelerinin tahmini, metabolik enerji sistemlerinin anlaşılmasını gerektirir. Dayanıklılık performansı VO2 max, laktat eşiği ve koşu ekonomisi tarafından belirlenir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Riegel Katsayısı' },
        { value: '4 Ana', label: 'Resmi Yarış Mesafesi' },
        { value: '3 Yöntem', label: 'Hesaplama Modu' },
        { value: '3 Seviye', label: 'Hedef Antrenman Bölgesi' },
      ],
    },
    {
      type: 'title',
      text: 'Riegel Formülü ve Performans Modellemesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mühendis Peter Riegel tarafından 1977 de geliştirilen T2 = T1 * (D2 / D1)^1.06 formülü, mesafe arttıkça hızdaki düşüşü modeller. 1.06 yorgunluk katsayısı antrenmanlı atletlerin ortalamasını temsil eder.',
    },
    {
      type: 'title',
      text: 'Metrik ve Imparatorluk Birim Karşılaştırması',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Metrik Sistem (min/km)',
          description: 'Uluslararası standart. Her 1000 metrede bir tur süresi takibi sağlar.',
        },
        {
          title: 'Imparatorluk Sistemi (min/mil)',
          description: 'ABD ve İngiltere deki standart. Bir mil 1,609344 kilometreye eşittir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Resmi Yol Yarışları Mesafeleri',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Yarış', 'Metrik Mesafe (km)', 'İmparatorluk Mesafesi (mi)', 'Ana Enerji Sistemi'],
      rows: [
        ['5K Yol Yarışı', '5.00 km', '3.11 mi', '%90 Aerobik / %10 Anaerobik'],
        ['10K Yol Yarışı', '10.00 km', '6.21 mi', '%95 Aerobik / %5 Anaerobik'],
        ['Yarı Maraton', '21.0975 km', '13.11 mi', '%99 Aerobik (Laktat Eşiği Baskın)'],
        ['Maraton', '42.195 km', '26.22 mi', '%100 Aerobik (Glikojen Sınırlı)'],
      ],
    },
    {
      type: 'title',
      text: 'Yarış Stratejisi ve Negative Split',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Negative Split Avantajı',
      html: 'Yarışın ikinci yarısını ilk yarısından biraz daha hızlı koşmak glikojen depolarını korur ve erken yorulmayı önler.',
    },
  ],
  ui: {
    title: 'Koşu Temposu Hesaplama ve Yarış Süresi Tahmini',
    subtitle: 'Riegel formülü ile tempo ve yarış bitiş sürelerinizi hesaplayın',
    paceCalculatorTitle: 'Tempo, Mesafe ve Süre Hesaplayıcı',
    racePredictorTitle: 'Yarış Süresi Tahmini',
    trainingZonesTitle: 'Hedef Antrenman Tempo Bölgeleri',
    distanceLabel: 'Mesafe',
    timeLabel: 'Süre',
    paceLabel: 'Ortalama Tempo',
    hoursLabel: 'Saat',
    minutesLabel: 'Dakika',
    secondsLabel: 'Saniye',
    unitKm: 'Kilometre',
    unitMiles: 'Mil',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mil',
    presetsTitle: 'Hızlı Mesafeler',
    calculateButton: 'Hesapla',
    resetButton: 'Sıfırla',
    recentRaceTitle: 'Son Referans Derecesi',
    predictedTimesTitle: 'Tahmini Bitiş Süreleri',
    distanceHeader: 'Mesafe',
    estimatedTimeHeader: 'Tahmini Süre',
    targetPaceHeader: 'Hedef Tempo',
    trainingZoneHeader: 'Antrenman Bölgesi',
    paceRangeHeader: 'Tempo Aralığı',
    zoneEasy: 'Rahat Koşu & Toparlanma',
    zoneEasyDesc: 'Aerobik temel ve toparlanma',
    zoneTempo: 'Eşik Koşusu & Fartlek',
    zoneTempoDesc: 'Laktat eşiğini geliştirme',
    zoneIntervals: 'İnterval & Hız Antrenmanı',
    zoneIntervalsDesc: 'VO2 max ve hız dayanıklılığı geliştirme',
    riegelExplanation: 'Tahminler Riegel Formülü T2 = T1 * (D2 / D1)^1.06 ı temel alır.',
    seo: {
      title: 'Koşu Temposu Hesaplama ve Yarış Süresi Tahmini',
      description: 'Koşu temponuzu hesaplayın, 5k, 10k, yarı maraton ve maraton sürelerinizi tahmin edin.',
      h1: 'Koşu Temposu Hesaplama ve Yarış Süresi Tahmini',
      intro: 'Doğru tempo hesaplama ve derece tahmini koşucular için kritik araçlardır.',
      statsTitle: 'Performans Göstergeleri',
      stat1Label: 'Riegel Katsayısı',
      stat1Value: '1.06',
      stat2Label: 'Ana Mesafeler',
      stat2Value: '4 Yarış',
      stat3Label: 'Tempo Hesaplama',
      stat3Value: '3 Yöntem',
      stat4Label: 'Hedef Bölgeler',
      stat4Value: '3 Seviye',
      comparativeTitle: 'Birim Karşılaştırması',
      comparativeItem1Title: 'Metrik (min/km)',
      comparativeItem1Desc: 'Uluslararası standart.',
      comparativeItem2Title: 'İmparatorluk (min/mil)',
      comparativeItem2Desc: 'ABD ve İngiltere standardı.',
      tableTitle: 'Yarış Mesafeleri Özeti',
      tableCol1: 'Yarış',
      tableCol2: 'Kilometre',
      tableCol3: 'Mil',
      tableRow1Col1: '5K Koşusu',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: '10K Koşusu',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Yarı Maraton',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Yarış Stratejisi',
      tipText: 'Negative split ile daha iyi derece elde edilir.',
      faqTitle: 'Sıkça Sorulan Sorular',
      faq1Q: 'Riegel formülü ne kadar hassas?',
      faq1A: 'Yeterli aerobik altyapı gerektirir.',
      faq2Q: 'min/km ile min/mil farkı nedir?',
      faq2A: 'Min/km km başına düşen süredir.',
      glossaryTitle: 'Koşu Terimleri',
      term1Name: 'Riegel Formülü',
      term1Def: 'Peter Riegel tarafından geliştirilen derece tahmin formülü.',
      term2Name: 'Laktat Eşiği',
      term2Def: 'Laktik asidin hızla biriktiği egzersiz yoğunluğu.',
    },
  },
};
