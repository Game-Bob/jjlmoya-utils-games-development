import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'padel-skor-takipcisi';
const title = 'Padel Skor Takipçisi: Altın Puan & Rotasyon Takibi';
const description = 'Resmi Punto de Oro (Altın Puan) kuralı, servis rotasyon uyarıları, tiebreak\'ler ve dinamik saha değiştirme animasyonu ile padel skorlarını takip edin.';

const faq = [
  {
    question: 'Padelde Altın Puan (Punto de Oro) nedir?',
    answer: 'Altın Puan, skor 40-40 (Beraberlik) olduğunda oynanan belirleyici puandır. Üstünlük oynanmaz. Servis karşılayan takım, servisi sol veya sağ taraftan karşılamayı seçer ve bu tek puanı kazanan oyunun tamamını kazanır.',
  },
  {
    question: 'Padelde set formatları nasıl çalışır?',
    answer: 'Standart maçlar 3 set üzerinden oynanır, her set 6 oyuna ilk ulaşan takım (2 oyun farkla) tarafından kazanılır. Skor 6-6\'ya ulaşırsa 7 sayılık tiebreak oynanır. İsteğe bağlı Golden Set formatı, 4-4\'te tiebreak ile 4 oyunda sona erer.',
  },
  {
    question: 'Padelde oyuncular ne zaman taraf değiştirir?',
    answer: 'Oyuncular ilk oyundan sonra ve ardından her 2 oyunda bir (mevcut setteki oyunların toplamı tek olduğunda, örn. 1, 3, 5) taraf değiştirir. Tiebreak\'ler sırasında oyuncular her 6 puanda bir taraf değiştirir.',
  },
];

const howTo = [
  {
    name: 'Maç Formatını Yapılandır',
    text: 'Standart maç formatını (6 oyuna ilk ulaşan) veya daha kısa golden set formatını (4 oyuna ilk ulaşan) seçin.',
  },
  {
    name: 'Oyuncu İsimlerini Gir',
    text: 'Skor tablosunu kişiselleştirmek için takım isimlerini girin. Ayarlarınız otomatik olarak kaydedilir.',
  },
  {
    name: 'Sahada Puanları Kaydet',
    text: 'Puan vermek için görsel izometrik padel kortunun herhangi bir tarafına dokunun. Servis göstergeleri sizi çapraz rotasyonlarda yönlendirecektir.',
  },
  {
    name: 'Altın Puanları Belirle',
    text: 'Beraberlik durumuna ulaşıldığında, topu karşılayan tarafı (sol veya sağ karşılayıcı) seçin ve oyunu sonlandırmak için kazanan takıma tıklayın.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Ücretsiz Online Padel Skor Tablosu & Maç Takipçisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hızlı ralliler, tiebreak\'ler, taraf değişiklikleri ve resmi Punto de Oro (Altın Puan) kuralı ile padelde skor takibi yapmak kafa karıştırıcı olabilir. Bu ücretsiz online padel skor tablosu, skor tutma zahmetini ortadan kaldırır. Puanları kaydetmek için görsel korta dokunmanız yeterli, araç gerçek zamanlı olarak servis rotasyonlarını, karşılayıcı taraflarını, set geçmişlerini ve saha tarafı değişimlerini otomatik olarak yönetsin.',
    },
    {
      type: 'title',
      text: 'Padel Skorlamasını, Altın Puanları ve Rotasyonları Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Padel, standart tenis benzeri skorlama (15, 30, 40, Oyun) sistemini takip eder ancak daha hızlı oyun için belirli kurallar getirir. Profesyonel FIP kurallarına göre, skor 40-40\'a ulaştığında belirleyici bir Altın Puan (Punto de Oro) oynanır. Servis karşılayan takım, servisin hangi taraftan (sol veya sağ) karşılanacağını seçer ve bu tek puanı kazanan oyunu kazanır. Ayrıca takımlar, bir sette oynanan toplam oyun sayısı tek olduğunda ve tiebreak sırasında her 6 puanda bir saha tarafı değiştirmelidir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Dostluk Maçları',
          description: 'Padel partnerlerinizle dostluk maçları için hızlı ve temiz skor takibi.',
          icon: 'mdi:tennis',
          points: ['Tek dokunuşla puan ekleme', 'Mobil öncelikli tasarım', 'Hareket halindeyken çevrimdışı çalışır'],
        },
        {
          title: 'Kulüp & Lig',
          description: 'Rekabetçi kulüp maçlarını ve yerel turnuvaları kolaylıkla takip edin.',
          icon: 'mdi:trophy-outline',
          points: ['Set geçmişi arşivi', '6 oyunluk veya 4 oyunluk setler', 'Punto de Oro desteği'],
        },
        {
          title: 'Hakem Modu',
          description: 'Resmi maçları veya antrenman seanslarını yönetmek için tam donanımlı araç.',
          icon: 'mdi:school',
          points: ['Aktif servis & karşılama işaretleri', 'Etkileşimli kort rotasyonu', 'Tam ekran konsol modu'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Padel Oyuncuları için Gelişmiş Dijital Özellikler',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Resmi Punto de Oro Mantığı</strong> beraberlik durumunda karşılayan takımın karşılayıcı tarafını seçmesine izin verir ve servis yolunu gösterir.',
        '<strong>Görsel Kort Göstergesi</strong> rotasyon hatalarını önlemek için servis atan (S) ve karşılayan (R) pozisyonlarını dinamik olarak gösterir.',
        '<strong>Otomatik Taraf Değiştirme</strong> tek sayılı oyunlarda veya tiebreak aralıklarında kort düzenini çevirir, böylece fiziksel görüşünüzle her zaman eşleşir.',
        '<strong>Özel Set Formatları</strong> standart 6 oyunluk setleri veya hızlı 4 oyunluk Golden Set\'leri destekler.',
        '<strong>Yerel Tarayıcı Otomatik Kaydetme</strong> sayfayı yenileseniz bile oyuncu isimlerini ve mevcut maç skorlarını güvende tutar.',
      ],
    },
    {
      type: 'title',
      text: 'Padel Tiebreak Kuralları: Standart vs Süper Tiebreak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Standart padel setlerinde, oyunlarda skor 6-6\'ya ulaşırsa 7 sayılık standart bir tiebreak oynanır. Tiebreak\'te sayılar sayısal olarak sayılır (1, 2, 3, vb.). 2 sayı farkla 7 sayıya ilk ulaşan takım seti kazanır. Servis sırası gelen oyuncu, ilk sayıyı sağ (deuce) taraftan servis eder. Daha sonra her oyuncu, sol (avantaj) taraftan başlayarak art arda iki sayı servis eder. Bazı turnuva formatlarında, maç setlerde 1-1 berabere ise, maçı belirlemek için tam bir üçüncü set yerine 10 sayılık Süper Tiebreak oynanır.',
    },
    {
      type: 'title',
      text: 'Saha Değiştirme ve Rotasyonlar: Padel\'i Adil Tutmak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saha değiştirme, güneş, rüzgar veya korttan kaynaklanan kusurlar gibi çevresel faktörlerin bir takımı diğerine göre kayırmamasını sağlamak için padelde çok önemlidir. Oyuncular, her setin ilk oyunundan sonra ve ardından her iki oyunda bir (örn. 1-0, 2-1, 3-2, 4-3, 5-4) saha tarafı değiştirmelidir. Dijital padel skor tablomuz, oyuncuların fiziksel olarak taraf değiştirmesi gerektiğinde görsel kort düzenini otomatik olarak 180 derece döndüren dinamik bir taraf değiştirme animasyonuna sahiptir. Bu, ekranınızın üst kısmında görüntülenen takımın her zaman fiziksel kortun uzak ucunda oynayan takımla eşleşmesini sağlar.',
    },
    {
      type: 'title',
      text: 'Standart Setler ve Golden Set Formatı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Standart maçlar set başına 6 oyuna oynanırken, birçok amatör lig ve hızlı tempolu turnuva, setlerin yalnızca 4 oyuna (4-4\'te tiebreak ile) oynandığı "Golden Set" formatını benimser. Bu skor tablosu, araç çubuğundaki tek bir dokunuşla bu formatlar arasında geçiş yapmanızı sağlar. Seçilen format ne olursa olsun, skor tablosu tüm tiebreak\'leri, servis rotasyonlarını ve skor hesaplamalarını otomatik olarak yönetir.',
    },
    {
      type: 'title',
      text: 'Sahada Etkili Skor Takibi İçin İpuçları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Kort Standı veya Telefon Tutacağı Kullanın:</strong> Telefonunuzu veya tabletinizi file yüksekliğinde padel kort çitine monte edin. Bu, her iki taraftaki oyuncuların aktif skoru ve servis göstergelerini kolayca görmesini sağlar.',
        '<strong>Başlamadan Önce İsimleri Kişiselleştirin:</strong> Oyuncuların veya takımların gerçek isimlerini yazmak için 10 saniye ayırın. Bu, sesli anonsları (etkinse) ve görsel skor tablosunu çok daha ilgi çekici ve resmi hale getirir.',
        '<strong>Tam Ekran Modunu Etkinleştirin:</strong> Başlık panelindeki tam ekran düğmesine tıklayın. Bu, skor tablosu arayüzünü büyütür ve uzun ralliler sırasında ekranın otomatik olarak kapanmasını önlemeye yardımcı olur.',
      ],
    },
    {
      type: 'title',
      text: 'Neden Dijital bir Padel Skor Takipçisi Kullanmalısınız?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kimin servis attığı, kimin karşılama sırası olduğu veya oyun skorunun ne olduğu konusunda sürekli tartışmak yerine, dijital bir takipçi herkesi aynı hizada tutar. Sunucu ve alıcı konumlarını doğrudan ekranda görsel olarak işleyerek, oyuncular banktaki telefona hızlıca bakabilir ve tam olarak nerede duracaklarını bilirler. Bu, oyunun temposunu artırır ve rotasyon hatalarını önler.',
    },
  ],
  ui: {
    playerA: 'Takım 1',
    playerB: 'Takım 2',
    game: 'Oyun',
    set: 'Set',
    tiebreak: 'Tiebreak',
    goldPoint: 'Altın Puan',
    selectReceiver: 'Karşılayıcı Seç',
    leftReceiver: 'Sol Karşılayıcı',
    rightReceiver: 'Sağ Karşılayıcı',
    server: 'Servis Atan',
    receiver: 'Karşılayan',
    changeEnds: 'Taraf Değiştir',
    matchWon: 'Maç Kazanıldı',
    reset: 'Sıfırla',
    resetConfirm: 'Maç sıfırlansın mı? Tüm veriler kaybolacak.',
    cancel: 'İptal',
    fullscreen: 'Tam Ekran',
    exitFullscreen: 'Tam Ekrandan Çık',
    deuce: 'Beraberlik',
    advantage: 'Üstünlük',
    formatStandard: '6 Oyun',
    formatGoldenSet: '4 Oyun',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Altın Puan Belirleyici Puan',
  },
};
