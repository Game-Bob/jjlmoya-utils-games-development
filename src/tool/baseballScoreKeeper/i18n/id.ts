import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'pencatat-skor-baseball';
const title = 'Pencatat Skor Baseball dan Softball Premium dengan Pelacak Diamond';
const description = 'Lacak skor baseball langsung dengan runs, hits dan errors. Diamond visual dengan posisi pelari, penghitung bolanya dan strike, serta riwayat inning per inning.';

const faqData = [
  {
    question: 'Bagaimana cara kerja penghitung dalam baseball?',
    answer: 'Penghitung menunjukkan jumlah bola dan strike pada batter saat ini. Bola maksimal 4 untuk walk. Strike maksimal 3 untuk strikeout. Batas dapat disesuaikan untuk liga remaja.',
  },
  {
    question: 'Apa yang ditampilkan oleh diamond baseball interaktif?',
    answer: 'Diamond menunjukkan base pertama, kedua dan ketiga. Mengetuk base akan menyorotnya dengan warna oranye untuk menandakan ada pelari di base tersebut. Pelari maju secara otomatis saat terjadi hit.',
  },
  {
    question: 'Bagaimana runs, hits dan errors dilacak?',
    answer: 'Matriks R H E menampilkan runs, hits dan errors untuk kedua tim. Riwayat inning per inning menunjukkan bagaimana skor terbentuk sepanjang semua inning.',
  },
];

const howToData = [
  {
    name: 'Catat Setiap Lemparan',
    text: 'Ketuk Strike, Ball, Foul, Hit atau Out untuk mencatat setiap lemparan. Penghitung diperbarui secara otomatis berdasarkan hasilnya.',
  },
  {
    name: 'Kelola Pelari di Base',
    text: 'Ketuk base pada diamond untuk menempatkan atau menghapus pelari. Saat terjadi hit, pelari maju secara otomatis.',
  },
  {
    name: 'Pantau Perkembangan Inning',
    text: 'Tampilan inning menunjukkan setengah inning saat ini. Setelah tiga out, pertandingan otomatis beralih antara babak atas dan bawah.',
  },
  {
    name: 'Tinjau Box Score',
    text: 'Periksa ringkasan R H E dan kisi riwayat inning yang dapat digulir untuk melihat seluruh perkembangan skor.',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Pencatat Skor Baseball Gratis Online: Lacak Runs Hits Errors dengan Diamond Langsung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Butuh pencatat skor baseball yang andal untuk pertandingan Anda berikutnya? Alat online gratis ini melacak runs, hits dan errors sambil menampilkan diamond interaktif langsung dengan posisi pelari secara waktu nyata. Setiap lemparan berarti dan papan skor digital kami memastikan Anda tidak pernah kehilangan jejak penghitung, out, atau inning. Baik Anda melatih liga remaja, mencatat skor untuk turnamen softball, atau mengelola pertandingan SMA, alat ini menangani seluruh box score secara otomatis sehingga Anda dapat fokus pada aksi di lapangan.',
    },
    {
      type: 'title',
      text: 'Bagaimana Papan Skor Baseball Ini Menghemat Waktu dan Mencegah Kesalahan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pencatatan skor manual rentan terhadap kesalahan, terutama selama pertandingan cepat. Satu strike terlewat atau pelari yang terabaikan dapat mengacaukan seluruh box score. Pencatat skor digital ini mengotomatiskan bagian yang membosankan. Ketuk Strike, Ball, Foul, Hit atau Out dan papan segera memperbarui penghitung. Saat batter walk atau strikeout, alat ini mereset penghitung secara otomatis. Setelah tiga out, alat ini membalikkan inning dari atas ke bawah dan mencatat runs. Matriks R H E dan kisi riwayat inning per inning memberi Anda gambaran lengkap pertandingan dalam sekejap.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Penghitung Lemparan Langsung',
          description: 'Pelacakan otomatis bola dan strike dengan deteksi walk dan strikeout untuk setiap giliran memukul.',
          icon: 'mdi:baseball',
          points: ['Bola terhitung hingga 4', 'Strike terhitung hingga 3', 'Reset otomatis saat keputusan'],
        },
        {
          title: 'Manajemen Pelari',
          description: 'Diamond interaktif menunjukkan dengan tepat siapa yang berada di base pertama, kedua atau ketiga.',
          icon: 'mdi:diamond-stone',
          points: ['Ketuk base untuk menempatkan', 'Sorotan visual saat terisi', 'Bersihkan saat ganti inning'],
        },
        {
          title: 'Box Score Lengkap',
          description: 'Statistik R H E lengkap dengan riwayat skor inning per inning yang dapat digulir.',
          icon: 'mdi:scoreboard-outline',
          points: ['Runs hits dan errors', 'Kisi inning per inning', 'Total berjalan untuk kedua tim'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Siapa yang Membutuhkan Pelacak Skor Baseball Ini',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini dibuat untuk siapa pun yang perlu mencatat skor: pelatih baseball remaja yang menginginkan tampilan digital yang jelas bagi pemain mereka, sukarelawan liga softball yang mengelola pertandingan tanpa pencatat skor khusus, orang tua yang mengikuti pertandingan anak mereka dari tribun, dan wasit yang menginginkan sistem verifikasi sekunder. Antarmuka berfungsi di perangkat apa pun, dari smartphone di ruang istirahat hingga tablet yang dipasang di pagar atau laptop di bangku cadangan. Tidak perlu instalasi, cukup buka browser dan mulai mencatat skor.',
    },
    {
      type: 'list',
      items: [
        '<strong>Manajemen Penghitung Otomatis:</strong> Bola dan strike direset secara otomatis setelah walk, strikeout, hit dan out. Tidak perlu reset manual.',
        '<strong>Diamond dengan Sentuhan:</strong> Ketuk base pertama, kedua atau ketiga untuk menempatkan atau menghapus pelari. Diamond menyala emas untuk menunjukkan base yang terisi.',
        '<strong>Skor Inning per Inning:</strong> Setiap setengah inning dicatat dalam kisi yang dapat digulir. Lihat persis bagaimana setiap tim mencetak skor di seluruh sembilan inning.',
        '<strong>Tanpa Pengaturan:</strong> Buka halaman dan mulai mencatat skor segera. Sesuaikan nama tim dengan mengetuk label di atas skor.',
      ],
    },
    {
      type: 'title',
      text: 'Pencatatan Skor Baseball yang Sederhana: Penghitung, Diamond dan Box Score di Satu Tempat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mencatat skor dalam baseball membutuhkan pelacakan beberapa hal sekaligus: penghitung bola dan strike, jumlah out, base mana yang memiliki pelari, runs untuk setiap tim, dan inning saat ini. Kehilangan jejak salah satu dari ini menciptakan kebingungan dan catatan yang tidak akurat. Alat ini menggabungkan semuanya ke dalam satu layar. Titik penghitung menunjukkan bola dan strike sekilas. Diamond menunjukkan posisi pelari. Tabel R H E menampilkan box score lengkap. Dan kisi inning bergulir secara horizontal untuk menunjukkan seluruh riwayat skor. Semuanya diperbarui secara waktu nyata dengan setiap ketukan.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Pelatih', html: '<p>Jaga papan skor digital yang jelas terlihat oleh seluruh tim dari ruang istirahat.</p>' },
        { type: 'card', title: 'Sukarelawan', html: '<p>Tidak perlu pengalaman mencatat skor. Alat ini menangani semua pelacakan kompleks secara otomatis.</p>' },
        { type: 'card', title: 'Orang Tua', html: '<p>Pantau pertandingan dari tribun dengan tampilan skor waktu nyata yang andal di ponsel Anda.</p>' },
        { type: 'card', title: 'Pemain', html: '<p>Tinjau skor inning per inning setelah pertandingan untuk menganalisis performa.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Pencatat Skor Baseball',
    description: 'Lacak runs, hits dan errors dengan tampilan diamond.',
    away: 'Tamu',
    home: 'Tuan Rumah',
    runs: 'R',
    hits: 'H',
    errors: 'E',
    inning: 'Inning',
    topInning: 'Atas',
    bottomInning: 'Baw',
    balls: 'Bola',
    strikes: 'Strike',
    outs: 'Out',
    strikeBtn: 'Strike',
    ballBtn: 'Ball',
    foulBtn: 'Foul',
    hitBtn: 'Hit',
    outBtn: 'Out',
    walkBtn: 'Walk',
    runBtn: '+1 Run',
    errorBtn: 'Error',
    newBatter: 'Batter Baru',
    resetMatch: 'Reset Pertandingan',
    resetConfirm: 'Reset pertandingan saat ini? Semua skor akan hilang.',
    cancel: 'Batal',
    confirm: 'Konfirmasi',
    total: 'Total',
    fullscreen: 'Layar Penuh',
    toggleSound: 'Suara',
  },
};
