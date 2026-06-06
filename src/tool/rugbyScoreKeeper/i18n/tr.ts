import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'rugby-skor-takip';
const title = 'Rugby Skor Takip ile Sin Bin Süreölçer ve Maç Saati';
const description = 'Denemeler, dönüşümler, penaltılar ve drop golleri kaydederek rugby maç skorlarını canlı takip edin. İnteraktif bir stadyum skorboardu ile sin bin geri sayım sürelerini ve maç devrelerini yönetin.';

const faqData = [
  {
    question: 'Bir rugby union maçında puanlar nasıl kazanılır?',
    answer: 'Bir deneme 5 puan değerindedir ve bir oyuncunun topu rakip alanında yere indirmesiyle kazanılır. Denemeden sonra yapılan dönüşüm vuruşu 2 puan değerindedir. Penaltı vuruşları ve drop goller her biri 3 puan değerindedir.',
  },
  {
    question: 'Bir oyuncu rugbyde sarı kart gördüğünde ne olur?',
    answer: 'Sarı kart, sin bin cezası ile sonuçlanır. Oyuncu 10 dakika aktif maç süresi boyunca sahayı terk etmek zorundadır. Takımı bu süre boyunca bir eksik oyuncu ile oynar. Sin bin süreölçeri yalnızca maç saati çalışırken geri sayar.',
  },
  {
    question: 'Bir rugby union maçı ne kadar sürer?',
    answer: 'Standart bir rugby union maçı, 10 dakikalık devre arası ile birlikte 40 dakikalık iki devreden oluşur. Maç saati sakatlıklar ve ciddi olaylar sırasında durdurulur. Duraklamalar için uzatma süresi eklenebilir.',
  },
];

const howToData = [
  {
    name: 'Skor Olaylarını Kaydet',
    text: 'Puanları kaydetmek için Deneme, Dönüşüm, Penaltı veya Drop Goal düğmelerine dokunun. Deneme düğmesine dokunduktan sonra Dönüşüm düğmesi otomatik olarak yanar.',
  },
  {
    name: 'Sin Bin Cezalarını Yönet',
    text: 'Bir oyuncuyu sin bine göndermek için Sarı Kart düğmesine dokunun. İsmini veya numarasını girin ve 10 dakikalık geri sayım otomatik olarak başlar.',
  },
  {
    name: 'Maç Süresini Kontrol Et',
    text: 'İki 40 dakikalık devreyi takip etmek için maç saatini kullanın. Sakatlıklar sırasında saati durdurun ve oyun yeniden başladığında devam ettirin.',
  },
  {
    name: 'Skor Gelişimini Takip Et',
    text: 'Ev sahibi ve deplasman puanlarıyla canlı skorboardu izleyin. Denemelerin, dönüşümlerin, penaltıların ve drop gollerin dökümünü görmek için skor özetini görüntüleyin.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
    image: undefined,
    url: undefined,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

export const content: RugbyScoreKeeperLocaleContent = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Canlı Maç Takibi ile Ücretsiz Online Rugby Skorboardu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İnteraktif dijital skorboardumuzla rugby maç skorlamanızın kontrolünü elinize alın. Denemeleri, dönüşümleri, penaltıları ve drop golleri gerçek zamanlı olarak takip edin. Sin bin yönetim sistemi oyuncu cezalarını otomatik olarak geri sayar ve maç saati her iki devreyi de mükemmel şekilde zamanlar. İster yerel bir kulüp maçında hakemlik yapın ister genç takım çalıştırın, bu araç tüm skorlama ve zamanlama detaylarını otomatik olarak halleder.',
    },
    {
      type: 'title',
      text: 'Rugby Union Puanlama Sistemi Açıklaması',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rugby union, her biri farklı beceri ve stratejiler gerektiren dört puanlama yöntemi sunar. Deneme, takımları savunma hattını kırıp topu deneme alanında yere indirmeleri için ödüllendiren en değerli hücum hamlesidir. Denemeden sonra, puan kazanan takım iki ekstra puan için dönüşüm vuruşu dener. Penaltı vuruşları ve drop goller, takımların açık oyundan veya rakip ihlallerinden sonra puan kazanmasını sağlayarak taktiksel derinlik katar.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Deneme',
          description: 'Beş puan için topu deneme alanında yere indirin.',
          icon: 'mdi:rugby',
          points: ['Beş puan kazandırır', 'Dönüşüm fırsatı sağlar', 'Topu yere indirmek gerekir'],
        },
        {
          title: 'Dönüşüm',
          description: 'Denemeden sonra iki puan için topu direkler arasından vurun.',
          icon: 'mdi:goal',
          points: ['Başarılı olursa iki puan', 'Deneme yerinden vurulur', 'Üst direği geçmelidir'],
        },
        {
          title: 'Penaltı Vuruşu',
          description: 'Üç puan için rakip ihlali sonrası kaleye vuruş.',
          icon: 'mdi:alert-octagon',
          points: ['Üç puan kazandırır', 'Vurulabilir veya elle oynanabilir', 'Genellikle yakın maçları belirler'],
        },
        {
          title: 'Drop Goal',
          description: 'Üç puan için açık oyunda topu sekerek direkler arasından vurun.',
          icon: 'mdi:circle-outline',
          points: ['Üç puan kazandırır', 'Top önce yere değmelidir', 'Baskı altında maç kazandırır'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Sin Bin Sistemini Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sin bin, tehlikeli veya tekrarlayan ihlaller için geçici bir uzaklaştırma sistemidir. Hakem sarı kart gösterdiğinde, oyuncu on dakika aktif oyun süresi boyunca sahayı terk etmek zorundadır. Bu süre boyunca takımı bir eksik oyuncuyla oynar ve rakip takım için sayısal bir avantaj yaratır. Sin bin süreölçeri yalnızca maç saati çalışırken geri sayar ve duraklamalardan bağımsız olarak adil uygulama sağlar.',
    },
    {
      type: 'list',
      items: [
        '<strong>Sarı Kart Cezası:</strong> Tehlikeli oyun veya tekrarlayan takım ihlalleri için sin binde on dakika.',
        '<strong>Sayısal Dezavantaj:</strong> Ceza alan takım, uzaklaştırma süresi boyunca 15 yerine 14 oyuncuyla oynar.',
        '<strong>Otomatik Dönüş:</strong> Süre dolduğunda oyuncu orta çizgiden otomatik olarak maça döner.',
        '<strong>Kırmızı Karta Yükseltme:</strong> İkinci sarı kart veya tek bir ciddi ihlal, kırmızı kart ve kalıcı oyundan atılma ile sonuçlanır.',
      ],
    },
    {
      type: 'title',
      text: 'Maç Süresi ve Devre Yönetimi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Standart bir rugby union maçı, 10 dakikalık devre arası ile birlikte 40 dakikalık iki devreye ayrılmıştır. Maç saati aktif oyun sırasında sürekli çalışır ancak hakem tarafından sakatlıklar, ciddi faul incelemeleri veya diğer duraklamalar için durdurulabilir. Bu dijital skorboard, duraklatma ve devam ettirme kontrollerine sahip hassas bir maç saati, otomatik devre takibi ve her oyun periyodu için net görsel göstergeler içerir.',
    },
    {
      type: 'title',
      text: 'Neden Dijital Bir Rugby Skorboardu Kullanmalısınız',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rugbide manuel skor tutma, çeşitli puanlama yöntemleri, sin bin süre gereksinimleri ve devre yönetimi nedeniyle zorludur. Bu tarayıcı aracı, doğru gerçek zamanlı puanlama, otomatik sin bin geri sayımları ve hassas maç zamanlaması sağlar. Antrenörler aritmetik yerine oyun stratejisine odaklanabilir, hakemler güvenilir bir yedek puanlama sistemine sahip olur ve oyuncular maç durumunu bir bakışta doğrulayabilir.',
    },
  ],
  ui: {
    title: 'Rugby Skorboardu',
    description: 'Maç skorlarını ve sin bin sürelerini takip edin.',
    home: 'Ev Sahibi',
    away: 'Deplasman',
    score: 'Skor',
    tryLabel: 'Deneme +5',
    conversion: 'Dönüşüm +2',
    penalty: 'Penaltı +3',
    dropGoal: 'Drop Goal +3',
    conversionYes: 'Evet',
    conversionNo: 'Hayır',
    sinBin: 'Sarı kart',
    sinBinTitle: 'Sin Bin Cezası',
    sinBinPlayer: 'Oyuncu adı veya numarası:',
    sinBinAdd: 'Cezayı başlat',
    sinBinEmpty: 'Aktif ceza yok',
    sinBinReturn: 'Döndü',
    matchClock: 'Maç Saati',
    half: 'Devre',
    half1: 'İlk devre',
    half2: 'İkinci devre',
    startMatch: 'Başlama vuruşu',
    pauseMatch: 'Duraklat',
    resumeMatch: 'Devam et',
    resetMatch: 'Maçı sıfırla',
    resetConfirm: 'Geçerli maç sıfırlansın mı? Tüm skorlar ve süreölçerler silinecek.',
    cancel: 'İptal',
    confirm: 'Sıfırlamayı onayla',
    period: 'Periyot',
    scoringSummary: 'Skor Özeti',
    tryScored: 'Denemeler',
    conversionSuccess: 'Dönüşümler',
    conversionMiss: 'Kaçan dönüşümler',
    penaltyScored: 'Penaltılar',
    dropGoalScored: 'Drop Goller',
    totalPoints: 'Toplam',
    fullscreen: 'Tam ekran',
    toggleSound: 'Sesi aç/kapat',
    eventLog: 'Olay Kaydı',
    eventEmpty: 'Henüz olay yok',
    undoBtn: 'Son işlemi geri al',
    timeOff: 'Süre durdu',
    timeOn: 'Süre başladı',
  },
};
