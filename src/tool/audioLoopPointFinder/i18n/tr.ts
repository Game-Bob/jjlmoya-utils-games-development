import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'oyun-ses-dongu-noktasi-bulucu',
  title: 'Oyun Ses Döngü Noktası Bulucu ve Üstveri Enjektörü',
  description: 'Hassas ses döngü noktalarını bulun, tık seslerini önlemek için sıfır geçişlerine hizalayın ve LOOPSTART ve LOOPEND üstverileriyle WAV dosyaları dışa aktarın.',
  ui: {
    title: 'Oyun Ses Döngü Noktası Bulucu',
    subtitle: 'Etkileşimli dalga formu analizörü, sıfır geçiş dedektörü ve WAV üstveri etiketleyici',
    dropzoneTitle: 'Ses dosyasını buraya sürükleyin veya göz atmak için tıklayın',
    dropzoneSubtitle: 'WAV, OGG, MP3 ve FLAC ses parçalarını destekler',
    dropzoneButton: 'Ses Dosyası Seç',
    audioInfoTitle: 'Ses Parçası Özellikleri',
    durationLabel: 'Süre',
    sampleRateLabel: 'Örnekleme Oranı',
    channelsLabel: 'Ses Kanalları',
    totalSamplesLabel: 'Toplam Örnek Sayısı',
    loopControlsTitle: 'Döngü Bölgesi Yapılandırması',
    loopStartLabel: 'Döngü Başlangıç İşaretçisi',
    loopEndLabel: 'Döngü Bitiş İşaretçisi',
    loopDurationLabel: 'Döngü Süresi',
    zeroCrossingLabel: 'Sıfır Geçiş Hizalaması',
    snapZeroCrossingButton: 'En Yakın Sıfır Geçişine Hizala',
    playLoopButton: 'Kusursuz Döngüyü Önizle',
    pauseLoopButton: 'Oynatmayı Duraklat',
    stopLoopButton: 'Oynatmayı Durdur',
    exportWavButton: 'Üstveri ile WAV Dışa Aktar',
    sampleUnitLabel: 'Örnekler',
    secondUnitLabel: 'Saniye',
    zoomLabel: 'Dalga Formu Yakınlaştırma',
    zoomInButton: 'Yakınlaştır',
    zoomOutButton: 'Uzaklaştır',
    resetZoomButton: 'Görünümü Sıfırla',
    noFileSelected: 'Henüz bir ses dosyası yüklenmedi',
    invalidAudioFile: 'Ses dosyası çözülemedi',
    presetsTitle: 'Hızlı Önayarlar',
    presetFullTrack: 'Tüm Parçayı Döngüye Al',
    presetIntroCut: '%10 Girişi Atla',
    presetMiddleLoop: 'Orta %50 Bölüm',
    statusLooping: 'Döngü Oynatma Aktif',
    statusPaused: 'Oynatma Duraklatıldı',
    statusReady: 'Ses Yüklendi ve Hazır',
    statusLoaded: 'Ses parçası başarıyla yüklendi',
    statusDecodeError: 'Ses dosyası çözülürken hata oluştu',
    statusSnapped: 'İşaretçiler sıfır geçiş noktalarına hizalandı',
    statusStopped: 'Oynatma durduruldu',
    statusExported: 'WAV dosyası döngü etiketleriyle dışa aktarıldı',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Oyunlarda Kesintisiz Ses Döngüsü ve Örnek Hizalaması',
    },
    {
      type: 'paragraph',
      html: 'Video oyunlarında sürekli arka plan müziği elde etmek, döngü sınırlarında kesin örnek hizalaması gerektirir. Unity, Godot, Unreal Engine, FMOD ve Wwise gibi modern oyun motorları gömülü LOOPSTART ve LOOPEND üstverilerini kullanır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Örnekleme Hassasiyeti', value: '44.1 kHz / 48 kHz' },
        { label: 'Sıfır Geçiş Eşiği', value: '0.00 Genlik' },
        { label: 'Üstveri Standardı', value: 'RIFF smpl ve INFO' },
        { label: 'Tık Azaltma', value: '%100 Faz Hizalı' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Sıfır Geçiş Stratejisi',
    },
    {
      type: 'tip',
      title: 'Tık Seslerini Önleme',
      html: 'Döngü başlangıç ve bitiş işaretçilerini her zaman pozitif sıfır geçiş noktalarına hizalayın. Bu, hoparlörde ani genlik sıçramalarını ve tık seslerini önler.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Üstveri Uyumluluk Karşılaştırması',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RIFF smpl Bloğu İşaretçisi',
          description: 'WAV başlığına gömülü standart ikili üstveri',
          points: [
            'Godot, FMOD, Wwise ve GameMaker tarafından yerel desteklenir',
            'Zaman kayması olmadan kesin örnek hassasiyeti sağlar',
            'Döngü işaretçilerini aynı WAV dosyasında saklar',
            'Sıfır geçişi ile akustik tık seslerini yok eder',
          ],
        },
        {
          title: 'Manuel Ses Kesme',
          description: 'Giriş ve döngü kısımlarını ayrı dosyalara bölme',
          points: [
            'Üstveri okumayan basit medya oynatıcılar tarafından kullanılır',
            'Milisaniyelik duraksamalara ve sapmalara açıktır',
            'Projede birden fazla dosyayı yönetmeyi gerektirir',
            'Geçişlerde yüksek tık sesi riski taşır',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Örnekleme Oranları Referans Tablosu',
    },
    {
      type: 'table',
      headers: ['Örnekleme Oranı', 'Saniyedeki Örnek', 'Önerilen Kullanım Alanı', 'Zaman Çözünürlüğü'],
      rows: [
        ['44,100 Hz', '44,100', 'Standart CD Kalitesinde Oyun Müziği', 'Örnek başına 0.0226 ms'],
        ['48,000 Hz', '48,000', 'Modern Masaüstü ve Konsol Oyunları', 'Örnek başına 0.0208 ms'],
        ['96,000 Hz', '96,000', 'Yüksek Çözünürlüklü Master Ses', 'Örnek başına 0.0104 ms'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Bayt Düzeyinde Otomatik Üstveri Enjeksiyonu',
    },
    {
      type: 'paragraph',
      html: 'Bu araçtan ses parçalarını dışa aktarırken yeni üstveri yapıları doğrudan WAV dosyasının RIFF başlığına enjekte edilir.',
    },
    { type: 'title', level: 2, text: 'Döngü süresini ve faz geçişini değerlendirme' },
    { type: 'paragraph', html: 'Sıfır geçişi genlik sıçramalarını azaltır, ancak tek başına doğal bir müzik geçişini garanti etmez. Başlangıç ve bitişi art arda dinleyin; tekrar sırasında ritmi, armoniyi ve yankı kuyruğunu kontrol edin.' },
    { type: 'paragraph', html: 'İşaretçiler sample cinsinden saklandığı için milisaniye yuvarlamasına bağlı değildir. Dinleme kontrolünden sonra WAV dosyasını dışa aktarın ve oyunda çalacak motorda test edin.' },
    { type: 'paragraph', html: 'Döngü uzunluğunun müzik cümlesine uyduğunu ve bir notayı ya da efekt kuyruğunu kesmediğini de kontrol edin. Sample cinsindeki işaretçiler dosya cihazlar arasında taşınsa bile hassasiyeti korur; yine de sonucu oyunun gerçek temposunda ve ses düzeyinde dinleyin.' },
  ],
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: [
    {
      question: 'LOOPSTART ve LOOPEND üstveri etiketleri nedir?',
      answer: 'LOOPSTART ve LOOPEND, mutlak örnek sayısı olarak ölçülen üstveri alanlarıdır.',
    },
    {
      question: 'Döngü noktalarında neden tık sesleri oluşur?',
      answer: 'Tık sesleri, bitişteki dalga formunun başlangıçtaki genlik veya faz ile eşleşmemesi durumunda oluşur.',
    },
    {
      question: 'Orijinal ses dosyam bir sunucuya yükleniyor mu?',
      answer: 'Hayır. Tüm işlemler yerel olarak tarayıcınızın belleğinde gerçekleşir.',
    },
  ],
  howTo: [
    {
      name: 'Ses Parçasını Yükle',
      text: 'Müzik dosyanızı sürükleyip bırakın veya bir WAV, OGG, MP3 veya FLAC dosyası seçin.',
    },
    {
      name: 'İşaretçileri Konumlandır',
      text: 'Dalga formu üzerinden döngü başlangıç ve bitişini ayarlayın.',
    },
    {
      name: 'Sıfır Geçişine Hizala',
      text: 'Sıfır geçiş noktalarına hizalamak için düğmeye tıklayın.',
    },
    {
      name: 'Test Et ve Dışa Aktar',
      text: 'Kusursuz döngüyü dinleyin ve WAV dosyasını dışa aktarın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Oyun Ses Döngü Noktası Bulucu',
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
          name: 'LOOPSTART ve LOOPEND üstveri etiketleri nedir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART ve LOOPEND, örnek sayısı olarak ölçülen üstveri alanlarıdır.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Ses döngü noktaları nasıl bulunur ve enjekte edilir',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Ses Parçasını Yükle',
          text: 'Müzik dosyanızı sürükleyip bırakın veya bir ses dosyası seçin.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referanslar ve İleri Okuma',
  bibliography: bibliographyEntries,
};
