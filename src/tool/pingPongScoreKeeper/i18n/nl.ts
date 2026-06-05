import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'pingpong-scorebord';
const title = 'Pingpong Scorebord Online : Gratis Tafeltennis Tracker';
const description =
  'Volg tafeltenniswedstrijden met game- en set-scores. Gratis online pingpong-scorebord voor vriendschappelijke wedstrijden en toernooien. Geen registratie nodig.';

const faqData = [
  {
    question: 'Hoe werkt de puntentelling bij pingpong?',
    answer:
      'Een standaard pingpongspel wordt gespeeld tot 11 punten. Je moet winnen met 2 punten verschil. Als de score 10-10 bereikt, wordt er door gespeeld tot iemand 2 punten voor staat. De server wisselt elke 2 punten. Dit scorebord houdt dit allemaal automatisch bij.',
  },
  {
    question: 'Hoe gebruik ik dit scorebord?',
    answer:
      'Druk op de + knop onder elke speler om een punt toe te voegen. De score wordt automatisch bijgewerkt. Wanneer een speler 11 punten haalt met 2 punten voorsprong, eindigt het spel en begint een nieuw spel. De teller voor gewonnen spellen houdt bij hoeveel spellen elke speler heeft gewonnen. Druk op Wedstrijd beëindigen als de wedstrijd voorbij is.',
  },
  {
    question: 'Hoe werkt de serverindicator?',
    answer:
      'De server wisselt elke 2 punten. Er verschijnt een stip naast de speler die serveert. Dit volgt de officiële tafeltennisregels. Je kunt op elk moment tijdens de wedstrijd zien wie moet serveren.',
  },
  {
    question: 'Kan ik het op mijn telefoon gebruiken tijdens een wedstrijd?',
    answer:
      'Ja. De interface is mobielvriendelijk met grote knoppen. De volledige-schermmodus verbergt de browser en houdt het scherm ingeschakeld.',
  },
  {
    question: 'Worden mijn wedstrijdgegevens opgeslagen?',
    answer:
      'Ja. De huidige score, gewonnen spellen en spelersnamen worden automatisch opgeslagen in je browser.',
  },
];

const howToData = [
  {
    name: 'Spelers een naam geven',
    text: 'Tik op de standaard spelersnaam en typ je eigen naam in. Namen worden automatisch opgeslagen.',
  },
  {
    name: 'Een punt toevoegen',
    text: 'Druk op de grote ronde + knop voor de speler die scoorde. De score wordt bijgewerkt met een feestelijke animatie.',
  },
  {
    name: 'Een punt verwijderen',
    text: 'Druk op de min-knop als je per ongeluk een punt hebt toegevoegd.',
  },
  {
    name: 'Een nieuw spel starten',
    text: 'Wanneer een spel eindigt, druk dan op Nieuw spel om het volgende te starten. Of druk op Wedstrijd beëindigen om de wedstrijd af te sluiten.',
  },
  {
    name: 'De wedstrijd beëindigen',
    text: 'Druk op Wedstrijd beëindigen om de winnaar te zien met een trofee en confetti.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Gratis Online Pingpong Scorebord : Tafeltennis Wedstrijd Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De score bijhouden bij pingpong zou simpel moeten zijn, maar de regels kunnen verwarrend zijn. Wie serveert er nu? Staat het 10-10 of 11-9? Hoeveel spellen heeft elke speler gewonnen? Dit gratis online pingpong-scorebord regelt dat allemaal automatisch. Je drukt gewoon op de + knop wanneer iemand scoort. Het scorebord houdt punten per spel, gewonnen spellen in de wedstrijd en wie er serveert bij. Alles werkt in realtime met feestelijke animaties die elk punt bijzonder maken. Geen aanmelding, geen downloads, geen ingewikkelde menu\'s.',
    },
    {
      type: 'title',
      text: 'Hoe de pingpongscore werkt in dit scorebord',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tafeltennis volgt een standaard scoresysteem. Elk spel wordt gespeeld tot 11 punten. Een speler moet winnen met 2 punten verschil, dus als de score 10-10 bereikt, wordt er door gespeeld tot iemand 2 punten voor staat. De server wisselt elke 2 punten tijdens een spel. Dit scorebord volgt al deze regels automatisch. Je hoeft niet te onthouden wie er serveert of wanneer er gewisseld moet worden. De serverindicator toont een stip naast de huidige server. Wanneer een speler een spel wint, gaat het scorebord automatisch naar het volgende spel. De teller voor gewonnen spellen wordt verhoogd voor de winnaar. Een wedstrijd kan uit elk aantal spellen bestaan, maar is meestal best of 5 of 7. Druk op Wedstrijd beëindigen wanneer de wedstrijd voorbij is en de winnaar wordt aangekondigd met een feest.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vriendschappelijke Wedstrijden',
          description: 'Snelle en eenvoudige score voor casual pingpong met vrienden. Automatische spel- en wedstrijdregistratie.',
          icon: 'mdi:table-tennis',
          points: ['Eén tik per punt', 'Automatische serverregistratie', 'Werkt offline'],
        },
        {
          title: 'Club & Competitie',
          description: 'Houd een nette registratie bij van spellen en wedstrijdresultaten. Perfect voor clubtoernooien en competities.',
          icon: 'mdi:trophy-outline',
          points: ['Registratie gewonnen spellen', 'Best of 5 of 7 ondersteuning', 'Mobielvriendelijk'],
        },
        {
          title: 'Toernooien',
          description: 'Volg meerdere wedstrijden in een toernooiomgeving. Snel resetten tussen wedstrijden.',
          icon: 'mdi:school',
          points: ['Snelle wedstrijdreset', 'Score blijft behouden', 'Volledige-schermmodus'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wat dit pingpong-scorebord bijzonder maakt',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatische spelscore</strong> het scorebord kent de regels van pingpong. Spellen tot 11, winnen met 2 punten verschil, automatische serverwissels.',
        '<strong>Gewonnen spellen registreren</strong> elk gewonnen spel wordt vastgelegd. Zie in één oogopslag hoeveel spellen elke speler in de wedstrijd heeft gewonnen.',
        '<strong>Serverindicator</strong> een zichtbare stip toont welke speler serveert, volgens de 2-punten-rotatieregel.',
        '<strong>Feestelijke animaties</strong> elk punt activeert een willekeurige feestelijke animatie. Acht verschillende effecten houden elk punt spannend.',
        '<strong>Zwevende deeltjes</strong> elk gescoord punt genereert zwevende tekst die het moment viert.',
        '<strong>Wedstrijdafsluitingsceremonie</strong> tik op Wedstrijd beëindigen om een winnaarsaankondiging met trofee en confetti te activeren.',
        '<strong>Bewerkbare spelersnamen</strong> tik op het naamveld om spelers te hernoemen. Namen worden opgeslagen in je browser.',
        '<strong>Volledige-schermmodus</strong> verbergt de browserinterface zodat het scorebord het hele scherm vult en het scherm aan blijft.',
        '<strong>Offline eerst</strong> werkt zonder internet. Geen advertenties, geen tracking, geen gegevensverzameling.',
      ],
    },
    {
      type: 'title',
      text: 'Pingpong Scorebord vs Handmatige Score',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Handmatige score bij pingpong vereist het bijhouden van de score, onthouden wie serveert, weten wanneer servers wisselen en het tellen van gewonnen spellen. Het is makkelijk om de tel kwijt te raken, vooral in een snel spel. Dit digitale scorebord regelt alles automatisch. Je hoeft alleen op een knop te drukken wanneer er een punt wordt gescoord. Het scorebord houdt de spelscore bij, detecteert wanneer een spel is gewonnen, registreert gewonnen spellen in de wedstrijd en toont wie er serveert. Elk punt wordt gevierd met animaties en deeltjes. De score raakt nooit in de war en je mist nooit een serverwissel. Of je nu een casual spelletje speelt met vrienden of meedoet aan een toernooi, dit gratis online pingpong-scorebord geeft je alles wat je nodig hebt.',
    },
  ],
  ui: {
    playerA: 'Speler 1',
    playerB: 'Speler 2',
    winnerLabel: 'KAMPIOEN',
    finishMatch: 'Wedstrijd beëindigen',
    newGame: 'Nieuw spel',
    serving: 'Serveren',
    changeSide: 'Wissel van kant',
    swapHint: 'Tik om te wisselen',
    game: 'Spel',
    set: 'Set',
    gamePoint: 'Spelpunt',
    matchPoint: 'Wedstrijdpunt',
    mode: 'Formaat',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Punten',
    reset: 'Resetten',
    resetConfirm: 'Wedstrijd resetten? Alle gegevens gaan verloren.',
    cancel: 'Annuleren',
    fullscreen: 'Volledig scherm',
    exitFullscreen: 'Volledig scherm verlaten',
  },
};
