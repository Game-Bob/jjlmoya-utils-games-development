import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'editor-file-simpan-game',
  title: 'Editor dan Obfuskator File Simpan Game',
  description: 'Dekripsi, inspeksi, edit payload JSON, dan enkripsi ulang file simpanan game menggunakan Base64, XOR masking, atau teks polos 100% lokal di browser Anda.',
  ui: {
    title: 'Editor & Obfuskator Simpanan Game',
    subtitle: 'Inspeksi, modifikasi, dan enkripsi file status simpanan lokal secara aman tanpa kebocoran server',
    dropSaveFile: 'Tarik & lepas file simpanan game di sini',
    orSelectFile: 'atau klik untuk menelusuri file lokal',
    encryptionMethod: 'Format Enkripsi',
    methodBase64: 'Pengodean Base64',
    methodXor: 'Masking XOR + Base64',
    methodRaw: 'JSON Polos / Tanpa Enkripsi',
    xorKeyLabel: 'Kunci Rahasia XOR',
    xorKeyPlaceholder: 'mis. KunciRahasiaGameSaya2026',
    jsonRawTitle: 'Payload JSON Terdekode (Editor Langsung)',
    encodeAndDownload: 'Enkripsi & Unduh File Simpanan',
    copyEncoded: 'Salin Teks Terenkripsi',
    copiedNotice: 'Tersalin ke Papan Klip!',
    decodedKeysCount: 'Total Parameter',
    dataSize: 'Ukuran Payload',
    detectedFormat: 'Format Terdeteksi',
    exportPreviewLabel: 'Pratinjau Hasil Terenkripsi',
    decodePanelTitle: 'Dekode dan Editor JSON Langsung',
    exportPanelTitle: 'Payload Hasil Enkripsi Ulang',
    decodeError: 'Gagal mendekode file simpanan game',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Keamanan dan Protokol Obfuskasi File Simpan Game',
    },
    {
      type: 'paragraph',
      html: 'Game komputer dan seluler secara rutin menyerialisasikan status kemajuan pemain ke dalam format penyimpanan persisten untuk mempertahankan jumlah inventaris, tahapan yang terbuka, atribut pemain, dan bendera narasi di seluruh sesi permainan. Untuk mencegah manipulasi langsung oleh pengguna akhir melalui editor teks biasa, studio game mengobfuskasikan file simpanan menggunakan skema pengodean biner seperti Base64 atau masking bitwise XOR terhadap kunci string rahasia. Selama pengujian kontrol kualitas QA internal dan debug operasi langsung, tim pengembang memerlukan kemampuan instan untuk memeriksa struktur JSON mentah, memaksakan status uji batas, dan mengenkripsi ulang payload yang dimodifikasi untuk penyebaran tanpa perlu mengompilasi ulang biner game.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Privasi Pemrosesan Klien', value: '100% Lokal' },
        { label: 'Dekoder Ditingkatkan', value: 'Base64 / XOR / JSON' },
        { label: 'Latensi Dekode', value: '0 ms' },
        { label: 'Risiko Kebocoran Data', value: 'Nol' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Perbandingan Skema Obfuskasi',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pengodean Base64',
          description: 'Konversi teks cepat yang mencegah pengeditan teks kasual di notepad biasa tanpa menawarkan keamanan kriptografi nyata.',
        },
        {
          title: 'Masking XOR + Base64',
          description: 'Praktik standar dalam pengembangan game indie. Menggabungkan byte teks dengan kunci rahasia khusus untuk mencegah editor memori.',
        },
        {
          title: 'Payload JSON Polos',
          description: 'Status simpanan terbaca tanpa enkripsi. Ideal untuk pembuatan prototipe awal dan iterasi tim internal.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktik Pengujian QA untuk Verifikasi Status',
    },
    {
      type: 'tip',
      title: 'Praktik Terbaik Keamanan Simpanan selama QA',
      html: 'Selalu pertahankan kunci debug terpisah untuk build internal dan build produksi. Saat memverifikasi bug batas, gunakan inspektur lokal untuk memaksakan batas inventaris dan statistik tanpa mengompilasi ulang kode game.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabel Panduan Parameter Status Game',
    },
    {
      type: 'table',
      headers: ['Tipe Data', 'Format Direkomendasikan', 'Kasus Penggunaan Umum', 'Lapisan Obfuskasi'],
      rows: [
        ['Integer Numerik', 'Integer 32-bit', 'Koin, Level, XP, Amunisi', 'Termasker XOR'],
        ['Bendera Boolean', 'Boolean Standar', 'Tutorial Selesai, Bos Kalahkan', 'Base64 / XOR'],
        ['Objek Bersarang', 'Hierarki JSON', 'Inventaris Pemain, Pohon Keterampilan', 'Terkode Base64'],
        ['String Cap Waktu', 'ISO 8601 UTC', 'Login Harian, Cap Waktu Simpan', 'Termasker XOR'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Pertimbangan Rekayasa Balik dan Anti Tamper',
    },
    {
      type: 'paragraph',
      html: 'Meskipun obfuskasi di sisi klien mencegah pemain kasual mengubah file simpanan di editor teks standar, masking XOR dan pengodean Base64 bukanlah algoritma kriptografi sejati. Pemindai memori dan alat rekayasa balik seperti RenderDoc atau x64dbg dapat memeriksa rutinitas pembuatan kunci secara langsung dalam rakitan game terkompilasi. Untuk judul multi-pemain kompetitif, validasi server otoritatif atau tanda tangan HMAC kriptografi sangat penting.',
    },
  ],
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: [
    {
      question: 'Apakah file simpanan game saya diunggah ke server jarak jauh?',
      answer: 'Tidak. Semua proses dekode, penyuntingan pohon JSON, dan enkripsi ulang terjadi 100% di dalam mesin JavaScript browser web Anda.',
    },
    {
      question: 'Bagaimana cara kerja obfuskasi kunci XOR di mesin game seperti Unity atau Godot?',
      answer: 'Obfuskasi XOR mengiterasi byte UTF-8 dari string JSON yang diserialkan, menerapkan operasi XOR bitwise terhadap karakter kunci rahasia.',
    },
  ],
  howTo: [
    {
      name: 'Muat atau Tempel File Simpanan',
      text: 'Unggah file simpanan terenkripsi Anda atau tarik ke area pengunggahan.',
    },
    {
      name: 'Pilih Metode Dekode dan Kunci',
      text: 'Pilih Base64 atau XOR Masking lalu masukkan kunci rahasia game.',
    },
    {
      name: 'Edit Status JSON',
      text: 'Gunakan editor langsung untuk menyesuaikan level, emas, inventaris, atau bendera game.',
    },
    {
      name: 'Enkripsi dan Ekspor',
      text: 'Unduh file simpanan terenkripsi baru yang siap untuk pengujian game.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Editor File Simpan Game',
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
          name: 'Apakah file simpanan game saya diunggah ke server jarak jauh?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tidak. Semua proses dekode dan penyuntingan terjadi 100% di dalam browser Anda.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara Mengedit File Simpan Game Terenkripsi',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Muat atau Tempel File Simpanan',
          text: 'Unggah file simpanan terenkripsi Anda.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referensi dan Bacaan Lebih Lanjut',
  bibliography: bibliographyEntries,
};
