import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'bagan-turnamen';
const title = 'Pembuat Bagan Turnamen dan Penyelenggara Turnamen Online Gratis';
const description = 'Atur turnamen dan buat bagan sistem gugur gratis tanpa registrasi. Sempurna untuk FIFA, Padel, eSports, dan permainan papan. 100% Ramah Seluler.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Turnamen Sedang Berlangsung',
  nextMatch: 'Pertandingan Berikutnya',
  share: 'Bagikan',
  backNew: 'Kembali / Baru',
  back: 'Kembali',
  newTournament: 'Turnamen Baru',
  setupSubtitle: 'Siapkan dan buat bagan kompetisi Anda.',
  tournamentNameLabel: 'Nama Turnamen',
  tournamentNamePlaceholder: 'Misalnya Turnamen Musim Panas',
  addPlayersLabel: 'Tambah Peserta',
  addPlayerPlaceholder: 'Nama... atau beberapa dipisahkan dengan koma',
  playersLabel: 'Pemain',
  clearAll: 'Hapus Semua',
  emptyList: 'Daftar kosong',
  howItWorks: 'Bagaimana cara kerjanya?',
  howItWorksText: 'Tambah peserta, beri nama, dan buat. Sistem akan secara otomatis membuat pertandingan dan menangani "Bye" (langsung lolos) jika jumlahnya ganjil.',
  historyLabel: 'Riwayat',
  noHistory: 'Tidak ada turnamen yang disimpan',
  noOldTournaments: 'Tidak ada turnamen sebelumnya',
  generateBtn: 'Buat Bagan',
  shuffleLabel: 'Acak pertandingan',
  scoreLabel: 'Aktifkan Skor (Opsional)',
  dragHint: 'Seret untuk memindahkan',
  roundFinal: 'Final',
  roundSemifinal: 'Semifinal',
  roundQuarter: 'Perempat Final',
  roundPrefix: 'Babak',
  byeLabel: 'Bye',
  waiting: 'Menunggu...',
  emptyRound: 'Babak kosong',
  confirmClearPlayers: 'Hapus seluruh daftar pemain?',
  alertMinPlayers: 'Anda memerlukan setidaknya 2 pemain.',
  alertLoadFailed: 'Tidak dapat memuat turnamen.',
  confirmDeleteTournament: 'Hapus turnamen ini secara permanen dari riwayat?',
  toastShareLimit: 'Hanya turnamen dengan hingga 32 pemain yang dapat dibagikan',
  toastShareError: 'Kesalahan saat membuat tautan',
  toastShareCopied: 'Tautan disalin ke papan klip',
  toastShareFailed: 'Tidak dapat menyalin. URL:',
  toastFinished: 'Turnamen Selesai!',
  defaultName: 'Turnamen',
};

const faqData = [
  { question: 'Bagaimana cara kerja sistem gugur tunggal?', answer: 'Ini adalah sistem kompetisi di mana peserta yang kalah dalam satu pertandingan secara otomatis tereliminasi dari turnamen. Pemenang melaju ke babak berikutnya (babak 16 besar, perempat final, semifinal) hingga hanya tersisa dua peserta untuk final besar.' },
  { question: 'Apa yang terjadi jika saya memiliki jumlah pemain ganjil?', answer: 'Alat kami secara otomatis menangani "BYE". Beberapa pemain akan melaju langsung ke babak kedua tanpa bermain di babak pertama agar bagan selalu berakhir dalam pangkat dua (2, 4, 8, 16...).' },
  { question: 'Dapatkah saya menyimpan dan membagikan bagan turnamen?', answer: 'Ya, Anda dapat membagikan bagan melalui tautan unik yang dibuat secara instan. Sebagai alat bebas registrasi, data disimpan di browser Anda selama tab terbuka.' },
  { question: 'Apakah ini berfungsi untuk turnamen eSports seperti FIFA atau LoL?', answer: 'Tentu saja. Ini dirancang untuk cepat dan visual, ideal untuk mengelola turnamen konsol, game PC, atau bahkan permainan papan dan kartu dengan cepat.' },
  { question: 'Apakah pembuatan turnamen gratis?', answer: 'Ya, sepenuhnya gratis dan tanpa batasan. Tanpa paket premium, batas peserta, tanda air, atau iklan yang mengganggu. Semuanya berfungsi secara offline di browser Anda.' },
  { question: 'Apakah data saya terhapus jika saya menutup browser?', answer: 'Tidak. Kami menggunakan LocalStorage untuk menyimpan secara otomatis semua turnamen Anda di perangkat Anda. Anda dapat menutup tab, mematikan komputer, dan kembali beberapa hari kemudian: turnamen Anda akan tetap ada.' },
  { question: 'Bagaimana cara kerja tombol "Pertandingan Berikutnya"?', answer: 'Sistem secara otomatis mendeteksi pertandingan berikutnya yang sudah siap (kedua peserta dikonfirmasi) tetapi belum ada hasilnya. Menekan "Pertandingan Berikutnya" akan langsung melompat ke pertandingan tersebut.' },
];

const howTo = [
  { name: 'Masukkan peserta', text: 'Tulis nama-nama pemain atau tim yang akan ikut serta dalam kompetisi.' },
  { name: 'Buat bagan', text: 'Klik tombol buat. Sistem akan secara otomatis membuat pertandingan dan babak yang diperlukan.' },
  { name: 'Perbarui hasil', text: 'Klik pada peserta yang menang di setiap pertandingan agar mereka secara otomatis melaju ke tahap berikutnya dalam bagan.' },
  { name: 'Selesai', text: 'Setelah turnamen selesai, juara akhir akan ditampilkan.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Pembuat Bagan Turnamen dan Penyelenggara Turnamen Online Gratis',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Kelola kompetisi olahraga, video game, atau permainan papan Anda dengan penyelenggara turnamen yang paling lengkap, gratis, dan tanpa registrasi. Buat bagan sistem gugur yang visual dan interaktif dalam hitungan detik, dengan <strong>sistem penilaian terintegrasi</strong>, riwayat otomatis, dan navigasi pertandingan yang cerdas. Semuanya berfungsi offline, langsung di browser Anda.',
  },
  {
    type: 'title' as const,
    text: 'Bagaimana Cara Membuat Turnamen Sistem Gugur?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Beri nama turnamen Anda</strong>, tambah peserta (satu per satu atau tempel daftar yang dipisahkan koma), acak pertandingan jika diinginkan, buat bagan, kelola hasil dengan mengetuk pemenang setiap pertandingan, dan gunakan tombol "Pertandingan Berikutnya" untuk menavigasi di antara pertandingan yang belum selesai.',
  },
  {
    type: 'title' as const,
    text: 'Fitur Lanjutan',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Entri massal:</strong> Tambahkan beberapa peserta sekaligus yang dipisahkan oleh koma.',
      '<strong>Skor tepat:</strong> Sistem penilaian dengan hasil seperti 3-1 atau 21-19.',
      '<strong>Navigasi cerdas:</strong> Tombol "Pertandingan Berikutnya" melompat ke pertandingan berikutnya yang tertunda.',
      '<strong>Bagan yang dapat digeser:</strong> Tampilan desktop dengan gulir bebas untuk turnamen besar.',
      '<strong>Riwayat persisten:</strong> Semua turnamen disimpan secara otomatis di browser Anda.',
      '<strong>Walkover Otomatis:</strong> Bye dan kelolosan langsung diselesaikan tanpa masukan manual.',
      '<strong>Bagikan melalui URL:</strong> Buat tautan terkompresi untuk mengirim bagan kepada siapa saja.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Sempurna untuk Segala Kompetisi',
    level: 2 as const,
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Video Game & eSports',
        description: 'Sempurna untuk FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros, atau Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Pertandingan cepat', 'Tanpa batas tim', 'Dapat dibagikan secara instan'],
      },
      {
        title: 'Olahraga & Raket',
        description: 'Kelola bagan Padel, Tenis, Ping Pong, Bulu Tangkis, Futsal, atau Basket 3x3.',
        icon: 'mdi:trophy-outline',
        points: ['Skor terintegrasi', 'Tampilan seluler yang dioptimalkan', 'Tidak butuh kertas'],
      },
      {
        title: 'Permainan Papan & Kartu',
        description: 'Atur turnamen Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Catur, atau Domino.',
        icon: 'mdi:cards-playing-outline',
        points: ['Hingga 64 pemain', 'Riwayat babak', 'Manajemen bye'],
      },
    ],
  },
  {
    type: 'title' as const,
    text: 'Apa itu "Bye" atau Kelolosan Langsung?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Dalam turnamen sistem gugur yang ideal, jumlah peserta harus merupakan pangkat dari 2 (4, 8, 16, 32...). Jika Anda memiliki jumlah ganjil atau bukan pangkat 2 — misalnya 7, 10, atau 13 pemain —, sistem akan secara otomatis memberikan <strong>"Bye"</strong> di babak pertama. "Bye" berarti peserta melaju langsung ke fase berikutnya tanpa bermain. Algoritma kami menghitung dan memberikan kelolosan ini secara adil dan otomatis.',
  },
  {
    type: 'title' as const,
    text: 'Instan, Gratis, dan Tanpa Perlu Daftar',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Tanpa hambatan. Tanpa akun, tanpa instalasi, tanpa menunggu. Tambah peserta dan buat turnamen Anda secara instan. Semuanya disimpan secara otomatis di browser Anda melalui <strong>LocalStorage</strong>: tutup tab, matikan komputer, dan kembali beberapa hari kemudian. Turnamen dan riwayat lengkap Anda akan tetap ada.',
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faqTitle: 'Pertanyaan yang Sering Diajukan', faq: faqData, bibliography: [], howTo, schemas };
