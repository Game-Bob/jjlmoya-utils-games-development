import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'streetball-3x3-skor-takipcisi';
const title = 'Premium Streetball 3x3 Skor Takipçisi ve Atış Saati';
const description = 'Entegre 12 saniyelik atış saati, takım faulleri, ani ölüm puanları ve dinamik yarı saha görsel göstergeleri ile FIBA 3x3 Streetball skorlarını takip edin.';

const faq = [
  {
    question: '3x3 Streetball\'da 12 saniyelik atış saati nasıl çalışır?',
    answer: 'FIBA 3x3\'te takımlar topu aldıktan sonra şut denemek için yalnızca 12 saniyeye sahiptir. Atış saati, top değişiminde 12\'ye veya belirli koşullarda hücum ribaundları ve fauller sonrası 14 saniyeye sıfırlanır.',
  },
  {
    question: '3x3 Basketbolda ani ölüm puan sınırı nedir?',
    answer: '21 puana ilk ulaşan takım, oyun saatinde kalan süre ne olursa olsun maçı hemen kazanır. Bu ani ölüm kuralıdır.',
  },
  {
    question: 'Takım faulleri maçı nasıl etkiler?',
    answer: '7. takım faulünden itibaren rakip takıma 2 serbest atış hakkı verilir. 10. ve sonraki faullerde ise rakip 2 serbest atış artı topa sahip olma hakkı kazanır ve ceza durumu başlatılır.',
  },
];

const howTo = [
  {
    name: 'Takım İsimlerini Ayarlayın',
    text: 'Gösterge panelini özelleştirmek için iki streetball takımı için özel isimler girin.',
  },
  {
    name: 'Puanları ve Top Sahipliğini Kaydedin',
    text: 'Etkileşimli asfalt sahaya dokunarak 1 puan (iç saha) veya 2 puan (dış saha) ekleyin ve top sahipliği göstergesini değiştirin.',
  },
  {
    name: 'Atış Saatini Kontrol Edin',
    text: 'Atış saatine dokunarak 12\'ye sıfırlayın, ikincil sıfırlama düğmesine tıklayarak 14\'e ayarlayın veya çift tıklayarak geri sayımı durdurun.',
  },
  {
    name: 'Takım Faullerini Yönetin',
    text: 'Takım faullerini, ceza durumuna geçildiğinde (7+ faul) kırmızıya dönen sayaç ile takip edin.',
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

export const content: StreetballLocaleContent = {
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
      text: 'Ücretsiz Online 3x3 Streetball Skor Tahtası',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hızlı tempolu 3v3 basketbol maçlarında kısa bir atış saatini yönetirken ve takım faullerini takip ederken skor tutmak zor olabilir. Bu ücretsiz online 3x3 streetball skor tahtası, yüksek kontrastlı neon stiliyle endüstriyel bir asfalt teması sunar. 12 saniyelik atış saatini, oyun saatini, faul ceza sistemini ve top sahipliği göstergelerini otomatik olarak yönetir.',
    },
    {
      type: 'title',
      text: 'FIBA 3x3 Streetball Skor ve Atış Saati Kuralları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3 streetball, geleneksel 5v5 basketboldan farklıdır. Maçlar 10 dakikalık tek bir periyot sürer veya bir takım 21 puana ulaştığında hemen biter (ani ölüm). İç saha şutları ve serbest atışlar 1 puan, 6,75m çizgisinin gerisinden atılan şutlar ise 2 puan değerindedir. 12 saniyelik atış saati hızlı hücum oyununu zorunlu kılar ve oyuncular top sahipliği değiştiğinde topu çizginin gerisine çıkarmalıdır.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Arkadaş Maçları',
          description: 'Yerel sahalarda arkadaşlarla sokak basketbolu için hızlı skor takibi.',
          icon: 'mdi:basketball',
          points: ['Basit puan butonları', 'Duyarlı düzen', 'Çevrimdışı çalışır'],
        },
        {
          title: 'Turnuva Oyunu',
          description: 'Resmi 3x3 turnuvaları ve streetball ligleri için mükemmel.',
          icon: 'mdi:trophy-outline',
          points: ['10 dakika geri sayım', '21 puanda ani ölüm', 'Faul ceza durumları'],
        },
        {
          title: 'Hakem Paneli',
          description: 'Hakemlerin hızlı atış saati sıfırlamaları ve top sahipliği yönetimi için tasarlandı.',
          icon: 'mdi:school',
          points: ['12s ve 14s atış saati sıfırlama', 'Sesli uyarı', 'Dokunsal düğme hareketleri'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Etkileşimli Kontroller ve Dokunsal Animasyonlar',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12 Saniyelik Atış Saati</strong> 4 saniyenin altında kırmızı yanıp söner ve ondalık basamakları gösterir, ardından simüle edilmiş bir korna sesi çalar.',
        '<strong>Etkileşimli Beton Yarı Saha</strong> 1 puanlık ve 2 puanlık bölgelere dokunarak skorları doğrudan diyagram üzerinde kaydetmenizi sağlar.',
        '<strong>Faul Sayacı Uyarısı</strong> takım faul cezalarını belirtmek için kırmızıya döner ve titrer (7+ ve 10+ fauller).',
        '<strong>Top Çıkarma Göstergesi</strong> top sahipliği değiştiğinde top çizginin gerisine çıkarılana kadar bir hatırlatma gösterir.',
        '<strong>Mola Zamanlayıcısı</strong> özel sesli uyarılarla 30 saniyelik bir geri sayım başlatır.',
      ],
    },
    {
      type: 'title',
      text: 'Neden Dijital Bir Streetball Takipçisi Kullanmalısınız?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dijital bir skor tahtası, asfaltta skorlar, fauller veya atış saati ihlalleri konusundaki anlaşmazlıkları ortadan kaldırır. Parlak neon rakamlar uzaktan kolayca okunur ve otomatik top sahipliği ve top çıkarma hatırlatmaları maçın kesintisiz bir şekilde akmasını sağlar.',
    },
  ],
  ui: {
    teamA: 'Takım 1',
    teamB: 'Takım 2',
    points: 'Puanlar',
    fouls: 'Fauller',
    timeouts: 'Molalar',
    shotClock: 'Atış Saati',
    reset: 'Sıfırla',
    resetConfirm: 'Maç sıfırlansın mı? Tüm veriler kaybolacak.',
    cancel: 'İptal',
    gameTime: 'Süre',
    possession: 'Top Sahipliği',
    clearBall: 'Topu Çıkar',
    matchWon: 'Maç Kazanıldı',
    timeoutActive: 'Mola',
    penalty: 'Ceza',
    fullscreen: 'Tam Ekran',
    exitFullscreen: 'Tam Ekrandan Çık',
    overtime: 'Uzatma',
    ptsInside: '+1 Puan',
    ptsOutside: '+2 Puan',
    toggleSound: 'Sesi Aç/Kapa',
    soundOn: 'Ses Açık',
    soundOff: 'Ses Kapalı',
  },
};
