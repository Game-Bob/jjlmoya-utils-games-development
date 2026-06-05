import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'papan-skor-basket';
const title = 'Papan Skor Basket Online : Penghitung Skor Gratis';
const description =
  'Papan skor basket online gratis dengan tombol +1, +2, dan +3. Catat skor untuk pertandingan jalanan, basket sekolah, dan liga lokal. Tanpa daftar, tanpa unduh, bisa offline.';

const faqData = [
  {
    question: 'Bagaimana cara mencatat skor dalam pertandingan basket?',
    answer:
      'Basket menggunakan tiga nilai skor: lemparan bebas (+1 poin), field goal (+2 poin), dan three-pointer (+3 poin). Ketuk tombol yang sesuai setiap kali sebuah tim mencetak skor. Papan skor secara otomatis mencatat totalnya. Untuk memperbaiki kesalahan, gunakan tombol minus di samping skor.',
  },
  {
    question: 'Apa perbedaan antara +1, +2, dan +3 dalam basket?',
    answer:
      '+1 adalah untuk lemparan bebas yang diberikan setelah pelanggaran. +2 adalah untuk field goal biasa yang dicetak di dalam garis tiga poin. +3 adalah untuk tembakan dari luar garis tiga poin. Tombol terpisah untuk setiap nilai memungkinkan Anda mencetak skor lebih cepat dan mengurangi kesalahan dibandingkan penghitung biasa.',
  },
  {
    question: 'Bisakah saya menggunakan papan skor ini untuk pertandingan basket sungguhan?',
    answer:
      'Ya. Papan skor ini dirancang untuk pertandingan sungguhan: basket jalanan, pertandingan sekolah, liga lokal, dan latihan tanding. Skor disimpan di peramban Anda sehingga Anda dapat memuat ulang halaman tanpa kehilangan keadaan pertandingan.',
  },
  {
    question: 'Bagaimana cara mencatat skor untuk basket jalanan atau pertandingan kasual?',
    answer:
      'Basket jalanan biasanya dimainkan dengan skor target (seperti 21 atau 16) dengan 1 dan 2 poin (atau hanya 1). Papan skor ini bekerja untuk format apa pun. Gunakan +1 untuk tembakan biasa, +2 untuk tembakan dari luar garis tiga poin. Tetapkan kondisi kemenangan Anda sendiri dan gunakan tombol minus jika Anda melakukan kesalahan.',
  },
  {
    question: 'Apakah ini bisa digunakan offline di ponsel?',
    answer:
      'Ya. Setelah halaman dimuat, papan skor berfungsi sepenuhnya secara offline. Cocok untuk lapangan luar ruangan, gym tanpa WiFi, atau di mana pun dengan sinyal buruk. Anda juga bisa masuk ke layar penuh dan layar akan tetap menyala sehingga tidak terkunci selama pertandingan.',
  },
  {
    question: 'Bagaimana cara melacak pelanggaran tim dan bonus?',
    answer:
      'Papan skor ini berfokus pada papan skor itu sendiri. Untuk pelanggaran tim, Anda dapat menggunakan kolom nama tim untuk mencatat pelanggaran secara manual (misalnya, ganti nama "KANDANG" menjadi "KANDANG 3F"). Kami merekomendasikan penggunaan alat ini bersama dengan pelacak pelanggaran terpisah untuk pertandingan resmi.',
  },
  {
    question: 'Bisakah saya menggunakan penghitung skor basket ini di ponsel saya?',
    answer:
      'Ya. Antarmukanya dirancang khusus untuk ponsel. Tombol +1, +2, dan +3 berukuran besar dan mudah diketuk dengan ibu jari. Mode layar penuh menyembunyikan elemen peramban sehingga papan skor memenuhi seluruh layar, dan kunci layar aktif mencegah ponsel Anda mati.',
  },
];

const howToData = [
  {
    name: 'Beri nama tim Anda',
    text: 'Ketuk KANDANG atau TANDANG untuk memasukkan nama tim. Nama-nama tersebut disimpan secara otomatis di peramban Anda sehingga tetap ada meskipun Anda memuat ulang halaman.',
  },
  {
    name: 'Cetak lemparan bebas (+1)',
    text: 'Ketuk tombol +1 ketika seorang pemain berhasil melakukan lemparan bebas. Setiap lemparan bebas bernilai satu poin dan biasanya diberikan setelah pelanggaran.',
  },
  {
    name: 'Cetak field goal (+2)',
    text: 'Ketuk tombol +2 untuk keranjang biasa di dalam garis tiga poin. Ini adalah aksi mencetak skor yang paling umum dalam basket.',
  },
  {
    name: 'Cetak three-pointer (+3)',
    text: 'Ketuk tombol +3 ketika seorang pemain mencetak skor dari luar garis tiga poin. Three-pointer ditandai dengan tombol merah dan memicu efek perayaan ekstra.',
  },
  {
    name: 'Perbaiki kesalahan skor',
    text: 'Jika Anda tidak sengaja menambahkan poin, ketuk tombol minus untuk menguranginya. Tidak akan turun di bawah nol. Tidak perlu memulai ulang seluruh pertandingan karena kesalahan kecil.',
  },
  {
    name: 'Tukar sisi saat jeda',
    text: 'Gunakan tombol tukar untuk menukar posisi KANDANG dan TANDANG saat jeda. Kedua skor dan nama tim ikut tertukar, sehingga Anda tidak kehilangan data apa pun.',
  },
  {
    name: 'Mulai pertandingan baru',
    text: 'Ketuk tombol reset dan konfirmasi untuk menghapus semua skor dan memulai pertandingan baru. Nama tim tetap disimpan sehingga Anda tidak perlu mengetiknya lagi.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Papan Skor Basket Online Gratis : Tanpa Daftar, Tanpa Unduh',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mencatat skor basket seharusnya sederhana. Lemparan bebas itu +1. Field goal itu +2. Three-pointer itu +3. Papan skor ini memberi Anda tombol khusus untuk setiap nilai sehingga Anda bisa mengetuk dan terus bermain. Tanpa menu, tanpa mode, tanpa konfigurasi. Cukup beri nama tim Anda dan mulai catat skor. Skor disimpan otomatis di peramban Anda, sehingga Anda bisa memuat ulang halaman, menutup ponsel, atau kembali lagi nanti tanpa kehilangan pertandingan.',
    },
    {
      type: 'title',
      text: 'Mengapa Penghitung Skor Basket Khusus Lebih Unggul dari Penghitung Biasa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kebanyakan aplikasi papan skor memaksa Anda mengetuk tombol yang sama berkali-kali untuk menambahkan dua atau tiga poin. Ketukan ekstra itu bertambah selama pertandingan 40 menit dan meningkatkan risiko kehilangan hitungan saat serangan cepat atau pergantian pemain. Papan skor ini memiliki <strong>tiga tombol terpisah</strong> : satu untuk setiap nilai skor : sehingga Anda mengetuk tepat sekali per aksi mencetak skor. Tombol +3 menyala merah dan memicu animasi ledakan yang sesuai dengan kegembiraan saat three-pointer masuk.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Basket Jalanan & Kasual',
          description:
            'Pertandingan hingga 16 atau 21 dengan 1 dan 2 poin. Papan skor ini menangani kedua nilai. Cukup gunakan +1 dan +2 dan abaikan +3 saat bermain dengan aturan jalanan.',
          icon: 'mdi:basketball',
          points: ['Tanpa perlu pengaturan', 'Berfungsi untuk target skor berapa pun', 'Layar tetap menyala'],
        },
        {
          title: 'Sekolah & Liga Lokal',
          description:
            'Aturan FIBA atau NFHS standar dengan lemparan bebas, field goal, dan three-pointer. Tombol khusus membuatnya cukup cepat untuk pencatat skor resmi.',
          icon: 'mdi:school',
          points: ['Semua tiga nilai skor', 'Nama tim dapat diedit', 'Layar penuh menjaga ponsel tetap aktif'],
        },
        {
          title: 'Latihan & Pelatihan',
          description:
            'Lacak tembakan masuk selama latihan shooting, tanding, atau pertandingan satu lawan satu. Riwayat tidak disimpan, sehingga setiap sesi dimulai dari awal.',
          icon: 'mdi:whistle',
          points: ['Reset cepat antar latihan', 'Berfungsi offline di gym', 'Tanpa perlu akun'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara Kerja Penghitungan Skor Basket',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basket memiliki tiga nilai skor. <strong>Lemparan bebas</strong> bernilai 1 poin dan dilakukan dari garis lemparan bebas setelah pelanggaran. <strong>Field goal</strong> bernilai 2 poin dan berlaku untuk setiap tembakan yang masuk dari dalam garis tiga poin selama permainan normal. <strong>Three-point field goal</strong> bernilai 3 poin untuk tembakan dari luar garis tiga poin. Sebagian besar pertandingan profesional dan kampus menggunakan ketiga nilai tersebut. Basket jalanan sering hanya menggunakan 1 dan 2 poin, atau hanya 1. Papan skor ini beradaptasi dengan format apa pun.',
    },
    {
      type: 'title',
      text: 'Mainkan Format Apa Pun: Menang dengan Skor, dengan Waktu, atau Pertama Mencapai Target',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basket tidak memiliki batas skor tetap : pertandingan berakhir saat waktu habis. Tapi basket jalanan sering menggunakan skor target seperti pertama mencapai 16, 21, atau 11 (menang dengan selisih 2). Papan skor ini tidak memberlakukan kondisi kemenangan karena basket tidak berakhir berdasarkan skor. Anda yang memutuskan kapan pertandingan selesai, dan tombol reset membersihkan papan untuk pertandingan berikutnya. Nama tim tetap tersimpan sehingga Anda bisa bermain beberapa pertandingan berturut-turut tanpa mengetik ulang.',
    },
    {
      type: 'title',
      text: 'Apa yang Membuat Papan Skor Ini Berbeda',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tiga tombol khusus</strong> : +1, +2, dan +3. Tidak perlu memutar-mutar nilai, tidak perlu tekan lama, tidak perlu ketukan ekstra.',
        '<strong>Nama tim dapat diedit</strong> : ketuk nama untuk mengubahnya. Nama disimpan di peramban dan tetap ada saat halaman dimuat ulang.',
        '<strong>Kunci layar aktif</strong> : saat Anda masuk layar penuh, papan skor mencegah layar ponsel Anda mati. Tidak perlu lagi mengetuk layar hanya untuk menjaganya tetap menyala.',
        '<strong>Mode layar penuh</strong> : menyembunyikan tab peramban dan bilah alamat sehingga papan skor memenuhi seluruh layar. Ketuk tombol layar penuh sekali dan alat ini melebar.',
        '<strong>Prioritas offline</strong> : seluruh papan skor berfungsi tanpa koneksi internet setelah pemuatan pertama. Tanpa iklan, tanpa pelacak, tanpa pengumpulan data.',
        '<strong>Umpan balik yang memuaskan</strong> : setiap ketukan memicu animasi skor, partikel melayang, dan getaran halus pada perangkat yang mendukung. Tombol +3 mendapatkan efek ledakan ekstra.',
        '<strong>Keadaan pertandingan tersimpan</strong> : muat ulang halaman, tutup peramban, atau kembali besok. Skor dan nama tim disimpan secara lokal.',
      ],
    },
    {
      type: 'title',
      text: 'Papan Skor Basket vs. Lembar Skor Kertas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lembar skor kertas memang berfungsi, tetapi membutuhkan pulpen, permukaan datar, dan seseorang yang bisa menulis dan menonton pertandingan secara bersamaan. Papan skor digital menyelesaikan ketiga masalah tersebut. Tombol-tombolnya cukup besar untuk diketuk tanpa perlu melihat. Angkanya terbaca dari seberang lapangan. Skor tidak pernah kotor, hilang, atau terhapus secara tidak sengaja. Dan tidak seperti kertas, papan skor ini menyimpan keadaan pertandingan, sehingga Anda bisa menutupnya saat jeda dan kembali lagi nanti.',
    },
  ],
  ui: {
    playerA: 'KANDANG',
    playerB: 'TANDANG',
    swapSides: 'Tukar Sisi',
    reset: 'Reset',
    resetConfirm: 'Reset pertandingan? Semua poin akan hilang.',
    cancel: 'Batal',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar Layar Penuh',
    winnerLabel: 'PEMENANG',
  },
};
