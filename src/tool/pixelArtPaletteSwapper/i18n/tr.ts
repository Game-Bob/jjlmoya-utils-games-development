import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'piksel-sanati-palet-degistirici',
  title: 'Piksel Sanatı Palet Değiştirici',
  description: 'Sprite ve sprite sayfalarındaki renkleri klasik konsol paletlerine veya özel hex renklerine doğrudan tarayıcınızda dönüştürün.',
  ui: {
    uploadTitle: 'Bir sprite veya sprite sayfası bırakın',
    uploadHint: 'PNG, JPEG veya WebP dosyaları doğrudan cihazınızda işlenir',
    chooseImage: 'Görsel seç',
    replaceImage: 'Görseli değiştir',
    paletteTitle: 'Palet seçin',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'NES esintili',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Özel renkler',
    customPaletteHint: 'Hex değerlerini virgül, boşluk veya yeni satır ile ayırın.',
    applyCustomPalette: 'Paleti uygula',
    resetCustomPalette: 'Sıfırla',
    sourcePreview: 'Orijinal',
    resultPreview: 'Dönüştürülmüş sonuç',
    waitingForImage: 'Bir görsel bekleniyor',
    uploadToPreview: 'Önizlemek için bir görsel yükleyin',
    resultEmpty: 'Orijinal ve palet uygulanmış sürümler yan yana görünecektir.',
    downloadPng: 'PNG İndir',
    downloadDisabled: 'Dışa aktarmak için bir görsel yükleyin.',
    colorCount: 'Kaynak renkler',
    mappedCount: 'Kullanılan renkler',
    imageSize: 'Görsel boyutu',
    paletteCount: 'palet renkleri',
    preserveAlpha: 'Şeffaflığı koru',
    zoomLabel: 'Yakınlaştırma',
    processing: 'Pikseller eşleştiriliyor',
    invalidPalette: 'En az bir geçerli hex rengi ekleyin',
    invalidImage: 'Geçerli bir PNG, JPEG veya WebP görseli seçin',
    readyStatus: 'Hazır',
    dropActive: 'Yüklemek için bırakın',
    mappedSummary: '{source} kaynak renk {mapped} palet rengine eşlendi',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Tam Renkli Sprite Görsellerini Planlı Retro Paletlere Dönüştürün',
    },
    {
      type: 'paragraph',
      html: 'Sınırlı bir palet, teknik bir kısıtlamadan daha fazlasıdır. Sprite görsellerinize tutarlı bir renk dili kazandırır, sahnelerin birbirine ait görünmesini sağlar ve belirli bir konsolun veya hayali donanımın görsel karakterini yansıtır. Tarayıcı tabanlı bu palet değiştirici, Game Boy, NES esintili, PICO-8, Commodore 64, DawnBringer 16 ve özel paletleri denerken orijinal görsel ile indirgenmiş sürümü karşılaştırmanıza olanak tanır.',
    },
    {
      type: 'title',
      level: 2,
      text: 'En Yakın Renk Eşleme Nasıl Çalışır',
    },
    {
      type: 'paragraph',
      html: 'Araç, görünür her pikselin kırmızı, yeşil ve mavi kanallarını okur ve bu rengi seçilen paletteki her renkle karşılaştırır. En küçük karesel RGB mesafesine sahip palet girdisini seçer ve yeni bir tuval arabelleğine yazar. Şeffaflığı koru seçeneği etkinleştirildiğinde, şeffaf pikseller şeffaf kalır ve yarı şeffaf kenarlar orijinal opaklığını korur.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Palet Sınırlama',
          description: 'Her kaynak renk, mevcut en yakın renk örneğiyle değiştirilir.',
          points: [
            'Sprite, simge, karo ve arayüz çizimleri için hızlı ve öngörülebilir',
            'Orijinal boyutları ve piksel konumlarını korur',
            'Belirli bir renk bütçesini gözden geçirmeyi kolaylaştırır',
          ],
        },
        {
          title: 'Palet Değiştirme (Palette Swapping)',
          description: 'Aynı çizim, özenle seçilmiş başka bir renk kümesine yeniden eşlenebilir.',
          points: [
            'Alternatif kostümler, biyomlar ve hasar durumları için kullanışlıdır',
            'Özel hex listeleri mevcut sanat yönünüze uymanızı sağlar',
            'İndirilen PNG düzenleyicinize aktarılmaya hazırdır',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Piksel Sanatı İçin Palet Seçimi',
    },
    {
      type: 'table',
      headers: ['Palet', 'Renkler', 'Uygunluk', 'Dikkat Edilmesi Gerekenler'],
      rows: [
        ['Game Boy', '4', 'Monokrom el konsolu hissi ve güçlü değer çalışmaları', 'Dar değer aralığı yakın malzemeleri birleştirebilir'],
        ['NES esintili', '16', 'Hacimli arcade sprite çizimleri, karakterler ve karolar', 'Çok parlak renkler küçük detayları bastırabilir'],
        ['PICO-8', '16', 'Doygun vurgulara sahip modern piksel sanatı', 'Yüksek doygunluktaki tonlar bilinçli kontrast gerektirir'],
        ['Commodore 64', '16', 'Yumuşak retro sahneler ve bilgisayar oyunu estetiği', 'Düşük kontrast net siluetlerden faydalanır'],
        ['DawnBringer 16', '16', 'Genel piksel sanatı için esnek özel palet', 'Rampa renkleri yine de planlı ışık yönü gerektirir'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Sprite Sayfaları İçin Pratik İş Akışı',
    },
    {
      type: 'paragraph',
      html: 'Rahatça düzenleyebileceğiniz en büyük kaynak çizimle başlayın, ardından dışa aktarılan sprite veya sprite sayfasını buraya yükleyin. Bir yön belirlemek için bir hazır ayar seçin veya palet kitaplığından özel bir liste yapıştırın. İki tuvali daha yüksek yakınlaştırmada inceleyin; kaybolan yüz özelliklerini, birleşmiş hatları ve ana renkten ayrılmayan vurguları arayın. Sonuç mat görünüyorsa, daha güçlü bir değer adımına sahip bir palet deneyin veya özel listeye bilinçli bir vurgu rengi ekleyin.',
    },
    {
      type: 'tip',
      title: 'Paleti Bilinçli Tutun',
      html: 'Daha büyük bir liste otomatik olarak daha iyi değildir. Dört ila on altı renkle başlayın, her renge bir görev atayın ve en parlak değerleri odak noktaları veya okunabilir vurgular için saklayın. En yakın renk algoritması konumları korur ancak çiziminizin görsel hiyerarşisini hangi renklerin taşıyacağına karar veremez.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Piksel Sanatı Dışa Aktarım Kontrol Listesi',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'İndirgenmiş PNG Görselini İçe Aktarmadan Önce',
      html: 'Sonucu yüzde 100 ölçekte ve oyun içi nihai ölçekte kontrol edin, şeffaf kenarların temiz olduğunu doğrulayın, önemli siluetlerin okunabilir kaldığından emin olun ve sıfırdan başlamadan paleti revize edebilmek için orijinal kaynak dosyayı dışa aktarılan dosyanın yanında saklayın.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Renk Kuantizasyonu',
          definition: 'Geniş bir kaynak renk kümesini daha küçük ve tanımlı bir kümeye indirgeme işlemi.',
        },
        {
          term: 'Palet Rampası',
          definition: 'Bir malzemeyi veya yüzeyi gölgelendirmek için kullanılan koyu, orta ve açık renklerin ilişkili dizisi.',
        },
        {
          term: 'İndeksli Palet',
          definition: 'Görüntü piksellerinin tam renkleri tekrar tekrar saklamak yerine ortak bir listedeki girdilere başvurduğu kompakt renk tablosu.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Palet değiştirici görselimi bir sunucuya yüklüyor mu?',
      answer: 'Hayır. Görsel tarayıcınızda bir tuvale dönüştürülür, JavaScript ile yerel olarak eşlenir ve doğrudan PNG olarak dışa aktarılır. Aracın yükleme adımı yoktur.',
    },
    {
      question: 'Kendi paletimi kullanabilir miyim?',
      answer: 'Evet. Özel renkler alanına virgül, boşluk veya yeni satırla ayrılmış altı haneli veya üç haneli hex renklerini yapıştırın, ardından Paleti uygula butonunu seçin.',
    },
    {
      question: 'Sprite veya sprite sayfamın boyutunu değiştirir mi?',
      answer: 'Hayır. Çıktı, Şeffaflığı koru seçeneği etkinleştirildiğinde kaynak genişliği, yüksekliği, piksel konumlarını ve alfa değerlerini korur.',
    },
    {
      question: 'Hangi algoritmayı kullanıyor?',
      answer: 'Görünür her piksel, RGB uzayında karesel Öklid mesafesi kullanılarak seçilen paletteki en yakın renge atanır. Hızlı, kararlı ve önizlemesi kolaydır ancak tarama (dithering) veya algısal Lab renk düzeltmesi uygulamaz.',
    },
  ],
  howTo: [
    {
      name: 'Sprite Yükleyin',
      text: 'Çalışma alanına bir PNG, JPEG veya WebP sprite veya sprite sayfası bırakın ya da Görsel seç butonunu kullanın.',
    },
    {
      name: 'Palet Seçin',
      text: 'Klasik bir hazır ayar seçin veya kendi hex renklerinizi girin. Palet uygulandığında sonuç hemen güncellenir.',
    },
    {
      name: 'Karşılaştırın ve Dışa Aktarın',
      text: 'Orijinal ve indirgenmiş tuvalleri inceleyin, önizleme yakınlaştırmasını ayarlayın ve sonucu PNG olarak indirin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Piksel Sanatı Palet Değiştirici',
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
          name: 'Palet değiştirici görselimi bir sunucuya yüklüyor mu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hayır. Görsel tarayıcıda işlenir ve doğrudan PNG olarak dışa aktarılır.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kendi paletimi kullanabilir miyim?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Evet. Özel renkler alanına hex renklerini yapıştırıp paleti uygulayabilirsiniz.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Sprite Görsellerini Retro Palete Dönüştürme',
      step: [
        { '@type': 'HowToStep', name: 'Sprite Yükleyin', text: 'Çalışma alanına bir görsel bırakın.' },
        { '@type': 'HowToStep', name: 'Palet Seçin', text: 'Bir hazır ayar seçin veya hex renklerinizi girin.' },
        { '@type': 'HowToStep', name: 'Karşılaştırın ve Dışa Aktarın', text: 'Sonucu inceleyin ve PNG olarak indirin.' },
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
