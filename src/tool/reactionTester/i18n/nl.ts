import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'reactietest';
const title = 'Reactiesnelheidstest (Reflexen): Online Benchmark';
const description = 'Meet uw reflexen in milliseconden met onze professionele reactietest. Compete voor rangen van \"Schildpad\" tot \"Cyberatheet\" en analyseer uw prestaties.';

const ui: ReactionTesterUI = {
  title: 'Reactietest',
  subtitle: 'Meet uw reactiesnelheid in milliseconden. Gemiddelde van 5 pogingen.',
  startBtn: 'Klik om te starten',
  goTitle: 'GAAN!',
  goSubtitle: 'KLIK NU!',
  earlyTitle: 'Te vroeg!',
  earlySubtitle: 'Wacht op groen.',
  earlyRetry: 'Klik om opnieuw te proberen',
  promptNext: 'Klik voor volgende poging',
  promptFinal: 'Eindresultaten weergeven',
  avgLabel: 'Gemiddelde eindresultaat',
  copyBtn: 'Kopiëren',
  tweetBtn: 'Tweet',
  retryBtn: 'Probeer opnieuw',
  inputMouse: 'Muis',
  inputTouch: 'Aanraking',
  inputSpace: 'Spatie',
  historyTitle: 'Lokale Geschiedenis',
  historyBest: 'Top 5 Beste',
  historyWorst: 'Top 5 Slechtste',
  historyEmpty: 'Speel om uw eerste score op te slaan',
  copySuccess: 'Gekopieerd!',
  shareText: 'Ik heb {ms}ms behaald op de Reactietest!\nRank: {rank}\n\nKun jij mij verslaan?\n{url}',
  rankCiberatleta: 'Cyberatheet',
  rankTigre: 'Tijger',
  rankHumano: 'Mens',
  rankTortuga: 'Schildpad',
  rankDormido: 'Slaapt',
  f150: 'BEN JE EEN ROBOT?!',
  f180: 'ONGELOOFLIJK!',
  f210: 'Erg snel!',
  f250: 'Goede reactie',
  f300: 'Niet slecht...',
  f400: 'Een beetje langzaam...',
  f600: 'Je bent in slaap gevallen',
  fSlow: 'Wakker worden...',
  wp0t: 'WACHT...', wp0s: 'Hou uw adem in...',
  wp1t: 'STIL...', wp1s: 'Niet nu knipperen',
  wp2t: 'KLAAR...', wp2s: 'Vingers klaar...',
  wp3t: 'HOUD VAST...', wp3s: 'Geduld, jongeling',
  wp4t: 'FOCUS...', wp4s: 'Het komt eraan...',
};

const faqData = [
  { question: 'Wat is de gemiddelde reactiesnelheid van de mens?', answer: 'De gemiddelde reactietijd van de mens op een visuele stimulus is ongeveer 250 tot 270 milliseconden. Atleten met hoge prestaties en pro-gamers zijn meestal onder de 200 ms.' },
  { question: 'Hoe kan ik mijn reflexen verbeteren?', answer: 'De sleutel is consistente oefening en rust. Het spelen van actie-videogames (FPS), het beoefenen van snelle sporten zoals tafeltennis en het goed gehydrateerd blijven helpen het zenuwstelsel alert te houden.' },
  { question: 'Beïnvloedt het scherm mijn resultaat?', answer: 'Ja. Er is iets genaamd \"inputvertraging\". Beeldschermen met een lage verversingsfrequentie (60Hz) of oude draadloze muizen kunnen 15 tot 50 ms toevoegen aan uw werkelijke reactietijd.' },
  { question: 'Op welke leeftijd beginnen we reflexen te verliezen?', answer: 'Fysiologisch gezien bereiken menselijke reflexen hun hoogtepunt tussen de 20 en 24 jaar. Daarna treedt een zeer langzame achteruitgang op (ongeveer 2-6 ms per decennium) als er niet wordt getraind.' },
];

const howTo = [
  { name: 'Wacht op rood', text: 'Klik op het startgebied en wacht geduldig tot de schermkleur verandert.' },
  { name: 'Reageer op groen', text: 'Zodra u groen ziet, klikt of tikt u zo snel mogelijk op het scherm.' },
  { name: 'Zie uw resultaat', text: 'Het systeem berekent het exacte verschil in milliseconden tussen de kleurverandering en uw tik.' },
  { name: 'Analyseer uw rang', text: 'Herhaal de test 5 keer om een betrouwbare gemiddelde waarde te krijgen en ontdek of u een \"Schildpad\" of een \"Cyberatheet\" bent.' },
];

const seo = [
  { type: 'title' as const, text: 'Hoe werkt deze reactietest?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Deze tool meet uw <strong>visuele reactietijd</strong> met chirurgische precisie. We berekenen het exacte interval van het moment waarop het scherm oplicht tot het moment waarop het signaal van uw ogen naar uw hersenen en vervolgens naar uw vingers reist. De test vereist <strong>5 opeenvolgende pogingen</strong> om uw werkelijke gemiddelde te berekenen, waardoor de geluksfactor wordt geëlimineerd.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Gemiddelde van 5 pogingen:</strong> We elimineren de \"geluk\"-factor door consistentie te eisen. Eén gelukkige klik maakt je niet tot Cyberatheet.',
      '<strong>Anti-cheat-systeem:</strong> Willekeurige wachttijden (1,5 s - 4,5 s) en vroege-klik-detectie ter voorkoming van voorspelling.',
      '<strong>Echte wetenschap:</strong> Hersenverwerking ~180-200 ms + motorische respons +20-40 ms = uw totale reactietijd.',
    ],
  },
  { type: 'title' as const, text: 'Wereldranglijst Tabel', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Tijd', 'Rang', 'Beschrijving'],
    rows: [
      ['&lt; 180 ms', 'Cyberatheet', 'Bovenmensélijk niveau, kenmerkend voor esports-professionals of gevechtsvliegers.'],
      ['180 - 230 ms', 'Tijger', 'Scherpe reflexen. Je bent waarschijnlijk goed in shooters.'],
      ['230 - 280 ms', 'Mens', 'Het gezonde gemiddelde. Je bent wakker en functioneert correct.'],
      ['280 - 350 ms', 'Schildpad', 'Beneden gemiddeld. Rust uit of train meer.'],
      ['&gt; 350 ms', 'Slaapt', 'Mogelijke vermoeidheid, slaperigheid of trage hardware (inputvertraging).'],
    ],
  },
  { type: 'title' as const, text: 'Waarom ben je traag? Hardware de schuld geven', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitor (Hz)',
        description: 'Een 60Hz-monitor heeft ongeveer 16 ms nodig om een frame te tekenen. Een 144Hz duurt maar 7 ms. Dit 10ms-verschil telt in uw eindresultaat.',
        icon: 'mdi:monitor',
        points: ['60Hz = ~16ms per frame', '144Hz = ~7ms per frame', 'Zichtbaar verschil in test'],
      },
      {
        title: 'Draadloze muis',
        description: 'Goedkope kantoor-Bluetooth-muizen hebben een hoge latentie. Voor deze test gebruikt u een kabel of 2,4GHz-draadloze technologie met lage latentie.',
        icon: 'mdi:mouse-variant',
        points: ['Goedkope Bluetooth: +15-50ms', '2.4GHz gaming: <1ms extra', 'USB-kabel: referentie'],
      },
      {
        title: 'Browser',
        description: 'Extensies die advertenties blokkeren of zware scripts kunnen ruis veroorzaken. Probeer de incognitomodus voor uw echte record.',
        icon: 'mdi:web',
        points: ['Sluit zware extensies', 'Incognito = schoner', 'Chrome/Firefox aanbevolen'],
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

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faqTitle: 'Veelgestelde vragen', faq: faqData, bibliography: [], howTo, schemas };
