import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'elo-hesaplayici';
const title = 'ELO Puan Hesaplayıcı: Satranç, Espor ve Spor için';
const description = 'Galibiyet, beraberlik ve mağlubiyetler için ücretsiz ELO puan hesaplayıcı. Her iki puanı girin, K faktörü seçin ve tam puan değişimini, beklenen skoru, yeni ELO\'yu ve rakibin ELO\'sunu görün.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Oyuncu puanı',
  opponentLabel: 'Rakip puanı',
  kFactorLabel: 'K faktörü',
  resultLabel: 'Maç sonucu',
  winLabel: 'Galibiyet',
  drawLabel: 'Beraberlik',
  lossLabel: 'Mağlubiyet',
  calculateLabel: 'Hesapla',
  resetLabel: 'Sıfırla',
  expectedLabel: 'Beklenen',
  deltaLabel: 'Değişim',
  newRatingLabel: 'Yeni puan',
  opponentNewRatingLabel: 'Rakibin yeni ELO\'su',
  kFactorHelpTitle: 'K faktörü nedir?',
  kFactorHelpText: 'K, güncellemenin ne kadar agresif olduğunu kontrol eder. Düşük K, istikrarlı sıralamalar demektir. Yüksek K, her sonucun puanları daha hızlı hareket ettirmesi demektir.',
  kFactorLowText: 'İstikrarlı',
  kFactorHighText: 'Değişken',
  resultSummaryLabel: 'Maç etkisi',
  initialImpactText: 'Beraberlik tabloyu sıkı tutar',
  historyVersusLabel: 'vs',
  historyToLabel: 'karşı',
  playerPointsLabel: 'oyuncu puanı',
  opponentEloLabel: 'rakip ELO\'su',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'PUAN',
  upsetLabel: 'Sürpriz ihtimali',
  favoriteLabel: 'Favori baskısı',
  balancedLabel: 'Dengeli maç',
  historyLabel: 'Yerel hesaplamalar',
  noHistoryLabel: 'Buraya kaydetmek için bir hesaplama yapın',
  copiedLabel: 'Kopyalandı',
  copyLabel: 'Kopyala',
  clearLabel: 'Temizle',
  kBeginner: 'Başlangıç',
  kClub: 'Kulüp',
  kTournament: 'Turnuva',
  kElite: 'Elit',
};

const faqData = [
  { question: 'Bir maçtan sonra ELO puan değişimini nasıl hesaplarım?', answer: 'Mevcut ELO\'nuzu, rakibin ELO\'sunu, maç sonucunu ve K faktörünü girin. Hesaplayıcı beklenen skorunuzu tahmin eder, gerçek sonuçla karşılaştırır ve kazanılan veya kaybedilen tam puanları döndürür.' },
  { question: 'ELO\'da K faktörü ne anlama gelir?', answer: 'K faktörü puan hassasiyetini kontrol eder. Düşük K faktörü puanları istikrarlı ve yavaş hareket eder hale getirir. Yüksek K faktörü puanların daha hızlı tepki vermesini sağlar, bu yeni oyuncular, kısa sezonlar veya aktif yerel ligler için yararlıdır.' },
  { question: 'Düşük puanlı bir rakibi yendiğimde neden daha az ELO puanı kazanıyorum?', answer: 'Çünkü formül zaten kazanmanızı bekliyordu. Çok daha düşük puanlı bir rakibi yenmek tahmini doğrular, bu yüzden puan kazancı küçüktür. Daha güçlü bir rakibi yenmek daha şaşırtıcıdır, bu yüzden kazanç daha büyük olur.' },
  { question: 'Rakip aynı sayıda ELO puanı kaybeder mi?', answer: 'Standart iki oyunculu ELO değişiminde, evet. Bir tarafın kazandığı puanlar diğer taraftan düşülür, bu nedenle hesaplayıcı hem oyuncunun yeni ELO\'sunu hem de rakibin yeni ELO\'sunu gösterir.' },
  { question: 'Bu ELO hesaplayıcıyı satranç dışında kullanabilir miyim?', answer: 'Evet. ELO, daha güçlü oyuncuların kazanma olasılığının daha yüksek olduğu herhangi bir tekrarlanan bire bir rekabet için çalışır; espor, tenis ligleri, padel grupları, masa tenisi, münazara kulüpleri ve fantezi ligleri dahil.' },
];

const howTo = [
  { name: 'Oyuncu puanını girin', text: 'Değişimini hesaplamak istediğiniz oyuncunun mevcut puanını yazın.' },
  { name: 'Rakip puanını girin', text: 'Hesaplayıcının beklenen skoru tahmin edebilmesi için rakip puanını ekleyin.' },
  { name: 'K faktörü ve sonucu seçin', text: 'İstikrarlı sıralamalar için daha düşük K faktörü kullanın veya puanların hızlı ayarlanması gerektiğinde daha yüksek K faktörü kullanın, ardından galibiyet, beraberlik veya mağlubiyet seçin.' },
  { name: 'Yeni puanları okuyun', text: 'Hesaplayıcı beklenen skoru, puan değişimini, yeni ELO\'nuzu ve puan değişiminden sonra rakibin yeni ELO\'sunu gösterir.' },
];

const seo = [
  { type: 'title' as const, text: 'Herhangi Bir Maçtan Sonra ELO Puanlarını Hesaplayın', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Bu ELO puan hesaplayıcıyı, çok pratik bir soruya hızlı bir yanıt gerektiğinde kullanın: <strong>bu sonuçtan sonra kaç ELO puanı kazanırım veya kaybederim?</strong> Puanınızı, rakip puanını, maç sonucunu ve K faktörünü girin. Araç, aynı sonuç kartında beklenen skoru, puan değişimini, yeni ELO\'nuzu ve rakibin yeni ELO\'sunu hesaplar.'
  },
  {
    type: 'summary' as const,
    title: 'Bu hesaplayıcının yanıtladıkları',
    items: [
      'Daha güçlü veya daha zayıf bir rakibe karşı galibiyetten sonra kaç ELO puanı kazandığınız.',
      'Sürpriz bir mağlubiyetten sonra kaç ELO puanı kaybettiğiniz.',
      'Bir beraberliğin puanınızı artırması mı yoksa azaltması mı gerektiği.',
      'Aynı puan değişiminden sonra rakip puanının ne olduğu.',
      'K faktörünü değiştirmenin puan hareketini nasıl istikrarlı veya değişken hale getirdiği.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'galibiyet skoru', description: 'Bir galibiyet, beklenen skorla karşılaştırılmadan önce tam puan olarak değerlendirilir.' },
      { value: '0.5', label: 'beraberlik skoru', description: 'Bir beraberlik tam olarak galibiyet ve mağlubiyet arasındadır, bu nedenle daha güçlü bir rakibe karşı puan kazandırabilir.' },
      { value: '0.0', label: 'mağlubiyet skoru', description: 'Daha düşük puanlı bir rakibe karşı mağlubiyet, beklenmedik olduğu için genellikle daha fazla maliyetlidir.' },
    ]
  },
  { type: 'title' as const, text: 'ELO Formülü Ne Yapar', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'Her sonucun arkasındaki üç adım',
    description: 'Hesaplayıcı, sizi formülle manuel olarak uğraştırmadan standart ELO fikrini takip eder.',
    items: [
      { label: 'Beklenen skor', value: 'Puan farkı, olasılıksal bir skora dönüştürülür. Daha yüksek puanlı oyuncuların daha fazla skor yapması beklenir.' },
      { label: 'Gerçek skor', value: 'Bir galibiyet 1, beraberlik 0.5 ve mağlubiyet 0 olarak sayılır.' },
      { label: 'Puan değişimi', value: 'Gerçek skor ile beklenen skor arasındaki fark K faktörü ile çarpılır ve puana yuvarlanır.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Durum', 'Genellikle ne olur', 'Neden olur'],
    rows: [
      ['Daha güçlü bir rakibi yenersiniz', 'Büyük ELO kazancı', 'Gerçek skorunuz beklenenden çok daha yüksekti'],
      ['Daha zayıf bir rakibi yenersiniz', 'Küçük ELO kazancı', 'Formül zaten kazanmanızı bekliyordu'],
      ['Daha güçlü bir rakiple berabere kalırsınız', 'Küçük ELO kazancı', 'Beraberlik beklenen skorunuzu aşabilir'],
      ['Daha zayıf bir rakibe kaybedersiniz', 'Büyük ELO kaybı', 'Sonuç beklenenden daha kötüydü'],
    ]
  },
  { type: 'title' as const, text: 'Puan Sisteminiz için Doğru K Faktörünü Seçmek', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>K faktörü, bir ELO sisteminin hassasiyet düğmesidir.</strong> Kimin kazanmayı hak ettiğine karar vermez. Puan tablosunun bir sonuca ne kadar güçlü tepki vereceğine karar verir. Liginizde çok sayıda maç ve olgun puanlar varsa, daha düşük bir K tabloyu sakin tutar. Oyuncular yeniyse veya sezonlar kısaysa, daha yüksek bir K puanların daha hızlı yakalanmasına yardımcı olur.'
  },
  {
    type: 'table' as const,
    headers: ['K faktörü', 'Kullanım alanı', 'Kullanıcının beklemesi gereken'],
    rows: [
      ['10 ile 16', 'Kurumsal satranç kulüpleri, uzman havuzları, uzun süreli sıralamalar', 'Her maçtan sonra küçük değişikliklerle çok istikrarlı puanlar'],
      ['20 ile 32', 'Yerel ligler, kulüp ligleri, yinelenen turnuvalar', 'Aşırı tepki vermeden duyarlı hissettiren dengeli hareket'],
      ['40 ile 60', 'Yeni oyuncular, kısa sezonlar, espor ligleri, resmi olmayan gruplar', 'Mevcut puanın yanlış olabileceği durumlarda hızlı düzeltme'],
      ['60 ve üzeri', 'Yalnızca deneysel formatlar veya geçici puanlar', 'Bir maçın tabloyu büyük ölçüde değiştirebileceği çok değişken puanlar'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Çoğu kullanıcı için en iyi varsayılan değer',
    html: 'Resmi bir federasyon kuralına uymuyorsanız, <strong>K 32</strong> ile başlayın. Aktif ligler için yeterince duyarlı ve yine de şanslı bir sonucun sıralamayı tamamen yeniden yazmayacağı kadar istikrarlıdır.'
  },
  { type: 'title' as const, text: 'ELO Hesaplayıcı Sonucunuzu Nasıl Okursunuz', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Beklenen:</strong> formülün maçtan önce tahmin ettiği skor. Daha yüksek beklenen skor, favori olduğunuz anlamına gelir.',
      '<strong>Değişim:</strong> oyuncu puanına eklenen veya çıkarılan tam ELO puanları.',
      '<strong>Yeni puan:</strong> sonuç uygulandıktan sonraki oyuncu puanı.',
      '<strong>Rakibin yeni ELO\'su:</strong> ters puan hareketinden sonraki rakip puanı.',
      '<strong>Maç etkisi:</strong> sonucun tabloyu ne kadar güçlü hareket ettirdiğine dair sade bir özet.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Satranç ve masa oyunları',
        description: 'Kulüp geceleri, çevrimiçi etkinlikler ve özel puan havuzları için maç sonrası puanları hesaplayın.',
        icon: 'mdi:chess-knight',
        points: ['Galibiyet-beraberlik-mağlubiyet desteği', 'Rakip ELO\'su gösterilir', 'Uzun vadeli sıralamalar için uygun']
      },
      {
        title: 'Espor ligleri',
        description: 'Yeteneklerin hızla değişebileceği tekrarlanan bire bir maçlardan sonra oyuncu veya takım sıralamalarını güncelleyin.',
        icon: 'mdi:gamepad-variant',
        points: ['Daha yüksek K faktörü seçenekleri', 'Hızlı puan düzeltmesi', 'Net sürpriz ödülleri']
      },
      {
        title: 'Spor ligleri',
        description: 'Tenis, padel, squash, masa tenisi, badminton ve yerel ligler için adil sıralamaları koruyun.',
        icon: 'mdi:tennis',
        points: ['Basit manuel güncellemeler', 'Kulüpler için uygun', 'Organizatörler için kolay']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'ELO ne zaman iyi bir puan seçimidir',
    items: [
      {
        pro: 'Daha güçlü oyuncuların daha sık kazanması gereken tekrarlanan bire bir maçlar için mükemmeldir.',
        con: 'Bireysel katkının izole edilmesinin zor olduğu takım sporları için daha az idealdir.'
      },
      {
        pro: 'Daha güçlü rakiplere karşı galibiyetler daha fazla puan değerinde olduğu için açıklaması kolaydır.',
        con: 'Tamamen yeni oyuncular için puanların doğru hissettirmesinden önce yeterli maç gerekir.'
      },
      {
        pro: 'Bir elektronik tabloda, kulüp liginde veya lig tablosunda tutulacak kadar basittir.',
        con: 'K faktörü kuralları tutarlı olmalıdır, aksi takdirde sıralamalara güvenmek zorlaşır.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Lig organizatörleri için önemli',
    html: 'K faktörünüzü sezon başlamadan önce seçin ve yayınlayın. Oyuncular, sonuçlar girilmeden önce herkes puanların nasıl hesaplandığını bildiğinde ELO tablolarına daha çok güvenir.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
