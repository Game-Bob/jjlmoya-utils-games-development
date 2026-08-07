import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'pencari-titik-loop-audio-game',
  title: 'Pencari Titik Loop Audio Game dan Penginjeksian Metadata',
  description: 'Temukan titik loop audio yang akurat, sejajarkan ke persilangan nol untuk menghilangkan bunyi klik, dan ekspor WAV dengan metadata LOOPSTART dan LOOPEND.',
  ui: {
    title: 'Pencari Titik Loop Audio Game',
    subtitle: 'Penganalisis bentuk gelombang interaktif, detektor persilangan nol, dan pengedit metadata WAV',
    dropzoneTitle: 'Tarik file audio ke sini atau klik untuk menjelajah',
    dropzoneSubtitle: 'Mendukung trek audio WAV, OGG, MP3, dan FLAC',
    dropzoneButton: 'Pilih File Audio',
    audioInfoTitle: 'Properti Trek Audio',
    durationLabel: 'Durasi',
    sampleRateLabel: 'Tingkat Sampel',
    channelsLabel: 'Saluran Audio',
    totalSamplesLabel: 'Total Jumlah Sampel',
    loopControlsTitle: 'Konfigurasi Wilayah Loop',
    loopStartLabel: 'Penanda Awal Loop',
    loopEndLabel: 'Penanda Akhir Loop',
    loopDurationLabel: 'Durasi Loop',
    zeroCrossingLabel: 'Penyelarasan Persilangan Nol',
    snapZeroCrossingButton: 'Sejajarkan ke Persilangan Nol Terdekat',
    playLoopButton: 'Pratinjau Loop Mulus',
    pauseLoopButton: 'Jeda Pemutaran',
    stopLoopButton: 'Hentikan Pemutaran',
    exportWavButton: 'Ekspor WAV dengan Metadata',
    sampleUnitLabel: 'Sampel',
    secondUnitLabel: 'Detik',
    zoomLabel: 'Pembesaran Gelombang',
    zoomInButton: 'Perbesar',
    zoomOutButton: 'Perkecil',
    resetZoomButton: 'Atur Ulang Tampilan',
    noFileSelected: 'Belum ada file audio yang dimuat',
    invalidAudioFile: 'Gagal mendekode file audio',
    presetsTitle: 'Preset Cepat',
    presetFullTrack: 'Loop Seluruh Trek',
    presetIntroCut: 'Lewati 10% Intro',
    presetMiddleLoop: 'Bagian Tengah 50%',
    statusLooping: 'Pemutaran Loop Aktif',
    statusPaused: 'Pemutaran Dijeda',
    statusReady: 'Audio Dimuat dan Siap',
    statusLoaded: 'Trek audio berhasil dimuat',
    statusDecodeError: 'Kesalahan mendekode file audio',
    statusSnapped: 'Penanda disejajarkan ke persilangan nol',
    statusStopped: 'Pemutaran dihentikan',
    statusExported: 'File WAV diekspor dengan tag loop',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Loop Audio Game Mulus dan Penyelarasan Sampel',
    },
    {
      type: 'paragraph',
      html: 'Mencapai pemutaran musik latar belakang yang lancar dalam game memerlukan penyelarasan sampel yang tepat di batas loop. Engine game modern seperti Unity, Godot, Unreal Engine, FMOD, dan Wwise menggunakan metadata LOOPSTART dan LOOPEND.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Presisi Sampel', value: '44.1 kHz / 48 kHz' },
        { label: 'Ambang Persilangan Nol', value: 'Amplitudo 0.00' },
        { label: 'Standar Metadata', value: 'RIFF smpl dan INFO' },
        { label: 'Pengurangan Klik', value: '100% Fase Sejajar' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Strategi Persilangan Nol',
    },
    {
      type: 'tip',
      title: 'Menghilangkan Bunyi Klik Audio',
      html: 'Selalu sejajarkan penanda awal dan akhir loop pada titik persilangan nol positif. Ini mencegah lonjakan amplitudo mendadak dan bunyi klik.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabel Perbandingan Kompatibilitas Metadata',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Penanda Chunk RIFF smpl',
          description: 'Metadata biner standar yang tertanam dalam header WAV',
          points: [
            'Didukung secara native oleh Godot, FMOD, Wwise, dan GameMaker',
            'Memberikan presisi sampel yang akurat tanpa pergeseran waktu',
            'Menyimpan penanda loop langsung di dalam file WAV yang sama',
            'Menghilangkan bunyi klik saat dikombinasikan dengan persilangan nol',
          ],
        },
        {
          title: 'Pemotongan Audio Manual',
          description: 'Memisah intro dan loop menjadi file terpisah',
          points: [
            'Digunakan oleh pemutar media sederhana tanpa pembaca metadata',
            'Rentan terhadap jeda kecil dalam milidetik',
            'Memerlukan pengelolaan banyak file dalam proyek',
            'Risiko tinggi bunyi klik pada transisi',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabel Referensi Tingkat Sampel',
    },
    {
      type: 'table',
      headers: ['Tingkat Sampel', 'Sampel per Detik', 'Penggunaan yang Direkomendasikan', 'Resolusi Waktu'],
      rows: [
        ['44,100 Hz', '44,100', 'Musik Game Kualitas CD Standar', '0.0226 ms per sampel'],
        ['48,000 Hz', '48,000', 'Game PC dan Konsol Modern', '0.0208 ms per sampel'],
        ['96,000 Hz', '96,000', 'Audio Master Resolusi Tinggi', '0.0104 ms per sampel'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Penginjeksian Metadata Otomatis',
    },
    {
      type: 'paragraph',
      html: 'Saat mengekspor trek audio dari alat ini, struktur metadata baru disuntikkan langsung ke dalam header RIFF dari file WAV.',
    },
  ],
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: [
    {
      question: 'Apa itu tag metadata LOOPSTART dan LOOPEND?',
      answer: 'LOOPSTART dan LOOPEND adalah bidang metadata yang diukur dalam jumlah sampel absolut.',
    },
    {
      question: 'Mengapa terjadi bunyi klik pada titik loop?',
      answer: 'Klik terjadi saat bentuk gelombang di akhir tidak cocok dengan amplitudo atau fase di awal.',
    },
    {
      question: 'Apakah file audio asli saya diunggah ke server?',
      answer: 'Tidak. Semua pemrosesan dilakukan secara lokal di memori peramban Anda.',
    },
  ],
  howTo: [
    {
      name: 'Muat Trek Audio',
      text: 'Tarik dan lepas file musik Anda atau pilih file WAV, OGG, MP3, atau FLAC.',
    },
    {
      name: 'Atur Penanda Loop',
      text: 'Sesuaikan awal dan akhir loop melalui tampilan gelombang.',
    },
    {
      name: 'Sejajarkan ke Persilangan Nol',
      text: 'Klik tombol penyelarasan ke persilangan nol.',
    },
    {
      name: 'Pratinjau dan Ekspor',
      text: 'Dengarkan pemutaran loop yang mulus lalu ekspor file WAV.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pencari Titik Loop Audio Game',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'IDR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apa itu tag metadata LOOPSTART dan LOOPEND?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART dan LOOPEND adalah bidang metadata yang diukur dalam jumlah sampel.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara menemukan dan menginjeksikan titik loop audio',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Muat Trek Audio',
          text: 'Tarik dan lepas file musik Anda atau pilih file audio.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referensi dan Bacaan Lebih Lanjut',
  bibliography: bibliographyEntries,
};
