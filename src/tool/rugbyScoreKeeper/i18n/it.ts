import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'arbitro-rugby-punteggio';
const title = 'Segnapunti Rugby Premium con Timer Espulsioni Temporanee e Cronometro Partita';
const description = 'Registra i punteggi delle partite di rugby in diretta con mete, trasformazioni, calci di punizione e drop. Gestisci i timer per le espulsioni temporanee e i tempi di gioco con un tabellone interattivo.';

const faqData = [
  {
    question: 'Come si segnano i punti in una partita di rugby union?',
    answer: 'Una meta vale 5 punti e viene assegnata quando un giocatore appoggia il pallone nell\'area di meta avversaria. Il calcio di trasformazione dopo una meta vale 2 punti. I calci di punizione e i drop valgono ciascuno 3 punti.',
  },
  {
    question: 'Cosa succede quando un giocatore riceve un cartellino giallo nel rugby?',
    answer: 'Un cartellino giallo comporta una sospensione temporanea. Il giocatore deve lasciare il campo per 10 minuti di tempo di gioco effettivo. La sua squadra gioca in inferiorità numerica durante questo periodo. Il timer dell\'espulsione temporanea scorre solo quando il cronometro della partita è in funzione.',
  },
  {
    question: 'Quanto dura una partita di rugby union?',
    answer: 'Una partita standard di rugby union è composta da due tempi da 40 minuti con un intervallo di 10 minuti. Il cronometro viene fermato durante gli infortuni e gli incidenti gravi. Può essere aggiunto tempo recupero per le interruzioni.',
  },
];

const howToData = [
  {
    name: 'Registra gli eventi di punteggio',
    text: 'Tocca i pulsanti Meta, Trasformazione, Punizione o Drop per registrare i punti. Dopo aver toccato Meta, il pulsante Trasformazione si illumina automaticamente.',
  },
  {
    name: 'Gestisci le espulsioni temporanee',
    text: 'Tocca Cartellino Giallo per mandare un giocatore in espulsione temporanea. Inserisci il suo nome o numero e un conto alla rovescia di 10 minuti parte automaticamente.',
  },
  {
    name: 'Controlla i tempi di gioco',
    text: 'Usa il cronometro per gestire due tempi da 40 minuti. Metti in pausa durante gli infortuni e riprendi quando il gioco riparte.',
  },
  {
    name: 'Monitora l\'andamento del punteggio',
    text: 'Controlla il tabellone in tempo reale con i punti di casa e ospiti. Visualizza il riepilogo dei punti per vedere la suddivisione di mete, trasformazioni, punizioni e drop.',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Segnapunti Rugby Online Gratuito con Monitoraggio Partite in Diretta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prendi il controllo del punteggio della tua partita di rugby con il nostro tabellone digitale interattivo. Registra mete, trasformazioni, punizioni e drop in tempo reale. Il sistema di gestione delle espulsioni temporanee conta automaticamente i minuti di sospensione e il cronometro mantiene perfettamente i tempi di entrambi i tempi. Che tu stia arbitrando una partita di club locale o allenando una squadra giovanile, questo strumento gestisce automaticamente tutti i dettagli di punteggio e temporizzazione.',
    },
    {
      type: 'title',
      text: 'Sistema di Punteggio del Rugby Union Spiegato',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il rugby union offre quattro modi per segnare punti, ognuno dei quali richiede abilità e strategie diverse. La meta è l\'azione offensiva più preziosa, premiando le squadre che sfondano la linea difensiva e appoggiano il pallone nell\'area di meta. Dopo una meta, la squadra che ha segnato tenta il calcio di trasformazione per due punti extra. I calci di punizione e i drop aggiungono profondità tattica, permettendo alle squadre di segnare su azione di gioco o dopo infrazioni avversarie.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Meta',
          description: 'Appoggia il pallone nell\'area di meta per cinque punti.',
          icon: 'mdi:rugby',
          points: ['Assegnati cinque punti', 'Permette il tentativo di trasformazione', 'Richiede l\'appoggio del pallone'],
        },
        {
          title: 'Trasformazione',
          description: 'Calcia tra i pali dopo una meta per due punti.',
          icon: 'mdi:goal',
          points: ['Due punti se riuscita', 'Calciata dalla posizione della meta', 'Deve superare la traversa'],
        },
        {
          title: 'Calcio di Punizione',
          description: 'Calcio in porta dopo infrazione avversaria per tre punti.',
          icon: 'mdi:alert-octagon',
          points: ['Assegnati tre punti', 'Può essere calciato o giocato', 'Spesso decide le partite equilibrate'],
        },
        {
          title: 'Drop',
          description: 'Calcio al volo tra i pali durante il gioco aperto per tre punti.',
          icon: 'mdi:circle-outline',
          points: ['Assegnati tre punti', 'Il pallone deve toccare terra prima', 'Marcatore da alta pressione'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Capire il Sistema di Espulsione Temporanea',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'espulsione temporanea è un sistema di sospensione per infrazioni pericolose o ripetute. Quando un arbitro mostra un cartellino giallo, il giocatore deve lasciare il campo per dieci minuti di gioco effettivo. Durante questo periodo, la sua squadra gioca in inferiorità numerica, creando un vantaggio numerico per la squadra avversaria. Il timer dell\'espulsione temporanea scorre solo quando il cronometro della partita è in funzione, garantendo un\'applicazione equa indipendentemente dalle interruzioni.',
    },
    {
      type: 'list',
      items: [
        '<strong>Penalità del Cartellino Giallo:</strong> Dieci minuti di espulsione temporanea per gioco pericoloso o infrazioni ripetute della squadra.',
        '<strong>Svantaggio Numerico:</strong> La squadra colpita gioca con 14 giocatori invece di 15 durante il periodo di sospensione.',
        '<strong>Rientro Automatico:</strong> Allo scadere del timer, il giocatore rientra automaticamente in partita dalla linea di metà campo.',
        '<strong>Aggravamento al Cartellino Rosso:</strong> Un secondo cartellino giallo o un singolo fallo grave comportano un cartellino rosso e l\'espulsione definitiva.',
      ],
    },
    {
      type: 'title',
      text: 'Gestione dei Tempi di Gioco e dell\'Intervallo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una partita standard di rugby union è divisa in due tempi da 40 minuti con un intervallo di 10 minuti. Il cronometro scorre continuamente durante il gioco attivo ma può essere fermato dall\'arbitro per infortuni, revisioni di gioco pericoloso o altre interruzioni. Questo segnapunti digitale include un cronometro preciso con controlli di pausa e riproduzione, monitoraggio automatico dei tempi e chiari indicatori visivi per ogni periodo di gioco.',
    },
    {
      type: 'title',
      text: 'Perché Usare un Segnapunti Rugby Digitale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tenuta manuale del punteggio nel rugby è complessa a causa della varietà dei metodi di punteggio, dei requisiti di temporizzazione delle espulsioni temporanee e della gestione dei tempi. Questo strumento browser fornisce un punteggio accurato in tempo reale, conti alla rovescia automatici per le espulsioni temporanee e una temporizzazione precisa della partita. Gli allenatori possono concentrarsi sulla strategia di gioco invece che sull\'aritmetica, gli arbitri hanno un sistema di punteggio di riserva affidabile e i giocatori possono verificare lo stato della partita a colpo d\'occhio.',
    },
  ],
  ui: {
    title: 'Segnapunti Rugby',
    description: 'Registra i punteggi delle partite e i timer delle espulsioni temporanee.',
    home: 'Casa',
    away: 'Ospiti',
    score: 'Punteggio',
    tryLabel: 'Meta +5',
    conversion: 'Trasformazione +2',
    penalty: 'Punizione +3',
    dropGoal: 'Drop +3',
    conversionYes: 'Sì',
    conversionNo: 'No',
    sinBin: 'Cartellino Giallo',
    sinBinTitle: 'Espulsione Temporanea',
    sinBinPlayer: 'Nome o numero del giocatore:',
    sinBinAdd: 'Avvia Sospensione',
    sinBinEmpty: 'Nessuna sospensione attiva',
    sinBinReturn: 'Rientrato',
    matchClock: 'Cronometro Partita',
    half: 'Tempo',
    half1: 'Primo Tempo',
    half2: 'Secondo Tempo',
    startMatch: 'Calcio d\'Inizio',
    pauseMatch: 'Pausa',
    resumeMatch: 'Riprendi',
    resetMatch: 'Reimposta Partita',
    resetConfirm: 'Reimpostare la partita? Tutti i punteggi e i timer andranno persi.',
    cancel: 'Annulla',
    confirm: 'Conferma Reset',
    period: 'Periodo',
    scoringSummary: 'Riepilogo Punteggi',
    tryScored: 'Mete',
    conversionSuccess: 'Trasformazioni',
    conversionMiss: 'Trasformazioni Sbagliate',
    penaltyScored: 'Punizioni',
    dropGoalScored: 'Drop',
    totalPoints: 'Totale',
    fullscreen: 'Schermo Intero',
    toggleSound: 'Attiva Disattiva Suono',
    eventLog: 'Registro Eventi',
    eventEmpty: 'Nessun evento ancora',
    undoBtn: 'Annulla Ultimo',
    timeOff: 'Tempo Fermo',
    timeOn: 'Tempo in Gioco',
  },
};
