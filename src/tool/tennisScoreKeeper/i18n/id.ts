import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'pencatat-skor-tenis';
const title = 'Pencatat Skor Tenis Online : Pelacak Pertandingan Gratis';
const description = 'Lacak pertandingan tenis dengan skor set dan game. Pencatat skor tenis online gratis untuk pertandingan dan turnamen. Tidak perlu registrasi.';

const faqData = [
  {
    question: 'Bagaimana cara kerja skor tenis?',
    answer: 'Pertandingan tenis dimainkan dalam game dan set. Sebuah game diberi skor Love, 15, 30, 40. Skor 40-40 disebut Deuce, yang mengharuskan pemain menang dengan 2 poin berturut-turut. Set dimenangkan oleh pemain pertama yang memenangkan 6 game dengan selisih 2 game. Jika skor mencapai 6-6, tiebreak dimainkan.',
  },
  {
    question: 'Bagaimana cara menggunakan papan skor tenis ini?',
    answer: 'Tekan tombol plus untuk pemain saat mereka mencetak skor. Skor diperbarui secara otomatis. Pencatat skor melacak urutan servis, skor game, set saat ini, dan riwayat set yang telah selesai.',
  },
  {
    question: 'Kapan pemain tenis berganti sisi?',
    answer: 'Pemain tenis berganti sisi setelah game pertama, ketiga, dan setiap game ganjil berikutnya dari setiap set. Mereka juga berganti sisi di akhir set kecuali jumlah total game genap. Dalam tiebreak, pemain berganti sisi setiap 6 poin.',
  },
  {
    question: 'Apakah papan skor ini mendukung tiebreak?',
    answer: 'Ya, saat set mencapai 6-6, pencatat skor secara otomatis masuk ke mode tiebreak di mana poin dihitung secara numerik hingga 7. Seorang pemain harus menang dengan selisih 2 poin untuk menyelesaikan tiebreak dan set.',
  },
  {
    question: 'Bisakah saya menggunakannya di ponsel?',
    answer: 'Ya, antarmuka dioptimalkan untuk perangkat seluler dengan tombol besar. Anda juga dapat masuk ke mode layar penuh untuk menjaga layar tetap aktif selama pertandingan.',
  },
];

const howToData = [
  {
    name: 'Atur nama pemain',
    text: 'Ketuk bidang input nama pemain untuk mengetik nama khusus. Nama disimpan di browser Anda.',
  },
  {
    name: 'Tambahkan poin',
    text: 'Klik tombol plus untuk pemain yang memenangkan reli. Skor akan diperbarui secara otomatis.',
  },
  {
    name: 'Kelola hasil set',
    text: 'Pelacak secara otomatis menyimpulkan game dan set. Ia mengarsipkan set yang selesai dan beralih ke set berikutnya.',
  },
  {
    name: 'Tukar sisi',
    text: 'Papan skor memberi tahu Anda saat pemain perlu berganti sisi. Tekan tombol tukar untuk menukar sisi visual.',
  },
  {
    name: 'Kesimpulan Pertandingan',
    text: 'Pelacak secara otomatis menyimpulkan pertandingan berdasarkan aturan tenis dan mengumumkan pemenang.',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Pencatat Skor Tenis Online Gratis dan Pelacak Pertandingan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mencatat skor tenis bisa menjadi tantangan dengan istilah seperti deuce, advantage, dan tiebreak. Pencatat skor tenis online gratis ini mengotomatiskan seluruh proses. Anda hanya perlu menekan tombol plus saat pemain mencetak skor. Alat ini mengelola poin, game, set, dan pergantian sisi secara otomatis secara real-time.',
    },
    {
      type: 'title',
      text: 'Cara Kerja Skor Tenis di Pencatat Skor Ini',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenis menggunakan struktur penilaian yang unik. Sebuah game standar berjalan melalui Love, 15, 30, 40, dan Game. Saat kedua pemain mencapai 40, skor adalah Deuce. Dari Deuce, seorang pemain harus mencetak dua poin berturut-turut untuk memenangkan game. Poin pertama disebut Advantage, dan poin berikutnya mengamankan game. Jika pemain lawan memenangkan poin berikutnya, skor kembali ke Deuce. Set dimenangkan oleh pemain pertama yang memenangkan 6 game dengan selisih 2. Saat set mencapai 6-6, tiebreak dimainkan hingga 7 poin.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pertandingan Santai',
          description: 'Skor cepat dan mudah untuk pertandingan tenis lokal dengan teman.',
          icon: 'mdi:tennis',
          points: ['Skor satu sentuhan', 'Indikator tukar sisi', 'Bekerja offline'],
        },
        {
          title: 'Permainan Klub',
          description: 'Pelacakan sempurna untuk pertandingan klub dan turnamen.',
          icon: 'mdi:trophy-outline',
          points: ['Arsip riwayat set', 'Best of 3 atau 5 set', 'Tata letak ramah seluler'],
        },
        {
          title: 'Mode Turnamen',
          description: 'Dirancang untuk pelacakan pertandingan resmi dan penggunaan wasit.',
          icon: 'mdi:school',
          points: ['Dukungan Tiebreak', 'Papan skor layar penuh', 'Keamanan data lokal'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fitur Khusus Pencatat Skor',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Logika aturan tenis otomatis</strong> menghitung Love, 15, 30, 40, deuce, advantage, dan tiebreak secara otomatis.',
        '<strong>Arsip riwayat set</strong> menampilkan skor set sebelumnya sekilas.',
        '<strong>Bantuan ganti sisi</strong> mengingatkan pemain saat mereka perlu bertukar sisi.',
        '<strong>Perayaan skor yang hidup</strong> menampilkan partikel mengambang untuk poin yang dimenangkan.',
        '<strong>Best of 3 atau 5 set</strong> pengaturan format pertandingan yang dapat dikonfigurasi.',
        '<strong>Nama disimpan secara lokal</strong> menyimpan nama khusus di seluruh kunjungan.',
      ],
    },
    {
      type: 'title',
      text: 'Pencatatan Digital vs Pelacakan Manual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Papan skor manual membutuhkan konsentrasi konstan untuk memperbarui angka, mengingat rotasi servis, memeriksa tiebreak, dan menghitung pergantian sisi. Pencatat skor tenis digital ini menangani setiap aturan tenis secara otomatis. Anda dapat fokus sepenuhnya pada pertandingan sementara alat ini memperbarui riwayat set dan mengumumkan pemenang dengan upacara perayaan.',
    },
  ],
  ui: {
    playerA: 'Pemain 1',
    playerB: 'Pemain 2',
    winnerLabel: 'JUARA',
    finishMatch: 'Selesaikan Pertandingan',
    newGame: 'Set Baru',
    serving: 'Melakukan Servis',
    changeSide: 'Ganti Sisi',
    swapHint: 'Ketuk untuk ganti sisi',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Poin Game',
    setPoint: 'Poin Set',
    matchPoint: 'Poin Pertandingan',
    mode: 'Set',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Poin',
    reset: 'Setel Ulang',
    resetConfirm: 'Setel ulang pertandingan? Semua data akan hilang.',
    cancel: 'Batal',
    fullscreen: 'Layar penuh',
    exitFullscreen: 'Keluar layar penuh',
    deuce: 'Deuce',
    advantage: 'Advantage',
    tiebreak: 'Tiebreak',
  },
};
