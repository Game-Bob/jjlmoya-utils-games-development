import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'beyzbol-skor-takip';
const title = 'Premium Beyzbol ve Softbol Skor Takipcisi ile Elmas Goruntuleyici';
const description = 'Canli beyzbol skorlarini kosu, vurus ve hata sayilariyla takip edin. Baz kosucu pozisyonlari, top strike sayaci ve devre devre gecmis tablosu iceren gorsel bir elmas.';

const faqData = [
  {
    question: 'Beyzbolda sayac nasil calisir?',
    answer: 'Sayac, mevcut vurucudaki top ve strike sayisini gosterir. Toplar yuruyus icin 4e kadar gider. Strikeout icin 3e kadar gider. Genc ligleri icin ayarlanabilir limitler.',
  },
  {
    question: 'Interaktif beyzbol elmasi neyi gosterir?',
    answer: 'Elmas birinci, ikinci ve ucuncu kareyi gosterir. Bir kareye dokunmak, o karede bir kosucu oldugunu belirtmek icin onu turuncuya boyar. Vuruslarda kosucular otomatik olarak ilerler.',
  },
  {
    question: 'Kosular, vuruslar ve hatalar nasil takip edilir?',
    answer: 'R H E matrisi her iki takim icin kosu, vurus ve hata sayilarini gosterir. Devre devre gecmis, skorun tum devreler boyunca nasil olustugunu gosterir.',
  },
];

const howToData = [
  {
    name: 'Her Atisi Kaydet',
    text: 'Her atisi kaydetmek icin Strike, Top, Foul, Vurus veya Out butonuna dokunun. Sayac, sonuca gore otomatik olarak guncellenir.',
  },
  {
    name: 'Baz Kosucularini Yonetin',
    text: 'Kosuculari yerlestirmek veya cikarmak icin elmastaki karelere dokunun. Bir vurusta kosucular otomatik olarak ilerler.',
  },
  {
    name: 'Devre Ilerlemesini Takip Edin',
    text: 'Devre ekrani mevcut yari devreyi gosterir. Uc outtan sonra oyun otomatik olarak ust ve alt yarilar arasinda gecis yapar.',
  },
  {
    name: 'Skor Tablosunu Inceleyin',
    text: 'Tam skor ilerlemesini gormek icin R H E ozetini ve kaydirilabilir devre devre gecmis tablosunu kontrol edin.',
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
    image: undefined,
    url: undefined,
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Beyzbol Skor Takipcisi Ucretsiz Online: Canli Elmas ile Kosu Vurus ve Hata Takibi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir sonraki maciniz icin guvenilir bir beyzbol skor takipcisine mi ihtiyaciniz var? Bu ucretsiz online arac, gercek zamanli baz kosucu pozisyonlarini gosteren canli interaktif bir elmas ile birlikte kosulari, vuruslari ve hatalari takip eder. Her atis onemlidir ve dijital skorboardumuz sayaci, outlari veya devreyi asla kaybetmemenizi saglar. Ister little league antrenorlugu yapin, ister bir softbol turnuvasinda skor tutun, ister bir lise varsity macini yonetin, bu arac tum skor tablosunu otomatik olarak halleder, boylece siz sahada olan bitene odaklanabilirsiniz.',
    },
    {
      type: 'title',
      text: 'Bu Beyzbol Skorboardu Size Nasil Zaman Kazandirir ve Hatalari Onler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuel skor tutma, ozellikle hizli oyunlarda hatalara aciktir. Kacirilan bir strike veya gozden kacan bir kosucu tum skor tablosunu bozabilir. Bu dijital skor takipcisi, sikici kisimlari otomatiklestirir. Strike, Top, Foul, Vurus veya Out butonuna dokunun ve board sayaci aninda guncellesin. Bir vurucu yuruyuse ciktiginda veya strikeout oldugunda, arac sayaci otomatik olarak sifirlar. Uc outtan sonra, devreyi ustten alta cevirir ve kosulari kaydeder. R H E matrisi ve devre devre gecmis tablosu, oyunun tam bir resmini bir bakista size sunar.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Canli Atis Sayaci',
          description: 'Her vurus icin yuruyus ve strikeout tespiti ile otomatik top ve strike takibi.',
          icon: 'mdi:baseball',
          points: ['Toplar 4e kadar sayilir', 'Strikelar 3e kadar sayilir', 'Kararda otomatik sifirlama'],
        },
        {
          title: 'Kosucu Yonetimi',
          description: 'Interaktif elmas, birinci, ikinci veya ucuncu karede kimin oldugunu tam olarak gosterir.',
          icon: 'mdi:diamond-stone',
          points: ['Kosucu koymak icin karelere dokunun', 'Dolu oldugunda gorsel vurgu', 'Devre degisiminde temizlenir'],
        },
        {
          title: 'Tam Skor Tablosu',
          description: 'Kaydirilabilir devre devre skor gecmisi ile tam R H E istatistikleri.',
          icon: 'mdi:scoreboard-outline',
          points: ['Kosu, vurus ve hatalar', 'Devre devre tablo', 'Her iki takim icin toplamlar'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bu Beyzbol Skor Takipcisine Kimler Ihtiyac Duyar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu arac, skor tutmasi gereken herkes icin uretilmistir: oyunculari icin net bir dijital ekran isteyen genc beyzbol antrenorleri, ozel bir skor tutucu olmadan maclari yoneten softbol ligi gonulluleri, tribunden cocuklarinin maclarini takip eden ebeveynler ve ikincil bir dogrulama sistemi isteyen hakemler. Arayuz, dugoutta tutulan akilli telefonlardan citte monte edilmis tabletlere veya banktaki dizustu bilgisayarlara kadar her cihazda calisir. Kurulum gerektirmez, tarayiciyi acin ve skor tutmaya baslayin.',
    },
    {
      type: 'list',
      items: [
        '<strong>Otomatik Sayac Yonetimi:</strong> Toplar ve strikelar yuruyusler, strikeoutlar, vuruslar ve outlar sonrasi otomatik olarak sifirlanir. Manuel sifirlama gerektirmez.',
        '<strong>Dokunmatik Elmas:</strong> Kosuculari yerlestirmek veya cikarmak icin birinci, ikinci veya ucuncu kareye dokunun. Elmas, dolu kareleri gostermek icin altin renginde yanar.',
        '<strong>Devre Devre Skorlar:</strong> Her yari devre kaydirilabilir tabloda kaydedilir. Her takimin dokuz devre boyunca nasil skor yaptigini tam olarak gorun.',
        '<strong>Sifir Kurulum:</strong> Sayfayi acin ve hemen skor tutmaya baslayin. Skorlarin ustundeki etiketlere dokunarak takim isimlerini ozellestirin.',
      ],
    },
    {
      type: 'title',
      text: 'Beyzbol Skor Tutma Basitlestirildi: Sayac, Elmas ve Skor Tablosu Tek Bir Yerde',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beyzbolda skor tutmak, ayni anda bircok seyi takip etmeyi gerektirir: top ve strike sayaci, out sayisi, hangi karelerde kosucu oldugu, her takimin kosulari ve mevcut devre. Bunlardan herhangi birini kaybetmek karisikliga ve hatali kayitlara neden olur. Bu arac, her seyi tek bir ekranda birlestirir. Sayac noktalari top ve strikelari bir bakista gosterir. Elmas, baz kosucu pozisyonlarini gosterir. R H E tablosu tam skor tablosunu goruntuler. Devre tablosu ise tam skor gecmisini gostermek icin yatay olarak kayar. Her sey her dokunusta gercek zamanli olarak guncellenir.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Antrenorler', html: '<p>Dugouttan tum takiminizin gorebilecegi net bir dijital skorboard tutun.</p>' },
        { type: 'card', title: 'Gonulluler', html: '<p>Skor tutma deneyimi gerekmez. Arac, tum karmasik takibi otomatik olarak halleder.</p>' },
        { type: 'card', title: 'Ebeveynler', html: '<p>Telefonunuzda guvenilir gercek zamanli skor gosterimi ile maci tribunden takip edin.</p>' },
        { type: 'card', title: 'Oyuncular', html: '<p>Performans analizi icin mac sonrasi devre devre skorlari inceleyin.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Beyzbol Skor Takipcisi',
    description: 'Elmas goruntuleyici ile kosu, vurus ve hata takibi.',
    away: 'Deplasman',
    home: 'Ev Sahibi',
    runs: 'K',
    hits: 'V',
    errors: 'H',
    inning: 'Devre',
    topInning: 'Ust',
    bottomInning: 'Alt',
    balls: 'Top',
    strikes: 'Strike',
    outs: 'Out',
    strikeBtn: 'Strike',
    ballBtn: 'Top',
    foulBtn: 'Foul',
    hitBtn: 'Vurus',
    outBtn: 'Out',
    walkBtn: 'Yuruyus',
    runBtn: '+1 Kosu',
    errorBtn: 'Hata',
    newBatter: 'Yeni Vurucu',
    resetMatch: 'Mac Sifirla',
    resetConfirm: 'Mevcut mac sifirlansin mi? Tum skorlar kaybolacak.',
    cancel: 'Iptal',
    confirm: 'Onayla',
    total: 'Toplam',
    fullscreen: 'Tam Ekran',
    toggleSound: 'Sesi Ac Kapat',
  },
};
