import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'retro-oyun-ses-efekti-olusturucu',
  title: 'Oyunlar icin Retro Ses Efekti Olusturucu',
  description: 'Tarayicinizda anlik hazir ayarlar, dalga sekli kontrolleri, canli osiloskop ve WAV dissa aktarim ile retro oyun ses efektleri olusturun.',
  ui: {
    waveformLabel: 'Dalga sekli',
    waveformSquare: 'Kare',
    waveformSawtooth: 'Testere disi',
    waveformSine: 'Sinus',
    waveformTriangle: 'Ucgen',
    waveformNoise: 'Gurutu',
    presetLabel: 'Hizli ses bankasi',
    presetExplosion: 'Patlama',
    presetLaser: 'Lazer',
    presetJump: 'Ziplama',
    presetCoin: 'Altin',
    presetPowerUp: 'Guc alma',
    frequencyLabel: 'Baslangic frekansi',
    frequencyEndLabel: 'Bitis frekansi',
    durationLabel: 'Uzunluk',
    decayLabel: 'Sönümleme',
    sweepLabel: 'Frekans kaymasi',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Alcak geciren',
    highpassLabel: 'Yuksek geciren',
    noiseMixLabel: 'Gurultu karisimi',
    toneSection: 'Ton',
    dynamicsSection: 'Dinamik',
    filterSection: 'Doku',
    playButton: 'Sesi cal',
    stopButton: 'Durdur',
    downloadButton: 'WAV indir',
    randomizeButton: 'Rastgele',
    resetButton: 'Sifirla',
    waveformPreviewLabel: 'Canli dalga sekli',
    generatedLabel: 'Olusturuldu',
    statusReady: 'Dinlemeye hazir',
    statusPlaying: 'Tarayicida caliniyor',
    statusStopped: 'Oynatma durduruldu',
    statusDownloaded: 'WAV indirildi',
    statusAudioBlocked: 'Oynatma icin sekmede ses izni gerekiyor',
    statusGenerating: 'Ses isleniyor',
    presetHint: 'Bir baslangic noktasi secin ve sinyali asagidaki kontrollerle sekillendirin.',
    monoWavHint: '44.1 kHz · 16-bit mono WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Game Jam Sirasinda Tarayicidan Ayrilmadan Ses Efektleri Uretin',
    },
    {
      type: 'paragraph',
      html: 'Iyi bir oyun ses efekti oyuncuya eylemi aninda bildirmelidir. Yükselen bir frekans ziplama veya guc almayi, hizla dusen bir frekans ise lazer veya darbeyi hissettirir. Bu arac tarayici icinde ses sentezi yapar.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Ses hazir ayarlari', value: '5 baslangic sablonu' },
        { label: 'Osilator secenekleri', value: '5 dalga sekli' },
        { label: 'Aktarim formati', value: '16-bit PCM WAV' },
        { label: 'Islem', value: 'Tarayici tabanli' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Kontroller Neyi Degistirir',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ton ve Hareket',
          description: 'Ton kontrolleri sesin temel kimligini belirler.',
          points: [
            'Baslangic frekansi ana ses yuksekligini belirler',
            'Frekans kaymasi sesi bitis frekansina dogru surukler',
            'Vibrato hafif periyodik ton dalgalanmasi ekler',
            'Farkli dalga sekilleri farkli armonik dokular olusturur',
          ],
        },
        {
          title: 'Bicim ve Doku',
          description: 'Dinamik ve filtre kontrolleri sesin sönümlenmesini ayarlar.',
          points: [
            'Uzunluk sesin toplam suresini belirler',
            'Sönümleme genligin ne kadar hizli dusecegini ayarlar',
            'Alcak geciren filtre sert yuksek frekanslari yumusatir',
            'Yuksek geciren filtre bas frekanslari temizler',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Oyun Etkinlikleri Icin Pratik Tarifler',
    },
    {
      type: 'table',
      headers: ['Etkinlik', 'Kullanisli Baslangic Sablonu', 'Denenmesi Gereken Ilk Ayar'],
      rows: [
        ['Patlama', 'Dusuk frekansli gurultu', 'Süreyi uzatin ve alcak geciren filtreyi dusurun'],
        ['Lazer', 'Dusen kaymali testere disi', 'Süreyi kisaltin ve yuksek geciren filtreyi yukseltin'],
        ['Ziplama', 'Yukselen kaymali kare', 'Yükselisin net duyulmasi icin sönümlemeyi azaltin'],
        ['Altin', 'Kisa yukselen kaymali kare', 'Parlak bir ses icin baslangic frekansini artirin'],
        ['Guc alma', 'Uzun yukselen kaymali ucgen', 'Daha hareketli bir ses icin biraz vibrato ekleyin'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'WAV Neden Prototipler Icin Idealdir',
    },
    {
      type: 'paragraph',
      html: 'WAV formati ekstra sıkıştırma kütüphanesine ihtiyaç duymadan tum popüler oyun motorlarinda doğrudan kullanilabilir.',
    },
    {
      type: 'tip',
      title: 'Hedef Oyun Ses Seviyesinde Dinleyin',
      html: 'Tek basina harika duyulan bir ses oyunda surekli tekrarlandiginda yorucu olabilir. Oyunda fon muzigiyle birlikte test edin.',
    },
  ],
  faqTitle: 'Sikca Sorulan Sorular',
  faq: [
    {
      question: 'Seslerim sunucuya yukleniyor mu?',
      answer: 'Hayir. Sentezleme ve WAV kodlamasi tamamen tarayicinizda gerçekleşir.',
    },
    {
      question: 'Indirilen sesleri oyunumda kullanabilir miyim?',
      answer: 'Evet. Uretilen sesler prototipler ve bagimsiz oyun projeleri icin uygundur.',
    },
    {
      question: 'Frekans kaymasi nasil calisir?',
      answer: 'Kaydirici, baslangic frekansina orantili olarak bitis frekansini hesaplar.',
    },
    {
      question: 'Ses gelmiyorsa ne yapmaliyim?',
      answer: 'Tarayici sekmesinin ses iznine sahip oldugundan emin olun ve Sesi cal butonuna tekrar tiklayin.',
    },
  ],
  howTo: [
    {
      name: 'Bir hazir ayar secin',
      text: 'Patlama, Lazer, Ziplama, Altin veya Guc alma seceneklerinden birini secin.',
    },
    {
      name: 'Sinyali sekillendirin',
      text: 'Dalga sekli, frekans, süre ve filtre ayarlarini yapin.',
    },
    {
      name: 'Sonucu dinleyin',
      text: 'Canli dinlemek icin Sesi cal butonuna tiklayin.',
    },
    {
      name: 'WAV dosyasini indirin',
      text: 'Dosyayi kaydetmek icin WAV indir butonuna tiklayin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Oyunlar icin Retro Ses Efekti Olusturucu',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'TRY',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Seslerim sunucuya yukleniyor mu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hayir. Sentezleme tamamen tarayicinizda gerçekleşir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Retro ses efekti olusturma adimlari',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Bir hazir ayar secin',
          text: 'Bir baslangic sablonu secin.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Kaynaklar',
  bibliography: bibliographyEntries,
};
