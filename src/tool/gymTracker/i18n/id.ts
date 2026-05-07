import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'pelacak-latihan-gym';
const title = 'Pelacak Latihan Gym: Bagan Kemajuan dan Log Kekuatan';
const description =
  'Catat angkatan Anda, pilih latihan, dan visualisasikan kemajuan Anda dengan bagan kekuatan. Optimalkan beban progresif Anda di gym.';

const faqData = [
  {
    question: 'Apa tujuan dari pelacakan latihan?',
    answer:
      'Ini berfungsi untuk menerapkan beban progresif secara ilmiah. Dengan mengetahui secara pasti berapa banyak yang Anda angkat pada sesi sebelumnya, Anda dapat mencoba melampaui tanda itu, menjamin pertumbuhan otot dan peningkatan kekuatan jangka panjang.'
  },
  {
    question: 'Data apa yang harus saya catat?',
    answer:
      'Hal yang paling penting adalah berat maksimum (top set) yang Anda capai dengan bentuk yang baik untuk jumlah pengulangan yang ditetapkan. Alat kami berfokus pada pencatatan berat per sesi untuk menghasilkan bagan kemajuan Anda.'
  },
  {
    question: 'Bagaimana bagan diinterpretasikan?',
    answer:
      'Garis yang naik menunjukkan Anda sedang mengalami kemajuan. Garis datar (stagnan) menunjukkan Anda perlu menyesuaikan volume, intensitas, atau pemulihan Anda. Garis turun yang terus-menerus mungkin merupakan tanda latihan berlebih.'
  },
  {
    question: 'Di mana data saya disimpan?',
    answer:
      'Data disimpan secara lokal di browser Anda (Local Storage). Ini berarti privasi Anda total dan Anda tidak perlu membuat akun, tetapi jika Anda menghapus data browser, riwayat akan hilang.'
  },
];

const howToData = [
  {
    name: 'Pilih latihan',
    text: 'Pilih dari angkatan fundamental seperti Squat, Bench Press, atau Deadlift di menu dropdown.'
  },
  {
    name: 'Masukkan berat',
    text: 'Setelah set terberat Anda, masukkan kilogram/pon yang diangkat di kolom yang sesuai.'
  },
  {
    name: 'Tekan Tambah',
    text: 'Simpan tanda Anda. Sistem akan secara otomatis memperbarui riwayat dan bagan kemajuan Anda.'
  },
  {
    name: 'Analisis evolusi Anda',
    text: 'Konsultasikan bagan secara berkala untuk mengidentifikasi masa stagnasi dan memotivasi diri Anda dengan melihat pertumbuhan kekuatan nyata Anda.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id'
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
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
      text: 'Pelacakan Latihan Gym: Kunci Menuju Kemajuan Nyata',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dalam dunia kebugaran dan binaraga, ada prinsip fundamental yang memisahkan mereka yang mendapatkan hasil luar biasa dari mereka yang cepat stagnan: <strong>beban progresif (progressive overload)</strong>. Namun, tidak mungkin menerapkan prinsip ini secara efektif jika Anda tidak menyimpan catatan mendalam tentang angkatan Anda. Dalam panduan ini, kita akan mengeksplorasi mengapa melacak latihan Anda sangat penting, bagaimana menggunakan <strong>pelacak latihan gym</strong> kami untuk memaksimalkan keuntungan Anda, dan landasan ilmiah yang mendukung praktik ini.'
    },
    {
      type: 'title',
      text: 'Apa itu Beban Progresif?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Beban progresif adalah peningkatan bertahap dari stres yang diterapkan pada tubuh selama latihan fisik. Agar otot tumbuh atau menguat, ia harus dikenai rangsangan yang lebih besar daripada yang biasa diterimanya. Jika Anda pergi ke gym dan selalu mengangkat berat yang sama, dengan pengulangan yang sama dan waktu istirahat yang sama, tubuh Anda tidak akan memiliki alasan biologis untuk beradaptasi dan tumbuh.'
    },
    {
      type: 'list',
      items: [
        'Peningkatan berat: Mengangkat beban lebih banyak daripada sesi sebelumnya.',
        'Peningkatan repetisi: Melakukan lebih banyak repetisi dengan berat yang sama.',
        'Peningkatan volume: Melakukan lebih banyak set total per kelompok otot.',
        'Pengurangan istirahat: Melakukan pekerjaan yang sama dalam waktu lebih singkat.',
        'Peningkatan bentuk: Melakukan latihan dengan kontrol yang lebih baik dan rentang gerak yang lebih besar.',
      ]
    },
    {
      type: 'title',
      text: 'Mengapa Pencatatan Manual Lebih Unggul daripada Ingatan',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Banyak atlet membuat kesalahan dengan memercayai ingatan mereka untuk mengingat berapa banyak yang mereka angkat minggu lalu. Namun, dalam latihan tipikal yang mencakup antara 5 dan 10 latihan berbeda, sangat mudah untuk melupakan apakah Anda melakukan 180 pon atau 185 pon pada press, atau apakah Anda berhasil melakukan 10 repetisi atau 12. Kurangnya presisi ini menyebabkan hasil yang biasa-biasa saja.'
    },
    {
      type: 'tip',
      title: 'Kekuatan Visualisasi Kemajuan',
      html: 'Melihat garis yang naik pada bagan memberi Anda dorongan yang dibutuhkan untuk mencoba pengulangan ekstra yang menandai perbedaan antara stagnasi dan pertumbuhan otot yang konsisten.'
    },
    {
      type: 'title',
      text: 'Latihan Fundamental untuk Pelacakan',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Meskipun semua latihan berharga, latihan gabungan (compound) tertentu menawarkan pandangan terbaik tentang kekuatan keseluruhan dan perkembangan fisik Anda. Inilah yang harus Anda prioritaskan dalam pelacakan Anda: <strong>Bench Press</strong> untuk dorongan horizontal, <strong>Overhead Press</strong> untuk dorongan vertikal, <strong>Pull-ups</strong> untuk tarikan, dan <strong>Hip Thrust</strong> untuk glute.'
    },
    {
      type: 'title',
      text: 'Cara Menganalisis Bagan Kemajuan Anda',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Setelah Anda mencatat beberapa latihan, Anda akan mulai melihat pola: <strong>garis naik yang konstan</strong> menunjukkan jalur yang benar, <strong>masa stagnasi</strong> menunjukkan Anda perlu menyesuaikan volume atau istirahat, dan <strong>tren menurun</strong> bisa menjadi tanda kelelahan yang terakumulasi.'
    },
    {
      type: 'title',
      text: 'Psikologi Kesuksesan di Gym',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Latihan adalah tantangan mental sekaligus fisik. Dengan menggunakan alat visual yang menunjukkan bahwa hari ini Anda 1% lebih kuat daripada lima belas hari yang lalu, Anda memberi makan sistem penghargaan dopamin Anda. Ini menciptakan loop umpan balik positif yang mengubah latihan menjadi kebiasaan yang berkelanjutan.'
    },
  ],
  ui: {
    exerciseLabel: 'Latihan',
    pushCategory: 'Dorong (Push)',
    pullCategory: 'Tarik (Pull)',
    gluteCategory: 'Glute',
    customExerciseCategory: 'Kustom',
    addCustomExercisetitle: 'Tambah latihan kustom',
    newExerciseLabel: 'Latihan baru',
    exercisePlaceholder: 'Nama latihan...',
    addBtn: 'Tambah',
    registerWeightLabel: 'Log Berat',
    weightPlaceholder: '00.0',
    startBtn: 'Mulai',
    resetBtn: 'Atur Ulang',
    okBtn: 'OKE',
    noData: 'Tidak ada data',
    recordLabel: 'Rekor',
    lastLabel: 'Terakhir',
    historyTitle: 'Log',
    exportBtn: 'Ekspor',
    confirmDeletetitle: 'Hapus riwayat?',
    confirmDeleteText: 'Tindakan ini tidak dapat dibatalkan. Semua log untuk latihan yang dipilih akan dihapus.',
    deleteBtn: 'Hapus',
    cancelBtn: 'Batal',
    units: 'kg',

    benchPress: 'Bench Press',
    overheadPress: 'Overhead Press',
    pushPress: 'Push Press',
    inclineDbPress: 'Incline DB Press',
    dipsTriceps: 'Triceps Dips',
    tricepsExtensions: 'Cable Triceps Extensions',
    pullUp: 'Pull-ups',
    barbellRow: 'Barbell Row',
    latPulldown: 'Lat Pulldown',
    dbRow: 'Dumbbell Row',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Barbell Biceps Curl',
    hipThrust: 'Hip Thrust',
    rdl: 'Romanian Deadlift',
    lunges: 'Lunges',
    gluteKick: 'Cable Glute Kickback',
    hipAbduction: 'Machine Hip Abduction',
    stepUp: 'Step Up'
  }
};
