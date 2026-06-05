import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'punteggio-basket';
const title = 'Punteggio basket online : Segnapunti gratuito';
const description =
  'Punteggio basket online gratuito con pulsanti +1, +2 e +3. Tieni il punteggio per partite all\'aperto, basket scolastico e leghe locali. Nessuna registrazione, nessun download, funziona offline.';

const faqData = [
  {
    question: 'Come si tiene il punteggio in una partita di basket?',
    answer:
      'Nel basket si usano tre valori di punteggio: tiro libero (+1 punto), canestro (+2 punti) e tripla (+3 punti). Premi il pulsante corrispondente ogni volta che una squadra segna. Il tabellone tiene automaticamente il totale. Per correggere un errore, usa il pulsante meno accanto al punteggio.',
  },
  {
    question: 'Qual è la differenza tra +1, +2 e +3 nel basket?',
    answer:
      '+1 è per i tiri liberi assegnati dopo un fallo. +2 è per un canestro regolare segnato dentro l\'arco dei tre punti. +3 è per i tiri realizzati oltre la linea dei tre punti. Avere pulsanti separati per ogni valore ti permette di segnare più velocemente e riduce gli errori rispetto a un semplice contatore.',
  },
  {
    question: 'Posso usare questo tabellone per una vera partita di basket?',
    answer:
      'Sì. Il tabellone è progettato per partite reali: basket da strada, partite scolastiche, campionati locali e partitelle di allenamento. Salva il punteggio nel browser in modo da poter ricaricare la pagina senza perdere lo stato della partita.',
  },
  {
    question: 'Come si tiene il punteggio per il basket da strada o le partite improvvisate?',
    answer:
      'Il basket da strada si gioca di solito con un punteggio obiettivo (come 21 o 16) con 1 e 2 punti (o solo 1). Questo tabellone funziona per qualsiasi formato. Usa +1 per i canestri normali, +2 per i tiri da oltre l\'arco. Imposta la tua condizione di vittoria e usa il pulsante meno se sbagli.',
  },
  {
    question: 'Funziona offline sul cellulare?',
    answer:
      'Sì. Una volta caricata la pagina, il tabellone funziona completamente offline. Perfetto per campi all\'aperto, palestre senza WiFi o ovunque il segnale sia debole. Puoi anche andare a schermo intero e lo schermo rimarrà acceso in modo che non si blocchi durante la partita.',
  },
  {
    question: 'Come tengo traccia dei falli di squadra e del bonus?',
    answer:
      'Questo tabellone si concentra sul punteggio stesso. Per i falli di squadra, puoi usare i campi del nome della squadra per annotare manualmente i falli (es. rinominare "CASA" in "CASA 3F"). Raccomandiamo di abbinare questo strumento a un rilevatore di falli separato per le partite ufficiali.',
  },
  {
    question: 'Posso usare questo segnapunti basket sul mio telefono?',
    answer:
      'Sì. L\'interfaccia è progettata prima di tutto per i dispositivi mobili. I pulsanti +1, +2 e +3 sono grandi e facili da premere con il pollice. La modalità schermo intero nasconde gli elementi del browser in modo che il tabellone occupi tutto lo schermo, e il blocco dello schermo impedisce al telefono di spegnersi.',
  },
];

const howToData = [
  {
    name: 'Dai un nome alle tue squadre',
    text: 'Premi su CASA o OSPITE per inserire i nomi delle squadre. I nomi vengono salvati automaticamente nel browser in modo che rimangano anche se ricarichi la pagina.',
  },
  {
    name: 'Segnare un tiro libero (+1)',
    text: 'Premi il pulsante +1 quando un giocatore realizza un tiro libero. Ogni tiro libero vale un punto e viene solitamente assegnato dopo un fallo.',
  },
  {
    name: 'Segnare un canestro (+2)',
    text: 'Premi il pulsante +2 per un canestro regolare dentro la linea dei tre punti. Questa è l\'azione di punteggio più comune nel basket.',
  },
  {
    name: 'Segnare una tripla (+3)',
    text: 'Premi il pulsante +3 quando un giocatore segna da oltre l\'arco dei tre punti. Una tripla è evidenziata con un pulsante rosso e attiva un effetto di celebrazione extra.',
  },
  {
    name: 'Correggere un errore di punteggio',
    text: 'Se aggiungi punti per errore, premi il pulsante meno per sottrarli. Non scenderà sotto lo zero. Non c\'è bisogno di ricominciare l\'intera partita per un piccolo errore.',
  },
  {
    name: 'Cambiare i lati all\'intervallo',
    text: 'Usa il pulsante scambia per invertire le posizioni di CASA e OSPITE all\'intervallo. Vengono scambiati sia i punteggi che i nomi delle squadre, così non perdi nessun dato.',
  },
  {
    name: 'Iniziare una nuova partita',
    text: 'Premi il pulsante di reset e conferma per cancellare tutti i punteggi e iniziare una nuova partita. I nomi delle squadre vengono mantenuti in modo da non doverli riscrivere.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Punteggio basket online gratuito : Nessuna registrazione, nessun download',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenere il punteggio nel basket dovrebbe essere semplice. Un tiro libero è +1. Un canestro è +2. Una tripla è +3. Questo tabellone ti dà un pulsante dedicato per ogni valore così puoi premere e continuare a giocare. Niente menu, niente modalità, niente configurazione. Dai un nome alle tue squadre e inizia a segnare. Il punteggio viene salvato automaticamente nel browser, così puoi ricaricare la pagina, chiudere il telefono o tornare più tardi senza perdere la partita.',
    },
    {
      type: 'title',
      text: 'Perché un segnapunti basket dedicato batte un contatore generico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte delle app per tabellone ti costringe a premere lo stesso pulsante più volte per aggiungere due o tre punti. Quel tocco in più si accumula in una partita di 40 minuti e aumenta la probabilità di perdere il conto durante un contropiede o un cambio rapido. Questo tabellone ha <strong>tre pulsanti separati</strong> : uno per ogni valore di punteggio : così premi esattamente una volta per azione. Il pulsante +3 si illumina di rosso e attiva un\'animazione esplosiva per accompagnare l\'emozione di una tripla realizzata.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Basket da strada',
          description:
            'Partite a 16 o 21 con 1 e 2 punti. Questo tabellone gestisce entrambi i valori. Usa semplicemente +1 e +2 e ignora il +3 quando giochi con le regole di strada.',
          icon: 'mdi:basketball',
          points: ['Nessuna configurazione necessaria', 'Funziona per qualsiasi obiettivo', 'Lo schermo resta acceso'],
        },
        {
          title: 'Scuola e leghe locali',
          description:
            'Regole FIBA o NFHS standard con tiri liberi, canestri e triple. I pulsanti dedicati lo rendono abbastanza veloce per un segnapunti ufficiale.',
          icon: 'mdi:school',
          points: ['Tutti e tre i valori di punteggio', 'Nomi squadra modificabili', 'Schermo intero mantiene il telefono sveglio'],
        },
        {
          title: 'Allenamento e pratica',
          description:
            'Tieni traccia dei tiri segnati durante gli esercizi, le partitelle di allenamento o le partite uno contro uno. La cronologia non viene salvata, quindi ogni sessione ricomincia da capo.',
          icon: 'mdi:whistle',
          points: ['Reset rapido tra gli esercizi', 'Funziona offline in palestra', 'Nessun account necessario'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Come funziona il punteggio nel basket',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il basket ha tre valori di punteggio. Un <strong>tiro libero</strong> vale 1 punto e viene tirato dalla linea dei tiri liberi dopo un fallo. Un <strong>canestro</strong> vale 2 punti e conta per qualsiasi tiro realizzato dentro l\'arco dei tre punti durante il gioco normale. Una <strong>tripla</strong> vale 3 punti per i tiri effettuati da oltre l\'arco, delimitato dalla linea dei tre punti. La maggior parte delle partite professionistiche e universitarie usa tutti e tre i valori. Il basket da strada usa spesso solo 1 e 2 punti, o solo 1. Questo tabellone si adatta a qualsiasi formato.',
    },
    {
      type: 'title',
      text: 'Gioca in qualsiasi formato: vittoria a punti, a tempo o primo al traguardo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il basket non ha un limite di punteggio fisso : la partita finisce quando il cronometro arriva a zero. Ma il basket da strada usa spesso punteggi obiettivo come primo a 16, 21 o 11 (vincere con 2 punti di scarto). Questo tabellone non impone una condizione di vittoria perché il basket non termina su un punteggio. Decidi tu quando la partita è finita, e il pulsante di reset cancella il tabellone per la partita successiva. I nomi delle squadre vengono conservati in modo da poter giocare partite consecutive senza riscriverli.',
    },
    {
      type: 'title',
      text: 'Cosa rende diverso questo tabellone',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tre pulsanti dedicati</strong> : +1, +2 e +3. Nessun ciclo tra valori, nessuna pressione prolungata, nessun tocco extra.',
        '<strong>Nomi squadra modificabili</strong> : premi sul nome per cambiarlo. I nomi vengono salvati nel browser e persistono tra un ricaricamento e l\'altro della pagina.',
        '<strong>Blocco schermo attivo</strong> : quando vai a schermo intero, il tabellone impedisce allo schermo del telefono di spegnersi. Niente più tocchi sullo schermo solo per tenerlo acceso.',
        '<strong>Modalità schermo intero</strong> : nasconde le schede del browser e la barra degli indirizzi così il tabellone occupa tutto lo schermo. Premi il pulsante schermo intero una volta e lo strumento si espande.',
        '<strong>Priorità offline</strong> : l\'intero tabellone funziona senza connessione internet dopo il primo caricamento. Niente pubblicità, niente tracker, niente raccolta dati.',
        '<strong>Feedback soddisfacente</strong> : ogni tocco attiva un\'animazione di punteggio, particelle fluttuanti e una leggera vibrazione sui dispositivi supportati. Il +3 ha un effetto esplosivo extra.',
        '<strong>Stato della partita salvato</strong> : ricarica la pagina, chiudi il browser o torna domani. I punteggi e i nomi delle squadre vengono memorizzati localmente.',
      ],
    },
    {
      type: 'title',
      text: 'Tabellone basket vs. foglio carta del punteggio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un foglio di carta per il punteggio funziona, ma richiede una penna, una superficie piana e qualcuno che sappia scrivere e guardare la partita allo stesso tempo. Un tabellone digitale risolve tutti e tre i problemi. I pulsanti sono abbastanza grandi da poterli premere senza guardare. I numeri sono leggibili da tutto il campo. Il punteggio non si sporca, non si perde e non viene cancellato accidentalmente. E a differenza della carta, questo tabellone salva lo stato della partita, così puoi chiuderlo all\'intervallo e tornare più tardi.',
    },
  ],
  ui: {
    playerA: 'CASA',
    playerB: 'OSPITE',
    swapSides: 'Scambia lati',
    reset: 'Resetta',
    resetConfirm: 'Resettare la partita? Tutti i punti andranno persi.',
    cancel: 'Annulla',
    fullscreen: 'Schermo intero',
    exitFullscreen: 'Esci da schermo intero',
    winnerLabel: 'VINCITORE',
  },
};
