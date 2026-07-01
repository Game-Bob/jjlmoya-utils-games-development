import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'padel-scorehouder';
const title = 'Padel Scorehouder: Goudpunt & Rotatie Tracker';
const description = 'Houd padel-scores bij met de officiële Punto de Oro (goudpunt) regel, serveerrotatie-meldingen, tiebreaks en een dynamische baanwissel-animatie.';

const faq = [
  {
    question: 'Wat is het goudpunt (Punto de Oro) in padel?',
    answer: 'Het goudpunt is een beslissend punt dat gespeeld wordt wanneer de stand 40-40 (deuce) is. Er wordt niet met voordeel gespeeld. Het ontvangende team kiest of ze de service links of rechts ontvangen, en wie dat enkele punt wint, wint de hele game.',
  },
  {
    question: 'Hoe werken setformats in padel?',
    answer: 'Standaard wedstrijden worden gespeeld over best of 3 sets, waarbij elke set wordt gewonnen door het eerste team dat 6 games bereikt (met 2 verschil). Bij 6-6 wordt een 7-punts tiebreak gespeeld. Een optioneel Golden Set format eindigt bij 4 games met een tiebreak bij 4-4.',
  },
  {
    question: 'Wanneer wisselen spelers van kant in padel?',
    answer: 'Spelers wisselen na de eerste game en daarna om de 2 games (wanneer de som van games in de huidige set oneven is, bv. 1, 3, 5). Tijdens tiebreaks wisselen spelers elke 6 punten van kant.',
  },
];

const howTo = [
  {
    name: 'Configureer Wedstrijdformat',
    text: 'Kies het standaard wedstrijdformat (eerste naar 6 games) of het kortere golden set format (eerste naar 4 games).',
  },
  {
    name: 'Voer Spelersnamen in',
    text: 'Vul teamnamen in om het scorebord te personaliseren. Je instellingen worden automatisch opgeslagen.',
  },
  {
    name: 'Log Punten op de Baan',
    text: 'Tik op een van beide zijden van de visuele isometrische padelbaan om punten te scoren. Serveerindicatoren begeleiden je bij diagonale rotaties.',
  },
  {
    name: 'Beslis Goudpunten',
    text: 'Wanneer deuce wordt bereikt, selecteer dan de retournerende zijde (linker- of rechterontvanger) en klik op het winnende team om de game af te sluiten.',
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
  inLanguage: 'nl',
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
      text: 'Gratis Online Padel Scorebord & Wedstrijdtracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het bijhouden van scores in padel kan verwarrend worden met snelle rally\'s, tiebreaks, kantwissels en de officiële Punto de Oro (goudpunt) regel. Dit gratis online padel scorebord neemt het gedoe uit scoren. Tik simpelweg op het visuele veld om punten te loggen en laat de tool automatisch serverrotaties, ontvangerzijden, setgeschiedenis en baanwissels in realtime beheren.',
    },
    {
      type: 'title',
      text: 'Padel Score, Goudpunten en Rotaties Begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Padel volgt een standaard tennisachtige puntentelling (15, 30, 40, Game) maar introduceert specifieke regels voor sneller spel. Onder de professionele FIP-regels wordt bij 40-40 een beslissend goudpunt (Punto de Oro) gespeeld. Het ontvangende team kiest welke zijde (links of rechts) de service ontvangt, en de winnaar van dat ene punt wint de game. Daarnaast moeten teams van baanzijde wisselen wanneer het totaal aantal gespeelde games in een set oneven is, en om de 6 punten tijdens een tiebreak.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vriendschappelijke Wedstrijden',
          description: 'Snel en overzichtelijk scoren voor partijtjes met je padelmaten.',
          icon: 'mdi:tennis',
          points: ['Punt toevoegen met één tik', 'Mobiel-eerst ontwerp', 'Werkt offline onderweg'],
        },
        {
          title: 'Club & Competitie',
          description: 'Houd eenvoudig competitieve clubwedstrijden en lokale toernooien bij.',
          icon: 'mdi:trophy-outline',
          points: ['Setgeschiedenis archief', '6-game of 4-game sets', 'Punto de Oro ondersteuning'],
        },
        {
          title: 'Scheidsrechtersmodus',
          description: 'Volledig uitgeruste tool voor het fluiten van officiële wedstrijden of trainingen.',
          icon: 'mdi:school',
          points: ['Actieve serveer- & ontvangstmarkeringen', 'Interactieve baanrotatie', 'Volledig scherm consolemodus'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Geavanceerde Digitale Functies voor Padelspelers',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Officiële Punto de Oro Logica</strong> laat het ontvangende team de ontvangerkant kiezen bij deuce en toont de serviceroute.',
        '<strong>Visuele Baanindicator</strong> toont de server (S) en ontvanger (R) posities dynamisch om rotatiefouten te voorkomen.',
        '<strong>Automatische Baanwissel</strong> draait de baanweergave bij oneven games of tiebreak-intervallen zodat deze altijd overeenkomt met je fysieke aanzicht.',
        '<strong>Aangepaste Setformats</strong> ondersteunt standaard 6-game sets of snelle 4-game Golden Sets.',
        '<strong>Lokale Browser Auto-Opslag</strong> bewaart spelersnamen en huidige wedstrijdscores, zelfs als je de pagina ververst.',
      ],
    },
    {
      type: 'title',
      text: 'Padel Tiebreak Regels: Standaard vs Super Tiebreaks',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In standaard padel sets wordt bij 6-6 in games een 7-punts tiebreak gespeeld. In een tiebreak worden punten numeriek geteld (1, 2, 3, etc.). Het eerste team dat 7 punten bereikt met een marge van 2 wint de set. De speler die aan de beurt is om te serveren, serveert het eerste punt vanaf de rechter (deuce) zijde. Daarna serveert elke speler twee opeenvolgende punten, beginnend vanaf de linker (voordeel) zijde. In sommige toernooiformaten wordt bij een 1-1 stand in sets een 10-punts Super Tiebreak gespeeld in plaats van een volledige derde set om de wedstrijd te beslissen.',
    },
    {
      type: 'title',
      text: 'Baanwissel en Rotaties: Padel Eerlijk Houden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Baanwisseling is essentieel in padel om te voorkomen dat omgevingsfactoren zoals zon, wind of oneffenheden in de baan een team bevoordelen. Spelers moeten van kant wisselen na de eerste game van elke set en daarna om de twee games (bv. bij 1-0, 2-1, 3-2, 4-3, 5-4). Ons digitale padel scorebord heeft een dynamische baanwissel-animatie die de visuele baan automatisch 180 graden roteert wanneer spelers fysiek van kant moeten wisselen. Zo blijft het team dat bovenaan je scherm staat altijd gelijk aan het team dat aan de overkant van de fysieke baan speelt.',
    },
    {
      type: 'title',
      text: 'Standaard Sets vs Golden Sets Format',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Terwijl standaard wedstrijden worden gespeeld naar 6 games per set, hanteren veel recreatieve competities en snelle toernooien het "Golden Set" format waarbij sets worden gespeeld naar slechts 4 games (met een tiebreak bij 4-4). Dit scorebord stelt je in staat om met één tik in de werkbalk tussen deze formats te schakelen. Ongeacht het gekozen format, het scorebord handelt alle tiebreaks, serverrotaties en scoreberekeningen automatisch af.',
    },
    {
      type: 'title',
      text: 'Tips voor Effectief Score Bijhouden op de Baan',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gebruik een Baanstandaard of Telefoonhouder:</strong> Plaats je telefoon of tablet op het padelbaanhek op nethoogte. Zo kunnen spelers van beide kanten eenvoudig de actuele score en serveerders zien.',
        '<strong>Personaliseer Namen voor Aanvang:</strong> Neem 10 seconden om de echte namen van de spelers of teams in te typen. Dit maakt de stemmeldingen (indien ingeschakeld) en het visuele scorebord veel boeiender en officiëler.',
        '<strong>Activeer Volledig Scherm:</strong> Klik op de volledig scherm knop in het headerpaneel. Dit maximaliseert het scorebord en helpt voorkomen dat het scherm automatisch uitschakelt tijdens lange rally\'s.',
      ],
    },
    {
      type: 'title',
      text: 'Waarom een Digitale Padel Scorehouder Gebruiken?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In plaats van voortdurend te discussiëren over wie serveert, wie moet ontvangen of wat de gamestand is, houdt een digitale tracker iedereen op één lijn. Door de server- en ontvangerposities visueel op het scherm weer te geven, kunnen spelers snel op de telefoon op de bank kijken en precies weten waar ze moeten staan. Dit versnelt het spel en voorkomt rotatiefouten.',
    },
  ],
  ui: {
    playerA: 'Team 1',
    playerB: 'Team 2',
    game: 'Game',
    set: 'Set',
    tiebreak: 'Tiebreak',
    goldPoint: 'Goudpunt',
    selectReceiver: 'Kies Ontvanger',
    leftReceiver: 'Linker Ontvanger',
    rightReceiver: 'Rechter Ontvanger',
    server: 'Server',
    receiver: 'Ontvanger',
    changeEnds: 'Wissel van Kant',
    matchWon: 'Wedstrijd Gewonnen',
    reset: 'Reset',
    resetConfirm: 'Wedstrijd resetten? Alle gegevens gaan verloren.',
    cancel: 'Annuleer',
    fullscreen: 'Volledig Scherm',
    exitFullscreen: 'Volledig Scherm Afsluiten',
    deuce: 'Deuce',
    advantage: 'Voordeel',
    formatStandard: '6 Games',
    formatGoldenSet: '4 Games',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Goudpunt Beslissend Punt',
  },
};
