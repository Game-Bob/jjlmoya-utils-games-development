import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'segnapunti-tennis';
const title = 'Segnapunti Tennis Online : Tracker Partite Gratuito';
const description = 'Segui le partite di tennis con punteggio di set e game. Segnapunti tennis online gratuito per partite e tornei. Nessuna registrazione necessaria.';

const faqData = [
  {
    question: 'Come funziona il punteggio nel tennis?',
    answer: 'Le partite di tennis si giocano in game e set. Un game viene segnato come Love, 15, 30, 40. Un punteggio di 40-40 si chiama Deuce e richiede che un giocatore vinca 2 punti consecutivi. Un set viene vinto dal primo giocatore che vince 6 game con un margine di 2 game. Se il punteggio raggiunge 6-6, si gioca un tiebreak.',
  },
  {
    question: 'Come si usa questo segnapunti tennis?',
    answer: 'Premi il pulsante più per un giocatore quando segna. Il punteggio si aggiorna automaticamente. Il segnapunti tiene traccia dell\'ordine di servizio, dei punteggi dei game, dei set correnti e della cronologia dei set completati.',
  },
  {
    question: 'Quando i tennisti cambiano campo?',
    answer: 'I tennisti cambiano campo dopo il primo, il terzo e ogni successivo game dispari di ogni set. Cambiano anche alla fine di un set a meno che il numero totale di game sia pari. In un tiebreak, i giocatori cambiano campo ogni 6 punti.',
  },
  {
    question: 'Questo segnapunti supporta i tiebreak?',
    answer: 'Sì, quando un set raggiunge 6-6, il segnapunti entra automaticamente in modalità tiebreak dove i punti vengono contati numericamente fino a 7. Un giocatore deve vincere con 2 punti di scarto per concludere il tiebreak e il set.',
  },
  {
    question: 'Posso usarlo sul mio telefono?',
    answer: 'Sì, l\'interfaccia è ottimizzata per dispositivi mobili con grandi pulsanti. Puoi anche attivare la modalità schermo intero per mantenere lo schermo acceso durante la partita.',
  },
];

const howToData = [
  {
    name: 'Imposta i nomi dei giocatori',
    text: 'Tocca i campi di input del nome per digitare nomi personalizzati. Vengono salvati nel browser.',
  },
  {
    name: 'Aggiungi punti',
    text: 'Clicca sul pulsante più per il giocatore che ha vinto lo scambio. Il punteggio si aggiornerà automaticamente.',
  },
  {
    name: 'Gestisci i risultati dei set',
    text: 'Il tracker conclude automaticamente game e set. Archivia i set completati e passa al set successivo.',
  },
  {
    name: 'Cambia campo',
    text: 'Il segnapunti ti avvisa quando i giocatori devono cambiare campo. Premi il pulsante di scambio per invertire i lati visivi.',
  },
  {
    name: 'Conclusione partita',
    text: 'Il tracker conclude automaticamente la partita secondo le regole del tennis e annuncia il vincitore.',
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
      text: 'Segnapunti Tennis Online Gratuito e Tracker Partite',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenere il punteggio nel tennis può essere impegnativo con termini come deuce, vantaggio e tiebreak. Questo segnapunti tennis online gratuito automatizza completamente il processo. Devi solo premere il pulsante più quando un giocatore segna. Lo strumento gestisce punti, game, set e cambi di campo automaticamente in tempo reale.',
    },
    {
      type: 'title',
      text: 'Come funziona il punteggio del tennis in questo segnapunti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il tennis utilizza una struttura di punteggio unica. Un game standard progredisce attraverso Love, 15, 30, 40 e Game. Quando entrambi i giocatori raggiungono 40, il punteggio è Deuce. Da Deuce, un giocatore deve segnare due punti consecutivi per vincere il game. Il primo punto si chiama Vantaggio, e il punto successivo assicura il game. Se l\'avversario vince il punto successivo, il punteggio torna a Deuce. I set vengono vinti dal primo giocatore che vince 6 game con un margine di 2. Quando il set raggiunge 6-6, si gioca un tiebreak a 7 punti.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partite Amichevoli',
          description: 'Punteggio rapido e semplice per partite di tennis informali con amici.',
          icon: 'mdi:tennis',
          points: ['Punteggio con un tocco', 'Indicatore cambio campo', 'Funziona offline'],
        },
        {
          title: 'Club',
          description: 'Tracciamento perfetto per partite di club e tornei.',
          icon: 'mdi:trophy-outline',
          points: ['Archivio cronologico set', 'Best of 3 o 5 set', 'Layout ottimizzato per mobili'],
        },
        {
          title: 'Tornei',
          description: 'Progettato per il tracciamento ufficiale delle partite e uso arbitrale.',
          icon: 'mdi:school',
          points: ['Supporto tiebreak', 'Tabellone a schermo intero', 'Sicurezza dati locale'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Caratteristiche speciali del segnapunti',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Logica automatica delle regole del tennis</strong> calcola Love, 15, 30, 40, deuce, vantaggio e tiebreak automaticamente.',
        '<strong>Archivio cronologico set</strong> mostra il punteggio dei set precedenti a colpo d\'occhio.',
        '<strong>Aiuto cambio campo</strong> avvisa i giocatori quando devono cambiare campo.',
        '<strong>Celebrazioni vivaci dei punti</strong> mostra particelle fluttuanti per i punti vinti.',
        '<strong>Best of 3 o 5 set</strong> impostazioni del formato partita configurabili.',
        '<strong>Nomi salvati localmente</strong> mantiene i nomi personalizzati tra le visite.',
      ],
    },
    {
      type: 'title',
      text: 'Segnapunti Digitale vs Tracciamento Manuale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I segnapunti manuali richiedono concentrazione costante per aggiornare i numeri, ricordare la rotazione del servizio, controllare i tiebreak e calcolare i cambi di campo. Questo segnapunti tennis digitale gestisce ogni regola del tennis automaticamente. Puoi concentrarti completamente sulla partita mentre lo strumento aggiorna le cronologie dei set e annuncia il vincitore con una cerimonia di celebrazione.',
    },
  ],
  ui: {
    playerA: 'Giocatore 1',
    playerB: 'Giocatore 2',
    winnerLabel: 'CAMPIONE',
    finishMatch: 'Termina partita',
    newGame: 'Nuovo set',
    serving: 'Servizio',
    changeSide: 'Cambia campo',
    swapHint: 'Tocca per cambiare campo',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Punto game',
    setPoint: 'Punto set',
    matchPoint: 'Punto partita',
    mode: 'Set',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Punti',
    reset: 'Reimposta',
    resetConfirm: 'Reimpostare la partita? Tutti i dati andranno persi.',
    cancel: 'Annulla',
    fullscreen: 'Schermo intero',
    exitFullscreen: 'Esci da schermo intero',
    deuce: 'Deuce',
    advantage: 'Vantaggio',
    tiebreak: 'Tiebreak',
  },
};
