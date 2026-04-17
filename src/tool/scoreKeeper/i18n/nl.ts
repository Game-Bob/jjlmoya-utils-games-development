import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'sport-scorebord';
const title = 'Online Sport Scorebord: Gratis Score Teller (2026)';
const description =
  'Digitaal scorebord met gigantische knoppen voor mobiel. Ideaal voor padel, pingpong en voetbal. Geen irritante advertenties tijdens het spel. Simpel en snel.';

const faqData = [
  {
    question: 'Werkt het zonder internetverbinding?',
    answer:
      'Ja, zodra de pagina is geladen, werkt het scorebord volledig offline. Je hebt geen data of WiFi nodig tijdens de wedstrijd. Alles wordt lokaal opgeslagen in je browser.',
  },
  {
    question: 'Kan ik het scorebord gebruiken voor tennis en padel?',
    answer:
      'Ja, de Tennis/Padel-modus verwerkt automatisch de 15-30-40-AD volgorde en houdt sets en games bij volgens de officiële regels. Perfect voor vriendschappelijke wedstrijden.',
  },
  {
    question: 'Kan het op volledig scherm worden gezet?',
    answer:
      'Ja, je kunt de volledig scherm-modus activeren via je browser (F11 op PC, of de volledig scherm-knop op mobiel). Cijfers nemen 80% van het scherm in voor maximale zichtbaarheid.',
  },
  {
    question: 'Hoe corrigeer ik een punt als ik een fout maak?',
    answer:
      'Er is een aparte knop om punten af te trekken op elke spelerskaart. Je kunt snel fouten corrigeren zonder het hele scorebord te hoeven resetten.',
  },
  {
    question: 'Werkt het voor basketbal met 1-, 2- en 3-punts scores?',
    answer:
      'Ja, in de Basketbal-modus verschijnen speciale +1, +2 en +3 knoppen om elke actie snel te scoren zonder extra handelingen.',
  },
  {
    question: 'Verwerkt het scorebord automatisch de service bij pingpong?',
    answer:
      'Ja, in de Pingpong-modus wisselt de service-indicator automatisch elke 2 punten (of elk punt bij een deuce), volgens de officiële ITTF-regels.',
  },
];

const howToData = [
  {
    name: 'Selecteer je sport',
    text: 'Kies de sport uit de selector bovenaan: Vrij, Tennis, Padel, Pingpong, Volleybal of Basketbal.',
  },
  {
    name: 'Namen aanpassen',
    text: 'Tik op "THUIS" of "UIT" om de namen van de spelers of teams te wijzigen.',
  },
  {
    name: 'Punten toevoegen met één tik',
    text: 'Tik op het grote scorebordgedeelte om een punt toe te voegen. Gebruik bij basketbal de +1, +2 of +3 knoppen.',
  },
  {
    name: 'Service aangeven',
    text: 'Gebruik de serviceknop in de onderste hoek om aan te geven wie serveert. De gele indicator verschijnt automatisch.',
  },
  {
    name: 'Fouten corrigeren',
    text: 'Gebruik de "−" knop als je per ongeluk een punt hebt toegevoegd. Je hoeft niet het hele scorebord opnieuw op te starten.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Officiële Regels en Referenties',
  bibliography: [
    {
      name: 'ITTF: Officiële Tafeltennis (Pingpong) Regels',
      url: 'https://www.ittf.com/handbook/',
    },
    {
      name: 'ITF: Officiële Tennisregels',
      url: 'https://www.itftennis.com/en/about-us/governance/rules-and-regulations/',
    },
    {
      name: 'FIP: Officiële Padel Reglementen',
      url: 'https://www.padelfip.com/es/regulaciones/',
    },
    {
      name: 'FIVB: Officiële Volleybalregels',
      url: 'https://www.fivb.com/en/volleyball/thegame_volleyball/rulesofthegame_volleyball',
    },
    {
      name: 'FIBA: Officiële Basketbalregels',
      url: 'https://www.fiba.basketball/en/official-basketball-rules',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Je digitale scheidsrechter in je zak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In het heetst van de strijd is het makkelijk om de tel kwijt te raken. "Was het 4-3 of 3-4?". Dit scorebord is ontworpen om die geschillen op te lossen voordat ze beginnen. Met een interface van <strong>gigantische knoppen</strong> die bijna de hele kaart in beslag nemen, kun je punten toevoegen zonder naar het scherm te kijken, gewoon door je arm uit te steken naar de telefoon op de bank.',
    },
    {
      type: 'title',
      text: 'Slimme Sport Selector',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tennis / Padel Modus',
          description:
            'Aangepaste interface met Sets- en Games-tellers. Het systeem verwerkt automatisch de 15-30-40-AD volgorde.',
          icon: 'mdi:tennis',
          points: ['Officiële regels', 'Advantage beheer', 'Sets teller'],
        },
        {
          title: 'Basketbal Modus',
          description:
            'Het scorebord detecteert de sport en verandert de interface. Speciale +1, +2 en +3 knoppen.',
          icon: 'mdi:basketball',
          points: ['Snelle driepunters', 'Vrije worpen', 'Geen extra handelingen'],
        },
        {
          title: 'Pingpong Modus',
          description:
            'Vergeet het onthouden van wiens beurt het is om te serveren. De visuele indicator wisselt automatisch elke 2 punten.',
          icon: 'mdi:table-tennis',
          points: ['ITTF regels', 'Service rotatie', 'Deuce modus (11 pnt)'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Functies Ontworpen voor Sport',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Hoge Zichtbaarheid:</strong> Cijfers die 80% van het scherm beslaan voor maximale leesbaarheid in de zon.',
        '<strong>Bewerkbare Namen:</strong> Tik op "THUIS" of "UIT" om de spelersnamen in te stellen.',
        '<strong>Foutpreventie:</strong> Aparte minknop om snel fouten te corrigeren zonder te herstarten.',
        '<strong>Werkt Offline:</strong> Eenmaal geladen is er geen internet nodig tijdens de wedstrijd.',
      ],
    },
  ],
  ui: {
    playerA: 'THUIS',
    playerB: 'UIT',
    swapSides: 'Wissel kanten',
    reset: 'Reset',
    serve: 'Service',
    sets: 'Sets',
    games: 'Games',
    victory: 'OVERWINNING!',
    newGame: 'Nieuw Spel',
    continueGame: 'Verder spelen',
    resetConfirm: 'Scorebord resetten?',
    sportSimple: 'Vrij (Voetbal, Boter-kaas-en-eieren...)',
    sportTennis: 'Tennis',
    sportPadel: 'Padel',
    sportPingpong: 'Pingpong',
    sportVolleyball: 'Volleyball',
    sportBasket: 'Basketball',
  },
};
