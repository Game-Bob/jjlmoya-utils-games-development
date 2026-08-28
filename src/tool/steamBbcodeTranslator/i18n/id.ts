import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'konverter-bbcode-steam',
  title: 'Konverter BBCode Steam, Markdown dan HTML',
  description: 'Konversi antara BBCode Steam, Markdown, dan HTML ke segala arah dengan deteksi sintaks otomatis dan pratinjau langsung.',
  ui: {
    editorLabel: 'Tempel teks format Anda',
    editorHint: 'BBCode, Markdown, atau HTML terdeteksi secara otomatis saat Anda mengetik.',
    detectedLabel: 'Terdeteksi',
    detectedEmpty: 'Menunggu teks',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Bersihkan',
    copy: 'Salin hasil',
    copied: 'Disalin ke papan klip',
    characters: 'Karakter',
    blocks: 'Blok',
    privacyNote: 'Berjalan di browser Anda. Tidak ada unggahan.',
    persistenceNote: 'Draf terakhir disimpan secara lokal',
    previewLabel: 'Pratinjau',
    previewEmpty: 'Pratinjau format Anda akan muncul di sini.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Mengapa deskripsi toko membutuhkan konverter'
    },
    {
      type: 'paragraph',
      html: 'Deskripsi toko Steam menggunakan BBCode. Kit pers atau situs dokumentasi memerlukan Markdown atau HTML. Alat ini mengonversi format secara otomatis.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Format dan tag yang didukung'
    },
    {
      type: 'paragraph',
      html: 'Mendukung judul, cetak tebal, miring, tautan, daftar, kutipan, dan spoiler.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Format input', value: '3' },
        { label: 'Hasil per konversi', value: '2' },
        { label: 'Kedalaman daftar', value: 'Bersarang' },
        { label: 'Pemrosesan', value: 'Browser saja' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Daftar bersarang tetap utuh'
    },
    {
      type: 'paragraph',
      html: 'Struktur pohon digunakan untuk memastikan daftar anak tetap berada di dalam item induknya.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Judul[/h1]', '# Judul', '&lt;h1&gt;Judul&lt;/h1&gt;'],
        ['[b]Penting[/b]', '**Penting**', '&lt;strong&gt;Penting&lt;/strong&gt;'],
        ['[i]Catatan[/i]', '*Catatan*', '&lt;em&gt;Catatan&lt;/em&gt;'],
        ['[url=https://example.com]Tautan[/url]', '[Tautan](https://example.com)', '&lt;a href="https://example.com"&gt;Tautan&lt;/a&gt;'],
        ['[list][*]Satu[*]Dua[/list]', '- Satu\n- Dua', '&lt;ul&gt;&lt;li&gt;Satu&lt;/li&gt;&lt;li&gt;Dua&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Perbedaan Markdown dan HTML'
    },
    {
      type: 'paragraph',
      html: 'Jika Markdown tidak mendukung garis bawah secara alami, elemen HTML sebaris akan digunakan.'
    },
    {
      type: 'tip',
      title: 'Pemeriksaan sebelum publikasi',
      html: 'Bandingkan pratinjau dengan dokumen asli sebelum memublikasikannya ke Steam.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Privasi data deskripsi'
    },
    {
      type: 'paragraph',
      html: 'Semua pemrosesan dilakukan secara lokal di browser Anda tanpa mengunggah teks.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Batasan konversi'
    },
    {
      type: 'proscons',
      title: 'Pertimbangan',
      items: [
        {
          pro: 'Struktur daftar terjaga.',
          con: 'Tag kustom memerlukan peninjauan manual.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Glosarium'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Sintaks berbasis kurung siku untuk Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Sintaks teks polos yang mudah dibaca.'
        },
        {
          term: 'HTML',
          definition: 'Bahasa markup standar untuk web.'
        }
      ]
    },
    { type: 'title', level: 2, text: 'Memeriksa konversi sebelum dipublikasikan' },
    { type: 'paragraph', html: 'Tentukan format yang benar-benar digunakan teks sumber, lalu bandingkan judul, tautan, daftar, dan gambar di pratinjau. Keluaran yang terlihat tidak berarti setiap tag khusus Steam memiliki padanan yang lengkap dalam format tujuan.' },
    { type: 'paragraph', html: 'Simpan salinan teks asli dan uji hasilnya pada halaman toko tempat teks akan diterbitkan. Daftar bertingkat, tautan eksternal, dan widget tanpa padanan mungkin memerlukan penyuntingan manual. Konverter menganalisis struktur di browser, tetapi tidak menilai kualitas tulisan atau keamanan URL.' },
    { type: 'paragraph', html: 'Sebelum menyalin keluaran, periksa tautan eksternal, tag nonstandar, dan gambar pada konteks halaman toko yang sebenarnya. Struktur yang berhasil dikonversi tetap memerlukan pemeriksaan editorial dan keamanan alamat.' },
    { type: 'paragraph', html: 'Bandingkan hasil konversi dengan pratinjau halaman Steam sebelum dipublikasikan. Periksa jeda baris, daftar bertingkat, tautan, gambar, dan tag yang tidak dikenal karena format yang tidak didukung dapat berubah menjadi teks biasa. Simpan salinan sumber agar perubahan manual dapat dilacak, lalu uji teks final di halaman yang benar-benar akan dilihat pemain.' },
    { type: 'paragraph', html: 'Jika hasil terlihat berbeda di editor toko, telusuri bagian yang memakai tag khusus satu per satu. Catat elemen yang sengaja dihapus atau diganti, kemudian minta penulis memeriksa kembali hierarki judul dan ajakan bertindak pada tampilan desktop maupun layar kecil.' },
  ],
  faqTitle: 'Pertanyaan umum tentang konversi',
  faq: [
    {
      question: 'Apakah teks diunggah ke server?',
      answer: 'Tidak. Konversi berjalan sepenuhnya di browser Anda.'
    },
    {
      question: 'Apakah daftar bersarang didukung?',
      answer: 'Ya. Struktur daftar diurai sebelum hasil dihasilkan.'
    },
    {
      question: "Pengaturan apa yang harus diperiksa sebelum diterbitkan? 1",
      answer: "Periksa ukuran, lingkungan tujuan, dan pratinjau bersama sebelum menerbitkan berkas.",
    },
    {
      question: "Pengaturan apa yang harus diperiksa sebelum diterbitkan? 2",
      answer: "Periksa ukuran, lingkungan tujuan, dan pratinjau bersama sebelum menerbitkan berkas.",
    },
    {
      question: "Pengaturan apa yang harus diperiksa sebelum diterbitkan? 3",
      answer: "Periksa ukuran, lingkungan tujuan, dan pratinjau bersama sebelum menerbitkan berkas.",
    },
    {
      question: "Pengaturan apa yang harus diperiksa sebelum diterbitkan? 4",
      answer: "Periksa ukuran, lingkungan tujuan, dan pratinjau bersama sebelum menerbitkan berkas.",
    },
  ],
  howTo: [
    {
      name: 'Tempel teks',
      text: 'Tempel BBCode Steam, Markdown, atau HTML.'
    },
    {
      name: 'Deteksi otomatis',
      text: 'Dua format lainnya akan dihasilkan secara otomatis.'
    },
    {
      name: "Pengaturan apa yang harus diperiksa sebelum diterbitkan? 1",
      text: "Periksa ukuran, lingkungan tujuan, dan pratinjau bersama sebelum menerbitkan berkas.",
    },
    {
      name: "Pengaturan apa yang harus diperiksa sebelum diterbitkan? 2",
      text: "Periksa ukuran, lingkungan tujuan, dan pratinjau bersama sebelum menerbitkan berkas.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Konverter BBCode Steam, Markdown dan HTML',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apakah teks diunggah ke server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tidak. Konversi berjalan sepenuhnya di browser Anda.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara mengonversi BBCode Steam, Markdown dan HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Tempel teks',
          text: 'Tempel BBCode Steam, Markdown, atau HTML.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
