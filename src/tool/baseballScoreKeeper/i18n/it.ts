import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'segnapunti-baseball-softball';
const title = 'Segnapunti Premium per Baseball e Softball con Tracciamento del Diamante';
const description = 'Segna i punteggi delle partite in tempo reale con runs, hits ed errori. Diamante visivo con posizioni dei corridori, conteggio di palle e strike e griglia cronologica inning per inning.';

const faqData = [
  {
    question: 'Come funziona il conteggio nel baseball?',
    answer: 'Il conteggio mostra il numero di palle e strike sul battitore corrente. Le palle arrivano fino a 4 per un walk. Gli strike fino a 3 per uno strikeout. Limiti regolabili per le leghe giovanili.',
  },
  {
    question: 'Cosa mostra il diamante interattivo del baseball?',
    answer: 'Il diamante mostra prima, seconda e terza base. Toccare una base la illumina in arancione per indicare la presenza di un corridore. I corridori avanzano automaticamente sulle valide.',
  },
  {
    question: 'Come vengono monitorati runs, hits ed errori?',
    answer: 'La matrice R H E mostra runs, hits ed errori per entrambe le squadre. La cronologia inning per inning mostra come si e sviluppato il punteggio attraverso tutti gli inning.',
  },
];

const howToData = [
  {
    name: 'Registra Ogni Lancio',
    text: 'Tocca Strike, Ball, Foul, Hit o Out per registrare ogni lancio. Il conteggio si aggiorna automaticamente in base allesito.',
  },
  {
    name: 'Gestisci i Corridori in Base',
    text: 'Tocca le basi sul diamante per posizionare o rimuovere i corridori. Su una valida, i corridori avanzano automaticamente.',
  },
  {
    name: 'Segui la Progressione degli Inning',
    text: 'Il display dellinning mostra la semifrazione corrente. Dopo tre out la partita passa automaticamente tra la parte alta e quella bassa.',
  },
  {
    name: 'Consulta il Box Score',
    text: 'Controlla il riepilogo R H E e la griglia scorrevole della cronologia degli inning per vedere tutta la progressione del punteggio.',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Segnapunti Baseball Gratuito Online: Registra Runs Hits Errori con Diamante Live',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hai bisogno di un segnapunti baseball affidabile per la tua prossima partita? Questo strumento online gratuito tiene traccia di runs, hits ed errori mostrando un diamante interattivo live con le posizioni in tempo reale dei corridori. Ogni lancio conta, e il nostro tabellone digitale fa in modo che tu non perda mai traccia del conteggio, degli out o dellinning. Che tu stia allenando una squadra giovanile, segnando per un torneo di softball o gestendo una partita di high school, questo strumento gestisce automaticamente lintero box score cosi puoi concentrarti sullazione in campo.',
    },
    {
      type: 'title',
      text: 'Come Questo Tabellone Baseball Ti Fa Risparmiare Tempo e Previene Errori',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La segnatura manuale e soggetta a errori, soprattutto durante partite veloci. Uno strike mancato o un corridore trascurato possono alterare lintero box score. Questo segnapunti digitale automatizza le parti noiose. Tocca Strike, Ball, Foul, Hit o Out e il tabellone aggiorna il conteggio allistante. Quando un battitore ottiene un walk o viene eliminato, lo strumento resetta automaticamente il conteggio. Dopo tre out, inverte linning dallalto al basso e registra i runs. La matrice R H E e la griglia della cronologia inning per inning ti danno un quadro completo della partita in un colpo docchio.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Conteggio Live dei Lanci',
          description: 'Monitoraggio automatico di palle e strike con rilevamento di walk e strikeout per ogni turno di battuta.',
          icon: 'mdi:baseball',
          points: ['Palle contate fino a 4', 'Strike contati fino a 3', 'Reset automatico sulla decisione'],
        },
        {
          title: 'Gestione dei Corridori',
          description: 'Diamante interattivo mostra esattamente chi e in prima, seconda o terza base.',
          icon: 'mdi:diamond-stone',
          points: ['Tocca le basi per posizionare', 'Evidenziazione visiva se occupata', 'Cancellazione al cambio inning'],
        },
        {
          title: 'Box Score Completo',
          description: 'Statistiche R H E complete con cronologia punteggi inning per inning scorrevole.',
          icon: 'mdi:scoreboard-outline',
          points: ['Runs hits ed errori', 'Griglia inning per inning', 'Totali correnti per entrambe le squadre'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Chi Ha Bisogno di Questo Tracciatore Punteggi Baseball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento e pensato per chiunque debba tenere il punteggio: allenatori di baseball giovanile che vogliono un display digitale chiaro per i loro giocatori, volontari di leghe di softball che gestiscono partite senza un segnapunti dedicato, genitori che seguono le partite dei propri figli dagli spalti e arbitri che desiderano un sistema di verifica secondario. Linterfaccia funziona su qualsiasi dispositivo, dagli smartphone usati in panchina ai tablet montati sulla recinzione o ai laptop in panchina. Nessuna installazione necessaria, basta aprire il browser e iniziare a segnare.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gestione Automatica del Conteggio:</strong> Palle e strike si azzerano automaticamente dopo walk, strikeout, valide ed eliminazioni. Nessun reset manuale necessario.',
        '<strong>Diamante Abilitato al Tocco:</strong> Tocca prima, seconda o terza base per posizionare o rimuovere corridori. Il diamante si illumina in oro per mostrare le basi occupate.',
        '<strong>Punteggi Inning per Inning:</strong> Ogni semifrazione viene registrata nella griglia scorrevole. Vedi esattamente come ogni squadra ha segnato in tutti i nove inning.',
        '<strong>Nessuna Configurazione Necessaria:</strong> Apri la pagina e inizia a segnare immediatamente. Personalizza i nomi delle squadre toccando le etichette sopra i punteggi.',
      ],
    },
    {
      type: 'title',
      text: 'Segnare il Baseball Reso Semplice: Conteggio, Diamante e Box Score in un Unico Posto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenere il punteggio nel baseball richiede di monitorare piu cose contemporaneamente: il conteggio di palle e strike, il numero di out, quali basi hanno corridori, i runs per ogni squadra e linning corrente. Perdere traccia di uno solo di questi elementi crea confusione e registrazioni inaccurate. Questo strumento consolida tutto in ununica schermata. I punti del conteggio mostrano palle e strike a colpo docchio. Il diamante mostra le posizioni dei corridori. La tabella R H E visualizza il box score completo. E la griglia degli inning scorre orizzontalmente per mostrare la cronologia completa dei punteggi. Tutto si aggiorna in tempo reale ad ogni tocco.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Allenatori', html: '<p>Mantieni un tabellone digitale chiaro visibile a tutta la squadra dalla panchina.</p>' },
        { type: 'card', title: 'Volontari', html: '<p>Nessuna esperienza di segnatura necessaria. Lo strumento gestisce automaticamente tutto il monitoraggio complesso.</p>' },
        { type: 'card', title: 'Genitori', html: '<p>Segui la partita dagli spalti con un display affidabile dei punteggi in tempo reale sul tuo telefono.</p>' },
        { type: 'card', title: 'Giocatori', html: '<p>Consulta i punteggi inning per inning dopo la partita per analizzare le prestazioni.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Segnapunti Baseball',
    description: 'Registra runs, hits ed errori con vista diamante.',
    away: 'Ospiti',
    home: 'Casa',
    runs: 'P',
    hits: 'V',
    errors: 'E',
    inning: 'Inning',
    topInning: 'Alto',
    bottomInning: 'Bas',
    balls: 'Palle',
    strikes: 'Strike',
    outs: 'Out',
    strikeBtn: 'Strike',
    ballBtn: 'Ball',
    foulBtn: 'Foul',
    hitBtn: 'Valida',
    outBtn: 'Out',
    walkBtn: 'Base',
    runBtn: '+1 Punto',
    errorBtn: 'Errore',
    newBatter: 'Nuovo Battitore',
    resetMatch: 'Nuova Partita',
    resetConfirm: 'Resettare la partita corrente? Tutti i punteggi andranno persi.',
    cancel: 'Annulla',
    confirm: 'Conferma',
    total: 'Totale',
    fullscreen: 'Schermo Intero',
    toggleSound: 'Attiva Suono',
  },
};
