import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'oyun-sprite-hitbox-ve-hurtbox-animatoru';
const title = 'Oyun Sprite Hitbox ve Hurtbox Animatörü';
const description = 'Her sprite karesinde çarpışma katmanları çizin, soğan zarı (onion skin) ile hareketleri önizleyin, piksel koordinatlarını düzenleyin ve nötr JSON aktarın.';

const faq = [
  {
    question: 'Hitbox ile hurtbox arasındaki fark nedir?',
    answer: 'Hitbox bir saldırının etki alanını, hurtbox ise hasar alabilen vücut alanını tanımlar. Pushbox karakterler arası mesafeyi korur, grabbox ise yakalama menzilini belirler.',
  },
  {
    question: 'Sprite dosyalarım sunucuya yükleniyor mu?',
    answer: 'Hayır. Görseller tamamen tarayıcınızın içinde işlenir ve aktarılır. Yalnızca düzenleyici tercihleri yerel depolamada saklanır.',
  },
  {
    question: 'JSON aktarımı hangi koordinat sistemini kullanır?',
    answer: 'Her kare piksel koordinatlarını sol üst köşeden itibaren ölçer. Genişlik ve yükseklik değerleri kendi merkez noktaları (pivot) ile pozitif değerler olarak saklanır.',
  },
  {
    question: 'Hem sprite levhalarını hem de tekil kareleri düzenleyebilir miyim?',
    answer: 'Evet. Satır ve sütun sayılarını girerek bir PNG veya WebP sprite levhası yükleyebilir ya da sıralı tekil görseller seçebilirsiniz.',
  },
  {
    question: 'Aktarılan JSON tüm oyun motorlarında doğrudan çalışır mı?',
    answer: 'JSON formatı nötrdür. Belirli bir motor yapısını zorlamadan kare çerçevelerini, merkez noktalarını ve geometrik katmanları kaydeder.',
  },
];

const howTo = [
  { name: 'Grafik yükleyin', text: 'Bir PNG/WebP sprite levhası veya sıralı görseller seçin. Tüm işlemler cihazınızda yerel olarak gerçekleşir.' },
  { name: 'Kareleri belirleyin', text: 'Sprite levhası için satır ve sütun sayılarını girin ve zaman çizelgesindeki kare kesimlerini kontrol edin.' },
  { name: 'Çarpışma katmanları çizin', text: 'Hitbox, hurtbox, pushbox veya sensör katmanını seçip dikdörtgen veya daire çizin.' },
  { name: 'Hareketi ayarlayın', text: 'Hassas koordinatları düzenleyin, şekilleri komşu karelere kopyalayın ve soğan zarı ile hareketleri karşılaştırın.' },
  { name: 'Projeyi aktarın', text: 'Nötr JSON dosyasını ve PNG temas levhasını indirin. Orijinal görselleri JSON ile birlikte saklayın.' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Bir animasyon yükleyin, kare kesimlerini onaylayın ve saldırı, hasar veya fiziksel çarpışma alanlarını çizin.',
    privacyNote: 'Yerel animasyon çalışma masası. Görseller sunucuya yüklenmez.',
    loadSprite: 'Grafikleri çalışma masasına yerleştirin',
    loadHint: 'Bir sprite levhası veya sıralı PNG/WebP görselleri seçin.',
    chooseImages: 'Görselleri seç',
    slicingTitle: 'Kare kesimi',
    rowsLabel: 'Satırlar',
    columnsLabel: 'Sütunlar',
    applySlicing: 'Kes',
    playbackTitle: 'Hareket önizlemesi',
    previousFrame: 'Önceki kare',
    play: 'Oynat',
    pause: 'Duraklat',
    nextFrame: 'Sonraki kare',
    fpsLabel: 'Saniyedeki kare sayısı',
    onionPrevious: 'Önceki katman',
    onionNext: 'Sonraki katman',
    layerTitle: 'Çarpışma katmanları',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Sensör',
    typeCustom: 'Özel',
    shapeRectangle: 'Dikdörtgen',
    shapeCircle: 'Daire',
    drawShape: 'Çiz',
    selectShape: 'Seç',
    stageLabel: 'Çalışma alanı',
    emptyStage: 'Çarpışma katmanları çizmek için görseller yükleyin.',
    frameReadout: 'Kare {current} / {total}',
    timelineTitle: 'Kare şeridi',
    inspectorTitle: 'Şekil denetleyicisi',
    noSelection: 'Hassas koordinatları düzenlemek için bir şekil seçin.',
    nameLabel: 'Katman adı',
    xLabel: 'Piksel cinsinden X',
    yLabel: 'Piksel cinsinden Y',
    widthLabel: 'Piksel cinsinden Genişlik',
    heightLabel: 'Piksel cinsinden Yükseklik',
    radiusLabel: 'Piksel cinsinden Yarıçap',
    duplicateShape: 'Çoğalt',
    mirrorShape: 'Yatay yansıt',
    deleteShape: 'Şekli sil',
    copyPrevious: 'Önceki kareyi buraya kopyala',
    copyAll: 'Bu kareyi tümüne kopyala',
    pivotTitle: 'Kare merkez noktası (Pivot)',
    pivotXLabel: 'Pivot X',
    pivotYLabel: 'Pivot Y',
    exportTitle: 'Projeyi aktar',
    exportJson: 'JSON İndir',
    importJson: 'JSON İçe Aktar',
    exportContactSheet: 'Temas levhasını indir',
    resetProject: 'Katmanları sıfırla',
    undo: 'Geri al',
    redo: 'Yinele',
    statusReady: 'Çalışma masası hazır.',
    statusImageLoaded: '{count} görsel dosyası yüklendi.',
    statusShapeCreated: 'Yeni çarpışma şekli eklendi.',
    statusShapeUpdated: 'Şekil güncellendi.',
    statusImported: 'Proje içe aktarıldı.',
    statusExported: 'Dışa aktarım hazır.',
    statusError: 'Seçilen dosya okunamadı.',
    framesBadge: '{count} kare',
    shapesBadge: '{count} şekil',
    coverageBadge: '%{percent} kapsama',
    coordinatesNote: 'Koordinatlar her karenin sol üst köşesini (0,0) başlangıç kabul eder.',
    localOnlyDisclosure: 'JSON dosyası dosya adlarını, merkez noktalarını ve şekilleri piksel verisi içermeden saklar.',
    limitationDisclosure: 'Katmanlar tasarım alanlarını tanımlar. Davranışları oyun motorunuzda test edin.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Sprite hareketine uygun hitbox ve hurtbox alanları tasarlayın',
    },
    {
      type: 'paragraph',
      html: 'Her kare tek başına incelendiğinde çarpışma ayarları zorlaşır. Bu düzenleyici sprite görselini, çarpışma katmanlarını, soğan zarını ve zaman çizelgesini bir arada sunar.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Çarpışma katmanlarını oyun işlevine göre seçin',
    },
    {
      type: 'table',
      headers: ['Katman', 'Ana İşlev', 'Kontrol Noktası'],
      rows: [
        ['Hitbox', 'Saldırı veya etki oluşturan alan', 'Sadece aktif karelerde mi görünüyor?'],
        ['Hurtbox', 'Hasar alan gövde alanı', 'Karakter formunu boşluk bırakmadan takip ediyor mu?'],
        ['Pushbox', 'Karakterler arası fiziksel çarpışma alanı', 'Sarsıntıları önlemek için sabit duruyor mu?'],
        ['Grabbox', 'Yakalama hamlesi menzili', 'Zamanlama görsel animasyonla eşleşiyor mu?'],
        ['Sensor', 'Etkileşim algılama alanı', 'Katman adı net bir şekilde tanımlanmış mı?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Koordinat sistemini anlama ve uygulama',
    },
    {
      type: 'paragraph',
      html: 'Aktarılan proje X ve Y koordinatlarını her kesilen karenin sol üst köşesinden itibaren ölçer. Genişlik ve yükseklik pozitif piksel değerleridir.',
    },
    {
      type: 'tip',
      title: 'Tüm animasyon dizilimini kontrol edin',
      html: 'Bir kareyi düzenledikten sonra animasyonu tam olarak oynatarak hareket akışını doğrulayın.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Temas levhasını ekip çalışmasında kullanın',
    },
    {
      type: 'paragraph',
      html: 'PNG temas levhası tüm kareleri ve katmanlarını tek bir görselde göstererek yazılımcılar ve çizerler arasındaki iletişimi kolaylaştırır.',
    },
  ],
  faq,
  bibliographyTitle: 'Çarpışma tasarımı referansları',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
