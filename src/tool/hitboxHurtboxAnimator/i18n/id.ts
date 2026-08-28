import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'animator-hitbox-hurtbox-sprite';
const title = 'Animator Hitbox dan Hurtbox Sprite';
const description = 'Buat lapisan tabrakan pada setiap bingkai sprite, pratinjau animasi dengan fitur onion skin, sesuaikan koordinat piksel, dan ekspor JSON terstruktur.';

const faq = [
  {
    question: 'Apa perbedaan antara hitbox dan hurtbox?',
    answer: 'Hitbox menandai area serangan, sedangkan hurtbox menandai area yang dapat menerima serangan. Pushbox mengatur jarak antar karakter, grabbox menentukan jangkauan tangkapan, dan sensor berfungsi sebagai area deteksi.',
  },
  {
    question: 'Apakah gambar sprite saya diunggah ke server?',
    answer: 'Tidak. Seluruh pemrosesan gambar dilakukan di dalam peramban Anda. Alat ini hanya menyimpan pengaturan preferensi secara lokal.',
  },
  {
    question: 'Sistem koordinat apa yang digunakan oleh ekspor JSON?',
    answer: 'Setiap bingkai mengukur koordinat piksel dari sudut kiri atas. Nilai lebar, tinggi, dan posisi titik pivot disimpan dalam koordinat lokal.',
  },
  {
    question: 'Bisakah saya mengedit lembaran sprite dan gambar bingkai terpisah?',
    answer: 'Ya. Anda dapat memuat satu lembaran sprite PNG/WebP dengan mengatur jumlah baris dan kolom, atau memilih beberapa gambar berurutan.',
  },
  {
    question: 'Apakah hasil ekspor dapat langsung digunakan di mesin game?',
    answer: 'Format JSON bersifat netral dan dapat adaptasikan. Format ini menyimpan posisi kotak, titik pivot, dan bentuk geometri tanpa terikat pada mesin game tertentu.',
  },
];

const howTo = [
  { name: 'Muat gambar animasi', text: 'Pilih lembaran sprite PNG/WebP atau urutan gambar bingkai. Pemrosesan dilakukan secara lokal di perangkat Anda.' },
  { name: 'Atur potong bingkai', text: 'Tentukan jumlah baris dan kolom untuk lembaran sprite dan periksa setiap bingkai pada bilah waktu.' },
  { name: 'Gambar lapisan tabrakan', text: 'Pilih jenis hitbox, hurtbox, pushbox, atau sensor, lalu buat bentuk persegi atau lingkaran.' },
  { name: 'Adjust gerakan animasi', text: 'Edit koordinat secara presisi, salin bentuk ke bingkai lain, dan gunakan onion skin untuk melihat animasi sebelumnya.' },
  { name: 'Ekspor proyek JSON', text: 'Unduh berkas JSON dan lembaran kontak PNG. Simpan gambar asli bersama berkas JSON.' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Muat animasi sprite, atur potongan bingkai, dan buat area serangan, area terkena dampak, atau area pergerakan fisika.',
    privacyNote: 'Meja kerja lokal. Gambar tidak diunggah ke server.',
    loadSprite: 'Muat gambar ke area kerja',
    loadHint: 'Pilih satu lembaran sprite atau beberapa file PNG/WebP berurutan.',
    chooseImages: 'Pilih gambar sprite',
    slicingTitle: 'Pemotongan bingkai',
    rowsLabel: 'Baris',
    columnsLabel: 'Kolom',
    applySlicing: 'Potong bingkai',
    playbackTitle: 'Pratinjau gerakan',
    previousFrame: 'Bingkai sebelumnya',
    play: 'Putar',
    pause: 'Jeda',
    nextFrame: 'Bingkai berikutnya',
    fpsLabel: 'Bingkai per detik',
    onionPrevious: 'Lapisan sebelumnya',
    onionNext: 'Lapisan berikutnya',
    layerTitle: 'Lapisan tabrakan',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Sensor',
    typeCustom: 'Kustom',
    shapeRectangle: 'Persegi Panjang',
    shapeCircle: 'Lingkaran',
    drawShape: 'Gambar',
    selectShape: 'Pilih',
    stageLabel: 'Area animasi',
    emptyStage: 'Muat gambar sprite untuk mulai membuat lapisan tabrakan.',
    frameReadout: 'Bingkai {current} dari {total}',
    timelineTitle: 'Bilah animasi',
    inspectorTitle: 'Inspektur bentuk',
    noSelection: 'Pilih bentuk untuk mengubah nilai koordinat secara presisi.',
    nameLabel: 'Nama lapisan',
    xLabel: 'X dalam piksel',
    yLabel: 'Y dalam piksel',
    widthLabel: 'Lebar dalam piksel',
    heightLabel: 'Tinggi dalam piksel',
    radiusLabel: 'Jari-jari dalam piksel',
    duplicateShape: 'Duplikat',
    mirrorShape: 'Cermin horizontal',
    deleteShape: 'Hapus bentuk',
    copyPrevious: 'Salin bingkai sebelumnya ke sini',
    copyAll: 'Salin bingkai ini ke semua',
    pivotTitle: 'Titik pivot',
    pivotXLabel: 'Pivot X',
    pivotYLabel: 'Pivot Y',
    exportTitle: 'Ekspor proyek',
    exportJson: 'Unduh JSON',
    importJson: 'Impor JSON',
    exportContactSheet: 'Unduh lembar kontak',
    resetProject: 'Reset lapisan',
    undo: 'Batal',
    redo: 'Ulangi',
    statusReady: 'Area kerja siap.',
    statusImageLoaded: '{count} file gambar dimuat.',
    statusShapeCreated: 'Bentuk tabrakan baru ditambahkan.',
    statusShapeUpdated: 'Bentuk tabrakan diperbarui.',
    statusImported: 'Proyek berhasil diimpor.',
    statusExported: 'Berkas ekspor siap.',
    statusError: 'File tidak dapat dibaca.',
    framesBadge: '{count} bingkai',
    shapesBadge: '{count} bentuk',
    coverageBadge: '{percent}% cakupan',
    coordinatesNote: 'Koordinat dihitung dari sudut kiri atas bingkai sebagai titik asal (0,0).',
    localOnlyDisclosure: 'Berkas JSON menyimpan data bentuk dan titik pivot tanpa menyertakan data gambar.',
    limitationDisclosure: 'Lapisan ini merupakan panduan geometri desain. Uji kembali di dalam mesin game Anda.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Desain hitbox dan hurtbox sesuai dengan gerakan sprite',
    },
    {
      type: 'paragraph',
      html: 'Mengatur area tabrakan menjadi rumit jika setiap bingkai dianalisis secara terpisah. Alat ini menggabungkan tampilan sprite, lapisan tabrakan, dan alur animasi untuk memastikan konsistensi gerakan.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Pilih jenis lapisan sesuai dengan fungsi permainan',
    },
    {
      type: 'table',
      headers: ['Lapisan', 'Fungsi Utama', 'Hal yang Perlu Diperiksa'],
      rows: [
        ['Hitbox', 'Area yang menghasilkan serangan', 'Apakah hanya aktif pada bingkai yang tepat?'],
        ['Hurtbox', 'Area yang menerima serangan', 'Apakah mengikuti bentuk karakter dengan pas?'],
        ['Pushbox', 'Area tabrakan fisik antar karakter', 'Apakah ukurannya stabil agar tidak bergetar?'],
        ['Grabbox', 'Jangkauan untuk tangkapan', 'Apakah waktunya sesuai dengan animasi visual?'],
        ['Sensor', 'Area deteksi pemicu atau interaksi', 'Apakah namanya sudah cukup jelas?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Memahami sistem koordinat bingkai',
    },
    {
      type: 'paragraph',
      html: 'Proyek JSON yang diekspor mengukur posisi X dan Y dari sudut kiri atas setiap bingkai. Nilai lebar dan tinggi disimpan dalam ukuran piksel asli.',
    },
    {
      type: 'tip',
      title: 'Periksa seluruh urutan gerakan animasi',
      html: 'Putar animasi secara penuh setelah mengubah satu bingkai untuk memastikan alur gerakan tetap halus.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Gunakan lembaran kontak untuk peninjauan tim',
    },
    {
      type: 'paragraph',
      html: 'Lembaran kontak PNG menampilkan semua bingkai dan lapisan tabrakan dalam satu gambar untuk mempermudah komunikasi tim.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Menguji frame aktif dan koordinat secara bersamaan',
    },
    {
      type: 'paragraph',
      html: 'Bentuk collision yang baik mengikuti siluet sekaligus waktu aksi. Periksa fase awal, aktif, dan pemulihan secara terpisah, lalu bandingkan box hasil ekspor agar hit tidak aktif sebelum gerakan terlihat atau setelah gerakan berakhir.',
    },
    {
      type: 'paragraph',
      html: 'Pratinjau mendokumentasikan geometri dan layer, bukan seluruh logika collision pada engine. Uji jangkauan, prioritas, pushback, dan perilaku jaringan di proyek yang benar-benar terintegrasi.',
    },
  ],
  faq,
  bibliographyTitle: 'Referensi desain area tabrakan',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
