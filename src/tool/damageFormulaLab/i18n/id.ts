import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulator-formula-damage-game-ttk';
const title = 'Kalkulator Formula Damage Game dan Grafik TTK';
const description = 'Bandingkan formula damage game secara langsung melalui kurva interaktif, peta panas serangan dan pertahanan, pembulatan nilai, serta Time to Kill (TTK).';

const faq = [
  {
    question: 'Apa saja yang dibandingkan oleh kalkulator formula damage ini?',
    answer: 'Alat ini menguji dua formula matematika aman dengan variabel pertarungan yang sama. Anda dapat membandingkan kurva damage, ambang jumlah pukulan, time to kill (TTK), aturan pembulatan, dan urutan resistensi.',
  },
  {
    question: 'Variabel dan fungsi apa saja yang dapat saya gunakan?',
    answer: 'Variabel yang tersedia adalah attack, defense, level, power, resistance, flat, criticalChance, dan criticalMultiplier. Fungsi aman yang didukung meliputi min, max, clamp, abs, sqrt, pow, floor, round, dan ceil.',
  },
  {
    question: 'Bagaimana cara menghitung Time to Kill (TTK)?',
    answer: 'Jumlah pukulan dihitung dari darah target dibagi damage yang diharapkan (dibulatkan ke atas). TTK dihitung dari interval antar pukulan: (pukulan - 1) / serangan per detik.',
  },
  {
    question: 'Mengapa urutan resistensi mempengaruhi hasil kalkulasi?',
    answer: 'Menerapkan nilai pengurang tetap sebelum persentase resistensi akan mengurangi dampak pengurang tetap tersebut. Jika resistensi diterapkan lebih dulu, nilai pengurang tetap tidak terpengaruh.',
  },
  {
    question: 'Apakah kurva yang mulus menjamin keseimbangan game?',
    answer: 'Tidak. Kurva membantu menemukan daerah tanpa damage dan lonjakan ekstrem, tetapi keseimbangan permainan tetap bergantung pada pengujian langsung dan peran karakter.',
  },
];

const howTo = [
  { name: 'Pilih dua formula', text: 'Gunakan templat dasar (linier, rasio, atau skala level) atau masukkan dua formula kustom.' },
  { name: 'Atur variabel pertarungan', text: 'Masukkan nilai attack, defense, level, koefisien power, persentase resistensi, pengurang tetap, kritis, darah target, dan kecepatan serangan.' },
  { name: 'Tentukan aturan pembulatan', text: 'Pilih metode pembulatan damage dan urutan penerapan resistensi.' },
  { name: 'Analisis kurva dan grafik', text: 'Perhatikan grafik perbandingan damage, peta panas pertahanan, jumlah pukulan yang dibutuhkan, dan peringatan batas.' },
  { name: 'Simpan eksperimen', text: 'Salin tautan berbagi atau unduh berkas konfigurasi JSON, tabel CSV, atau gambar grafik PNG.' },
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

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Masukkan formula yang Anda gunakan saat ini, sandingkan dengan formula alternatif, lalu sesuaikan status pertarungan.',
    localNote: 'Model privat. Formula dan berkas diproses sepenuhnya di dalam peramban ini.',
    formulaDeck: 'Area Formula',
    formulaALabel: 'Formula A (Model Saat Ini)',
    formulaBLabel: 'Formula B (Pembanding)',
    formulaHint: 'Variabel: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Fungsi Aman: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Perlindungan Linier',
    presetRatio: 'Armor Rasio',
    presetLevel: 'Skala Level',
    combatInputs: 'Status Pertarungan',
    attackLabel: 'Attack',
    defenseLabel: 'Defense',
    levelLabel: 'Level',
    powerLabel: 'Koefisien Power',
    resistanceLabel: 'Persentase Resistensi',
    flatLabel: 'Pengurang Tetap (Flat)',
    criticalChanceLabel: 'Peluang Kritis (%)',
    criticalMultiplierLabel: 'Pengganda Kritis',
    healthLabel: 'Darah Target',
    cadenceLabel: 'Serangan per Detik',
    roundingLabel: 'Pembulatan Damage',
    roundingNone: 'Simpan Desimal',
    roundingFloor: 'Pembulatan Bawah (Floor)',
    roundingRound: 'Angka Bulat Terdekat',
    roundingCeil: 'Pembulatan Atas (Ceil)',
    orderLabel: 'Urutan Modifikator',
    resistanceFirst: 'Resistensi Lalu Pengurang Tetap',
    flatFirst: 'Pengurang Tetap Lalu Resistensi',
    runLabel: 'Perbandingan Dampak Langsung',
    resultDamage: 'Damage Diharapkan',
    resultHits: 'Pukulan untuk Menang',
    resultTtk: 'Time to Kill (TTK)',
    resultDifference: 'Selisih Damage',
    formulaAName: 'Saat Ini',
    formulaBName: 'Pembanding',
    curveTitle: 'Tren Peningkatan Attack',
    curveCaption: 'Grafik menunjukkan perubahan damage saat nilai attack dinaikkan dari setengah hingga dua kali lipat.',
    heatmapTitle: 'Peta Panas Tekanan',
    heatmapCaption: 'Setiap kotak menampilkan damage yang diharapkan dari Formula A pada kombinasi attack dan defense.',
    attackAxis: 'Attack meningkat ke kanan',
    defenseAxis: 'Defense meningkat ke bawah',
    scenariosTitle: 'Skenario Pertarungan',
    scenarioSkirmisher: 'Skirmisher',
    scenarioGuardian: 'Guardian',
    scenarioBoss: 'Boss',
    scenarioCustom: 'Pengaturan Saat Ini',
    diagnosticsTitle: 'Pemeriksaan Batas & Peringatan',
    statusBalanced: 'Tidak ditemukan lonjakan matematis abnormal pada pengujian ini.',
    exportTitle: 'Ekspor Hasil Eksperimen',
    copyLink: 'Salin Tautan Berbagi',
    exportCsv: 'Unduh CSV',
    exportJson: 'Unduh JSON',
    importJson: 'Impor JSON',
    exportPng: 'Unduh Gambar PNG',
    reset: 'Reset Model',
    privacyDisclosure: 'Tautan berbagi menyimpan konfigurasi pada URL dan tidak dikirim ke server luar.',
    limitationDisclosure: 'Nilai damage kritis adalah rata-rata statistik, bukan simulasi pertarungan acak.',
    importError: 'Berkas tidak sesuai dengan format konfigurasi laboratorium damage.',
    copiedStatus: 'Tautan berhasil disalin ke papan klip.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Uji formula damage game sebelum diimplementasikan di mesin game',
    },
    {
      type: 'paragraph',
      html: 'Formula damage mungkin terlihat seimbang pada nilai awal, namun dapat rusak pada level tinggi. Alat ini membantu Anda melihat daerah tanpa damage dan lonjakan nilai sebelum kode diterapkan.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Bahasa ekspresi yang aman dan terbatas',
    },
    {
      type: 'paragraph',
      html: 'Bidang input hanya menerima variabel dan fungsi matematika yang ditentukan tanpa menjalankan skrip eksternal.',
    },
    {
      type: 'table',
      headers: ['Metrik', 'Perhitungan', 'Tujuan Desain'],
      rows: [
        ['Damage diharapkan', 'Formula dasar termasuk faktor kritis dan aturan pembulatan', 'Apakah formula bekerja konsisten pada karakter lemah maupun kuat?'],
        ['Pukulan untuk menang', 'Darah target dibagi damage yang dibulatkan', 'Apakah tambahan 1 poin stat menghilangkan 1 pukulan penuh yang dibutuhkan?'],
        ['Time to Kill (TTK)', 'Interval antar pukulan dibagi kecepatan serangan', 'Apakah ritme pertarungan sudah sesuai dengan rencana awal?'],
        ['Peta panas tekanan', 'Sampel Formula A pada variasi attack dan defense', 'Apakah ada area mati atau lonjakan yang tidak diharapkan?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Memisahkan data matematika dari keputusan desain',
    },
    {
      type: 'paragraph',
      html: 'Grafik yang mulus bukan bukti bahwa permainan pasti menyenangkan. Gunakan laboratorium ini untuk menemukan parameter yang perlu diuji dalam sesi playtest.',
    },
    {
      type: 'tip',
      title: 'Periksa damage dan jumlah pukulan secara bersamaan',
      html: 'Perubahan kecil pada damage bisa saja melewati ambang batas darah target dan mengurangi 1 pukulan penuh. Selalu bandingkan nilai damage dengan jumlah pukulan dan TTK.',
    },
  ],
  faq,
  bibliographyTitle: 'Referensi kalkulasi damage game',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
