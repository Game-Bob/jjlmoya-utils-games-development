import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'tes-reaksi';
const title = 'Uji Kecepatan Reaksi (Refleks): Tolok Ukur Online';
const description = 'Ukur refleks Anda dalam milidetik dengan uji reaksi profesional kami. Bersaing untuk peringkat dari \"Kura-kura\" hingga \"Siber-atlet\" dan analisis kinerja Anda.';

const ui: ReactionTesterUI = {
  title: 'Uji Reaksi',
  subtitle: 'Ukur kecepatan reaksi Anda dalam milidetik. Rata rata dari 5 percobaan.',
  startBtn: 'Klik untuk memulai',
  goTitle: 'MULAI!',
  goSubtitle: 'KLIK SEKARANG!',
  earlyTitle: 'Terlalu cepat!',
  earlySubtitle: 'Tunggu hingga hijau.',
  earlyRetry: 'Klik untuk coba lagi',
  promptNext: 'Klik untuk percobaan berikutnya',
  promptFinal: 'Lihat Hasil Akhir',
  avgLabel: 'Rata-rata akhir',
  copyBtn: 'Salin',
  tweetBtn: 'Tweet',
  retryBtn: 'Coba lagi',
  inputMouse: 'Mouse',
  inputTouch: 'Sentuh',
  inputSpace: 'Spasi',
  historyTitle: 'Riwayat Lokal',
  historyBest: 'Top 5 Terbaik',
  historyWorst: 'Top 5 Terburuk',
  historyEmpty: 'Bermain untuk mencatat skor pertama Anda',
  copySuccess: 'Tersalin!',
  shareText: 'Saya mendapat skor {ms}ms pada Uji Reaksi!\nPeringkat: {rank}\n\nBisakah Anda mengalahkan saya?\n{url}',
  rankCiberatleta: 'Siber-atlet',
  rankTigre: 'Harimau',
  rankHumano: 'Manusia',
  rankTortuga: 'Kura-kura',
  rankDormido: 'Tertidur',
  f150: 'APAKAH ANDA ROBOT?!',
  f180: 'LUAR BIASA!',
  f210: 'Sangat cepat!',
  f250: 'Reaksi bagus',
  f300: 'Tidak buruk...',
  f400: 'Sedikit lambat...',
  f600: 'Anda tertidur',
  fSlow: 'Bangun...',
  wp0t: 'TUNGGU...', wp0s: 'Tahan napas Anda...',
  wp1t: 'DIAM...', wp1s: 'Jangan berkedip sekarang',
  wp2t: 'SIAP...', wp2s: 'Jari siap...',
  wp3t: 'TAHAN...', wp3s: 'Sabar, belalang muda',
  wp4t: 'FOKUS...', wp4s: 'Ini akan tiba...',
};

const faqData = [
  { question: 'Berapa rata-rata waktu reaksi manusia?', answer: 'Rata-rata waktu reaksi manusia terhadap rangsangan visual adalah sekitar 250 hingga 270 milidetik. Atlet berkinerja tinggi dan pro-gamer biasanya di bawah 200 ms.' },
  { question: 'Bagaimana cara meningkatkan refleks saya?', answer: 'Kuncinya adalah latihan konsisten dan istirahat. Bermain video game aksi (FPS), mempraktikkan olahraga cepat seperti tenis meja, dan tetap terhidrasi membantu menjaga sistem saraf tetap waspada.' },
  { question: 'Apakah layar mempengaruhi hasil saya?', answer: 'Ya. Ada sesuatu yang disebut \"input lag\". Layar dengan refresh rate rendah (60Hz) atau mouse nirkabel lama dapat menambah 15 hingga 50 ms ke waktu reaksi aktual Anda.' },
  { question: 'Di usia berapa kita mulai kehilangan refleks?', answer: 'Secara fisiologis, refleks manusia mencapai puncaknya antara usia 20 dan 24 tahun. Setelah itu, terjadi penurunan yang sangat lambat (sekitar 2-6 ms per dekade) jika tidak dilatih.' },
];

const howTo = [
  { name: 'Tunggu merah', text: 'Klik area awal dan tunggu dengan sabar sampai warna layar berubah.' },
  { name: 'Bereaksi terhadap hijau', text: 'Segera setelah Anda melihat hijau, klik atau ketuk layar secepat mungkin.' },
  { name: 'Lihat hasil Anda', text: 'Sistem akan menghitung perbedaan tepat dalam milidetik antara perubahan warna dan ketukan Anda.' },
  { name: 'Analisis peringkat Anda', text: 'Ulangi tes sebanyak 5 kali untuk mendapatkan rata-rata yang andal dan cari tahu apakah Anda adalah \"Kura-kura\" atau \"Siber-atlet\".' },
];

const seo = [
  { type: 'title' as const, text: 'Bagaimana Uji Reaksi Ini Bekerja?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Alat ini mengukur <strong>waktu reaksi visual</strong> Anda dengan presisi tinggi. Kami menghitung interval persis dari saat layar menyala hingga sinyal merambat dari mata ke otak Anda, dan kemudian ke jari Anda. Uji ini memerlukan <strong>5 percobaan berturut-turut</strong> untuk menghitung rata-rata sebenarnya, menghilangkan faktor keberuntungan.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Rata-rata 5 percobaan:</strong> Kami menghilangkan faktor \"keberuntungan\" dengan memerlukan konsistensi. Satu klik beruntung tidak akan membuat Anda Siber-atlet.',
      '<strong>Sistem Anti-Cheat:</strong> Waktu tunggu acak (1,5 detik - 4,5 detik) dan deteksi klik awal untuk mencegah prediksi.',
      '<strong>Sains nyata:</strong> Pemrosesan otak ~180-200 ms + respons motorik +20-40 ms = total waktu reaksi Anda.',
    ],
  },
  { type: 'title' as const, text: 'Tabel Peringkat Dunia', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Waktu', 'Peringkat', 'Deskripsi'],
    rows: [
      ['&lt; 180 ms', 'Siber-atlet', 'Tingkat superhuman yang khas bagi para profesional esports atau pilot tempur.'],
      ['180 - 230 ms', 'Harimau', 'Refleks tajam. Anda mungkin hebat di game penembak.'],
      ['230 - 280 ms', 'Manusia', 'Rata-rata yang sehat. Anda terjaga dan berfungsi dengan baik.'],
      ['280 - 350 ms', 'Kura-kura', 'Di bawah rata-rata. Istirahat atau latih lebih banyak.'],
      ['&gt; 350 ms', 'Tertidur', 'Kemungkinan kelelahan, mengantuk, atau hardware lambat (input lag).'],
    ],
  },
  { type: 'title' as const, text: 'Mengapa Anda Lambat? Menyalahkan Perangkat Keras', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitor (Hz)',
        description: 'Monitor 60Hz memerlukan waktu ~16ms untuk melukis frame. Monitor 144Hz hanya memerlukan 7ms. Perbedaan 10ms ini penting dalam skor akhir Anda.',
        icon: 'mdi:monitor',
        points: ['60Hz = ~16ms per frame', '144Hz = ~7ms per frame', 'Perbedaan terlihat dalam tes'],
      },
      {
        title: 'Mouse Nirkabel',
        description: 'Mouse Bluetooth kantor murah memiliki latensi tinggi. Untuk tes ini, gunakan kabel atau teknologi nirkabel 2,4GHz dengan latensi rendah.',
        icon: 'mdi:mouse-variant',
        points: ['Bluetooth murah: +15-50ms', '2.4GHz gaming: <1ms ekstra', 'Kabel USB: referensi'],
      },
      {
        title: 'Peramban',
        description: 'Ekstensi yang memblokir iklan atau skrip berat dapat menyebabkan stuttering. Coba mode inkhognito untuk rekor nyata Anda.',
        icon: 'mdi:web',
        points: ['Tutup ekstensi berat', 'Inkognito = lebih bersih', 'Chrome/Firefox direkomendasikan'],
      },
    ],
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faqTitle: 'Pertanyaan yang Sering Diajukan', faq: faqData, bibliography: [], howTo, schemas };
