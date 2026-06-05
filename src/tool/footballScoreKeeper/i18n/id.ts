import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'pencatat-skor-sepakbola';
const title = 'Pencatat Skor Sepak Bola Online : Penghitung Gol Pertandingan Gratis';
const description =
  'Catat skor pertandingan sepak bola online secara gratis. Penghitung gol sederhana untuk pertandingan persahabatan dan turnamen. Tanpa perlu daftar.';

const faqData = [
  {
    question: 'Bagaimana cara menggunakan pencatat skor sepak bola ini?',
    answer:
      'Ketuk tombol + di bawah setiap tim untuk menambah gol. Skor langsung berubah dengan animasi selebrasi. Gunakan tombol minus untuk membatalkan kesalahan. Nama tim bisa diedit, cukup ketuk nama bawaan dan ketik nama sendiri. Semua data tersimpan otomatis di browser Anda, jadi Anda bisa menutup halaman dan kembali lagi nanti.',
  },
  {
    question: 'Bisa dipakai di HP saat pertandingan berlangsung?',
    answer:
      'Ya. Antarmukanya dirancang untuk penggunaan ponsel dengan tombol besar yang bisa diketuk tanpa melihat. Mode layar penuh menyembunyikan browser dan menjaga layar tetap menyala selama pertandingan. Tata letak vertikal memudahkan Anda menjangkau kedua bagian tim dengan ibu jari.',
  },
  {
    question: 'Apakah data pertandingan saya tersimpan?',
    answer:
      'Ya. Skor terkini dan nama tim tersimpan otomatis di browser Anda. Anda bisa memuat ulang halaman, menutup browser, atau kembali keesokan hari dan data pertandingan Anda masih ada.',
  },
  {
    question: 'Bisa mencatat perpanjangan waktu atau adu penalti?',
    answer:
      'Ya. Pencatat skor ini bekerja untuk semua format pertandingan. Cukup terus gunakan tombol + selama perpanjangan waktu atau adu penalti. Setelah pertandingan selesai, ketuk Selesaikan Pertandingan untuk melihat hasil akhir.',
  },
  {
    question: 'Benar-benar gratis tanpa batasan tersembunyi?',
    answer:
      'Ya, sepenuhnya gratis tanpa batasan apa pun. Tidak ada paket premium, tidak ada batas peserta, tidak ada watermark, tidak ada iklan. Semuanya bekerja offline di browser Anda. Tidak perlu akun atau email.',
  },
];

const howToData = [
  {
    name: 'Beri nama tim',
    text: 'Ketuk nama tim bawaan dan ketik nama sendiri. Nama baru tersimpan otomatis di browser Anda.',
  },
  {
    name: 'Tambah gol',
    text: 'Ketuk tombol + bundar besar untuk tim yang mencetak gol. Angka skor melompat naik dengan animasi selebrasi.',
  },
  {
    name: 'Hapus gol',
    text: 'Ketuk tombol minus di bawah tombol + jika Anda salah menambah gol. Skor akan langsung menyesuaikan.',
  },
  {
    name: 'Selesaikan pertandingan',
    text: 'Ketuk Selesaikan Pertandingan di bagian bawah untuk melihat pemenang diumumkan dengan trofi dan konfeti. Tutup selebrasi dengan mengetuk di luar area.',
  },
  {
    name: 'Atur ulang pertandingan',
    text: 'Ketuk ikon reset di bilah atas dan konfirmasi untuk menghapus kedua skor. Nama tim tetap dipertahankan sehingga Anda tidak perlu memasukkannya lagi.',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: 'Pencatat Skor Sepak Bola Online Gratis : Pelacak Skor Pertandingan Langsung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mencatat skor selama pertandingan sepak bola seharusnya menjadi bagian termudah dari permainan. Pencatat skor sepak bola online ini memungkinkan Anda melacak gol untuk dua tim secara real time hanya dengan satu ketukan. Tanpa pendaftaran, tanpa unduhan, tanpa menu rumit. Buka halaman, beri nama tim Anda, dan mulailah menghitung gol. Baik Anda sedang mendampingi di pinggir lapangan melatih sepak bola usia muda, menjalankan pertandingan persahabatan antar teman, atau mencatat skor selama pertandingan liga lokal, alat ini dibuat untuk kecepatan dan kesederhanaan. Setiap tim memiliki bagian dengan kode warna tersendiri, menampilkan skor besar dan tombol +1 khusus. Ketuk untuk menambah gol, ketuk tombol minus untuk membatalkan kesalahan. Seluruh riwayat pertandingan tetap terlihat di layar sehingga Anda selalu tahu apa yang terjadi dan kapan.',
    },
    {
      type: 'title',
      text: 'Mengapa Anda perlu papan skor sepak bola khusus, bukan penghitung biasa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Penghitung angka biasa bisa digunakan untuk menghitung apa saja, tetapi papan skor sepak bola khusus memahami cara kerja permainan. Ia memisahkan kedua tim secara visual dengan warna yang berbeda sehingga Anda tidak pernah salah mengetuk sisi yang salah. Tombol gol berukuran besar dan memuaskan saat ditekan, bahkan saat Anda memegang ponsel dengan satu tangan di pinggir lapangan. Tombol minus memungkinkan Anda memperbaiki kesalahan secara instan tanpa harus mengatur ulang seluruh pertandingan. Dan saat pertandingan selesai, tombol Selesaikan Pertandingan memicu layar selebrasi yang menampilkan hasil akhir dengan konfeti dan trofi. Penghitung biasa tidak bisa melakukan semua itu. Mereka memperlakukan setiap poin dengan cara yang sama. Sepak bola tidak biasa, dan pencatat skor Anda juga tidak boleh biasa.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pertandingan Persahabatan & Latihan',
          description: 'Pelacakan gol cepat untuk pertandingan latihan dan sesi latihan. Atur ulang antar pertandingan dengan satu ketukan. Bekerja offline sehingga bisa digunakan di lapangan mana pun.',
          icon: 'mdi:soccer',
          points: ['Entri gol satu ketukan', 'Bekerja sepenuhnya offline', 'Tanpa perlu akun atau email', 'Atur ulang instan antar pertandingan'],
        },
        {
          title: 'Liga Lokal & Turnamen',
          description: 'Jaga skor bersih untuk pertandingan liga di mana setiap gol berarti. Tampilan besar terbaca dari seberang lapangan. Warna tim membantu menghindari kebingungan.',
          icon: 'mdi:trophy-outline',
          points: ['Bagian tim dengan kode warna', 'Nama tim bisa diedit', 'Selesaikan dengan selebrasi', 'Skor besar terbaca dari jarak jauh'],
        },
        {
          title: 'Sepak Bola Usia Muda dan Sekolah',
          description: 'Cukup sederhana untuk dioperasikan sendiri oleh pemain muda. Pelatih dapat melacak gol sambil fokus pada permainan. Mode layar penuh menjaga layar tetap menyala.',
          icon: 'mdi:school',
          points: ['Cukup mudah untuk anak-anak', 'Layar penuh menjaga layar tetap aktif', 'Nama tim bisa diedit', 'Tanpa fitur yang mengganggu'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara melacak pertandingan sepak bola langsung dengan pencatat skor online ini',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menggunakan papan skor sepak bola ini sangat mudah. Saat Anda membuka halaman, Anda melihat dua bagian tim. Tim tuan rumah ditampilkan dalam warna merah dan tim tamu dalam warna biru. Setiap bagian memiliki angka skor besar di tengah, kolom nama tim di atas, dan dua tombol di bawah. Ketuk tombol + bundar besar untuk menambah gol bagi tim tersebut. Angka skor akan dianimasikan dengan efek selebrasi setiap kali gol dicatat. Delapan animasi gol berbeda berputar secara acak, sehingga setiap gol terasa unik. Partikel melayang muncul dari area tombol dengan teks seperti GOL dan SIUUU. Layar berkedip sejenak untuk menandai momen tersebut. Jika Anda melakukan kesalahan, ketuk tombol minus kecil untuk menghapus gol terakhir. Kolom nama tim bisa diedit. Ketuk nama bawaan untuk mengetik nama tim Anda sendiri. Nama tersimpan otomatis di browser Anda bersama skor terkini. Ini berarti Anda dapat menutup halaman, kembali lagi nanti, dan data pertandingan Anda masih ada. Di akhir pertandingan, ketuk Selesaikan Pertandingan untuk melihat pemenang diumumkan dengan animasi trofi dan konfeti berjatuhan. Anda bisa menutup selebrasi dan skor tetap ditampilkan.',
    },
    {
      type: 'title',
      text: 'Pencatatan skor sepak bola ramah ponsel yang dirancang untuk pinggir lapangan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini dibuat dengan prioritas mobile. Tata letak vertikal menempatkan satu tim di atas yang lain sehingga Anda bisa menjangkau kedua bagian dengan mudah menggunakan ibu jari sambil memegang ponsel. Tombol cukup besar untuk diketuk tanpa melihat layar. Mode layar penuh menghilangkan bilah alat browser dan menjaga layar ponsel tetap menyala selama pertandingan. Tidak perlu lagi mengetuk layar setiap beberapa menit untuk mencegahnya mati. Antarmuka bekerja dalam orientasi lanskap dan potret. Juga berfungsi offline setelah muat halaman pertama, sehingga Anda tidak perlu koneksi internet di lapangan. Tidak ada iklan, tidak ada pelacak, dan tidak ada pengumpulan data. Data pertandingan Anda tidak pernah meninggalkan perangkat Anda.',
    },
    {
      type: 'title',
      text: 'Apa yang membuat pencatat skor sepak bola ini istimewa',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tim dengan kode warna</strong> merah untuk tuan rumah dan biru untuk tim tamu. Anda bisa langsung tahu sisi mana tanpa membaca teks.',
        '<strong>Animasi selebrasi gol</strong> setiap gol memicu selebrasi acak. Delapan animasi berbeda termasuk boom, rise, glow, dan pantulan bola.',
        '<strong>Partikel melayang</strong> setiap gol memunculkan teks melayang dengan pesan seperti GOL dan SIUUU. Setiap selebrasi terasa unik.',
        '<strong>Upacara Selesaikan Pertandingan</strong> ketuk Selesaikan Pertandingan untuk memicu pengumuman pemenang dengan animasi trofi, nama tim, dan hujan konfeti.',
        '<strong>Nama tim bisa diedit</strong> ketuk kolom nama untuk mengganti nama tim Anda. Nama tersimpan lokal di browser Anda.',
        '<strong>Kunci layar tetap aktif</strong> mode layar penuh mencegah layar ponsel mati selama pertandingan.',
        '<strong>Mode layar penuh</strong> menyembunyikan antarmuka browser sehingga papan skor memenuhi seluruh layar tanpa gangguan.',
        '<strong>Prioritas offline</strong> bekerja tanpa internet setelah kunjungan pertama. Tanpa iklan, tanpa pelacakan, tanpa pengumpulan data.',
        '<strong>Penyimpanan data instan</strong> skor dan nama tim tersimpan otomatis. Muat ulang halaman atau tutup browser dan data pertandingan Anda kembali.',
        '<strong>Atur ulang dengan konfirmasi</strong> tombol atur ulang meminta konfirmasi sebelum menghapus skor. Mencegah kehilangan data yang tidak disengaja.',
      ],
    },
    {
      type: 'title',
      text: 'Pencatat Skor Sepak Bola vs Lembar Skor Kertas : mengapa digital lebih baik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lembar skor kertas telah digunakan selama puluhan tahun, tetapi memiliki masalah nyata. Anda perlu pulpen yang berfungsi, permukaan datar untuk menulis, dan konsentrasi cukup untuk menulis sambil menonton pertandingan. Satu gangguan saja bisa membuat Anda luput mencetak gol atau menulis angka yang salah. Setelah ditulis di kertas, skor tidak bisa diperbaiki dengan rapi. Angka yang dicoret membuat lembaran sulit dibaca. Kertas bisa basah terkena hujan, tertiup angin, atau hilang di antara pertandingan. Pencatat skor sepak bola digital menyelesaikan semua masalah ini. Tombol cukup besar untuk diketuk hanya dengan sentuhan tanpa melihat. Angka ditampilkan jelas dengan font besar yang terbaca dari seberang lapangan. Kesalahan diperbaiki secara instan dengan tombol minus. Skor tersimpan otomatis dan tidak pernah hilang. Dan tidak seperti kertas, pencatat skor ini menambahkan animasi selebrasi dan umpan balik visual yang membuat mencatat skor lebih menyenangkan. Baik Anda melatih tim usia muda, menjalankan liga hari Minggu, atau hanya bermain dengan teman, pencatat skor sepak bola online gratis ini memberi Anda semua yang Anda butuhkan dan tidak lebih.',
    },
    {
      type: 'title',
      text: 'Pencatatan skor sepak bola gratis untuk setiap level permainan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini sepenuhnya gratis digunakan tanpa batasan. Tidak ada tingkatan premium, tidak ada fitur tersembunyi di balik paywall, dan tidak ada watermark di layar. Ini bekerja untuk semua level sepak bola, dari pertandingan santai dengan teman hingga pertandingan liga yang terorganisir. Antarmuka yang sederhana berarti siapa pun bisa menggunakannya, dari pemain muda yang belajar bermain hingga pelatih berpengalaman yang mengelola turnamen. Tidak perlu registrasi. Tidak perlu alamat email. Tidak ada data pribadi yang dikumpulkan. Buka halaman, mulai pertandingan, ketuk gol. Selesai.',
    },
  ],
  ui: {
    playerA: 'Tuan Rumah',
    playerB: 'Tamu',
    winnerLabel: 'JUARA',
    finishMatch: 'Selesaikan Pertandingan',
    reset: 'Atur Ulang',
    resetConfirm: 'Atur ulang pertandingan? Semua data akan hilang.',
    cancel: 'Batal',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar Layar Penuh',
  },
};
