import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'papan-skor-padel';
const title = 'Papan Skor Padel: Poin Emas & Pelacak Rotasi';
const description = 'Lacak skor padel dengan aturan resmi Punto de Oro (Poin Emas), peringatan rotasi servis, tiebreak set, dan animasi pertukaran sisi lapangan yang dinamis.';

const faq = [
  {
    question: 'Apa itu Poin Emas (Punto de Oro) dalam Padel?',
    answer: 'Poin Emas adalah poin penentu yang dimainkan saat skor mencapai 40-40 (Deuce). Tidak ada permainan advantage. Tim penerima memilih apakah akan menerima servis di sisi kiri atau kanan, dan siapa pun yang memenangkan satu poin tersebut memenangkan seluruh game.',
  },
  {
    question: 'Bagaimana cara kerja format set dalam Padel?',
    answer: 'Pertandingan standar dimainkan best of 3 set, dengan setiap set dimenangkan oleh tim pertama yang mencapai 6 game (unggul 2). Jika skor mencapai 6-6, tiebreak 7 poin dimainkan. Format Golden Set opsional berakhir di 4 game dengan tiebreak di 4-4.',
  },
  {
    question: 'Kapan pemain berganti sisi dalam Padel?',
    answer: 'Pemain berganti sisi setelah game pertama, dan kemudian setiap 2 game setelahnya (ketika jumlah game dalam set saat ini ganjil, misalnya 1, 3, 5). Selama tiebreak, pemain berganti sisi setiap 6 poin.',
  },
];

const howTo = [
  {
    name: 'Konfigurasi Format Pertandingan',
    text: 'Pilih format pertandingan standar (pertama mencapai 6 game) atau format golden set yang lebih pendek (pertama mencapai 4 game).',
  },
  {
    name: 'Masukkan Nama Pemain',
    text: 'Masukkan nama tim untuk mempersonalisasi papan skor. Konfigurasi Anda disimpan secara otomatis.',
  },
  {
    name: 'Catat Poin di Lapangan',
    text: 'Ketuk salah satu sisi lapangan padel isometrik visual untuk mencetak poin. Indikator servis akan memandu Anda pada rotasi diagonal.',
  },
  {
    name: 'Tentukan Poin Emas',
    text: 'Saat deuce tercapai, pilih sisi penerima (penerima kiri atau kanan) dan klik tim pemenang untuk mengakhiri game.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Papan Skor Padel Online Gratis & Pelacak Pertandingan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Melacak skor dalam padel bisa membingungkan dengan rally cepat, tiebreak, pergantian sisi, dan aturan resmi Punto de Oro (Poin Emas). Papan skor padel online gratis ini menghilangkan kerumitan pencatatan skor. Cukup ketuk lapangan visual untuk mencatat poin, dan biarkan alat ini secara otomatis mengelola rotasi server, sisi penerima, riwayat set, dan pertukaran sisi lapangan secara real-time.',
    },
    {
      type: 'title',
      text: 'Memahami Sistem Skor Padel, Poin Emas, dan Rotasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Padel mengikuti sistem skor seperti tenis (15, 30, 40, Game) tetapi memperkenalkan aturan khusus untuk permainan yang lebih cepat. Berdasarkan aturan profesional FIP, ketika skor mencapai 40-40, Poin Emas (Punto de Oro) yang menentukan dimainkan. Tim penerima memilih sisi mana (kiri atau kanan) yang akan menerima servis, dan pemenang dari satu poin tersebut memenangkan game. Selain itu, tim harus bertukar sisi lapangan setiap kali total game yang dimainkan dalam satu set ganjil, dan setiap 6 poin selama tiebreak.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pertandingan Persahabatan',
          description: 'Pencatatan skor cepat dan bersih untuk pertandingan persahabatan dengan mitra padel Anda.',
          icon: 'mdi:tennis',
          points: ['Tambah poin satu ketukan', 'Tata letak mobile-first', 'Berfungsi offline'],
        },
        {
          title: 'Klub & Liga',
          description: 'Lacak pertandingan klub kompetitif dan turnamen lokal dengan mudah.',
          icon: 'mdi:trophy-outline',
          points: ['Arsip riwayat set', 'Set 6-game atau 4-game', 'Dukungan Poin Emas'],
        },
        {
          title: 'Mode Wasit',
          description: 'Alat lengkap untuk memimpin pertandingan resmi atau sesi latihan.',
          icon: 'mdi:school',
          points: ['Penanda servis & penerima aktif', 'Rotasi lapangan interaktif', 'Mode konsol layar penuh'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fitur Digital Lanjutan untuk Pemain Padel',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Logika Poin Emas Resmi</strong> memungkinkan tim penerima memilih sisi penerima saat deuce, menampilkan jalur servis.',
        '<strong>Indikator Lapangan Visual</strong> menunjukkan posisi server (S) dan penerima (R) secara dinamis untuk menghindari kesalahan rotasi.',
        '<strong>Pertukaran Sisi Otomatis</strong> membalik tata letak lapangan pada game ganjil atau interval tiebreak agar selalu sesuai dengan pandangan fisik Anda.',
        '<strong>Format Set Kustom</strong> mendukung set standar 6-game atau Golden Set cepat 4-game.',
        '<strong>Simpan Otomatis Browser Lokal</strong> menjaga nama pemain dan skor pertandingan saat ini tetap aman bahkan jika Anda menyegarkan halaman.',
      ],
    },
    {
      type: 'title',
      text: 'Aturan Tiebreak Padel: Standar vs Super Tiebreak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam set padel standar, jika skor mencapai 6-6 dalam game, tiebreak 7 poin standar dimainkan. Dalam tiebreak, poin dihitung secara numerik (1, 2, 3, dst.). Tim pertama yang mencapai 7 poin dengan selisih 2 memenangkan set. Pemain yang gilirannya untuk melakukan servis melakukan servis poin pertama dari sisi kanan (deuce). Selanjutnya, setiap pemain melakukan servis untuk dua poin berturut-turut, mulai dari sisi kiri (advantage). Dalam beberapa format turnamen, jika pertandingan imbang 1-1 dalam set, Super Tiebreak 10 poin dimainkan sebagai pengganti set ketiga penuh untuk menentukan pemenang pertandingan.',
    },
    {
      type: 'title',
      text: 'Pertukaran Lapangan dan Rotasi: Menjaga Keadilan dalam Padel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pertukaran lapangan sangat penting dalam padel untuk memastikan bahwa faktor lingkungan seperti sinar matahari, angin, atau ketidaksempurnaan lapangan tidak menguntungkan satu tim dibandingkan tim lainnya. Pemain harus bertukar sisi lapangan setelah game pertama setiap set, dan kemudian setelah setiap dua game (misalnya di 1-0, 2-1, 3-2, 4-3, 5-4). Papan skor padel digital kami dilengkapi animasi pertukaran sisi dinamis yang secara otomatis memutar tata letak lapangan visual sebesar 180 derajat setiap kali pemain diharuskan bertukar sisi secara fisik. Ini memastikan bahwa tim yang ditampilkan di bagian atas layar Anda selalu cocok dengan tim yang bermain di ujung jauh lapangan fisik.',
    },
    {
      type: 'title',
      text: 'Format Set Standar vs Golden Set',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sementara pertandingan standar dimainkan hingga 6 game per set, banyak liga rekreasi dan turnamen cepat mengadopsi format "Golden Set" di mana set dimainkan hanya hingga 4 game (dengan tiebreak di 4-4). Papan skor ini memungkinkan Anda beralih di antara format-format ini dengan satu ketukan di bilah alat. Terlepas dari format yang dipilih, papan skor menangani semua tiebreak, rotasi servis, dan perhitungan skor secara otomatis.',
    },
    {
      type: 'title',
      text: 'Tips Pencatatan Skor Efektif di Lapangan',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gunakan Stand Lapangan atau Dudukan Ponsel:</strong> Pasang ponsel atau tablet Anda di pagar lapangan padel setinggi net. Ini memungkinkan pemain dari kedua sisi dengan mudah melihat skor aktif dan indikator server.',
        '<strong>Personalisasi Nama Sebelum Memulai:</strong> Luangkan 10 detik untuk mengetik nama asli pemain atau tim. Ini membuat pengumuman suara (jika diaktifkan) dan papan skor visual jauh lebih menarik dan resmi.',
        '<strong>Aktifkan Mode Layar Penuh:</strong> Klik tombol layar penuh di panel header. Ini memaksimalkan antarmuka papan skor dan membantu mencegah layar mati secara otomatis selama rally panjang.',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Menggunakan Pencatat Skor Padel Digital?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alih-alih terus-menerus berdebat tentang siapa yang melakukan servis, giliran siapa untuk menerima, atau berapa skor game-nya, pelacak digital menjaga semua orang tetap selaras. Dengan menampilkan posisi server dan penerima secara visual langsung di layar, pemain dapat melirik ponsel di bangku cadangan dan tahu persis di mana harus berdiri. Ini meningkatkan tempo permainan dan mencegah kesalahan rotasi.',
    },
  ],
  ui: {
    playerA: 'Tim 1',
    playerB: 'Tim 2',
    game: 'Game',
    set: 'Set',
    tiebreak: 'Tiebreak',
    goldPoint: 'Poin Emas',
    selectReceiver: 'Pilih Penerima',
    leftReceiver: 'Penerima Kiri',
    rightReceiver: 'Penerima Kanan',
    server: 'Server',
    receiver: 'Penerima',
    changeEnds: 'Ganti Sisi',
    matchWon: 'Pertandingan Dimenangkan',
    reset: 'Atur Ulang',
    resetConfirm: 'Atur ulang pertandingan? Semua data akan hilang.',
    cancel: 'Batal',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar Layar Penuh',
    deuce: 'Deuce',
    advantage: 'Advantage',
    formatStandard: '6 Game',
    formatGoldenSet: '4 Game',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Poin Emas Penentu',
  },
};
