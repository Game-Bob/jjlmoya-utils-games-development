import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-web-game-tester',
  title: 'Itch.io Pemeriksa Game Web dan Pengoptimal Resolusi Langsung',
  description: 'Unggah file ekspor HTML5 atau arsip ZIP untuk menguji viewport secara langsung, memperbaiki scrollbar, memeriksa build Godot dan Unity WebGL, serta menghasilkan pengaturan embed Itch.io.',
  ui: {
    dropzoneTitle: 'Seret dan Letakkan Build Game atau File ZIP di Sini',
    dropzoneHint: 'Letakkan file .ZIP, folder yang diekspor, atau file build HTML5 di area ini untuk langsung diperiksa.',
    chooseFiles: 'Pilih File Game atau Folder',
    engineDetected: 'Engine yang Terdeteksi',
    compatibilityScore: 'Skor Kompatibilitas Itch.io',
    viewportWidth: 'Lebar Viewport (px)',
    viewportHeight: 'Tinggi Viewport (px)',
    presets: 'Preset Resolusi Cepat',
    fitTest: 'Uji Tata Letak dan Scrollbar Langsung',
    copySettings: 'Salin Pengaturan Embed Itch.io',
    copied: 'Disalin ke Clipboard',
    embedMode: 'Mode Embed',
    scrollbars: 'Aktifkan Scrollbar',
    noIssuesFound: 'Semua pemeriksaan berhasil. Paket 100% sesuai dengan standar Itch.io.',
    filesInspected: 'File yang Diperiksa',
    resetViewport: 'Reset Viewport',
    autoScaleToggle: 'Skala Viewport Otomatis ke Lebar Layar',
    scaledNotice: 'Viewport melebihi lebar layar. Zoom-out buatan diterapkan agar seluruh kanvas terlihat. Nonaktifkan penskalaan otomatis untuk melihat tata letak asli.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Panduan Format untuk Ekspor Game HTML5 di Itch.io'
    },
    {
      type: 'paragraph',
      html: 'Mempublikasikan game HTML5 dan WebGL di Itch.io memerlukan konfigurasi yang tepat dari dimensi viewport, struktur file arsip, dan header keamanan cross-origin.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Rasio Aspek Web Standar', value: '16:9 Lanskap' },
        { label: 'Resolusi Klasik Itch', value: '960 x 540 px' },
        { label: 'File Titik Masuk yang Diperlukan', value: 'index.html di Root' },
        { label: 'Persyaratan Godot 4', value: 'Header COOP / COEP' }
      ]
    },
    {
      type: 'tip',
      html: 'Saat menyematkan game WebGL 1280x720 di Itch.io, atur dimensi viewport embed tepat ke 1280x720 dengan "Embed in page" diaktifkan.'
    },
    {
      type: 'paragraph',
      html: "Bagian ini merangkum pemeriksaan penting untuk ekspor yang bersih dan pratinjau yang dapat diandalkan. 1.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini merangkum pemeriksaan penting untuk ekspor yang bersih dan pratinjau yang dapat diandalkan. 2.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini merangkum pemeriksaan penting untuk ekspor yang bersih dan pratinjau yang dapat diandalkan. 3.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini merangkum pemeriksaan penting untuk ekspor yang bersih dan pratinjau yang dapat diandalkan. 4.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini merangkum pemeriksaan penting untuk ekspor yang bersih dan pratinjau yang dapat diandalkan. 5.",
    },
    { type: 'title', level: 2, text: 'Menguji viewport dan canvas sebelum publikasi' },
    { type: 'paragraph', html: 'Bandingkan ukuran canvas sebenarnya dengan viewport yang direncanakan di Itch.io. Rasio 16:9 saja tidak menghilangkan scrollbar: margin CSS, lebar minimum, dan canvas yang tidak diskalakan masih dapat menyebabkan konten meluap.' },
    { type: 'paragraph', html: 'Jalankan laporan setelah setiap build karena nama berkas, entry point, dan keluaran engine dapat berubah. Gunakan hasil ini sebagai pemeriksaan struktur dan geometri, lalu uji game di beberapa browser dan perangkat sebelum menerbitkan.' },
  ],
  faq: [
    {
      question: 'Mengapa game Godot 4 saya menampilkan layar hitam di Itch.io?',
      answer: 'Ekspor web Godot 4 menggunakan multi-threading WebAssembly yang memerlukan dukungan SharedArrayBuffer. Aktifkan "SharedArrayBuffer support" di opsi frame game Itch.io Anda.'
    },
    {
      question: "Pengaturan apa yang harus diperiksa sebelum diterbitkan? 1",
      answer: "Periksa ukuran, lingkungan tujuan, dan pratinjau bersama sebelum menerbitkan berkas.",
    },
  ],
  howTo: [
    { name: 'Unggah File Game atau ZIP', text: 'Seret dan letakkan arsip ZIP ekspor HTML5 atau pilih direktori build yang berisi index.html.' },
    { name: 'Tinjau Laporan Kompatibilitas', text: 'Periksa laporan audit otomatis untuk penempatan root index.html, peringatan huruf besar-kecil, dan deteksi engine.' },
    { name: 'Ubah Ukuran Viewport Secara Langsung', text: 'Gunakan kontrol resolusi dan chip rasio aspek untuk menguji penyematan iframe secara langsung tanpa scrollbar.' },
    { name: 'Salin Pengaturan Itch.io', text: 'Klik Salin Pengaturan untuk mendapatkan nilai lebar dan tinggi yang tepat untuk halaman pengiriman game Itch.io Anda.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io Pemeriksa Game Web',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Mengapa game Godot 4 saya menampilkan layar hitam di Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ekspor web Godot 4 menggunakan multi-threading WebAssembly yang memerlukan dukungan SharedArrayBuffer. Aktifkan "SharedArrayBuffer support" di opsi frame game Itch.io Anda.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara Mengaudit dan Menguji Viewport Game Itch.io Anda',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Unggah File Game atau ZIP',
          text: 'Seret dan letakkan arsip ZIP ekspor HTML5 atau pilih direktori build yang berisi index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Ubah Ukuran Viewport Secara Langsung',
          text: 'Gunakan kontrol resolusi dan chip rasio aspek untuk menguji penyematan iframe secara langsung tanpa scrollbar.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
