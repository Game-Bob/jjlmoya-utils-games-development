import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'pencatat-skor-ping-pong';
const title = 'Pencatat Skor Ping Pong Online : Pelacak Tenis Meja Gratis';
const description =
  'Lacak pertandingan tenis meja dengan skor game dan set. Pencatat skor ping pong online gratis untuk pertandingan persahabatan dan turnamen. Tidak perlu registrasi.';

const faqData = [
  {
    question: 'Bagaimana cara kerja skor ping pong?',
    answer:
      'Game ping pong standar dimainkan hingga 11 poin. Anda harus menang dengan selisih 2 poin. Jika skor mencapai 10-10, permainan berlanjut hingga seseorang unggul 2 poin. Server berganti setiap 2 poin. Pencatat skor ini melacak semuanya secara otomatis.',
  },
  {
    question: 'Bagaimana cara menggunakan pencatat skor ini?',
    answer:
      'Tekan tombol + di bawah setiap pemain untuk menambah poin. Skor game diperbarui secara otomatis. Saat pemain mencapai 11 dengan keunggulan 2 poin, game berakhir dan game baru dimulai. Penghitung game yang dimenangkan melacak berapa banyak game yang dimenangkan setiap pemain. Tekan Selesaikan Pertandingan saat pertandingan selesai.',
  },
  {
    question: 'Bagaimana cara kerja indikator server?',
    answer:
      'Server berganti setiap 2 poin. Sebuah titik muncul di samping pemain yang sedang melakukan servis. Ini mengikuti aturan tenis meja resmi. Anda dapat melacak siapa yang seharusnya melakukan servis setiap saat selama pertandingan.',
  },
  {
    question: 'Bisakah saya menggunakannya di ponsel saat pertandingan?',
    answer:
      'Ya. Antarmukanya ramah seluler dengan tombol besar. Mode layar penuh menyembunyikan browser dan menjaga layar tetap aktif.',
  },
  {
    question: 'Apakah data pertandingan saya tersimpan?',
    answer:
      'Ya. Skor saat ini, game yang dimenangkan, dan nama pemain disimpan secara otomatis di browser Anda.',
  },
];

const howToData = [
  {
    name: 'Beri nama pemain',
    text: 'Ketuk nama pemain default dan ketik nama Anda sendiri. Nama disimpan secara otomatis.',
  },
  {
    name: 'Tambahkan poin',
    text: 'Tekan tombol + bundar besar untuk pemain yang mencetak skor. Skor diperbarui dengan animasi perayaan.',
  },
  {
    name: 'Hapus poin',
    text: 'Tekan tombol minus jika Anda salah menambahkan poin.',
  },
  {
    name: 'Mulai game baru',
    text: 'Saat game berakhir, tekan Game Baru untuk memulai game berikutnya. Atau tekan Selesaikan Pertandingan untuk mengakhiri pertandingan.',
  },
  {
    name: 'Selesaikan pertandingan',
    text: 'Tekan Selesaikan Pertandingan untuk melihat pemenang diumumkan dengan trofi dan konfeti.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Pencatat Skor Ping Pong Online Gratis : Pelacak Pertandingan Tenis Meja',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mencatat skor ping pong seharusnya sederhana, tetapi aturannya bisa membingungkan. Siapa server selanjutnya? Apakah 10-10 atau 11-9? Berapa banyak game yang dimenangkan setiap pemain? Pencatat skor ping pong online gratis ini menangani semua itu secara otomatis. Anda cukup menekan tombol + saat seseorang mencetak skor. Pencatat skor melacak poin per game, game yang dimenangkan dalam pertandingan, dan siapa yang melakukan servis. Semuanya diperbarui secara real-time dengan animasi perayaan yang membuat setiap poin berarti. Tanpa pendaftaran, tanpa unduhan, tanpa menu rumit.',
    },
    {
      type: 'title',
      text: 'Cara kerja skor ping pong di pencatat skor ini',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenis meja mengikuti sistem penilaian standar. Setiap game dimainkan hingga 11 poin. Seorang pemain harus menang dengan selisih 2 poin, jadi jika skor mencapai 10-10, permainan berlanjut hingga seseorang unggul 2 poin. Server berganti setiap 2 poin selama game. Pencatat skor ini melacak semua aturan ini secara otomatis. Anda tidak perlu mengingat siapa yang melakukan servis atau kapan harus berganti. Indikator server menunjukkan titik di samping server saat ini. Saat pemain memenangkan game, pencatat skor secara otomatis beralih ke game berikutnya. Penghitung game yang dimenangkan bertambah untuk pemenang. Pertandingan bisa berapa pun jumlah game, tetapi biasanya best of 5 atau 7. Tekan Selesaikan Pertandingan saat pertandingan selesai dan pemenang diumumkan dengan perayaan.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pertandingan Persahabatan',
          description: 'Skor cepat dan mudah untuk ping pong santai dengan teman. Pelacakan game dan pertandingan otomatis.',
          icon: 'mdi:table-tennis',
          points: ['Satu ketukan per poin', 'Pelacakan server otomatis', 'Bekerja offline'],
        },
        {
          title: 'Klub & Liga',
          description: 'Simpan catatan game dan hasil pertandingan yang bersih. Sempurna untuk turnamen klub dan liga.',
          icon: 'mdi:trophy-outline',
          points: ['Pelacakan game dimenangkan', 'Dukungan best of 5 atau 7', 'Ramah seluler'],
        },
        {
          title: 'Turnamen',
          description: 'Lacak banyak pertandingan dalam pengaturan turnamen. Reset cepat antar pertandingan.',
          icon: 'mdi:school',
          points: ['Reset pertandingan cepat', 'Skor tersimpan', 'Mode layar penuh'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Apa yang membuat pencatat skor ping pong ini istimewa',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Skor game otomatis</strong> pencatat skor tahu aturan ping pong. Game hingga 11, menang dengan selisih 2, perubahan server otomatis.',
        '<strong>Pelacakan game dimenangkan</strong> setiap game yang dimenangkan tercatat. Lihat sekilas berapa banyak game yang dimenangkan setiap pemain dalam pertandingan.',
        '<strong>Indikator server</strong> titik terlihat menunjukkan pemain yang sedang melakukan servis, mengikuti aturan rotasi 2 poin.',
        '<strong>Animasi perayaan gol</strong> setiap poin memicu animasi perayaan acak. Delapan efek berbeda membuat setiap poin menarik.',
        '<strong>Partikel mengambang</strong> setiap poin yang dicetak memunculkan teks mengambang yang merayakan momen tersebut.',
        '<strong>Upacara Selesaikan Pertandingan</strong> tekan Selesaikan Pertandingan untuk memicu pengumuman pemenang dengan trofi dan konfeti.',
        '<strong>Nama pemain dapat diedit</strong> ketuk bidang nama untuk mengganti nama pemain. Nama disimpan di browser Anda.',
        '<strong>Mode layar penuh</strong> menyembunyikan antarmuka browser sehingga papan skor memenuhi layar dan menjaganya tetap aktif.',
        '<strong>Offline first</strong> berfungsi tanpa internet. Tanpa iklan, tanpa pelacakan, tanpa pengumpulan data.',
      ],
    },
    {
      type: 'title',
      text: 'Pencatat Skor Ping Pong vs Skor Manual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Skor manual dalam ping pong membutuhkan pelacakan skor, mengingat siapa yang melakukan servis, mengetahui kapan harus berganti server, dan menghitung game yang dimenangkan. Mudah kehilangan jejak, terutama dalam game yang cepat. Pencatat skor digital ini menangani semuanya secara otomatis. Anda hanya perlu menekan tombol saat poin dicetak. Pencatat skor melacak skor game, mendeteksi kapan game dimenangkan, mencatat game yang dimenangkan dalam pertandingan, dan menunjukkan siapa yang melakukan servis. Setiap poin dirayakan dengan animasi dan partikel. Skor tidak pernah kacau dan Anda tidak pernah melewatkan perubahan server. Baik Anda bermain game santai dengan teman atau bertanding di turnamen, pencatat skor ping pong online gratis ini memberi Anda semua yang Anda butuhkan.',
    },
  ],
  ui: {
    playerA: 'Pemain 1',
    playerB: 'Pemain 2',
    winnerLabel: 'JUARA',
    finishMatch: 'Selesaikan Pertandingan',
    newGame: 'Game Baru',
    serving: 'Melakukan Servis',
    changeSide: 'Ganti Sisi',
    swapHint: 'Ketuk untuk menukar',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Poin Game',
    matchPoint: 'Poin Pertandingan',
    mode: 'Format',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Poin',
    reset: 'Setel Ulang',
    resetConfirm: 'Setel ulang pertandingan? Semua data akan hilang.',
    cancel: 'Batal',
    fullscreen: 'Layar penuh',
    exitFullscreen: 'Keluar layar penuh',
  },
};
