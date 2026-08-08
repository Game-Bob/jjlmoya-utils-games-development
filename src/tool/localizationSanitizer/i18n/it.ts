import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'pulitore-csv-localizzazione-godot-unity',
  title: 'Pulitore CSV e JSON di Localizzazione per Godot e Unity',
  description: 'Ispeziona i file di traduzione CSV o JSON per individuare celle vuote, chiavi duplicate e righe corrotte, quindi esporta una copia pulita pronta per l importazione.',
  ui: {
    csvTab: 'File CSV',
    jsonTab: 'File JSON',
    dropTitle: 'Trascina qui un file di traduzione',
    dropSubtitle: 'Ispeziona la struttura nel tuo browser mantenendo il file sorgente sul tuo dispositivo.',
    browseButton: 'Sfoglia file',
    sampleButton: 'Carica esempio',
    clearButton: 'Pulisci',
    inputLabel: 'File di traduzione in ingresso',
    formatLabel: 'Formato',
    healthLabel: 'Stato del file',
    readyStatus: 'Pronto per l importazione',
    reviewStatus: 'Richiede revisione',
    emptyCellsLabel: 'Celle vuote',
    duplicateKeysLabel: 'Chiavi duplicate',
    malformedRowsLabel: 'Righe corrotte',
    cleanRowsLabel: 'Righe valide',
    issueListTitle: 'Risultati',
    noIssues: 'Nessun problema riscontrato in questa analisi.',
    previewTitle: 'Anteprima di traduzione',
    previewSubtitle: 'Le prime righe mostrano la struttura normalizzata che verrà esportata.',
    exportTitle: 'Esporta file pulito',
    exportSubtitle: 'I duplicati vengono rimossi, le colonne mancanti completate e i valori CSV formattati.',
    downloadButton: 'Scarica file pulito',
    copyButton: 'Copia risultato',
    copiedMessage: 'Risultato pulito copiato negli appunti.',
    emptyIssue: 'Cella di traduzione vuota',
    duplicateIssue: 'Chiave duplicata rimossa',
    malformedIssue: 'Errore nelle colonne o nelle virgolette',
    parseIssue: 'Impossibile analizzare il file.',
    rowLabel: 'Riga',
    columnLabel: 'Colonna',
    keyLabel: 'Chiave',
    sampleFileName: 'esempio-localizzazione.csv',
    privacyNote: 'Elaborazione locale nel browser',
    waitingTitle: 'In attesa di un file',
    waitingSubtitle: 'Trascina un file CSV o JSON per avviare l ispezione.',
    fileTypeNote: 'CSV UTF8 o JSON strutturato',
  },
  seo: [
    { type: 'title', level: 2, text: 'Perché i file di localizzazione si corrompono durante l importazione' },
    {
      type: 'paragraph',
      html: 'Le tabelle di traduzione sono semplici da modificare ma facilmente soggette a errori. Una virgola mancante di escape o una chiave duplicata possono causare lo slittamento delle colonne di lingua.',
    },
    {
      type: 'paragraph',
      html: 'L importatore CSV di Godot e il pacchetto Unity Localization richiedono strutture coerenti. Questo strumento controlla e corregge i file prima di integrarli nel motore di gioco.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: 'Controllo virgole' },
        { value: 'JSON', label: 'Supporto array e oggetti' },
        { value: '0 invii', label: 'Solo nel browser' },
        { value: '1 clic', label: 'Esportazione pulita' },
      ],
    },
    { type: 'title', level: 2, text: 'Cosa verifica lo strumento' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Rilevato prima dell importazione',
          description: 'Problemi difficili da notare nei file di grandi dimensioni',
          points: ['Celle di traduzione vuote', 'Chiavi duplicate', 'Righe con colonne mancanti o in eccesso', 'Sintassi delle virgolette errata'],
        },
        {
          title: 'Normalizzato per l esportazione',
          description: 'Correzioni automatiche sicure',
          points: ['Colonne mancanti riempite', 'Campi in eccesso uniti nell ultima colonna', 'Mantenuta la prima occorrenza della chiave', 'File originale inalterato'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Come verificare il file pulito' },
    {
      type: 'paragraph',
      html: 'La pulizia strutturale non sostituisce la revisione linguistica. Usa l elenco dei risultati per completare le traduzioni mancate.',
    },
    {
      type: 'table',
      headers: ['Risultato', 'Significato', 'Azione consigliata'],
      rows: [
        ['Cella vuota', 'Una colonna lingua non contiene testo', 'Traduci o conferma l assenza intenzionale'],
        ['Chiave duplicata', 'Più righe usano la stessa chiave', 'Confronta le righe prima di usare la prima'],
        ['Riga corrotta', 'Struttura non conforme all intestazione', 'Controlla la riga unita'],
        ['Errore di analisi', 'JSON non valido', 'Correggi la sintassi prima di importare'],
      ],
    },
    { type: 'title', level: 2, text: 'Convenzioni CSV importanti' },
    {
      type: 'paragraph',
      html: 'Regole CSV standard: i campi sono separati da virgole e i testi contenenti virgolette o virgole devono essere racchiusi tra doppi apici.',
    },
    {
      type: 'tip',
      title: 'Conserva il file originale',
      html: 'Mantieni sempre il file di traduzione originale come riferimento prima di integrare il nuovo file.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Chiave di traduzione', definition: 'Identificatore univoco usato dal codice del gioco.' },
        { term: 'Campo CSV', definition: 'Singolo valore compreso tra delimitatori.' },
        { term: 'Escaping', definition: 'Uso delle virgolette per preservare la punteggiatura.' },
        { term: 'Locale', definition: 'Codice lingua e regione come it, en o ja.' },
      ],
    },
  ],
  faq: [
    {
      question: 'I file vengono caricati su un server?',
      answer: 'No, l elaborazione avviene interamente in locale all interno del browser.',
    },
    {
      question: 'Cosa succede se una riga CSV contiene virgole in più?',
      answer: 'La riga viene segnalata e i campi extra vengono uniti nella colonna finale.',
    },
    {
      question: 'Come vengono gestite le chiavi duplicate?',
      answer: 'Viene conservata la prima occorrenza, mentre le successive vengono ignorate nell esportazione.',
    },
    {
      question: 'Lo strumento valuta la qualità della traduzione?',
      answer: 'No, analizza solo la correttezza della struttura e la presenza di campi vuoti.',
    },
  ],
  howTo: [
    { name: 'Scegli il formato', text: 'Seleziona CSV o JSON.' },
    { name: 'Ispeziona i risultati', text: 'Carica il file e controlla la lista dei problemi.' },
    { name: 'Esporta e testa', text: 'Scarica il file pulito e importalo nel tuo motore di gioco.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pulitore CSV e JSON di Localizzazione per Godot e Unity',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: 'I file vengono caricati su un server?',
        acceptedAnswer: { '@type': 'Answer', text: 'No, l elaborazione avviene interamente in locale all interno del browser.' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come ripulire un file di localizzazione',
      step: [
        { '@type': 'HowToStep', name: 'Scegli il formato', text: 'Seleziona CSV o JSON.' },
        { '@type': 'HowToStep', name: 'Ispeziona i risultati', text: 'Carica il file e controlla la lista dei problemi.' },
        { '@type': 'HowToStep', name: 'Esporta e testa', text: 'Scarica il file pulito e importalo nel tuo motore di gioco.' },
      ],
    },
  ],
  bibliography: [
    { name: 'Documentazione Godot ResourceImporterCSVTranslation', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Documentazione Unity Localization Import CSV', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'Specifica RFC 4180 CSV', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
