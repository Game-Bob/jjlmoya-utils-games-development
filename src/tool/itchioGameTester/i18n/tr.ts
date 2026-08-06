import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-oyun-test-araci',
  title: 'Itch.io Web Oyun Denetçisi ve Canlı Çözünürlük Optimize Edici',
  description: 'HTML5 dışa aktarma dosyalarını veya ZIP arşivlerini yükleyerek görünüm alanlarını canlı test edin, kaydırma çubuklarını düzeltin, Godot ve Unity WebGL derlemelerini denetleyin ve Itch.io yerleştirme ayarları oluşturun.',
  ui: {
    dropzoneTitle: 'Oyun Derlemeni veya ZIP Arşivini Buraya Bırak',
    dropzoneHint: 'Herhangi bir .ZIP dosyasını, dışa aktarılmış klasörü veya HTML5 derleme dosyalarını anında incelemek için bu alana bırakın.',
    chooseFiles: 'Oyun Dosyası veya Klasör Seç',
    engineDetected: 'Algılanan Motor',
    compatibilityScore: 'Itch.io Uyumluluk Puanı',
    viewportWidth: 'Görünüm Alanı Genişliği (px)',
    viewportHeight: 'Görünüm Alanı Yüksekliği (px)',
    presets: 'Hızlı Çözünürlük Ön Ayarları',
    fitTest: 'Canlı Düzen ve Kaydırma Çubuğu Testi',
    copySettings: 'Itch.io Yerleştirme Ayarlarını Kopyala',
    copied: 'Panoya Kopyalandı',
    embedMode: 'Yerleştirme Modu',
    scrollbars: 'Kaydırma Çubuklarını Etkinleştir',
    noIssuesFound: 'Tüm kontroller başarıyla geçildi. Paket Itch.io standartlarıyla %100 uyumludur.',
    filesInspected: 'Denetlenen Dosyalar',
    resetViewport: 'Görünüm Alanını Sıfırla',
    autoScaleToggle: 'Görünüm Alanını Ekran Genişliğine Otomatik Ölçekle',
    scaledNotice: 'Görünüm alanı ekran genişliğini aşıyor. Tuvalin tamamı görünür olsun diye yapay zoom-out uygulandı. Gerçek düzeni görmek için otomatik ölçeklemeyi devre dışı bırakın.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Itch.io HTML5 Oyun Dışa Aktarmaları için Biçimlendirme Yönergeleri'
    },
    {
      type: 'paragraph',
      html: 'Itch.io\'da HTML5 ve WebGL oyunları yayınlamak, görünüm alanı boyutlarının, arşiv dosya yapılarının ve çapraz kaynak güvenlik başlıklarının hassas yapılandırmasını gerektirir.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Standart Web En-Boy Oranı', value: '16:9 Yatay' },
        { label: 'Klasik Itch Çözünürlüğü', value: '960 x 540 px' },
        { label: 'Gerekli Giriş Dosyası', value: 'Kök dizinde index.html' },
        { label: 'Godot 4 Gereksinimi', value: 'COOP / COEP Başlıkları' }
      ]
    },
    {
      type: 'tip',
      html: 'Itch.io\'ya 1280x720 WebGL oyunu yerleştirirken, "Embed in page" etkin olarak yerleştirme görünüm alanı boyutlarını tam olarak 1280x720 olarak ayarlayın.'
    }
  ],
  faq: [
    {
      question: 'Godot 4 oyunum neden Itch.io\'da siyah ekran gösteriyor?',
      answer: 'Godot 4 web dışa aktarmaları SharedArrayBuffer desteği gerektiren WebAssembly çoklu iş parçacığını kullanır. Itch.io oyun düzenleme sayfanızda çerçeve seçeneklerinde "SharedArrayBuffer support" özelliğini etkinleştirin.'
    }
  ],
  howTo: [
    { name: 'Oyun Dosyalarını veya ZIP\'i Yükle', text: 'HTML5 dışa aktarma ZIP arşivini sürükle ve bırak ya da index.html içeren derleme klasörünü seç.' },
    { name: 'Uyumluluk Raporunu İncele', text: 'Kök index.html yerleşimi, büyük/küçük harf uyarıları ve motor algılama için otomatik denetim raporunu kontrol et.' },
    { name: 'Görünüm Alanını Canlı Yeniden Boyutlandır', text: 'Kaydırma çubukları olmadan iframe yerleştirmeyi canlı test etmek için çözünürlük kontrollerini ve en-boy oranı ön ayarlarını kullan.' },
    { name: 'Itch.io Ayarlarını Kopyala', text: 'Itch.io oyun gönderme sayfan için tam genişlik ve yükseklik değerlerini almak üzere Ayarları Kopyala\'ya tıkla.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io Web Oyun Denetçisi',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Godot 4 oyunum neden Itch.io\'da siyah ekran gösteriyor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Godot 4 web dışa aktarmaları SharedArrayBuffer desteği gerektiren WebAssembly çoklu iş parçacığını kullanır. Itch.io oyun düzenleme sayfanızda çerçeve seçeneklerinde "SharedArrayBuffer support" özelliğini etkinleştirin.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Itch.io oyununuzun görünüm alanını denetleme ve test etme',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Oyun Dosyalarını veya ZIP\'i Yükle',
          text: 'HTML5 dışa aktarma ZIP arşivini sürükle ve bırak ya da index.html içeren derleme klasörünü seç.'
        },
        {
          '@type': 'HowToStep',
          name: 'Görünüm Alanını Canlı Yeniden Boyutlandır',
          text: 'Kaydırma çubukları olmadan iframe yerleştirmeyi canlı test etmek için çözünürlük kontrollerini ve en-boy oranı ön ayarlarını kullan.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
