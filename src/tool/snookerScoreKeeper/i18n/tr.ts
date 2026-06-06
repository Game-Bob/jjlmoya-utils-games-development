import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'snooker-frame-takip-ve-break-hesaplama';
const title = 'Snooker Frame Takipçisi ve Break Hesaplayıcı';
const description = 'Canlı snooker frame skorlarını takip edin, mevcut break değerlerini hesaplayın, masada kalan puanları görüntüleyin ve snooker ihtiyacı gibi gerçek zamanlı fark durumunu alın.';

const faqData = [
  {
    question: 'Snooker masasında kalan maksimum puan nasıl hesaplanır?',
    answer: 'Kalan her kırmızı top 8 puan değerindedir (kırmızının kendisi için 1 puan artı siyah topu deliğe sokmak için 7 puan). Tüm kırmızılar delindiğinde, kalan renkli toplar toplam 27 puan değerindedir.',
  },
  {
    question: 'Bu hesaplayıcıda snooker ihtiyacı ne anlama gelir?',
    answer: 'Skor farkının masada kalan toplam puandan daha büyük olduğu anlamına gelir; yani bir oyuncu arayı kapatmak için rakibini faul yapmaya zorlamalıdır.',
  },
  {
    question: 'Belirleyici siyah top durumu nedir?',
    answer: 'Belirleyici siyah senaryosu, tüm toplar delindiğinde ve frame skorları eşit olduğunda ortaya çıkar ve kazananı belirlemek için yeniden yerleştirilen siyah top gerekir.',
  },
];

const howToData = [
  {
    name: 'Oyuncu İsimlerini Ayarlayın',
    text: 'Skor tahtası görünümünü özelleştirmek için iki snooker oyuncusu için özel isimler girin.',
  },
  {
    name: 'Topları Deliğe Sokun ve Break Oluşturun',
    text: 'Sırayla delinen topları kaydetmek için parlayan keçe toplara dokunun. Hesaplayıcı, kurallara göre uygun olmayan renkleri kilitler.',
  },
  {
    name: 'Fark Durumunu Kontrol Edin',
    text: 'Bir oyuncunun güvende olup olmadığını, snooker ihtiyacı olup olmadığını veya frame\'in hala açık olup olmadığını görmek için canlı durum çubuğunu izleyin.',
  },
  {
    name: 'Faul Cezalarını Kaydedin',
    text: 'Ceza puanlarını doğrudan rakibe atamak ve aktif oyuncu sırasını değiştirmek için faul menüsünü açın.',
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Ücretsiz Online Snooker Frame Skor Takipçisi ve Break Sayacı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dijital skor tahtamızla snooker frame\'lerinizi basitleştirin. Araç, aktif break puanlarını, masada kalan puanları hesaplar ve tam skor farkını görüntüler. Keçe görünümlü arayüz, snooker kural dizilerine göre dinamik olarak yanan etkileşimli göstergeler sağlar. İster yerel bir kulüp turnuvasında hakemlik yapın, ister evde dostça maçları takip edin, bu uygulama tüm hesaplamaları otomatik olarak yapar.',
    },
    {
      type: 'title',
      text: 'Snooker Puanlamasını ve Fark Hesaplamalarını Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Standart bir snooker oyunu, her biri bir puan değerinde on beş kırmızı topla başlar. Oyuncular kırmızı top ile renkli top arasında geçiş yapmalıdır. Delinen her renkli top, tüm kırmızılar bitene kadar yerine konur. Ardından, renkli toplar sarıdan siyaha sayısal sırayla delinmelidir. Bu hesaplayıcı, sırayı takip eder ve snooker gerektiğinde uyarır. Skor farkını ve masada kalan maksimum puanları hesaplayarak bir frame\'in zafer eşiğine ne zaman ulaştığını tam olarak belirler.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frame Skor Tahtası',
          description: 'Yüksek kontrastlı bir ekranda frame skorlarını ve oyuncu sıralarını takip edin.',
          icon: 'mdi:scoreboard-outline',
          points: ['Net aktif oyuncu vurgulaması', 'Özel oyuncu ismi girişi', 'Tek tıkla geri alma desteği'],
        },
        {
          title: 'Break Hesaplayıcı',
          description: 'Top renk kaydıyla aktif delme break\'lerinin gerçek zamanlı takibi.',
          icon: 'mdi:billiards',
          points: ['Delme geçmişi zaman şeridi', 'Kurallara göre otomatik top kilitleme', 'Renk kodlu break durumu'],
        },
        {
          title: 'Kalan Puan Göstergeleri',
          description: 'Yeşil keçe masada kalan maksimum puanları takip edin.',
          icon: 'mdi:percent-outline',
          points: ['Skor farkı takibi', 'Dinamik snooker ihtiyacı uyarıları', 'Belirleyici siyah tespiti'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Etkileşimli Kontroller ve Sesli Geri Bildirim',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Dokunsal Keçe HUD</strong> puan eklemek ve break zaman şeridine kaydetmek için toplara dokunmayı sağlar.',
        '<strong>Faul Eylem Düğmeleri</strong> rakibin skoruna dört ila yedi ceza puanı ekler ve aktif sırayı sonlandırır.',
        '<strong>Dinamik Durum Işığı</strong> normal oyunu, güvenli marjı veya snooker gerekliliğini belirtmek için güncellenir.',
        '<strong>Ses Sentezi</strong> delme sırasında cep sesi ve faullerde alarm sesi tetikler.',
      ],
    },
    {
      type: 'title',
      text: 'Snooker Faul Kuralları ve Ceza Sistemleri Açıklaması',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Snooker\'da fauller rakibe puan kazandırır. Ceza değeri, hedef topun veya faulde yer alan topun değerine göre belirlenir ve minimum ceza dört puandır. Örneğin, beyaz isteka topunu delmek, kırmızı yerine önce renkli bir topa vurmak veya herhangi bir topa vuramamak cezayla sonuçlanır. Mavi, pembe veya siyah hedeflenirken faul yapılırsa, ceza sırasıyla beş, altı veya yedi puandır. Bu dijital skor kartı, ceza değerlerini kolayca eklemek ve aktif sırayı otomatik olarak sonraki oyuncuya devretmek için hızlı bir faul paneline sahiptir.',
    },
    {
      type: 'title',
      text: 'Belirleyici Siyah Top Senaryosunda Ne Olur?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tüm toplar delindiğinde ve frame skorları eşit olduğunda, siyah top orijinal konumuna yeniden yerleştirilir. Oyuncular ilk kimin oynayacağını belirlemek için kura çeker ve siyahı ilk delen veya faul yapan oyuncu frame\'i kaybeder. Bu belirleyici siyah kuralı, ek tam frame\'ler gerektirmeden çekişmeli oyunlarda adil bir çözüm sağlar ve takipçimiz bu eşit bitiş durumunu otomatik olarak tespit ederek her iki oyuncuyu da bilgilendirir.',
    },
    {
      type: 'title',
      text: 'Neden Dijital Snooker Takipçisi Kullanmalısınız?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çekişmeli frame\'ler sırasında kalan puanların ve fark marjlarının manuel olarak hesaplanması insan hatasına açıktır. Bu tarayıcı tabanlı araç, doğru gerçek zamanlı istatistikler sağlayarak oyuncuların teknik ve stratejilerine odaklanmalarına olanak tanır. Delinen topların etkileşimli bir zaman çizelgesini tutarak, hakemler tartışmalı break\'leri kolayca doğrulayabilir ve resmi maç sürekliliğini koruyabilir.',
    },
  ],
  ui: {
    title: 'Snooker Skor Takipçisi',
    description: 'Frame skorlarını ve break\'leri takip edin.',
    player1: 'Oyuncu 1',
    player2: 'Oyuncu 2',
    score: 'Skor',
    currentBreak: 'Break',
    remainingPoints: 'Kalan',
    deficit: 'Fark',
    statusSafe: 'Güvende',
    statusNeedSnookers: 'Snooker Gerekli',
    statusDecidingBlack: 'Belirleyici Siyah',
    statusNormal: 'Normal',
    foul: 'Faul',
    foulTitle: 'Faul Topu Cezasını Seçin',
    foulPoints: 'Ceza',
    foulOnRed: 'Kırmızı/Sarı/Yeşil/Kahverengi',
    foulOnYellow: 'Sarı',
    foulOnGreen: 'Yeşil',
    foulOnBrown: 'Kahverengi',
    foulOnBlue: 'Mavi',
    foulOnPink: 'Pembe',
    foulOnBlack: 'Siyah',
    reset: 'Sıfırla',
    resetConfirm: 'Mevcut frame sıfırlansın mı? Tüm skorlar kaybolacak.',
    cancel: 'İptal',
    confirm: 'Sıfırlamayı Onayla',
    endTurn: 'Sırayı Bitir',
    miss: 'Iska',
    redsRemaining: 'Kırmızı',
    pocketedBalls: 'Delinen',
    toggleSound: 'Sesi Aç/Kapat',
    fullscreen: 'Tam Ekran',
  },
};
