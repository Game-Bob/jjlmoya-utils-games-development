import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'elo-kalkylator';
const title = 'ELO Ratingkalkylator för Schack, Esport och Sport';
const description = 'Gratis ELO ratingkalkylator för vinster, oavgjorda och förluster. Ange båda rating, välj en K-faktor och se den exakta poängförändringen, förväntad poäng, nytt ELO och motståndarens ELO.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Spelarrating',
  opponentLabel: 'Motståndarrating',
  kFactorLabel: 'K-faktor',
  resultLabel: 'Matchresultat',
  winLabel: 'Vinst',
  drawLabel: 'Oavgjort',
  lossLabel: 'Förlust',
  calculateLabel: 'Beräkna',
  resetLabel: 'Återställ',
  expectedLabel: 'Förväntat',
  deltaLabel: 'Förändring',
  newRatingLabel: 'Ny rating',
  opponentNewRatingLabel: 'Motståndarens nya ELO',
  kFactorHelpTitle: 'Vad är K-faktor?',
  kFactorHelpText: 'K styr hur aggressiv uppdateringen är. Låg K innebär stabila rankningar. Hög K innebär att varje resultat flyttar rating snabbare.',
  kFactorLowText: 'Stabil',
  kFactorHighText: 'Volatil',
  resultSummaryLabel: 'Matchpåverkan',
  initialImpactText: 'Oavgjort håller tabellen tight',
  historyVersusLabel: 'vs',
  historyToLabel: 'till',
  playerPointsLabel: 'spelarpoäng',
  opponentEloLabel: 'motståndarens ELO',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'RATING',
  upsetLabel: 'Skrällchans',
  favoriteLabel: 'Favorittryck',
  balancedLabel: 'Jämn match',
  historyLabel: 'Lokala beräkningar',
  noHistoryLabel: 'Kör en beräkning för att spara den här',
  copiedLabel: 'Kopierad',
  copyLabel: 'Kopiera',
  clearLabel: 'Rensa',
  kBeginner: 'Nybörjare',
  kClub: 'Klubb',
  kTournament: 'Turnering',
  kElite: 'Elit',
};

const faqData = [
  { question: 'Hur beräknar jag ELO ratingförändring efter en match?', answer: 'Ange ditt nuvarande ELO, motståndarens ELO, matchresultatet och K-faktorn. Kalkylatorn uppskattar din förväntade poäng, jämför med det verkliga resultatet och returnerar de exakta vunna eller förlorade poängen.' },
  { question: 'Vad betyder K-faktor i ELO?', answer: 'K-faktorn styr ratingens känslighet. En låg K-faktor gör rating stabila och långsamma att röra sig. En hög K-faktor får rating att reagera snabbare, vilket är användbart för nya spelare, korta säsonger eller aktiva lokala stegar.' },
  { question: 'Varför får jag färre ELO-poäng när jag slår en lägre rankad motståndare?', answer: 'Därför att formeln redan förväntade sig att du skulle vinna. Att slå en mycket lägre rankad motståndare bekräftar förutsägelsen, så ratingvinsten är liten. Att slå en starkare motståndare är mer överraskande, så vinsten är större.' },
  { question: 'Förlorar motståndaren samma antal ELO-poäng?', answer: 'I ett standardutbyte av ELO mellan två spelare, ja. Poängen som vinns av ena sidan dras från den andra, så kalkylatorn visar både spelarens nya ELO och motståndarens nya ELO.' },
  { question: 'Kan jag använda denna ELO-kalkylator utanför schack?', answer: 'Ja. ELO fungerar för alla upprepade en-mot-en-tävlingar där starkare spelare bör vara mer benägna att vinna, inklusive esport, tennisstegar, padelgrupper, bordtennis, debattklubbar och fantasyligor.' },
];

const howTo = [
  { name: 'Ange spelarens rating', text: 'Skriv in den aktuella ratingen för spelaren vars förändring du vill beräkna.' },
  { name: 'Ange motståndarens rating', text: 'Lägg till motståndarens rating så att kalkylatorn kan uppskatta den förväntade poängen.' },
  { name: 'Välj K-faktor och resultat', text: 'Använd en lägre K-faktor för stabila rankningar eller en högre K-faktor när rating snabbt ska justeras, välj sedan vinst, oavgjort eller förlust.' },
  { name: 'Läs de nya ratingen', text: 'Kalkylatorn visar förväntad poäng, ratingförändring, ditt nya ELO och motståndarens nya ELO efter poängutbytet.' },
];

const seo = [
  { type: 'title' as const, text: 'Beräkna ELO-poäng Efter Vilken Match Som Helst', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Använd denna ELO ratingkalkylator när du behöver ett snabbt svar på en mycket praktisk fråga: <strong>hur många ELO-poäng vinner eller förlorar jag efter detta resultat?</strong> Ange din rating, motståndarens rating, matchresultatet och K-faktorn. Verktyget beräknar förväntad poäng, ratingvariation, ditt nya ELO och motståndarens nya ELO i samma resultatkort.'
  },
  {
    type: 'summary' as const,
    title: 'Vad denna kalkylator besvarar',
    items: [
      'Hur många ELO-poäng du vinner efter en seger mot en starkare eller svagare motståndare.',
      'Hur många ELO-poäng du förlorar efter en oväntad förlust.',
      'Om ett oavgjort resultat bör öka eller minska din rating.',
      'Vad motståndarens rating blir efter samma poängutbyte.',
      'Hur ändring av K-faktorn gör ratingrörelsen stabil eller volatil.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'vinstpoäng', description: 'En vinst behandlas som en hel poäng innan den jämförs med förväntad poäng.' },
      { value: '0.5', label: 'oavgjortpoäng', description: 'Ett oavgjort resultat ligger precis mellan vinst och förlust, så det kan ge poäng mot en starkare motståndare.' },
      { value: '0.0', label: 'förlustpoäng', description: 'En förlust mot en lägre rankad motståndare kostar vanligtvis mer eftersom det var oväntat.' },
    ]
  },
  { type: 'title' as const, text: 'Vad ELO-formeln Gör', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'De tre stegen bakom varje resultat',
    description: 'Kalkylatorn följer den standardmässiga ELO-idén utan att du behöver arbeta manuellt med formeln.',
    items: [
      { label: 'Förväntad poäng', value: 'Ratingskillnaden omvandlas till en sannolikhetsbaserad poäng. Högre rankade spelare förväntas få fler poäng.' },
      { label: 'Faktisk poäng', value: 'En vinst räknas som 1, oavgjort som 0.5 och förlust som 0.' },
      { label: 'Ratingförändring', value: 'Skillnaden mellan faktisk och förväntad poäng multipliceras med K-faktorn och avrundas till poäng.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situation', 'Vad som vanligtvis händer', 'Varför det händer'],
    rows: [
      ['Du slår en starkare motståndare', 'Stor ELO-ökning', 'Din faktiska poäng var mycket högre än förväntat'],
      ['Du slår en svagare motståndare', 'Liten ELO-ökning', 'Formeln förväntade sig redan att du skulle vinna'],
      ['Du spelar oavgjort mot en starkare', 'Liten ELO-ökning', 'Oavgjort kan överträffa din förväntade poäng'],
      ['Du förlorar mot en svagare motståndare', 'Stor ELO-minskning', 'Resultatet var sämre än förväntat'],
    ]
  },
  { type: 'title' as const, text: 'Välja Rätt K-faktor för Ditt Ratingsystem', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>K-faktorn är känslighetsratten i ett ELO-system.</strong> Den avgör inte vem som förtjänade att vinna. Den avgör hur starkt ratingtabellen reagerar på ett resultat. Om din liga har många matcher och mogna rating håller ett lägre K tabellen lugn. Om spelare är nya eller säsongerna korta hjälper ett högre K till att rating snabbare kommer ikapp.'
  },
  {
    type: 'table' as const,
    headers: ['K-faktor', 'Använd för', 'Vad användaren bör förvänta sig'],
    rows: [
      ['10 till 16', 'Etablerade schackklubbar, expertgrupper, långvariga rankningar', 'Mycket stabila rating med små förändringar efter varje match'],
      ['20 till 32', 'Lokala ligor, klubbstegar, återkommande turneringar', 'Balanserad rörelse som känns responsiv utan att överreagera'],
      ['40 till 60', 'Nya spelare, korta säsonger, esportstegar, informella grupper', 'Snabb korrigering när nuvarande rating kan vara inkorrekt'],
      ['60 och högre', 'Endast experimentella format eller preliminära rating', 'Mycket volatila rating där en match kan förändra tabellen kraftigt'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Bästa standardvärde för de flesta användare',
    html: 'Om du inte följer en officiell förbundsregel, börja med <strong>K 32</strong>. Det är responsivt nog för aktiva stegar och ändå stabilt nog så att ett tursamt resultat inte helt skriver om rankingen.'
  },
  { type: 'title' as const, text: 'Så Läser Du Ditt ELO-kalkylatorresultat', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Förväntat:</strong> poängen som formeln förutspådde före matchen. En högre förväntad poäng betyder att du var favorit.',
      '<strong>Förändring:</strong> de exakta ELO-poäng som lagts till eller dragits från spelarens rating.',
      '<strong>Ny rating:</strong> spelarens rating efter att resultatet tillämpats.',
      '<strong>Motståndarens nya ELO:</strong> motståndarens rating efter den motsatta poängrörelsen.',
      '<strong>Matchpåverkan:</strong> en tydlig sammanfattning av hur starkt resultatet flyttade tabellen.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Schack och brädspel',
        description: 'Beräkna rating efter match för klubbkvällar, onlineevenemang och privata ratinggrupper.',
        icon: 'mdi:chess-knight',
        points: ['Stöd för vinst-oavgjort-förlust', 'Motståndarens ELO visas', 'Bra för långsiktiga rankningar']
      },
      {
        title: 'Esportstegar',
        description: 'Uppdatera spelar- eller lagrating efter upprepade en-mot-en-matcher där skicklighet kan ändras snabbt.',
        icon: 'mdi:gamepad-variant',
        points: ['Högre K-faktor alternativ', 'Snabb ratingkorrigering', 'Tydliga skrällbelöningar']
      },
      {
        title: 'Sportstegar',
        description: 'Upprätthåll rättvisa rankningar för tennis, padel, squash, bordtennis, badminton och lokala ligor.',
        icon: 'mdi:tennis',
        points: ['Enkla manuella uppdateringar', 'Fungerar för klubbar', 'Enkelt för arrangörer']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'När ELO är ett bra ratingval',
    items: [
      {
        pro: 'Utmärkt för upprepade en-mot-en-matcher där starkare spelare bör vinna oftare.',
        con: 'Mindre idealiskt för lagsporter där individuellt bidrag är svårt att isolera.'
      },
      {
        pro: 'Lätt att förklara eftersom vinster mot starkare motståndare är värda fler poäng.',
        con: 'Behöver tillräckligt med matcher innan rating känns korrekta för helt nya spelare.'
      },
      {
        pro: 'Enkelt nog att underhålla i ett kalkylblad, klubbstege eller ligatabell.',
        con: 'K-faktorregler måste vara konsekventa, annars blir rankningar svåra att lita på.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Viktigt för ligaarrangörer',
    html: 'Välj din K-faktor före säsongsstart och publicera den. Spelare litar mer på ELO-tabeller när alla vet hur rating beräknas innan resultat matas in.'
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
