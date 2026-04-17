import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'reflextest-snabbhet';
const title = 'Reaktionstidtest (Reflexer): Online Benchmark';
const description = 'Mät dina reflexer i millisekunder med vårt professionella reaktionstest. Konkurrera om rankningar från \"Sköldpadda\" till \"Cyberatlet\" och analysera din prestation.';

const ui: ReactionTesterUI = {
  title: 'Reaktionstest',
  subtitle: 'Mät din reaktionshastighet i millisekunder. Medelvärde av 5 försök.',
  startBtn: 'Klicka för att starta',
  goTitle: 'GÅ!',
  goSubtitle: 'KLICKA NU!',
  earlyTitle: 'För tidigt!',
  earlySubtitle: 'Vänta på grönt.',
  earlyRetry: 'Klicka för att försöka igen',
  promptNext: 'Klicka för nästa försök',
  promptFinal: 'Se Slutresultat',
  avgLabel: 'Slutligt medelvärde',
  copyBtn: 'Kopiera',
  tweetBtn: 'Tweet',
  retryBtn: 'Försök igen',
  inputMouse: 'Mus',
  inputTouch: 'Beröring',
  inputSpace: 'Mellanslag',
  historyTitle: 'Lokal Historia',
  historyBest: 'Top 5 Bästa',
  historyWorst: 'Top 5 Värsta',
  historyEmpty: 'Spela för att registrera ditt första poäng',
  copySuccess: 'Kopierad!',
  shareText: 'Jag gjorde {ms}ms på Reaktionstestet!\nRanking: {rank}\n\nKan du slå mig?\n{url}',
  rankCiberatleta: 'Cyberatlet',
  rankTigre: 'Tiger',
  rankHumano: 'Människa',
  rankTortuga: 'Sköldpadda',
  rankDormido: 'Sovande',
  f150: 'ÄR DU EN ROBOT?!',
  f180: 'OTROLIGT!',
  f210: 'Mycket snabb!',
  f250: 'Bra reaktion',
  f300: 'Inte dåligt...',
  f400: 'Lite långsamt...',
  f600: 'Du somnade',
  fSlow: 'Vakna upp...',
  wp0t: 'VÄNTA...', wp0s: 'Håll andan...',
  wp1t: 'STILLA...', wp1s: 'Ögonen öppna',
  wp2t: 'REDO...', wp2s: 'Fingrar redo...',
  wp3t: 'HÅL...', wp3s: 'Tålamod, ung lärling',
  wp4t: 'FOKUS...', wp4s: 'Det kommer...',
};

const faqData = [
  { question: 'Vad är den genomsnittliga människans reaktionstid?', answer: 'Den genomsnittliga människans reaktionstid på en visuell stimulus är ungefär 250 till 270 millisekunder. Högt prestationspelare och proffsgamers ligger vanligtvis under 200 ms.' },
  { question: 'Hur kan jag förbättra mina reflexer?', answer: 'Nyckeln är konsekvent träning och vila. Att spela actionspel (FPS), träna snabba sporter som bordtennis och att hålla sig väl hydrerad hjälper till att hålla nervsystemet vaksamt.' },
  { question: 'Påverkar skärmen mitt resultat?', answer: 'Ja. Det finns något som kallas \"indatafördröjning\". Skärmar med låg uppdateringsfrekvens (60Hz) eller gamla trådlösa möss kan lägga till 15 till 50 ms till din faktiska reaktionstid.' },
  { question: 'Vid vilken ålder börjar vi förlora reflexerna?', answer: 'Fysiologiskt sett nå människans reflexer sin högsta punkt mellan 20 och 24 år. Därefter finns det en mycket långsam nedgång (cirka 2-6 ms per decennium) om man inte tränar.' },
];

const howTo = [
  { name: 'Vänta på rött', text: 'Klicka på startområdet och vänta tålmodigt på att skärmfärgen ändras.' },
  { name: 'Reagera på grönt', text: 'Så snart du ser grönt, klicka eller peta på skärmen så fort du kan.' },
  { name: 'Se ditt resultat', text: 'Systemet beräknar den exakta skillnaden i millisekunder mellan färgförändringen och ditt tryck.' },
  { name: 'Analysera din ranking', text: 'Upprepa testet 5 gånger för att få ett tillförlitligt medelvärde och ta reda på om du är en \"Sköldpadda\" eller en \"Cyberatlet\".' },
];

const seo = [
  { type: 'title' as const, text: 'Hur Fungerar Detta Reaktionstest?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Detta verktyg mäter din <strong>visuella reaktionstid</strong> med kirurgisk precision. Vi beräknar det exakta intervallet från när skärmen lyser upp tills signalen reser från dina ögon till din hjärna och sedan till dina fingrar. Testet kräver <strong>5 på varandra följande försök</strong> för att beräkna ditt verkliga medelvärde, vilket eliminerar lyckan.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Medelvärde av 5 försök:</strong> Vi eliminerar \"lycka\"-faktorn genom att kräva överensstämmelse. Ett enda lyckligt klick gör dig inte till Cyberatlet.',
      '<strong>Anti-Cheat-system:</strong> Slumpmässiga väntetider (1,5 s - 4,5 s) och tidig klickdetektering för att förhindra förutsägelse.',
      '<strong>Riktig vetenskap:</strong> Hjärnbehandling ~180-200 ms + motorsvaret +20-40 ms = din totala reaktionstid.',
    ],
  },
  { type: 'title' as const, text: 'Världsrankningtabell', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Tid', 'Ranking', 'Beskrivning'],
    rows: [
      ['&lt; 180 ms', 'Cyberatlet', 'Övernaturlig nivå typisk för e-sportsproffs eller stridsflygare.'],
      ['180 - 230 ms', 'Tiger', 'Skarpa reflexer. Du är förmodligen duktig på skjutspel.'],
      ['230 - 280 ms', 'Människa', 'Det friska genomsnittet. Du är vaken och fungerar korrekt.'],
      ['280 - 350 ms', 'Sköldpadda', 'Under genomsnittet. Vila eller träna mer.'],
      ['&gt; 350 ms', 'Sovande', 'Möjlig trötthet, sömnighet eller långsam maskinvara (indatafördröjning).'],
    ],
  },
  { type: 'title' as const, text: 'Varför Är Du Långsam? Skylla på Hårdvaran', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Bildskärm (Hz)',
        description: 'En 60Hz-skärm tar ungefär 16 ms att måla en ram. En 144Hz tar bara 7 ms. Denna 10 ms skillnad räknas i ditt slutresultat.',
        icon: 'mdi:monitor',
        points: ['60Hz = ~16ms per ram', '144Hz = ~7ms per ram', 'Synlig skillnad i test'],
      },
      {
        title: 'Trådlös Mus',
        description: 'Billiga kontorsbluetoothmussor har höga fördröjningar. För detta test, använd en kabel eller 2,4GHz trådlös teknik med låg latens.',
        icon: 'mdi:mouse-variant',
        points: ['Billig Bluetooth: +15-50ms', '2,4GHz gaming: <1ms extra', 'USB-kabel: referens'],
      },
      {
        title: 'Webbläsare',
        description: 'Tillägg som blockerar annonser eller tunga skript kan orsaka stutterning. Prova inkognitoräget för ditt verkliga rekord.',
        icon: 'mdi:web',
        points: ['Stäng tunga tillägg', 'Inkognito = renare', 'Chrome/Firefox rekommenderas'],
      },
    ],
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faqTitle: 'Vanliga Frågor', faq: faqData, bibliography: [], howTo, schemas };
