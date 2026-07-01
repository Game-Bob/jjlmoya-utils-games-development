import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'segnapunti-freccette';
const title = 'Segnapunti Freccette Online: Tracker Leg e Set';
const description = 'Segui le partite di freccette con punteggio di leg e set. Segnapunti freccette online gratuito per partite 501 e 301 con calcoli di chiusura in tempo reale e statistiche.';

const faqData = [
  {
    question: 'Come funziona il punteggio nelle freccette 501 e 301?',
    answer: 'I giocatori iniziano con un punteggio fisso di 501 o 301 punti. Ogni giocatore lancia tre freccette a turno e il valore totale di quei lanci viene sottratto dal loro punteggio. L\'obiettivo è raggiungere esattamente zero punti. Se la regola della Doppia Uscita è attiva, la freccetta vincente finale deve atterrare su un segmento doppio o sul bullseye interno.',
  },
  {
    question: 'Cos\'è un bust nelle freccette e quando si verifica?',
    answer: 'Un bust si verifica quando un giocatore segna più punti del suo totale rimanente, o quando il suo punteggio si riduce esattamente a un punto con la regola della Doppia Uscita attiva. Quando un giocatore fa bust, il suo turno termina immediatamente e il suo punteggio viene reimpostato al totale che aveva all\'inizio di quel turno.',
  },
  {
    question: 'Come si calcola la media nelle freccette?',
    answer: 'La media nelle freccette si calcola prendendo il numero totale di punti segnati, dividendolo per il numero totale di freccette lanciate e moltiplicando il risultato per tre. Questo rappresenta il punteggio medio che un giocatore ottiene per turno standard di tre freccette.',
  },
  {
    question: 'Cos\'è una chiusura nelle freccette?',
    answer: 'Una chiusura è la combinazione specifica di lanci necessaria per ridurre il punteggio rimanente a zero e vincere il leg. I segnapunti professionistici mostrano suggerimenti di chiusura per punteggi di 170 e inferiori, guidando i giocatori su quali singoli, doppi o tripli colpire.',
  },
];

const howToData = [
  {
    name: 'Scegli il punteggio iniziale e le regole',
    text: 'Seleziona 501 o 301 come punteggio iniziale e attiva o disattiva la regola della Doppia Uscita a seconda del livello di gioco desiderato.',
  },
  {
    name: 'Inserisci i nomi dei giocatori',
    text: 'Clicca sui campi del nome in cima al tabellone per personalizzare i nomi. I valori verranno salvati automaticamente nel tuo browser.',
  },
  {
    name: 'Registra le freccette lanciate',
    text: 'Usa il tastierino interattivo o tocca direttamente i settori del bersaglio per registrare i tuoi lanci. Seleziona prima il moltiplicatore (Singolo, Doppio o Triplo) e poi il numero colpito.',
  },
  {
    name: 'Segui le raccomandazioni di chiusura',
    text: 'Quando il tuo punteggio rimanente scende sotto 170, guarda il pannello di chiusura per vedere i bersagli ottimali per finire il leg.',
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
      text: 'Segnapunti Freccette Online Gratuito e Tracker Partite',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gestire i punteggi nelle freccette richiede rapidi calcoli mentali e concentrazione. Questo tracker digitale di leg gestisce tutti i calcoli per te, permettendoti di concentrarti completamente sul lancio. Che tu ti stia allenando da solo o giocando una partita competitiva con amici, questo tabellone tiene traccia di punti, leg, set, medie di lancio e obiettivi di chiusura con doppia uscita.',
    },
    {
      type: 'title',
      text: 'Formati di Punteggio Standard delle Freccette Spiegati',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le partite di freccette si giocano in leg e set. I formati più popolari a livello globale sono 501 e 301, entrambi giochi di sottrazione in cui i giocatori riducono il loro punteggio a zero.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Torneo 501',
          description: 'Il formato standard per i tornei professionistici in tutto il mondo.',
          icon: 'mdi:trophy-outline',
          points: ['Punteggio iniziale standard', 'Doppia uscita richiesta', 'Focus su punteggi alti'],
        },
        {
          title: '301 Casuale',
          description: 'Una versione più veloce del gioco di sottrazione ideale per partite veloci.',
          icon: 'mdi:clock-outline',
          points: ['Ritmo di gioco più veloce', 'Opzione doppia entrata comune', 'Ottimo per l\'allenamento'],
        },
        {
          title: 'Modalità Cricket',
          description: 'Un gioco strategico di mira popolare nei pub e nelle leghe.',
          icon: 'mdi:bullseye',
          points: ['Focus sui numeri 15-20', 'Tracciamento bullseye', 'Sistema di regole alternativo'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Capire la Matematica delle Chiusure nelle Freccette',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La chiusura più alta possibile nelle freccette è 170, ottenuta lanciando Triplo 20, Triplo 20 e Doppio Bull. Quando il tuo punteggio raggiunge 170 o meno, entri nel range di chiusura, dove una sequenza specifica di freccette può vincere la partita.',
    },
    {
      type: 'table',
      headers: ['Punteggio', 'Bersaglio Freccetta 1', 'Bersaglio Freccetta 2', 'Bersaglio Freccetta 3'],
      rows: [
        ['170', 'Triplo 20 (60)', 'Triplo 20 (60)', 'Doppio Bull (50)'],
        ['120', 'Triplo 20 (60)', 'Singolo 20 (20)', 'Doppio 20 (40)'],
        ['100', 'Triplo 20 (60)', 'Singolo 20 (20)', 'Doppio 10 (20)'],
        ['80', 'Triplo 20 (60)', 'Doppio 10 (20)', '-'],
        ['40', 'Doppio 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Caratteristiche di questo Tabellone Digitale per Freccette',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Metodi di Input Interattivi</strong> passa da un bersaglio radiale visivo a un tastierino numerico veloce.',
        '<strong>Motore di Chiusura Intelligente</strong> mostra combinazioni in tempo reale per finire i leg.',
        '<strong>Rilevamento Bust</strong> reimposta automaticamente i lanci illegali e avvisa l\'utente.',
        '<strong>Registro Cronologico Turni</strong> tiene traccia dei round precedenti e dei punteggi rimanenti.',
        '<strong>Statistiche Dettagliate della Partita</strong> calcola le medie di tre freccette dinamicamente.',
      ],
    },
    {
      type: 'title',
      text: 'Tracciamento Manuale vs Digitale delle Freccette',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le lavagne tradizionali richiedono scrivere, cancellare e calcoli costanti. Questo tabellone online elimina il rischio di errori, automatizza le medie e presenta i bersagli di chiusura. Tieni il tuo dispositivo vicino al bersaglio, attiva la modalità schermo intero per mantenere lo schermo attivo e goditi un punteggio senza problemi.',
    },
  ],
  ui: {
    playerA: 'Giocatore 1',
    playerB: 'Giocatore 2',
    winnerLabel: 'CAMPIONE',
    reset: 'Reimposta',
    resetConfirm: 'Reimpostare la partita? Tutti i dati andranno persi.',
    cancel: 'Annulla',
    fullscreen: 'Schermo intero',
    exitFullscreen: 'Esci da schermo intero',
    leg: 'Leg',
    set: 'Set',
    average: 'Media',
    checkout: 'Chiusura',
    busted: 'Bust',
    dart: 'Turno Freccette',
    score301: '301',
    score501: '501',
    doubleOut: 'Doppia Uscita',
    noCheckout: 'Nessuna Chiusura',
  },
};
