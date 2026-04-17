import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'turnuva';
const title = 'Ücretsiz Online Turnuva Jeneratörü ve Braket Oluşturucu';
const description = 'Kayıt olmadan ücretsiz olarak turnuvalar düzenleyin ve tek elemeli braketler oluşturun. FIFA, Padel, eSports ve masa oyunları için mükemmel. %100 Mobil Uyumlu.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Turnuva Devam Ediyor',
  nextMatch: 'Sıradaki Maç',
  share: 'Paylaş',
  backNew: 'Geri / Yeni',
  back: 'Geri',
  newTournament: 'Yeni Turnuva',
  setupSubtitle: 'Yarışma braketinizi ayarlayın ve oluşturun.',
  tournamentNameLabel: 'Turnuva Adı',
  tournamentNamePlaceholder: 'Örn. Yaz Turnuvası',
  addPlayersLabel: 'Katılımcı Ekle',
  addPlayerPlaceholder: 'İsim... veya virgülle ayrılmış birkaç isim',
  playersLabel: 'Oyuncular',
  clearAll: 'Tümünü Temizle',
  emptyList: 'Liste boş',
  howItWorks: 'Nasıl çalışır?',
  howItWorksText: 'Katılımcıları ekleyin, bir isim verin ve oluşturun. Sistem otomatik olarak eşleşmeleri oluşturacak ve tek sayı olması durumunda "Bye" (direkt geçiş) işlemlerini halledecektir.',
  historyLabel: 'Geçmiş',
  noHistory: 'Kayıtlı turnuva yok',
  noOldTournaments: 'Önceki turnuva yok',
  generateBtn: 'Braket Oluştur',
  shuffleLabel: 'Eşleşmeleri karıştır',
  scoreLabel: 'Skorları Etkinleştir (İsteğe bağlı)',
  dragHint: 'Taşımak için sürükleyin',
  roundFinal: 'Final',
  roundSemifinal: 'Yarı Finaller',
  roundQuarter: 'Çeyrek Finaller',
  roundPrefix: 'Tur',
  byeLabel: 'Bye',
  waiting: 'Bekleniyor...',
  emptyRound: 'Boş tur',
  confirmClearPlayers: 'Tüm oyuncu listesini temizle?',
  alertMinPlayers: 'En az 2 oyuncu gerekiyor.',
  alertLoadFailed: 'Turnuva yüklenemedi.',
  confirmDeleteTournament: 'Bu turnuvayı geçmişten kalıcı olarak sil?',
  toastShareLimit: 'Yalnızca 32 oyuncuya kadar olan turnuvalar paylaşılabilir',
  toastShareError: 'Bağlantı oluşturulurken hata oluştu',
  toastShareCopied: 'Bağlantı pano kopyalandı',
  toastShareFailed: 'Kopyalanamadı. URL:',
  toastFinished: 'Turnuva Bitti!',
  defaultName: 'Turnuva',
};

const faqData = [
  { question: 'Tek elemeli sistem nasıl çalışır?', answer: 'Bir maçı kaybeden katılımcının turnuvadan otomatik olarak elendiği bir yarışma sistemidir. Kazananlar, büyük final için sadece iki kişi kalana kadar bir sonraki tura (son 16, çeyrek final, yarı final) yükselir.' },
  { question: 'Oyuncu sayım tek ise ne olur?', answer: 'Aracımız "BYE" işlemlerini otomatik olarak halleder. Braketin her zaman ikinin kuvveti (2, 4, 8, 16...) şeklinde bitmesi için bazı oyuncular ilk turda oynamadan doğrudan ikinci tura yükselir.' },
  { question: 'Turnuva braketini kaydedip paylaşabilir miyim?', answer: 'Evet, anında oluşturulan benzersiz bir bağlantı aracılığıyla braketi paylaşabilirsiniz. Kayıt gerektirmeyen bir araç olduğu için, sekme açık olduğu sürece veriler tarayıcınızda tutulur.' },
  { question: 'FIFA veya LoL gibi eSports turnuvaları için uygun mu?', answer: 'Kesinlikle. Hızlı ve görsel olacak şekilde tasarlanmıştır; hızlı konsol, PC oyunu ve hatta masa ve kart oyunu turnuvalarını yönetmek için idealdir.' },
  { question: 'Turnuva oluşturmak ücretsiz mi?', answer: 'Evet, tamamen ücretsiz ve kısıtlamasız. Premium planlar, katılımcı sınırları, filigranlar veya rahatsız edici reklamlar yok. Her şey tarayıcınızda çevrimdışı çalışır.' },
  { question: 'Tarayıcıyı kapatırsam verilerim silinir mi?', answer: 'Hayır. Tüm turnuvalarınızı cihazınıza otomatik olarak kaydetmek için LocalStorage kullanıyoruz. Sekmeyi kapatabilir, bilgisayarı kapatabilir ve günler sonra geri gelebilirsiniz: turnuvanız hala orada olacaktır.' },
  { question: '"Sıradaki Maç" düğmesi nasıl çalışır?', answer: 'Sistem, her iki katılımcısı da onaylanmış ancak henüz sonucu girilmemiş bir sonraki hazır eşleşmeyi otomatik olarak algılar. "Sıradaki Maç" düğmesine basıldığında görünüm doğrudan o maça atlar.' },
];

const howTo = [
  { name: 'Katılımcıları girin', text: 'Yarışmaya katılacak oyuncuların veya takımların isimlerini yazın.' },
  { name: 'Braketi oluşturun', text: 'Oluştur düğmesine tıklayın. Sistem eşleşmeleri ve gerekli turları otomatik olarak oluşturacaktır.' },
  { name: 'Sonuçları güncelleyin', text: 'Her maçın kazanan katılımcısına tıklayın, böylece braketin bir sonraki aşamasına otomatik olarak yükselirler.' },
  { name: 'Bitirin', text: 'Turnuva tamamlandığında nihai şampiyon gösterilir.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Ücretsiz Online Turnuva Jeneratörü ve Braket Oluşturucu',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Spor, video oyunu veya masa oyunu yarışmalarınızı en kapsamlı, ücretsiz ve kayıt gerektirmeyen turnuva düzenleyici ile yönetin. <strong>Entegre skor sistemi</strong>, otomatik geçmiş ve akıllı maç navigasyonu ile saniyeler içinde görsel ve etkileşimli tek elemeli braketler oluşturun. Her şey doğrudan tarayıcınızda, çevrimdışı çalışır.',
  },
  {
    type: 'title' as const,
    text: 'Tek Elemeli Turnuva Nasıl Oluşturulur?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Turnuvanıza bir isim verin</strong>, katılımcıları ekleyin (tek tek veya virgülle ayrılmış bir liste yapıştırarak), isterseniz eşleşmeleri karıştırın, braketi oluşturun, her maçın kazananına dokunarak sonuçları yönetin ve sonuçlanmamış maçlar arasında gezinmek için "Sıradaki Maç" düğmesini kullanın.',
  },
  {
    type: 'title' as const,
    text: 'Gelişmiş Özellikler',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Toplu giriş:</strong> Virgülle ayırarak birden fazla katılımcıyı tek seferde ekleyin.',
      '<strong>Kesin skorlar:</strong> 3-1 veya 21-19 gibi sonuçlarla skor sistemi.',
      '<strong>Akıllı navigasyon:</strong> "Sıradaki Maç" düğmesi sıradaki bekleyen eşleşmeye atlar.',
      '<strong>Sürüklenebilir braket:</strong> Büyük turnuvalar için serbest kaydırmalı masaüstü görünümü.',
      '<strong>Kalıcı geçmiş:</strong> Tüm turnuvalar tarayıcınıza otomatik olarak kaydedilir.',
      '<strong>Otomatik Hükmen Galibiyetler:</strong> Bye ve direkt geçişler manuel giriş olmadan çözülür.',
      '<strong>URL ile paylaş:</strong> Braketi herkese göndermek için sıkıştırılmış bir bağlantı oluşturun.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Her Yarışma İçin Mükemmel',
    level: 2 as const,
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Video Oyunları & eSports',
        description: 'FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros veya Rocket League için mükemmel.',
        icon: 'mdi:controller-classic',
        points: ['Hızlı eşleşmeler', 'Takım sınırı yok', 'Anında paylaşılabilir'],
      },
      {
        title: 'Spor & Raket Sporları',
        description: 'Padel, Tenis, Masa Tenisi, Badminton, Futsal veya 3x3 Basketbol braketlerini yönetin.',
        icon: 'mdi:trophy-outline',
        points: ['Entegre skorlar', 'Optimize edilmiş mobil görünüm', 'Kağıda gerek yok'],
      },
      {
        title: 'Masa & Kart Oyunları',
        description: 'Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Satranç veya Domino turnuvaları düzenleyin.',
        icon: 'mdi:cards-playing-outline',
        points: ['64 oyuncuya kadar', 'Tur geçmişi', 'Bye yönetimi'],
      },
    ],
  },
  {
    type: 'title' as const,
    text: '"Bye" veya Direkt Geçiş Nedir?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'İdeal bir tek elemeli turnuvada katılımcı sayısı 2\'nin bir kuvveti (4, 8, 16, 32...) olmalıdır. Tek bir sayınız olduğunda veya 2\'nin kuvveti olmayan bir sayınız olduğunda —örneğin 7, 10 veya 13 oyuncu— sistem ilk turda otomatik olarak <strong>"Bye"</strong> atar. "Bye", bir katılımcının oynamadan doğrudan bir sonraki aşamaya geçmesi anlamına gelir. Algoritmamız bu geçişleri adil ve otomatik olarak hesaplar ve atar.',
  },
  {
    type: 'title' as const,
    text: 'Anında, Ücretsiz ve Kayıt Gerekmez',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Sıfır sürtünme. Hesap yok, kurulum yok, bekleme yok. Katılımcıları ekleyin ve turnuvanızı anında oluşturun. Her şey tarayıcınızda <strong>LocalStorage</strong> aracılığıyla otomatik olarak kaydedilir: sekmeyi kapatın, bilgisayarı kapatın ve günler sonra geri gelin. Turnuvanız ve tam geçmişiniz hala orada olacaktır.',
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faqTitle: 'Sıkça Sorulan Sorular', faq: faqData, bibliography: [], howTo, schemas };
