import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'segnapunti-ping-pong';
const title = 'Segnapunti Ping Pong Online: Tracker Tennistavolo Gratuito';
const description =
  'Segui le partite di tennistavolo con punteggio di game e set. Segnapunti ping pong online gratuito per partite amichevoli e tornei. Nessuna registrazione necessaria.';

const faqData = [
  {
    question: 'Come funziona il punteggio nel ping pong?',
    answer:
      'Un gioco standard di ping pong si gioca a 11 punti. Bisogna vincere con 2 punti di scarto. Se il punteggio raggiunge il 10-10, si continua a giocare finché qualcuno non è in vantaggio di 2 punti. Il servizio cambia ogni 2 punti. Questo segnapunti gestisce tutto automaticamente.',
  },
  {
    question: 'Come si usa questo segnapunti?',
    answer:
      'Premi il pulsante + sotto ogni giocatore per aggiungere un punto. Il punteggio si aggiorna automaticamente. Quando un giocatore raggiunge 11 con 2 punti di vantaggio, il gioco termina e ne inizia uno nuovo. Il contatore dei game vinti tiene traccia di quanti game ha vinto ogni giocatore. Premi Termina partita quando l\'incontro è finito.',
  },
  {
    question: 'Come funziona l\'indicatore del servizio?',
    answer:
      'Il servizio cambia ogni 2 punti. Un punto appare accanto al giocatore che sta servendo. Segue le regole ufficiali del tennistavolo. Puoi sempre sapere chi dovrebbe servire durante la partita.',
  },
  {
    question: 'Posso usarlo sul telefono durante una partita?',
    answer:
      'Sì. L\'interfaccia è ottimizzata per i dispositivi mobili con grandi pulsanti. La modalità schermo intero nasconde il browser e mantiene lo schermo acceso.',
  },
  {
    question: 'Salva i dati della partita?',
    answer:
      'Sì. Il punteggio corrente, i game vinti e i nomi dei giocatori vengono salvati automaticamente nel browser.',
  },
];

const howToData = [
  {
    name: 'Assegna un nome ai giocatori',
    text: 'Tocca il nome predefinito del giocatore e inserisci il tuo. I nomi vengono salvati automaticamente.',
  },
  {
    name: 'Aggiungi un punto',
    text: 'Premi il grande pulsante circolare + del giocatore che ha segnato. Il punteggio si aggiorna con un\'animazione di festeggiamento.',
  },
  {
    name: 'Rimuovi un punto',
    text: 'Premi il pulsante meno se hai aggiunto un punto per errore.',
  },
  {
    name: 'Inizia un nuovo game',
    text: 'Quando un game termina, premi Nuovo game per iniziare il successivo. Oppure premi Termina partita per concludere l\'incontro.',
  },
  {
    name: 'Termina la partita',
    text: 'Premi Termina partita per vedere il vincitore annunciato con un trofeo e coriandoli.',
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
  inLanguage: 'it',
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
      text: 'Segnapunti Ping Pong Online Gratuito: Tracker Partite Tennistavolo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenere il punteggio nel ping pong dovrebbe essere semplice, ma le regole possono creare confusione. Chi serve dopo? È 10-10 o 11-9? Quanti game ha vinto ogni giocatore? Questo segnapunti ping pong online gratuito gestisce tutto automaticamente. Basta premere il pulsante + quando qualcuno segna. Il segnapunti tiene traccia dei punti per game, dei game vinti nella partita e di chi sta servendo. Tutto si aggiorna in tempo reale con animazioni di festeggiamento che rendono ogni punto importante. Nessuna registrazione, nessun download, nessun menu complicato.',
    },
    {
      type: 'title',
      text: 'Come funziona il punteggio del ping pong in questo segnapunti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il tennistavolo segue un sistema di punteggio standard. Ogni game si gioca a 11 punti. Un giocatore deve vincere con 2 punti di scarto, quindi se il punteggio raggiunge il 10-10, si continua a giocare finché qualcuno non è in vantaggio di 2. Il servizio cambia ogni 2 punti durante un game. Questo segnapunti segue tutte queste regole automaticamente. Non devi ricordare chi serve o quando cambiare. L\'indicatore del servizio mostra un punto accanto al giocatore che serve. Quando un giocatore vince un game, il segnapunti passa automaticamente al game successivo. Il contatore dei game vinti aumenta per il vincitore. Una partita può avere un numero qualsiasi di game, ma di solito è al meglio dei 5 o 7. Premi Termina partita quando l\'incontro è completo e il vincitore viene annunciato con una celebrazione.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partite Amichevoli',
          description: 'Punteggio rapido e semplice per il ping pong informale tra amici. Tracciamento automatico di game e partite.',
          icon: 'mdi:table-tennis',
          points: ['Un tocco per punto', 'Tracciamento automatico del servizio', 'Funziona offline'],
        },
        {
          title: 'Club & Leghe',
          description: 'Mantieni una registrazione pulita di game e risultati. Perfetto per tornei di club e partite di lega.',
          icon: 'mdi:trophy-outline',
          points: ['Tracciamento game vinti', 'Supporto al meglio di 5 o 7', 'Ottimizzato per mobili'],
        },
        {
          title: 'Tornei',
          description: 'Segui più partite in un contesto torneo. Reimpostazione rapida tra gli incontri.',
          icon: 'mdi:school',
          points: ['Reimpostazione rapida', 'Punteggio persistente', 'Modalità schermo intero'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cosa rende speciale questo segnapunti ping pong',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Punteggio automatico</strong> il segnapunti conosce le regole del ping pong. Game a 11, vittoria con 2 punti di scarto, cambi di servizio automatici.',
        '<strong>Tracciamento game vinti</strong> ogni game vinto viene registrato. Vedi a colpo d\'occhio quanti game ogni giocatore ha vinto nella partita.',
        '<strong>Indicatore di servizio</strong> un punto visibile mostra quale giocatore sta servendo, seguendo la regola di rotazione ogni 2 punti.',
        '<strong>Animazioni di festeggiamento</strong> ogni punto innesca un\'animazione casuale. Otto effetti diversi rendono ogni punto emozionante.',
        '<strong>Particelle fluttuanti</strong> ogni punto segnato genera testo fluttuante che celebra il momento.',
        '<strong>Cerimonia di fine partita</strong> premi Termina partita per attivare l\'annuncio del vincitore con trofeo e coriandoli.',
        '<strong>Nomi modificabili</strong> tocca il campo del nome per rinominare i giocatori. I nomi vengono salvati nel browser.',
        '<strong>Modalità schermo intero</strong> nasconde l\'interfaccia del browser in modo che il tabellone riempia lo schermo e lo mantenga acceso.',
        '<strong>Priorità offline</strong> funziona senza internet. Nessuna pubblicità, nessun tracciamento, nessuna raccolta dati.',
      ],
    },
    {
      type: 'title',
      text: 'Segnapunti Ping Pong vs Punteggio Manuale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il punteggio manuale nel ping pong richiede di tenere traccia del punteggio, ricordare chi serve, sapere quando cambiare servizio e contare i game vinti. È facile perdere il filo, specialmente in una partita veloce. Questo segnapunti digitale gestisce tutto automaticamente. Devi solo premere un pulsante quando viene segnato un punto. Il segnapunti tiene traccia del punteggio del game, rileva quando un game è vinto, registra i game vinti nella partita e mostra chi sta servendo. Ogni punto viene festeggiato con animazioni e particelle. Il punteggio non si sbaglia mai e non perdi mai un cambio di servizio. Che tu stia giocando una partita informale con amici o gareggiando in un torneo, questo segnapunti ping pong online gratuito ti dà tutto ciò di cui hai bisogno.',
    },
  ],
  ui: {
    playerA: 'Giocatore 1',
    playerB: 'Giocatore 2',
    winnerLabel: 'CAMPIONE',
    finishMatch: 'Termina partita',
    newGame: 'Nuovo game',
    serving: 'Servizio',
    changeSide: 'Cambia campo',
    swapHint: 'Tocca per scambiare',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Punto game',
    matchPoint: 'Punto partita',
    mode: 'Formato',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Punti',
    reset: 'Reimposta',
    resetConfirm: 'Reimpostare la partita? Tutti i dati andranno persi.',
    cancel: 'Annulla',
    fullscreen: 'Schermo intero',
    exitFullscreen: 'Esci da schermo intero',
  },
};
