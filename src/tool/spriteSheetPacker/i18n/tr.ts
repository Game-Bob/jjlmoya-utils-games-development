import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'sprite-sheet-paketleyici-ve-cikartici',
  title: 'Sprite Sheet Paketleyici ve Çıkartıcı',
  description:
    'Tekil animasyon karelerini doku atlaslarında birleştirerek veya mevcut sayfalardan sprite kareleri çıkartarak 2D oyun performansını optimize edin.',
  ui: {
    packerTab: 'Paketleme Stüdyosu',
    extractorTab: 'Sprite Çıkartıcı',
    dropZoneTitle: 'Kareleri Buraya Sürükleyin',
    dropZoneSubtitle: 'Optimize edilmiş doku atlasınızı oluşturmak için PNG veya WebP görselleri yükleyin',
    selectFilesButton: 'Görsel Dosyaları Seç',
    clearAllButton: 'Çalışma Alanını Temizle',
    downloadZipButton: 'Paketi İndir (ZIP)',
    copyJsonButton: 'Atlas JSON Kopyala',
    downloadSheetPngButton: 'Doku PNG İndir',
    paddingLabel: 'Kare Mesafesi (px)',
    borderExtrusionLabel: 'Kenar Uzatması (px)',
    maxTextureSizeLabel: 'Maksimum Doku Boyutu',
    powerOfTwoLabel: '2 nin Kuvvetine Zorla (POT)',
    trimTransparencyLabel: 'Şeffaflığı Kırp',
    exportFormatLabel: 'Hedef Motor Formatı',
    presetPixelArt: 'Pixel Art 16x16 Şablonu',
    presetHdUi: 'HD UI Atlas 1024 Şablonu',
    presetMobile: 'Mobil WebGL 2048 Şablonu',
    formatGenericHash: 'Genel JSON (Hash)',
    formatGenericArray: 'Genel JSON (Array)',
    formatUnity: 'Unity 2D Motoru',
    formatGodot: 'Godot 2D Motoru',
    formatPhaser: 'Phaser / PixiJS Motoru',
    formatCss: 'Web Frontend CSS',
    previewTitle: 'Doku Atlası Önizlemesi',
    efficiencyBadge: 'Doku Verimliliği',
    drawCallsBadge: 'Azaltılan Draw Call',
    totalFramesBadge: 'Paketlenen Kare Sayısı',
    textureSizeBadge: 'Atlas Boyutu',
    flipbookTitle: 'Animasyon Oynatıcı Flipbook',
    flipbookFpsLabel: 'Animasyon Hızı (FPS)',
    playAnimation: 'Oynat',
    pauseAnimation: 'Duraklat',
    extractorModeGrid: 'Sabit Izgara Kesimi',
    extractorModeAlpha: 'Otomatik Alfa Kanalı Kesimi',
    frameWidthLabel: 'Kare Genişliği (px)',
    frameHeightLabel: 'Kare Yüksekliği (px)',
    marginLabel: 'Dış Kenar Boşluğu (px)',
    spacingLabel: 'Izgara Aralığı (px)',
    extractFramesButton: 'Kareleri Çıkart',
    extractedCountLabel: 'Çıkartılan Spritelar',
    codeSnippetTitle: 'Motor Entegrasyon Kodu',
    copySnippetButton: 'Kodu Kopyala',
    copiedToast: 'Panoya Kopyalandı',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '2D Oyun Motorlarında GPU Batching ve Draw Call Optimizasyonu',
    },
    {
      type: 'paragraph',
      html: 'Tekil görsel karelerini tek bir doku atlasında toplamak, işlemciden ekran kartına gönderilen çizim komutu sayısını (draw call) önemli ölçüde azaltır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '%95', label: 'Draw Call Azalması' },
        { value: '4x', label: 'Daha Hızlı GPU İşleme' },
        { value: '60 FPS', label: 'Mobilde Kararlı Hedef' },
        { value: '100%', label: 'Tarayıcıda Yerel İşlem' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Tekil Görsel Dosyaları ile Paketlemiş Doku Atlasları Karşılaştırması',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tekil Görsel Dosyaları',
          description: 'Ayrı ayrı kaydedilmiş PNG veya WebP dosyaları',
          points: [
            'Erandaki her bir kare için ayrı bir çizim komutu oluşturur',
            'Ekran kartında sürekli bağlam değişimine yol açar',
            'Web oyunlarında HTTP istek sayısını artırır',
            'Mobil cihazlarda kare hızının düşmesine neden olur',
          ],
        },
        {
          title: 'Paketlenmiş Doku Atlası',
          description: 'JSON koordinat verisi ile birleştirilmiş tek PNG görseli',
          points: [
            'Yüzlerce sprite karesini tek bir GPU çizim komutunda birleştirir',
            'Bellek bant genişliğini ve grafik işleme hızını en üst düzeye çıkarır',
            'Görsel ve veriyi birleştirerek dosya isteklerini azaltır',
            'Tüm platformlarda akıcı 60 FPS performansı sağlar',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Alt Piksel Kamera Hareketi ve Kenar Uzatma Matematiği',
    },
    {
      type: 'paragraph',
      html: '1 ila 2 piksellik kenar uzatması (Border Extrusion) uygulamak, dış kenar piksellerini dışarıya doğru kopyalayarak kamera hareketlerinde oluşan çizgi kusurlarını engeller.',
    },
    {
      type: 'tip',
      title: 'Kenar Uzatma Stratejisi',
      html: 'Kamera hareketlerinde piksel sızmasını tamamen önlemek için paketleme esnasında kenar uzatması kullanın.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Farklı Platformlar İçin Önerilen Doku Boyutları',
    },
    {
      type: 'table',
      headers: ['Hedef Platform', 'Önerilen Maks Boyut', '2 nin Kuvveti Şartı', 'Bellek Profili'],
      rows: [
        ['Mobil Tarayıcılar', '2048 x 2048 px', 'WebGL 1.0 İçin Zorunlu', 'Düşük Bant Genişliği'],
        ['Masaüstü PC / Konsol', '4096 x 4096 px', 'Önerilir', 'Yüksek GPU Kapasitesi'],
        ['Retro El Konsolları', '1024 x 1024 px', 'Kesin Şart', 'Katı VRAM Sınırları'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Eski grafik sürücüleri ve WebGL 1.0 ile %100 uyumluluk sağlar',
          con: 'Az sayıda sprite olduğunda kullanılmayan şeffaf alan bırakabilir',
        },
        {
          pro: 'Donanımsal otomatik mipmap oluşturmayı destekler',
          con: 'Düzensiz şekillerde dikkatli kenar boşluğu ayarı gerektirir',
        },
        {
          pro: 'Ekran kartındaki VRAM bellek tahsisini optimize eder',
          con: 'Başlangıç doku alanını az miktarda artırır',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Sprite Paketleme Temel Terimleri',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'İşlemcinin ekran kartına grafik çizmesi için gönderdiği komut.',
        },
        {
          term: 'Bin Packing',
          definition: 'Dikdörtgen elemanları en küçük alana optimal şekilde yerleştirme algoritması.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Kamera hareketinde çizgi kusurlarını engellemek için dış kenar piksellerini kopyalama.',
        },
        {
          term: 'Flipbook Animation',
          definition: '2D oyunlarda sürekli hareketi simüle etmek için karelerin hızlıca sırayla oynatılması.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Performans Kontrol Listesi',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Üretim Kuralları',
      html: 'Animasyonları ortak atlaslarda toplayın ve WebGL derlemelerinde 2 nin kuvveti boyutlarını kullanın.',
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 1.",
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 2.",
    },
    { type: 'title', level: 2, text: 'Padding, kenar genişletme ve dışa aktarma verilerini ayarlama' },
    { type: 'paragraph', html: 'Padding komşu kareleri ayırır, kenar genişletme ise dış pikselleri tekrarlar. Bu değerleri filtreleme, mipmap ve kamera hareketiyle birlikte değerlendirin: az boşluk dikiş oluşturur, fazla boşluk dokunun alanını boşa harcar.' },
    { type: 'paragraph', html: 'Paketlemeden sonra JSON koordinatlarını hedef motorda kontrol edin. Atlas ancak kare boyutu, başlangıç noktası, dönüş ve şeffaflık dışa aktarılan dosyayla aynı şekilde yorumlandığında güvenilir olur.' },
    { type: 'paragraph', html: 'Doku biçimi ile metadatanın hedef motora uygun olduğunu da kontrol edin. Maksimum boyut, şeffaflık kırpma ve ikinin kuvveti ayarı bellek kullanımını ve eski cihazlardaki uyumluluğu etkiler.' },
  ],
  faq: [
    {
      question: 'Sprite sheet nedir ve 2D oyunlar için neden önemlidir?',
      answer:
        'Sprite sheet, birden fazla animasyon karesini içeren tek bir görsel dosyasıdır. Oyun motorunun tek bir GPU komutuyla çok sayıda nesneyi çizmesini sağlar.',
    },
    {
      question: 'Bu araçtaki yerel işleme nasıl çalışır?',
      answer:
        'Tüm işlemler sunucuya hiçbir veri gönderilmeden tarayıcınızın HTML5 Canvas API sinde yerel olarak gerçekleşir.',
    },
    {
      question: 'Mevcut bir sprite sayfasından kareleri çıkartabilir miyim?',
      answer:
        'Evet. Çıkartıcı moduna geçin, görselinizi yükleyin ve ızgara boyutlarını ayarlayın.',
    },
  ],
  howTo: [
    {
      name: 'Kareleri Yükleyin',
      text: 'PNG veya WebP dosyalarınızı yükleme alanına sürükleyin.',
    },
    {
      name: 'Ayarları Yapılandırın',
      text: 'Mesafe, kenar uzatması ve hedef motor formatını seçin.',
    },
    {
      name: 'Önizleyin ve İndirin',
      text: 'Flipbook oynatıcıda animasyonu kontrol edin ve ZIP paketini indirin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Sprite Sheet Paketleyici ve Çıkartıcı',
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
          name: 'Sprite sheet nedir ve 2D oyunlar için neden önemlidir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sprite sheet, birden fazla animasyon karesini içeren tek bir görsel dosyasıdır.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Sprite sheet nasıl paketlenir ve çıkartılır',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Kareleri Yükleyin',
          text: 'PNG veya WebP dosyalarınızı yükleme alanına sürükleyin.',
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
