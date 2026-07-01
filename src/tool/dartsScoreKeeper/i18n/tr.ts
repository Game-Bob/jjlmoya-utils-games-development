import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'dart-skor-takipcisi';
const title = 'Çevrimiçi Dart Skor Takipçisi: Leg ve Set Takipçisi';
const description = 'Leg ve set puanlamasıyla dart maçlarını takip edin. Canlı checkout hesaplamaları ve istatistiklerle 501 ve 301 maçları için ücretsiz çevrimiçi dart skor takipçisi.';

const faqData = [
  {
    question: '501 ve 301 dart puanlaması nasıl çalışır?',
    answer: 'Oyuncular sabit 501 veya 301 puanla başlar. Her oyuncu sırayla üç dart atar ve bu atışların toplam değeri puanlarından düşülür. Amaç tam olarak sıfır puana ulaşmaktır. Double Out kuralı etkinse, son kazanan dart çift segmentte veya iç bullseye\'da durmalıdır.',
  },
  {
    question: 'Dartta bust nedir ve ne zaman olur?',
    answer: 'Bust, bir oyuncunun kalan toplamından daha fazla puan alması veya Double Out kuralı etkinken puanının tam olarak bir puana düşmesi durumunda oluşur. Bir oyuncu bust yaptığında, turu hemen biter ve puanı o turun başındaki toplama sıfırlanır.',
  },
  {
    question: 'Dart ortalaması nasıl hesaplanır?',
    answer: 'Dart ortalaması, toplam kazanılan puanın toplam atılan dart sayısına bölünmesi ve sonucun üçle çarpılmasıyla hesaplanır. Bu, bir oyuncunun standart üç dartlık tur başına elde ettiği ortalama puanı temsil eder.',
  },
  {
    question: 'Dartta checkout nedir?',
    answer: 'Checkout, kalan puanı sıfıra düşürmek ve legi kazanmak için gereken belirli atış kombinasyonudur. Profesyonel skor takipçileri, 170 ve altındaki puanlar için checkout önerileri göstererek oyunculara hangi tekli, çiftli veya üçlü segmentleri hedefleyecekleri konusunda rehberlik eder.',
  },
];

const howToData = [
  {
    name: 'Başlangıç Puanını ve Kuralları Seçin',
    text: 'Başlangıç puanı olarak 501 veya 301\'i seçin ve istediğiniz oyun seviyesine göre Double Out kuralını açıp kapatın.',
  },
  {
    name: 'Oyuncu İsimlerini Girin',
    text: 'İsimleri özelleştirmek için skor takipçisinin üst kısmındaki oyuncu adı alanlarına tıklayın. Değerler tarayıcınızda otomatik olarak kaydedilecektir.',
  },
  {
    name: 'Atılan Dartları Kaydedin',
    text: 'Atışlarınızı kaydetmek için etkileşimli tuş takımını kullanın veya dart tahtası sektörlerine doğrudan dokunun. Önce çarpanı (Tekli, Çiftli veya Üçlü) ve ardından isabet eden sayıyı seçin.',
  },
  {
    name: 'Checkout Tavsiyelerini Takip Edin',
    text: 'Kalan puanınız 170\'in altına düştüğünde, legi bitirmek için en uygun hedefleri görmek üzere checkout paneline bakın.',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: 'Ücretsiz Çevrimiçi Dart Skor Takipçisi ve Maç Takipçisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dartta puan yönetimi hızlı zihinsel aritmetik ve odaklanma gerektirir. Bu dijital dart leg takipçisi tüm hesaplamaları sizin için yaparak tamamen atmaya odaklanmanızı sağlar. İster yalnız pratik yapın ister arkadaşlarınızla rekabetçi bir maç oynayın, bu skor takipçisi puanları, legleri, setleri, atış ortalamalarını ve double out checkout hedeflerini takip eder.',
    },
    {
      type: 'title',
      text: 'Standart Dart Puanlama Formatları Açıklandı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dart maçları legler ve setler halinde oynanır. Küresel olarak en popüler formatlar 501 ve 301\'dir, her ikisi de oyuncuların puanlarını sıfıra indirdiği çıkarma oyunlarıdır.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '501 Turnuvası',
          description: 'Dünya çapında profesyonel turnuvalar için standart format.',
          icon: 'mdi:trophy-outline',
          points: ['Standart başlangıç puanı', 'Double out gerekli', 'Yüksek puan odağı'],
        },
        {
          title: '301 Günlük',
          description: 'Hızlı günlük maçlar için ideal olan çıkarma oyununun daha hızlı versiyonu.',
          icon: 'mdi:clock-outline',
          points: ['Daha hızlı oyun temposu', 'Double in seçeneği yaygın', 'Pratik için harika'],
        },
        {
          title: 'Kriket Modu',
          description: 'Pub ve günlük liglerde popüler olan stratejik hedef vurma oyunu.',
          icon: 'mdi:bullseye',
          points: ['15-20 numaralarına odaklanma', 'Bullseye takibi', 'Alternatif kural sistemi'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Dart Checkout Matematiğini Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dartta mümkün olan en yüksek checkout 170\'tir ve Triple 20, Triple 20 ve Double Bull atarak elde edilir. Puanınız 170 veya altına ulaştığında, belirli bir dart dizisinin oyunu kazanabileceği checkout aralığına girersiniz.',
    },
    {
      type: 'table',
      headers: ['Puan', 'Dart 1 Hedefi', 'Dart 2 Hedefi', 'Dart 3 Hedefi'],
      rows: [
        ['170', 'Triple 20 (60)', 'Triple 20 (60)', 'Double Bull (50)'],
        ['120', 'Triple 20 (60)', 'Single 20 (20)', 'Double 20 (40)'],
        ['100', 'Triple 20 (60)', 'Single 20 (20)', 'Double 10 (20)'],
        ['80', 'Triple 20 (60)', 'Double 10 (20)', '-'],
        ['40', 'Double 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Bu Dijital Dart Skor Takipçisinin Özellikleri',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Etkileşimli Giriş Yöntemleri</strong> görsel radyal dart tahtası ile hızlı sayısal tuş takımı arasında geçiş.',
        '<strong>Akıllı Checkout Motoru</strong> legleri bitirmek için canlı kombinasyonlar gösterir.',
        '<strong>Bust Algılama</strong> geçersiz atışları otomatik olarak sıfırlar ve kullanıcıyı uyarır.',
        '<strong>Tur Geçmişi Günlüğü</strong> önceki turları ve kalan puanları takip eder.',
        '<strong>Detaylı Maç İstatistikleri</strong> üç dart ortalamalarını dinamik olarak hesaplar.',
      ],
    },
    {
      type: 'title',
      text: 'Manuel vs Dijital Dart Takibi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Geleneksel kara tahtalar yazma, silme ve sürekli hesaplama gerektirir. Bu çevrimiçi skor takipçisi hata riskini ortadan kaldırır, ortalamaları otomatikleştirir ve checkout hedeflerini sunar. Cihazınızı tahtanın yanına koyun, ekranı aktif tutmak için tam ekran moduna geçin ve zahmetsiz puanlamanın keyfini çıkarın.',
    },
  ],
  ui: {
    playerA: 'Oyuncu 1',
    playerB: 'Oyuncu 2',
    winnerLabel: 'ŞAMPİYON',
    reset: 'Sıfırla',
    resetConfirm: 'Maç sıfırlansın mı? Tüm veriler kaybolacak.',
    cancel: 'İptal',
    fullscreen: 'Tam ekran',
    exitFullscreen: 'Tam ekrandan çık',
    leg: 'Leg',
    set: 'Set',
    average: 'Ort',
    checkout: 'Checkout',
    busted: 'Bust',
    dart: 'Dart Atışı',
    score301: '301',
    score501: '501',
    doubleOut: 'Double Out',
    noCheckout: 'Checkout Yok',
  },
};
