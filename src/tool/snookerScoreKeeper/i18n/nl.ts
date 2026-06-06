import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'snooker-frame-tracker-en-break-calculator';
const title = 'Premium Snooker Frame Tracker en Break Calculator';
const description = 'Volg live snooker frame scores bij, bereken huidige break waarden, toon resterende punten op tafel en ontvang real-time deficit status zoals benodigde snookers.';

const faqData = [
  {
    question: 'Hoe worden de maximaal resterende punten op de snookertafel berekend?',
    answer: 'Elke resterende rode bal is 8 punten waard (1 punt voor de rode bal zelf plus 7 punten voor het potten van een zwarte kleurenbal). Zodra alle rode ballen zijn gepot, zijn de resterende kleurenballen in totaal 27 punten waard.',
  },
  {
    question: 'Wat betekent "snookers nodig" in deze calculator?',
    answer: 'Het betekent dat het scoreverschil groter is dan het totaal resterende punten op tafel, waardoor een speler fouten van de tegenstander moet afdwingen om bij te komen.',
  },
  {
    question: 'Wat is een beslissende zwarte bal situatie?',
    answer: 'Een beslissend zwart scenario ontstaat wanneer alle ballen zijn gepot en de frame scores gelijk zijn, waarbij een teruggeplaatste zwarte bal de winnaar bepaalt.',
  },
];

const howToData = [
  {
    name: 'Spelersnamen Configureren',
    text: 'Voer aangepaste namen in voor de twee snookerspelers om het scorebord te personaliseren.',
  },
  {
    name: 'Potten van Ballen en Breaks Opbouwen',
    text: 'Tik op de gloeiende viltballen om gepotte ballen in volgorde te registreren. De calculator blokkeert niet-toegestane kleuren volgens de regels.',
  },
  {
    name: 'Deficit Status Controleren',
    text: 'Bekijk de live statusbalk om te zien of een speler veilig is, snookers nodig heeft, of dat het frame nog open is.',
  },
  {
    name: 'Foutstraffen Registreren',
    text: 'Open het foutmenu om strafpunten direct aan de tegenstander toe te kennen en de actieve spelerbeurt om te wisselen.',
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Gratis Online Snooker Frame Scorekeeper en Break Teller',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vereenvoudig je snooker frames met ons digitale scorebord. De tool berekent actieve break punten, resterende tafelpunten en toont het exacte scoreverschil. De vilt-achtige interface biedt interactieve indicatoren die dynamisch oplichten op basis van snookerregelsequenties. Of je nu een lokaal clubtoernooi fluit of vriendschappelijke frames thuis bijhoudt, deze applicatie verzorgt alle berekeningen automatisch.',
    },
    {
      type: 'title',
      text: 'Inzicht in Snooker Score en Deficit Berekeningen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een standaard snookerspel begint met vijftien rode ballen die elk één punt waard zijn. Spelers moeten afwisselend een rode bal en een kleurenbal spelen. Elke gepotte kleurenbal wordt teruggeplaatst totdat alle rode ballen op zijn. Daarna moeten de kleurenballen in numerieke volgorde van geel naar zwart worden gepot. Deze calculator houdt de volgorde bij en waarschuwt wanneer snookers nodig zijn. Door het scoreverschil en de maximale resterende punten op tafel te berekenen, wordt precies bepaald wanneer een frame de overwinningsdrempel heeft bereikt.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frame Scorebord',
          description: 'Houd frame scores en spelersbeurten bij op een hoog contrast display.',
          icon: 'mdi:scoreboard-outline',
          points: ['Duidelijke markering actieve speler', 'Aangepaste spelersnaaminvoer', 'Ongedaan maken met één klik'],
        },
        {
          title: 'Break Calculator',
          description: 'Real-time tracking van actieve pot breaks met kleurenballen logboek.',
          icon: 'mdi:billiards',
          points: ['Gepotte ballen tijdlijnstrook', 'Automatische balvergrendeling volgens regels', 'Kleurgecodeerde break status'],
        },
        {
          title: 'Resterende Punt Meters',
          description: 'Volg de maximale punten die nog op de groene vilt tafel liggen.',
          icon: 'mdi:percent-outline',
          points: ['Scoreverschil tracking', 'Dynamische snooker vereiste waarschuwingen', 'Beslissende zwart detectie'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interactieve Bediening en Geluidsfeedback',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tactiele Vilt HUD</strong> maakt het mogelijk om op ballen te tikken om punten toe te voegen en ze op de break tijdlijn vast te leggen.',
        '<strong>Fout Actieknoppen</strong> passen vier tot zeven strafpunten toe aan de score van de tegenstander en beëindigen de actieve beurt.',
        '<strong>Dynamische Statuslamp</strong> werkt bij om normaal spel, veilige marge of benodigde snookers aan te geven.',
        '<strong>Audio Synthese</strong> activeert een potgeluid bij het potten en een zoemer bij fouten.',
      ],
    },
    {
      type: 'title',
      text: 'Snooker Foutregels en Strafpunten Systeem Uitgelegd',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fouten in snooker leveren punten op voor de tegenstander. De strafwaarde wordt bepaald door de waarde van de doelbal of de bal die bij de fout betrokken is, met een minimumstraf van vier punten. Het potten van de witte cuebal, het eerst raken van een kleurenbal in plaats van een rode, of het missen van elke bal levert een straf op. Als een fout wordt gemaakt bij het richten op de blauwe, roze of zwarte bal, is de straf respectievelijk vijf, zes of zeven punten. Dit digitale scorebord heeft een snel foutenpaneel om eenvoudig strafwaarden toe te voegen en automatisch de actieve beurt naar de volgende speler over te dragen.',
    },
    {
      type: 'title',
      text: 'Wat Gebeurt er Tijdens een Beslissende Zwarte Bal Scenario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wanneer alle ballen zijn gepot en de frame scores gelijk zijn, wordt de zwarte bal teruggeplaatst op zijn oorspronkelijke positie. De spelers loten om te bepalen wie als eerste speelt, en de eerste speler die de zwarte pot of een fout maakt, verliest het frame. Deze beslissende zwarte regel zorgt voor een eerlijke oplossing voor spannende wedstrijden zonder dat extra volledige frames nodig zijn, en onze tracker detecteert automatisch deze gelijke eindstand om beide spelers te waarschuwen.',
    },
    {
      type: 'title',
      text: 'Waarom een Digitale Snooker Tracker Gebruiken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Handmatige berekening van resterende punten en deficit marges tijdens spannende frames is gevoelig voor menselijke fouten. Deze browsertool biedt nauwkeurige real-time statistieken, waardoor spelers zich kunnen concentreren op hun techniek en strategie. Door een interactieve tijdlijn van gepotte ballen bij te houden, kunnen scheidsrechters gemakkelijk controversiële breaks verifiëren en de officiële wedstrijdcontinuïteit behouden.',
    },
  ],
  ui: {
    title: 'Snooker Scorebord',
    description: 'Volg frame scores en breaks.',
    player1: 'Speler 1',
    player2: 'Speler 2',
    score: 'Score',
    currentBreak: 'Break',
    remainingPoints: 'Resterend',
    deficit: 'Tekort',
    statusSafe: 'Veilig',
    statusNeedSnookers: 'Snookers Nodig',
    statusDecidingBlack: 'Beslissend Zwart',
    statusNormal: 'Normaal',
    foul: 'Fout',
    foulTitle: 'Selecteer Foutbal Straf',
    foulPoints: 'Straf',
    foulOnRed: 'Rood/Geel/Groen/Bruin',
    foulOnYellow: 'Geel',
    foulOnGreen: 'Groen',
    foulOnBrown: 'Bruin',
    foulOnBlue: 'Blauw',
    foulOnPink: 'Roze',
    foulOnBlack: 'Zwart',
    reset: 'Reset',
    resetConfirm: 'Huidig frame resetten? Alle scores gaan verloren.',
    cancel: 'Annuleren',
    confirm: 'Bevestig Reset',
    endTurn: 'Beurt Einde',
    miss: 'Misser',
    redsRemaining: 'Rood',
    pocketedBalls: 'Gepot',
    toggleSound: 'Geluid Aan/Uit',
    fullscreen: 'Volledig Scherm',
  },
};
