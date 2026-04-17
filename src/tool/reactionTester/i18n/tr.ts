import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'tepki-testi';
const title = 'Tepki Hızı Testi (Refleksler): Çevrimiçi Kıyaslama';
const description = 'Profesyonel tepki testimizle reflekslerinizi milisaniye cinsinden ölçün. \"Kaplumbağa\"dan \"Siber Sporcu\"ya kadar dereceler için yarışın ve performansınızı analiz edin.';

const ui: ReactionTesterUI = {
  title: 'Tepki Testi',
  subtitle: 'Tepki hızınızı milisaniye cinsinden ölçün. 5 denemeden ortalaması.',
  startBtn: 'Başlatmak için tıklayın',
  goTitle: 'BAŞLAYIN!',
  goSubtitle: 'ŞİMDİ TIKLAYIN!',
  earlyTitle: 'Çok erken!',
  earlySubtitle: 'Yeşili bekleyin.',
  earlyRetry: 'Yeniden denemek için tıklayın',
  promptNext: 'Sonraki deneme için tıklayın',
  promptFinal: 'Son Sonuçları Görüntüle',
  avgLabel: 'Son ortalama',
  copyBtn: 'Kopyala',
  tweetBtn: 'Tweet',
  retryBtn: 'Yeniden Dene',
  inputMouse: 'Fare',
  inputTouch: 'Dokunuş',
  inputSpace: 'Boşluk',
  historyTitle: 'Yerel Geçmiş',
  historyBest: 'En İyi 5',
  historyWorst: 'En Kötü 5',
  historyEmpty: 'İlk puanınızı kaydetmek için oynayin',
  copySuccess: 'Kopyalandı!',
  shareText: 'Tepki Testinde {ms}ms aldım!\nDerece: {rank}\n\nBeni yenebilir misin?\n{url}',
  rankCiberatleta: 'Siber Sporcu',
  rankTigre: 'Kaplan',
  rankHumano: 'İnsan',
  rankTortuga: 'Kaplumbağa',
  rankDormido: 'Uyuyor',
  f150: 'BİR ROBOT MUSUN?!',
  f180: 'İNANILMAZ!',
  f210: 'Çok hızlı!',
  f250: 'İyi tepki',
  f300: 'Fena değil...',
  f400: 'Biraz yavaş...',
  f600: 'Uyuyakalmışsın',
  fSlow: 'Uyandır...',
  wp0t: 'BEKLEYİN...', wp0s: 'Nefesinizi tutun...',
  wp1t: 'DURUN...', wp1s: 'Şimdi göz kırpmayın',
  wp2t: 'HAZIR...', wp2s: 'Parmaklar hazır...',
  wp3t: 'TUT...', wp3s: 'Sabır, genç çöpçü',
  wp4t: 'ODAKLANI...', wp4s: 'Geliyor...',
};

const faqData = [
  { question: 'Ortalama insan tepki süresi nedir?', answer: 'Görsel uyarıya insan tepki süresi ortalama 250 ila 270 milisaniyedir. Yüksek performans sporcuları ve profesyonel oyuncular genellikle 200 ms altındadır.' },
  { question: 'Reflekslerimi nasıl geliştirebilirim?', answer: 'Anahtar tutarlı uygulama ve dinlenmedir. Aksiyon video oyunları (FPS) oynamak, masa tenisi gibi hızlı spor antrenmanı yapmak ve iyi hidrate kalmak sinir sistemini uyanık tutmaya yardımcı olur.' },
  { question: 'Ekran sonucumu etkiler mi?', answer: 'Evet. \"Giriş gecikmesi\" adında bir şey vardır. Düşük yenileme hızına sahip ekranlar (60Hz) veya eski kablosuz fareler, gerçek tepki sürenize 15 ila 50 ms ekleyebilir.' },
  { question: 'Reflekslerimizi kaybetmeye hangi yaşta başlarız?', answer: 'Fizyolojik olarak, insan refleksleri 20-24 yaş arasında zirveye ulaşır. Bundan sonra, eğer antrenman yapılmazsa çok yavaş bir düşüş (yaklaşık 10 yılda 2-6 ms) vardır.' },
];

const howTo = [
  { name: 'Kırmızıyı bekleyin', text: 'Başlangıç alanına tıklayın ve ekran rengi değişene kadar sabırla bekleyin.' },
  { name: 'Yeşile yanıt verin', text: 'Yeşili gördüğünüz anda ekrana mümkün olduğunca hızlı tıklayın veya dokunun.' },
  { name: 'Sonucunuzu görün', text: 'Sistem, renk değişikliği ile dokunuş arasındaki tam farkı milisaniye cinsinden hesaplayacaktır.' },
  { name: 'Derecenizi Analiz Edin', text: 'Güvenilir bir ortalama elde etmek için testi 5 kez tekrarlayın ve bir \"Kaplumbağa\" mı yoksa \"Siber Sporcu\" mu olduğunuzu öğrenin.' },
];

const seo = [
  { type: 'title' as const, text: 'Bu Tepki Testi Nasıl Çalışır?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Bu araç <strong>görsel tepki sürenizi</strong> cerrahî kesinlikle ölçer. Ekran yandığı andan itibaren sinyalin gözlerinizden beyninize, ardından parmaklarınıza seyahat etmesine kadar olan tam aralığı hesaplarız. Test <strong>5 ardışık deneme</strong> gerektirir, şans faktörünü ortadan kaldırarak gerçek ortalamanızı hesaplamak için.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>5 denemeden ortalama:</strong> Tutarlılık gerektirerek \"şans\" faktörünü ortadan kaldırırız. Tek bir şanslı tıklama sizi Siber Sporcu yapmaz.',
      '<strong>Hile Aleyine Sistemi:</strong> Tahmin edici davranışı önlemek için rastgele bekleme süreleri (1,5 s - 4,5 s) ve erken tıklama algılaması.',
      '<strong>Gerçek bilim:</strong> Beyin işleme ~180-200 ms + motor tepkisi +20-40 ms = toplam tepki süreniz.',
    ],
  },
  { type: 'title' as const, text: 'Dünya Sıralama Tablosu', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Zaman', 'Derece', 'Açıklama'],
    rows: [
      ['&lt; 180 ms', 'Siber Sporcu', 'E-spor profesyonelleri veya savaş pilotlarında tipik üstün insan seviyesi.'],
      ['180 - 230 ms', 'Kaplan', 'Keskin refleksler. Muhtemelen atış oyunlarında iyisiniz.'],
      ['230 - 280 ms', 'İnsan', 'Sağlıklı ortalama. Uyandı mısınız ve düzgün çalışıyorsunuz.'],
      ['280 - 350 ms', 'Kaplumbağa', 'Ortalamanın altında. Daha fazla dinlenin veya antrenman yapın.'],
      ['&gt; 350 ms', 'Uyuyor', 'Olası yorgunluk, uyku halinde veya yavaş donanım (giriş gecikmesi).'],
    ],
  },
  { type: 'title' as const, text: 'Neden Yavaşsın? Donanımı Suçlamak', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitör (Hz)',
        description: '60Hz monitörü bir frame çizmek ~16ms alır. 144Hz sadece 7ms alır. Bu 10ms farkı son puanında sayılır.',
        icon: 'mdi:monitor',
        points: ['60Hz = kare başına ~16ms', '144Hz = kare başına ~7ms', 'Testte görülür fark'],
      },
      {
        title: 'Kablosuz Fare',
        description: 'Ucuz ofis Bluetooth fareler yüksek gecikmesi vardır. Bu test için, kablo veya düşük gecikmeli 2,4GHz kablosuz teknoloji kullanın.',
        icon: 'mdi:mouse-variant',
        points: ['Ucuz Bluetooth: +15-50ms', '2.4GHz oyun: <1ms ekstra', 'USB kabel: referans'],
      },
      {
        title: 'Tarayıcı',
        description: 'Reklamları engelleyen uzantılar veya ağır komut dosyaları gecikmelere neden olabilir. Gerçek rekorunuz için gizli modu deneyin.',
        icon: 'mdi:web',
        points: ['Ağır uzantıları kapatın', 'Gizli = daha temiz', 'Chrome/Firefox önerilir'],
      },
    ],
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faqTitle: 'Sık Sorulan Sorular', faq: faqData, bibliography: [], howTo, schemas };
