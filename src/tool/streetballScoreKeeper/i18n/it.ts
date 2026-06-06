import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'segnapunti-streetball-3x3';
const title = 'Segnapunti Premium Streetball 3x3 con Cronometro di Tiro';
const description = 'Tieni traccia dei punteggi dello streetball FIBA 3x3 con un cronometro di tiro da 12 secondi integrato, falli di squadra, punti morte improvvisa e indicatori visivi dinamici di metà campo.';

const faq = [
  {
    question: 'Come funziona il cronometro di tiro da 12 secondi nello streetball 3x3?',
    answer: 'Nel FIBA 3x3, le squadre hanno solo 12 secondi per tentare un tiro dopo aver ottenuto il possesso. Il cronometro si azzera a 12 in caso di cambio di possesso o a 14 secondi su rimbalzi offensivi e falli in condizioni specifiche.',
  },
  {
    question: 'Qual è il limite di punteggio per la morte improvvisa nel basket 3x3?',
    answer: 'La prima squadra che raggiunge 21 punti vince immediatamente la partita, indipendentemente dal tempo rimanente. Questa è la regola della morte improvvisa.',
  },
  {
    question: 'In che modo i falli di squadra influenzano la partita?',
    answer: 'A partire dal 7° fallo di squadra, gli avversari ottengono 2 tiri liberi. Al 10° fallo e successivi, ricevono 2 tiri liberi più il possesso della palla, attivando lo stato di penalità.',
  },
];

const howTo = [
  {
    name: 'Imposta i nomi delle squadre',
    text: 'Inserisci nomi personalizzati per le due squadre di streetball per personalizzare l\'interfaccia.',
  },
  {
    name: 'Registra punti e possesso',
    text: 'Tocca il campo interattivo in asfalto per aggiungere 1 punto (dentro l\'arco) o 2 punti (fuori dall\'arco) e cambia l\'indicatore di possesso.',
  },
  {
    name: 'Controlla il cronometro di tiro',
    text: 'Tocca il cronometro per azzerarlo a 12, clicca il reset secondario per 14, o fai doppio tocco per mettere in pausa il countdown.',
  },
  {
    name: 'Gestisci i falli di squadra',
    text: 'Monitora i falli di squadra usando il contatore, che diventa rosso quando si entra in stato di penalità (7+ falli).',
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
  inLanguage: 'it',
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
      text: 'Punteggio streetball 3x3 online gratuito',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenere il punteggio nelle partite veloci di basket 3x3 può essere difficile mentre si gestisce un cronometro di tiro breve e si monitorano i falli di squadra. Questo tabellone streetball 3x3 online gratuito offre un tema industriale in asfalto con uno stile neon ad alto contrasto. Gestisce automaticamente il cronometro di tiro da 12 secondi, l\'orologio della partita, il sistema di penalità per falli e gli indicatori di possesso.',
    },
    {
      type: 'title',
      text: 'Regole di punteggio e cronometro di tiro FIBA 3x3 Streetball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lo streetball FIBA 3x3 è diverso dalla pallacanestro tradizionale 5x5. Le partite durano un periodo di 10 minuti o terminano immediatamente quando una squadra raggiunge 21 punti (morte improvvisa). I tiri dentro l\'arco e i tiri liberi valgono 1 punto, mentre i tiri da dietro l\'arco dei 6,75 m valgono 2 punti. Il cronometro di tiro da 12 secondi impone azioni offensive rapide e i giocatori devono liberare la palla dietro l\'arco in caso di cambio di possesso.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partite informali',
          description: 'Segnapunti rapido per basket da strada con amici nei campetti locali.',
          icon: 'mdi:basketball',
          points: ['Pulsanti punto semplici', 'Layout responsive', 'Funziona offline'],
        },
        {
          title: 'Gioco di torneo',
          description: 'Perfetto per tornei ufficiali 3x3 e leghe di streetball.',
          icon: 'mdi:trophy-outline',
          points: ['Countdown 10 minuti', 'Morte improvvisa a 21 pt', 'Stati di penalità falli'],
        },
        {
          title: 'Dashboard arbitro',
          description: 'Progettato per arbitri per gestire rapidi reset del cronometro e il possesso.',
          icon: 'mdi:school',
          points: ['Reset 12s e 14s', 'Suono della sirena', 'Gesti tattili'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Controlli interattivi e animazioni tattili',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Cronometro di tiro 12 secondi</strong> lampeggia in rosso e mostra decimali sotto i 4 secondi, seguito da un segnale acustico simulato.',
        '<strong>Metà campo in cemento interattiva</strong> ti permette di toccare le aree da 1 e 2 punti per registrare i punteggi direttamente sul diagramma.',
        '<strong>Avviso contatore falli</strong> diventa rosso e trema per indicare le penalità di squadra (7+ e 10+ falli).',
        '<strong>Indicatore di liberazione palla</strong> mostra un promemoria quando cambia il possesso finché la palla non viene liberata dietro l\'arco.',
        '<strong>Tracker dei time-out</strong> attiva un conto alla rovescia di 30 secondi con avvisi sonori personalizzati.',
      ],
    },
    {
      type: 'title',
      text: 'Perché usare un tracker digitale per lo streetball?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un tabellone digitale elimina i disaccordi su punteggi, falli o violazioni del cronometro di tiro sull\'asfalto. I numeri neon luminosi sono facili da leggere a distanza e i promemoria automatici di possesso e liberazione assicurano che la partita scorra senza intoppi.',
    },
  ],
  ui: {
    teamA: 'Squadra 1',
    teamB: 'Squadra 2',
    points: 'Punti',
    fouls: 'Falli',
    timeouts: 'Time-out',
    shotClock: 'Cronometro tiro',
    reset: 'Azzera',
    resetConfirm: 'Azzera la partita? Tutti i dati andranno persi.',
    cancel: 'Annulla',
    gameTime: 'Tempo',
    possession: 'Possesso',
    clearBall: 'Libera palla',
    matchWon: 'Partita vinta',
    timeoutActive: 'Time-out',
    penalty: 'Penalità',
    fullscreen: 'Schermo intero',
    exitFullscreen: 'Esci da schermo intero',
    overtime: 'Supplementari',
    ptsInside: '+1 Punto',
    ptsOutside: '+2 Punti',
    toggleSound: 'Attiva audio',
    soundOn: 'Audio attivo',
    soundOff: 'Audio disattivato',
  },
};
