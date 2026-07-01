import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'tennis-scorebord';
const title = 'Tennis Scorebord Online: Gratis Wedstrijd Tracker';
const description = 'Volg tenniswedstrijden met set- en game-scores. Gratis online tennis-scorebord voor wedstrijden en toernooien. Geen registratie nodig.';

const faqData = [
  {
    question: 'Hoe werkt de puntentelling bij tennis?',
    answer: 'Tenniswedstrijden worden gespeeld in games en sets. Een game wordt gescoord als Love, 15, 30, 40. Een score van 40-40 heet Deuce, waarbij een speler 2 opeenvolgende punten moet winnen. Een set wordt gewonnen door de eerste speler die 6 games wint met een marge van 2 games. Bij 6-6 wordt een tiebreak gespeeld.',
  },
  {
    question: 'Hoe gebruik ik dit tennis-scorebord?',
    answer: 'Druk op de plus-knop voor een speler wanneer hij scoort. De score wordt automatisch bijgewerkt. Het scorebord houdt de serveervolgorde, game-scores, huidige sets en voltooide setgeschiedenissen bij.',
  },
  {
    question: 'Wanneer wisselen tennissers van kant?',
    answer: 'Tennissers wisselen van kant na de eerste, derde en elke volgende oneven game van elke set. Ze wisselen ook aan het einde van een set, tenzij het totale aantal games even is. In een tiebreak wisselen spelers elke 6 punten van kant.',
  },
  {
    question: 'Ondersteunt dit scorebord tiebreaks?',
    answer: 'Ja, wanneer een set 6-6 bereikt, gaat het scorebord automatisch naar de tiebreak-modus waarbij punten numeriek worden geteld tot 7. Een speler moet met 2 punten verschil winnen om de tiebreak en set te beëindigen.',
  },
  {
    question: 'Kan ik dit op mijn mobiele telefoon gebruiken?',
    answer: 'Ja, de interface is geoptimaliseerd voor mobiele apparaten met grote knoppen. Je kunt ook de volledige-schermmodus inschakelen om het scherm tijdens de wedstrijd aan te houden.',
  },
];

const howToData = [
  {
    name: 'Spelersnamen instellen',
    text: 'Tik op de invoervelden voor spelersnamen om aangepaste namen in te typen. Ze worden opgeslagen in je browser.',
  },
  {
    name: 'Punten toevoegen',
    text: 'Klik op de plus-knop voor de speler die de rally heeft gewonnen. De score wordt automatisch bijgewerkt.',
  },
  {
    name: 'Setresultaten beheren',
    text: 'De tracker sluit automatisch games en sets af. Het archiveert voltooide sets en gaat naar de volgende set.',
  },
  {
    name: 'Wissel van kant',
    text: 'Het scorebord waarschuwt je wanneer spelers van kant moeten wisselen. Tik op de wisselknop om de visuele kanten om te draaien.',
  },
  {
    name: 'Wedstrijd afsluiten',
    text: 'De tracker sluit de wedstrijd automatisch af volgens de tennisregels en kondigt de winnaar aan.',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Gratis Online Tennis Scorebord en Wedstrijd Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De score bijhouden bij tennis kan een uitdaging zijn met termen als deuce, advantage en tiebreak. Dit gratis online tennis-scorebord automatiseert het hele proces. Je hoeft alleen maar op de plus-knop te drukken wanneer een speler scoort. De tool beheert punten, games, sets en kantwissels automatisch in realtime.',
    },
    {
      type: 'title',
      text: 'Hoe de tennisscore werkt in dit scorebord',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tennis gebruikt een unieke scorestructuur. Een standaard game verloopt via Love, 15, 30, 40 en Game. Wanneer beide spelers 40 bereiken, is de score Deuce. Vanaf Deuce moet een speler twee opeenvolgende punten scoren om de game te winnen. Het eerste punt heet Advantage, en het volgende punt veiligstelt de game. Als de tegenstander het volgende punt wint, gaat de score terug naar Deuce. Sets worden gewonnen door de eerste speler die 6 games wint met een marge van 2. Wanneer de set 6-6 bereikt, wordt een tiebreak gespeeld tot 7 punten.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vriendschappelijke Wedstrijden',
          description: 'Snelle en eenvoudige score voor informele tenniswedstrijden met vrienden.',
          icon: 'mdi:tennis',
          points: ['Score met een tik', 'Kantwissel-indicator', 'Werkt offline'],
        },
        {
          title: 'Clubspel',
          description: 'Perfecte tracking voor clubwedstrijden en toernooien.',
          icon: 'mdi:trophy-outline',
          points: ['Setgeschiedenis archief', 'Best of 3 of 5 sets', 'Mobielvriendelijke lay-out'],
        },
        {
          title: 'Toernooimodus',
          description: 'Ontworpen voor officiële wedstrijdtracking en scheidsrechtergebruik.',
          icon: 'mdi:school',
          points: ['Tiebreak-ondersteuning', 'Volledig scherm scorebord', 'Lokale gegevensveiligheid'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Speciale Scorebordfuncties',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatische tennisregellogica</strong> berekent Love, 15, 30, 40, deuce, advantage en tiebreak automatisch.',
        '<strong>Setgeschiedenis archief</strong> toont de score van vorige sets in één oogopslag.',
        '<strong>Kantwissel-hulp</strong> attendeert spelers wanneer ze van kant moeten wisselen.',
        '<strong>Levendige scorevieringen</strong> toont zwevende deeltjes voor gewonnen punten.',
        '<strong>Best of 3 of 5 sets</strong> configureerbare wedstrijdformaat-instellingen.',
        '<strong>Namen lokaal opgeslagen</strong> houdt aangepaste namen bij tussen bezoeken.',
      ],
    },
    {
      type: 'title',
      text: 'Digitale Score vs Handmatige Tracking',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Handmatige scoreborden vereisen constante concentratie om cijfers bij te werken, de serveervolgorde te onthouden, tiebreaks te controleren en kantwissels te berekenen. Dit digitale tennis-scorebord handhaaft elke tennisregel automatisch. Je kunt je volledig concentreren op de wedstrijd terwijl de tool setgeschiedenissen bijwerkt en de winnaar aankondigt met een feestelijke ceremonie.',
    },
  ],
  ui: {
    playerA: 'Speler 1',
    playerB: 'Speler 2',
    winnerLabel: 'KAMPIOEN',
    finishMatch: 'Wedstrijd beëindigen',
    newGame: 'Nieuwe set',
    serving: 'Serveren',
    changeSide: 'Wissel van kant',
    swapHint: 'Tik om van kant te wisselen',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Gamepunt',
    setPoint: 'Setpunt',
    matchPoint: 'Wedstrijdpunt',
    mode: 'Sets',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Punten',
    reset: 'Resetten',
    resetConfirm: 'Wedstrijd resetten? Alle gegevens gaan verloren.',
    cancel: 'Annuleren',
    fullscreen: 'Volledig scherm',
    exitFullscreen: 'Volledig scherm verlaten',
    deuce: 'Deuce',
    advantage: 'Voordeel',
    tiebreak: 'Tiebreak',
  },
};
