import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'segnapunti-beach-volley';
const title = 'Segnapunti Beach Volley e Tracciamento Rotazione';
const description = 'Tieni traccia dei punti del beach volley, dell ordine di battuta, dei cambi di campo per il vento e dei set con una visualizzazione interattiva dall alto di un campo di sabbia dorata.';

const faq = [
  {
    question: 'Quando le squadre cambiano campo nel Beach Volley?',
    answer: 'Per garantire equita in condizioni esterne (vento, sole, sabbia), le squadre cambiano campo ogni 7 punti durante i primi due set, e ogni 5 punti durante il terzo set decisivo.',
  },
  {
    question: 'Come funziona la rotazione di battuta nel Beach Volley?',
    answer: 'Ogni squadra ha 2 giocatori che devono alternarsi al servizio. Quando una squadra vince una pausa di servizio (side-out), deve ruotare il battitore in modo che il giocatore che non ha servito l ultima volta serva per primo.',
  },
  {
    question: 'Quanti punti servono per vincere un set di Beach Volley?',
    answer: 'I set 1 e 2 si giocano a 21 punti. Se e necessario un terzo set, si gioca a 15 punti. In ogni caso, una squadra deve vincere con almeno 2 punti di scarto.',
  },
];

const howTo = [
  {
    name: 'Imposta la Formazione',
    text: 'Inserisci nomi personalizzati per i due giocatori di entrambe le squadre A e B.',
  },
  {
    name: 'Registra Punti',
    text: 'Tocca la scheda di una squadra o clicca sul campo interattivo per aggiungere punti. La formazione e la rotazione si aggiornano automaticamente.',
  },
  {
    name: 'Segui gli Avvisi di Cambio Campo',
    text: 'Quando il banner di scambio scende verso il basso, esegui un cambio campo fisico e clicca il pulsante di scambio per invertire l orientamento del campo.',
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
      text: 'Punteggio Beach Volley Online e Tracciamento Rotazione Battuta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenere traccia dell ordine di battuta e delle posizioni delle squadre sotto il sole cocente puo essere difficile. Questo segnapunti professionale per beach volley presenta un layout digitale del campo con texture sabbiata e alto contrasto, ottimizzato per la visibilita all aperto. Previene problemi di lettura dovuti all abbagliamento, automatizza le regole di cambio campo e tiene traccia di quale dei due giocatori deve servire dopo ogni punto di side-out.',
    },
    {
      type: 'title',
      text: 'Capire la Rotazione e le Regole di Battuta nel Beach Volley',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebbene non ci siano posizioni fisse o falli di rotazione basati sulla posizione in campo nel beach volley 2v2, i giocatori devono alternare rigorosamente il servizio. Ogni volta che la squadra ricevente vince uno scambio (side-out), ottiene il diritto di servire. Il giocatore che non ha servito l ultima volta che la sua squadra ha servito deve essere il nuovo battitore. Servire fuori ordine e un fallo e comporta un punto per gli avversari. Questo tabellone digitale presenta indicatori di servizio attivi e palline che rimbalzano accanto ai cerchi dei giocatori per prevenire errori di rotazione.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Regole FIVB Ufficiali',
          description: 'Rispetta le linee guida ufficiali di punteggio, inclusi limiti dei set e cambi campo.',
          icon: 'mdi:volleyball',
          points: ['Set a 21 (spareggio a 15)', 'Margine stretto di 2 punti', 'Cambi campo automatici'],
        },
        {
          title: 'Tracciamento Rotazione',
          description: 'Non discutere mai ne confonderti su chi debba servire.',
          icon: 'mdi:account-sync-outline',
          points: ['Indicatori di servizio luminosi', 'Iniziali mappate sulla sabbia', 'Modale sovrapposizione formazione'],
        },
        {
          title: 'Ottimizzato per Esterni',
          description: 'Progettato per giocare su campi di sabbia sotto la luce diretta del sole.',
          icon: 'mdi:weather-sunny',
          points: ['Tema giallo ad alto contrasto', 'Persistenza schermo Wake Lock', 'Gesto di scorrimento per annullare punto'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Funzioni Interattive e Impostazioni di Gioco',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Campo SVG Sabbia Dorata:</strong> Riflette visivamente lo stato della partita. Tocca direttamente su qualsiasi meta del campo per assegnare un punto a quella squadra.',
        '<strong>Animazione Rotazione Campo:</strong> Quando scatta l avviso di cambio campo, cliccando sul pulsante di scambio si ruota l intero campo SVG di 180 gradi in modo che lo schermo si allinei con le vostre posizioni fisiche.',
        '<strong>Allarmi Cambio Campo FIVB:</strong> Mostra un banner di avviso ad alta visibilita quando il punteggio combinato e un multiplo di 7 (nei set 1 e 2) o un multiplo di 5 (nel set finale).',
        '<strong>Particelle di Sabbia:</strong> Aggiunge feedback visivo sui cambi di punteggio con particelle di sabbia animate che esplodono dalle coordinate del tocco.',
        '<strong>Controllo Annulla Gesto:</strong> Scorri verso il basso sulla scheda per annullare istantaneamente l ultimo punto registrato.',
      ],
    },
    {
      type: 'title',
      text: 'Perche le Squadre Cambiano Campo nel Beach Volley',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A differenza della pallavolo indoor, le partite di beach volley sono fortemente influenzate da elementi ambientali come l abbagliamento del sole, il calore, la forza del vento e la consistenza della sabbia. Cambiare campo frequentemente garantisce che nessuna squadra riceva un vantaggio ingiusto a causa di una direzione favorevole del vento o del sole negli occhi. Le regole impongono di cambiare campo ogni 7 punti durante i primi due set, e ogni 5 punti durante il terzo set.',
    },
  ],
  ui: {
    teamA: 'Squadra 1',
    teamB: 'Squadra 2',
    points: 'Punti',
    sets: 'Set',
    reset: 'Reimposta',
    resetConfirm: 'Reimpostare la partita? Tutti i punteggi e le formazioni andranno persi.',
    cancel: 'Annulla',
    switchSides: 'Cambia Campo',
    switchSidesDesc: 'Il punteggio cumulativo ha raggiunto la soglia di scambio!',
    fullscreen: 'Schermo Intero',
    exitFullscreen: 'Esci da Schermo Intero',
    player1: 'Giocatore 1',
    player2: 'Giocatore 2',
    serving: 'Batte',
    winner: 'Vincitore',
    undo: 'Annulla',
  },
};
