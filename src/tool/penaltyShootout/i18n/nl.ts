import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'strafschoppen-calculator';
const title = 'Strafschoppen Scorebord Online: Live Penalty Tracker';
const description =
  'Volg penaltyseries in het voetbal live. Met 5-strafschoppen indicator, mathematische uitschakeling, sudden death en winnaarsfestijn.';

const faqData = [
  {
    question: 'Wanneer eindigt een strafschoppenserie voortijdig?',
    answer:
      'Een serie eindigt zodra een team een voorsprong opbouwt die het andere team met de resterende strafschoppen mathematisch niet meer kan inhalen.',
  },
  {
    question: 'Hoe werkt sudden death bij strafschoppen?',
    answer:
      'Bij een gelijke stand na 5 strafschoppen per team wordt er om en om per ronde genomen tot één team scoort en het andere mist.',
  },
  {
    question: 'Wie neemt de eerste strafschop in een serie?',
    answer:
      'De scheidsrechter tosst met een munt voor de doelkeuze en een tweede keer om te bepalen welk team als eerste trapt.',
  },
  {
    question: 'Mag de doelman worden vervangen tijdens een strafschoppenserie?',
    answer:
      'Een geblesseerde doelman die niet verder kan, mag worden vervangen door een aangewezen wisselspeler als het team nog wissels over heeft.',
  },
];

const howToData = [
  {
    name: 'Voer teamnamen in',
    text: 'Vul de gewenste namen van de teams in in de invoervelden voordat de serie begint.',
  },
  {
    name: 'Registreer elke strafschop',
    text: 'Klik op DOELPUNT of GEMIST na elke poging. De app bijwerkt de stand, indicatoren en beurt automatisch.',
  },
  {
    name: 'Overgang naar Sudden Death',
    text: 'Bij een gelijke stand na 5 pogingen per team schakelt de tool automatisch over naar sudden death.',
  },
  {
    name: 'Winnaar Bekendmaken',
    text: 'Bij een mathematische overwinning of sudden-death beslissing toont een geanimeerd venster het winnende team.',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Officiële IFAB Regels voor Strafschoppenseries',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Strafschoppenseries (officieel <em>nomen van strafschoppen vanaf de strafschopstip</em>) beslissen over de winnaar van een gelijkspel in een knock-outwedstrijd volgens Regel 10 van de IFAB Spelregels.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Eerste Strafschoppen' },
        { value: '11m', label: 'Afstand tot Doel' },
        { value: '1v1', label: 'Nemer vs Doelman' },
        { value: 'ABBA / AB', label: 'Volgorde van Trappen' },
      ],
    },
    {
      type: 'tip',
      title: 'Regel van Mathematische Uitschakeling',
      html: 'Als een team meer doelpunten heeft gescoord dan het andere team met de resterende strafschoppen nog kan behalen, stopt de serie direct.',
    },
    {
      type: 'title',
      text: 'Vergelijking Reguliere Fase vs Sudden Death',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Reguliere Fase (5 Strafschoppen)',
          description: 'Serie van 5 om en om genomen strafschoppen per team. Voortijdig einde alleen bij mathematische onmogelijkheid.',
        },
        {
          title: 'Sudden Death Fase',
          description: 'Enkele rondes vanaf ronde 6. Elk verschil in doelpunten na een gelijke hoeveelheid pogingen beslist de wedstrijd.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Belangrijkste IFAB Bepalingen',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Regel / Eisen', 'Officiële IFAB Standaard'],
      rows: [
        ['Speelgerechtigde Spelers', 'Alleen spelers die bij het eindsignaal op het veld staan mogen een strafschop nemen.'],
        ['Positie Doelman', 'Moet op het moment van trappen met minstens één deel van een voet op de doellijn staan.'],
        ['Schijnbewegingen', 'Schijnbewegingen tijdens de aanloop zijn toegestaan; schijnbewegingen aan het einde van de aanloop worden bestraft.'],
        ['Gelijk Aantal Spelers', 'Als een team minder spelers heeft door een rode kaart, moet de tegenstander zijn aantal spelers aanpassen.'],
      ],
    },
    {
      type: 'title',
      text: 'Voor en Nadelen van Strafschoppenseries',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Evaluatie van het Format',
      items: [
        {
          pro: 'Garanteert een duidelijke winnaar binnen een voorspelbare tijdsduur.',
          con: 'Extreem hoge psychologische druk kan de teamprestatie van 120 minuten overschaduwen.',
        },
        {
          pro: 'Biedt maximale spanning en spektakel voor supporters.',
          con: 'Een individuele misstap kan tot onevenredig grote schuldgevoelens leiden.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Thuisteam',
    teamBLabel: 'Uitteam',
    scoreGoal: 'DOELPUNT',
    scoreMiss: 'GEMIST',
    undo: 'Ongedaan maken',
    reset: 'Resetten',
    suddenDeath: 'Sudden Death',
    regularRounds: 'Reguliere Ronde',
    roundLabel: 'Ronde',
    turnLabel: 'Beurt om te trappen',
    winnerTitle: 'Winnaar Bekend',
    unreachableLead: 'Unbereikbare voorsprong in reguliere fase',
    regularRoundsWin: 'Winst na 5 reguliere strafschoppen',
    suddenDeathWin: 'Winst in sudden death',
    statusPending: 'In afwachting',
    statusScored: 'Gescoord',
    statusMissed: 'Gemist',
  },
};
