import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'segnapunti-padel';
const title = 'Segnapunti Padel : Punto de Oro e Rotazione del Servizio';
const description = 'Tieni traccia dei punteggi del padel con la regola ufficiale del Punto de Oro (Gold Point), avvisi di rotazione del servizio, tiebreak e animazione dinamica del cambio campo.';

const faq = [
  {
    question: 'Cos\'è il Punto de Oro (Gold Point) nel Padel?',
    answer: 'Il Punto de Oro è un punto decisivo giocato quando il punteggio arriva a 40-40 (Due). Non ci sono vantaggi. La squadra che riceve sceglie se ricevere il servizio a sinistra o a destra, e chi vince quel singolo punto vince l\'intero gioco.',
  },
  {
    question: 'Come funzionano i formati dei set nel Padel?',
    answer: 'Le partite standard si giocano al meglio dei 3 set, con ogni set vinto dalla prima squadra che raggiunge 6 giochi (con un vantaggio di 2). Se il punteggio arriva a 6-6, si gioca un tiebreak a 7 punti. Un formato Golden Set opzionale termina a 4 giochi con un tiebreak sul 4-4.',
  },
  {
    question: 'Quando i giocatori cambiano campo nel Padel?',
    answer: 'I giocatori cambiano campo dopo il primo gioco e poi ogni 2 giochi (quando la somma dei giochi nel set corrente è dispari, es. 1, 3, 5). Durante i tiebreak, i giocatori cambiano campo ogni 6 punti.',
  },
];

const howTo = [
  {
    name: 'Configura il formato della partita',
    text: 'Seleziona il formato standard (primo a 6 giochi) o il formato golden set più breve (primo a 4 giochi).',
  },
  {
    name: 'Inserisci i nomi dei giocatori',
    text: 'Inserisci i nomi delle squadre per personalizzare il tabellone. Le tue configurazioni vengono salvate automaticamente.',
  },
  {
    name: 'Registra i punti in campo',
    text: 'Tocca uno dei due lati del campo da padel isometrico per segnare i punti. Gli indicatori di servizio ti guideranno nelle rotazioni diagonali.',
  },
  {
    name: 'Decidi i Punti de Oro',
    text: 'Quando si arriva al due, seleziona il lato di risposta (ricevitore sinistro o destro) e clicca sulla squadra vincente per concludere il gioco.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Tabellone Padel Online Gratuito e Tracker Partite',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenere il punteggio nel padel può diventare complicato con scambi veloci, tiebreak, cambi di campo e la regola ufficiale del Punto de Oro (Gold Point). Questo tabellone padel online gratuito ti toglie la fatica di segnare i punti. Basta toccare il campo visivo per registrare i punti e lasciare che lo strumento gestisca automaticamente le rotazioni del servizio, i lati del ricevitore, la cronologia dei set e i cambi campo in tempo reale.',
    },
    {
      type: 'title',
      text: 'Capire il Punteggio del Padel, i Punti de Oro e le Rotazioni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il padel segue un sistema di punteggio simile al tennis (15, 30, 40, Gioco) ma introduce regole specifiche per un gioco più veloce. Secondo le regole professionistiche FIP, quando il punteggio raggiunge il 40-40, si gioca un Punto de Oro decisivo. La squadra che riceve sceglie quale lato (sinistro o destro) riceverà il servizio e il vincitore di quel singolo punto vince il gioco. Inoltre, le squadre devono scambiarsi i lati del campo ogni volta che il totale dei giochi in un set è dispari e ogni 6 punti durante un tiebreak.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partite Amichevoli',
          description: 'Segnapunti rapido e pulito per partite amichevoli con i tuoi compagni di padel.',
          icon: 'mdi:tennis',
          points: ['Aggiunta punti con un tocco', 'Layout ottimizzato per mobile', 'Funziona offline'],
        },
        {
          title: 'Circolo e Lega',
          description: 'Tieni traccia delle partite competitive del circolo e dei tornei locali con facilità.',
          icon: 'mdi:trophy-outline',
          points: ['Archivio storico dei set', 'Set da 6 o 4 giochi', 'Supporto Punto de Oro'],
        },
        {
          title: 'Modalità Arbitro',
          description: 'Strumento completo per arbitrare partite ufficiali o sessioni di allenamento.',
          icon: 'mdi:school',
          points: ['Indicatori servizio e ricezione', 'Rotazione interattiva del campo', 'Modalità console a schermo intero'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Funzionalità Digitali Avanzate per Giocatori di Padel',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Logica Ufficiale del Punto de Oro</strong> permette alla squadra che riceve di scegliere il lato del ricevitore sul due, mostrando il percorso del servizio.',
        '<strong>Indicatore Visivo del Campo</strong> mostra le posizioni del battitore (S) e del ricevitore (R) in modo dinamico per evitare errori di rotazione.',
        '<strong>Cambio Automatico dei Lati</strong> ruota la disposizione del campo in caso di giochi dispari o intervalli di tiebreak in modo che corrisponda sempre alla tua visuale fisica.',
        '<strong>Formati di Set Personalizzabili</strong> supporta set standard da 6 giochi o Golden Set rapidi da 4 giochi.',
        '<strong>Salvataggio Automatico Locale</strong> mantiene i nomi dei giocatori e i punteggi correnti anche se aggiorni la pagina.',
      ],
    },
    {
      type: 'title',
      text: 'Regole del Tiebreak nel Padel: Standard vs Super Tiebreak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nei set standard di padel, se il punteggio raggiunge il 6-6 nei giochi, si gioca un tiebreak a 7 punti. In un tiebreak, i punti si contano numericamente (1, 2, 3, ecc.). La prima squadra che raggiunge 7 punti con un margine di 2 vince il set. Il giocatore a cui tocca servire batte il primo punto dal lato destro (due). Successivamente, ogni giocatore serve due punti consecutivi, iniziando dal lato sinistro (vantaggio). In alcuni formati di torneo, se la partita è in parità 1-1 nei set, si gioca un Super Tiebreak a 10 punti invece di un terzo set completo per decidere la partita.',
    },
    {
      type: 'title',
      text: 'Cambio Campo e Rotazioni: Garantire l\'Equità nel Padel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il cambio campo è essenziale nel padel per garantire che fattori ambientali come sole, vento o imperfezioni del campo non favoriscano una squadra rispetto all\'altra. I giocatori devono scambiarsi i lati del campo dopo il primo gioco di ogni set e poi ogni due giochi (es. a 1-0, 2-1, 3-2, 4-3, 5-4). Il nostro tabellone digitale per padel presenta un\'animazione dinamica di cambio campo che ruota automaticamente la disposizione visiva del campo di 180 gradi ogni volta che i giocatori devono cambiare fisicamente lato. Questo garantisce che la squadra visualizzata nella parte superiore dello schermo corrisponda sempre alla squadra che gioca all\'estremità opposta del campo fisico.',
    },
    {
      type: 'title',
      text: 'Set Standard vs Golden Set',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mentre le partite standard si giocano a 6 giochi per set, molte leghe ricreative e tornei veloci adottano il formato "Golden Set" in cui i set si giocano solo a 4 giochi (con tiebreak sul 4-4). Questo tabellone ti permette di passare da un formato all\'altro con un semplice tocco nella barra degli strumenti. Indipendentemente dal formato selezionato, il tabellone gestisce automaticamente tutti i tiebreak, le rotazioni del servizio e i calcoli del punteggio.',
    },
    {
      type: 'title',
      text: 'Consigli per un Segnapunti Efficace in Campo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Usa un Supporto da Campo o un Reggitelefono:</strong> Monta il tuo telefono o tablet sulla recinzione del campo da padel all\'altezza della rete. Questo permette ai giocatori di entrambi i lati di vedere facilmente il punteggio attivo e gli indicatori di servizio.',
        '<strong>Personalizza i Nomi Prima di Iniziare:</strong> Prenditi 10 secondi per digitare i nomi reali dei giocatori o delle squadre. Questo rende gli annunci vocali (se attivati) e il tabellone visivo molto più coinvolgenti e ufficiali.',
        '<strong>Attiva la Modalità Schermo Intero:</strong> Clicca sul pulsante di schermo intero nel pannello dell\'intestazione. Questo massimizza l\'interfaccia del tabellone e aiuta a evitare che lo schermo si spenga automaticamente durante scambi lunghi.',
      ],
    },
    {
      type: 'title',
      text: 'Perché Usare un Segnapunti Digitale per il Padel?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Invece di discutere continuamente su chi serve, di chi è il turno di ricevere o qual è il punteggio, un segnapunti digitale tiene tutti allineati. Visualizzando le posizioni del battitore e del ricevitore direttamente sullo schermo, i giocatori possono dare un\'occhiata rapida al telefono in panchina e sapere esattamente dove posizionarsi. Questo migliora il ritmo di gioco e previene errori di rotazione.',
    },
  ],
  ui: {
    playerA: 'Squadra 1',
    playerB: 'Squadra 2',
    game: 'Gioco',
    set: 'Set',
    tiebreak: 'Tiebreak',
    goldPoint: 'Punto de Oro',
    selectReceiver: 'Seleziona Ricevitore',
    leftReceiver: 'Ricevitore Sinistro',
    rightReceiver: 'Ricevitore Destro',
    server: 'Battitore',
    receiver: 'Ricevitore',
    changeEnds: 'Cambia Campo',
    matchWon: 'Partita Vinta',
    reset: 'Resetta',
    resetConfirm: 'Resettare la partita? Tutti i dati andranno persi.',
    cancel: 'Annulla',
    fullscreen: 'Schermo Intero',
    exitFullscreen: 'Esci da Schermo Intero',
    deuce: 'Due',
    advantage: 'Vantaggio',
    formatStandard: '6 Giochi',
    formatGoldenSet: '4 Giochi',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Punto de Oro Decisivo',
  },
};
