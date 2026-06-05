import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'basketbol-skor-tablosu';
const title = 'Basketbol Skor Tablosu Çevrimiçi : Ücretsiz Skor Takip';
const description =
  '+1, +2 ve +3 butonlarıyla ücretsiz çevrimiçi basketbol skor tablosu. Sokak basketbolu, okul maçları ve yerel lig karşılaşmalarında skor tutun. Kayıt yok, indirme yok, çevrimdışı çalışır.';

const faqData = [
  {
    question: 'Basketbol maçında nasıl skor tutulur?',
    answer:
      'Basketbolda üç skor değeri vardır: serbest atış (+1 sayı), saha içi sayı (+2 sayı) ve üç sayılık atış (+3 sayı). Bir takım sayı attığında ilgili butona basın. Skor tablosu toplamı otomatik olarak takip eder. Bir hatayı düzeltmek için skorun yanındaki eksi butonunu kullanın.',
  },
  {
    question: 'Basketbolda +1, +2 ve +3 arasındaki fark nedir?',
    answer:
      '+1, faul sonrası verilen serbest atışlar içindir. +2, üç sayı çizgisi içinden atılan normal bir saha içi sayıdır. +3, üç sayı çizgisinin gerisinden yapılan atışlar içindir. Her değer için ayrı butonlar olması, basit bir sayaçtan daha hızlı skor tutmanızı ve hataları azaltmanızı sağlar.',
  },
  {
    question: 'Bu skor tablosunu gerçek bir basketbol maçında kullanabilir miyim?',
    answer:
      'Evet. Skor tablosu gerçek maçlar için tasarlanmıştır: sokak basketbolu, okul maçları, yerel lig karşılaşmaları ve antrenman maçları. Skoru tarayıcınızda kaydeder, böylece sayfayı yeniden yükleyebilir ve maç durumunu kaybetmezsiniz.',
  },
  {
    question: 'Sokak basketbolu veya pickup maçlarında nasıl skor tutarım?',
    answer:
      'Sokak basketbolu genellikle 1 ve 2 sayılık (veya sadece 1 sayılık) atışlarla belirli bir hedef skora (21 veya 16 gibi) oynanır. Bu skor tablosu her format için çalışır. Normal sayılar için +1, çizgi gerisinden atışlar için +2 kullanın. Kendi kazanma koşulunuzu belirleyin ve hata yaparsanız eksi butonunu kullanın.',
  },
  {
    question: 'Mobil cihazda çevrimdışı çalışır mı?',
    answer:
      'Evet. Sayfa yüklendikten sonra skor tablosu tamamen çevrimdışı çalışır. Açık hava sahaları, WiFi\'siz spor salonları veya zayıf sinyal olan her yer için mükemmeldir. Tam ekran moduna geçip ekranın uyanık kalmasını sağlayabilirsiniz, böylece maç sırasında kilitlenmez.',
  },
  {
    question: 'Takım faullerini ve bonusu nasıl takip ederim?',
    answer:
      'Bu skor tablosu skorun kendisine odaklanır. Takım faulleri için takım adı alanlarını kullanarak manuel olarak takip edebilirsiniz (örneğin, "EV SAHİBİ"ni "EV SAHİBİ 3F" olarak değiştirin). Resmi maçlar için bu aracı ayrı bir faul takipçisiyle birlikte kullanmanızı öneririz.',
  },
  {
    question: 'Bu basketbol skor takip aracını telefonumda kullanabilir miyim?',
    answer:
      'Evet. Arayüz öncelikle mobil için tasarlanmıştır. +1, +2 ve +3 butonları büyüktür ve başparmağınızla kolayca basılabilir. Tam ekran modu tarayıcı arayüzünü gizler, böylece skor tablosu tüm ekranı kaplar ve ekran uyku kilidi telefonunuzun kapanmasını önler.',
  },
];

const howToData = [
  {
    name: 'Takımlarınızı adlandırın',
    text: 'Takım adlarını girmek için EV SAHİBİ veya DEPLAZMAN üzerine dokunun. Adlar tarayıcınızda otomatik olarak kaydedilir, böylece sayfayı yeniden yükleseniz bile kalıcı olurlar.',
  },
  {
    name: 'Serbest atış kaydedin (+1)',
    text: 'Bir oyuncu serbest atış yaptığında +1 butonuna basın. Her serbest atış bir sayı değerindedir ve genellikle faul sonrası verilir.',
  },
  {
    name: 'Saha içi sayı kaydedin (+2)',
    text: 'Üç sayı çizgisi içinden normal bir basket için +2 butonuna basın. Bu, basketbolda en yaygın skor eylemidir.',
  },
  {
    name: 'Üç sayılık atış kaydedin (+3)',
    text: 'Bir oyuncu üç sayı çizgisinin gerisinden sayı yaptığında +3 butonuna basın. Üç sayılık atış kırmızı bir butonla vurgulanır ve ekstra bir kutlama efekti tetikler.',
  },
  {
    name: 'Skor hatasını düzeltin',
    text: 'Yanlışlıkla sayı eklediyseniz, çıkarmak için eksi butonuna basın. Sıfırın altına düşmez. Küçük bir hata için tüm oyunu yeniden başlatmaya gerek yoktur.',
  },
  {
    name: 'Devrede tarafları değiştirin',
    text: 'Devrede EV SAHİBİ ve DEPLAZMAN pozisyonlarını değiştirmek için takas butonunu kullanın. Hem skorlar hem de takım adları takas edilir, böylece hiçbir veri kaybetmezsiniz.',
  },
  {
    name: 'Yeni bir oyun başlatın',
    text: 'Tüm skorları temizlemek ve yeni bir oyun başlatmak için sıfırlama butonuna basın ve onaylayın. Takım adları korunur, böylece onları tekrar yazmak zorunda kalmazsınız.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Ücretsiz Çevrimiçi Basketbol Skor Tablosu : Kayıt Yok, İndirme Yok',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketbolda skor tutmak basit olmalı. Serbest atış +1\'dir. Saha içi sayı +2\'dir. Üç sayılık atış +3\'tür. Bu skor tablosu size her değer için özel bir buton sunar, böylece dokunup oynamaya devam edebilirsiniz. Menü yok, mod yok, yapılandırma yok. Sadece takımlarınızı adlandırın ve skor yapmaya başlayın. Skor otomatik olarak tarayıcınıza kaydedilir, böylece sayfayı yeniden yükleyebilir, telefonunuzu kapatabilir veya daha sonra geri dönebilirsiniz : oyun kaybolmaz.',
    },
    {
      type: 'title',
      text: 'Neden Özel Bir Basketbol Skor Takip Aracı Genel Bir Sayaca Karşı Daha İyidir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çoğu skor takip uygulaması, iki veya üç sayı eklemek için aynı butona birden çok kez basmanızı zorunlu kılar. Bu fazladan dokunuşlar 40 dakikalık bir maçta birikir ve hızlı hücum veya ani oyuncu değişikliği sırasında sayıyı kaybetme riskini artırır. Bu skor tablosunda <strong>üç ayrı buton</strong> bulunur : her skor değeri için bir tane : böylece her skor eyleminde tam olarak bir kez dokunursunuz. +3 butonu kırmızı yanar ve üç sayılık atışın heyecanına uygun patlayıcı bir animasyon başlatır.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pickup & Sokak Basketbolu',
          description:
            '1 ve 2 sayılarla 16 veya 21\'e oynanan oyunlar. Bu skor tablosu her iki değeri de işler. Sokak kurallarıyla oynarken sadece +1 ve +2\'yi kullanın ve +3\'ü yok sayın.',
          icon: 'mdi:basketball',
          points: ['Kurulum gerektirmez', 'Her hedef skor için çalışır', 'Ekran uyanık kalır'],
        },
        {
          title: 'Okul & Yerel Lig',
          description:
            'Serbest atış, saha içi sayı ve üç sayılık atışlarla standart FIBA veya NFHS kuralları. Özel butonlar, onu resmi bir skorer için yeterince hızlı kılar.',
          icon: 'mdi:school',
          points: ['Her üç skor değeri', 'Düzenlenebilir takım adları', 'Tam ekran telefonu uyanık tutar'],
        },
        {
          title: 'Antrenman & Alıştırma',
          description:
            'Şut çalışmaları, maç içi skor veya bire bir oyunlar sırasında isabetli atışları takip edin. Geçmiş kaydedilmez, böylece her seans temiz başlar.',
          icon: 'mdi:whistle',
          points: ['Alıştırmalar arası hızlı sıfırlama', 'Salonda çevrimdışı çalışır', 'Hesap gerekmez'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Basketbolda Skor Sistemi Nasıl Çalışır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketbolda üç skor değeri vardır. Bir <strong>serbest atış</strong> 1 sayı değerindedir ve faul sonrası serbest atış çizgisinden atılır. Bir <strong>saha içi sayı</strong> 2 sayı değerindedir ve normal oyun sırasında üç sayı çizgisi içinden yapılan her basket için geçerlidir. Bir <strong>üç sayılık atış</strong>, çizginin gerisinden yapılan atışlar için 3 sayı değerindedir. Çoğu profesyonel ve üniversite ligi her üç değeri de kullanır. Sokak basketbolu genellikle sadece 1 ve 2 sayı veya sadece 1 sayı kullanır. Bu skor tablosu her formata uyum sağlar.',
    },
    {
      type: 'title',
      text: 'Her Formatta Oynayın: Skorla Kazanma, Süreyle Kazanma veya Hedefe İlk Ulaşan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketbolda sabit bir skor sınırı yoktur : oyun süre bittiğinde sona erer. Ancak pickup basketbolunda genellikle ilk 16, 21 veya 11\'e (2 farkla kazanma) gibi hedef skorlar kullanılır. Bu skor tablosu bir kazanma koşulu dayatmaz çünkü basketbol skorla bitmez. Oyunun ne zaman bittiğine siz karar verirsiniz ve sıfırlama butonu bir sonraki oyun için tahtayı temizler. Takım adları korunur, böylece yeniden yazmadan art arda oyunlar oynayabilirsiniz.',
    },
    {
      type: 'title',
      text: 'Bu Skor Tablosunu Farklı Kılan Nedir',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Üç özel buton</strong> : +1, +2 ve +3. Değerler arasında geçiş yok, uzun basma yok, fazladan dokunuş yok.',
        '<strong>Düzenlenebilir takım adları</strong> : adı değiştirmek için üzerine dokunun. Adlar tarayıcınızda kaydedilir ve sayfa yenilemelerinde kalıcı olur.',
        '<strong>Ekran uyku kilidi</strong> : tam ekrana geçtiğinizde, skor tablosu telefon ekranınızın kapanmasını önler. Sadece ekranı canlı tutmak için artık ekrana dokunmanız gerekmez.',
        '<strong>Tam ekran modu</strong> : tarayıcı sekmelerini ve adres çubuğunu gizler, böylece skor tablosu tüm ekranı kaplar. Tam ekran butonuna bir kez basın ve araç genişler.',
        '<strong>Öncelik çevrimdışı</strong> : ilk yüklemeden sonra skor tablosu internet bağlantısı olmadan çalışır. Reklam yok, izleyici yok, veri toplama yok.',
        '<strong>Tatmin edici geri bildirim</strong> : her dokunuş bir skor animasyonu, uçuşan parçacıklar ve desteklenen cihazlarda hafif bir titreşim tetikler. +3 ekstra bir patlama efekti alır.',
        '<strong>Oyun durumu kaydedilir</strong> : sayfayı yeniden yükleyin, tarayıcıyı kapatın veya yarın geri gelin. Skorlar ve takım adları yerel olarak saklanır.',
      ],
    },
    {
      type: 'title',
      text: 'Basketbol Skor Tablosu vs. Kağıt Skor Cetveli',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kağıt skor cetveli işe yarar, ancak bir kalem, düz bir yüzey ve aynı anda hem yazıp hem de maçı izleyebilen birini gerektirir. Dijital bir skor tablosu her üç sorunu da çözer. Butonlar bakmadan basmak için yeterince büyüktür. Rakamlar sahanın diğer tarafından okunabilir. Skor asla lekelenmez, kaybolmaz veya yanlışlıkla silinmez. Ve kağıdın aksine, bu skor tablosu oyun durumunu kaydeder, böylece devrede kapatıp geri dönebilirsiniz.',
    },
  ],
  ui: {
    playerA: 'EV SAHİBİ',
    playerB: 'DEPLAZMAN',
    swapSides: 'Tarafları Değiştir',
    reset: 'Sıfırla',
    resetConfirm: 'Oyun sıfırlansın mı? Tüm sayılar kaybedilecek.',
    cancel: 'İptal',
    fullscreen: 'Tam Ekran',
    exitFullscreen: 'Tam Ekrandan Çık',
    winnerLabel: 'KAZANAN',
  },
};
