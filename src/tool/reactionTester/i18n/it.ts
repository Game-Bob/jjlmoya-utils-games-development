import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'test-di-reazione';
const title = 'Test Velocità di Reazione (Riflessi): Benchmark Online';
const description = 'Misura i tuoi riflessi in millisecondi con il nostro test di reazione professionale. Compete per i ranghi da \"Tartaruga\" a \"Ciberatleta\" e analizza le tue prestazioni.';

const ui: ReactionTesterUI = {
  title: 'Test di Reazione',
  subtitle: 'Misura la tua velocità di reazione in millisecondi. Media di 5 tentativi.',
  startBtn: 'Clicca per iniziare',
  goTitle: 'VIA!',
  goSubtitle: 'CLICCA ORA!',
  earlyTitle: 'Troppo presto!',
  earlySubtitle: 'Aspetta il verde.',
  earlyRetry: 'Clicca per riprovare',
  promptNext: 'Clicca per il prossimo tentativo',
  promptFinal: 'Visualizza Risultati Finali',
  avgLabel: 'Media finale',
  copyBtn: 'Copia',
  tweetBtn: 'Tweet',
  retryBtn: 'Riprova',
  inputMouse: 'Mouse',
  inputTouch: 'Tocco',
  inputSpace: 'Spazio',
  historyTitle: 'Cronologia Locale',
  historyBest: 'Top 5 Migliori',
  historyWorst: 'Top 5 Peggiori',
  historyEmpty: 'Gioca per registrare il tuo primo punteggio',
  copySuccess: 'Copiato!',
  shareText: 'Ho ottenuto {ms}ms nel Test di Reazione!\nRango: {rank}\n\nRiesci a battermi?\n{url}',
  rankCiberatleta: 'Ciberatleta',
  rankTigre: 'Tigre',
  rankHumano: 'Umano',
  rankTortuga: 'Tartaruga',
  rankDormido: 'Addormentato',
  f150: 'SEI UN ROBOT?!',
  f180: 'INCREDIBILE!',
  f210: 'Molto veloce!',
  f250: 'Buona reazione',
  f300: 'Non male...',
  f400: 'Un po\' lento...',
  f600: 'Ti sei addormentato',
  fSlow: 'Svegliati...',
  wp0t: 'ASPETTA...', wp0s: 'Trattieni il fiato...',
  wp1t: 'FERMO...', wp1s: 'Non battere gli occhi ora',
  wp2t: 'PRONTO...', wp2s: 'Dita pronte...',
  wp3t: 'TIENI...', wp3s: 'Pazienza, giovane grillo',
  wp4t: 'CONCENTRATI...', wp4s: 'Sta arrivando...'
};

const faqData = [
  { question: 'Qual è il tempo di reazione umano medio?', answer: 'Il tempo di reazione umano medio a uno stimolo visivo è di circa 250-270 millisecondi. Gli atleti ad alte prestazioni e i pro-gamer sono solitamente sotto i 200 ms.' },
  { question: 'Come posso migliorare i miei riflessi?', answer: 'La chiave è la pratica costante e il riposo. Giocare a videogiochi d\'azione (FPS), praticare sport veloci come il ping-pong e rimanere ben idratati aiuta a mantenere il sistema nervoso vigile.' },
  { question: 'Lo schermo influisce sui miei risultati?', answer: 'Sì. C\'è qualcosa chiamato \"input lag\". I display con bassa frequenza di aggiornamento (60Hz) o i vecchi mouse wireless possono aggiungere 15-50 ms al tuo tempo di reazione effettivo.' },
  { question: 'A quale età iniziamo a perdere i riflessi?', answer: 'Fisiologicamente, i riflessi umani raggiungono il picco tra i 20 e i 24 anni. Dopo di che, c\'è un declino molto lento (circa 2-6 ms per decennio) se non allenato.' },
];

const howTo = [
  { name: 'Aspetta il rosso', text: 'Clicca sull\'area di inizio e aspetta pazientemente il cambio di colore dello schermo.' },
  { name: 'Reagisci al verde', text: 'Non appena vedi il verde, clicca o tocca lo schermo il più velocemente possibile.' },
  { name: 'Visualizza il tuo risultato', text: 'Il sistema calcolerà la differenza esatta in millisecondi tra il cambio di colore e il tuo tocco.' },
  { name: 'Analizza il tuo rango', text: 'Ripeti il test 5 volte per ottenere una media affidabile e scopri se sei una \"Tartaruga\" o un \"Ciberatleta\".' },
];

const seo = [
  { type: 'title' as const, text: 'Come Funziona Questo Test di Reazione?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Questo strumento misura il tuo <strong>tempo di reazione visiva</strong> con precisione chirurgica. Calcoliamo l\'intervallo esatto da quando lo schermo si illumina fino al momento in cui il segnale viaggia dai tuoi occhi al tuo cervello, e poi alle tue dita. Il test richiede <strong>5 tentativi consecutivi</strong> per calcolare la tua media reale, eliminando il fattore fortuna.'
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Media di 5 tentativi:</strong> Eliminiamo il fattore \"fortuna\" richiedendo coerenza. Un singolo clic fortunato non ti renderà un Ciberatleta.',
      '<strong>Sistema Anti-Cheat:</strong> Tempi di attesa casuali (1,5 s - 4,5 s) e rilevamento dei clic precoci per prevenire predizioni.',
      '<strong>Scienza reale:</strong> Elaborazione cerebrale ~180-200 ms + risposta motoria +20-40 ms = il tuo tempo di reazione totale.',
    ]
  },
  { type: 'title' as const, text: 'Tabella di Ranking Mondiale', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Tempo', 'Rango', 'Descrizione'],
    rows: [
      ['&lt; 180 ms', 'Ciberatleta', 'Livello sovrumano tipico dei professionisti di esports o piloti da combattimento.'],
      ['180 - 230 ms', 'Tigre', 'Riflessi acuti. Sei probabilmente abile nei giochi sparatutto.'],
      ['230 - 280 ms', 'Umano', 'La media sana. Sei sveglio e funzioni correttamente.'],
      ['280 - 350 ms', 'Tartaruga', 'Sotto la media. Riposa o allenati di più.'],
      ['&gt; 350 ms', 'Addormentato', 'Possibile stanchezza, sonnolenza o hardware lento (input lag).'],
    ]
  },
  { type: 'title' as const, text: 'Perché Sei Lento? Incolpare l\'Hardware', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitor (Hz)',
        description: 'Un monitor 60Hz impiega ~16ms per disegnare un frame. Uno 144Hz impiega solo 7ms. Questa differenza di 10ms conta nel tuo punteggio finale.',
        icon: 'mdi:monitor',
        points: ['60Hz = ~16ms per frame', '144Hz = ~7ms per frame', 'Differenza visibile nel test']
      },
      {
        title: 'Mouse Wireless',
        description: 'I mouse Bluetooth da ufficio economici hanno alta latenza. Per questo test, usa un cavo o tecnologia wireless 2,4GHz a bassa latenza.',
        icon: 'mdi:mouse-variant',
        points: ['Bluetooth economico: +15-50ms', '2,4GHz gaming: <1ms extra', 'Cavo USB: riferimento']
      },
      {
        title: 'Browser',
        description: 'Le estensioni che bloccano gli annunci o gli script pesanti possono causare stuttering. Prova la modalità incognito per il tuo vero record.',
        icon: 'mdi:web',
        points: ['Chiudi estensioni pesanti', 'Incognito = più pulito', 'Chrome/Firefox consigliato']
      },
    ]
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
