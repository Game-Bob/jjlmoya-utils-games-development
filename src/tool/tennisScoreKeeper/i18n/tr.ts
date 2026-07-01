import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'tenis-skor-takipcisi';
const title = 'Çevrimiçi Tenis Skor Takipçisi: Ücretsiz Maç Takipçisi';
const description = 'Set ve oyun puanlamasıyla tenis maçlarını takip edin. Maçlar ve turnuvalar için ücretsiz çevrimiçi tenis skor takipçisi. Kayıt gerekmez.';

const faqData = [
  {
    question: 'Tenis puanlaması nasıl çalışır?',
    answer: 'Tenis maçları oyunlar ve setler halinde oynanır. Bir oyun Love, 15, 30, 40 olarak puanlanır. 40-40 skoruna Deuce denir ve bir oyuncunun art arda 2 puan kazanması gerekir. Bir set, 2 oyun farkla 6 oyun kazanan ilk oyuncu tarafından kazanılır. Skor 6-6\'ya ulaşırsa tiebreak oynanır.',
  },
  {
    question: 'Bu tenis skor takipçisini nasıl kullanırım?',
    answer: 'Bir oyuncu puan aldığında onun için artı düğmesine basın. Skor otomatik olarak güncellenir. Skor takipçisi servis sırasını, oyun skorlarını, mevcut setleri ve tamamlanmış set geçmişlerini takip eder.',
  },
  {
    question: 'Tenis oyuncuları ne zaman taraf değiştirir?',
    answer: 'Tenis oyuncuları her setin birinci, üçüncü ve sonraki her tek sayılı oyunundan sonra taraf değiştirir. Toplam oyun sayısı çift olmadığı sürece bir setin sonunda da taraf değiştirirler. Tiebreak\'te oyuncular her 6 puanda bir taraf değiştirir.',
  },
  {
    question: 'Bu skor takipçisi tiebreak\'leri destekliyor mu?',
    answer: 'Evet, bir sete 6-6\'ya ulaştığında, skor takipçisi otomatik olarak puanların sayısal olarak 7\'ye kadar sayıldığı tiebreak moduna geçer. Bir oyuncu tiebreak\'i ve seti sonlandırmak için 2 puan farkla kazanmalıdır.',
  },
  {
    question: 'Bunu cep telefonumda kullanabilir miyim?',
    answer: 'Evet, arayüz büyük düğmelerle mobil cihazlar için optimize edilmiştir. Maç sırasında ekranı uyanık tutmak için tam ekran moduna da geçebilirsiniz.',
  },
];

const howToData = [
  {
    name: 'Oyuncu isimlerini ayarlayın',
    text: 'Özel isimler yazmak için oyuncu adı giriş alanlarına dokunun. Tarayıcınıza kaydedilirler.',
  },
  {
    name: 'Puan ekleyin',
    text: 'Rallyi kazanan oyuncu için artı düğmesine tıklayın. Skor otomatik olarak güncellenecektir.',
  },
  {
    name: 'Set sonuçlarını yönetin',
    text: 'Takipçi, oyunları ve setleri otomatik olarak sonlandırır. Tamamlanan setleri arşivler ve bir sonraki sete geçer.',
  },
  {
    name: 'Taraf değiştirin',
    text: 'Skor takipçisi, oyuncuların taraf değiştirmesi gerektiğinde sizi uyarır. Görsel tarafları değiştirmek için değiştirme düğmesine dokunun.',
  },
  {
    name: 'Maç Sonucu',
    text: 'Takipçi, tenis kurallarına göre maçı otomatik olarak sonlandırır ve kazananı açıklar.',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Ücretsiz Çevrimiçi Tenis Skor Takipçisi ve Maç Takipçisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deuce, avantaj ve tiebreak gibi terimlerle teniste skor tutmak zor olabilir. Bu ücretsiz çevrimiçi tenis skor takipçisi tüm süreci otomatikleştirir. Bir oyuncu puan aldığında artı düğmesine basmanız yeterlidir. Araç, puanları, oyunları, setleri ve taraf değişikliklerini gerçek zamanlı olarak otomatik olarak yönetir.',
    },
    {
      type: 'title',
      text: 'Bu Skor Takipçisinde Tenis Puanlaması Nasıl Çalışır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenis benzersiz bir puanlama yapısı kullanır. Standart bir oyun Love, 15, 30, 40 ve Oyun aşamalarından geçer. Her iki oyuncu da 40\'a ulaştığında skor Deuce\'dur. Deuce\'dan itibaren bir oyuncu oyunu kazanmak için art arda iki puan almalıdır. İlk puana Avantaj denir ve sonraki puan oyunu garantiler. Rakip sonraki puanı kazanırsa skor Deuce\'a döner. Setler, 2 oyun farkla 6 oyun kazanan ilk oyuncu tarafından kazanılır. Set 6-6\'ya ulaştığında 7 puana kadar tiebreak oynanır.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Günlük Maçlar',
          description: 'Arkadaşlarla rahat tenis maçları için hızlı ve kolay puanlama.',
          icon: 'mdi:tennis',
          points: ['Tek dokunuşla puanlama', 'Taraf değiştirme göstergesi', 'Çevrimdışı çalışır'],
        },
        {
          title: 'Kulüp Oyunu',
          description: 'Kulüp maçları ve turnuvaları için mükemmel takip.',
          icon: 'mdi:trophy-outline',
          points: ['Set geçmişi arşivi', 'Best of 3 veya 5 set', 'Mobil uyumlu düzen'],
        },
        {
          title: 'Turnuva Modu',
          description: 'Resmi maç takibi ve hakem kullanımı için tasarlanmıştır.',
          icon: 'mdi:school',
          points: ['Tiebreak desteği', 'Tam ekran skor takipçisi', 'Yerel veri güvenliği'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Özel Skor Takipçisi Özellikleri',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Otomatik tenis kural mantığı</strong> Love, 15, 30, 40, deuce, avantaj ve tiebreak\'i otomatik olarak hesaplar.',
        '<strong>Set geçmişi arşivi</strong> önceki setlerin skorunu bir bakışta gösterir.',
        '<strong>Taraf değiştirme yardımcısı</strong> oyuncuların taraf değiştirmesi gerektiğinde uyarır.',
        '<strong>Canlı puan kutlamaları</strong> kazanılan puanlar için havada süzülen parçacıklar gösterir.',
        '<strong>Best of 3 veya 5 set</strong> yapılandırılabilir maç formatı ayarları.',
        '<strong>İsimler yerel olarak kaydedilir</strong> özel isimleri ziyaretler arasında saklar.',
      ],
    },
    {
      type: 'title',
      text: 'Dijital Skor Takibi vs Manuel Takip',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuel skor takipçileri, sayıları güncellemek, servis sırasını hatırlamak, tiebreak\'leri kontrol etmek ve taraf değişikliklerini hesaplamak için sürekli konsantrasyon gerektirir. Bu dijital tenis skor takipçisi, tenisin her kuralını otomatik olarak yönetir. Araç set geçmişlerini güncellerken ve bir kutlama töreniyle kazananı açıklarken tamamen maça odaklanabilirsiniz.',
    },
  ],
  ui: {
    playerA: 'Oyuncu 1',
    playerB: 'Oyuncu 2',
    winnerLabel: 'ŞAMPİYON',
    finishMatch: 'Maçı Bitir',
    newGame: 'Yeni Set',
    serving: 'Serviste',
    changeSide: 'Taraf Değiştir',
    swapHint: 'Taraf değiştirmek için dokunun',
    game: 'Oyun',
    set: 'Set',
    gamePoint: 'Oyun Puanı',
    setPoint: 'Set Puanı',
    matchPoint: 'Maç Puanı',
    mode: 'Set',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Puan',
    reset: 'Sıfırla',
    resetConfirm: 'Maç sıfırlansın mı? Tüm veriler kaybolacak.',
    cancel: 'İptal',
    fullscreen: 'Tam ekran',
    exitFullscreen: 'Tam ekrandan çık',
    deuce: 'Deuce',
    advantage: 'Avantaj',
    tiebreak: 'Tiebreak',
  },
};
