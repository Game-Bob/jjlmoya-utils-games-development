import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'papan-skor-streetball-3x3';
const title = 'Papan Skor Streetball 3x3 dengan Shot Clock';
const description = 'Catat skor streetball FIBA 3x3 dengan shot clock 12 detik terintegrasi, pelanggaran tim, poin sudden death, dan indikator visual setengah lapangan yang dinamis.';

const faq = [
  {
    question: 'Bagaimana cara kerja shot clock 12 detik di Streetball 3x3?',
    answer: 'Dalam FIBA 3x3, tim hanya punya 12 detik untuk melakukan tembakan setelah menguasai bola. Shot clock kembali ke 12 detik saat pergantian penguasaan bola atau ke 14 detik pada rebound ofensif dan pelanggaran dalam kondisi tertentu.',
  },
  {
    question: 'Apa batas skor sudden death di Bola Basket 3x3?',
    answer: 'Tim pertama yang mencapai 21 poin langsung memenangkan pertandingan, berapa pun sisa waktu pada jam pertandingan. Inilah aturan sudden death.',
  },
  {
    question: 'Bagaimana pelanggaran tim memengaruhi pertandingan?',
    answer: 'Mulai dari pelanggaran tim ke-7, lawan mendapat 2 lemparan bebas. Pada pelanggaran ke-10 dan seterusnya, mereka mendapat 2 lemparan bebas ditambah penguasaan bola, yang memicu status penalti.',
  },
];

const howTo = [
  {
    name: 'Atur Nama Tim',
    text: 'Masukkan nama kustom untuk dua regu streetball untuk menyesuaikan tampilan HUD.',
  },
  {
    name: 'Catat Poin dan Penguasaan Bola',
    text: 'Ketuk lapangan aspal interaktif untuk menambah 1 poin (di dalam garis lengkung) atau 2 poin (di luar garis lengkung) dan alihkan indikator penguasaan bola.',
  },
  {
    name: 'Kendalikan Shot Clock',
    text: 'Ketuk shot clock untuk mereset ke 12 detik, klik reset sekunder untuk 14 detik, atau ketuk dua kali untuk menjeda hitungan mundur.',
  },
  {
    name: 'Kelola Pelanggaran Tim',
    text: 'Lacak pelanggaran tim menggunakan penghitung, yang berubah menjadi merah saat memasuki status penalti (7+ pelanggaran).',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, i) => ({
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

export const content: StreetballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Papan Skor Streetball 3x3 Online Gratis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mencatat skor di pertandingan basket 3v3 yang cepat bisa jadi sulit sambil mengelola shot clock yang singkat dan melacak pelanggaran tim. Papan skor streetball 3x3 online gratis ini menawarkan tema aspal industrial dengan gaya neon kontras tinggi. Secara otomatis menangani shot clock 12 detik, jam pertandingan, sistem penalti pelanggaran, dan indikator penguasaan bola.',
    },
    {
      type: 'title',
      text: 'Aturan Skor dan Shot Clock FIBA 3x3 Streetball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Streetball FIBA 3x3 berbeda dari basket tradisional 5v5. Pertandingan berlangsung selama satu periode 10 menit atau berakhir segera saat sebuah tim mencapai 21 poin (sudden death). Tembakan di dalam garis lengkung dan lemparan bebas bernilai 1 poin, sementara tembakan dari belakang garis lengkung 6,75m bernilai 2 poin. Shot clock 12 detik memaksa permainan ofensif yang cepat, dan pemain harus mengeluarkan bola ke belakang garis lengkung saat terjadi pergantian penguasaan bola.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Permainan Santai',
          description: 'Pencatatan skor cepat untuk basket jalanan dengan teman-teman di lapangan lokal.',
          icon: 'mdi:basketball',
          points: ['Pemicu poin sederhana', 'Tata letak responsif', 'Bekerja offline'],
        },
        {
          title: 'Pertandingan Turnamen',
          description: 'Cocok untuk turnamen 3x3 resmi dan liga streetball.',
          icon: 'mdi:trophy-outline',
          points: ['Hitungan mundur 10 menit', 'Sudden death di 21 poin', 'Status penalti pelanggaran'],
        },
        {
          title: 'Dasbor Wasit',
          description: 'Dirancang untuk wasit mengelola reset shot clock cepat dan penguasaan bola.',
          icon: 'mdi:school',
          points: ['Reset shot clock 12s dan 14s', 'Suara bel', 'Gestur tombol taktil'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kontrol Interaktif dan Animasi Taktil',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Shot Clock 12 Detik</strong> berkedip merah dan menampilkan desimal di bawah 4 detik, diikuti oleh suara bel simulasi.',
        '<strong>Setengah Lapangan Beton Interaktif</strong> memungkinkan Anda mengetuk area 1 poin dan 2 poin untuk mencatat skor langsung pada diagram.',
        '<strong>Peringatan Penghitung Pelanggaran</strong> berubah merah dan berguncang untuk menunjukkan penalti pelanggaran tim (7+ dan 10+ pelanggaran).',
        '<strong>Indikator Pembersihan Bola</strong> menampilkan pengingat saat penguasaan bola berubah hingga bola dibersihkan ke belakang garis lengkung.',
        '<strong>Pelacak Timeout</strong> memicu hitungan mundur 30 detik dengan peringatan suara kustom.',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Menggunakan Pelacak Streetball Digital?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Papan skor digital menghilangkan perdebatan tentang skor, pelanggaran, atau pelanggaran shot clock di lapangan aspal. Angka neon terang mudah dibaca dari jarak jauh, dan pengingat penguasaan bola serta pembersihan otomatis memastikan pertandingan berjalan lancar tanpa gangguan.',
    },
  ],
  ui: {
    teamA: 'Tim 1',
    teamB: 'Tim 2',
    points: 'Poin',
    fouls: 'Pelanggaran',
    timeouts: 'Timeout',
    shotClock: 'Shot Clock',
    reset: 'Reset',
    resetConfirm: 'Reset pertandingan? Semua data akan hilang.',
    cancel: 'Batal',
    gameTime: 'Waktu',
    possession: 'Penguasaan',
    clearBall: 'Bersihkan Bola',
    matchWon: 'Pertandingan Dimenangkan',
    timeoutActive: 'Timeout',
    penalty: 'Penalti',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar Layar Penuh',
    overtime: 'Perpanjangan Waktu',
    ptsInside: '+1 Poin',
    ptsOutside: '+2 Poin',
    toggleSound: 'Alihkan Suara',
    soundOn: 'Suara Hidup',
    soundOff: 'Suara Mati',
  },
};
