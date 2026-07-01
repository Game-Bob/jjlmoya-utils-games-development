import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'padel-resultatraknare';
const title = 'Padel Resultaträknare: Guldpoäng & Rotation Spårare';
const description = 'Håll koll på padel-poäng med den officiella Punto de Oro (Guldpoäng)-regeln, serveringsrotationsvarningar, tiebreaks och dynamisk sidbytesanimation.';

const faq = [
  {
    question: 'Vad är guldpoängen (Punto de Oro) i padel?',
    answer: 'Guldpoängen är en avgörande poäng som spelas när ställningen är 40-40 (Deuce). Det spelas inte med fördel. Det mottagande laget väljer om de vill ta emot serven på vänster eller höger sida, och den som vinner den enda poängen vinner hela game:et.',
  },
  {
    question: 'Hur fungerar set-format i padel?',
    answer: 'Standardmatcher spelas bäst av 3 set, där varje set vinns av det första laget som når 6 game (med 2 game ledning). Om ställningen blir 6-6 spelas ett 7-poängs tiebreak. Ett valfritt Golden Set-format avslutas vid 4 game med tiebreak vid 4-4.',
  },
  {
    question: 'När byter spelare sida i padel?',
    answer: 'Spelare byter sida efter första game:et och sedan varannan game (när summan av game i det aktuella setet är udda, t.ex. 1, 3, 5). Under tiebreak byter spelare sida var 6:e poäng.',
  },
];

const howTo = [
  {
    name: 'Konfigurera Matchformat',
    text: 'Välj standard matchformat (först till 6 game) eller det kortare golden set-formatet (först till 4 game).',
  },
  {
    name: 'Ange Spelarnamn',
    text: 'Skriv in lagnamn för att anpassa resultattavlan. Dina inställningar sparas automatiskt.',
  },
  {
    name: 'Registrera Poäng på Banan',
    text: 'Tryck på valfri sida av den visuella isometriska padelbanan för att registrera poäng. Serveindikatorer guidar dig genom diagonala rotationer.',
  },
  {
    name: 'Avgör Guldpoäng',
    text: 'När deuce uppnåtts, välj den returnerande sidan (vänster eller höger mottagare) och klicka på det vinnande laget för att avsluta game:et.',
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
  inLanguage: 'sv',
};

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Gratis Online Padel Resultattavla & Matchspårare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att hålla koll på poäng i padel kan bli förvirrande med snabba rallies, tiebreak, sidbyten och den officiella Punto de Oro (guldpoäng)-regeln. Denna gratis online padel resultattavla tar bort besväret med poängräkning. Tryck bara på den visuella banan för att registrera poäng, och låt verktyget automatiskt hantera serveringsrotationer, mottagarsidor, set-historik och sidbyten i realtid.',
    },
    {
      type: 'title',
      text: 'Förstå Padel Poängräkning, Guldpoäng och Rotationer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Padel följer standard tennisliknande poängräkning (15, 30, 40, Game) men introducerar specifika regler för snabbare spel. Under de professionella FIP-reglerna, när ställningen når 40-40, spelas en avgörande guldpoäng (Punto de Oro). Det mottagande laget väljer vilken sida (vänster eller höger) som ska ta emot serven, och vinnaren av den enda poängen vinner game:et. Dessutom måste lag byta sida av banan när det totala antalet spelade game i ett set är udda, och var 6:e poäng under ett tiebreak.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Träningsmatcher',
          description: 'Snabb och smidig poängräkning för träningsmatcher med dina padelkompisar.',
          icon: 'mdi:tennis',
          points: ['Lägg till poäng med en tryckning', 'Mobiloptimerad layout', 'Fungerar offline på språng'],
        },
        {
          title: 'Klubb & Liga',
          description: 'Håll koll på tävlingsmatcher i klubben och lokala turneringar med lätthet.',
          icon: 'mdi:trophy-outline',
          points: ['Set-historikarkiv', '6-game eller 4-game set', 'Punto de Oro-stöd'],
        },
        {
          title: 'Domarläge',
          description: 'Fullt utrustat verktyg för att döma officiella matcher eller träningspass.',
          icon: 'mdi:school',
          points: ['Aktiva server- & mottagarmarkörer', 'Interaktiv banrotation', 'Fullskärms konsolläge'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Avancerade Digitala Funktioner för Padelspelare',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Officiell Punto de Oro-logik</strong> låter det mottagande laget välja mottagarsida vid deuce och visar serveringsvägen.',
        '<strong>Visuell Banindikator</strong> visar serverarens (S) och mottagarens (R) positioner dynamiskt för att undvika rotationsfel.',
        '<strong>Automatiskt Sidbyte</strong> vänder banlayouten vid udda game eller tiebreak-intervall så att den alltid matchar din fysiska vy.',
        '<strong>Anpassade Set-format</strong> stöder standard 6-game set eller snabba 4-game Golden Set.',
        '<strong>Lokal Webbläsarautospar</strong> behåller spelarnamn och aktuell matchpoäng även om du uppdaterar sidan.',
      ],
    },
    {
      type: 'title',
      text: 'Padel Tiebreak-regler: Standard vs Super Tiebreak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I vanliga padel-set, om ställningen blir 6-6 i game, spelas ett standard 7-poängs tiebreak. I ett tiebreak räknas poäng numeriskt (1, 2, 3, etc.). Det första laget som når 7 poäng med en marginal på 2 vinner setet. Spelaren som är vid servetur serverar första poängen från höger (deuce) sida. Därefter servar varje spelare två på varandra följande poäng, med start från vänster (fördel) sida. I vissa turneringsformat, om matchen är oavgjord 1-1 i set, spelas ett 10-poängs Super Tiebreak istället för ett fullt tredje set för att avgöra matchen.',
    },
    {
      type: 'title',
      text: 'Sidbyte och Rotationer: Hålla Padel Rättvist',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sidbyte är viktigt i padel för att säkerställa att miljöfaktorer som sol, vind eller banans ojämnheter inte gynnar det ena laget. Spelare måste byta sida av banan efter första game:et i varje set, och sedan efter varannan game (t.ex. vid 1-0, 2-1, 3-2, 4-3, 5-4). Vår digitala padelresultattavla har en dynamisk sidbytesanimation som automatiskt roterar banlayouten 180 grader när spelare behöver byta sida fysiskt. Detta säkerställer att laget som visas högst upp på skärmen alltid matchar laget som spelar på den bortre änden av den fysiska banan.',
    },
    {
      type: 'title',
      text: 'Standard Set vs Golden Set-format',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Medan standardmatcher spelas till 6 game per set, använder många rekreationsligor och snabba turneringar "Golden Set"-formatet där set spelas till endast 4 game (med tiebreak vid 4-4). Denna resultattavla låter dig växla mellan dessa format med en enda tryckning i verktygsfältet. Oavsett valt format hanterar resultattavlan alla tiebreak, serveringsrotationer och poängberäkningar automatiskt.',
    },
    {
      type: 'title',
      text: 'Tips för Effektiv Poängräkning på Banan',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Använd en Banställning eller Telefonhållare:</strong> Montera din telefon eller surfplatta på padelbanans stängsel i nät höjd. Detta gör att spelare från båda sidor enkelt kan se den aktiva poängen och serveringsindikatorerna.',
        '<strong>Personalisera Namn Innan Start:</strong> Ta 10 sekunder att skriva in de faktiska namnen på spelarna eller lagen. Detta gör röstmeddelanden (om aktiverat) och den visuella resultattavlan mycket mer engagerande och officiell.',
        '<strong>Aktivera Fullskärmsläge:</strong> Klicka på fullskärmsknappen i huvudpanelen. Detta maximerar resultattavlan och hjälper till att förhindra att skärmen stängs av automatiskt under långa rallies.',
      ],
    },
    {
      type: 'title',
      text: 'Varför Använda en Digital Padel Resultaträknare?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Istället för att ständigt argumentera om vem som serverar, vems tur det är att ta emot eller vad game-poängen är, håller en digital spårare alla samordnade. Genom att visuellt visa serverings- och mottagarpositioner direkt på skärmen kan spelare snabbt titta på telefonen på bänken och veta exakt var de ska stå. Detta förbättrar spelets tempo och förhindrar rotationsfel.',
    },
  ],
  ui: {
    playerA: 'Lag 1',
    playerB: 'Lag 2',
    game: 'Game',
    set: 'Set',
    tiebreak: 'Tiebreak',
    goldPoint: 'Guldpoäng',
    selectReceiver: 'Välj Mottagare',
    leftReceiver: 'Vänster Mottagare',
    rightReceiver: 'Höger Mottagare',
    server: 'Serverare',
    receiver: 'Mottagare',
    changeEnds: 'Byt Sida',
    matchWon: 'Match Vunnen',
    reset: 'Återställ',
    resetConfirm: 'Återställa match? All data går förlorad.',
    cancel: 'Avbryt',
    fullscreen: 'Fullskärm',
    exitFullscreen: 'Stäng Fullskärm',
    deuce: 'Deuce',
    advantage: 'Fördel',
    formatStandard: '6 Game',
    formatGoldenSet: '4 Game',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Guldpoäng Avgörande Poäng',
  },
};
