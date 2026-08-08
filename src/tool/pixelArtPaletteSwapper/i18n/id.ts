import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'penukar-palet-piksel-art',
  title: 'Penukar Palet Piksel Art',
  description: 'Kurangi warna sprite dan spritesheet ke palet konsol klasik atau warna hex kustom langsung di peramban Anda.',
  ui: {
    uploadTitle: 'Tarik sprite atau spritesheet ke sini',
    uploadHint: 'PNG, JPEG, atau WebP diproses di perangkat Anda',
    chooseImage: 'Pilih gambar',
    replaceImage: 'Ganti gambar',
    paletteTitle: 'Pilih palet',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'Inspirasi NES',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Warna kustom',
    customPaletteHint: 'Pisahkan kode hex dengan koma, spasi, atau baris baru.',
    applyCustomPalette: 'Terapkan palet',
    resetCustomPalette: 'Atur ulang',
    sourcePreview: 'Asli',
    resultPreview: 'Hasil pembatasan',
    waitingForImage: 'Menunggu gambar',
    uploadToPreview: 'Unggah gambar untuk melihat pratinjau',
    resultEmpty: 'Versi asli dan hasil pembatasan palet akan tampil berdampingan.',
    downloadPng: 'Unduh PNG',
    downloadDisabled: 'Unggah gambar untuk mengaktifkan ekspor.',
    colorCount: 'Warna asal',
    mappedCount: 'Warna terpakai',
    imageSize: 'Ukuran gambar',
    paletteCount: 'warna palet',
    preserveAlpha: 'Pertahankan transparansi',
    zoomLabel: 'Zom',
    processing: 'Memetakan piksel',
    invalidPalette: 'Tambahkan setidaknya satu kode hex yang valid',
    invalidImage: 'Pilih gambar PNG, JPEG, atau WebP',
    readyStatus: 'Siap',
    dropActive: 'Lepaskan untuk memuat',
    mappedSummary: 'Memetakan {source} warna asal ke {mapped} warna palet',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Ubah Sprite Penuh Warna Menjadi Palet Retro',
    },
    {
      type: 'paragraph',
      html: 'Palet warna terbatas memberikan identitas visual yang konsisten pada sprite Anda. Pembatas warna peramban ini memungkinkan Anda membandingkan gambar asli dengan versi tereduksi saat Anda bereksperimen dengan Game Boy, inspirasi NES, PICO-8, Commodore 64, DawnBringer 16, dan palet kustom.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Cara Kerja Pemetaan Warna Terdekat',
    },
    {
      type: 'paragraph',
      html: 'Alat ini membaca saluran merah, hijau, dan biru untuk setiap piksel yang terlihat dan membandingkan warna tersebut dengan setiap warna pada palet terpilih. Alat memilih entri palet dengan jarak RGB kuadrat terkecil, lalu menuliskan warna pengganti ke penyangga kanvas baru. Saluran alfa dijaga terpisah sehingga piksel transparan tetap transparan dan tepi semi-transparan mempertahankan opasitas aslinya saat opsi Pertahankan transparansi aktif.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pembatasan Palet',
          description: 'Setiap warna asal digantikan oleh contoh warna terdekat yang tersedia.',
          points: [
            'Cepat dan terprediksi untuk sprite, ikon, ubin, dan antarmuka',
            'Menjaga dimensi asli dan posisi piksel secara tepat',
            'Memudahkan peninjauan anggaran warna yang telah ditentukan',
          ],
        },
        {
          title: 'Pertukaran Palet (Palette Swapping)',
          description: 'Karya seni yang sama dapat dipetakan ulang ke himpunan warna terpilih lainnya.',
          points: [
            'Sangat baik untuk variasi kostum, bioma, dan kondisi kerusakan',
            'Daftar hex kustom memungkinkan Penyesuaian dengan arahan seni Anda',
            'Berkas PNG yang diunduh siap diimpor kembali ke editor Anda',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Memilih Palet untuk Piksel Art',
    },
    {
      type: 'table',
      headers: ['Palet', 'Warna', 'Kecocokan', 'Hal yang Perlu Diperhatikan'],
      rows: [
        ['Game Boy', '4', 'Gaya monokrom konsol genggam dan studi nilai yang kuat', 'Rentang nilai yang sempit dapat menggabungkan bahan yang berdekatan'],
        ['Inspirasi NES', '16', 'Sprite arcade tebal, karakter, dan ubin', 'Warna yang sangat terang dapat mendominasi detail kecil'],
        ['PICO-8', '16', 'Piksel art modern dengan aksen jenuh', 'Rona yang sangat jenuh membutuhkan kontras yang disengaja'],
        ['Commodore 64', '16', 'Adegan retro lembut dan estetika game komputer', 'Kontras rendah diuntungkan oleh siluet yang jelas'],
        ['DawnBringer 16', '16', 'Palet serbaguna pilihan untuk piksel art umum', 'Gradasi warna tetap membutuhkan arah pencahayaan yang jelas'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Alur Kerja Praktis untuk Spritesheet',
    },
    {
      type: 'paragraph',
      html: 'Mulailah dengan karya seni asal terbesar yang nyaman Anda edit, lalu unggah sprite atau spritesheet yang diekspor di sini. Pilih prasetel untuk menentukan arah visual, atau tempelkan daftar kustom dari pustaka palet. Periksa kedua kanvas pada pembesaran tinggi untuk melihat fitur wajah yang hilang, garis luar yang menyatu, dan sorotan yang tidak lagi terpisah dari warna dasarnya. Jika hasilnya terlihat buram, coba palet dengan langkah nilai yang lebih kuat atau tambahkan satu warna aksen ke daftar kustom.',
    },
    {
      type: 'tip',
      title: 'Jaga Palet Tetap Terarah',
      html: 'Daftar warna yang lebih besar tidak secara otomatis lebih baik. Mulailah dengan 4 hingga 16 warna, tentukan tugas untuk setiap warna, dan cadangkan nilai terang untuk titik fokus atau sorotan yang jelas. Algoritma warna terdekat mempertahankan posisi piksel, tetapi tidak dapat menentukan warna mana yang harus membawa hierarki visual sprite Anda.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Daftar Periksa Ekspor Piksel Art',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Sebelum Mengimpor PNG Terbatas',
      html: 'Periksa hasil pada skala 100 persen dan pada skala akhir dalam game, pastikan tepi transparan tetap bersih, verifikasi bahwa siluet penting tetap terbaca, dan simpan berkas asal di samping hasil ekspor agar Anda dapat merevisi palet tanpa memulai dari awal.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kuantisasi Warna',
          definition: 'Proses pengurangan himpunan warna asal yang besar ke himpunan warna terbatas yang ditentukan.',
        },
        {
          term: 'Gradasi Palet',
          definition: 'Urutan warna gelap, sedang, dan terang teratur yang digunakan untuk memberi bayangan pada satu permukaan.',
        },
        {
          term: 'Palet Terindeks',
          definition: 'Tabel warna ringkas di mana piksel merujuk pada entri dalam daftar alih-alih menyimpan nilai warna penuh.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Apakah penukar palet mengunggah gambar saya?',
      answer: 'Tidak. Gambar didekodekan ke dalam kanvas di peramban Anda, dipetakan secara lokal dengan JavaScript, dan diekspor langsung sebagai PNG. Alat tidak memiliki langkah pengunggahan.',
    },
    {
      question: 'Dapatkah saya menggunakan palet sendiri?',
      answer: 'Ya. Tempelkan kode hex 6 digit atau 3 digit ke dalam bidang Warna kustom, dipisahkan oleh koma, spasi, atau baris baru, lalu pilih Terapkan palet.',
    },
    {
      question: 'Apakah alat ini mengubah ukuran sprite atau spritesheet saya?',
      answer: 'Tidak. Hasil keluaran mempertahankan lebar asal, tinggi, posisi piksel, dan nilai alfa saat opsi Pertahankan transparansi aktif.',
    },
    {
      question: 'Algoritma apa yang digunakan?',
      answer: 'Setiap piksel yang terlihat ditetapkan ke warna terdekat dalam palet yang dipilih menggunakan jarak Euklides kuadrat dalam ruang RGB. Ini cepat, deterministik, dan mudah dipratinjau, tetapi tidak menerapkan dithering atau koreksi warna Lab perseptual.',
    },
  ],
  howTo: [
    {
      name: 'Muat sprite',
      text: 'Tarik sprite atau spritesheet berformat PNG, JPEG, atau WebP ke dalam area kerja, atau gunakan Pilih gambar.',
    },
    {
      name: 'Pilih palet',
      text: 'Pilih prasetel klasik atau masukkan warna hex Anda sendiri. Hasilnya diperbarui seketika saat palet diterapkan.',
    },
    {
      name: 'Bandingkan dan ekspor',
      text: 'Periksa kanvas asli dan kanvas hasil pembatasan, sesuaikan pembesaran pratinjau, dan unduh hasilnya sebagai berkas PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Penukar Palet Piksel Art',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apakah penukar palet mengunggah gambar saya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tidak. Gambar diproses secara lokal di peramban dan diekspor langsung sebagai PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Dapatkah saya menggunakan palet sendiri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya. Masukkan kode hex ke bidang Warna kustom dan terapkan palet.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara membatasi warna sprite ke palet retro',
      step: [
        { '@type': 'HowToStep', name: 'Muat sprite', text: 'Tarik gambar ke dalam area kerja.' },
        { '@type': 'HowToStep', name: 'Pilih palet', text: 'Pilih prasetel atau masukkan warna hex Anda.' },
        { '@type': 'HowToStep', name: 'Bandingkan dan ekspor', text: 'Periksa hasilnya dan unduh berkas PNG.' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
