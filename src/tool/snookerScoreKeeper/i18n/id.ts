import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'penghitung-break-dan-pelacak-frame-snooker';
const title = 'Pelacak Frame Snooker dan Kalkulator Break ';
const description = 'Lacak skor frame snooker langsung, hitung nilai break terkini, tampilkan sisa poin di meja, dan dapatkan status defisit secara langsung seperti kebutuhan snooker.';

const faqData = [
  {
    question: 'Bagaimana cara menghitung sisa poin maksimal di meja snooker?',
    answer: 'Setiap bola merah yang tersisa bernilai 8 poin (1 poin untuk bola merah itu sendiri ditambah 7 poin untuk memasukkan bola hitam). Setelah semua bola merah habis, sisa bola berwarna bernilai total 27 poin.',
  },
  {
    question: 'Apa arti membutuhkan snooker di kalkulator ini?',
    answer: 'Artinya defisit skor lebih besar dari total sisa poin di meja, sehingga seorang pemain harus memaksa lawan melakukan foul untuk mengejar ketertinggalan.',
  },
  {
    question: 'Apa itu situasi bola hitam penentu?',
    answer: 'Skenario hitam penentu terjadi ketika semua bola sudah dimasukkan dan skor frame imbang, sehingga diperlukan bola hitam yang ditempatkan kembali untuk menentukan pemenang.',
  },
];

const howToData = [
  {
    name: 'Atur Nama Pemain',
    text: 'Masukkan nama khusus untuk kedua pemain snooker guna menyesuaikan tampilan papan skor.',
  },
  {
    name: 'Masukkan Bola dan Bangun Break',
    text: 'Ketuk bola-bola felt bercahaya untuk mencatat bola yang dimasukkan secara berurutan. Kalkulator akan mengunci warna yang tidak sesuai berdasarkan aturan.',
  },
  {
    name: 'Periksa Status Defisit',
    text: 'Pantau bilah status langsung untuk melihat apakah pemain aman, membutuhkan snooker, atau jika frame masih terbuka.',
  },
  {
    name: 'Catat Penalti Foul',
    text: 'Buka menu foul untuk menetapkan poin penalti langsung ke lawan dan mengganti giliran pemain aktif.',
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
    image: undefined,
    url: undefined,
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Papan Skor Snooker Online Gratis dan Penghitung Break',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Permudah frame snooker Anda dengan papan skor digital kami. Alat ini menghitung poin break aktif, sisa poin di meja, dan menampilkan selisih skor secara akurat. Antarmuka bergaya felt menyediakan indikator interaktif yang menyala secara dinamis berdasarkan urutan aturan snooker. Baik Anda sedang memimpin turnamen klub lokal atau melacak pertandingan persahabatan di rumah, aplikasi ini menangani semua perhitungan secara otomatis.',
    },
    {
      type: 'title',
      text: 'Memahami Penilaian Snooker dan Perhitungan Defisit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Permainan snooker standar dimulai dengan lima belas bola merah yang masing-masing bernilai satu poin. Pemain harus bergantian antara bola merah dan bola berwarna. Setiap bola berwarna yang dimasukkan dikembalikan ke tempatnya hingga semua bola merah habis. Setelah itu, bola berwarna harus dimasukkan sesuai urutan numeriknya dari kuning hingga hitam. Kalkulator ini melacak urutan tersebut dan memperingatkan saat snooker diperlukan. Dengan menghitung selisih skor dan poin maksimal yang tersisa di meja, alat ini menentukan secara tepat kapan sebuah frame telah mencapai ambang kemenangan.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Papan Skor Frame',
          description: 'Lacak skor frame dan giliran pemain pada tampilan kontras tinggi.',
          icon: 'mdi:scoreboard-outline',
          points: ['Penyorotan pemain aktif yang jelas', 'Entri nama pemain khusus', 'Dukungan undo satu klik'],
        },
        {
          title: 'Kalkulator Break',
          description: 'Pelacakan waktu nyata break potting aktif dengan catat warna bola.',
          icon: 'mdi:billiards',
          points: ['Garis waktu rivayat potting', 'Kunci bola otomatis berdasarkan aturan', 'Status break dengan kode warna'],
        },
        {
          title: 'Pengukur Sisa Poin',
          description: 'Lacak poin maksimal yang tersisa di meja felt hijau.',
          icon: 'mdi:percent-outline',
          points: ['Pelacakan selisih skor', 'Peringatan kebutuhan snooker dinamis', 'Deteksi hitam penentu'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kontrol Interaktif dan Umpan Balik Suara',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>HUD Felt Taktil</strong> memungkinkan mengetuk bola untuk menambah poin dan merekamnya di garis waktu break.',
        '<strong>Tombol Aksi Foul</strong> memberikan empat hingga tujuh poin penalti ke skor lawan dan mengakhiri giliran aktif.',
        '<strong>Lampu Status Dinamis</strong> diperbarui untuk menunjukkan permainan normal, margin aman, atau kebutuhan snooker.',
        '<strong>Sintesis Audio</strong> memicu suara pocked saat memasukkan bola dan suara bel saat foul.',
      ],
    },
    {
      type: 'title',
      text: 'Aturan Foul Snooker dan Sistem Penalti Dijelaskan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Foul dalam snooker memberikan poin kepada lawan. Nilai penalti ditentukan oleh nilai bola target atau bola yang terlibat dalam foul, dengan penalti minimal empat poin. Misalnya, memasukkan bola putih cue, memukul bola berwarna sebelum bola merah, atau gagal memukul bola sama sekali menghasilkan penalti. Jika foul dilakukan saat menargetkan biru, merah muda, atau hitam, penaltinya masing-masing adalah lima, enam, atau tujuh poin. Papan skor digital ini memiliki panel foul cepat untuk dengan mudah menambahkan nilai penalti dan secara otomatis mengalihkan giliran aktif ke pemain berikutnya.',
    },
    {
      type: 'title',
      text: 'Apa yang Terjadi dalam Skenario Bola Hitam Penentu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ketika semua bola telah dimasukkan dan skor frame imbang, bola hitam ditempatkan kembali di posisi aslinya. Pemain melakukan undian untuk menentukan siapa yang akan bermain pertama, dan pemain yang pertama memasukkan bola hitam atau melakukan foul akan kalah. Aturan hitam penentu ini memastikan penyelesaian yang adil untuk pertandingan ketat tanpa memerlukan frame tambahan, dan pelacak kami secara otomatis mendeteksi status akhir pertandingan imbang ini untuk memberi tahu kedua pemain.',
    },
    {
      type: 'title',
      text: 'Mengapa Menggunakan Pelacak Snooker Digital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Perhitungan manual sisa poin dan margin defisit selama frame ketat rentan terhadap kesalahan manusia. Alat berbasis browser ini menyediakan statistik waktu nyata yang akurat, memungkinkan pemain fokus pada teknik dan strategi mereka. Dengan menyimpan garis waktu interaktif bola yang dimasukkan, wasit dapat dengan mudah memverifikasi break yang kontroversial dan menjaga kelangsungan pertandingan resmi.',
    },
  ],
  ui: {
    title: 'Papan Skor Snooker',
    description: 'Lacak skor frame dan break.',
    player1: 'Pemain 1',
    player2: 'Pemain 2',
    score: 'Skor',
    currentBreak: 'Break',
    remainingPoints: 'Sisa',
    deficit: 'Defisit',
    statusSafe: 'Aman',
    statusNeedSnookers: 'Perlu Snooker',
    statusDecidingBlack: 'Hitam Penentu',
    statusNormal: 'Normal',
    foul: 'Foul',
    foulTitle: 'Pilih Penalti Bola Foul',
    foulPoints: 'Penalti',
    foulOnRed: 'Merah/Kuning/Hijau/Coklat',
    foulOnYellow: 'Kuning',
    foulOnGreen: 'Hijau',
    foulOnBrown: 'Coklat',
    foulOnBlue: 'Biru',
    foulOnPink: 'Merah Muda',
    foulOnBlack: 'Hitam',
    reset: 'Reset',
    resetConfirm: 'Reset frame saat ini? Semua skor akan hilang.',
    cancel: 'Batal',
    confirm: 'Konfirmasi Reset',
    endTurn: 'Akhiri Giliran',
    miss: 'Miss',
    redsRemaining: 'Merah',
    pocketedBalls: 'Dimasukkan',
    toggleSound: 'Suara',
    fullscreen: 'Layar Penuh',
  },
};
