import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'kalkulator-waktu-lari';
const title = 'Kalkulator Tempo Lari dan Prediksi Waktu Lomba';
const description =
  'Hitung tempo lari Anda, prediksi waktu finish 5k, 10k, half marathon, dan marathon dengan rumus Riegel serta dapatkan zona latihan.';

const faqData = [
  {
    question: 'Seberapa akurat rumus Peter Riegel untuk prediksi marathon?',
    answer:
      'Rumus Riegel T2 = T1 * (D2 / D1)^1.06 memberikan akurasi tinggi jika daya tahan aerobik memadai. Untuk marathon, hasil akhir sangat dipengaruhi oleh jarak tempuh mingguan dan latihan lari jauh.',
  },
  {
    question: 'Bagaimana cara mengubah min/km ke min/mile secara tepat?',
    answer:
      'Kalikan total detik per kilometer dengan 1,609344. Tempo 5:00 min/km (300 detik) setara dengan 8:03 min/mile.',
  },
  {
    question: 'Mengapa hasil prediksi waktu kadang terasa terlalu berat pada jarak jauh?',
    answer:
      'Eksponen standar 1.06 mengasumsikan daya tahan kelelahan yang optimal. Tanpa fondasi aerobik yang cukup, penurunan stamina membuat waktu asli lebih lambat dari prediksi.',
  },
  {
    question: 'Bagaimana cara menentukan zona tempo untuk interval dan tempo run?',
    answer:
      'Latihan interval (VO2 max) sebaiknya dilakukan antara 95% hingga 105% dari tempo 5k, tempo run pada 110% hingga 120%, dan lari pemulihan santai pada 125% hingga 145%.',
  },
];

const howToData = [
  {
    name: 'Pilih Satuan',
    text: 'Pilih antara sistem Metrik (km, min/km) atau Imperial (mil, min/mile) menggunakan tombol di bagian atas.',
  },
  {
    name: 'Pilih Jarak',
    text: 'Klik tombol jarak lomba (5K, 10K, Half Marathon, 42K) atau masukkan jarak kustom Anda.',
  },
  {
    name: 'Atur Waktu Acuan',
    text: 'Gunakan tombol penyesuai (+1m, +5m, -1m, -5m) atau masukkan waktu lomba terbaru Anda.',
  },
  {
    name: 'Analisis Prediksi dan Zona',
    text: 'Lihat langsung tempo rata-rata, prediksi waktu finish lomba berdasarkan rumus Riegel, dan zona latihan Anda.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
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
      text: 'Prinsip Biomekanika Perhitungan Tempo Lari',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menghitung tempo lari dan memprediksi waktu lomba memerlukan pemahaman tentang sistem energi metabolik. Performa lari jarak jauh ditentukan oleh VO2 max, ambang laktat, dan efisiensi lari.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Eksponen Riegel' },
        { value: '4 Utama', label: 'Jarak Lomba Standar' },
        { value: '3 Cara', label: 'Hitung Tempo Reaktif' },
        { value: '3 Tingkat', label: 'Zona Latihan Target' },
      ],
    },
    {
      type: 'title',
      text: 'Model Matematika Rumus Riegel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dirumuskan oleh Peter Riegel pada tahun 1977, rumus T2 = T1 * (D2 / D1)^1.06 memodelkan penurunan kecepatan seiring bertambahnya jarak. Eksponen kelelahan 1.06 adalah rata-rata pada pelari yang terlatih.',
    },
    {
      type: 'title',
      text: 'Perbandingan Satuan Metrik vs Imperial',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sistem Metrik (min/km)',
          description: 'Standar internasional dalam olahraga atletik. Memudahkan kontrol split per 1000 meter.',
        },
        {
          title: 'Sistem Imperial (min/mile)',
          description: 'Standar di AS dan Inggris. Satu mil setara dengan 1,609344 kilometer.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Ringkasan Jarak Lomba Resmi',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nama Lomba', 'Jarak Metrik (km)', 'Jarak Imperial (mi)', 'Sistem Energi Utama'],
      rows: [
        ['Lari 5K', '5.00 km', '3.11 mi', '90% Aerobik / 10% Anaerobik'],
        ['Lari 10K', '10.00 km', '6.21 mi', '95% Aerobik / 5% Anaerobik'],
        ['Half Marathon', '21.0975 km', '13.11 mi', '99% Aerobik (Dominan Ambang Laktat)'],
        ['Full Marathon', '42.195 km', '26.22 mi', '100% Aerobik (Batas Glikogen)'],
      ],
    },
    {
      type: 'title',
      text: 'Strategi Pacing dan Negative Split',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Manfaat Negative Split',
      html: 'Berlari lebih cepat pada paruh kedua lomba menghemat cadangan glikogen dan mencegah penumpukan asam laktat prematur.',
    },
  ],
  ui: {
    title: 'Kalkulator Tempo Lari dan Prediksi Waktu Lomba',
    subtitle: 'Hitung tempo dan prediksi waktu lomba dengan rumus Riegel',
    paceCalculatorTitle: 'Kalkulator Tempo, Jarak dan Waktu',
    racePredictorTitle: 'Prediksi Waktu Lomba',
    trainingZonesTitle: 'Zona Tempo Latihan Target',
    distanceLabel: 'Jarak',
    timeLabel: 'Waktu',
    paceLabel: 'Tempo Rata-rata',
    hoursLabel: 'Jam',
    minutesLabel: 'Menit',
    secondsLabel: 'Detik',
    unitKm: 'Kilometer',
    unitMiles: 'Mil',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mil',
    presetsTitle: 'Jarak Cepat',
    calculateButton: 'Hitung',
    resetButton: 'Reset',
    recentRaceTitle: 'Waktu Acuan Terbaru',
    predictedTimesTitle: 'Prediksi Waktu Finish Lomba',
    distanceHeader: 'Jarak',
    estimatedTimeHeader: 'Waktu Estimasi',
    targetPaceHeader: 'Tempo Target',
    trainingZoneHeader: 'Zona Latihan',
    paceRangeHeader: 'Rentang Tempo',
    zoneEasy: 'Lari Santai & Pemulihan',
    zoneEasyDesc: 'Pembangunan fondasi aerobik dan pemulihan',
    zoneTempo: 'Tempo Run & Fartlek',
    zoneTempoDesc: 'Peningkatan ambang laktat',
    zoneIntervals: 'Latihan Interval & Kecepatan',
    zoneIntervalsDesc: 'Peningkatan VO2 max dan daya tahan kecepatan',
    riegelExplanation: 'Prediksi menggunakan Rumus Riegel T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Kalkulator Tempo Lari dan Prediksi Waktu Lomba',
      description: 'Hitung tempo lari dan prediksi waktu lomba 5k, 10k, half marathon, dan marathon.',
      h1: 'Kalkulator Tempo Lari dan Prediksi Waktu Lomba',
      intro: 'Menghitung tempo dan memprediksi waktu lomba secara akurat adalah hal penting bagi pelari.',
      statsTitle: 'Indikator Performa',
      stat1Label: 'Eksponen Riegel',
      stat1Value: '1.06',
      stat2Label: 'Jarak Utama',
      stat2Value: '4 Lomba',
      stat3Label: 'Hitung Tempo',
      stat3Value: '3 Cara',
      stat4Label: 'Zona Latihan',
      stat4Value: '3 Tingkat',
      comparativeTitle: 'Perbandingan Satuan',
      comparativeItem1Title: 'Metrik (min/km)',
      comparativeItem1Desc: 'Standar internasional.',
      comparativeItem2Title: 'Imperial (min/mil)',
      comparativeItem2Desc: 'Standar di AS dan Inggris.',
      tableTitle: 'Ikhtisar Jarak Lomba',
      tableCol1: 'Lomba',
      tableCol2: 'Kilometer',
      tableCol3: 'Mil',
      tableRow1Col1: 'Lari 5K',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: 'Lari 10K',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Half Marathon',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Strategi Pacing',
      tipText: 'Negative split membantu mencapai hasil finish terbaik.',
      faqTitle: 'Pertanyaan Umum',
      faq1Q: 'Seberapa akurat rumus Riegel?',
      faq1A: 'Membutuhkan latihan aerobik yang cukup.',
      faq2Q: 'Beda min/km dan min/mil?',
      faq2A: 'Min/km adalah waktu per kilometer.',
      glossaryTitle: 'Glosarium Lari',
      term1Name: 'Rumus Riegel',
      term1Def: 'Rumus prediksi waktu lomba oleh Peter Riegel.',
      term2Name: 'Ambang Laktat',
      term2Def: 'Intensitas di mana asam laktat menumpuk dengan cepat.',
    },
  },
};
