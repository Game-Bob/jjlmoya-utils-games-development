import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'baseball-poangraknare';
const title = 'Premium Baseball och Softball Poangraknare med Diamond Tracker';
const description = 'Folj live baseballpoang med runs, hits och errors. Visuell diamond med basloparpositioner, ball strike raknare och inning for inning historikgrid.';

const faqData = [
  {
    question: 'Hur fungerar poangraknaren i baseball?',
    answer: 'Raknaren visar antalet balls och strikes for den aktuella slagmannen. Balls gar upp till 4 for en walk. Strikes gar upp till 3 for en strikeout. Justerbara granser for ungdomsligor.',
  },
  {
    question: 'Vad visar den interaktiva baseball diamonden?',
    answer: 'Diamonden visar forsta, andra och tredje bas. Tryck pa en bas for att markera den i orange och visa att en lopare star pa den basen. Lopare avancerar automatiskt vid hits.',
  },
  {
    question: 'Hur registreras runs, hits och errors?',
    answer: 'R H E matrisen visar runs, hits och errors for bada lagen. Inning for inning historiken visar hur poangen byggdes upp under hela matchen.',
  },
];

const howToData = [
  {
    name: 'Registrera Varje Kast',
    text: 'Tryck pa Strike, Ball, Foul, Hit eller Out for att registrera varje kast. Raknaren uppdateras automatiskt baserat pa utfall.',
  },
  {
    name: 'Hantera Baslopare',
    text: 'Tryck pa baserna pa diamonden for att placera eller ta bort lopare. Vid en hit avancerar loparna automatiskt.',
  },
  {
    name: 'Folj Inningens Fortlopp',
    text: 'Inningsdisplayen visar aktuell halva av inningen. Efter tre outs vaxlar spelet automatiskt mellan topp och botten halvor.',
  },
  {
    name: 'Granska Box Score',
    text: 'Kontrollera R H E sammanfattningen och den rullande inningshistoriken for att se hela poangutvecklingen.',
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
  inLanguage: 'sv',
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
      text: 'Baseball Poangraknare Gratis Online: Folj Runs Hits Errors med Live Diamond',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Behover du en pahlitlig baseball poangraknare till ditt nasta spel? Detta gratis onlineverktyg foljer runs, hits och errors samtidigt som det visar en levande interaktiv diamond med basloparpositioner i realtid. Varje kast raknas och var digitala poangtavla ser till att du aldrig tappar bort raknaren, outs eller inningen. Oavsett om du coachar little league, haller poang i en softballturnering eller leder ett high school varsity spel, hanterar detta verktyg hela box score automatiskt sa att du kan fokusera pa spelet pa plan.',
    },
    {
      type: 'title',
      text: 'Hur Denna Baseball Poangtavla Sparar Tid och Forhindrar Fel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuell poangforing ar benaget att orsaka fel, sarskilt under snabba spel. En missad strike eller en forbisedd lopare kan stora hela box score. Denna digitala poangraknare automatiserar de tradiga delarna. Tryck pa Strike, Ball, Foul, Hit eller Out sa uppdateras tavlan omedelbart. Nar en slagman gar pa walk eller slas ut aterstaller verktyget raknaren automatiskt. Efter tre outs vaxlar det inningen fran topp till botten och registrerar poangen. R H E matrisen och inning for inning historikgrid ger dig en fullstandig bild av spelet med en blick.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Live Kastraknare',
          description: 'Automatisk balls och strikes tracking med walk och strikeout detektering for varje at bat.',
          icon: 'mdi:baseball',
          points: ['Balls raknade till 4', 'Strikes raknade till 3', 'Auto aterstallning vid beslut'],
        },
        {
          title: 'Loparhantering',
          description: 'Interaktiv diamond visar exakt vem som ar pa forsta, andra eller tredje bas.',
          icon: 'mdi:diamond-stone',
          points: ['Tryck pa baser for att satta lopare', 'Visuell markering nar upptagen', 'Rensas vid inningbyte'],
        },
        {
          title: 'Fullstandig Box Score',
          description: 'Fulla R H E statistik med rullande inning for inning poanghistorik.',
          icon: 'mdi:scoreboard-outline',
          points: ['Runs hits och errors', 'Inning for inning grid', 'Lopande totaler for bada lagen'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vem Behover Denna Baseball Poangsparare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg ar byggt for alla som behover halla poang: ungdomsbaseballcoacher som vill ha en tydlig digital display for sina spelare, softball liga volontarer som hanterar spel utan en dedikerad poangraknare, foraldrar som foljer sina barns matcher fran laktaren och domare som vill ha ett sekundart verifieringssystem. Granssnittet fungerar pa alla enheter, fran smartphones i dugout till surfplattor monterade pa stangset eller laptopar pa bänken. Ingen installation behovs, bara oppna webblasaren och borja poangsatta.',
    },
    {
      type: 'list',
      items: [
        '<strong>Automatisk Poanghantering:</strong> Balls och strikes aterstalls automatiskt efter walks, strikeouts, hits och outs. Inga manuella aterstallningar behovs.',
        '<strong>Peppningsbar Diamond:</strong> Tryck pa forsta, andra eller tredje bas for att placera eller ta bort lopare. Diamonden lyser i guld for att visa upptagna baser.',
        '<strong>Inning for Inning Poang:</strong> Varje halvinning registreras i den rullande gridden. Se exakt hur varje lag poangsatte under alla nio inningarna.',
        '<strong>Ingen Installation Kravs:</strong> Oppna sidan och borja poangsatta omedelbart. Anpassa lagnamn genom att trycka pa etiketterna ovanfor poangen.',
      ],
    },
    {
      type: 'title',
      text: 'Baseball Poangsattning Gjort Enkelt: Raknare, Diamond och Box Score pa Ett Stalle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att halla poang i baseball kraver att man foljer flera saker samtidigt: balls och strikes rakning, antalet outs, vilka baser som har lopare, poangen for varje lag och den aktuella inningen. Att tappa bort nagon av dessa skapar forvirring och felaktiga registreringar. Detta verktyg konsoliderar allt pa en enda skarm. Raknarpunkterna visar balls och strikes med en blick. Diamonden visar basloparpositioner. R H E tabellen visar fulla box score. Och inningsgridden rullar horisontellt for att visa hela poanghistoriken. Allt uppdateras i realtid med varje tryckning.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Coacher', html: '<p>Ha en tydlig digital poangtavla synlig for hela laget fran dugout.</p>' },
        { type: 'card', title: 'Volontarer', html: '<p>Ingen poangforingserfarenhet behovs. Verktyget hanterar all komplex sparning automatiskt.</p>' },
        { type: 'card', title: 'Foraldrar', html: '<p>Folj matchen fran laktaren med en pahlitlig realtidspoangvisning pa din telefon.</p>' },
        { type: 'card', title: 'Spelare', html: '<p>Granska inning for inning poang efter matchen for att analysera prestation.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Baseball Poangraknare',
    description: 'Folj runs, hits och errors med diamondvy.',
    away: 'Borta',
    home: 'Hemma',
    runs: 'R',
    hits: 'H',
    errors: 'E',
    inning: 'Inning',
    topInning: 'Topp',
    bottomInning: 'Bot',
    balls: 'Bollar',
    strikes: 'Strikes',
    outs: 'Outs',
    strikeBtn: 'Strike',
    ballBtn: 'Boll',
    foulBtn: 'Foul',
    hitBtn: 'Hit',
    outBtn: 'Out',
    walkBtn: 'Walk',
    runBtn: '+1 Run',
    errorBtn: 'Error',
    newBatter: 'Ny Slaagman',
    resetMatch: 'Aterstall Match',
    resetConfirm: 'Aterstalla pagaende match? Alla poang forloras.',
    cancel: 'Avbryt',
    confirm: 'Bekrafta',
    total: 'Totalt',
    fullscreen: 'Fullskarm',
    toggleSound: 'Vaxla Ljud',
  },
};
