import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'tracciatore-allenamento-palestra';
const title = 'Tracker Allenamento Palestra: Grafici di Progresso e Registro Forza';
const description =
  'Registra i tuoi carichi, seleziona gli esercizi e visualizza i tuoi progressi con i grafici della forza. Ottimizza il tuo sovraccarico progressivo in palestra.';

const faqData = [
  {
    question: 'Qual è lo scopo del tracciamento dell\'allenamento?',
    answer:
      'Serve ad applicare scientificamente il sovraccarico progressivo. Sapendo esattamente quanto hai sollevato nella sessione precedente, puoi provare a superare quel traguardo, garantendo la crescita muscolare e guadagni di forza a lungo termine.'
  },
  {
    question: 'Quali dati dovrei registrare?',
    answer:
      'La cosa più importante è il peso massimo (top set) che hai raggiunto con una buona esecuzione per un numero stabilito di ripetizioni. Il nostro strumento si concentra sulla registrazione del peso per sessione per generare il tuo grafico di progresso.'
  },
  {
    question: 'Come vengono interpretati i grafici?',
    answer:
      'Una linea verso l\'alto indica che stai progredendo. Una linea piatta (plateau) suggerisce che devi regolare il volume, l\'intensità o il recupero. Una linea costantemente verso il basso può essere un segno di sovrallenamento.'
  },
  {
    question: 'Dove vengono memorizzati i miei dati?',
    answer:
      'I dati vengono memorizzati localmente nel tuo browser (Local Storage). Ciò significa che la tua privacy è totale e non è necessario creare un account, ma se cancelli i dati del browser, la cronologia andrà persa.'
  },
];

const howToData = [
  {
    name: 'Seleziona l\'esercizio',
    text: 'Scegli tra gli esercizi fondamentali come Squat, Panca Piana o Stacco nel menu a discesa.'
  },
  {
    name: 'Inserisci il peso',
    text: 'Dopo la tua serie più pesante, inserisci i chilogrammi/libbre sollevati nel campo corrispondente.'
  },
  {
    name: 'Premi Aggiungi',
    text: 'Salva il tuo traguardo. Il sistema aggiornerà automaticamente la tua cronologia e il tuo grafico di progresso.'
  },
  {
    name: 'Analizza la tua evoluzione',
    text: 'Consulta periodicamente il grafico per identificare i plateau e motivarti vedendo la tua reale crescita di forza.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it'
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
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
      text: 'Tracciamento Allenamento Palestra: La Chiave per Progressi Reali',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Nel mondo del fitness e del bodybuilding, c\'è un principio fondamentale che separa chi ottiene risultati incredibili da chi va rapidamente in stallo: <strong>il sovraccarico progressivo</strong>. Tuttavia, è impossibile applicare questo principio in modo efficace se non si tiene un registro dettagliato dei sollevamenti. In questa guida esploreremo perché tracciare l\'allenamento è vitale, come usare il nostro <strong>gym workout tracker</strong> per massimizzare i guadagni e le basi scientifiche che supportano questa pratica.'
    },
    {
      type: 'title',
      text: 'Cos\'è il Sovraccarico Progressivo?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Il sovraccarico progressivo è l\'aumento graduale dello stress applicato al corpo durante l\'esercizio fisico. Per far sì che un muscolo cresca o si rafforzi, deve essere sottoposto a uno stimolo maggiore di quello a cui è abituato. Se vai in palestra e sollevi sempre lo stesso peso, con le stesse ripetizioni e lo stesso tempo di recupero, il tuo corpo non avrà alcun motivo biologico per adattarsi e crescere.'
    },
    {
      type: 'list',
      items: [
        'Aumento del peso: Sollevare più peso rispetto alla sessione precedente.',
        'Aumento delle ripetizioni: Fare più ripetizioni con lo stesso peso.',
        'Aumento del volume: Eseguire più serie totali per gruppo muscolare.',
        'Riduzione del recupero: Fare lo stesso lavoro in meno tempo.',
        'Miglioramento dell\'esecuzione: Eseguire l\'esercizio con un controllo superiore e un raggio di movimento maggiore.',
      ]
    },
    {
      type: 'title',
      text: 'Perché il Registro Manuale è Superiore alla Memoria',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Molti atleti commettono l\'errore di affidarsi alla propria memoria per ricordare quanto hanno sollevato la settimana scorsa. Tuttavia, in un allenamento tipico che include tra 5 e 10 esercizi diversi, è molto facile dimenticare se hai fatto 80 kg o 82,5 kg alla panca, o se hai gestito 10 ripetizioni o 12. Questa mancanza di precisione porta alla mediocrità.'
    },
    {
      type: 'tip',
      title: 'Il Potere di Visualizzare il Progresso',
      html: 'Vedere una linea che sale su un grafico ti dà la spinta necessaria per provare quella ripetizione extra che segna la differenza tra ristagno e crescita muscolare costante.'
    },
    {
      type: 'title',
      text: 'Esercizi Fondamentali per il Tracciamento',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Sebbene tutti gli esercizi siano validi, certi colpi composti offrono la migliore visione della tua forza complessiva e del tuo sviluppo fisico. Questi sono quelli che dovresti prioritizzare nel tuo tracciamento: <strong>Panca Piana</strong> per la spinta orizzontale, <strong>Lento Avanti</strong> per la spinta verticale, <strong>Trazioni</strong> per la trazione e <strong>Hip Thrust</strong> per i glutei.'
    },
    {
      type: 'title',
      text: 'Come Analizzare i tuoi Grafici di Progresso',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Una volta registrati diversi allenamenti, inizierai a vedere dei modelli: una <strong>linea costante verso l\'alto</strong> indica la strada giusta, un <strong>plateau</strong> suggerisce che devi regolare il volume o il recupero, e una <strong>tendenza al ribasso</strong> può essere un segno di fatica accumulata.'
    },
    {
      type: 'title',
      text: 'La Psicologia del Successo in Palestra',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'L\'allenamento è una sfida tanto mentale quanto fisica. Utilizzando uno strumento visivo che ti mostra che oggi sei l\'1% più forte di quindici giorni fa, stai alimentando il tuo sistema di ricompensa della dopamina. Questo crea un circolo vizioso positivo che trasforma l\'allenamento in un\'abitudine sostenibile.'
    },
  ],
  ui: {
    exerciseLabel: 'Esercizio',
    pushCategory: 'Spinta (Push)',
    pullCategory: 'Trazione (Pull)',
    gluteCategory: 'Glutei',
    customExerciseCategory: 'Personalizzato',
    addCustomExercisetitle: 'Aggiungi esercizio',
    newExerciseLabel: 'Nuovo esercizio',
    exercisePlaceholder: 'Nome esercizio...',
    addBtn: 'Aggiungi',
    registerWeightLabel: 'Registra Peso',
    weightPlaceholder: '00.0',
    startBtn: 'Inizia',
    resetBtn: 'Reset',
    okBtn: 'OK',
    noData: 'Nessun dato',
    recordLabel: 'Record',
    lastLabel: 'Ultimo',
    historyTitle: 'Registri',
    exportBtn: 'Esporta',
    confirmDeletetitle: 'Cancellare cronologia?',
    confirmDeleteText: 'Questa azione non può essere annullata. Tutti i registri per l\'esercizio selezionato verranno eliminati.',
    deleteBtn: 'Elimina',
    cancelBtn: 'Annulla',
    units: 'kg',

    benchPress: 'Panca Piana',
    overheadPress: 'Lento Avanti',
    pushPress: 'Push Press',
    inclineDbPress: 'Panca Inclinata Manubri',
    dipsTriceps: 'Dips Tricipiti',
    tricepsExtensions: 'Estensioni Tricipiti Cavo',
    pullUp: 'Trazioni',
    barbellRow: 'Rematore Bilanciere',
    latPulldown: 'Lat Machine',
    dbRow: 'Rematore Manubrio',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Curl Bicipiti Bilanciere',
    hipThrust: 'Hip Thrust',
    rdl: 'Stacco Rumeno',
    lunges: 'Affondi',
    gluteKick: 'Slanci Glutei Cavo',
    hipAbduction: 'Abduzioni Macchina',
    stepUp: 'Step Up'
  }
};
