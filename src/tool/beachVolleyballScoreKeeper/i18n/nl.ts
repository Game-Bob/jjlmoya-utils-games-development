import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'beachvolleybal-scorehouder';
const title = 'Beachvolleybal Scorehouder en Rotatie Tracker';
const description = 'Volg beachvolleybal scores, serveerrotatie volgorde, wind wisselbeurten en sets met een interactieve top-down visualisatie van een goudkleurig zandveld.';

const faq = [
  {
    question: 'Wanneer wisselen teams van kant bij beachvolleybal?',
    answer: 'Om eerlijkheid te garanderen bij buitenomstandigheden (wind, zon, zand) wisselen teams elke 7 punten tijdens de eerste twee sets en elke 5 punten tijdens de derde beslissende set.',
  },
  {
    question: 'Hoe werkt de serveerrotatie bij beachvolleybal?',
    answer: 'Elk team heeft 2 spelers die moeten afwisselen met serveren. Wanneer een team een servicebreak (side-out) wint, moet de server worden gewisseld zodat de speler die de vorige keer niet serveerde nu serveert.',
  },
  {
    question: 'Hoeveel punten zijn er nodig om een beachvolleybal set te winnen?',
    answer: 'Set 1 en 2 worden gespeeld tot 21 punten. Als een derde set nodig is, wordt deze gespeeld tot 15 punten. In alle gevallen moet een team met minimaal 2 punten verschil winnen.',
  },
];

const howTo = [
  {
    name: 'Opstelling Instellen',
    text: 'Voer aangepaste namen in voor de twee spelers van zowel Team A als Team B.',
  },
  {
    name: 'Punten Registreren',
    text: 'Tik op een teamkaart of klik op het interactieve zandveld om punten toe te voegen. De opstelling en rotatie worden automatisch bijgewerkt.',
  },
  {
    name: 'Kantwissel Waarschuwingen Opvolgen',
    text: 'Wanneer de wisselbanner naar beneden schuift, voer dan een fysieke kantwissel uit en klik op de wisselknop om de veldoriëntatie om te keren.',
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

export const content: BeachVolleyballLocaleContent = {
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
      text: 'Online Beachvolleybal Scorebord en Serveerrotatie Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het bijhouden van de serveervolgorde en teamposities onder de hete zon kan lastig zijn. Deze professionele beachvolleybal scorehouder heeft een zandgetextureerde, hoogcontrast digitale veldindeling geoptimaliseerd voor zichtbaarheid buiten. Het voorkomt problemen met schittering, automatiseert de kantwisselregels en houdt bij welke van de twee spelers moet serveren na elke side-out.',
    },
    {
      type: 'title',
      text: 'Begrijpen van Beachvolleybal Rotatie en Serveerregels',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hoewel er geen vaste posities of rotatiefouten zijn op basis van veldlocaties in 2v2 beachvolleybal, moeten spelers strikt afwisselen met serveren. Wanneer een ontvangend team een rally wint (een side-out), verdienen ze het recht om te serveren. De speler die de vorige keer niet serveerde toen hun team aan de beurt was, moet de nieuwe server zijn. Serveren in de verkeerde volgorde is een fout en levert een punt op voor de tegenstander. Dit digitale bord toont actieve serveerindicatoren en stuiterende balpictogrammen naast de spelerscirkels om rotatiefouten te voorkomen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Officiële FIVB Regels',
          description: 'Voldoe aan de officiële scorerichtlijnen, inclusief setlimieten en kantwissels.',
          icon: 'mdi:volleyball',
          points: ['Sets tot 21 (tiebreak tot 15)', 'Strikte winst met 2 punten verschil', 'Geautomatiseerde kantwissels'],
        },
        {
          title: 'Rotatie Tracking',
          description: 'Nooit meer discussiëren over wie er moet serveren.',
          icon: 'mdi:account-sync-outline',
          points: ['Oplichtende serveerindicatoren', 'Initialen op het zand', 'Opstelling overlay modaal'],
        },
        {
          title: 'Geoptimaliseerd voor Buiten',
          description: 'Gebouwd voor gebruik op zandvelden onder direct zonlicht.',
          icon: 'mdi:weather-sunny',
          points: ['Hoogcontrast geel thema', 'Wake Lock schermpersistentie', 'Veeg gebaar om score ongedaan te maken'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interactieve Functies en Spelinstellingen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gouden Zand SVG Veld:</strong> Weerspiegelt visueel de staat van het spel. Tik direct op een van de veldhelften om een punt aan dat team toe te kennen.',
        '<strong>Veldrotatie Animatie:</strong> Wanneer de kantwisselwaarschuwing afgaat, roteert het klikken op de wisselknop het gehele SVG veld 180 graden zodat het display overeenkomt met uw fysieke posities.',
        '<strong>FIVB Kantwissel Alarmen:</strong> Toont een goed zichtbare waarschuwingsbanner wanneer de gecombineerde score een veelvoud van 7 is (in sets 1 en 2) of een veelvoud van 5 (in de laatste set).',
        '<strong>Zandspetter Deeltjes:</strong> Voegt visuele feedback toe bij scorewijzigingen met geanimeerde zanddeeltjes die uit de tikcoördinaten barsten.',
        '<strong>Gebaar Ongedaan Maken:</strong> Veeg omlaag op de kaart om het laatste geregistreerde punt onmiddellijk ongedaan te maken.',
      ],
    },
    {
      type: 'title',
      text: 'Waarom Wisselen Teams van Kant bij Beachvolleybal?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In tegenstelling tot zaalvolleybal worden beachvolleybalwedstrijden sterk beïnvloed door omgevingsfactoren zoals zonschittering, hitte, windkracht en zandconsistentie. Regelmatig van kant wisselen zorgt ervoor dat geen van beide teams een oneerlijk voordeel krijgt door een gunstige windrichting of de zon in de ogen. De regels schrijven voor dat teams elke 7 punten wisselen tijdens de eerste twee sets en elke 5 punten tijdens de derde set.',
    },
  ],
  ui: {
    teamA: 'Team 1',
    teamB: 'Team 2',
    points: 'Punten',
    sets: 'Sets',
    reset: 'Resetten',
    resetConfirm: 'Wedstrijd resetten? Alle scores en opstellingen gaan verloren.',
    cancel: 'Annuleren',
    switchSides: 'Wissel van Kant',
    switchSidesDesc: 'Cumulatieve score heeft wisseldrempel bereikt!',
    fullscreen: 'Volledig Scherm',
    exitFullscreen: 'Volledig Scherm Verlaten',
    player1: 'Speler 1',
    player2: 'Speler 2',
    serving: 'Serveert',
    winner: 'Winnaar',
    undo: 'Ongedaan Maken',
  },
};
