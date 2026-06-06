import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'tracciatore-di-frame-e-calcolatore-di-break-per-il-snooker';
const title = 'Tracciatore Premium di Frame e Calcolatore di Break per Snooker';
const description = 'Tieni traccia in diretta dei punteggi dei frame a snooker, calcola i break correnti, visualizza i punti rimanenti sul tavolo e ottieni lo stato in tempo reale del deficit, ad esempio se sono necessari snooker.';

const faqData = [
  {
    question: 'Come vengono calcolati i punti massimi rimanenti sul tavolo da snooker?',
    answer: 'Ogni pallina rossa rimanente vale 8 punti (1 punto per la rossa stessa più 7 punti per l\'imbucatura di una nera). Una volta imbucate tutte le rosse, le rimanenti colorate valgono complessivamente 27 punti.',
  },
  {
    question: 'Cosa significa "necessari snooker" in questo calcolatore?',
    answer: 'Significa che il deficit di punteggio è superiore ai punti totali rimanenti sul tavolo, quindi un giocatore deve costringere l\'avversario a falli per recuperare.',
  },
  {
    question: 'Che cos\'è una situazione di bilia nera decisiva?',
    answer: 'Uno scenario di nera decisiva si verifica quando tutte le bilie sono imbucate e i punteggi del frame sono in parità, richiedendo il riposizionamento della nera per determinare il vincitore.',
  },
];

const howToData = [
  {
    name: 'Configura i Nomi dei Giocatori',
    text: 'Inserisci nomi personalizzati per i due giocatori di snooker per personalizzare la visualizzazione del tabellone.',
  },
  {
    name: 'Imbuca Bile e Costruisci Break',
    text: 'Tocca le bile illuminate per registrare le imbucature in sequenza. Il calcolatore blocca automaticamente i colori non consentiti secondo le regole.',
  },
  {
    name: 'Verifica lo Stato del Deficit',
    text: 'Controlla la barra di stato in diretta per sapere se un giocatore è al sicuro, necessita di snooker o se il frame è ancora aperto.',
  },
  {
    name: 'Registra Penalità per Fallo',
    text: 'Apri il menu dei falli per assegnare punti di penalità direttamente all\'avversario e cambiare il turno di gioco.',
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
    image: undefined,
    url: undefined,
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Segnapunti Gratuito Online per Frame di Snooker e Contatore di Break',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Semplifica i tuoi frame di snooker con il nostro tabellone digitale. Lo strumento calcola i break attivi, i punti rimanenti sul tavolo e mostra la differenza esatta di punteggio. L\'interfaccia in stile feltro offre indicatori interattivi che si illuminano dinamicamente in base alle sequenze del regolamento dello snooker. Che tu stia arbitrando un torneo locale o segnando partite amichevoli a casa, questa applicazione gestisce automaticamente tutti i calcoli.',
    },
    {
      type: 'title',
      text: 'Comprendere il Punteggio e i Calcoli del Deficit nello Snooker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una partita standard di snooker inizia con quindici palline rosse del valore di un punto ciascuna. I giocatori devono alternare una rossa e una colorata. Ogni colorata imbucata viene rimessa al suo posto fino all\'esaurimento delle rosse. Successivamente, le colorate devono essere imbucate in ordine numerico dal giallo al nero. Questo calcolatore tiene traccia della sequenza e avvisa quando sono necessari snooker. Calcolando il divario di punteggio e i punti massimi rimasti sul tavolo, determina esattamente quando un frame ha raggiunto la soglia di vittoria.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tabellone dei Frame',
          description: 'Tieni traccia dei punteggi dei frame e dei turni dei giocatori su un display ad alto contrasto.',
          icon: 'mdi:scoreboard-outline',
          points: ['Evidenziazione chiara del giocatore attivo', 'Inserimento nome personalizzato', 'Supporto annulla con un clic'],
        },
        {
          title: 'Calcolatore di Break',
          description: 'Monitoraggio in tempo reale dei break attivi con registro dei colori imbucati.',
          icon: 'mdi:billiards',
          points: ['Timeline cronologica delle imbucature', 'Blocco automatico delle bile secondo le regole', 'Stato del break con codice colore'],
        },
        {
          title: 'Indicatori di Punti Rimasti',
          description: 'Tieni traccia dei punti massimi rimasti sul tavolo verde.',
          icon: 'mdi:percent-outline',
          points: ['Monitoraggio differenza punteggio', 'Avvisi dinamici di snooker necessari', 'Rilevamento nera decisiva'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Controlli Interattivi e Feedback Sonoro',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>HUD in stile feltro tattile</strong> permette di toccare le bile per aggiungere punti e registrarle sulla timeline del break.',
        '<strong>Pulsanti per Falli</strong> applicano da quattro a sette punti di penalità al punteggio dell\'avversario e terminano il turno attivo.',
        '<strong>Luce di Stato Dinamica</strong> si aggiorna per indicare gioco normale, margine di sicurezza o necessità di snooker.',
        '<strong>Sintesi Audio</strong> attiva un suono di imbucatura quando si incassa e un segnale acustico per i falli.',
      ],
    },
    {
      type: 'title',
      text: 'Regole dei Falli e Sistema di Penalità nello Snooker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I falli nello snooker assegnano punti all\'avversario. Il valore della penalità è determinato dal valore della bilia bersaglio o della bilia coinvolta nel fallo, con una penalità minima di quattro punti. Ad esempio, imbucare la biglia bianca, colpire una colorata invece di una rossa per prima, o mancare del tutto qualsiasi bilia comporta una penalità. Se il fallo avviene mentre si mira alla blu, alla rosa o alla nera, la penalità è rispettivamente di cinque, sei o sette punti. Questo tabellone digitale include un pannello rapido per i falli per aggiungere facilmente i valori di penalità e trasferire automaticamente il turno al giocatore successivo.',
    },
    {
      type: 'title',
      text: 'Cosa Succede in una Situazione di Bilia Nera Decisiva',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando tutte le bile sono state imbucate e i punteggi del frame sono in parità, la nera viene riposizionata nella sua posizione originale. I giocatori sorteggiano per determinare chi giocherà per primo e il primo che imbuca la nera o commette un fallo perde il frame. Questa regola della nera decisiva garantisce una risoluzione equa per le partite equilibrate senza richiedere frame aggiuntivi, e il nostro tracciatore rileva automaticamente questo stato di parità finale per avvisare entrambi i giocatori.',
    },
    {
      type: 'title',
      text: 'Perché Usare un Tracciatore Digitale per lo Snooker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il calcolo manuale dei punti rimanenti e dei margini di deficit durante i frame serrati è soggetto a errore umano. Questo strumento da browser fornisce statistiche precise in tempo reale, permettendo ai giocatori di concentrarsi sulla tecnica e sulla strategia. Grazie alla timeline interattiva delle bile imbucate, gli arbitri possono verificare facilmente break controversi e mantenere la continuità ufficiale della partita.',
    },
  ],
  ui: {
    title: 'Segnapunti Snooker',
    description: 'Tieni traccia dei punteggi e dei break.',
    player1: 'Giocatore 1',
    player2: 'Giocatore 2',
    score: 'Punteggio',
    currentBreak: 'Break',
    remainingPoints: 'Rimasti',
    deficit: 'Deficit',
    statusSafe: 'Sicuro',
    statusNeedSnookers: 'Snooker Necessari',
    statusDecidingBlack: 'Nera Decisiva',
    statusNormal: 'Normale',
    foul: 'Fallo',
    foulTitle: 'Seleziona Penalità per il Fallo',
    foulPoints: 'Penalità',
    foulOnRed: 'Rossa/Gialla/Verde/Marrone',
    foulOnYellow: 'Gialla',
    foulOnGreen: 'Verde',
    foulOnBrown: 'Marrone',
    foulOnBlue: 'Blu',
    foulOnPink: 'Rosa',
    foulOnBlack: 'Nera',
    reset: 'Reimposta',
    resetConfirm: 'Reimpostare il frame corrente? Tutti i punteggi andranno persi.',
    cancel: 'Annulla',
    confirm: 'Conferma Reset',
    endTurn: 'Fine Turno',
    miss: 'Mancata',
    redsRemaining: 'Rosse',
    pocketedBalls: 'Imbucate',
    toggleSound: 'Attiva/Disattiva Audio',
    fullscreen: 'Schermo Intero',
  },
};
