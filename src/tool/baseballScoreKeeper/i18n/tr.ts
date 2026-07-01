import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'beyzbol-skor-takip';
const title = 'Beyzbol ve Softbol Skor Takipçisi ile Elmas Görüntüleyici';
const description = 'Canlı beyzbol skorlarını koşu, vuruş ve hata sayılarıyla takip edin. Baz koşucu pozisyonları, top strike sayacı ve devre devre geçmiş tablosu içeren görsel bir elmas.';

const faqData = [
  {
    question: 'Beyzbolda sayaç nasıl çalışır?',
    answer: 'Sayaç, mevcut vurucudaki top ve strike sayısını gösterir. Toplar yürüyüş için 4e kadar gider. Strikeout için 3e kadar gider. Genç ligleri için ayarlanabilir limitler.',
  },
  {
    question: 'İnteraktif beyzbol elması neyi gösterir?',
    answer: 'Elmas birinci, ikinci ve üçüncü kareyi gösterir. Bir kareye dokunmak, o karede bir koşucu olduğunu belirtmek için onu turuncuya boyar. Vuruşlarda koşucular otomatik olarak ilerler.',
  },
  {
    question: 'Koşular, vuruşlar ve hatalar nasıl takip edilir?',
    answer: 'R H E matrisi her iki takım için koşu, vuruş ve hata sayılarını gösterir. Devre devre geçmiş, skorun tüm devreler boyunca nasıl oluştuğunu gösterir.',
  },
];

const howToData = [
  {
    name: 'Her Atışı Kaydet',
    text: 'Her atışı kaydetmek için Strike, Top, Foul, Vuruş veya Out butonuna dokunun. Sayaç, sonuca göre otomatik olarak güncellenir.',
  },
  {
    name: 'Baz Koşucularını Yönetin',
    text: 'Koşucuları yerleştirmek veya çıkarmak için elmastaki karelere dokunun. Bir vuruşta koşucular otomatik olarak ilerler.',
  },
  {
    name: 'Devre İlerlemesini Takip Edin',
    text: 'Devre ekranı mevcut yarı devreyi gösterir. Üç outtan sonra oyun otomatik olarak üst ve alt yarılar arasında geçiş yapar.',
  },
  {
    name: 'Skor Tablosunu İnceleyin',
    text: 'Tam skor ilerlemesini görmek için R H E özetini ve kaydırılabilir devre devre geçmiş tablosunu kontrol edin.',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Beyzbol Skor Takipçisi Ücretsiz Online: Canlı Elmas ile Koşu Vuruş ve Hata Takibi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir sonraki maçınız için güvenilir bir beyzbol skor takipçisine mi ihtiyacınız var? Bu ücretsiz online araç, gerçek zamanlı baz koşucu pozisyonlarını gösteren canlı interaktif bir elmas ile birlikte koşuları, vuruşları ve hataları takip eder. Her atış önemlidir ve dijital skorboardumuz sayacı, outları veya devreyi asla kaybetmemenizi sağlar. İster little league antrenörlüğü yapın, ister bir softbol turnuvasında skor tutun, ister bir lise varsity maçını yönetin, bu araç tüm skor tablosunu otomatik olarak halleder, böylece siz sahada olan bitene odaklanabilirsiniz.',
    },
    {
      type: 'title',
      text: 'Bu Beyzbol Skorboardu Size Nasıl Zaman Kazandırır ve Hataları Önler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuel skor tutma, özellikle hızlı oyunlarda hatalara açıktır. Kaçırılan bir strike veya gözden kaçan bir koşucu tüm skor tablosunu bozabilir. Bu dijital skor takipçisi, sıkıcı kısımları otomatikleştirir. Strike, Top, Foul, Vuruş veya Out butonuna dokunun ve board sayacı anında güncellesin. Bir vurucu yürüyüşe çıktığında veya strikeout olduğunda, araç sayacı otomatik olarak sıfırlar. Üç outtan sonra, devreyi üstten alta çevirir ve koşuları kaydeder. R H E matrisi ve devre devre geçmiş tablosu, oyunun tam bir resmini bir bakışta size sunar.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Canlı Atış Sayacı',
          description: 'Her vuruş için yürüyüş ve strikeout tespiti ile otomatik top ve strike takibi.',
          icon: 'mdi:baseball',
          points: ['Toplar 4e kadar sayılır', 'Strike lar 3e kadar sayılır', 'Kararda otomatik sıfırlama'],
        },
        {
          title: 'Koşucu Yönetimi',
          description: 'İnteraktif elmas, birinci, ikinci veya üçüncü karede kimin olduğunu tam olarak gösterir.',
          icon: 'mdi:diamond-stone',
          points: ['Koşucu koymak için karelere dokunun', 'Dolu olduğunda görsel vurgu', 'Devre değişiminde temizlenir'],
        },
        {
          title: 'Tam Skor Tablosu',
          description: 'Kaydırılabilir devre devre skor geçmişi ile tam R H E istatistikleri.',
          icon: 'mdi:scoreboard-outline',
          points: ['Koşu, vuruş ve hatalar', 'Devre devre tablo', 'Her iki takım için toplamlar'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bu Beyzbol Skor Takipçisine Kimler İhtiyaç Duyar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu araç, skor tutması gereken herkes için üretilmiştir: oyuncuları için net bir dijital ekran isteyen genç beyzbol antrenörleri, özel bir skor tutucu olmadan maçları yöneten softbol ligi gönüllüleri, tribünden çocuklarının maçlarını takip eden ebeveynler ve ikincil bir doğrulama sistemi isteyen hakemler. Arayüz, dugoutta tutulan akıllı telefonlardan çitte monte edilmiş tabletlere veya banktaki dizüstü bilgisayarlara kadar her cihazda çalışır. Kurulum gerektirmez, tarayıcıyı açın ve skor tutmaya başlayın.',
    },
    {
      type: 'list',
      items: [
        '<strong>Otomatik Sayaç Yönetimi:</strong> Toplar ve strike lar yürüyüşler, strikeoutlar, vuruşlar ve outlar sonrası otomatik olarak sıfırlanır. Manuel sıfırlama gerektirmez.',
        '<strong>Dokunmatik Elmas:</strong> Koşucuları yerleştirmek veya çıkarmak için birinci, ikinci veya üçüncü kareye dokunun. Elmas, dolu kareleri göstermek için altın renginde yanar.',
        '<strong>Devre Devre Skorlar:</strong> Her yarı devre kaydırılabilir tabloda kaydedilir. Her takımın dokuz devre boyunca nasıl skor yaptığını tam olarak görün.',
        '<strong>Sıfır Kurulum:</strong> Sayfayı açın ve hemen skor tutmaya başlayın. Skorların üstündeki etiketlere dokunarak takım isimlerini özelleştirin.',
      ],
    },
    {
      type: 'title',
      text: 'Beyzbol Skor Tutma Basitleştirildi: Sayaç, Elmas ve Skor Tablosu Tek Bir Yerde',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beyzbolda skor tutmak, aynı anda birçok şeyi takip etmeyi gerektirir: top ve strike sayacı, out sayısı, hangi karelerde koşucu olduğu, her takımın koşuları ve mevcut devre. Bunlardan herhangi birini kaybetmek karışıklığa ve hatalı kayıtlara neden olur. Bu araç, her şeyi tek bir ekranda birleştirir. Sayaç noktaları top ve strike ları bir bakışta gösterir. Elmas, baz koşucu pozisyonlarını gösterir. R H E tablosu tam skor tablosunu görüntüler. Devre tablosu ise tam skor geçmişini göstermek için yatay olarak kayar. Her şey her dokunuşta gerçek zamanlı olarak güncellenir.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Antrenörler', html: '<p>Dugouttan tüm takımınızın görebileceği net bir dijital skorboard tutun.</p>' },
        { type: 'card', title: 'Gönüllüler', html: '<p>Skor tutma deneyimi gerekmez. Araç, tüm karmaşık takibi otomatik olarak halleder.</p>' },
        { type: 'card', title: 'Ebeveynler', html: '<p>Telefonunuzda güvenilir gerçek zamanlı skor gösterimi ile maçı tribünden takip edin.</p>' },
        { type: 'card', title: 'Oyuncular', html: '<p>Performans analizi için maç sonrası devre devre skorları inceleyin.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Beyzbol Skor Takipçisi',
    description: 'Elmas görüntüleyici ile koşu, vuruş ve hata takibi.',
    away: 'Deplasman',
    home: 'Ev Sahibi',
    runs: 'K',
    hits: 'V',
    errors: 'H',
    inning: 'Devre',
    topInning: 'Üst',
    bottomInning: 'Alt',
    balls: 'Top',
    strikes: 'Strike',
    outs: 'Out',
    strikeBtn: 'Strike',
    ballBtn: 'Top',
    foulBtn: 'Foul',
    hitBtn: 'Vuruş',
    outBtn: 'Out',
    walkBtn: 'Yürüyüş',
    runBtn: '+1 Koşu',
    errorBtn: 'Hata',
    newBatter: 'Yeni Vurucu',
    resetMatch: 'Maç Sıfırla',
    resetConfirm: 'Mevcut maç sıfırlansın mı? Tüm skorlar kaybolacak.',
    cancel: 'İptal',
    confirm: 'Onayla',
    total: 'Toplam',
    fullscreen: 'Tam Ekran',
    toggleSound: 'Sesi Aç Kapat',
  },
};
