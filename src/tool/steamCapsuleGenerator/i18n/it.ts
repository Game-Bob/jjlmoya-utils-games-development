import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'generatore-di-capsule-steam',
  title: 'Generatore e Anteprima di Capsule Steam',
  description: 'Ritaglia, visualizza in anteprima e formatta le capsule ufficiali del negozio e della libreria Steam con verifica delle zone di sicurezza e qualità elevata.',
  ui: {
    uploadTitle: 'Carica Grafica del Gioco',
    uploadHint: 'Carica un immagine ad alta risoluzione (consigliato 3840x1240 px o superiore per massima nitidezza).',
    chooseFile: 'Seleziona File',
    minimumSize: 'Dimensione minima consigliata: 1920x1080 px',
    horizontalFocus: 'Fuoco Orizzontale (X)',
    verticalFocus: 'Fuoco Verticale (Y)',
    zoomLevel: 'Livello di Zoom',
    resetFocus: 'Centra Fuoco',
    safeZone: 'Zona di Sicurezza',
    downloadZip: 'Scarica Tutti i File (ZIP)',
    headerCapsule: 'Capsula Intestazione (460x215 / HD 920x430)',
    smallCapsule: 'Capsula Piccola (231x87 / HD 462x174)',
    mainCapsule: 'Capsula Principale (616x353 / HD 1232x706)',
    verticalCapsule: 'Capsula Verticale Libreria (300x450 / HD 600x900)',
    libraryHero: 'Banner Libreria (1920x620 / HD 3840x1240)',
    communityIcon: 'Icona App Community (32x32 / HD 184x184)',
    storePreviewTab: 'Negozio Steam',
    libraryPreviewTab: 'Libreria Steam',
    allAssetsTab: 'Tutte le Dimensioni',
    toggleSafeZones: 'Guide di Sicurezza',
    toggleSteamOverlay: 'Interfaccia Steam'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Specifiche delle Capsule Grafiche di Steam e Qualità di Visualizzazione'
    },
    {
      type: 'paragraph',
      html: 'Le pagine del negozio Steam e le viste della libreria utilizzano capsule grafiche standardizzate per mostrare il tuo gioco su diversi schermi. È fondamentale garantire leggibilità e fedeltà cromatica. Durante l invio su Steamworks, gli sviluppatori devono rispettare dimensioni in pixel e zone di sicurezza per evitare sovrapposizioni con i prezzi ed elementi di modalità.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Risoluzione HD Intestazione', value: '920 x 430 px' },
        { label: 'Rapporto Capsula Verticale', value: '2:3 Verticale' },
        { label: 'Risoluzione Max Banner', value: '3840 x 1240 px' },
        { label: 'Dimensione Icona Community', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['Tipo di Risorsa', 'Dimensione Standard (px)', 'Dimensione HD Target (px)', 'Rapporto d Aspetto', 'Formato'],
      rows: [
        ['Capsula Intestazione', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Capsula Piccola', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Capsula Principale', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Capsula Verticale', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Banner Libreria', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Logo Libreria', '1280 x 720', '1280 x 720', '16:9', 'PNG Trasparente'],
        ['Icona Community', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Ottimizzazione delle Zone di Sicurezza e Qualità',
      html: 'Mantieni tutti i loghi e i volti dei personaggi nei due terzi superiori a sinistra dell immagine per una fruibilità ideale ed è fondamentale verificare le sovrapposizioni.'
    },
    {
      type: 'proscons',
      title: 'Valutazione del Flusso di Lavoro',
      items: [
        {
          pro: 'Generazione istantanea di tutte le dimensioni per Steamworks con velocità ed affidabilità',
          con: 'Immagini complesse potrebbero richiedere livelli separati per la massima fedeltà'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Capsula',
          definition: 'Termine standard di Valve per indicare i contenitori grafici promozionali.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: "Questa sezione raccoglie i controlli essenziali per un export ordinato e un'anteprima affidabile. 1.",
    },
    {
      type: 'paragraph',
      html: "Questa sezione raccoglie i controlli essenziali per un export ordinato e un'anteprima affidabile. 2.",
    },
    {
      type: 'paragraph',
      html: "Questa sezione raccoglie i controlli essenziali per un export ordinato e un'anteprima affidabile. 3.",
    },
    {
      type: 'paragraph',
      html: "Questa sezione raccoglie i controlli essenziali per un export ordinato e un'anteprima affidabile. 4.",
    },
    {
      type: 'paragraph',
      html: "Questa sezione raccoglie i controlli essenziali per un export ordinato e un'anteprima affidabile. 5.",
    },
    {
      type: 'paragraph',
      html: "Questa sezione raccoglie i controlli essenziali per un export ordinato e un'anteprima affidabile. 6.",
    },
    {
      type: 'paragraph',
      html: "Questa sezione raccoglie i controlli essenziali per un export ordinato e un'anteprima affidabile. 7.",
    },
    {
      type: 'paragraph',
      html: "Questa sezione raccoglie i controlli essenziali per un export ordinato e un'anteprima affidabile. 8.",
    },
  ],
  faqTitle: 'Domande Frequenti sulle Risorse Steam',
  faq: [
    {
      question: 'Quale formato di file devo usare per le capsule Steam?',
      answer: 'Steam accetta file JPG o PNG ed è consigliato il formato alta qualità.'
    },
    {
      question: "Quali altri dati bisogna preparare?",
      answer: "Controlla i dati inseriti e confronta l'anteprima con le specifiche.",
    },
    {
      question: "Come si può verificare il risultato?",
      answer: "Controlla i dati inseriti e confronta l'anteprima con le specifiche.",
    },
  ],
  howTo: [
    {
      name: 'Carica la Grafica',
      text: 'Seleziona un immagine ad alta risoluzione.'
    },
    {
      name: "Quali altri dati bisogna preparare?",
      text: "Controlla i dati inseriti e confronta l'anteprima con le specifiche.",
    },
    {
      name: "Come si può verificare il risultato?",
      text: "Controlla i dati inseriti e confronta l'anteprima con le specifiche.",
    },
    {
      name: "Come posso testare il file finale?",
      text: "Apri l'anteprima nell'ambiente previsto e controlla dimensioni e resa.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Generatore e Anteprima di Capsule Steam',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quale formato di file devo usare per le capsule Steam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam accetta file JPG o PNG.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come generare capsule per Steam',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Carica la Grafica',
          text: 'Seleziona un immagine ad alta risoluzione.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
