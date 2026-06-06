import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'streetball-3x3-scorehouder';
const title = 'Premium Streetball 3x3 Scorehouder met Schotklok';
const description = 'Volg FIBA 3x3 Streetball scores met een geïntegreerde 12-seconden schotklok, teamfouten, sudden death punten en dynamische halfcourt visuele indicatoren.';

const faq = [
  {
    question: 'Hoe werkt de 12-seconden schotklok in 3x3 Streetball?',
    answer: 'In FIBA 3x3 hebben teams slechts 12 seconden om een schot te nemen zodra ze balbezit hebben. De schotklok reset naar 12 bij balwissel of naar 14 seconden bij aanvallende rebounds en fouten onder specifieke omstandigheden.',
  },
  {
    question: 'Wat is de sudden death limiet in 3x3 Basketbal?',
    answer: 'Het eerste team dat 21 punten scoort, wint de wedstrijd onmiddellijk, ongeacht de resterende tijd op de wedstrijdklok. Dit is de sudden death regel.',
  },
  {
    question: 'Hoe beïnvloeden teamfouten de wedstrijd?',
    answer: 'Vanaf de 7e teamfout krijgen tegenstanders 2 vrije worpen. Bij de 10e en volgende fouten ontvangen zij 2 vrije worpen plus balbezit, wat de penalty status activeert.',
  },
];

const howTo = [
  {
    name: 'Teamnamen Instellen',
    text: 'Voer aangepaste namen in voor de twee streetball teams om het HUD aan te passen.',
  },
  {
    name: 'Punten en Balbezit Registreren',
    text: 'Tik op het interactieve asfaltveld om 1 punt (binnen de lijn) of 2 punten (buiten de lijn) toe te voegen en de balbezit indicator te wijzigen.',
  },
  {
    name: 'Schotklok Bedienen',
    text: 'Tik op de schotklok om te resetten naar 12, klik op de secundaire reset voor 14, of dubbeltik om de aftelling te pauzeren.',
  },
  {
    name: 'Teamfouten Beheren',
    text: 'Houd teamfouten bij met de teller, die rood kleurt zodra de penalty status is bereikt (7+ fouten).',
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

export const content: StreetballLocaleContent = {
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
      text: 'Gratis Online 3x3 Streetball Scorebord',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het bijhouden van de score in snelle 3v3 basketbalwedstrijden kan lastig zijn terwijl je een korte schotklok beheert en teamfouten registreert. Dit gratis online 3x3 streetball scorebord heeft een industrieel asfalt thema met krachtige neon styling. Het regelt automatisch de 12-seconden schotklok, wedstrijdklok, fouten strafsysteem en balbezit indicatoren.',
    },
    {
      type: 'title',
      text: 'FIBA 3x3 Streetball Score- en Schotklok Regels',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3 streetball verschilt van traditioneel 5v5 basketbal. Wedstrijden duren één periode van 10 minuten of eindigen onmiddellijk wanneer een team 21 punten scoort (sudden death). Schoten binnen de lijn en vrije worpen tellen voor 1 punt, terwijl schoten van achter de 6,75m lijn tellen voor 2 punten. De 12-seconden schotklok dwingt snelle aanvallende acties af, en spelers moeten de bal achter de lijn brengen bij een balwissel.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Informele Potjes',
          description: 'Snel score bijhouden voor straatbasketbal met vrienden op lokale velden.',
          icon: 'mdi:basketball',
          points: ['Eenvoudige punt triggers', 'Responsieve lay-out', 'Werkt offline'],
        },
        {
          title: 'Toernooi Spel',
          description: 'Perfect voor officiële 3x3 toernooien en streetball competities.',
          icon: 'mdi:trophy-outline',
          points: ['10 minuten aftelling', 'Sudden death bij 21 punten', 'Fout penalty statussen'],
        },
        {
          title: 'Scheidsrechter Dashboard',
          description: 'Ontworpen voor scheidsrechters om snelle schotklok resets en balbezit te beheren.',
          icon: 'mdi:school',
          points: ['12s en 14s schotklok resets', 'Zoemer geluiden', 'Tactiele knop gebaren'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interactieve Bediening en Tactiele Animatie',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12 Seconden Schotklok</strong> knippert rood en toont decimalen onder 4 seconden, gevolgd door een gesimuleerde zoemer.',
        '<strong>Interactieve Betonnen Halfcourt</strong> laat je op de 1-punts en 2-punts gebieden tikken om scores direct op het diagram vast te leggen.',
        '<strong>Foutenteller Waarschuwing</strong> wordt rood en trilt om teamfout straffen aan te geven (7+ en 10+ fouten).',
        '<strong>Bal Vrijgeven Indicator</strong> toont een herinnering wanneer balbezit wisselt totdat de bal achter de lijn is gebracht.',
        '<strong>Timeout Tracker</strong> start een aftelling van 30 seconden met aangepaste geluidswaarschuwingen.',
      ],
    },
    {
      type: 'title',
      text: 'Waarom een Digitale Streetball Tracker Gebruiken?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een digitaal scorebord elimineert meningsverschillen over scores, fouten of schotklok overtredingen op het asfalt. De felle neon cijfers zijn goed leesbaar van afstand, en de automatische balbezit en vrijgave herinneringen zorgen ervoor dat de wedstrijd soepel verloopt zonder onderbrekingen.',
    },
  ],
  ui: {
    teamA: 'Team 1',
    teamB: 'Team 2',
    points: 'Punten',
    fouls: 'Fouten',
    timeouts: 'Time-outs',
    shotClock: 'Schotklok',
    reset: 'Reset',
    resetConfirm: 'Wedstrijd resetten? Alle gegevens gaan verloren.',
    cancel: 'Annuleren',
    gameTime: 'Tijd',
    possession: 'Balbezit',
    clearBall: 'Bal Vrijgeven',
    matchWon: 'Wedstrijd Gewonnen',
    timeoutActive: 'Time-out',
    penalty: 'Straf',
    fullscreen: 'Volledig Scherm',
    exitFullscreen: 'Volledig Scherm Afsluiten',
    overtime: 'Verlenging',
    ptsInside: '+1 Punt',
    ptsOutside: '+2 Punten',
    toggleSound: 'Geluid Aan/Uit',
    soundOn: 'Geluid Aan',
    soundOff: 'Geluid Uit',
  },
};
