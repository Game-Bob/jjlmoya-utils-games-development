import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'pencatat-skor-dart';
const title = 'Pencatat Skor Dart Online : Pelacak Leg dan Set';
const description = 'Lacak pertandingan dart dengan skor leg dan set. Pencatat skor dart online gratis untuk pertandingan 501 dan 301 dengan perhitungan checkout langsung dan statistik.';

const faqData = [
  {
    question: 'Bagaimana cara kerja skor dart di 501 dan 301?',
    answer: 'Pemain memulai dengan skor tetap 501 atau 301 poin. Setiap pemain bergiliran melempar tiga anak panah, dan total nilai lemparan tersebut dikurangi dari skor mereka. Tujuannya adalah mencapai tepat nol poin. Jika aturan Double Out diaktifkan, lemparan kemenangan terakhir harus mendarat di segmen ganda atau bullseye dalam.',
  },
  {
    question: 'Apa itu bust dalam dart dan kapan terjadi?',
    answer: 'Bust terjadi ketika seorang pemain mencetak lebih banyak poin dari sisa total mereka, atau skor mereka berkurang menjadi tepat satu poin saat aturan Double Out aktif. Saat pemain bust, giliran mereka segera berakhir dan skor mereka diatur ulang ke total yang mereka miliki di awal giliran tersebut.',
  },
  {
    question: 'Bagaimana cara menghitung rata-rata dart?',
    answer: 'Rata-rata dart dihitung dengan mengambil total poin yang dicetak, membaginya dengan jumlah total anak panah yang dilempar, dan mengalikan hasilnya dengan tiga. Ini mewakili skor rata-rata yang dicapai pemain per giliran standar tiga anak panah.',
  },
  {
    question: 'Apa itu checkout dalam dart?',
    answer: 'Checkout adalah kombinasi spesifik lemparan yang diperlukan untuk mengurangi sisa skor menjadi nol dan memenangkan leg. Pencatat skor profesional menampilkan saran checkout untuk skor 170 ke bawah, memandu pemain tentang single, double, atau triple mana yang harus dibidik.',
  },
];

const howToData = [
  {
    name: 'Pilih Skor Awal dan Aturan',
    text: 'Pilih 501 atau 301 sebagai skor awal Anda dan alihkan aturan Double Out tergantung pada tingkat permainan yang diinginkan.',
  },
  {
    name: 'Masukkan Nama Pemain',
    text: 'Klik bidang nama pemain di bagian atas papan skor untuk menyesuaikan nama. Nilai akan disimpan secara otomatis di browser Anda.',
  },
  {
    name: 'Catat Lemparan Dart',
    text: 'Gunakan papan tombol interaktif atau ketuk sektor papan dart secara langsung untuk mencatat lemparan Anda. Pilih pengali terlebih dahulu (Single, Double, atau Triple) lalu angka yang terkena.',
  },
  {
    name: 'Ikuti Rekomendasi Checkout',
    text: 'Saat sisa skor Anda turun di bawah 170, lihat panel checkout untuk melihat target optimal untuk menyelesaikan leg.',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pencatat Skor Dart Online Gratis dan Pelacak Pertandingan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mengelola skor dalam dart membutuhkan aritmatika mental cepat dan fokus. Pelacak leg dart digital ini menangani semua perhitungan untuk Anda, memungkinkan Anda fokus sepenuhnya pada lemparan. Baik Anda berlatih sendiri atau bermain pertandingan kompetitif dengan teman, papan skor ini melacak poin, leg, set, rata-rata lemparan, dan target checkout double out.',
    },
    {
      type: 'title',
      text: 'Format Skor Dart Standar Dijelaskan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pertandingan dart dimainkan dalam leg dan set. Format paling populer secara global adalah 501 dan 301, keduanya adalah permainan pengurangan di mana pemain mengurangi skor mereka menjadi nol.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Turnamen 501',
          description: 'Format standar untuk turnamen profesional di seluruh dunia.',
          icon: 'mdi:trophy-outline',
          points: ['Skor awal standar', 'Double out diperlukan', 'Fokus skor tinggi'],
        },
        {
          title: '301 Santai',
          description: 'Versi lebih cepat dari permainan pengurangan, ideal untuk pertandingan santai cepat.',
          icon: 'mdi:clock-outline',
          points: ['Kecepatan permainan lebih cepat', 'Opsi double in umum', 'Bagus untuk latihan'],
        },
        {
          title: 'Mode Cricket',
          description: 'Permainan membidik target strategis yang populer di pub dan liga.',
          icon: 'mdi:bullseye',
          points: ['Fokus angka 15-20', 'Pelacakan bullseye', 'Sistem aturan alternatif'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Memahami Matematika Checkout Dart',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Checkout tertinggi yang mungkin dalam dart adalah 170, dicapai dengan melempar Triple 20, Triple 20, dan Double Bull. Saat skor Anda mencapai 170 atau kurang, Anda memasuki jangkauan checkout, di mana urutan spesifik anak panah dapat memenangkan permainan.',
    },
    {
      type: 'table',
      headers: ['Skor', 'Target Panah 1', 'Target Panah 2', 'Target Panah 3'],
      rows: [
        ['170', 'Triple 20 (60)', 'Triple 20 (60)', 'Double Bull (50)'],
        ['120', 'Triple 20 (60)', 'Single 20 (20)', 'Double 20 (40)'],
        ['100', 'Triple 20 (60)', 'Single 20 (20)', 'Double 10 (20)'],
        ['80', 'Triple 20 (60)', 'Double 10 (20)', '-'],
        ['40', 'Double 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Fitur Papan Skor Dart Digital Ini',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Metode Input Interaktif</strong> beralih antara papan dart radial visual dan papan tombol numerik cepat.',
        '<strong>Mesin Checkout Cerdas</strong> menampilkan kombinasi langsung untuk menyelesaikan leg.',
        '<strong>Deteksi Bust</strong> secara otomatis mereset lemparan ilegal dan memperingatkan pengguna.',
        '<strong>Log Riwayat Giliran</strong> melacak putaran sebelumnya dan skor yang tersisa.',
        '<strong>Statistik Pertandingan Detail</strong> menghitung rata-rata tiga anak panah secara dinamis.',
      ],
    },
    {
      type: 'title',
      text: 'Pelacakan Dart Manual vs Digital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Papan tulis tradisional membutuhkan menulis, menghapus, dan perhitungan konstan. Papan skor online ini menghilangkan risiko kesalahan, mengotomatiskan rata-rata, dan menampilkan target checkout. Tempatkan perangkat Anda di samping papan, masuki mode layar penuh untuk menjaga layar tetap aktif, dan nikmati skor tanpa repot.',
    },
  ],
  ui: {
    playerA: 'Pemain 1',
    playerB: 'Pemain 2',
    winnerLabel: 'JUARA',
    reset: 'Setel Ulang',
    resetConfirm: 'Setel ulang pertandingan? Semua data akan hilang.',
    cancel: 'Batal',
    fullscreen: 'Layar penuh',
    exitFullscreen: 'Keluar layar penuh',
    leg: 'Leg',
    set: 'Set',
    average: 'Rata',
    checkout: 'Checkout',
    busted: 'Bust',
    dart: 'Giliran Dart',
    score301: '301',
    score501: '501',
    doubleOut: 'Double Out',
    noCheckout: 'Tidak Ada Checkout',
  },
};
