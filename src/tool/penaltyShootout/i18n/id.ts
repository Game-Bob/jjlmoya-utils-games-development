import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'kalkulator-adu-penalti';
const title = 'Papan Skor Adu Penalti Online: Penghitung Penalti Sepak Bola';
const description =
  'Pantau adu penalti sepak bola secara langsung. Pelacakan 5 tendangan, eliminasi matematis, aturan sudden death, dan selebrasi pemenang.';

const faqData = [
  {
    question: 'Kapan adu penalti berakhir lebih awal?',
    answer:
      'Adu penalti berakhir ketika sebuah tim unggul dengan selisih gol yang secara matematis tidak dapat dikejar oleh lawan dengan sisa tendangan yang ada.',
  },
  {
    question: 'Bagaimana cara kerja sudden death dalam adu penalti?',
    answer:
      'Jika skor imbang setelah 5 tendangan per tim, penalti dilanjutkan per pasang penendang sampai satu tim mencetak gol dan tim lain gagal pada putaran yang sama.',
  },
  {
    question: 'Siapa yang menendang pertama dalam adu penalti?',
    answer:
      'Wasit melakukan lemparan koin untuk memilih gawang dan lemparan koin kedua untuk menentukan tim yang menendang pertama.',
  },
  {
    question: 'Bisakah kiper diganti saat adu penalti berlangsung?',
    answer:
      'Kiper yang cedera dan tidak dapat melanjutkan pertandingan dapat diganti oleh pemain cadangan yang terdaftar, selama kuota pergantian pemain tim belum habis.',
  },
];

const howToData = [
  {
    name: 'Masukkan Nama Tim',
    text: 'Isi nama kustom untuk kedua tim pada kolom input sebelum penalti dimulai.',
  },
  {
    name: 'Catat Setiap Tendangan',
    text: 'Tekan GOL atau GAGAL setiap kali tendangan dilakukan. Aplikasi otomatis memperbarui skor, indikator, dan giliran.',
  },
  {
    name: 'Transisi ke Sudden Death',
    text: 'Jika imbang setelah 5 tendangan per tim, papan skor otomatis beralih ke mode sudden death.',
  },
  {
    name: 'Pengumuman Pemenang',
    text: 'Saat kemenangan matematis atau sudden death tercapai, modal animasi merayakan tim juara.',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Aturan Resmi IFAB tentang Adu Penalti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Adu penalti (secara resmi <em>tendangan dari titik penalti</em>) menentukan pemenang pertandingan sepak bola yang berakhir imbang pada babak gugur sesuai Hukum 10 IFAB.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Tendangan Awal' },
        { value: '11m', label: 'Jarak ke Gawang' },
        { value: '1v1', label: 'Penendang vs Kiper' },
        { value: 'ABBA / AB', label: 'Urutan Tendangan' },
      ],
    },
    {
      type: 'tip',
      title: 'Aturan Eliminasi Matematis',
      html: 'Jika satu tim mengumpulkan lebih banyak gol daripada yang secara matematis dapat dicapai lawan dengan sisa tendangannya, adu penalti langsung dihentikan.',
    },
    {
      type: 'title',
      text: 'Perbandingan Putaran Reguler vs Sudden Death',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fase Reguler (5 Tendangan)',
          description: 'Seri 5 tendangan bergantian per tim. Berakhir lebih awal hanya jika kembalinya skor secara matematis tidak memungkinkan.',
        },
        {
          title: 'Fase Sudden Death',
          description: 'Putaran tunggal setelah putaran ke-5. Setiap perbedaan gol setelah jumlah tendangan yang sama menentukan pemenang seketika.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Ringkasan Ketentuan IFAB',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Aturan / Ketentuan', 'Standar Resmi IFAB'],
      rows: [
        ['Pemain yang Berhak', 'Hanya pemain yang berada di lapangan saat peluit akhir berbunyi yang boleh mengeksekusi penalti.'],
        ['Posisi Kiper', 'Wajib mempertahankan setidaknya sebagian dari satu kaki pada garis gawang saat bola ditendang.'],
        ['Gerakan Tipuan saat Berlari', 'Gerakan tipuan saat berlari diperbolehkan; melakukan gerakan tipuan setelah menyelesaikan lari akan dikenai sanksi.'],
        ['Kesetaraan Jumlah Pemain', 'Jika satu tim kekurangan pemain akibat kartu merah, tim lawan harus mengurangi jumlah pemainnya agar seimbang.'],
      ],
    },
    {
      type: 'title',
      text: 'Kelebihan dan Kekurangan Adu Penalti',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Evaluasi Format',
      items: [
        {
          pro: 'Menjamin adanya pemenang pasti dalam jangka waktu yang dapat diprediksi.',
          con: 'Tekanan psikologis yang sangat tinggi dapat membayangi performa tim selama 120 menit.',
        },
        {
          pro: 'Menyajikan momen penuh ketegangan dan drama bagi para pendukung.',
          con: 'Kegagalan individu seorang penendang dapat membawa beban rasa bersalah yang tidak proporsional.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Tim Tuan Rumah',
    teamBLabel: 'Tim Tamu',
    scoreGoal: 'GOL',
    scoreMiss: 'GAGAL',
    undo: 'Urungkan',
    reset: 'Reset',
    suddenDeath: 'Sudden Death',
    regularRounds: 'Putaran Reguler',
    roundLabel: 'Putaran',
    turnLabel: 'Giliran Menendang',
    winnerTitle: 'Pemenang Ditentukan',
    unreachableLead: 'Keunggulan tak terkejar di putaran reguler',
    regularRoundsWin: 'Kemenangan setelah 5 penalti reguler',
    suddenDeathWin: 'Kemenangan di sudden death',
    statusPending: 'Menunggu',
    statusScored: 'Gol',
    statusMissed: 'Gagal',
  },
};
