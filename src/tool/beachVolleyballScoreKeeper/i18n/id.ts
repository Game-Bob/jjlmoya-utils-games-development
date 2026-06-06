import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'papan-skor-voli-pantai';
const title = 'Papan Skor Voli Pantai & Pelacak Rotasi';
const description = 'Lacak skor voli pantai, urutan rotasi servis, pergantian sisi karena angin, dan set dengan visualisasi lapangan pasir emas interaktif tampilan atas.';

const faq = [
  {
    question: 'Kapan tim berganti sisi dalam Voli Pantai?',
    answer: 'Untuk memastikan keadilan dalam kondisi luar ruangan (angin, matahari, pasir), tim berganti sisi setiap 7 poin selama dua set pertama, dan setiap 5 poin selama set ketiga tiebreak.',
  },
  {
    question: 'Bagaimana cara kerja rotasi servis dalam Voli Pantai?',
    answer: 'Setiap tim memiliki 2 pemain yang harus bergantian melakukan servis. Ketika sebuah tim memenangkan service break (side-out), mereka harus merotasi server sehingga pemain yang tidak melakukan servis terakhir kali menjadi server berikutnya.',
  },
  {
    question: 'Berapa banyak poin yang dibutuhkan untuk memenangkan satu set Voli Pantai?',
    answer: 'Set 1 dan 2 dimainkan hingga 21 poin. Jika diperlukan set ketiga, dimainkan hingga 15 poin. Dalam semua kasus, sebuah tim harus menang dengan selisih minimal 2 poin.',
  },
];

const howTo = [
  {
    name: 'Atur Susunan Pemain',
    text: 'Masukkan nama kustom untuk dua pemain dari Tim A dan Tim B.',
  },
  {
    name: 'Catat Poin',
    text: 'Ketuk kartu tim atau klik pada lapangan pasir interaktif untuk menambah poin. Susunan pemain dan rotasi diperbarui secara otomatis.',
  },
  {
    name: 'Ikuti Peringatan Ganti Sisi',
    text: 'Saat banner tukar sisi muncul, lakukan pergantian sisi secara fisik dan klik tombol tukar untuk membalik orientasi lapangan.',
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

export const content: BeachVolleyballLocaleContent = {
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
      text: 'Papan Skor Voli Pantai Online & Pelacak Rotasi Servis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Melacak urutan servis dan posisi tim di bawah terik matahari bisa menjadi sulit. Papan skor voli pantai profesional ini memiliki tata letak lapangan digital bertekstur pasir dengan kontras tinggi yang dioptimalkan untuk visibilitas luar ruangan. Ini mencegah masalah pembacaan akibat silau, mengotomatiskan aturan pergantian sisi, dan melacak pemain mana yang harus melakukan servis setelah setiap poin side-out.',
    },
    {
      type: 'title',
      text: 'Memahami Rotasi Voli Pantai dan Aturan Servis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Meskipun tidak ada posisi tetap atau pelanggaran rotasi berdasarkan lokasi lapangan dalam voli pantai 2 lawan 2, pemain harus benar-benar bergantian melakukan servis. Setiap kali tim penerima memenangkan reli (dikenal sebagai side-out), mereka mendapatkan hak untuk melakukan servis. Pemain yang tidak melakukan servis saat timnya sebelumnya melakukan servis harus menjadi server baru. Melakukan servis di luar urutan adalah pelanggaran dan mengakibatkan poin untuk lawan. Papan digital ini menampilkan indikator servis aktif dan bola memantul di samping node lingkaran pemain untuk mencegah kesalahan rotasi.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Aturan Resmi FIVB',
          description: 'Memenuhi pedoman penilaian resmi, termasuk batas set dan pergantian sisi.',
          icon: 'mdi:volleyball',
          points: ['Set hingga 21 (tiebreak hingga 15)', 'Keharusan menang dengan selisih 2', 'Pergantian sisi otomatis'],
        },
        {
          title: 'Pelacakan Rotasi',
          description: 'Tidak perlu berdebat atau bingung tentang giliran siapa untuk melakukan servis.',
          icon: 'mdi:account-sync-outline',
          points: ['Indikator servis menyala', 'Inisial dipetakan di pasir', 'Modal overlay susunan pemain'],
        },
        {
          title: 'Optimasi Luar Ruangan',
          description: 'Dibangun untuk bermain di lapangan pasir di bawah sinar matahari langsung.',
          icon: 'mdi:weather-sunny',
          points: ['Tema kuning kontras tinggi', 'Wake Lock ketahanan layar', 'Gerakan gesek untuk membatalkan skor'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fitur Interaktif & Pengaturan Permainan',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Lapangan SVG Pasir Emas:</strong> Mencerminkan keadaan permainan secara visual. Ketuk langsung di setengah lapangan mana pun untuk memberikan poin ke tim tersebut.',
        '<strong>Animasi Rotasi Lapangan:</strong> Saat peringatan pergantian sisi aktif, mengklik tombol switch akan memutar seluruh lapangan SVG 180 derajat sehingga tampilan sejajar dengan posisi fisik Anda.',
        '<strong>Alarm Pergantian Sisi FIVB:</strong> Menampilkan banner peringatan visibilitas tinggi ketika skor gabungan merupakan kelipatan 7 (di set 1 dan 2) atau kelipatan 5 (di set final).',
        '<strong>Partikel Percikan Pasir:</strong> Memberikan umpan balik visual pada perubahan skor dengan partikel pasir animasi yang meledak dari koordinat ketukan.',
        '<strong>Kontrol Batalkan dengan Gerakan:</strong> Gesek ke bawah pada kartu untuk membatalkan poin terakhir yang dicatat secara instan.',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Tim Berganti Sisi dalam Voli Pantai',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tidak seperti voli dalam ruangan, pertandingan voli pantai sangat dipengaruhi oleh elemen lingkungan seperti silau matahari, panas, kekuatan angin, dan kondisi pasir. Sering berganti sisi memastikan tidak ada tim yang mendapatkan keuntungan tidak adil karena arah angin yang menguntungkan atau matahari yang menyilaukan. Aturan menentukan pergantian sisi setiap 7 poin selama dua set pertama, dan setiap 5 poin selama set ketiga.',
    },
  ],
  ui: {
    teamA: 'Tim 1',
    teamB: 'Tim 2',
    points: 'Poin',
    sets: 'Set',
    reset: 'Reset',
    resetConfirm: 'Reset pertandingan? Semua skor dan susunan pemain akan hilang.',
    cancel: 'Batal',
    switchSides: 'Ganti Sisi',
    switchSidesDesc: 'Skor kumulatif mencapai ambang tukar!',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar Layar Penuh',
    player1: 'Pemain 1',
    player2: 'Pemain 2',
    serving: 'Melakukan Servis',
    winner: 'Pemenang',
    undo: 'Batalkan',
  },
};
