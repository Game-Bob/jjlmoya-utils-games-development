import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'tabellone-punti-sportivo';
const title = 'Tabellone Segnapunti Sportivo Online: Segnapunti Gratis';
const description =
  'Tabellone segnapunti digitale con bottoni giganti per mobili. Ideale per padel, ping-pong e calcio. Senza pubblicità fastidiose a metà partita. Semplice e veloce.';

const faqData = [
  {
    question: 'Funziona senza connessione internet?',
    answer:
      'Sì, una volta caricata la pagina, il tabellone funziona completamente offline. Non hai bisogno di dati o WiFi durante la partita. Tutto viene salvato localmente nel tuo browser.'
  },
  {
    question: 'Posso usare il tabellone per tennis e padel?',
    answer:
      'Sì, la modalità Tennis/Padel gestisce automaticamente la sequenza 15-30-40-AD e tiene traccia di set e game secondo le regole ufficiali. Perfetto per partite amichevoli.'
  },
  {
    question: 'Si può mettere a pieno schermo?',
    answer:
      'Sì, puoi attivare la modalità a schermo intero dal tuo browser (F11 su PC, o il tasto schermo intero su mobile). I numeri occupano l\'80% dello schermo per la massima visibilità.'
  },
  {
    question: 'Come correggo un punto se sbaglio?',
    answer:
      'C\'è un pulsante separato per sottrarre punti su ogni scheda giocatore. Puoi correggere rapidamente gli errori senza dover riavviare l\'intero tabellone.'
  },
  {
    question: 'Funziona per il basket con canestri da 1, 2 e 3 punti?',
    answer:
      'Sì, nella modalità Basket appaiono pulsanti dedicati +1, +2 e +3 per segnare ogni giocata velocemente senza tocchi extra.'
  },
  {
    question: 'Il tabellone gestisce automaticamente il servizio nel ping-pong?',
    answer:
      'Sì, in modalità Ping Pong l\'indicatore del servizio ruota automaticamente ogni 2 punti (o ogni punto in caso di parità), seguendo le regole ufficiali ITTF.'
  },
];

const howToData = [
  {
    name: 'Seleziona il tuo sport',
    text: 'Scegli lo sport dal selettore in alto: Libero, Tennis, Padel, Ping Pong, Pallavolo o Basket.'
  },
  {
    name: 'Personalizza i nomi',
    text: 'Tocca su "CASA" o "TRASFERTA" per cambiare i nomi dei giocatori o delle squadre.'
  },
  {
    name: 'Aggiungi punti con un tocco',
    text: 'Tocca l\'area grande del tabellone per aggiungere un punto. Nel basket, usa i pulsanti +1, +2 o +3.'
  },
  {
    name: 'Indica il servizio',
    text: 'Usa il pulsante del servizio nell\'angolo in basso per segnare chi sta servendo. L\'indicatore giallo appare automaticamente.'
  },
  {
    name: 'Correggi gli errori',
    text: 'Usa il pulsante "−" se hai aggiunto un punto per errore. Non c\'è bisogno di riavviare l\'intero tabellone.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: 'Il tuo arbitro digitale in tasca',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Nel vivo della partita, è facile perdere il conto. "Era 4-3 o 3-4?". Questo tabellone è progettato per risolvere queste dispute prima che inizino. Con un\'interfaccia di <strong>pulsanti giganti</strong> che occupano quasi l\'intera tessera, puoi aggiungere punti senza guardare lo schermo, semplicemente allungando il braccio verso il telefono sulla panchina.'
    },
    {
      type: 'title',
      text: 'Selettore Sportivo Intelligente',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Modalità Tennis / Padel',
          description:
            'Interfaccia adattata con contatori di Set e Game. Il sistema gestisce automaticamente la sequenza 15-30-40-AD.',
          icon: 'mdi:tennis',
          points: ['Regole ufficiali', 'Gestione vantaggi', 'Contatore set']
        },
        {
          title: 'Modalità Basket',
          description:
            'Il tabellone rileva lo sport e cambia la sua interfaccia. Pulsanti dedicati +1, +2 e +3.',
          icon: 'mdi:basketball',
          points: ['Triple veloci', 'Tiri liberi', 'Nessun tocco extra']
        },
        {
          title: 'Modalità Ping Pong',
          description:
            'Dimentica di dover memorizzare a chi tocca servire. L\'indicatore visivo ruota automaticamente ogni 2 punti.',
          icon: 'mdi:table-tennis',
          points: ['Regole ITTF', 'Rotazione servizio', 'Modalità deuce (11 pt)']
        },
      ]
    },
    {
      type: 'title',
      text: 'Caratteristiche Progettate per lo Sport',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Alta Visibilità:</strong> Numeri che occupano l\'80% dello schermo per la massima leggibilità sotto il sole.',
        '<strong>Nomi Modificabili:</strong> Tocca su "CASA" o "TRASFERTA" per impostare i nomi dei giocatori.',
        '<strong>Prevenzione Errori:</strong> Pulsante meno separato per correggere rapidamente gli errori senza riavviare.',
        '<strong>Funziona Offline:</strong> Una volta caricato, non è necessaria alcuna connessione internet durante la partita.',
      ]
    },
  ],
  ui: {
    playerA: 'CASA',
    playerB: 'TRASFERTA',
    swapSides: 'Scambia lati',
    reset: 'Reset',
    serve: 'Servizio',
    sets: 'Set',
    games: 'Game',
    victory: 'VITTORIA!',
    newGame: 'Nuova Partita',
    continueGame: 'Continua a giocare',
    resetConfirm: 'Resettare il tabellone?',
    sportSimple: 'Libero (Calcio, Tris...)',
    sportTennis: 'Tennis',
    sportPadel: 'Padel',
    sportPingpong: 'Ping Pong',
    sportVolleyball: 'Pallavolo',
    sportBasket: 'Basket'
  }
};
