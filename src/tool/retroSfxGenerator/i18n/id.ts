import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'pembuat-efek-suara-retro-game',
  title: 'Pembuat Efek Suara Retro untuk Game',
  description: 'Buat efek suara game retro singkat langsung di peramban Anda dengan preset instan, kontrol bentuk gelombang, dan ekspor WAV.',
  ui: {
    waveformLabel: 'Bentuk gelombang',
    waveformSquare: 'Kotak',
    waveformSawtooth: 'Gergaji',
    waveformSine: 'Sinus',
    waveformTriangle: 'Segitiga',
    waveformNoise: 'Kebisingan',
    presetLabel: 'Bank suara cepat',
    presetExplosion: 'Ledakan',
    presetLaser: 'Laser',
    presetJump: 'Lompat',
    presetCoin: 'Koin',
    presetPowerUp: 'Peningkat kekuatan',
    frequencyLabel: 'Frekuensi awal',
    frequencyEndLabel: 'Frekuensi akhir',
    durationLabel: 'Durasi',
    decayLabel: 'Peluruhan',
    sweepLabel: 'Sapuan nada',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Tapis lolos rendah',
    highpassLabel: 'Tapis lolos tinggi',
    noiseMixLabel: 'Campuran kebisingan',
    toneSection: 'Nada',
    dynamicsSection: 'Dinamika',
    filterSection: 'Tekstur',
    playButton: 'Putar suara',
    stopButton: 'Hentikan',
    downloadButton: 'Unduh WAV',
    randomizeButton: 'Acak',
    resetButton: 'Atur ulang',
    waveformPreviewLabel: 'Pratinjau gelombang',
    generatedLabel: 'Dihasilkan',
    statusReady: 'Siap didengarkan',
    statusPlaying: 'Memutar di peramban Anda',
    statusStopped: 'Pemutaran dihentikan',
    statusDownloaded: 'WAV diunduh',
    statusAudioBlocked: 'Pemutaran memerlukan izin audio di tab peramban',
    statusGenerating: 'Rendring suara',
    presetHint: 'Pilih preset awal lalu sesuaikan kontrol di bawah.',
    monoWavHint: '44.1 kHz · 16-bit mono WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Buat Audio Game Saat Game Jam Tanpa Meninggalkan Peramban',
    },
    {
      type: 'paragraph',
      html: 'Efek suara game yang baik harus menyampaikan aksi secara instan. Alat ini membantu Anda membuat suara retro klasik seperti lompatan, koin, ledakan, dan tembakan laser menggunakan sintesis audio peramban.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Preset suara', value: '5 pola awal' },
        { label: 'Pilihan osilator', value: '5 bentuk gelombang' },
        { label: 'Format ekspor', value: '16-bit PCM WAV' },
        { label: 'Pemrosesan', value: 'Berbasis peramban' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Fungsi Kontrol',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Nada dan Gerakan',
          description: 'Kontrol nada menentukan identitas dasar suara.',
          points: [
            'Frekuensi awal menentukan nada dasar osilator',
            'Sapuan nada mengubah frekuensi secara bertahap',
            'Vibrato menambahkan getaran nada periodik',
            'Bentuk gelombang menghasilkan tekstur harmonik berbeda',
          ],
        },
        {
          title: 'Bentuk dan Tekstur',
          description: 'Dinamika dan filter menentukan bagaimana suara berakhir.',
          points: [
            'Durasi menentukan panjang total efek suara',
            'Peluruhan mengatur penurunan amplitudo',
            'Tapis lolos rendah melembutkan frekuensi tinggi',
            'Tapis lolos tinggi menghilangkan frekuensi rendah',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Panduan Praktis Efek Suara Game',
    },
    {
      type: 'table',
      headers: ['Acara', 'Preset Awal', 'Penyesuaian Pertama'],
      rows: [
        ['Ledakan', 'Kebisingan frekuensi rendah', 'Tambah durasi dan kurangi tapis lolos rendah'],
        ['Laser', 'Gergaji dengan sapuan turun', 'Persingkat durasi dan naikkan tapis lolos tinggi'],
        ['Lompat', 'Kotak dengan sapuan naik', 'Kurangi peluruhan agar nada naik terdengar jelas'],
        ['Koin', 'Kotak dengan sapuan naik singkat', 'Naitkan frekuensi awal untuk suara jernih'],
        ['Peningkat kekuatan', 'Segitiga dengan sapuan naik panjang', 'Tambahkan vibrato untuk efek dinamis'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Mengapa WAV Cocok untuk Ekspor Prototip',
    },
    {
      type: 'paragraph',
      html: 'Format WAV sangat kompatibel dengan berbagai mesin game tanpa memerlukan pustaka kompresi tambahan.',
    },
    {
      type: 'tip',
      title: 'Dengarkan Pada Volume Game',
      html: 'Uji suara di dalam game untuk memastikan tidak mengganggu musik latar.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Menyetel frekuensi dan envelope secara bersamaan',
    },
    {
      type: 'paragraph',
      html: 'Sweep mengubah tinggi nada dari waktu ke waktu, sedangkan decay dan filter membentuk energi yang terdengar. Dengarkan semua parameter bersama-sama: kenaikan panjang dapat tetap lembut, sementara noise biasanya membutuhkan durasi lebih pendek agar dampaknya terasa jelas.',
    },
    {
      type: 'paragraph',
      html: 'Ekspor WAV adalah titik awal untuk prototipe dan bukan pengganti mixing di dalam game. Periksa level, clipping, serta ruang suara terhadap musik dan dialog sebelum menjadikannya aset final.',
    },
  ],
  faqTitle: 'Pertanyaan Umum',
  faq: [
    {
      question: 'Apakah suara saya diunggah ke server?',
      answer: 'Tidak. Seluruh sintesis dan pembuatan berkas WAV terjadi lokal di peramban Anda.',
    },
    {
      question: 'Apakah berkas WAV ini bisa digunakan di proyek game?',
      answer: 'Ya, hasil ekspor dirancang untuk prototipe dan proyek game jam.',
    },
    {
      question: 'Bagaimana cara kerja sapuan nada?',
      answer: 'Nilai positif menaikkan nada sedangkan nilai negatif menurunkan nada akhir secara proporsional.',
    },
    {
      question: 'Mengapa suara tidak keluar?',
      answer: 'Pastikan tab peramban memiliki izin untuk memutar suara dan klik Putar suara lagi.',
    },
  ],
  howTo: [
    {
      name: 'Pilih preset suara',
      text: 'Pilih Ledakan, Laser, Lompat, Koin, atau Peningkat kekuatan.',
    },
    {
      name: 'Sesuaikan kontrol',
      text: 'Atur gelombang, nada, durasi, dan filter.',
    },
    {
      name: 'Dengarkan pratinjau',
      text: 'Klik Putar suara untuk mendengarkan hasil pengaturan.',
    },
    {
      name: 'Unduh WAV',
      text: 'Klik Unduh WAV untuk menyimpan berkas audio.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pembuat Efek Suara Retro untuk Game',
      applicationCategory: 'MultimediaApplication',
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
          name: 'Apakah suara saya diunggah ke server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tidak. Seluruh sintesis terjadi di peramban Anda.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara membuat efek suara retro game',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Pilih preset suara',
          text: 'Pilih preset awal.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referensi',
  bibliography: bibliographyEntries,
};
