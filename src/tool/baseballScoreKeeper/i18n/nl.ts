import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'honkbalscorebord';
const title = 'Premium Honkbal en Softbal Scorebord met Diamond Tracker';
const description = 'Volg live honkbal scores met runs, hits en fouten. Visueel diamant met honkloper posities, ballen en slag telling, en inning voor inning geschiedenisoverzicht.';

const faqData = [
  {
    question: 'Hoe werkt de telling in honkbal?',
    answer: 'De telling toont het aantal ballen en slagen op de huidige slagman. Ballen gaan tot 4 voor een vrije loop. Slagen gaan tot 3 voor een strikeout. Aanpasbare limieten voor jeugdcompetities.',
  },
  {
    question: 'Wat toont het interactieve honkbal diamant?',
    answer: 'Het diamant toont eerste, tweede en derde honk. Tik op een honk om het oranje te markeren en aan te geven dat er een loper staat. Lopers schuiven automatisch op bij een honkslag.',
  },
  {
    question: 'Hoe worden runs, hits en fouten bijgehouden?',
    answer: 'De R H E matrix toont runs, hits en fouten voor beide teams. De inning voor inning geschiedenis laat zien hoe de score is opgebouwd over alle innings.',
  },
];

const howToData = [
  {
    name: 'Registreer Elke Worp',
    text: 'Tik op Strike, Bal, Fout, Honkslag of Uit om elke worp te registreren. De telling werkt automatisch bij op basis van de uitkomst.',
  },
  {
    name: 'Beheer Honklopers',
    text: 'Tik op de honken op het diamant om lopers te plaatsen of te verwijderen. Bij een honkslag schuiven lopers automatisch door.',
  },
  {
    name: 'Volg de Inning Voortgang',
    text: 'Het inning display toont de huidige helft. Na drie uit schakelt de wedstrijd automatisch tussen boven en beneden helften.',
  },
  {
    name: 'Bekijk de Box Score',
    text: 'Controleer de R H E samenvatting en de scrollbare inning geschiedenis om de volledige score progressie te zien.',
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
  inLanguage: 'nl',
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
      text: 'Gratis Online Honkbal Scorebord: Volg Runs Hits Fouten met Live Diamant',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een betrouwbaar honkbal scorebord nodig voor je volgende wedstrijd? Deze gratis online tool houdt runs, hits en fouten bij terwijl het een live interactief diamant toont met realtime honkloper posities. Elke worp telt en ons digitale scorebord zorgt dat je nooit de telling, de uit of de inning kwijtraakt. Of je nu coacht bij de jeugd, de score bijhoudt voor een softbal toernooi of een middelbare school wedstrijd leidt, deze tool regelt de hele box score automatisch zodat jij je kunt concentreren op de actie op het veld.',
    },
    {
      type: 'title',
      text: 'Hoe Dit Honkbal Scorebord Je Tijd Bespaart en Fouten Voorkomt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Handmatig scoren is gevoelig voor fouten, vooral tijdens snelle wedstrijden. Een gemiste slag of een over het hoofd geziene loper kan de hele box score verstoren. Dit digitale scorebord automatiseert de vervelende delen. Tik op Strike, Bal, Fout, Honkslag of Uit en het bord werkt de telling direct bij. Wanneer een slagman vrije loop krijgt of uitgaat, reset de tool de telling automatisch. Na drie uit schakelt het de inning van boven naar beneden en registreert de runs. De R H E matrix en de inning voor inning geschiedenis geven je in een oogopslag een compleet beeld van de wedstrijd.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Live Worptelling',
          description: 'Automatisch ballen en slagen bijhouden met walk en strikeout detectie voor elke slagbeurt.',
          icon: 'mdi:baseball',
          points: ['Ballen tot 4', 'Slagen tot 3', 'Auto reset bij beslissing'],
        },
        {
          title: 'Loper Beheer',
          description: 'Interactief diamant toont precies wie er op eerste, tweede of derde honk staat.',
          icon: 'mdi:diamond-stone',
          points: ['Tik honken om lopers te zetten', 'Visuele markering bij bezet', 'Wissen bij inning wissel'],
        },
        {
          title: 'Volledige Box Score',
          description: 'Volledige R H E statistieken met scrollbare inning voor inning score geschiedenis.',
          icon: 'mdi:scoreboard-outline',
          points: ['Runs hits en fouten', 'Inning voor inning grid', 'Doorlopende totalen voor beide teams'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wie Heeft Deze Honkbal Score Tracker Nodig',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze tool is gebouwd voor iedereen die de score moet bijhouden: jeugd honkbal coaches die een duidelijk digitaal display willen voor hun spelers, softbal competitie vrijwilligers die wedstrijden beheren zonder vaste scorer, ouders die de wedstrijden van hun kinderen volgen vanaf de tribune en scheidsrechters die een secundair verificatiesysteem willen. De interface werkt op elk apparaat, van smartphones in de dugout tot tablets aan het hek of laptops op de bank. Geen installatie nodig, open gewoon de browser en begin met scoren.',
    },
    {
      type: 'list',
      items: [
        '<strong>Automatisch Telling Beheer:</strong> Ballen en slagen worden automatisch gereset na vrije lopen, strikeouts, honkslagen en uit. Geen handmatige resets nodig.',
        '<strong>Aanraak Diamant:</strong> Tik op eerste, tweede of derde honk om lopers te plaatsen of te verwijderen. Het diamant licht goud op om bezette honken te tonen.',
        '<strong>Inning voor Inning Scores:</strong> Elke helft wordt geregistreerd in de scrollbare grid. Zie precies hoe elk team scoorde over alle negen innings.',
        '<strong>Geen Installatie Nodig:</strong> Open de pagina en begin direct met scoren. Pas teamnamen aan door op de labels boven de scores te tikken.',
      ],
    },
    {
      type: 'title',
      text: 'Honkbal Scoren Simpel Gemaakt: Telling, Diamant en Box Score op Een Plek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het bijhouden van de score in honkbal vereist dat je meerdere dingen tegelijk volgt: de ballen en slagen telling, het aantal uit, welke honken bezet zijn, de runs voor elk team en de huidige inning. Het kwijtraken van een van deze zaken zorgt voor verwarring en onnauwkeurige administratie. Deze tool brengt alles samen op een enkel scherm. De telpuntjes tonen ballen en slagen in een oogopslag. Het diamant toont de posities van de honklopers. De R H E tabel toont de volledige box score. En de inning grid scrollt horizontaal om de volledige score geschiedenis te tonen. Alles werkt in realtime bij met elke tik.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Coaches', html: '<p>Houd een duidelijk digitaal scorebord zichtbaar voor je hele team vanuit de dugout.</p>' },
        { type: 'card', title: 'Vrijwilligers', html: '<p>Geen score ervaring nodig. De tool regelt alle complexe tracking automatisch.</p>' },
        { type: 'card', title: 'Ouders', html: '<p>Volg de wedstrijd vanaf de tribune met een betrouwbare realtime score op je telefoon.</p>' },
        { type: 'card', title: 'Spelers', html: '<p>Bekijk inning voor inning scores na de wedstrijd om prestaties te analyseren.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Honkbal Scorebord',
    description: 'Volg runs, hits en fouten met diamant weergave.',
    away: 'Uit',
    home: 'Thuis',
    runs: 'R',
    hits: 'H',
    errors: 'F',
    inning: 'Inning',
    topInning: 'Boven',
    bottomInning: 'Bened',
    balls: 'Ballen',
    strikes: 'Slagen',
    outs: 'Uit',
    strikeBtn: 'Slag',
    ballBtn: 'Bal',
    foulBtn: 'Fout',
    hitBtn: 'Honkslag',
    outBtn: 'Uit',
    walkBtn: 'Vrij',
    runBtn: '+1 Run',
    errorBtn: 'Fout',
    newBatter: 'Nieuwe Slagman',
    resetMatch: 'Reset Wedstrijd',
    resetConfirm: 'Huidige wedstrijd resetten? Alle scores gaan verloren.',
    cancel: 'Annuleren',
    confirm: 'Bevestigen',
    total: 'Totaal',
    fullscreen: 'Volledig Scherm',
    toggleSound: 'Geluid Aan/Uit',
  },
};
