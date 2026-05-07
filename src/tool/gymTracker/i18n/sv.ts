import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'tranings-tracker';
const title = 'Tränings tracker: Framstegsgrafer och styrkedagbok';
const description =
  'Logga dina lyft, välj övningar och visualisera dina framsteg med styrkegrafer. Optimera din progressiva överbelastning på gymmet.';

const faqData = [
  {
    question: 'Vad är syftet med att spåra träningen?',
    answer:
      'Det tjänar till att vetenskapligt tillämpa progressiv överbelastning. Genom att veta exakt hur mycket du lyfte vid föregående pass kan du försöka överträffa det resultatet, vilket garanterar mus增长 och långsiktiga styrkevinster.'
  },
  {
    question: 'Vilka data bör jag registrera?',
    answer:
      'Det viktigaste är den maximala vikten (top set) som du uppnådde med bra teknik för ett fastställt antal repetitioner. Vårt verktyg fokuserar på att registrera vikt per pass för att generera din framstegsgraf.'
  },
  {
    question: 'Hur tolkas graferna?',
    answer:
      'En linje uppåt indikerar att du gör framsteg. En plan linje (platå) tyder på att du behöver justera din volym, intensitet eller återhämtning. En konstant nedåtgående linje kan vara ett tecken på överträning.'
  },
  {
    question: 'Var lagras mina data?',
    answer:
      'Data lagras lokalt i din webbläsare (Local Storage). Detta innebär att din integritet är total och du behöver inte skapa ett konto, men om du rensar webbläsardata går historiken förlorad.'
  },
];

const howToData = [
  {
    name: 'Välj övning',
    text: 'Välj bland grundläggande lyft som Knäböj, Bänkpress eller Marklyft i rullgardinsmenyn.'
  },
  {
    name: 'Ange vikt',
    text: 'Efter ditt tyngsta set, ange de lyfta kilona/punden i motsvarande fält.'
  },
  {
    name: 'Tryck på Lägg till',
    text: 'Spara ditt resultat. Systemet uppdaterar automatiskt din historik och din framstegsgraf.'
  },
  {
    name: 'Analysera din utveckling',
    text: 'Konsultera grafen regelbundet för att identifiera platåer och motivera dig själv genom att se din verkliga styrkeökning.'
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
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv'
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
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
      text: 'Träningsspårning: Nyckeln till verkliga framsteg',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'I fitness- och bodybuildingvärlden finns en grundläggande princip som skiljer dem som får fantastiska resultat från dem som snabbt stagnerar: <strong>progressiv överbelastning (progressive overload)</strong>. Det är dock omöjligt att tillämpa denna princip effektivt om du inte för detaljerade anteckningar över dina lyft. I den här guiden utforskar vi varför det är livsviktigt att spåra din träning, hur du använder vår <strong>gym-tracker</strong> för att maximera dina resultat och de vetenskapliga grunderna som stöder denna praxis.'
    },
    {
      type: 'title',
      text: 'Vad är progressiv överbelastning?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Progressiv överbelastning är den gradvisa ökningen av stress som påförs kroppen under fysisk träning. För att en muskel ska växa eller bli starkare måste den utsättas för en stimulans som är större än den den är van vid. Om du går till gymmet och alltid lyfter samma vikt, med samma repetitioner och samma vilotid, kommer din kropp inte att ha någon biologisk anledning att anpassa sig och växa.'
    },
    {
      type: 'list',
      items: [
        'Viktökning: Lyfta mer vikt än vid föregående pass.',
        'Repetitionsökning: Göra fler repetitioner med samma vikt.',
        'Volymökning: Utföra fler totala set per muskelgrupp.',
        'Minskad vila: Utföra samma arbete på kortare tid.',
        'Förbättrad teknik: Utföra övningen med överlägsen kontroll och större rörelseomfång.',
      ]
    },
    {
      type: 'title',
      text: 'Varför manuell loggning är överlägsen minnet',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Många idrottare gör misstaget att lita på sitt minne för att komma ihåg hur mycket de lyfte förra veckan. Men i ett typiskt träningspass som innehåller mellan 5 och 10 olika övningar är det väldigt lätt att glömma om man tog 80 kg eller 82,5 kg i bänkpress, eller om man klarade 10 repetitioner eller 12. Denna brist på precision leder till mediokritet.'
    },
    {
      type: 'tip',
      title: 'Kraften i att visualisera framsteg',
      html: 'Att se en stigande linje på en graf ger dig den boost som behövs för att försöka den där extra repetitionen som markerar skillnaden mellan stagnation och konsistent muskeltillväxt.'
    },
    {
      type: 'title',
      text: 'Grundläggande övningar för spårning',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Även om alla övningar är värdefulla, erbjuder vissa basövningar (compounds) den bästa insikten i din övergripande styrka och fysiska utveckling. Det är dessa du bör prioritera i din spårning: <strong>Bänkpress</strong> för horisontella pressar, <strong>Axelpress</strong> för vertikala pressar, <strong>Chins</strong> för drag och <strong>Hip Thrust</strong> för gluteus.'
    },
    {
      type: 'title',
      text: 'Hur du analyserar dina framstegsgrafer',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'När du väl har registrerat flera träningspass börjar du se mönster: en <strong>konstant stigande linje</strong> indikerar rätt väg, en <strong>platå</strong> tyder på att du behöver justera volymen eller vilan, och en <strong>nedåtgående trend</strong> kan vara ett tecken på ackumulerad trötthet.'
    },
    {
      type: 'title',
      text: 'Psykologin bakom framgång på gymmet',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Träning är en utmaning för både psyke och kropp. Genom att använda ett visuellt verktyg som visar att du idag är 1 % starkare än för fjortonde dagar sedan, matar du ditt dopaminbelöningssystem. Detta skapar en positiv feedback-loop som gör träningen till en hållbar vana.'
    },
  ],
  ui: {
    exerciseLabel: 'Övning',
    pushCategory: 'Push (Press)',
    pullCategory: 'Pull (Drag)',
    gluteCategory: 'Glute (Säte)',
    customExerciseCategory: 'Anpassad',
    addCustomExercisetitle: 'Lägg till övning',
    newExerciseLabel: 'Ny övning',
    exercisePlaceholder: 'Övningsnamn...',
    addBtn: 'Lägg till',
    registerWeightLabel: 'Logga vikt',
    weightPlaceholder: '00.0',
    startBtn: 'Start',
    resetBtn: 'Återställ',
    okBtn: 'OK',
    noData: 'Inga data',
    recordLabel: 'Rekord',
    lastLabel: 'Senast',
    historyTitle: 'Loggar',
    exportBtn: 'Exportera',
    confirmDeletetitle: 'Rensa historik?',
    confirmDeleteText: 'Denna åtgärd kan inte ångras. Alla loggar för den valda övningen kommer att raderas.',
    deleteBtn: 'Radera',
    cancelBtn: 'Avbryt',
    units: 'kg',

    benchPress: 'Bänkpress',
    overheadPress: 'Axelpress (Militärpress)',
    pushPress: 'Push Press',
    inclineDbPress: 'Lutande hantelpress',
    dipsTriceps: 'Dips triceps',
    tricepsExtensions: 'Triceps pushdown (kabel)',
    pullUp: 'Chins (Pull-ups)',
    barbellRow: 'Skivstångsrodd',
    latPulldown: 'Latsdrag',
    dbRow: 'Hantelrodd',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Skivstångscurl',
    hipThrust: 'Hip Thrust',
    rdl: 'Rumänska marklyft',
    lunges: 'Utfall',
    gluteKick: 'Glute Kickback (kabel)',
    hipAbduction: 'Abduktionsmaskin',
    stepUp: 'Step Ups'
  }
};
