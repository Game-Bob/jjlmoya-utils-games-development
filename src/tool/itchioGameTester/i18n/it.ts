import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'tester-giochi-web-itchio',
  title: 'Ispettore di Giochi Web Itch.io e Ottimizzatore di Risoluzione Live',
  description: 'Carica file di esportazione HTML5 o archivi ZIP per testare i viewport live, correggere le scrollbar, ispezionare build Godot e Unity WebGL e generare le impostazioni di incorporamento per Itch.io.',
  ui: {
    dropzoneTitle: 'Trascina e Rilascia il tuo Build o Archivio ZIP',
    dropzoneHint: 'Rilascia un file .ZIP, cartella esportata o file di build HTML5 in questa area per ispezionarli immediatamente.',
    chooseFiles: 'Seleziona File o Cartella',
    engineDetected: 'Motore Rilevato',
    compatibilityScore: 'Punteggio di Compatibilità Itch.io',
    viewportWidth: 'Larghezza Viewport (px)',
    viewportHeight: 'Altezza Viewport (px)',
    aspectRatio: 'Rapporto di Aspetto',
    lockAspectRatio: 'Blocca Rapporto di Aspetto',
    presets: 'Preset di Risoluzione Rapidi',
    fitTest: 'Test Live di Layout e Scrollbar',
    copySettings: 'Copia Impostazioni di Incorporamento Itch.io',
    copied: 'Copiato negli Appunti',
    embedMode: 'Modalità di Incorporamento',
    scrollbars: 'Abilita Scrollbar',
    noIssuesFound: 'Tutti i controlli superati. Il pacchetto è conforme al 100% agli standard Itch.io.',
    filesInspected: 'File Ispezionati',
    resetViewport: 'Reimposta Viewport',
    autoScaleToggle: 'Scala Automaticamente il Viewport alla Larghezza dello Schermo',
    scaledNotice: 'Il viewport supera la larghezza dello schermo. È stato applicato uno zoom-out artificiale per far entrare il canvas completo. Disattiva la scala automatica per vedere il layout reale.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Linee Guida di Formattazione per Esportazioni HTML5 su Itch.io'
    },
    {
      type: 'paragraph',
      html: 'Pubblicare giochi HTML5 e WebGL su Itch.io richiede una configurazione precisa delle dimensioni del viewport, delle strutture degli archivi e degli header di sicurezza cross-origin.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Rapporto di Aspetto Web Standard', value: '16:9 Orizzontale' },
        { label: 'Risoluzione Classica Itch', value: '960 x 540 px' },
        { label: 'File di Ingresso Richiesto', value: 'index.html nella Root' },
        { label: 'Requisito Godot 4', value: 'Header COOP / COEP' }
      ]
    },
    {
      type: 'tip',
      html: 'Per incorporare un gioco WebGL 1280x720 su Itch.io, imposta le dimensioni del viewport dell\'embed esattamente a 1280x720 con "Embed in page" abilitato.'
    }
  ],
  faq: [
    {
      question: 'Perché il mio gioco Godot 4 mostra uno schermo nero su Itch.io?',
      answer: 'Le esportazioni web di Godot 4 usano il multi-threading WebAssembly che richiede il supporto SharedArrayBuffer. Abilita "SharedArrayBuffer support" nelle opzioni frame del tuo gioco su Itch.io.'
    }
  ],
  howTo: [
    { name: 'Carica File del Gioco o ZIP', text: 'Trascina e rilascia il tuo archivio ZIP di esportazione HTML5 o seleziona la directory di build contenente index.html.' },
    { name: 'Esamina il Report di Compatibilità', text: 'Controlla il report di audit automatico per il posizionamento di index.html nella root, avvisi di maiuscole/minuscole e rilevamento del motore.' },
    { name: 'Ridimensiona il Viewport Live', text: 'Usa i cursori di risoluzione e i preset del rapporto di aspetto per testare l\'incorporamento iframe live.' },
    { name: 'Copia le Impostazioni Itch.io', text: 'Clicca su Copia Impostazioni per ottenere i valori esatti di larghezza e altezza per la tua pagina di invio su Itch.io.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Ispettore di Giochi Web Itch.io',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Perché il mio gioco Godot 4 mostra uno schermo nero su Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le esportazioni web di Godot 4 usano il multi-threading WebAssembly che richiede il supporto SharedArrayBuffer. Abilita "SharedArrayBuffer support" nelle opzioni frame del tuo gioco su Itch.io.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come esaminare e testare il viewport del tuo gioco su Itch.io',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Carica File del Gioco o ZIP',
          text: 'Trascina e rilascia il tuo archivio ZIP di esportazione HTML5 o seleziona la directory di build contenente index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Ridimensiona il Viewport Live',
          text: 'Usa i cursori di risoluzione e i preset del rapporto di aspetto per testare l\'incorporamento iframe live.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
