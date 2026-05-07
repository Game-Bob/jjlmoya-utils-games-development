import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'spor-skor-tablosu';
const title = 'Online Spor Skor Tablosu: Ücretsiz Skor Sayacı ';
const description =
  'Mobil cihazlar için dev düğmeli dijital skor tablosu. Padel, masa tenisi ve futbol için ideal. Oyunun ortasında can sıkıcı reklamlar yok. Basit ve hızlı.';

const faqData = [
  {
    question: 'İnternet bağlantısı olmadan çalışır mı?',
    answer:
      'Evet, sayfa yüklendikten sonra skor tablosu tamamen çevrimdışı çalışır. Maç sırasında veri veya WiFi\'ye ihtiyacınız yoktur. Her şey tarayıcınızda yerel olarak kaydedilir.'
  },
  {
    question: 'Skor tablosunu tenis ve padel için kullanabilir miyim?',
    answer:
      'Evet, Tenis/Padel modu 15-30-40-AD dizisini otomatik olarak yönetir ve resmi kurallara göre setleri ve oyunları takip eder. Hazırlık maçları için mükemmeldir.'
  },
  {
    question: 'Tam ekran yapılabilir mi?',
    answer:
      'Evet, tarayıcınızdan tam ekran modunu etkinleştirebilirsiniz (PC\'de F11 veya mobilde tam ekran düğmesi). Maksimum görünürlük için sayılar ekranın %80\'ini kaplar.'
  },
  {
    question: 'Hata yaparsam puanı nasıl düzeltirim?',
    answer:
      'Her oyuncu kartında puan eksiltmek için ayrı bir düğme vardır. Tüm skor tablosunu yeniden başlatmak zorunda kalmadan hataları hızla düzeltebilirsiniz.'
  },
  {
    question: '1, 2 ve 3 puanlık basketler için basketbol modunda çalışır mı?',
    answer:
      'Evet, Basketbol modunda herhangi bir oyunu fazladan dokunuş olmadan hızlıca puanlamak için özel +1, +2 ve +3 düğmeleri görünür.'
  },
  {
    question: 'Skor tablosu masa tenisinde servisi otomatik olarak yönetiyor mu?',
    answer:
      'Evet, Masa Tenisi modunda servis göstergesi resmi ITTF kurallarına göre her 2 puanda bir (veya deuce durumunda her puanda bir) otomatik olarak değişir.'
  },
];

const howToData = [
  {
    name: 'Sporunuzu seçin',
    text: 'Üstteki seçiciden sporu seçin: Serbest, Tenis, Padel, Masa Tenisi, Voleybol veya Basketbol.'
  },
  {
    name: 'İsimleri özelleştirin',
    text: 'Oyuncu veya takım isimlerini değiştirmek için "EV SAHİBİ" veya "DEPLASMAN" üzerine dokunun.'
  },
  {
    name: 'Tek dokunuşla puan ekleyin',
    text: 'Puan eklemek için dev skor tablosu alanına dokunun. Basketbolda +1, +2 veya +3 düğmelerini kullanın.'
  },
  {
    name: 'Servisi belirtin',
    text: 'Kimin servis attığını işaretlemek için alt köşedeki servis düğmesini kullanın. Sarı gösterge otomatik olarak görünür.'
  },
  {
    name: 'Hataları düzeltin',
    text: 'Yanlışlıkla puan eklediyseniz "−" düğmesini kullanın. Tüm skor tablosunu yeniden başlatmanıza gerek yoktur.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: 'Cebinizdeki Dijital Hakem',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Maçın heyecanıyla skoru karıştırmak kolaydır. "4-3 müydü yoksa 3-4 mü?". Bu skor tablosu, bu tür tartışmaları başlamadan bitirmek için tasarlandı. Neredeyse tüm kartı kaplayan <strong>dev düğmeler</strong> içeren arayüzü ile ekrana bakmadan, sadece yedek kulübesindeki telefona kolunuzu uzatarak puan ekleyebilirsiniz.'
    },
    {
      type: 'title',
      text: 'Akıllı Spor Seçici',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tenis / Padel Modu',
          description:
            'Set ve Oyun sayacı içeren uyarlanmış arayüz. Sistem 15-30-40-AD dizisini otomatik olarak yönetir.',
          icon: 'mdi:tennis',
          points: ['Resmi kurallar', 'Avantaj yönetimi', 'Set sayacı']
        },
        {
          title: 'Basketbol Modu',
          description:
            'Skor tablosu sporu algılar ve arayüzünü değiştirir. Özel +1, +2 ve +3 düğmeleri.',
          icon: 'mdi:basketball',
          points: ['Hızlı üçlükler', 'Serbest atışlar', 'Ekstra dokunuş yok']
        },
        {
          title: 'Masa Tenisi Modu',
          description:
            'Servis sırasının kimde olduğunu ezberlemeyi unutun. Görsel gösterge her 2 puanda bir otomatik olarak değişir.',
          icon: 'mdi:table-tennis',
          points: ['ITTF kuralları', 'Servis rotasyonu', 'Deuce modu (11 sayı)']
        },
      ]
    },
    {
      type: 'title',
      text: 'Spor İçin Tasarlanmış Özellikler',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Yüksek Görünürlük:</strong> Güneş altında maksimum okunabilirlik için ekranın %80\'ini kaplayan sayılar.',
        '<strong>Düzenlenebilir İsimler:</strong> Oyuncu isimlerini ayarlamak için "EV SAHİBİ" veya "DEPLASMAN" üzerine dokunun.',
        '<strong>Hata Önleme:</strong> Yeniden başlatmadan hataları hızlıca düzeltmek için ayrı eksi düğmesi.',
        '<strong>Çevrimdışı Çalışır:</strong> Yüklendikten sonra maç sırasında internete gerek yoktur.',
      ]
    },
  ],
  ui: {
    playerA: 'EV SAHİBİ',
    playerB: 'DEPLASMAN',
    swapSides: 'Taraf Değiştir',
    reset: 'Sıfırla',
    serve: 'Servis',
    sets: 'Setler',
    games: 'Oyunlar',
    victory: 'GALİBİYET!',
    newGame: 'Yeni Oyun',
    continueGame: 'Oynamaya Devam Et',
    resetConfirm: 'Skor tablosu sıfırlansın mı?',
    sportSimple: 'Serbest (Futbol, SOS...)',
    sportTennis: 'Tenis',
    sportPadel: 'Padel',
    sportPingpong: 'Masa Tenisi',
    sportVolleyball: 'Voleybol',
    sportBasket: 'Basketbol'
  }
};
