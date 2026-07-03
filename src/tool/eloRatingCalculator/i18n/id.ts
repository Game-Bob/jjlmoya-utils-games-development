import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'kalkulator-peringkat-elo';
const title = 'Kalkulator Peringkat ELO untuk Catur, Esports dan Olahraga';
const description = 'Kalkulator peringkat ELO gratis untuk menang, seri, dan kalah. Masukkan kedua peringkat, pilih faktor K dan lihat perubahan poin yang tepat, skor harapan, ELO baru dan ELO lawan.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Peringkat pemain',
  opponentLabel: 'Peringkat lawan',
  kFactorLabel: 'Faktor K',
  resultLabel: 'Hasil pertandingan',
  winLabel: 'Menang',
  drawLabel: 'Seri',
  lossLabel: 'Kalah',
  calculateLabel: 'Hitung',
  resetLabel: 'Reset',
  expectedLabel: 'Harapan',
  deltaLabel: 'Perubahan',
  newRatingLabel: 'Peringkat baru',
  opponentNewRatingLabel: 'ELO baru lawan',
  kFactorHelpTitle: 'Apa itu faktor K?',
  kFactorHelpText: 'K mengontrol seberapa agresif pembaruan. K rendah berarti peringkat stabil. K tinggi berarti setiap hasil memindahkan peringkat lebih cepat.',
  kFactorLowText: 'Stabil',
  kFactorHighText: 'Volatil',
  resultSummaryLabel: 'Dampak pertandingan',
  initialImpactText: 'Hasil seri menjaga klasemen tetap ketat',
  historyVersusLabel: 'vs',
  historyToLabel: 'ke',
  playerPointsLabel: 'poin pemain',
  opponentEloLabel: 'ELO lawan',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'PERINGKAT',
  upsetLabel: 'Peluang kejutan',
  favoriteLabel: 'Tekanan unggulan',
  balancedLabel: 'Pertandingan seimbang',
  historyLabel: 'Perhitungan lokal',
  noHistoryLabel: 'Jalankan perhitungan untuk menyimpannya di sini',
  copiedLabel: 'Tersalin',
  copyLabel: 'Salin',
  clearLabel: 'Hapus',
  kBeginner: 'Pemula',
  kClub: 'Klub',
  kTournament: 'Turnamen',
  kElite: 'Elit',
};

const faqData = [
  { question: 'Bagaimana cara menghitung perubahan peringkat ELO setelah pertandingan?', answer: 'Masukkan ELO Anda saat ini, ELO lawan, hasil pertandingan, dan faktor K. Kalkulator memperkirakan skor harapan Anda, membandingkannya dengan hasil nyata, lalu mengembalikan poin pasti yang diperoleh atau hilang.' },
  { question: 'Apa arti faktor K dalam ELO?', answer: 'Faktor K mengontrol sensitivitas peringkat. Faktor K rendah membuat peringkat stabil dan lambat bergerak. Faktor K tinggi membuat peringkat bereaksi lebih cepat, berguna untuk pemain baru, musim pendek, atau tangga lokal yang aktif.' },
  { question: 'Mengapa saya mendapat lebih sedikit poin ELO saat mengalahkan lawan dengan peringkat lebih rendah?', answer: 'Karena rumus sudah memperkirakan Anda akan menang. Mengalahkan lawan dengan peringkat jauh lebih rendah mengkonfirmasi prediksi, jadi kenaikan peringkat kecil. Mengalahkan lawan yang lebih kuat lebih mengejutkan, jadi kenaikannya lebih besar.' },
  { question: 'Apakah lawan kehilangan jumlah poin ELO yang sama?', answer: 'Dalam pertukaran ELO standar dua pemain, ya. Poin yang diperoleh satu pihak dikurangi dari pihak lain, jadi kalkulator menunjukkan ELO baru pemain dan ELO baru lawan.' },
  { question: 'Bisakah saya menggunakan kalkulator ELO ini di luar catur?', answer: 'Ya. ELO berfungsi untuk setiap kompetisi satu lawan satu berulang di mana pemain yang lebih kuat seharusnya lebih mungkin menang, termasuk esports, tangga tenis, grup padel, tenis meja, klub debat, dan liga fantasi.' },
];

const howTo = [
  { name: 'Masukkan peringkat pemain', text: 'Ketik peringkat saat ini dari pemain yang ingin Anda hitung perubahannya.' },
  { name: 'Masukkan peringkat lawan', text: 'Tambahkan peringkat lawan agar kalkulator dapat memperkirakan skor harapan.' },
  { name: 'Pilih faktor K dan hasil', text: 'Gunakan faktor K lebih rendah untuk peringkat stabil atau faktor K lebih tinggi saat peringkat harus disesuaikan dengan cepat, lalu pilih menang, seri, atau kalah.' },
  { name: 'Baca peringkat baru', text: 'Kalkulator menunjukkan skor harapan, perubahan peringkat, ELO baru Anda, dan ELO baru lawan setelah pertukaran poin.' },
];

const seo = [
  { type: 'title' as const, text: 'Hitung Poin ELO Setelah Pertandingan Apa Pun', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Gunakan kalkulator peringkat ELO ini saat Anda membutuhkan jawaban cepat untuk pertanyaan yang sangat praktis: <strong>berapa poin ELO yang saya peroleh atau hilangkan setelah hasil ini?</strong> Masukkan peringkat Anda, peringkat lawan, hasil pertandingan, dan faktor K. Alat ini menghitung skor harapan, variasi peringkat, ELO baru Anda, dan ELO baru lawan dalam kartu hasil yang sama.'
  },
  {
    type: 'summary' as const,
    title: 'Yang dijawab kalkulator ini',
    items: [
      'Berapa poin ELO yang Anda dapat setelah menang melawan lawan yang lebih kuat atau lebih lemah.',
      'Berapa poin ELO yang Anda hilang setelah kekalahan mengejutkan.',
      'Apakah hasil seri harus menaikkan atau menurunkan peringkat Anda.',
      'Berapa peringkat lawan setelah pertukaran poin yang sama.',
      'Bagaimana mengubah faktor K membuat pergerakan peringkat stabil atau volatil.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'skor menang', description: 'Kemenangan diperlakukan sebagai poin penuh sebelum dibandingkan dengan skor harapan.' },
      { value: '0.5', label: 'skor seri', description: 'Hasil seri tepat di antara menang dan kalah, sehingga bisa mendapatkan poin melawan lawan yang lebih kuat.' },
      { value: '0.0', label: 'skor kalah', description: 'Kekalahan melawan lawan dengan peringkat lebih rendah biasanya lebih merugikan karena tidak terduga.' },
    ]
  },
  { type: 'title' as const, text: 'Apa yang Dilakukan Rumus ELO', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'Tiga langkah di balik setiap hasil',
    description: 'Kalkulator mengikuti ide standar ELO tanpa membuat Anda bekerja secara manual dengan rumus.',
    items: [
      { label: 'Skor harapan', value: 'Selisih peringkat diubah menjadi skor gaya probabilistik. Pemain dengan peringkat lebih tinggi diharapkan mendapat lebih banyak poin.' },
      { label: 'Skor aktual', value: 'Kemenangan dihitung sebagai 1, seri sebagai 0.5, dan kekalahan sebagai 0.' },
      { label: 'Perubahan peringkat', value: 'Selisih antara skor aktual dan harapan dikalikan dengan faktor K dan dibulatkan ke poin.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situasi', 'Yang biasanya terjadi', 'Mengapa terjadi'],
    rows: [
      ['Anda mengalahkan lawan lebih kuat', 'Kenaikan ELO besar', 'Skor aktual Anda jauh lebih tinggi dari harapan'],
      ['Anda mengalahkan lawan lebih lemah', 'Kenaikan ELO kecil', 'Rumus sudah mengharapkan Anda menang'],
      ['Anda seri melawan lawan lebih kuat', 'Kenaikan ELO kecil', 'Hasil seri bisa melampaui skor harapan Anda'],
      ['Anda kalah dari lawan lebih lemah', 'Penurunan ELO besar', 'Hasilnya lebih buruk dari yang diharapkan'],
    ]
  },
  { type: 'title' as const, text: 'Memilih Faktor K yang Tepat untuk Sistem Peringkat Anda', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>Faktor K adalah tombol sensitivitas sistem ELO.</strong> Ini tidak menentukan siapa yang pantas menang. Ini menentukan seberapa kuat tabel peringkat bereaksi terhadap suatu hasil. Jika liga Anda memiliki banyak pertandingan dan peringkat yang matang, K yang lebih rendah menjaga tabel tetap tenang. Jika pemain baru atau musim pendek, K yang lebih tinggi membantu peringkat mengejar lebih cepat.'
  },
  {
    type: 'table' as const,
    headers: ['Faktor K', 'Gunakan untuk', 'Yang harus diharapkan pengguna'],
    rows: [
      ['10 hingga 16', 'Klub catur mapan, kumpulan ahli, peringkat jangka panjang', 'Peringkat sangat stabil dengan perubahan kecil setelah setiap pertandingan'],
      ['20 hingga 32', 'Liga lokal, tangga klub, turnamen berulang', 'Pergerakan seimbang yang terasa responsif tanpa bereaksi berlebihan'],
      ['40 hingga 60', 'Pemain baru, musim pendek, tangga esports, grup informal', 'Koreksi cepat ketika peringkat saat ini mungkin tidak akurat'],
      ['60 ke atas', 'Hanya format eksperimental atau peringkat sementara', 'Peringkat sangat volatil di mana satu pertandingan bisa mengubah tabel secara drastis'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Nilai default terbaik untuk sebagian besar pengguna',
    html: 'Jika Anda tidak mengikuti aturan federasi resmi, mulailah dengan <strong>K 32</strong>. Cukup responsif untuk tangga aktif dan tetap cukup stabil sehingga satu hasil keberuntungan tidak sepenuhnya menulis ulang peringkat.'
  },
  { type: 'title' as const, text: 'Cara Membaca Hasil Kalkulator ELO Anda', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Harapan:</strong> skor yang diprediksi rumus sebelum pertandingan. Skor harapan lebih tinggi berarti Anda diunggulkan.',
      '<strong>Perubahan:</strong> poin ELO tepat yang ditambahkan atau dikurangi dari peringkat pemain.',
      '<strong>Peringkat baru:</strong> peringkat pemain setelah menerapkan hasil.',
      '<strong>ELO baru lawan:</strong> peringkat lawan setelah pergerakan poin berlawanan.',
      '<strong>Dampak pertandingan:</strong> ringkasan bahasa sederhana tentang seberapa kuat hasil menggerakkan tabel.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Catur dan permainan papan',
        description: 'Hitung peringkat pasca-pertandingan untuk malam klub, acara online, dan grup peringkat pribadi.',
        icon: 'mdi:chess-knight',
        points: ['Dukungan menang-seri-kalah', 'ELO lawan ditampilkan', 'Cocok untuk peringkat jangka panjang']
      },
      {
        title: 'Tangga esports',
        description: 'Perbarui peringkat pemain atau tim setelah pertandingan satu lawan satu berulang di mana keterampilan bisa berubah dengan cepat.',
        icon: 'mdi:gamepad-variant',
        points: ['Opsi faktor K lebih tinggi', 'Koreksi peringkat cepat', 'Hadiah kejutan yang jelas']
      },
      {
        title: 'Tangga olahraga',
        description: 'Pertahankan peringkat yang adil untuk tenis, padel, squash, tenis meja, bulutangkis, dan liga lokal.',
        icon: 'mdi:tennis',
        points: ['Pembaruan manual sederhana', 'Berfungsi untuk klub', 'Mudah bagi penyelenggara']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'Kapan ELO adalah pilihan peringkat yang baik',
    items: [
      {
        pro: 'Sangat baik untuk pertandingan satu lawan satu berulang di mana pemain yang lebih kuat seharusnya lebih sering menang.',
        con: 'Kurang ideal untuk olahraga tim di mana kontribusi individu sulit diisolasi.'
      },
      {
        pro: 'Mudah dijelaskan karena kemenangan melawan lawan yang lebih kuat bernilai lebih banyak poin.',
        con: 'Membutuhkan cukup banyak pertandingan sebelum peringkat terasa akurat untuk pemain yang benar-benar baru.'
      },
      {
        pro: 'Cukup sederhana untuk dikelola di spreadsheet, tangga klub, atau tabel liga.',
        con: 'Aturan faktor K harus konsisten atau peringkat menjadi sulit dipercaya.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Penting untuk penyelenggara liga',
    html: 'Pilih faktor K Anda sebelum musim dimulai dan publikasikan. Pemain lebih mempercayai tabel ELO ketika semua orang tahu bagaimana peringkat dihitung sebelum hasil dimasukkan.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
