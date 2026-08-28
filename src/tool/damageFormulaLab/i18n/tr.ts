import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'oyun-hasar-formulu-hesaplayici-ttk';
const title = 'Oyun Hasar Formülü Laboratuvarı ve TTK Grafikleri';
const description = 'Güvenli matematiksel formüllerle oyun hasar kurallarını canlı grafikler, ısı haritaları, yuvarlama kuralları ve Time to Kill (TTK) ile karşılaştırın.';

const faq = [
  {
    question: 'Hasar formülü hesaplayıcısı neleri karşılaştırır?',
    answer: 'Aynı savaş değerleri üzerinde iki güvenli matematiksel formülü çalıştırır. Hasar eğrilerini, vuruş eşiklerini, time to kill (TTK) süresini ve direnç sırasını JavaScript çalıştırmadan güvenle test edebilirsiniz.',
  },
  {
    question: 'Hangi değişkenleri ve fonksiyonları kullanabilirim?',
    answer: 'Kullanılabilir değişkenler: attack, defense, level, power, resistance, flat, criticalChance ve criticalMultiplier. Güvenli fonksiyonlar: min, max, clamp, abs, sqrt, pow, floor, round ve ceil.',
  },
  {
    question: 'Time to Kill (TTK) nasıl hesaplanır?',
    answer: 'Gerekli vuruş sayısı, hedefin canının yuvarlanmış beklenen hasara bölünmesiyle (yukarı yuvarlama) bulunur. TTK ilk ve son vuruş arasındaki süreyi ölçer: (vuruş - 1) / saniyedeki saldırı sayısı.',
  },
  {
    question: 'Direnç sırası neden sonucu değiştirir?',
    answer: 'Sabit çarpanı yüzde dirençten önce uygulamak o sabit değeri de azaltır. Direncin önce uygulanması ise sonraki sabit çarpanı etkisiz bırakır.',
  },
  {
    question: 'Düzgün bir eğri oyunun dengeli olduğu anlamına gelir mi?',
    answer: 'Hayır. Grafik eşik değerleri ve sıfır hasar bölgelerini gösterir, ancak denge oyunun bağlamına, rollere ve oyuncu testlerine bağlıdır.',
  },
];

const howTo = [
  { name: 'İki formül seçin', text: 'Hazır şablonlardan (doğrusal, oran, seviye ölçekli) başlayın veya iki özel formül yazın.' },
  { name: 'Savaş değerlerini ayarlayın', text: 'Saldırı, savunma, seviye, güç katsayısı, direnç, sabit çarpan, kritik değerleri, can ve saldırı hızını girin.' },
  { name: 'Motor kurallarını belirleyin', text: 'Hasarın nasıl yuvarlanacağını ve direnç sırasını seçin.' },
  { name: 'Grafik ve eşikleri inceleyin', text: 'Hasar eğrisini, savunma ısı haritasını, gerekli vuruş sayısını ve uyarıları karşılaştırın.' },
  { name: 'Deneysel verileri kaydedin', text: 'Paylaşım bağlantısını kopyalayın veya JSON, CSV ve PNG grafiğini indirin.' },
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

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Mevcut hasar kuralınızı girin, yanına bir alternatif ekleyin ve savaş değerlerini ayarlayın.',
    localNote: 'Özel model. Formüller ve veriler bu tarayıcıda kalır.',
    formulaDeck: 'Formül Bölümü',
    formulaALabel: 'Formül A (Mevcut Model)',
    formulaBLabel: 'Formül B (Alternatif)',
    formulaHint: 'Değişkenler: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Güvenli fonksiyonlar: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Doğrusal Koruma',
    presetRatio: 'Orantılı Zırh',
    presetLevel: 'Seviye Ölçekleme',
    combatInputs: 'Savaş Değerleri',
    attackLabel: 'Saldırı',
    defenseLabel: 'Savunma',
    levelLabel: 'Seviye',
    powerLabel: 'Güç Katsayısı',
    resistanceLabel: 'Direnç (%)',
    flatLabel: 'Sabit Çarpan',
    criticalChanceLabel: 'Kritik Şansı (%)',
    criticalMultiplierLabel: 'Kritik Çarpanı',
    healthLabel: 'Hedef Canı',
    cadenceLabel: 'Saniyedeki Saldırı Sayısı',
    roundingLabel: 'Hasar Yuvarlama',
    roundingNone: 'Ondalıkları Korur',
    roundingFloor: 'Aşağı Yuvarla (Floor)',
    roundingRound: 'En Yakın Tam Sayı',
    roundingCeil: 'Yukarı Yuvarla (Ceil)',
    orderLabel: 'Çarpan Sırası',
    resistanceFirst: 'Önce Direnç Sonra Sabit',
    flatFirst: 'Önce Sabit Sonra Direnç',
    runLabel: 'Canlı Etki Karşılaştırması',
    resultDamage: 'Beklenen Hasar',
    resultHits: 'Yenmek İçin Vuruş',
    resultTtk: 'Time to Kill (TTK)',
    resultDifference: 'Hasar Farkı',
    formulaAName: 'Mevcut',
    formulaBName: 'Alternatif',
    curveTitle: 'Saldırı Gelişim Eğrisi',
    curveCaption: 'Savunma sabit tutulurken saldırı değeri yarıdan iki katına kadar taranır.',
    heatmapTitle: 'Baskı Alanı Isı Haritası',
    heatmapCaption: 'Formül A beklenen hasarını saldırı ve savunma kombinasyonlarında gösterir.',
    attackAxis: 'Saldırı sağa doğru artar',
    defenseAxis: 'Savunma aşağı doğru artar',
    scenariosTitle: 'Savaş Profilleri',
    scenarioSkirmisher: 'Avcı',
    scenarioGuardian: 'Muhafız',
    scenarioBoss: 'Patron (Boss)',
    scenarioCustom: 'Mevcut Ayar',
    diagnosticsTitle: 'Eşik ve Uyarı Kontrolü',
    statusBalanced: 'Bu test aralığında olağandışı bir matematiksel sıçrama tespit edilmedi.',
    exportTitle: 'Deneysel Verileri Aktar',
    copyLink: 'Bağlantıyı Kopyala',
    exportCsv: 'CSV İndir',
    exportJson: 'JSON İndir',
    importJson: 'JSON İçe Aktar',
    exportPng: 'PNG Grafiği İndir',
    reset: 'Modeli Sıfırla',
    privacyDisclosure: 'Paylaşım bağlantısı ayarları URL içinde saklar ve sunucuya veri göndermez.',
    limitationDisclosure: 'Beklenen kritik hasar bir ortalamadır, rastgele bir simülasyon değildir.',
    importError: 'Seçilen dosya geçerli bir konfigürasyon değil.',
    copiedStatus: 'Bağlantı panoya kopyalandı.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Oyun motoruna entegre etmeden önce hasar formüllerini test edin',
    },
    {
      type: 'paragraph',
      html: 'Bir hasar formülü varsayılan değerlerde dengeli görünebilir ancak yüksek seviyelerde bozulabilir. Bu laboratuvar olası eşikleri erkenden tespit etmenizi sağlar.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Güvenli ve sınırlandırılmış matematiksel ifade dili',
    },
    {
      type: 'paragraph',
      html: 'Girdi alanı yalnızca tanımlı değişkenleri ve güvenli fonksiyonları kabul eder, güvensiz kod çalıştırmaz.',
    },
    {
      type: 'table',
      headers: ['Metrik', 'Hesaplama', 'Tasarım Sorusu'],
      rows: [
        ['Beklanan Hasar', 'Kritik faktör ve direnç dahil temel formül', 'Kural zayıf ve güçlü birimlerde mantıklı çalışıyor mu?'],
        ['Yenmek İçin Vuruş', 'Hedef canının yuvarlanmış hasara bölünmesi', 'Fazladan 1 stat puanı bir vuruşu tamamen ortadan kaldırıyor mu?'],
        ['Time to Kill (TTK)', 'Vuruş aralığının saldırı hızına bölünmesi', 'Saldırı hızı istenen savaş temposunu oluşturuyor mu?'],
        ['Isı Haritası', 'Formül A nın saldırı ve savunma üzerindeki örneklemesi', 'Beklenmeyen eşikler veya ölü bölgeler var mı?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Matematiksel verileri oyun tasarımı kararlarından ayırmak',
    },
    {
      type: 'paragraph',
      html: 'Düzgün bir grafik oyunun eğlenceli olduğunu tek başına garanti etmez. Laboratuvarı test süreçlerinde doğrulanacak soruları bulmak için kullanın.',
    },
    {
      type: 'tip',
      title: 'Hasar ve vuruş sayısını daima birlikte inceleyin',
      html: 'Hasardaki küçük bir değişim bir can eşiğini geçerek vuruş sayısını 1 azaltabilir. Hasarı daima TTK ile karşılaştırın.',
    },
    { type: 'paragraph', html: 'Aynı formül yuvarlama ve modifier sırasına göre farklı bir savaş sonucu üretebilir. Küçük hasarı, yüksek savunmayı ve ek vuruş gerektiren eşiği de kontrol edin; TTK kaçınma, bekleme süresi veya kesintileri modellemez.' },
    { type: 'paragraph', html: 'Her değişiklikten sonra birkaç kontrol senaryosu kaydedin: yüksek savunmaya karşı zayıf saldırı, kritik vuruş ve vuruş sayısının değiştiği eşik. Bu örnekler denge sürümlerini karşılaştırmayı ve katsayılar ya da yuvarlama kuralları değiştiğinde oluşan gerilemeleri fark etmeyi kolaylaştırır.' },
  ],
  faq,
  bibliographyTitle: 'Oyunlarda hasar matematiği referansları',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
