import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'papan-skor-olahraga';
const title = 'Papan Skor Olahraga Online: Penghitung Skor Gratis (2026)';
const description =
  'Papan skor digital dengan tombol raksasa untuk seluler. Ideal untuk padel, ping-pong, dan sepak bola. Tanpa iklan yang mengganggu di tengah permainan. Sederhana dan cepat.';

const faqData = [
  {
    question: 'Apakah ini bekerja tanpa koneksi internet?',
    answer:
      'Ya, setelah halaman dimuat, papan skor bekerja sepenuhnya secara offline. Anda tidak memerlukan data atau WiFi selama pertandingan. Semuanya disimpan secara lokal di browser Anda.'
  },
  {
    question: 'Dapatkah saya menggunakan papan skor untuk tenis dan padel?',
    answer:
      'Ya, mode Tenis/Padel secara otomatis menangani urutan 15-30-40-AD dan melacak set serta game sesuai dengan aturan resmi. Sempurna untuk pertandingan persahabatan.'
  },
  {
    question: 'Dapatkah ini ditampilkan dalam layar penuh?',
    answer:
      'Ya, Anda dapat mengaktifkan mode layar penuh dari browser Anda (F11 di PC, atau tombol layar penuh di seluler). Angka memenuhi 80% layar untuk visibilitas maksimum.'
  },
  {
    question: 'Bagaimana cara memperbaiki poin jika saya melakukan kesalahan?',
    answer:
      'Ada tombol terpisah untuk mengurangi poin pada setiap kartu pemain. Anda dapat dengan cepat memperbaiki kesalahan tanpa harus mengatur ulang seluruh papan skor.'
  },
  {
    question: 'Apakah ini berfungsi untuk bola basket dengan keranjang 1, 2, dan 3 poin?',
    answer:
      'Ya, dalam mode Bola Basket akan muncul tombol khusus +1, +2, dan +3 untuk mencatat skor setiap permainan dengan cepat tanpa ketukan tambahan.'
  },
  {
    question: 'Apakah papan skor secara otomatis menangani servis dalam ping-pong?',
    answer:
      'Ya, dalam mode Ping Pong indikator servis berputar secara otomatis setiap 2 poin (atau setiap poin saat deuce), mengikuti aturan resmi ITTF.'
  },
];

const howToData = [
  {
    name: 'Pilih olahraga Anda',
    text: 'Pilih olahraga dari pemilih di bagian atas: Bebas, Tenis, Padel, Ping Pong, Bola Voli, atau Bola Basket.'
  },
  {
    name: 'Sesuaikan nama',
    text: 'Ketuk "KANDANG" atau "TANDANG" untuk mengubah nama pemain atau tim.'
  },
  {
    name: 'Tambah poin dengan satu ketukan',
    text: 'Ketuk area papan skor yang besar untuk menambah poin. Dalam bola basket, gunakan tombol +1, +2, atau +3.'
  },
  {
    name: 'Tunjukkan servis',
    text: 'Gunakan tombol servis di sudut bawah untuk menandai siapa yang melakukan servis. Indikator kuning muncul secara otomatis.'
  },
  {
    name: 'Perbaiki kesalahan',
    text: 'Gunakan tombol "−" jika Anda menambahkan poin secara tidak sengaja. Tidak perlu mengatur ulang seluruh papan skor.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: 'Wasit Digital di Saku Anda',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dalam panasnya pertandingan, sangat mudah untuk salah hitung. "Apakah tadi 4-3 atau 3-4?". Papan skor ini dirancang untuk menyelesaikan perselisihan tersebut sebelum dimulai. Dengan antarmuka <strong>tombol raksasa</strong> yang memenuhi hampir seluruh kartu, Anda dapat menambah poin tanpa melihat layar, cukup dengan menjangkaukan lengan ke ponsel di bangku cadangan.'
    },
    {
      type: 'title',
      text: 'Pemilih Olahraga Cerdas',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Mode Tenis / Padel',
          description:
            'Antarmuka yang diadaptasi dengan penghitung Set dan Game. Sistem secara otomatis menangani urutan 15-30-40-AD.',
          icon: 'mdi:tennis',
          points: ['Aturan resmi', 'Manajemen keuntungan', 'Penghitung set']
        },
        {
          title: 'Mode Bola Basket',
          description:
            'Papan skor mendeteksi olahraga dan mengubah antarmukanya. Tombol khusus +1, +2, dan +3.',
          icon: 'mdi:basketball',
          points: ['Tembakan tiga poin cepat', 'Lemparan bebas', 'Tanpa ketukan tambahan']
        },
        {
          title: 'Mode Ping Pong',
          description:
            'Lupakan tentang menghafal giliran siapa yang melakukan servis. Indikator visual berputar secara otomatis setiap 2 poin.',
          icon: 'mdi:table-tennis',
          points: ['Aturan ITTF', 'Rotasi servis', 'Mode deuce (11 poin)']
        },
      ]
    },
    {
      type: 'title',
      text: 'Fitur yang Dirancang untuk Olahraga',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Visibilitas Tinggi:</strong> Angka yang memenuhi 80% layar untuk keterbacaan maksimum di bawah sinar matahari.',
        '<strong>Nama yang Dapat Diedit:</strong> Ketuk "KANDANG" atau "TANDANG" untuk menyetel nama pemain.',
        '<strong>Pencegahan Kesalahan:</strong> Tombol minus terpisah untuk memperbaiki kesalahan dengan cepat tanpa memulai ulang.',
        '<strong>Bekerja Offline:</strong> Setelah dimuat, tidak perlu internet selama pertandingan.',
      ]
    },
  ],
  ui: {
    playerA: 'KANDANG',
    playerB: 'TANDANG',
    swapSides: 'Tukar Sisi',
    reset: 'Atur Ulang',
    serve: 'Servis',
    sets: 'Set',
    games: 'Game',
    victory: 'MENANG!',
    newGame: 'Permainan Baru',
    continueGame: 'Lanjutkan Bermain',
    resetConfirm: 'Atur ulang papan skor?',
    sportSimple: 'Bebas (Sepak Bola, Tic-Tac-Toe...)',
    sportTennis: 'Tenis',
    sportPadel: 'Padel',
    sportPingpong: 'Ping Pong',
    sportVolleyball: 'Bola Voli',
    sportBasket: 'Bola Basket'
  }
};
