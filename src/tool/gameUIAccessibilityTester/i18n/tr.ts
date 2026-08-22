import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'oyun-ui-erisilebilirlik-stres-testi';
const title = 'Oyun UI Erişilebilirlik Stres Testi';
const description = 'Oyun ekran görüntülerini renk körlüğü simülasyonları, HUD kontrast ölçümü, bulanıklık ve ısı haritaları ile tarayıcınızda yerel olarak inceleyin.';

const faq = [
  {
    question: 'Bu araç oyun arayüzümün erişilebilir olduğunu sertifikalandırır mı?',
    answer: 'Hayır. Renk körlüğü simülasyonlarını, kontrast ölçümlerini ve tasarım inceleme sorularını bir araya getirir. Sonuçları resmi sertifika yerine tasarım rehberi olarak kullanın.',
  },
  {
    question: 'Ekran görüntüm bir sunucuya yükleniyor mu?',
    answer: 'Hayır. Görsel tamamen tarayıcınızın içinde işlenir ve analiz edilir. Yalnızca görünüm ayarlarınız yerel depolamada saklanır.',
  },
  {
    question: 'İki renk probu ile neleri ölçmeliyim?',
    answer: 'Dost ve düşمان göstergeleri, aktif ve pasif durumlar veya nadirlik seviyeleri gibi farklı anlam taşıyan iki renk seçin.',
  },
  {
    question: 'İyi bir kontrast oranına rağmen neden manuel inceleme gereklidir?',
    answer: 'İki renk sayısal olarak iyi bir kontrasta sahip olsa da küçük bir simge, ince bir metin veya hareketli bir arka plan fark edilmeyi zorlaştırabilir.',
  },
  {
    question: 'Isı haritası neyi gösterir?',
    answer: 'Isı haritası, seçilen simülasyondan sonra renk ayrımının belirgin şekilde düştüğü sınır bölgelerini vurgular.',
  },
];

const howTo = [
  { name: 'Ekran görüntüsü yükleyin', text: 'Oyununuzdan PNG, JPEG veya WebP formatında bir görsel seçin. Görsel tarayıcınızın belleğinde kalır.' },
  { name: 'Simülasyon merceği seçin', text: 'Orijinal görseli renk körlüğü, gri tonlama veya düşük kontrast simülasyonları ile karşılaştırın.' },
  { name: 'Görsel stres uygulayın', text: 'Bulanıklık ekleyin, çözünürlüğü düşürün, piksellere yakınlaştırın veya kenar ısı haritasını etkinleştirin.' },
  { name: 'İki kritik sinyali ölçün', text: 'Prob A veya B\'yi seçin ve iki rengi karşılaştırmak için orijinal görsele tıklayın.' },
  { name: 'Bulguları dışa aktarın', text: 'İnceleme sorularını gözden geçirin, notlarınızı ekleyin ve karşılaştırma görseli ile JSON raporunu indirin.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Bir oyun ekran görüntüsü yükleyin, bir simülasyon merceği seçin ve oyuncuların ayırt etmesi gereken iki görsel sinyali karşılaştırın.',
    privacyNote: 'Yerel analiz. Ekran görüntüleri sunucuya yüklenmez.',
    dropTitle: 'Oyun ekran görüntüsünü çalışma alanına bırakın',
    dropHint: 'Görseli buraya bırakın veya cihazınızdan seçin. Gerçek arka plan içeren bir oyun anı kullanın.',
    chooseImage: 'Görsel seç',
    replaceImage: 'Görseli değiştir',
    supportedFiles: '16 MB\'a kadar PNG, JPEG veya WebP. Büyük görseller 1600 px boyutuna ölçeklenir.',
    lensLabel: 'Simülasyon merceği',
    lensOriginal: 'Orijinal',
    lensProtanopia: 'Protanopi',
    lensDeuteranopia: 'Deuteranopi',
    lensTritanopia: 'Tritanopi',
    lensAchromatopsia: 'Gri tonlama',
    lensReducedContrast: 'Düşük kontrast',
    lensDesaturation: 'Doygunluk azaltma',
    compareLabel: 'Karşılaştırma modu',
    compareSideBySide: 'Yan yana',
    compareSplit: 'Bölünmüş mercek',
    comparePress: 'Basılı tut Orijinal',
    holdOriginal: 'Orijinal için basılı tutun',
    splitPosition: 'Mercek konumu',
    stressLabel: 'Sinyal stres testleri',
    blurLabel: 'Piksel cinsinden bulanıklık',
    downscaleLabel: 'Küçük ekran önizlemesi',
    downscaleFull: 'Tam',
    downscaleHalf: 'Yarım',
    downscaleQuarter: 'Çeyrek',
    downscaleEighth: 'Sekizde bir',
    zoomLabel: 'Piksel yakınlaştırma',
    heatmapLabel: 'Kenar ısı haritası',
    heatmapHint: 'Seçilen mercek altında renk ayrımının düştüğü alanları vurgular.',
    originalView: 'Orijinal sinyal',
    simulatedView: 'Simüle edilen sinyal',
    emptyCanvas: 'Karşılaştırmayı başlatmak için bir görsel seçin. Görseliniz cihazınızda kalacaktır.',
    sampleTitle: 'Sinyal probları',
    sampleInstructions: 'Prob A veya B\'yi seçin ve renk örneği almak için orijinal görsele tıklayın.',
    sampleA: 'Prob A',
    sampleB: 'Prob B',
    sampleAName: 'Prob A anlamı',
    sampleBName: 'Prob B anlamı',
    manualColor: 'Rengi doğrudan belirle',
    sampleAInitial: 'Dost göstergesi',
    sampleBInitial: 'Düşman göstergesi',
    noSample: 'Görsel bekleniyor',
    originalContrast: 'Orijinal kontrast',
    simulatedContrast: 'Simüle kontrast',
    separationRetained: 'Korunan ayrım',
    statusStrong: 'Sinyal net şekilde ayırt ediliyor',
    statusWatch: 'Bağlam içinde kontrol edin',
    statusReview: 'Sinyal tasarımını gözden geçirin',
    statusPending: 'Henüz analiz yok',
    measurementLabel: 'Ölçüm',
    heuristicLabel: 'Sezgisel',
    manualReviewLabel: 'Manuel inceleme',
    measurementHint: 'Örneklenen iki renk için WCAG bağıl parlaklık kontrast oranını hesaplar.',
    heuristicHint: 'Simülasyon öncesi ve sonrası renk mesafesini karşılaştırır.',
    promptTitle: 'Arayüz inceleme rehberi',
    promptColorOnly: 'Oyuncular elemanları sadece renge bağımlı kalmadan ayırt edebiliyor mu?',
    promptChangingBackground: 'Metinler açık, koyu ve hareketli arka planlarda okunabilir mi?',
    promptMinimap: 'Harita simgeleri renk dışında biçim veya desenle ayrışıyor mu?',
    promptStates: 'Seçili, pasif ve bekleme durumları net mi?',
    promptShape: 'Bir simge, metin veya ses efekti renk sinyalini destekliyor mu?',
    findingLabel: 'Ekip notu',
    findingPlaceholder: 'Örnek: Düşman hatları kırmızı efekt üzerinde kayboluyor',
    addFinding: 'Not ekle',
    findingsEmpty: 'Henüz kaydedilmiş bir not yok.',
    exportSheet: 'Karşılaştırma görselini indir',
    exportReport: 'JSON raporunu indir',
    resetTool: 'Sıfırla',
    uploadError: 'Görsel okunamadı. Lütfen geçerli bir PNG, JPEG veya WebP seçin.',
    fileTooLarge: 'Görsel 16 MB\'tan büyük. Lütfen daha küçük bir dosya seçin.',
    imageReady: 'Görsel yüklendi. Başlamak için iki renk probu seçin.',
    reportDownloaded: 'JSON raporu indirildi.',
    sheetDownloaded: 'Karşılaştırma görseli indirildi.',
    localOnlyDisclosure: 'Tüm işlemler %100 yerel olarak tarayıcınızda gerçekleşir.',
    limitationDisclosure: 'Bu araç tasarımı destekler, gerçek kullanıcı testlerinin yerini almaz.',
    reportTitle: 'Oyun UI Erişilebilirlik İnceleme Raporu',
    reportFindingReview: 'Ölçülen renk çifti simülasyonda belirgin kontrast kaybı yaşadı.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Görsel yüklemeden oyun UI erişilebilirliğini test edin',
    },
    {
      type: 'paragraph',
      html: 'Oyun arayüzleri dinamik ve yoğun görsel koşullarda okunabilir olmalıdır. Bu yerel araç, ekran görüntülerinizi renk körlüğü simülasyonları ile doğrudan tarayıcınızda incelemenizi sağlar.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Ölçümler, sezgisel yöntemler ve insan değerlendirmesi',
    },
    {
      type: 'table',
      headers: ['Kanıt Türü', 'Bu Aracın Sağladıkları', 'Garanti Edemeyecekleri'],
      rows: [
        ['Ölçüm', 'İki renk için WCAG bağıl parlaklık ve kontrast oranı', 'Tüm oyunun otomatik olarak standartlara uygunluğu'],
        ['Simülasyon', 'Protanopi, deuteranopi ve tritanopi bilimsel dönüşümleri', 'Her bireysel oyuncunun tam görsel deneyimi'],
        ['Sezgisel', 'Bulanıklık, ölçek küçültme ve kenar kaybı tespiti', 'Arayüz tasarım kalitesinin otomatik değerlendirmesi'],
        ['Manuel İnceleme', 'Soru rehberi ve dışa aktarılabilir ekip raporları', 'Gerçek kullanıcı testlerinin yerini alma'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Oyuncunun kararlarını etkileyen renkleri ölçün',
    },
    {
      type: 'paragraph',
      html: 'Ölçümlerinizi dost ve düşman gibi oyunu etkileyen renk çiftlerine odaklayın. Simülasyonda kontrast düşüyorsa biçim veya simgeler ekleyin.',
    },
    {
      type: 'tip',
      title: 'Yoğun oyun anlarından alınan görselleri kullanın',
      html: 'Gerçekçi sonuçlar elde etmek için sade menüler yerine hareketli ve efektli oyun anlarından alınan ekran görüntülerini tercih edin.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Dışa aktarılan raporu ekip çalışmasında kullanın',
    },
    {
      type: 'paragraph',
      html: 'İndirilebilir JSON raporu ve PNG görseli, arayüz düzeltmelerini kolaylaştırmak için görev yönetimi sisteminize eklenebilir.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
