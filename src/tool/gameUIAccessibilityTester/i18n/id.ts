import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'penguji-stres-aksesibilitas-ui-game';
const title = 'Penguji Stres Aksesibilitas UI Game';
const description = 'Inspeksi tangkapan layar UI game secara lokal dengan simulasi buta warna, pengukur kontras HUD, efek kabur, pemfokusan visual, dan peta panas tepi.';

const faq = [
  {
    question: 'Apakah alat ini menyertifikasi aksesibilitas UI game saya?',
    answer: 'Tidak. Alat ini menggabungkan simulasi buta warna, pengukuran kontras warna, dan panduan tinjauan visual. Gunakan hasilnya untuk panduan desain dan pengujian pemain.',
  },
  {
    question: 'Apakah gambar saya diunggah ke server?',
    answer: 'Tidak. Gambar diproses dan dianalisis sepenuhnya di dalam peramban Anda. Hanya pengaturan tampilan yang disimpan secara lokal.',
  },
  {
    question: 'Apa yang harus diukur dengan dua sampel warna?',
    answer: 'Pilih dua warna yang memiliki arti berbeda seperti penanda kawan dan lawan, status aktif dan nonaktif, atau tingkat kelangkaan item.',
  },
  {
    question: 'Mengapa rasio kontras yang baik masih memerlukan peninjauan manual?',
    answer: 'Pasangan warna mungkin memiliki rasio baik, tetapi ikon kecil, teks tipis, latar belakang bergerak, atau penggunaan warna tunggal tetap bisa membingungkan.',
  },
  {
    question: 'Apa yang ditampilkan oleh peta panas?',
    answer: 'Peta panas menyorot area di mana pemisahan warna menurun drastis setelah simulasi diterapkan.',
  },
];

const howTo = [
  { name: 'Muat tangkapan layar', text: 'Pilih gambar PNG, JPEG, atau WebP dari game Anda. Gambar tetap berada di memori lokal peramban Anda.' },
  { name: 'Pilih lensa simulasi', text: 'Bandingkan gambar asli dengan simulasi buta warna, skala abu-abu, atau kontras rendah.' },
  { name: 'Terapkan stres visual', text: 'Tambahkan efek kabur, kurangi skala tampilan, perbesar piksel, atau aktifkan peta panas tepi.' },
  { name: 'Ukur dua sinyal penting', text: 'Pilih Sampel A atau B lalu klik pada gambar asli untuk membandingkan dua warna utama.' },
  { name: 'Ekspor hasil analisis', text: 'Catat temuan Anda dan unduh lembar perbandingan serta laporan terstruktur JSON.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Muat satu tangkapan layar UI game Anda, pilih lensa simulasi, lalu bandingkan dua sinyal visual yang harus dibedakan oleh pemain.',
    privacyNote: 'Analisis lokal. Gambar tidak diunggah ke server.',
    dropTitle: 'Letakkan tangkapan layar game di area kerja',
    dropHint: 'Tarik gambar ke sini atau pilih dari perangkat Anda. Gunakan momen permainan nyata dengan latar belakang asli.',
    chooseImage: 'Pilih tangkapan layar',
    replaceImage: 'Ganti tangkapan layar',
    supportedFiles: 'PNG, JPEG, atau WebP hingga 16 MB. Gambar besar disesuaikan hingga 1600 px.',
    lensLabel: 'Lensa simulasi',
    lensOriginal: 'Asli',
    lensProtanopia: 'Protanopia',
    lensDeuteranopia: 'Deuteranopia',
    lensTritanopia: 'Tritanopia',
    lensAchromatopsia: 'Skala abu-abu',
    lensReducedContrast: 'Kontras rendah',
    lensDesaturation: 'Desaturasi',
    compareLabel: 'Tampilan perbandingan',
    compareSideBySide: 'Berdampingan',
    compareSplit: 'Lensa terpisah',
    comparePress: 'Tekan untuk melihat asli',
    holdOriginal: 'Tahan untuk lihat asli',
    splitPosition: 'Posisi lensa',
    stressLabel: 'Kontrol stres sinyal',
    blurLabel: 'Efek kabur piksel',
    downscaleLabel: 'Pratinjau layar kecil',
    downscaleFull: 'Penuh',
    downscaleHalf: 'Setengah',
    downscaleQuarter: 'Seperempat',
    downscaleEighth: 'Seperdelapan',
    zoomLabel: 'Perbesar piksel',
    heatmapLabel: 'Peta panas tepi',
    heatmapHint: 'Menyorot bagian yang kehilangan pemisahan warna secara signifikan.',
    originalView: 'Sinyal visual asli',
    simulatedView: 'Sinyal simulasi stres',
    emptyCanvas: 'Pilih tangkapan layar untuk memulai. Gambar Anda tetap berada di perangkat ini.',
    sampleTitle: 'Sampel sinyal penting',
    sampleInstructions: 'Pilih A atau B lalu klik pada gambar asli untuk mengambil sampel warna.',
    sampleA: 'Sampel A',
    sampleB: 'Sampel B',
    sampleAName: 'Arti Sampel A',
    sampleBName: 'Arti Sampel B',
    manualColor: 'Atur warna secara manual',
    sampleAInitial: 'Penanda kawan',
    sampleBInitial: 'Penanda lawan',
    noSample: 'Menunggu gambar',
    originalContrast: 'Kontras asli',
    simulatedContrast: 'Kontras simulasi',
    separationRetained: 'Pemisahan tersisa',
    statusStrong: 'Sinyal tetap jelas',
    statusWatch: 'Periksa dalam konteks',
    statusReview: 'Tinjau desain sinyal',
    statusPending: 'Belum ada analisis',
    measurementLabel: 'Pengukuran',
    heuristicLabel: 'Heuristik',
    manualReviewLabel: 'Status tinjauan',
    measurementHint: 'Pengukuran kontras menggunakan rumus rasio kontras relative luminance WCAG.',
    heuristicHint: 'Pemisahan tersisa membandingkan jarak warna sebelum dan sesudah simulasi.',
    promptTitle: 'Panduan tinjauan UI',
    promptColorOnly: 'Bisakah pemain mengenali elemen tanpa hanya mengandalkan warna?',
    promptChangingBackground: 'Apakah teks tetap terbaca di atas latar belakang yang terang atau bergerak?',
    promptMinimap: 'Apakah ikon peta dibedakan dengan bentuk atau pola selain warna?',
    promptStates: 'Apakah status aktif, nonaktif, dan cooldown terlihat jelas?',
    promptShape: 'Apakah ada ikon atau suara yang memperkuat sinyal warna?',
    findingLabel: 'Catatan tim',
    findingPlaceholder: 'Contoh: Garis tepi lawan memudar di atas efek merah',
    addFinding: 'Tambah catatan',
    findingsEmpty: 'Belum ada catatan tertulis.',
    exportSheet: 'Unduh gambaran perbandingan',
    exportReport: 'Unduh laporan JSON',
    resetTool: 'Reset sesi',
    uploadError: 'Gagal membaca gambar. Pilih PNG, JPEG, atau WebP yang valid.',
    fileTooLarge: 'Ukuran file lebih dari 16 MB. Gunakan gambar yang lebih kecil.',
    imageReady: 'Tangkapan layar dimuat. Ambil dua sampel warna untuk memulai.',
    reportDownloaded: 'Laporan terstruktur berhasil diunduh.',
    sheetDownloaded: 'Lembar perbandingan berhasil diunduh.',
    localOnlyDisclosure: 'Proses simulasi dan analisis berjalan 100% di peramban Anda.',
    limitationDisclosure: 'Alat ini membantu proses desain dan bukan pengganti pengujian dengan pemain.',
    reportTitle: 'Laporan Tinjauan Aksesibilitas UI Game',
    reportFindingReview: 'Pasangan warna yang diukur mengalami penurunan kontras yang signifikan.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Inspeksi aksesibilitas UI game secara lokal tanpa mengunggah gambar',
    },
    {
      type: 'paragraph',
      html: 'Antarmuka game sering kali harus terbaca dalam kondisi visual yang cepat dan penuh efek. Alat ini memungkinkan Anda menguji tangkapan layar game secara langsung di peramban menggunakan simulasi persepsi warna.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Pengukuran, heuristik, dan evaluasi desain',
    },
    {
      type: 'table',
      headers: ['Jenis Bukti', 'Yang Disediakan Alat Ini', 'Yang Tidak Bisa Disimpulkan'],
      rows: [
        ['Pengukuran', 'Rasio kontras dan luminansi relatif untuk dua warna sRGB', 'Kepatuhan otomatis seluruh elemen dalam game'],
        ['Simulasi', 'Transformasi matrik visual untuk protanopia, deuteranopia, dan tritanopia', 'Pengalaman visual pasti dari setiap individu'],
        ['Heuristik', 'Efek kabur, pemfokusan visual, dan deteksi tepi warna', 'Penilaian kualitas desain secara menyeluruh'],
        ['Tinjauan Manual', 'Daftar periksa dan laporan yang dapat diekspor', 'Pengganti untuk pengujian dengan pengguna langsung'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Gunakan sampel warna yang mempengaruhi keputusan pemain',
    },
    {
      type: 'paragraph',
      html: 'Pilih pasangan warna yang menentukan aksi pemain, seperti penanda kawan dan lawan atau indikator kesehatan. Jika kontras menurun pada kondisi simulasi, pertimbangkan untuk menambahkan indikator bentuk atau ikon.',
    },
    {
      type: 'tip',
      title: 'Gunakan tangkapan layar saat gameplay intens',
      html: 'Gunakan gambar dari momen permainan yang penuh efek visual untuk mendapatkan hasil pengujian yang realistis.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Manfaatkan laporan ekspor untuk komunikasi tim',
    },
    {
      type: 'paragraph',
      html: 'Ekspor laporan JSON dan gambar perbandingan PNG dapat dilampirkan langsung pada tiket pengembangan untuk mempermudah perbaikan antarmuka.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Mendokumentasikan temuan secara konsisten',
    },
    {
      type: 'paragraph',
      html: 'Catat adegan, resolusi, dan pasangan warna yang diperiksa. Temuan yang berguna menjelaskan sinyal yang terlihat, kondisi yang terdampak, serta perbaikan dengan bentuk, ikon, pola, atau suara.',
    },
    {
      type: 'paragraph',
      html: 'Simulasi membantu menemukan masalah desain lebih awal, tetapi tidak mengukur seluruh aksesibilitas game. Ulangi pemeriksaan dengan adegan nyata, beberapa layar, dan pemain dengan kondisi penglihatan yang beragam.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
