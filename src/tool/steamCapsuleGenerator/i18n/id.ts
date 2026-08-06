import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'generator-kapsul-steam',
  title: 'Generator Kapsul dan Pratinjau Gambar Steam',
  description: 'Potong, pratinjau, dan format kapsul toko dan pustaka resmi Steam dengan verifikasi area aman secara langsung.',
  ui: {
    uploadTitle: 'Unggah Gambar Game',
    uploadHint: 'Unggah gambar resolusi tinggi (disarankan 3840x1240 px atau lebih besar).',
    chooseFile: 'Pilih Berkas',
    minimumSize: 'Ukuran minimum disarankan: 1920x1080 px',
    horizontalFocus: 'Fokus Horizontal (X)',
    verticalFocus: 'Fokus Vertikal (Y)',
    zoomLevel: 'Tingkat Zoom',
    resetFocus: 'Riset Fokus',
    safeZone: 'Area Aman',
    downloadZip: 'Unduh Semua Aset (ZIP)',
    headerCapsule: 'Kapsul Header (460x215 / HD 920x430)',
    smallCapsule: 'Kapsul Kecil (231x87 / HD 462x174)',
    mainCapsule: 'Kapsul Utama (616x353 / HD 1232x706)',
    verticalCapsule: 'Kapsul Vertikal Pustaka (300x450 / HD 600x900)',
    libraryHero: 'Banner Pustaka (1920x620 / HD 3840x1240)',
    communityIcon: 'Ikon Aplikasi Komunitas (32x32 / HD 184x184)',
    storePreviewTab: 'Toko Steam',
    libraryPreviewTab: 'Pustaka Steam',
    allAssetsTab: 'Semua Ukuran',
    toggleSafeZones: 'Panduan Area Aman',
    toggleSteamOverlay: 'Antarmuka Steam'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Spesifikasi Gambar Kapsul Steam'
    },
    {
      type: 'paragraph',
      html: 'Halaman toko Steam dan tampilan pustaka bergantung pada gambar kapsul terstandar untuk menampilkan game Anda di berbagai perangkat.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Resolusi HD Header Toko', value: '920 x 430 px' },
        { label: 'Rasio Kapsul Pustaka', value: '2:3 Vertikal' },
        { label: 'Resolusi Maks Banner', value: '3840 x 1240 px' },
        { label: 'Ukuran Ikon Komunitas', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['Jenis Aset', 'Ukuran Standar (px)', 'Ukuran Target HD (px)', 'Rasio Aspek', 'Format'],
      rows: [
        ['Kapsul Header', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Kapsul Kecil', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Kapsul Utama', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Kapsul Vertikal', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Banner Pustaka', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Logo Pustaka', '1280 x 720', '1280 x 720', '16:9', 'PNG Transparan'],
        ['Ikon Komunitas', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Strategi Area Aman',
      html: 'Jaga semua logo utama dan wajah karakter berada di dua pertiga bagian kiri atas gambar.'
    },
    {
      type: 'proscons',
      title: 'Evaluasi Alur Kerja',
      items: [
        {
          pro: 'Pembuatan cepat semua ukuran aset Steamworks',
          con: 'Komposisi rumit mungkin memerlukan lapisan terpisah'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kapsul',
          definition: 'Istilah standar Valve untuk gambar promosi game.'
        }
      ]
    }
  ],
  faqTitle: 'Pertanyaan Umum tentang Aset Steam',
  faq: [
    {
      question: 'Format berkas apa yang harus digunakan?',
      answer: 'Steam menerima berkas JPG atau PNG untuk kapsul utama.'
    }
  ],
  howTo: [
    {
      name: 'Unggah Gambar',
      text: 'Pilih gambar resolusi tinggi.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Generator Kapsul dan Pratinjau Gambar Steam',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Format berkas apa yang harus digunakan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam menerima berkas JPG atau PNG.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara membuat kapsul Steam',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Unggah Gambar',
          text: 'Pilih gambar resolusi tinggi.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
