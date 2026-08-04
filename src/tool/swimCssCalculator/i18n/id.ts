import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'kalkulator-css-renang';
const title = 'Kalkulator CSS Kecepatan Renang Kritis';
const description = 'Hitung kecepatan renang kritis CSS ambang batas per 100m atau 100yd dari tes renang 400m dan 200m di kolam renang.';

const faqData = [
  {
    question: 'Seberapa sering perenang harus melakukan tes CSS?',
    answer: 'Perenang dan triatlet disarankan melakukan tes 400m dan 200m setiap 4 hingga 6 minggu untuk menyesuaikan target waktu.',
  },
  {
    question: 'Apakah CSS dapat dihitung dalam satuan yard?',
    answer: 'Ya. Rumus matematika kecepatan kritis berlaku sama persis untuk kolam lintasan pendek yard.',
  },
];

const howToData = [
  {
    name: 'Pilih Satuan Lintasan Kolam',
    text: 'Pilih antara Meter (kolam 25m atau 50m) atau Yard (kolam 25yd) pada tombol sakelar atas.',
  },
  {
    name: 'Masukkan Waktu Tes 400m',
    text: 'Isi menit dan detik hasil tes renang 400 meter maksimal Anda.',
  },
  {
    name: 'Masukkan Waktu Tes 200m',
    text: 'Isi menit dan detik hasil tes renang 200 meter maksimal Anda.',
  },
  {
    name: 'Hitung dan Tinjau Target Waktu',
    text: 'Klik Hitung untuk melihat kecepatan aerobik dan target waktu per seri.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

const ui: SwimCssCalculatorUI = {
  title: 'Kalkulator Kecepatan Renang Kritis CSS',
  subtitle: 'Hitung kecepatan ambang aerobik per 100m dan target waktu per zona intensitas.',
  unitLabel: 'Satuan Lintasan Kolam',
  unitMeters: 'Meter (Kolam 25m / 50m)',
  unitYards: 'Yard (Kolam 25yd)',
  t400Label: 'Tes Waktu 400m / 400yd',
  t200Label: 'Tes Waktu 200m / 200yd',
  minutesLabel: 'Menit',
  secondsLabel: 'Detik',
  calculateButton: 'Hitung CSS dan Target Waktu',
  resetButton: 'Riset Ulang',
  cssResultTitle: 'Hasil Kecepatan Renang Kritis',
  cssSpeedLabel: 'Kecepatan Aerobik',
  cssPace100Label: 'Waktu CSS per 100',
  lapPaceLabel: 'Target per Putaran 25m / 25yd',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Matriks Target Waktu Latihan Kolam',
  zoneHeader: 'Zona Intensitas',
  pace100Header: 'Target Waktu / 100',
  split50Header: 'Waktu 50',
  split100Header: 'Waktu 100',
  split200Header: 'Waktu 200',
  split400Header: 'Waktu 400',
  zoneAerobic: 'Daya Tahan Aerobik',
  zoneAerobicDesc: 'Untuk seri jarak jauh dan pemanasan (~104% waktu CSS)',
  zoneAerobicRest: 'Istirahat: 10s - 15s per set',
  zoneCss: 'Ambang Batas CSS',
  zoneCssDesc: 'Target waktu untuk seri ambang batas dan daya tahan lomba (~100% waktu CSS)',
  zoneCssRest: 'Istirahat: 15s - 20s per set',
  zoneVo2Max: 'Kecepatan VO2 Max',
  zoneVo2MaxDesc: 'Latihan interval intensitas tinggi (~96% waktu CSS)',
  zoneVo2MaxRest: 'Istirahat: 30s - 45s per set',
  invalidNotice: 'Waktu tes 400m harus lebih besar dari waktu tes 200m.',
  copySplitsButton: 'Salin Target Waktu',
  copiedNotice: 'Target waktu tersalin',
  seo: {
    title: 'Kalkulator CSS Kecepatan Renang Kritis Target Waktu',
    description: 'Hitung kecepatan renang kritis CSS ambang batas per 100m atau 100yd dari tes renang 400m dan 200m di kolam renang.',
    h1: 'Kalkulator Kecepatan Renang Kritis dan Matriks Latihan Kolam',
    intro: 'Kecepatan Renang Kritis adalah standar utama yang digunakan oleh perenang dan triatlet untuk menyusun sesi latihan kolam berdasarkan ambang batas aerobik.',
    statsTitle: 'Indikator Kunci Performa',
    stat1Label: 'Tes 1',
    stat1Value: '400m Usaha Maksimal',
    stat2Label: 'Tes 2',
    stat2Value: '200m Usaha Maksimal',
    stat3Label: 'Indikator Ambang',
    stat3Value: 'Waktu Dasar 100m CSS',
    stat4Label: 'Aplikasi Latihan',
    stat4Value: 'Target Waktu Stoples',
    comparativeTitle: 'Metode CSS vs Detak Jantung di Air',
    comparativeItem1Title: 'Pendekatan Kecepatan Kritis CSS',
    comparativeItem1Desc: 'Mengukur kecepatan dorongan air secara langsung tanpa gangguan sensor.',
    comparativeItem2Title: 'Pemantauan Detak Jantung Biasa',
    comparativeItem2Desc: 'Mengalami keterlambatan bacaan di dalam air dan tidak mencerminkan perubahan teknik.',
    tableTitle: 'Rincian Zona Intensitas dan Waktu Istirahat',
    tableCol1: 'Zona Latihan',
    tableCol2: 'Adaptasi Fisiologis',
    tableCol3: 'Jarak yang Disarankan',
    tableRow1Col1: 'Daya Tahan Aerobik',
    tableRow1Col2: 'Peningkatan kapiler dan oksidasi lemak.',
    tableRow1Col3: 'Pengulangan 400m hingga 800m dengan istirahat 10-15 detik.',
    tableRow2Col1: 'Ambang Batas CSS',
    tableRow2Col2: 'Kapasitas toleransi laktat dan daya aerobik.',
    tableRow2Col3: 'Pengulangan 100m hingga 300m dengan istirahat 15-20 detik.',
    tableRow3Col1: 'Kecepatan VO2 Max',
    tableRow3Col2: 'Serapan oksigen maksimal dan kecepatan kayu kayuhan.',
    tableRow3Col3: 'Interval 50m hingga 100m dengan istirahat lebih lama.',
    tipTitle: 'Tips Latihan untuk Hasil Tes Akurat',
    tipText: 'Jaga kecepatan secara konsisten pada tes 400m agar tidak mengalami kelelahan otot dini.',
    faqTitle: 'Pertanyaan Umum tentang Kecepatan Renang Kritis',
    faq1Q: 'Berapa sering tes CSS diulang?',
    faq1A: 'Direkomendasikan setiap 4 hingga 6 minggu.',
    faq2Q: 'Apakah bisa untuk kolam dalam satuan yard?',
    faq2A: 'Ya. Rumus matematikanya sama persis.',
    glossaryTitle: 'Glosarium Fisiologi Renang',
    term1Name: 'Kecepatan Renang Kritis',
    term1Def: 'Kecepatan renang maksimal teoritis yang dapat dipertahankan secara terus menerus.',
    term2Name: 'Waktu Sela',
    term2Def: 'Target waktu pada pembalikan dinding kolam.',
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
      text: 'Prinsip Biomekanik Kecepatan Renang Kritis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kecepatan renang kritis mengukur hubungan linier antara jarak renang dan waktu. Metode ini memisahkan kapasitas aerobik murni dari kontribusi anaerobik awal.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Pasangan Tes Standar' },
        { value: 'Dasar 100m', label: 'Standar Waktu' },
        { value: '3 Zona', label: 'Matriks Intensitas' },
        { value: '4 Target', label: 'Waktu Putaran' },
      ],
    },
    {
      type: 'title',
      text: 'Waktu CSS vs Detak Jantung Latihan Renang',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Waktu CSS Terukur',
          description: 'Mengukur dorongan nyata di air termasuk efisiensi pembalikan dinding kolam.',
        },
        {
          title: 'Sensor Detak Jantung',
          description: 'Mengalami keterlambatan respon bacaan saat berada di dalam air.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabel Zona Intensitas dan Waktu Istirahat',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nama Zona', 'Waktu Relatif CSS', 'Tujuan Utama', 'Istirahat Disarankan'],
      rows: [
        ['Daya Tahan Aerobik', '104% dari waktu CSS', 'Efisiensi aerobik dasar', '10 hingga 15 detik'],
        ['Ambang Batas CSS', '100% dari waktu CSS', 'Toleransi laktat dan waktu lomba', '15 hingga 20 detik'],
        ['Kecepatan VO2 Max', '96% dari waktu CSS', 'Daya aerobik maksimal', '30 hingga 45 detik'],
      ],
    },
    {
      type: 'title',
      text: 'Strategi Pelaksanaan di Kolam Renang',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Tips Menjaga Target Kecepatan',
      html: 'Patuhi target waktu pada setiap 50 meter secara ketat. Memulai 2 detik lebih cepat akan menyebabkan penurunan kecepatan dramatis.',
    },
  ],
  ui,
};
