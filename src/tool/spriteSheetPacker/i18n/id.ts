import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'pembuat-dan-ekstraktor-sprite-sheet',
  title: 'Pembuat dan Ekstraktor Sprite Sheet',
  description:
    'Optimalkan performa game 2D dengan menggabungkan frame animasi ke atlas tekstur atau mengekstrak sprite dari sprite sheet.',
  ui: {
    packerTab: 'Studio Pembuat Atlas',
    extractorTab: 'Ekstraktor Sprite',
    dropZoneTitle: 'Tarik dan Lepas Gambar Frame',
    dropZoneSubtitle: 'Unggah gambar PNG atau WebP untuk membuat atlas tekstur teroptimasi',
    selectFilesButton: 'Pilih File Gambar',
    clearAllButton: 'Bersihkan Ruang Kerja',
    downloadZipButton: 'Unduh Paket (ZIP)',
    copyJsonButton: 'Salin JSON Atlas',
    downloadSheetPngButton: 'Unduh Tekstur PNG',
    paddingLabel: 'Jarak Antar Frame (px)',
    borderExtrusionLabel: 'Ekstrusi Tepi (px)',
    maxTextureSizeLabel: 'Dimensi Maksimal Tekstur',
    powerOfTwoLabel: 'Paksa Pangkat 2 (POT)',
    trimTransparencyLabel: 'Potong Area Transparan',
    exportFormatLabel: 'Format Engine Tujuan',
    presetPixelArt: 'Preset Pixel Art 16x16',
    presetHdUi: 'Preset Atlas HD UI 1024',
    presetMobile: 'Preset Mobile WebGL 2048',
    formatGenericHash: 'JSON Generik (Hash)',
    formatGenericArray: 'JSON Generik (Array)',
    formatUnity: 'Engine Unity 2D',
    formatGodot: 'Engine Godot 2D',
    formatPhaser: 'Engine Phaser / PixiJS',
    formatCss: 'CSS Web Frontend',
    previewTitle: 'Pratinjau Atlas Tekstur',
    efficiencyBadge: 'Efisiensi Tekstur',
    drawCallsBadge: 'Pengurangan Draw Call',
    totalFramesBadge: 'Frame Tergabung',
    textureSizeBadge: 'Dimensi Atlas',
    flipbookTitle: 'Pemutar Animasi Flipbook',
    flipbookFpsLabel: 'Kecepatan Animasi (FPS)',
    playAnimation: 'Putar Animasi',
    pauseAnimation: 'Hentikan Animasi',
    extractorModeGrid: 'Pemotongan Grid Tetap',
    extractorModeAlpha: 'Pemotongan Saluran Alfa Otomatis',
    frameWidthLabel: 'Lebar Frame (px)',
    frameHeightLabel: 'Tinggi Frame (px)',
    marginLabel: 'Batas Margin (px)',
    spacingLabel: 'Jarak Antar Grid (px)',
    extractFramesButton: 'Ekstrak Gambar Frame',
    extractedCountLabel: 'Sprite Terekstrak',
    codeSnippetTitle: 'Kode Integrasi Engine',
    copySnippetButton: 'Salin Kode',
    copiedToast: 'Tersalin ke Papan Klip',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Optimasi Performa Game 2D dan Perintah Draw Call',
    },
    {
      type: 'paragraph',
      html: 'Dalam arsitektur kartu grafis modern, menggabungkan gambar frame menjadi satu atlas tekstur mengurangi jumlah perintah penggambaran draw call yang dikirimkan oleh prosesor CPU ke GPU.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Pengurangan Draw Call' },
        { value: '4x', label: 'Proses GPU Lebih Cepat' },
        { value: '60 FPS', label: 'Target Stabil di Seluler' },
        { value: '100%', label: 'Pemrosesan Lokal Browser' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Perbandingan Gambar Terpisah vs Atlas Tekstur Tergabung',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'File Frame Terpisah',
          description: 'File PNG atau WebP disimpan terpisah',
          points: [
            'Membuat perintah gambar terpisah untuk setiap frame di layar',
            'Menyebabkan alih konteks yang sering pada kartu grafis GPU',
            'Meningkatkan jumlah permintaan HTTP untuk game berbasis web',
            'Penurunan kecepatan frame pada perangkat seluler',
          ],
        },
        {
          title: 'Atlas Tekstur Tergabung',
          description: 'Gambar tunggal dibundel dengan data JSON',
          points: [
            'Menggabungkan ratusan sprite dalam satu perintah draw call GPU',
            'Memaksimalkan bandwidth memori dan throughput rendering grafis',
            'Mengurangi permintaan file dengan membundel tekstur dan data',
            'Memastikan kecepatan frame yang mulus di semua platform',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Pencegahan Kebocoran Piksel dan Ekstrusi Tepi',
    },
    {
      type: 'paragraph',
      html: 'Menambahkan ekstrusi tepi 1 hingga 2 piksel menduplikasi warna piksel terluar untuk mencegah garis keretakan saat kamera bergerak.',
    },
    {
      type: 'tip',
      title: 'Strategi Ekstrusi Tepi Tekstur',
      html: 'Gunakan ekstrusi tepi saat memproses sprite sheet agar pemfilteran tekstur berjalan mulus tanpa cacat visual.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Panduan Ukuran Tekstur untuk Berbagai Platform',
    },
    {
      type: 'table',
      headers: ['Platform Tujuan', 'Ukuran Maksimal Disarankan', 'Kebutuhan Pangkat 2', 'Profil Memori'],
      rows: [
        ['Browser Seluler', '2048 x 2048 px', 'Wajib di WebGL 1.0', 'Bandwidth Rendah'],
        ['PC / Konsol', '4096 x 4096 px', 'Disarankan', 'Kapasitas GPU Tinggi'],
        ['Konsol Genggam Retro', '1024 x 1024 px', 'Wajib', 'Batas VRAM Ketat'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Menjamin kompatibilitas penuh dengan driver grafis lama dan WebGL 1.0',
          con: 'Dapat meninggalkan area transparan kosong jika jumlah sprite sedikit',
        },
        {
          pro: 'Mendukung mipmapping otomatis untuk pemfilteran tekstur keras',
          con: 'Membutuhkan pengaturan jarak yang cermat pada frame tidak teratur',
        },
        {
          pro: 'Mengoptimalkan alokasi memori VRAM pada kartu grafis GPU',
          con: 'Sedikit meningkatkan alokasi area tekstur awal',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Glosari Istilah Teknis',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Perintah yang dikirimkan prosesor CPU ke kartu grafis GPU untuk merender tekstur.',
        },
        {
          term: 'Bin Packing',
          definition: 'Teknik algoritma untuk mengatur elemen persegi dalam kontainer berukuran minimal.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Penduplikasian piksel tepi luar untuk mencegah timbulnya garis keretakan saat kamera bergerak.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Pemutaran urutan gambar cepat untuk mensimulasikan gerakan kontinu dalam game 2D.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Daftar Periksa Performa',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Aturan Produksi',
      html: 'Gabungkan animasi karakter ke dalam atlas bersama dan gunakan dimensi pangkat dua untuk ekspor WebGL.',
    },
    {
      type: 'paragraph',
      html: "Bagian ini merangkum pemeriksaan penting untuk ekspor yang bersih dan pratinjau yang dapat diandalkan. 1.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini merangkum pemeriksaan penting untuk ekspor yang bersih dan pratinjau yang dapat diandalkan. 2.",
    },
  ],
  faq: [
    {
      question: 'Apa itu sprite sheet dan mengapa penting untuk game 2D?',
      answer:
        'Sprite sheet adalah file gambar komposit yang berisi banyak frame animasi. Penggabungan ini memungkinkan game engine merender banyak objek dalam satu perintah gambar GPU.',
    },
    {
      question: 'Bagaimana cara kerja pemrosesan lokal dalam alat ini?',
      answer:
        'Gambar Anda diproses secara lokal di browser Anda melalui HTML5 Canvas API tanpa mengirim data ke server luar.',
    },
    {
      question: 'Apakah saya bisa mengekstrak gambar dari sprite sheet yang ada?',
      answer:
        'Ya. Beralihlah ke mode Ekstraktor, unggah sprite sheet Anda, dan atur ukuran grid pemotongan.',
    },
  ],
  howTo: [
    {
      name: 'Unggah Gambar Frame',
      text: 'Tarik dan lepas file PNG atau WebP ke area unggah.',
    },
    {
      name: 'Atur Pengaturan Penggabungan',
      text: 'Sesuaikan jarak, ekstrusi tepi, dan ukuran maksimal tekstur.',
    },
    {
      name: 'Pratinjau dan Unduh',
      text: 'Uji animasi pada pemutar flipbook lalu unduh paket ZIP.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pembuat dan Ekstraktor Sprite Sheet',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apa itu sprite sheet dan mengapa penting untuk game 2D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sprite sheet adalah file gambar komposit yang berisi banyak frame animasi untuk merender banyak objek dalam satu perintah GPU.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara Menggabungkan dan Mengekstrak Sprite Sheet',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Unggah Gambar Frame',
          text: 'Tarik dan lepas file PNG atau WebP ke area unggah.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
