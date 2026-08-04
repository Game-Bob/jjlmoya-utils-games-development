import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'penalti-atisari-hesaplayici';
const title = 'Canlı Seri Penaltı Skor Tabela: Futbol Penaltı Atışları';
const description =
  'Futbol seri penaltı atışlarını canlı olarak takip edin. 5 penaltı takibi, matematiksel eleme tespiti, ani ölüm kuralı ve galibiyet kutlaması.';

const faqData = [
  {
    question: 'Seri penaltı atışları ne zaman erken sona erer?',
    answer:
      'Penaltı atışları, bir takımın rakibinin kalan atışlarıyla matematiksel olarak yakalayamayacağı bir gol farkına ulaşmasıyla anında sona erer.',
  },
  {
    question: 'Penaltılarda ani ölüm (Sudden Death) nasıl çalışır?',
    answer:
      'Takım başına 5 penaltı sonrasında eşitlik bozulmazsa, bir takım atana ve diğeri aynı turda kaçırana kadar teker teker penaltı atışlarına devam edilir.',
  },
  {
    question: 'Seri penaltı atışlarında ilk penaltıyı kim atar?',
    answer:
      'Hakem kale seçimi için yazı tura atar, ardından hangi takımın ilk penaltıyı atacağını belirlemek için ikinci bir yazı tura atışı yapar.',
  },
  {
    question: 'Penaltı atışları sırasında kaleci değiştirilebilir mi?',
    answer:
      'Sakatlanan ve devam edemeyen bir kaleci, takımının oyuncu değiştirme hakkı dolmamışsa bildirilen bir yedek kaleciyle değiştirilebilir.',
  },
];

const howToData = [
  {
    name: 'Takım İsimlerini Girin',
    text: 'Penaltı atışları başlamadan önce giriş alanlarına takımların özel isimlerini yazın.',
  },
  {
    name: 'Her Penaltıyı Kaydedin',
    text: 'Her vuruştan sonra GOL veya KAÇTI butonuna basın. Uygulama skoru, göstergeleri ve sırayı otomatik günceller.',
  },
  {
    name: 'Ani Ölüm Moduna Geçiş',
    text: '5 penaltı sonunda eşitlik bozulmazsa tabela otomatik olarak ani ölüm moduna geçer.',
  },
  {
    name: 'Kazananı İlan Edin',
    text: 'Matematiksel galibiyet veya ani ölüm sonucunda animasyonlu şampiyon ekranı kazanan takımı ilan eder.',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Resmi IFAB Seri Penaltı Atışları Kuralları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Seri penaltı atışları (resmi adıyla <em>penaltı noktasından yapılan vuruşlar</em>), IFAB Oyun Kuralları Kural 10 uyarınca berabere biten eleme maçlarında kazananı belirler.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'İlk Penaltı Sayısı' },
        { value: '11m', label: 'Kaleye Uzaklık' },
        { value: '1v1', label: 'Atıcı vs Kaleci' },
        { value: 'ABBA / AB', label: 'Atış Sırası Düzeni' },
      ],
    },
    {
      type: 'tip',
      title: 'Matematiksel Eleme Kuralı',
      html: 'Bir takım rakibin kalan penaltılarıyla ulaşamayacağı bir gol farkına ulaştığında hakem penaltı atışlarını derhal bitirir.',
    },
    {
      type: 'title',
      text: 'Normal Seri vs Ani Ölüm Karşılaştırması',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Normal Seri (5 Penaltı)',
          description: 'Takım başına 5 dönüşümlü penaltı atışı. Erken bitiş yalnızca matematiksel olarak geri dönüş imkansızsa gerçekleşir.',
        },
        {
          title: 'Ani Ölüm Evresi',
          description: '5. turdan sonraki tekli turlar. Eşit sayıda vuruş sonrasındaki her gol farkı anında galibiyeti getirir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Önemli IFAB Kuralları Özeti',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Kural / Gereksinim', 'Resmi IFAB Standardı'],
      rows: [
        ['Katılmaya Hak Kazananlar', 'Yalnızca bitiş düdüğü çaldığında sahada bulunan oyuncular penaltı atabilir.'],
        ['Kalecinin Pozisyonu', 'Vuruş anında en azından bir ayağının bir kısmını kale çizgisi üzerinde tutmalıdır.'],
        ['Koşuda Aldatma', 'Koşu sırasında aldatma hareketine izin verilir; koşu tamamlandıktan sonra yapılan aldatma cezalandırılır.'],
        ['Oyuncu Sayısı Eşitliği', 'Kırmızı kart nedeniyle bir takımın oyuncu sayısı azsa, rakip takım da sayıyı eşitlemek için oyuncu çıkarmalıdır.'],
      ],
    },
    {
      type: 'title',
      text: 'Seri Penaltı Atışlarının Avantaj ve Dezavantajları',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Formatın Değerlendirilmesi',
      items: [
        {
          pro: 'Öngörülebilir bir zaman dilimi içinde kesin bir kazanan garanti eder.',
          con: 'Aşırı yüksek psikolojik baskı 120 dakikalık takım performansını gölgeleyebilir.',
        },
        {
          pro: 'Taraftarlar için maksimum heyecan ve dramatik anlar sunar.',
          con: 'Tek bir oyuncunun kaçırması orantısız bir sorumluluk yükleyebilir.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Ev Sahibi',
    teamBLabel: 'Deplasman',
    scoreGoal: 'GOL',
    scoreMiss: 'KAÇTI',
    undo: 'Geri Al',
    reset: 'Sıfırla',
    suddenDeath: 'Ani Ölüm',
    regularRounds: 'Normal Tur',
    roundLabel: 'Tur',
    turnLabel: 'Atış Sırası',
    winnerTitle: 'Kazanan Belli Oldu',
    unreachableLead: 'Normal turda yakalanamaz fark',
    regularRoundsWin: '5 normal penaltı sonunda galibiyet',
    suddenDeathWin: 'Ani ölümde galibiyet',
    statusPending: 'Bekliyor',
    statusScored: 'Gol',
    statusMissed: 'Kaçtı',
  },
};
