import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'plaj-voleybolu-skor-takipcisi';
const title = 'Plaj Voleybolu Skor ve Rotasyon Takipçisi';
const description = 'Plaj voleybolu skorlarını, servis rotasyon sırasını, rüzgar tarafı değişimlerini ve setleri interaktif tepeden görünümlü altın kum saha görselleştirmesiyle takip edin.';

const faq = [
  {
    question: 'Plaj voleybolunda takımlar ne zaman taraf değiştirir?',
    answer: 'Açık hava koşullarında (rüzgar, güneş, kum) adaleti sağlamak için takımlar ilk iki sette her 7 puanda bir, üçüncü beraberlik setinde ise her 5 puanda bir taraf değiştirir.',
  },
  {
    question: 'Plaj voleybolunda servis rotasyonu nasıl çalışır?',
    answer: 'Her takımda dönüşümlü olarak servis atması gereken 2 oyuncu bulunur. Bir takım servis kırdığında (side-out), servis atan oyuncuyu değiştirmelidir, böylece bir önceki seferde servis atmayan oyuncu bir sonraki servisi atar.',
  },
  {
    question: 'Plaj voleybolunda bir seti kazanmak için kaç puan gerekir?',
    answer: '1. ve 2. setler 21 puana oynanır. Üçüncü bir set gerekirse 15 puana oynanır. Her durumda bir takım en az 2 puan farkla kazanmalıdır.',
  },
];

const howTo = [
  {
    name: 'Kadroyu Oluşturun',
    text: 'A Takımı ve B Takımı için iki oyuncunun özel isimlerini girin.',
  },
  {
    name: 'Puanları Kaydedin',
    text: 'Puan eklemek için bir takım kartına dokunun veya interaktif kum sahasına tıklayın. Kadro ve rotasyon otomatik olarak güncellenir.',
  },
  {
    name: 'Taraf Değiştirme Uyarılarını Takip Edin',
    text: 'Değişim bannerı aşağı kaydığında fiziksel bir taraf değişimi yapın ve saha yönünü ters çevirmek için değişim düğmesine tıklayın.',
  },
];

const faqSchema: WithContext<FAQPage> = {
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
  description,
  step: howTo.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
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

export const content: BeachVolleyballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Çevrimiçi Plaj Voleybolu Skor Tablosu ve Servis Rotasyon Takipçisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kavurucu güneş altında servis sırasını ve takım pozisyonlarını takip etmek zor olabilir. Bu profesyonel plaj voleybolu skor takipçisi, açık hava görünürlüğü için optimize edilmiş kum dokulu, yüksek kontrastlı dijital saha düzenine sahiptir. Parlama okuma sorunlarını önler, taraf değiştirme kurallarını otomatikleştirir ve her side-out noktasından sonra iki oyuncudan hangisinin servis atması gerektiğini izler.',
    },
    {
      type: 'title',
      text: 'Plaj Voleybolu Rotasyonu ve Servis Kurallarını Anlama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2v2 plaj voleybolunda saha konumlarına dayalı sabit pozisyonlar veya rotasyon hatası olmamasına rağmen, oyuncular kesinlikle dönüşümlü olarak servis atmalıdır. Karşılayan takım bir ralliyi kazandığında (side-out), servis atma hakkını kazanır. Takımının bir önceki servis sırasında servis atmayan oyuncu yeni servis atan olmalıdır. Sıra dışı servis atmak bir hatadır ve rakiplere puan kazandırır. Bu dijital pano, rotasyon hatalarını önlemek için oyuncu daire düğümlerinin yanında aktif servis noktaları ve zıplayan top göstergeleri içerir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Resmi FIVB Kuralları',
          description: 'Set limitleri ve taraf değişimleri dahil resmi puanlama yönergelerini yerine getirin.',
          icon: 'mdi:volleyball',
          points: ['21 puana setler (beraberlikte 15)', 'En az 2 farkla kazanma', 'Otomatik taraf değişimleri'],
        },
        {
          title: 'Rotasyon Takibi',
          description: 'Sıranın kimde olduğu konusunda asla tartışmayın veya kafa karışıklığı yaşamayın.',
          icon: 'mdi:account-sync-outline',
          points: ['Parlayan servis göstergeleri', 'Kum üzerinde baş harfler', 'Kadro kaplama modalı'],
        },
        {
          title: 'Açık Hava Optimizasyonu',
          description: 'Doğrudan güneş ışığı altında kum sahalarında gerçek oyun için üretilmiştir.',
          icon: 'mdi:weather-sunny',
          points: ['Yüksek kontrastlı sarı tema', 'Wake Lock ekran kalıcılığı', 'Puanı geri almak için kaydırma hareketi'],
        },
      ],
    },
    {
      type: 'title',
      text: 'İnteraktif Özellikler ve Oyun Ayarları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Altın Kum SVG Sahası:</strong> Oyunun durumunu görsel olarak yansıtır. O takıma puan vermek için doğrudan sahanın herhangi bir yarısına dokunun.',
        '<strong>Saha Döndürme Animasyonu:</strong> Taraf değiştirme uyarısı tetiklendiğinde, değiştirme düğmesine tıklamak tüm SVG sahasını 180 derece döndürür, böylece ekran fiziksel konumlarınızla uyumlu olur.',
        '<strong>FIVB Taraf Değiştirme Alarmları:</strong> Toplam skor 7\'nin katı olduğunda (1. ve 2. setlerde) veya 5\'in katı olduğunda (son sette) yüksek görünürlükte uyarı bannerı görüntüler.',
        '<strong>Kum Sıçrama Parçacıkları:</strong> Dokunma koordinatlarından fırlayan animasyonlu kum parçacıklarıyla skor değişikliklerinde görsel geri bildirim ekler.',
        '<strong>Hareketle Geri Alma Kontrolü:</strong> Son kaydedilen puanı anında geri almak için kartta aşağı kaydırın.',
      ],
    },
    {
      type: 'title',
      text: 'Plaj Voleybolunda Takımlar Neden Taraf Değiştirir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Salon voleybolunun aksine, plaj voleybolu maçları güneş parlaması, sıcaklık, rüzgar şiddeti ve kum kıvamı gibi çevresel faktörlerden oldukça etkilenir. Sık sık taraf değiştirmek, hiçbir takımın uygun rüzgar yönü veya gözlerine gelen güneş nedeniyle haksız avantaj elde etmemesini sağlar. Kurallar, ilk iki sette her 7 puanda bir ve üçüncü sette her 5 puanda bir taraf değiştirmeyi zorunlu kılar.',
    },
  ],
  ui: {
    teamA: 'Takım 1',
    teamB: 'Takım 2',
    points: 'Puanlar',
    sets: 'Setler',
    reset: 'Sıfırla',
    resetConfirm: 'Maç sıfırlansın mı? Tüm skorlar ve kadrolar kaybolacak.',
    cancel: 'İptal',
    switchSides: 'Taraf Değiştir',
    switchSidesDesc: 'Birikimli skor değişim eşiğine ulaştı!',
    fullscreen: 'Tam Ekran',
    exitFullscreen: 'Tam Ekrandan Çık',
    player1: 'Oyuncu 1',
    player2: 'Oyuncu 2',
    serving: 'Serviste',
    winner: 'Kazanan',
    undo: 'Geri Al',
  },
};
