import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'pinpon-skor-takipcisi';
const title = 'Çevrimiçi Pinpon Skor Takipçisi: Ücretsiz Masa Tenisi Takipçisi';
const description =
  'Oyun ve set puanlamasıyla masa tenisi maçlarını takip edin. Dostluk maçları ve turnuvalar için ücretsiz çevrimiçi pinpon skor takipçisi. Kayıt gerekmez.';

const faqData = [
  {
    question: 'Pinpon puanlaması nasıl çalışır?',
    answer:
      'Standart bir pinpon oyunu 11 puana kadar oynanır. 2 puan farkla kazanmalısınız. Skor 10-10\'a ulaşırsa, bir oyuncu 2 puan öne geçene kadar oyun devam eder. Servis atan oyuncu her 2 puanda bir değişir. Bu skor takipçisi tüm bunları otomatik olarak yönetir.',
  },
  {
    question: 'Bu skor takipçisini nasıl kullanırım?',
    answer:
      'Her oyuncunun altındaki + düğmesine puan eklemek için dokunun. Oyun skoru otomatik olarak güncellenir. Bir oyuncu 2 puan farkla 11\'e ulaştığında oyun biter ve yeni bir oyun başlar. Kazanılan oyun sayacı, her oyuncunun kaç oyun kazandığını takip eder. Maç bittiğinde Maçı Bitir\'e dokunun.',
  },
  {
    question: 'Servis göstergesi nasıl çalışır?',
    answer:
      'Servis atan oyuncu her 2 puanda bir değişir. Servis atan oyuncunun yanında bir nokta belirir. Bu, resmi masa tenisi kurallarına uygundur. Maç boyunca kimin servis atması gerektiğini her an görebilirsiniz.',
  },
  {
    question: 'Maç sırasında telefonda kullanabilir miyim?',
    answer:
      'Evet. Arayüz, büyük düğmelerle mobil cihazlara uygun şekilde tasarlanmıştır. Tam ekran modu tarayıcıyı gizler ve ekranın uyku moduna geçmesini engeller.',
  },
  {
    question: 'Maç verilerimi kaydeder mi?',
    answer:
      'Evet. Mevcut skor, kazanılan oyunlar ve oyuncu isimleri tarayıcınızda otomatik olarak kaydedilir.',
  },
];

const howToData = [
  {
    name: 'Oyuncuları adlandırın',
    text: 'Varsayılan oyuncu adına dokunun ve kendi adınızı yazın. İsimler otomatik olarak kaydedilir.',
  },
  {
    name: 'Puan ekleyin',
    text: 'Puan alan oyuncu için büyük yuvarlak + düğmesine basın. Skor, bir kutlama animasyonuyla güncellenir.',
  },
  {
    name: 'Puanı geri alın',
    text: 'Yanlışlıkla puan eklediyseniz eksi düğmesine basın.',
  },
  {
    name: 'Yeni bir oyun başlatın',
    text: 'Bir oyun bittiğinde, sonraki oyunu başlatmak için Yeni Oyun\'a dokunun. Veya maçı bitirmek için Maçı Bitir\'e dokunun.',
  },
  {
    name: 'Maçı bitirin',
    text: 'Kazananın kupa ve konfeti ile açıklandığını görmek için Maçı Bitir\'e dokunun.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Ücretsiz Çevrimiçi Pinpon Skor Takipçisi: Masa Tenisi Maç Takipçisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pinpongda skor tutmak basit olmalı, ancak kurallar kafa karıştırıcı olabilir. Sıradaki servis kimde? 10-10 mu yoksa 11-9 mu? Her oyuncu kaç oyun kazandı? Bu ücretsiz çevrimiçi pinpon skor takipçisi tüm bunları otomatik olarak halleder. Birisi puan aldığında + düğmesine basmanız yeterli. Skor takipçisi, oyun başına puanları, maçta kazanılan oyunları ve kimin servis attığını takip eder. Her şey, her puanı anlamlı kılan kutlama animasyonlarıyla gerçek zamanlı olarak güncellenir. Kayıt yok, indirme yok, karmaşık menüler yok.',
    },
    {
      type: 'title',
      text: 'Bu skor takipçisinde pinpon puanlaması nasıl çalışır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Masa tenisi standart bir puanlama sistemini takip eder. Her oyun 11 puana kadar oynanır. Bir oyuncu 2 puan farkla kazanmalıdır, bu nedenle skor 10-10\'a ulaşırsa, bir oyuncu 2 puan öne geçene kadar oyun devam eder. Bir oyun sırasında servis atan oyuncu her 2 puanda bir değişir. Bu skor takipçisi tüm bu kuralları otomatik olarak izler. Kimin servis attığını veya ne zaman değiştirileceğini hatırlamanız gerekmez. Servis göstergesi, mevcut servis atan oyuncunun yanında bir nokta gösterir. Bir oyuncu bir oyun kazandığında, skor takipçisi otomatik olarak sonraki oyuna geçer. Kazanılan oyun sayacı kazanan için artar. Bir maç herhangi bir sayıda oyun içerebilir, ancak genellikle 5 veya 7\'nin en iyisidir. Maç tamamlandığında Maçı Bitir\'e dokunun ve kazanan bir kutlamayla duyurulur.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Dostluk Maçları',
          description: 'Arkadaşlarla sıradan pinpon için hızlı ve kolay puanlama. Otomatik oyun ve maç takibi.',
          icon: 'mdi:table-tennis',
          points: ['Puan başına tek dokunuş', 'Otomatik servis takibi', 'Çevrimdışı çalışır'],
        },
        {
          title: 'Kulüp ve Lig',
          description: 'Oyun ve maç sonuçlarının temiz bir kaydını tutun. Kulüp turnuvaları ve lig oyunları için mükemmel.',
          icon: 'mdi:trophy-outline',
          points: ['Kazanılan oyun takibi', '5 veya 7\'nin en iyisi desteği', 'Mobil uyumlu'],
        },
        {
          title: 'Turnuva',
          description: 'Turnuva ortamında birden fazla maçı takip edin. Maçlar arasında hızlı sıfırlama.',
          icon: 'mdi:school',
          points: ['Hızlı maç sıfırlama', 'Skor kalıcılığı', 'Tam ekran modu'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bu pinpon skor takipçisini özel kılan şey',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Otomatik oyun puanlaması</strong> skor takipçisi pinpon kurallarını bilir. 11\'e kadar oyunlar, 2 puan farkla kazanma, otomatik servis değişiklikleri.',
        '<strong>Kazanılan oyun takibi</strong> kazanılan her oyun kaydedilir. Her oyuncunun maçta kaç oyun kazandığını bir bakışta görün.',
        '<strong>Servis göstergesi</strong> 2 puan dönüş kuralını takip eden görünür bir nokta, hangi oyuncunun servis attığını gösterir.',
        '<strong>Gol kutlama animasyonları</strong> her puan rastgele bir kutlama animasyonu tetikler. Sekiz farklı efekt her puanı heyecanlı kılar.',
        '<strong>Uçan parçacıklar</strong> kazanılan her puan, anı kutlayan havada süzülen metin oluşturur.',
        '<strong>Maç Bitirme Töreni</strong> Maçı Bitir\'e dokunun, kupa ve konfeti ile kazananın duyurulmasını sağlayın.',
        '<strong>Düzenlenebilir oyuncu isimleri</strong> oyuncuları yeniden adlandırmak için isim alanına dokunun. İsimler tarayıcınızda kaydedilir.',
        '<strong>Tam ekran modu</strong> tarayıcı arayüzünü gizler, böylece skor tablosu ekranı doldurur ve ekranın uyku moduna geçmesini engeller.',
        '<strong>Çevrimdışı öncelikli</strong> internet olmadan çalışır. Reklam yok, izleme yok, veri toplama yok.',
      ],
    },
    {
      type: 'title',
      text: 'Pinpon Skor Takipçisi vs Manuel Puanlama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pinpongda manuel puanlama, skoru takip etmeyi, kimin servis attığını hatırlamayı, servis değişim zamanını bilmeyi ve kazanılan oyunları saymayı gerektirir. Özellikle hızlı tempolu bir oyunda takibi kaybetmek kolaydır. Bu dijital skor takipçisi her şeyi otomatik olarak halleder. Bir puan kazanıldığında yalnızca bir düğmeye basmanız gerekir. Skor takipçisi oyun skorunu takip eder, bir oyunun ne zaman kazanıldığını algılar, maçta kazanılan oyunları kaydeder ve kimin servis attığını gösterir. Her puan animasyonlar ve parçacıklarla kutlanır. Skor asla karışmaz ve asla bir servis değişikliğini kaçırmazsınız. Arkadaşlarınızla sıradan bir oyun oynuyor veya bir turnuvada yarışıyor olun, bu ücretsiz çevrimiçi pinpon skor takipçisi size ihtiyacınız olan her şeyi verir.',
    },
  ],
  ui: {
    playerA: 'Oyuncu 1',
    playerB: 'Oyuncu 2',
    winnerLabel: 'ŞAMPİYON',
    finishMatch: 'Maçı Bitir',
    newGame: 'Yeni Oyun',
    serving: 'Serviste',
    changeSide: 'Taraf Değiştir',
    swapHint: 'Değiştirmek için dokunun',
    game: 'Oyun',
    set: 'Set',
    gamePoint: 'Oyun Puanı',
    matchPoint: 'Maç Puanı',
    mode: 'Format',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Puan',
    reset: 'Sıfırla',
    resetConfirm: 'Maç sıfırlansın mı? Tüm veriler kaybolacak.',
    cancel: 'İptal',
    fullscreen: 'Tam ekran',
    exitFullscreen: 'Tam ekrandan çık',
  },
};
