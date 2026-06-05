import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'darts-scorebord';
const title = 'Darts Scorebord Online : Leg en Set Tracker';
const description = 'Volg darts-wedstrijden met leg- en set-scores. Gratis online darts-scorebord voor 501 en 301 wedstrijden met live checkout-berekeningen en statistieken.';

const faqData = [
  {
    question: 'Hoe werkt darts scoren in 501 en 301?',
    answer: 'Spelers beginnen met een vaste score van 501 of 301 punten. Elke speler gooit om de beurt drie pijlen, en de totale waarde van die worpen wordt van hun score afgetrokken. Het doel is om exact nul punten te bereiken. Als de Double Out-regel is ingeschakeld, moet de laatste winnende pijl op een dubbel segment of de binnenste bullseye landen.',
  },
  {
    question: 'Wat is een bust in darts en wanneer gebeurt het?',
    answer: 'Een bust vindt plaats wanneer een speler meer punten scoort dan zijn resterende totaal, of wanneer zijn score exact één punt bereikt terwijl de Double Out-regel actief is. Wanneer een speler bust, eindigt zijn beurt onmiddellijk en wordt zijn score teruggezet naar het totaal aan het begin van die beurt.',
  },
  {
    question: 'Hoe bereken je een darts-gemiddelde?',
    answer: 'Een darts-gemiddelde wordt berekend door het totale aantal gescoorde punten te delen door het totale aantal gegooide pijlen en het resultaat met drie te vermenigvuldigen. Dit vertegenwoordigt de gemiddelde score die een speler per standaard drie-pijlen-beurt behaalt.',
  },
  {
    question: 'Wat is een checkout in darts?',
    answer: 'Een checkout is de specifieke combinatie van worpen die nodig is om de resterende score tot nul terug te brengen en de leg te winnen. Professionele scoreborden tonen checkout-suggesties voor scores van 170 en lager, en begeleiden spelers naar welke singles, doubles of triples ze moeten mikken.',
  },
];

const howToData = [
  {
    name: 'Kies startscore en regels',
    text: 'Selecteer 501 of 301 als startscore en schakel de Double Out-regel in of uit, afhankelijk van je gewenste speelniveau.',
  },
  {
    name: 'Voer spelersnamen in',
    text: 'Klik op de spelersnaamvelden boven aan het scorebord om namen aan te passen. De waarden worden automatisch opgeslagen in je browser.',
  },
  {
    name: 'Gegooide pijlen registreren',
    text: 'Gebruik het interactieve toetsenbord of tik direct op de dartbordsegmenten om je worpen te registreren. Selecteer eerst de vermenigvuldiger (Enkel, Dubbel of Drievoud) en dan het geraakte nummer.',
  },
  {
    name: 'Volg checkout-aanbevelingen',
    text: 'Wanneer je resterende score onder de 170 zakt, kijk dan naar het checkout-paneel voor de optimale doelen om de leg te beëindigen.',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: 'Gratis Online Darts Scorebord en Wedstrijd Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het bijhouden van scores in darts vereist snel hoofdrekenen en concentratie. Deze digitale darts-leg-tracker voert alle berekeningen voor je uit, zodat je je volledig kunt concentreren op het gooien. Of je nu alleen traint of een competitieve wedstrijd speelt met vrienden, dit scorebord houdt punten, legs, sets, gooi-gemiddelden en double-out checkout-doelen bij.',
    },
    {
      type: 'title',
      text: 'Standaard Darts Scoreformaten Uitgelegd',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Darts-wedstrijden worden gespeeld in legs en sets. De wereldwijd meest populaire formaten zijn 501 en 301, beide aftrekspellen waarbij spelers hun score tot nul terugbrengen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '501 Toernooi',
          description: 'Het standaardformaat voor professionele toernooien wereldwijd.',
          icon: 'mdi:trophy-outline',
          points: ['Standaard startscore', 'Double-out vereist', 'Focus op hoge scores'],
        },
        {
          title: '301 Casual',
          description: 'Een snellere versie van het aftrekspel, ideaal voor snelle informele wedstrijden.',
          icon: 'mdi:clock-outline',
          points: ['Sneller spelritme', 'Double-in optie gebruikelijk', 'Geweldig om te oefenen'],
        },
        {
          title: 'Cricket Modus',
          description: 'Een strategisch mikspel populair in pubs en informele competities.',
          icon: 'mdi:bullseye',
          points: ['Focus op nummers 15-20', 'Bullseye tracking', 'Alternatief regelsysteem'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Darts Checkout Wiskunde Begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De hoogst mogelijke checkout in darts is 170, behaald door Triple 20, Triple 20 en Double Bull te gooien. Wanneer je score 170 of lager bereikt, kom je in checkout-bereik, waar een specifieke volgorde van pijlen het spel kan winnen.',
    },
    {
      type: 'table',
      headers: ['Score', 'Doel Pijl 1', 'Doel Pijl 2', 'Doel Pijl 3'],
      rows: [
        ['170', 'Triple 20 (60)', 'Triple 20 (60)', 'Double Bull (50)'],
        ['120', 'Triple 20 (60)', 'Single 20 (20)', 'Double 20 (40)'],
        ['100', 'Triple 20 (60)', 'Single 20 (20)', 'Double 10 (20)'],
        ['80', 'Triple 20 (60)', 'Double 10 (20)', '-'],
        ['40', 'Double 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Functies van dit Digitale Darts Scorebord',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Interactieve Invoermethoden</strong> schakel tussen een visueel radiaal dartbord en een snel numeriek toetsenbord.',
        '<strong>Slimme Checkout Engine</strong> toont live combinaties voor het beëindigen van legs.',
        '<strong>Bust Detectie</strong> reset automatisch ongeldige worpen en waarschuwt de gebruiker.',
        '<strong>Beurten Geschiedenis Log</strong> houdt eerdere rondes en resterende scores bij.',
        '<strong>Gedetailleerde Wedstrijdstatistieken</strong> berekent dynamisch drie-pijlen-gemiddelden.',
      ],
    },
    {
      type: 'title',
      text: 'Handmatig vs Digitaal Darts Bijhouden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Traditionele krijtborden vereisen schrijven, wissen en constante berekeningen. Dit online scorebord elimineert foutrisico, automatiseert gemiddelden en toont checkout-doelen. Zet je apparaat naast het bord, activeer de volledige-schermmodus om het scherm actief te houden en geniet van zorgeloos scoren.',
    },
  ],
  ui: {
    playerA: 'Speler 1',
    playerB: 'Speler 2',
    winnerLabel: 'KAMPIOEN',
    reset: 'Resetten',
    resetConfirm: 'Wedstrijd resetten? Alle gegevens gaan verloren.',
    cancel: 'Annuleren',
    fullscreen: 'Volledig scherm',
    exitFullscreen: 'Volledig scherm verlaten',
    leg: 'Leg',
    set: 'Set',
    average: 'Gem',
    checkout: 'Checkout',
    busted: 'Bust',
    dart: 'Pijlen Beurt',
    score301: '301',
    score501: '501',
    doubleOut: 'Double Out',
    noCheckout: 'Geen Checkout',
  },
};
