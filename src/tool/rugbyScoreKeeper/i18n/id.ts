import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'papan-skor-rugbi';
const title = 'Papan Skor Rugbi Premium dengan Pengatur Waktu Sin Bin dan Jam Pertandingan';
const description = 'Lacak skor pertandingan rugbi secara langsung dengan pencatatan try, konversi, penalti, dan drop goal. Kelola hitung mundur waktu sin bin dan babak pertandingan dengan papan skor stadion interaktif.';

const faqData = [
  {
    question: 'Bagaimana cara mencetak poin dalam pertandingan rugbi union?',
    answer: 'Sebuah try bernilai 5 poin dan diberikan ketika pemain menyentuhkan bola ke tanah di area gawang lawan. Tendangan konversi setelah try bernilai 2 poin. Tendangan penalti dan drop goal masing-masing bernilai 3 poin.',
  },
  {
    question: 'Apa yang terjadi ketika seorang pemain menerima kartu kuning dalam rugbi?',
    answer: 'Kartu kuning mengakibatkan skorsing sin bin. Pemain harus meninggalkan lapangan selama 10 menit waktu pertandingan aktif. Tim mereka bermain dengan satu pemain lebih sedikit selama periode ini. Pengatur waktu sin bin hanya menghitung mundur saat jam pertandingan berjalan.',
  },
  {
    question: 'Berapa lama durasi pertandingan rugbi union?',
    answer: 'Pertandingan rugbi union standar terdiri dari dua babak masing-masing 40 menit dengan jeda istirahat 10 menit. Jam pertandingan dihentikan saat cedera dan insiden serius. Waktu tambahan dapat diberikan untuk mengkompensasi penghentian.',
  },
];

const howToData = [
  {
    name: 'Catat Kejadian Skor',
    text: 'Ketuk tombol Try, Konversi, Penalti atau Drop Goal untuk mencatat poin. Setelah mengetuk Try, tombol Konversi akan menyala secara otomatis.',
  },
  {
    name: 'Kelola Hukuman Sin Bin',
    text: 'Ketuk Kartu Kuning untuk mengirim pemain ke sin bin. Masukkan nama atau nomor mereka dan hitung mundur 10 menit akan dimulai secara otomatis.',
  },
  {
    name: 'Kendalikan Waktu Pertandingan',
    text: 'Gunakan jam pertandingan untuk melacak dua babak masing-masing 40 menit. Jeda jam saat cedera dan lanjutkan saat permainan dimulai kembali.',
  },
  {
    name: 'Pantau Perkembangan Skor',
    text: 'Pantau papan skor langsung dengan poin tim tuan rumah dan tim tamu. Lihat ringkasan skor untuk melihat rincian try, konversi, penalti, dan drop goal.',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Papan Skor Rugbi Online Gratis dengan Pelacakan Pertandingan Langsung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kendalikan pencatatan skor pertandingan rugbi Anda dengan papan skor digital interaktif kami. Lacak try, konversi, penalti, dan drop goal secara langsung. Sistem manajemen sin bin secara otomatis menghitung mundur skorsing pemain, dan jam pertandingan menjaga kedua babak tetap tepat waktu. Baik Anda sedang memimpin pertandingan klub lokal atau melatih tim muda, alat ini menangani semua detail pencatatan skor dan pengaturan waktu secara otomatis.',
    },
    {
      type: 'title',
      text: 'Sistem Pencatatan Skor Rugbi Union Dijelaskan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rugbi union menawarkan empat cara untuk mencetak poin, masing-masing membutuhkan keterampilan dan strategi yang berbeda. Try adalah aksi serangan paling berharga, menghargai tim yang berhasil menembus garis pertahanan dan menyentuhkan bola di area try. Setelah try, tim yang mencetak poin melakukan tendangan konversi untuk dua poin tambahan. Tendangan penalti dan drop goal menambah kedalaman taktis, memungkinkan tim mencetak poin dari permainan terbuka atau setelah pelanggaran lawan.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Try',
          description: 'Sentuhkan bola di area try untuk lima poin.',
          icon: 'mdi:rugby',
          points: ['Lima poin', 'Membuka kesempatan konversi', 'Membutuhkan sentuhan bola ke tanah'],
        },
        {
          title: 'Konversi',
          description: 'Tendang melewati tiang gawang setelah try untuk dua poin.',
          icon: 'mdi:goal',
          points: ['Dua poin jika berhasil', 'Ditendang dari posisi try', 'Harus melewati mistar'],
        },
        {
          title: 'Tendangan Penalti',
          description: 'Tendang ke gawang setelah pelanggaran lawan untuk tiga poin.',
          icon: 'mdi:alert-octagon',
          points: ['Tiga poin', 'Bisa ditendang atau disentuh', 'Sering menentukan pertandingan ketat'],
        },
        {
          title: 'Drop Goal',
          description: 'Tendang bola yang memantul melewati tiang gawang saat permainan terbuka untuk tiga poin.',
          icon: 'mdi:circle-outline',
          points: ['Tiga poin', 'Bola harus menyentuh tanah dulu', 'Penentu kemenangan di momen kritis'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Memahami Sistem Sin Bin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sin bin adalah sistem skorsing sementara untuk pelanggaran berbahaya atau berulang. Ketika wasit menunjukkan kartu kuning, pemain harus meninggalkan lapangan selama sepuluh menit permainan aktif. Selama waktu ini, tim mereka bermain dengan satu pemain lebih sedikit, menciptakan keunggulan numerik bagi tim lawan. Pengatur waktu sin bin hanya menghitung mundur saat jam pertandingan berjalan, memastikan penegakan yang adil terlepas dari penghentian permainan.',
    },
    {
      type: 'list',
      items: [
        '<strong>Hukuman Kartu Kuning:</strong> Sepuluh menit di sin bin untuk permainan berbahaya atau pelanggaran tim berulang.',
        '<strong>Kerugian Numerik:</strong> Tim yang melanggar bermain dengan 14 pemain, bukan 15, selama periode skorsing.',
        '<strong>Kembali Otomatis:</strong> Saat pengatur waktu habis, pemain secara otomatis kembali ke pertandingan dari garis tengah.',
        '<strong>Peningkatan Kartu Merah:</strong> Kartu kuning kedua atau satu pelanggaran serius mengakibatkan kartu merah dan pengusiran permanen.',
      ],
    },
    {
      type: 'title',
      text: 'Pengaturan Waktu Pertandingan dan Manajemen Babak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pertandingan rugbi union standar dibagi menjadi dua babak masing-masing 40 menit dengan jeda istirahat 10 menit. Jam pertandingan berjalan terus menerus selama permainan aktif namun dapat dijeda oleh wasit untuk cedera, peninjauan pelanggaran serius, atau penghentian lainnya. Papan skor digital ini mencakup jam pertandingan yang presisi dengan kontrol jeda dan lanjutkan, pelacakan babak otomatis, dan indikator visual yang jelas untuk setiap periode permainan.',
    },
    {
      type: 'title',
      text: 'Mengapa Menggunakan Papan Skor Rugbi Digital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pencatatan skor manual dalam rugbi sangat menantang karena beragamnya metode pencatatan poin, kebutuhan waktu sin bin, dan manajemen babak. Alat berbasis peramban ini menyediakan pencatatan skor real-time yang akurat, hitung mundur sin bin otomatis, dan pengaturan waktu pertandingan yang presisi. Pelatih dapat fokus pada strategi permainan daripada aritmetika, wasit memiliki sistem pencatatan skor cadangan yang andal, dan pemain dapat memverifikasi status pertandingan secara sekilas.',
    },
  ],
  ui: {
    title: 'Papan Skor Rugbi',
    description: 'Lacak skor pertandingan dan pengatur waktu sin bin.',
    home: 'Tuan Rumah',
    away: 'Tamu',
    score: 'Skor',
    tryLabel: 'Try +5',
    conversion: 'Konversi +2',
    penalty: 'Penalti +3',
    dropGoal: 'Drop Goal +3',
    conversionYes: 'Ya',
    conversionNo: 'Tidak',
    sinBin: 'Kartu kuning',
    sinBinTitle: 'Skorsing Sin Bin',
    sinBinPlayer: 'Nama atau nomor pemain:',
    sinBinAdd: 'Mulai Skorsing',
    sinBinEmpty: 'Tidak ada skorsing aktif',
    sinBinReturn: 'Kembali',
    matchClock: 'Jam Pertandingan',
    half: 'Babak',
    half1: 'Babak Pertama',
    half2: 'Babak Kedua',
    startMatch: 'Mulai',
    pauseMatch: 'Jeda',
    resumeMatch: 'Lanjutkan',
    resetMatch: 'Reset Pertandingan',
    resetConfirm: 'Reset pertandingan saat ini? Semua skor dan pengatur waktu akan hilang.',
    cancel: 'Batal',
    confirm: 'Konfirmasi Reset',
    period: 'Periode',
    scoringSummary: 'Ringkasan Skor',
    tryScored: 'Try',
    conversionSuccess: 'Konversi',
    conversionMiss: 'Konversi Gagal',
    penaltyScored: 'Penalti',
    dropGoalScored: 'Drop Goal',
    totalPoints: 'Total',
    fullscreen: 'Layar penuh',
    toggleSound: 'Suara',
    eventLog: 'Catatan Kejadian',
    eventEmpty: 'Belum ada kejadian',
    undoBtn: 'Batalkan terakhir',
    timeOff: 'Waktu Berhenti',
    timeOn: 'Waktu Berjalan',
  },
};
