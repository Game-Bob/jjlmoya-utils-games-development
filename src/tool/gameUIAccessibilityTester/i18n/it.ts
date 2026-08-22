import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'tester-stress-accessibilita-ui-giochi';
const title = 'Tester Stress Accessibilità UI Giochi';
const description = 'Ispeziona uno screenshot di gioco localmente con simulazioni di daltonismo, sonde di contrasto HUD, sfocatura, riduzione di scala e mappe termiche.';

const faq = [
  {
    question: 'Questo strumento certifica l accessibilità della mia interfaccia?',
    answer: 'No. Combina simulazioni di visione dei colori, misurazioni di contrasto e guide di revisione visiva. Utilizza i risultati per guidare il design e i test con i giocatori.',
  },
  {
    question: 'Lo screenshot viene caricato su un server?',
    answer: 'No. L immagine viene elaborata e analizzata interamente nel tuo browser. Vengono salvate localmente solo le impostazioni di visualizzazione.',
  },
  {
    question: 'Cosa dovrei misurare con le due sonde di colore?',
    answer: 'Scegli due colori che devono comunicare significati diversi, come indicatori di alleati e nemici, stati attivi e disattivati, o livelli di rarità.',
  },
  {
    question: 'Perché un buon rapporto di contrasto richiede comunque una revisione manuale?',
    answer: 'Una coppia di colori può misurare un buon rapporto, ma un icona piccola, un testo sottile o uno sfondo in movimento possono comunque risultare difficili da identificare.',
  },
  {
    question: 'Cosa mostra la mappa termica?',
    answer: 'La mappa termica evidenzia le aree in cui la separazione dei colori diminuisce notevolmente dopo la simulazione selezionata.',
  },
];

const howTo = [
  { name: 'Carica uno screenshot', text: 'Seleziona un immagine PNG, JPEG o WebP del gioco. L immagine rimane nella memoria locale del tuo browser.' },
  { name: 'Scegli una lente di simulazione', text: 'Confronta l originale con simulazioni di daltonismo, scala di grigi o contrasto ridotto.' },
  { name: 'Applica lo stress visivo', text: 'Aggiungi sfocatura, riduci la scala di rendering, ingrandisci i pixel o attiva la mappa termica.' },
  { name: 'Campiona due segnali', text: 'Seleziona la Sonda A o B e fai clic sull immagine originale per confrontare due colori.' },
  { name: 'Esporta le osservazioni', text: 'Consulta la guida di revisione, annota i risultati e scarica la scheda comparativa e il report JSON.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Carica uno screenshot del gioco, scegli una lente di simulazione e confronta due segnali che i giocatori devono poter distinguere chiaramente.',
    privacyNote: 'Analisi locale. Gli screenshot non vengono caricati online.',
    dropTitle: 'Trascina uno screenshot del gioco sull area di analisi',
    dropHint: 'Rilascia un immagine qui o selezionala dal dispositivo. Usa un momento rappresentativo con sfondi reali.',
    chooseImage: 'Scegli screenshot',
    replaceImage: 'Sostituisci screenshot',
    supportedFiles: 'PNG, JPEG o WebP fino a 16 MB. Immagini grandi ridimensionate a 1600 px.',
    lensLabel: 'Lente di simulazione',
    lensOriginal: 'Originale',
    lensProtanopia: 'Protanopia',
    lensDeuteranopia: 'Deuteranopia',
    lensTritanopia: 'Tritanopia',
    lensAchromatopsia: 'Scala di grigi',
    lensReducedContrast: 'Contrasto ridotto',
    lensDesaturation: 'Desaturazione',
    compareLabel: 'Modalità di confronto',
    compareSideBySide: 'Affiancato',
    compareSplit: 'Lente divisa',
    comparePress: 'Premi per originale',
    holdOriginal: 'Tieni premuto per originale',
    splitPosition: 'Posizione lente',
    stressLabel: 'Controlli di stress del segnale',
    blurLabel: 'Sfocatura in pixel',
    downscaleLabel: 'Anteprima schermo piccolo',
    downscaleFull: 'Intero',
    downscaleHalf: 'Metà',
    downscaleQuarter: 'Un quarto',
    downscaleEighth: 'Un ottavo',
    zoomLabel: 'Zoom di ispezione',
    heatmapLabel: 'Mappa termica dei bordi',
    heatmapHint: 'Evidenzia le perdite di separazione colore sotto la lente attiva.',
    originalView: 'Segnale originale',
    simulatedView: 'Segnale simulato',
    emptyCanvas: 'Seleziona uno screenshot per attivare il confronto. L immagine rimane sul tuo dispositivo.',
    sampleTitle: 'Sonde di segnale critico',
    sampleInstructions: 'Seleziona A o B e fai clic sull originale per campionare i colori.',
    sampleA: 'Sonda A',
    sampleB: 'Sonda B',
    sampleAName: 'Significato sonda A',
    sampleBName: 'Significato sonda B',
    manualColor: 'Imposta colore direttamente',
    sampleAInitial: 'Indicatore alleato',
    sampleBInitial: 'Indicatore nemico',
    noSample: 'In attesa di screenshot',
    originalContrast: 'Contrasto originale',
    simulatedContrast: 'Contrasto simulato',
    separationRetained: 'Separazione conservata',
    statusStrong: 'Segnale ben distinto',
    statusWatch: 'Verifica in contesto',
    statusReview: 'Rivedi design segnale',
    statusPending: 'Nessun dato',
    measurementLabel: 'Misurazione',
    heuristicLabel: 'Euristica',
    manualReviewLabel: 'Stato revisione',
    measurementHint: 'Il contrasto calcola la luminanza relativa WCAG tra i due colori sRGB campionati.',
    heuristicHint: 'La separazione conservata confronta la distanza tra i colori prima e dopo la simulazione.',
    promptTitle: 'Guida alla revisione dell interfaccia',
    promptColorOnly: 'I giocatori possono identificare gli elementi senza affidarsi solo al colore?',
    promptChangingBackground: 'Il testo rimane leggibile su sfondi chiari, scuri o in movimento?',
    promptMinimap: 'Le icone della mappa si distinguono per forma o motivo oltre che per colore?',
    promptStates: 'Gli stati attivo, disattivato e ricarica sono inequivocabili?',
    promptShape: 'Un icona, un testo o un suono rafforzano ogni segnale cromatico?',
    findingLabel: 'Osservazione del team',
    findingPlaceholder: 'Esempio: Il bordo del nemico scompare sull effetto rosso',
    addFinding: 'Aggiungi nota',
    findingsEmpty: 'Nessuna osservazione scritta salvata.',
    exportSheet: 'Scarica scheda comparativa',
    exportReport: 'Scarica report JSON',
    resetTool: 'Ripristina sessione',
    uploadError: 'Impossibile leggere l immagine. Scegli un file PNG, JPEG o WebP valido.',
    fileTooLarge: 'L immagine supera i 16 MB. Scegli un file più piccolo.',
    imageReady: 'Screenshot caricato. Seleziona due sonde di colore per iniziare.',
    reportDownloaded: 'Report JSON scaricato.',
    sheetDownloaded: 'Scheda comparativa scaricata.',
    localOnlyDisclosure: 'Elaborazione completamente locale nel tuo browser.',
    limitationDisclosure: 'Questo strumento supporta la revisione ma non sostituisce i test con i giocatori.',
    reportTitle: 'Report di revisione accessibilità UI gioco',
    reportFindingReview: 'La coppia di colori perde una quota significativa di contrasto sotto la simulazione.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Valutare l accessibilità dell interfaccia dei giochi senza inviare immagini',
    },
    {
      type: 'paragraph',
      html: 'Le interfacce di gioco devono comunicare in condizioni visive dinamiche e complesse. Questo tester locale ti consente di analizzare gli screenshot del tuo gioco attraverso simulazioni di daltonismo e test di stress visivo direttamente nel browser.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Misurazioni, euristiche e valutazione umana',
    },
    {
      type: 'table',
      headers: ['Tipo di evidenza', 'Cosa fornisce questo strumento', 'Cosa non può concludere'],
      rows: [
        ['Misurazione', 'Rapporto di contrasto e luminanza relativa tra due colori sRGB', 'Conformità automatica di tutta l interfaccia di gioco'],
        ['Simolazione', 'Trasformazioni per protanopia, deuteranopia e tritanopia', 'La percezione visiva esatta di ogni singolo giocatore'],
        ['Euristica', 'Sfocatura, riduzione di scala e rilevamento perdite di bordo', 'Una valutazione automatica del gameplay'],
        ['Revisione manuale', 'Guida con domande ed esportazione di report', 'Sostituzione dei test utente reali'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Campiona colori che influenzano le decisioni di gioco',
    },
    {
      type: 'paragraph',
      html: 'Focalizza i tuoi test su elementi cromatici che determinano un azione del giocatore, come alleato e nemico o stato di salute. Se la leggibilità diminuisce, considera di aggiungere una forma o un icona di supporto.',
    },
    {
      type: 'tip',
      title: 'Analizza fotogrammi di gioco complessi',
      html: 'Utilizza screenshot tratti da fasi di combattimento o momenti ricchi di effetti visivi per ottenere risultati realistici.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Utilizza i report esportati per il lavoro di squadra',
    },
    {
      type: 'paragraph',
      html: 'Il report JSON e la scheda PNG scaricabili possono essere allegati ai task di sviluppo per facilitare la correzione dei problemi di interfaccia visiva.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
