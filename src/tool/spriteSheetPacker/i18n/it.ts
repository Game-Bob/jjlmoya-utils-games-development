import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'impacchettatore-ed-estruttore-di-sprite-sheet',
  title: 'Impacchettatore ed Estrattore di Sprite Sheet',
  description:
    'Ottimizza le prestazioni dei giochi 2D unendo fotogrammi di animazione singoli in atlas di texture o estraendo sprite da fogli esistenti.',
  ui: {
    packerTab: 'Studio di Impacchettamento',
    extractorTab: 'Estrattore di Sprite',
    dropZoneTitle: 'Trascina e Rilascia i Fotogrammi',
    dropZoneSubtitle: 'Carica immagini PNG o WebP per generare il tuo atlas di texture ottimizzato',
    selectFilesButton: 'Seleziona Immagini',
    clearAllButton: 'Svuota Area di Lavoro',
    downloadZipButton: 'Scarica Pacchetto (ZIP)',
    copyJsonButton: 'Copia JSON dell Atlas',
    downloadSheetPngButton: 'Scarica Texture PNG',
    paddingLabel: 'Spaziatura Fotogrammi (px)',
    borderExtrusionLabel: 'Estrusione del Bordo (px)',
    maxTextureSizeLabel: 'Dimensione Massima Texture',
    powerOfTwoLabel: 'Forza Potenza di 2 (POT)',
    trimTransparencyLabel: 'Ritaglia Trasparenza',
    exportFormatLabel: 'Formato del Motore Target',
    presetPixelArt: 'Preset Pixel Art 16x16',
    presetHdUi: 'Preset Atlas HD UI 1024',
    presetMobile: 'Preset Mobile WebGL 2048',
    formatGenericHash: 'JSON Generico (Hash)',
    formatGenericArray: 'JSON Generico (Array)',
    formatUnity: 'Motore Unity 2D',
    formatGodot: 'Motore Godot 2D',
    formatPhaser: 'Motore Phaser / PixiJS',
    formatCss: 'CSS Web Frontend',
    previewTitle: 'Anteprima dell Atlas di Texture',
    efficiencyBadge: 'Efficienza Texture',
    drawCallsBadge: 'Chiamate di Disegno Ridotte',
    totalFramesBadge: 'Fotogrammi Impacchettati',
    textureSizeBadge: 'Dimensione dell Atlas',
    flipbookTitle: 'Lettore Animazione Flipbook',
    flipbookFpsLabel: 'Velocità Animazione (FPS)',
    playAnimation: 'Avvia Sequenza',
    pauseAnimation: 'Metti in Pausa',
    extractorModeGrid: 'Taglio a Griglia Fissa',
    extractorModeAlpha: 'Taglio Automatico Canale Alfa',
    frameWidthLabel: 'Larghezza Fotogramma (px)',
    frameHeightLabel: 'Altezza Fotogramma (px)',
    marginLabel: 'Margine Esterno (px)',
    spacingLabel: 'Spaziatura Griglia (px)',
    extractFramesButton: 'Estrai Fotogrammi',
    extractedCountLabel: 'Sprite Estratti',
    codeSnippetTitle: 'Codice di Integrazione Motore',
    copySnippetButton: 'Copia Codice',
    copiedToast: 'Copiato negli Appunti',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Comprensione del Batching GPU e Ottimizzazione Chiamate di Disegno',
    },
    {
      type: 'paragraph',
      html: 'Nelle moderne pipeline grafiche 2D, raggruppare i fotogrammi di animazione singoli in un unico atlas di texture consente alla GPU di disegnare tutti gli oggetti in un unica chiamata di disegno.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Riduzione Chiamate di Disegno' },
        { value: '4x', label: 'Elaborazione GPU più Rapida' },
        { value: '60 FPS', label: 'Target Stabile su Mobile' },
        { value: '100%', label: 'Elaborazione Locale Browser' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Confronto tra File Fotogrammi Singoli e Atlas di Texture',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'File di Fotogrammi Separati',
          description: 'File PNG o WebP salvati singolarmente',
          points: [
            'Genera una chiamata di disegno distinta per ogni singolo fotogramma a schermo',
            'Provoca frequenti cambi di contesto sulla scheda grafica GPU',
            'Aumenta il numero di richieste HTTP nei giochi web',
            'Prestazioni inferiori sui dispositivi mobili',
          ],
        },
        {
          title: 'Atlas di Texture Unito',
          description: 'Unica immagine PNG abbinata a metadati JSON',
          points: [
            'Raggruppa centinaia di sprite in un unica chiamata di disegno GPU',
            'Massimizza la larghezza di banda della memoria e la velocità di rendering',
            'Riduce le richieste di file raggruppando texture e dati',
            'Garantisce una frequenza di fotogrammi fluida su tutte le piattaforme',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Matematica dell Estrusione dei Bordi e Movimento Subpixel',
    },
    {
      type: 'paragraph',
      html: 'Applicare un estrusione di bordo da 1 a 2 pixel duplica i pixel esterni evitando imperfezioni visive durante i movimenti di fotocamera.',
    },
    {
      type: 'tip',
      title: 'Strategia di Estrusione dei Bordi',
      html: 'Utilizza l estrusione dei bordi per evitare che i pixel adiacenti sfumino tra loro nei movimenti di fotocamera.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Guida alle Dimensioni delle Texture',
    },
    {
      type: 'table',
      headers: ['Piattaforma Target', 'Dimensione Massima Consigliata', 'Requisito Potenza di 2', 'Profilo Memoria'],
      rows: [
        ['Browser Mobile', '2048 x 2048 px', 'Obbligatorio in WebGL 1.0', 'Bassa Larghezza di Banda'],
        ['PC / Console', '4096 x 4096 px', 'Consigliato', 'Alta Capacità GPU'],
        ['Console Portatili Retro', '1024 x 1024 px', 'Requisito Rigido', 'Limiti VRAM Rigidi'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Garantisce piena compatibilità con driver grafici datati e WebGL 1.0',
          con: 'Può lasciare spazio trasparente inutilizzato con pochi sprite',
        },
        {
          pro: 'Abilita il supporto automatico al mipmapping',
          con: 'Richiede un attenta regolazione della spaziatura per forme irregolari',
        },
        {
          pro: 'Ottimizza l allocazione di memoria VRAM sulla GPU',
          con: 'Aumenta leggermente l area di texture iniziale',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Termini Chiave nell Impacchettamento',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Comando inviato dal processore alla scheda grafica per il rendering di geometria e texture.',
        },
        {
          term: 'Bin Packing',
          definition: 'Tecnica algoritmica per disporre elementi rettangolari di varie dimensioni in un contenitore minimo.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Duplicazione dei pixel del bordo verso l esterno per evitare imperfezioni visive.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Riproduzione sequenziale rapida di immagini per simulare il movimento continuo nei giochi 2D.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Lista di Controllo delle Prestazioni',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Regole di Produzione',
      html: 'Raggruppa le animazioni in atlas condivisi e forza dimensioni in potenza di due per WebGL.',
    },
  ],
  faq: [
    {
      question: 'Cos è uno sprite sheet e perché è essenziale per i giochi 2D?',
      answer:
        'Uno sprite sheet è un unico file immagine contenente più grafiche o fotogrammi. Questo permette al motore di gioco di disegnare molti oggetti in un unica chiamata GPU.',
    },
    {
      question: 'Come funziona l elaborazione locale in questo strumento?',
      answer:
        'Le tue immagini vengono elaborate localmente nel tuo browser tramite l API Canvas HTML5 senza inviare dati a server esterni.',
    },
    {
      question: 'Posso estrarre i fotogrammi da uno sprite sheet esistente?',
      answer:
        'Sì. Passa alla modalità Estrattore, carica lo foglio e imposta le dimensioni della griglia di taglio.',
    },
  ],
  howTo: [
    {
      name: 'Carica le Immagini',
      text: 'Trascina e rilascia i tuoi file PNG o WebP nell area di caricamento.',
    },
    {
      name: 'Configura le Impostazioni',
      text: 'Regola la spaziatura, l estrusione dei bordi e la dimensione massima della texture.',
    },
    {
      name: 'Anteprima e Download',
      text: 'Verifica l animazione nel lettore flipbook e scarica il pacchetto ZIP.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Impacchettatore ed Estrattore di Sprite Sheet',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Cos è uno sprite sheet e perché è essenziale per i giochi 2D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Uno sprite sheet è un unico file immagine contenente più grafiche che permette di disegnare più oggetti in un unica chiamata GPU.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come impacchettare ed estrarre sprite sheet',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Carica le Immagini',
          text: 'Trascina e rilascia i tuoi file PNG o WebP nell area di caricamento.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
