import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'cambia-tavolozza-pixel-art',
  title: 'Cambia Tavolozza per Pixel Art',
  description: 'Riduci sprite e fogli di sprite alle tavolozze di console classiche o a una lista personalizzata di colori esadecimali nel browser.',
  ui: {
    uploadTitle: 'Trascina uno sprite o foglio di sprite',
    uploadHint: 'PNG, JPEG o WebP elaborati direttamente sul tuo dispositivo',
    chooseImage: 'Scegli immagine',
    replaceImage: 'Sostituisci immagine',
    paletteTitle: 'Scegli tavolozza',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'Ispirata al NES',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Colori personalizzati',
    customPaletteHint: 'Separa i valori esadecimali con virgole, spazi o a capo.',
    applyCustomPalette: 'Applica tavolozza',
    resetCustomPalette: 'Ripristina',
    sourcePreview: 'Originale',
    resultPreview: 'Risultato ridotto',
    waitingForImage: 'In attesa di un immagine',
    uploadToPreview: 'Carica un immagine per la prima vista',
    resultEmpty: 'Le versioni originale e ridotta appariranno affiancate.',
    downloadPng: 'Scarica PNG',
    downloadDisabled: 'Carica un immagine per abilitare l esportazione.',
    colorCount: 'Colori originali',
    mappedCount: 'Colori usati',
    imageSize: 'Dimensione immagine',
    paletteCount: 'colori tavolozza',
    preserveAlpha: 'Conserva trasparenza',
    zoomLabel: 'Zoom',
    processing: 'Mappatura pixel in corso',
    invalidPalette: 'Aggiungi almeno un colore esadecimale valido',
    invalidImage: 'Scegli un immagine PNG, JPEG o WebP',
    readyStatus: 'Pronto',
    dropActive: 'Rilascia per caricare',
    mappedSummary: 'Mappati {source} colori originali in {mapped} colori tavolozza',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Trasforma uno Sprite a Colori in una Tavolozza Retro Deliberata',
    },
    {
      type: 'paragraph',
      html: 'Una tavolozza limitata è molto più di una restrizione tecnica. Dona a uno sprite un vocabolario cromatico coerente, fa percepire gli elementi di una scena come appartenenti al medesimo mondo e suggerisce il carattere visivo di una specifica console o architettura fantasy. Questo strumento di cambio tavolozza nel browser ti consente di confrontare l immagine originale con una versione ridotta mentre sperimenti con Game Boy, ispirate al NES, PICO-8, Commodore 64, DawnBringer 16 e tavolozze personalizzate.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Come Funziona la Mappatura al Colore Più Vicino',
    },
    {
      type: 'paragraph',
      html: 'Lo strumento legge i canali rosso, verde e blu di ogni pixel visibile e confronta quel colore con ciascun valore presente nella tavolozza selezionata. Sceglie l elemento della tavolozza con la minore distanza RGB al quadrato e scrive il colore sostitutivo in un nuovo buffer di canvas. Il canale alfa viene mantenuto separato, in modo che i pixel trasparenti rimangano tali e i bordi parzialmente trasparenti conservino la loro opacità originale quando l opzione Conserva trasparenza è attiva.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Riduzione tavolozza',
          description: 'Ogni colore originale viene sostituito dal campione disponibile più vicino.',
          points: [
            'Veloce e prevedibile per sprite, icone, elementi di mappa e interfacce',
            'Conserva accuratamente le dimensioni e le posizioni originali dei pixel',
            'Rende semplice la verifica e il controllo di un budget cromatico stabilito',
          ],
        },
        {
          title: 'Cambio tavolozza (Palette Swapping)',
          description: 'La stessa illustrazione può essere rimappata su un altro insieme di colori scelto con cura.',
          points: [
            'Utile per costumi alternativi, variazioni di ambientazione e stati di danno',
            'Le liste esadecimali personalizzate permettono di adeguarla alla propria direzione artistica',
            'Il file PNG scaricato è subito pronto per essere reimportato nel tuo editor',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Scegliere una Tavolozza per la Pixel Art',
    },
    {
      type: 'table',
      headers: ['Tavolozza', 'Colori', 'Uso consigliato', 'Aspetti da valutare'],
      rows: [
        ['Game Boy', '4', 'Stile monocromatico portatile e studi di valori ben definiti', 'La gamma ristretta di valori può fondere materiali con tonalità simili'],
        ['Ispirata al NES', '16', 'Sprite arcade ben marcati, personaggi e elementi di mappa', 'I colori molto luminosi possono sovrastare i dettagli più piccoli'],
        ['PICO-8', '16', 'Pixel art moderna con accenti cromatici saturi', 'Le tonalità molto sature richiedono un contrasto intenzionale'],
        ['Commodore 64', '16', 'Scene retro morbide ed estetica da computer classico', 'Il basso contrasto trae vantaggio da sagome ben definite'],
        ['DawnBringer 16', '16', 'Tavolozza versatile e selezionata a mano per pixel art generale', 'Le rampe di colore richiedono comunque una direzione della luce chiara'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Flusso di Lavoro Pratico per Fogli Sprite',
    },
    {
      type: 'paragraph',
      html: 'Inizia con l immagine di origine più grande che riesci a modificare comodamente, quindi carica lo sprite o il foglio sprite esportato qui. Seleziona una preimpostazione per definire lo stile oppure incolla una lista personalizzata da una libreria di colori. Ispeziona le due tele a un livello di zoom più elevato per verificare se si sono persi dettagli del volto, contorni uniti o punti di luce che non si staccano più dal colore di base. Se il risultato appare poco definito, prova una tavolozza con stacchi di valore più marcati o aggiungi un colore di accento deliberato alla lista.',
    },
    {
      type: 'tip',
      title: 'Mantenere una Tavolozza Intenzionale',
      html: 'Una lista di colori più ampia non è automaticamente migliore. Inizia con 4-16 colori, assegna a ogni colore un ruolo preciso e riserva i valori più luminosi per i punti focali o i punti di luce più importanti. L algoritmo del colore più vicino conserva la posizione dei pixel, ma non può decidere quali colori debbano guidare la gerarchia visiva del tuo sprite.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Lista di Controllo per l Esportazione in Pixel Art',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Prima di Importare il File PNG Ridotto',
      html: 'Controlla il risultato al 100% di scala e alle dimensioni finali all interno del gioco, conferma che i bordi trasparenti siano puliti, verifica che le sagome principali rimangano ben leggibili e conserva il file sorgente originale accanto al file esportato per poter modificare la tavolozza senza dover ricominciare da capo.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Quantizzazione del colore',
          definition: 'Il processo di riduzione di un ampio insieme di colori originali a un insieme più piccolo e definito.',
        },
        {
          term: 'Rampa di colore',
          definition: 'Una sequenza ordinata di toni scuri, medi e chiari utilizzata per ombreggiare una superficie o un materiale.',
        },
        {
          term: 'Tavolozza indicizzata',
          definition: 'Una tabella di colori compatta in cui i pixel fanno riferimento a indici di una lista condivisa anziché memorizzare ogni volta i colori completi.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Lo strumento carica le mie immagini su un server?',
      answer: 'No. L immagine viene decodificata in una tela nel tuo browser, mappata localmente in JavaScript ed esportata direttamente come PNG. Lo strumento non richiede alcun passaggio di caricamento esterno.',
    },
    {
      question: 'Posso usare una mia tavolozza personalizzata?',
      answer: 'Sì. Incolla valori esadecimali a 6 o 3 cifre nel campo Colori personalizzati, separati da virgole, spazi o a capo, quindi seleziona Applica tavolozza.',
    },
    {
      question: 'La dimensione del mio sprite viene modificata?',
      answer: 'No. Il file scaricato mantiene la larghezza, l altezza, le posizioni dei pixel e i valori alfa originali quando l opzione Conserva trasparenza è attiva.',
    },
    {
      question: 'Quale algoritmo viene utilizzato?',
      answer: 'Ogni pixel visibile viene assegnato al colore più vicino nella tavolozza selezionata utilizzando la distanza euclidea al quadrato nello spazio RGB. È un metodo rapido, deterministico e facile da previsualizzare, che non applica dithering o correzione cromatica percettiva Lab.',
    },
  ],
  howTo: [
    {
      name: 'Carica uno sprite',
      text: 'Trascina uno sprite o foglio sprite PNG, JPEG o WebP nell area di lavoro, oppure usa il pulsante Scegli immagine.',
    },
    {
      name: 'Scegli una tavolozza',
      text: 'Seleziona una preimpostazione classica o inserisci i tuoi colori esadecimali. Il risultato si aggiorna immediatamente.',
    },
    {
      name: 'Confronta ed esporta',
      text: 'Ispeziona la tela originale e quella con la tavolozza ridotta, regola lo zoom e scarica il risultato in formato PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Cambia Tavolozza per Pixel Art',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Lo strumento carica le mie immagini su un server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. L immagine viene elaborata localmente nel browser ed esportata direttamente in PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso usare una mia tavolozza personalizzata?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sì. Inserisci i codici esadecimali nel campo Colori personalizzati e applica la tavolozza.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come ridurre uno sprite a una tavolozza retro',
      step: [
        { '@type': 'HowToStep', name: 'Carica uno sprite', text: 'Trascina un file nell area di lavoro.' },
        { '@type': 'HowToStep', name: 'Scegli una tavolozza', text: 'Seleziona una preimpostazione o inserisci i tuoi colori.' },
        { '@type': 'HowToStep', name: 'Confronta ed esporta', text: 'Ispeziona il risultato e scarica il file PNG.' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
