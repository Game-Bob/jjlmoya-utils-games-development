import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'segnapunti-calcio';
const title = 'Segnapunti Calcio Online Gratuito: Contatore Gol in Diretta';
const description =
  'Tieni il punteggio delle tue partite di calcio online gratuitamente. Semplice contatore gol per partite, amichevoli e tornei. Nessuna registrazione necessaria.';

const faqData = [
  {
    question: 'Come si usa questo segnapunti per il calcio?',
    answer:
      'Tocca il pulsante + sotto ogni squadra per aggiungere un gol. Il punteggio si aggiorna all\'istante con un\'animazione di festeggiamento. Usa il pulsante meno per annullare un errore. I nomi delle squadre sono modificabili: tocca il nome predefinito e scrivi il tuo. Tutto viene salvato automaticamente nel tuo browser, così puoi chiudere la pagina e tornare più tardi.',
  },
  {
    question: 'Posso usarlo sul telefono durante una partita?',
    answer:
      'Sì. L\'interfaccia è progettata per l\'uso mobile con pulsanti grandi che puoi toccare senza guardare. La modalità schermo intero nasconde il browser e mantiene lo schermo del telefono acceso durante tutta la partita. La disposizione verticale ti permette di raggiungere comodamente entrambe le sezioni con il pollice.',
  },
  {
    question: 'Salva i dati della partita?',
    answer:
      'Sì. Il punteggio attuale e i nomi delle squadre vengono salvati automaticamente nel tuo browser. Puoi ricaricare la pagina, chiudere il browser o tornare il giorno dopo e i dati della partita saranno ancora lì.',
  },
  {
    question: 'Posso tenere traccia dei supplementari o dei rigori?',
    answer:
      'Sì. Il segnapunti funziona allo stesso modo per qualsiasi formato di partita. Continua semplicemente a usare i pulsanti + durante i supplementari o i rigori. Quando la partita è finita, tocca Concludi Partita per vedere il risultato finale.',
  },
  {
    question: 'È davvero gratuito, senza limiti nascosti?',
    answer:
      'Sì, completamente gratuito senza restrizioni. Niente piani premium, niente limiti di partecipanti, niente filigrane, niente pubblicità. Tutto funziona offline nel tuo browser. Non serve account né email.',
  },
];

const howToData = [
  {
    name: 'Dai un nome alle squadre',
    text: 'Tocca il nome della squadra predefinito e scrivi il tuo. Il nuovo nome viene salvato automaticamente nel tuo browser.',
  },
  {
    name: 'Aggiungi un gol',
    text: 'Tocca il grande pulsante circolare + della squadra che ha segnato. Il numero del punteggio sale con un\'animazione di festeggiamento.',
  },
  {
    name: 'Rimuovi un gol',
    text: 'Tocca il pulsante meno sotto il + se hai aggiunto un gol per errore. Il punteggio si regola all\'istante.',
  },
  {
    name: 'Concludi la partita',
    text: 'Tocca Concludi Partita in basso per vedere il vincitore annunciato con un trofeo e coriandoli. Chiudi la celebrazione toccando fuori.',
  },
  {
    name: 'Resetta la partita',
    text: 'Tocca l\'icona di reset nella barra superiore e conferma per cancellare entrambi i punteggi. I nomi delle squadre vengono mantenuti in modo da non doverli reinserire.',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: 'Segnapunti Calcio Online Gratuito: Conta Gol in Tempo Reale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenere il punteggio durante una partita di calcio dovrebbe essere la parte più semplice del gioco. Questo segnapunti calcio online ti permette di registrare i gol di due squadre in tempo reale con un semplice tocco. Niente iscrizioni, niente download, niente menu complicati. Apri la pagina, dai un nome alle tue squadre e inizia a contare i gol. Che tu sia a bordo campo ad allenare una squadra giovanile, a organizzare una partita amichevole tra amici o a tenere il punteggio durante una partita di campionato locale, questo strumento è progettato per essere veloce e semplice. Ogni squadra ha la propria sezione con un codice colore distinto, un grande display del punteggio e un pulsante +1 dedicato. Tocca per aggiungere un gol, tocca il pulsante meno per annullare un errore. Tutta la cronologia della partita rimane visibile sullo schermo in modo da sapere sempre esattamente cosa è successo e quando.',
    },
    {
      type: 'title',
      text: 'Perché hai bisogno di un segnapunti per calcio dedicato invece di un contatore generico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un contatore numerico generico va bene per contare qualsiasi cosa, ma un segnapunti per calcio dedicato capisce come funziona il gioco. Separa visivamente le due squadre con colori distinti in modo da non toccare mai il lato sbagliato. Il pulsante del gol è grande e soddisfacente da premere, anche quando tieni il telefono con una mano a bordo campo. Il pulsante meno ti permette di correggere gli errori all\'istante senza dover resettare l\'intera partita. E quando la partita è finita, il pulsante Concludi Partita attiva una schermata di celebrazione che mostra il risultato finale con coriandoli e un trofeo. I contatori generici non possono fare niente di tutto ciò. Trattano tutti i punti allo stesso modo. Il calcio non è generico, e il tuo segnapunti non dovrebbe esserlo nemmeno.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partite Amichevoli e Allenamenti',
          description: 'Registrazione rapida dei gol per partite di allenamento. Reset tra le partite con un tocco. Funziona offline per usarlo su qualsiasi campo.',
          icon: 'mdi:soccer',
          points: ['Inserimento gol con un tocco', 'Funziona completamente offline', 'Nessun account o email necessari', 'Reset immediato tra le partite'],
        },
        {
          title: 'Campionati Locali e Tornei',
          description: 'Mantieni un punteggio pulito per le partite di campionato dove ogni gol conta. Display grande leggibile dall\'altra parte del campo. I colori delle squadre aiutano a evitare confusione.',
          icon: 'mdi:trophy-outline',
          points: ['Sezioni squadre colorate', 'Nomi squadre modificabili', 'Concludi partita con celebrazione', 'Punteggio grande leggibile a distanza'],
        },
        {
          title: 'Calcio Giovanile e Scolastico',
          description: 'Abbastanza semplice da permettere ai giovani giocatori di usarlo da soli. Gli allenatori possono registrare i gol mentre si concentrano sulla partita. La modalità schermo intero mantiene lo schermo acceso.',
          icon: 'mdi:school',
          points: ['Facile da usare per i bambini', 'Schermo intero tiene lo schermo acceso', 'Nomi squadre modificabili', 'Niente funzioni distraenti'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Come seguire una partita di calcio in diretta con questo segnapunti online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Usare questo tabellone calcistico è semplicissimo. Quando apri la pagina, vedi due sezioni di squadra. La squadra di casa appare in rosso e quella ospite in blu. Ogni sezione ha un grande numero del punteggio al centro, un campo per il nome della squadra in alto e due pulsanti sotto. Tocca il grande pulsante circolare + per aggiungere un gol a quella squadra. Il numero del punteggio si anima con un effetto di celebrazione ogni volta che viene registrato un gol. Otto diverse animazioni di gol ruotano casualmente, così ogni gol è unico. Particelle fluttuanti scaturiscono dall\'area del pulsante con testi come GOAL e SIUUU. Lo schermo lampeggia brevemente per segnare il momento. Se sbagli, tocca il piccolo pulsante meno per rimuovere l\'ultimo gol. I campi del nome della squadra sono modificabili. Tocca il nome predefinito per scrivere il tuo. I nomi vengono salvati automaticamente nel tuo browser insieme al punteggio attuale. Questo significa che puoi chiudere la pagina, tornare più tardi e i tuoi dati della partita saranno ancora lì. Alla fine della partita, tocca Concludi Partita per vedere il vincitore annunciato con un\'animazione di trofeo e coriandoli che cadono. Puoi chiudere la celebrazione e mantenere il punteggio visibile.',
    },
    {
      type: 'title',
      text: 'Segnapunti calcio ottimizzato per mobile, progettato per bordo campo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento è progettato prima di tutto per i dispositivi mobili. La disposizione verticale posiziona una squadra sopra l\'altra in modo da poter raggiungere comodamente entrambe le sezioni con il pollice mentre tieni il telefono. I pulsanti sono abbastanza grandi da poterli toccare senza guardare lo schermo. La modalità schermo intero rimuove le barre del browser e mantiene lo schermo del telefono acceso durante tutta la partita. Niente più tocchi allo schermo ogni pochi minuti per evitare che si spenga. L\'interfaccia funziona sia in orientamento orizzontale che verticale. Funziona anche offline dopo il primo caricamento, quindi non hai bisogno di connessione internet sul campo. Niente pubblicità, niente tracker, niente raccolta dati. I tuoi dati della partita non lasciano mai il tuo dispositivo.',
    },
    {
      type: 'title',
      text: 'Cosa rende speciale questo segnapunti per calcio',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Squadre colorate</strong> rosso per la casa e blu per gli ospiti. Sai subito quale squadra è quale senza leggere.',
        '<strong>Animazioni di festeggiamento</strong> ogni gol attiva una celebrazione casuale. Otto animazioni diverse: boom, rise, glow, ball bounce e altre.',
        '<strong>Particelle fluttuanti</strong> ogni gol genera testo fluttuante con messaggi come GOAL e SIUUU. Ogni celebrazione è unica.',
        '<strong>Cerimonia di Conclusione Partita</strong> tocca Concludi Partita per attivare l\'annuncio del vincitore con animazione del trofeo, nome della squadra e pioggia di coriandoli.',
        '<strong>Nomi squadre modificabili</strong> tocca il campo nome per rinominare le tue squadre. I nomi vengono salvati localmente nel tuo browser.',
        '<strong>Blocco schermo</strong> la modalità schermo intero impedisce allo schermo del telefono di spegnersi durante la partita.',
        '<strong>Modalità schermo intero</strong> nasconde l\'interfaccia del browser così il tabellone occupa tutto lo schermo senza distrazioni.',
        '<strong>Offline</strong> funziona senza internet dopo la prima visita. Niente pubblicità, niente tracciamento, niente raccolta dati.',
        '<strong>Persistenza istantanea</strong> punteggi e nomi vengono salvati automaticamente. Ricarica la pagina o chiudi il browser e i tuoi dati della partita tornano.',
        '<strong>Reset con conferma</strong> il pulsante di reset chiede conferma prima di cancellare i punteggi. Previene la perdita accidentale di dati.',
      ],
    },
    {
      type: 'title',
      text: 'Segnapunti Calcio vs Foglio di Carta: perché il digitale è meglio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I fogli di carta per il punteggio si usano da decenni, ma hanno problemi reali. Ti serve una penna che funzioni, una superficie piana su cui scrivere e abbastanza attenzione per annotare mentre guardi la partita. Una singola distrazione può farti perdere un gol o scrivere il numero sbagliato. Una volta scritto sulla carta, il punteggio non può essere corretto in modo pulito. I numeri cancellati rendono il foglio difficile da leggere. La carta può bagnarsi con la pioggia, essere portata via dal vento o perdersi tra le partite. Un segnapunti digitale per calcio risolve tutti questi problemi. I pulsanti sono abbastanza grandi da essere premuti al tatto senza guardare. I numeri vengono visualizzati chiaramente in un carattere grande e leggibile da qualsiasi punto del campo. Gli errori vengono corretti all\'istante con il pulsante meno. Il punteggio viene salvato automaticamente e non si perde mai. E a differenza della carta, il segnapunti aggiunge animazioni di festeggiamento e feedback visivo che rendono più divertente tenere il punteggio. Che tu alleni una squadra giovanile, gestisca un campionato della domenica o giochi semplicemente con gli amici, questo segnapunti calcio online gratuito ti dà tutto ciò di cui hai bisogno e niente di superfluo.',
    },
    {
      type: 'title',
      text: 'Segnapunti calcio gratuito per tutti i livelli di gioco',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento è completamente gratuito senza limitazioni. Non ci sono livelli premium, funzioni nascoste dietro un paywall o filigrane sullo schermo. Funziona per qualsiasi livello di calcio, dalle partite informali tra amici alle partite di campionato organizzate. L\'interfaccia semplice permette a chiunque di usarlo, dai giovani giocatori che imparano il gioco agli allenatori esperti che gestiscono un torneo. Non è richiesta alcuna registrazione. Nessuna email. Nessun dato personale raccolto. Apri la pagina, inizia la partita, tocca i gol. Tutto qui.',
    },
  ],
  ui: {
    playerA: 'Casa',
    playerB: 'Ospite',
    winnerLabel: 'CAMPIONE',
    finishMatch: 'Concludi Partita',
    reset: 'Resetta',
    resetConfirm: 'Resettare la partita? Tutti i dati andranno persi.',
    cancel: 'Annulla',
    fullscreen: 'Schermo Intero',
    exitFullscreen: 'Esci da Schermo Intero',
  },
};
