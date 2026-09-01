import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'Editor di mappe tile isometriche';
const description = 'Disegna mappe a rombi con più livelli, regola la geometria delle tile ed esporta lo schema del livello in JSON o SVG.';
const faq = [
  { question: 'Che cos è una mappa tile isometrica?', answer: 'Una mappa tile isometrica usa una griglia a forma di rombo per suggerire uno spazio tridimensionale in una scena bidimensionale. Colonne e righe descrivono il piano del terreno, mentre i livelli aggiungono uno scarto di altezza.' },
  { question: 'Come inserisco una tile?', answer: 'Scegli una tile dalla tavolozza, lascia attivo Disegna, seleziona il livello attivo e fai clic su un rombo. Il clic destro cancella una cella anche quando Disegna è selezionato.' },
  { question: 'Che cosa cambia la profondità del livello?', answer: 'La profondità del livello è lo spostamento verticale sullo schermo tra i livelli sovrapposti. Aumentala per gradini più alti e riducila quando i livelli devono restare vicini.' },
  { question: 'Posso usare l SVG esportato in un motore di gioco?', answer: 'L SVG è un riferimento visivo con i rombi e i colori correnti. Il JSON è più adatto a ricostruire la griglia logica perché conserva righe, colonne, livelli e valori delle tile.' },
  { question: 'Questo editor crea un tileset pronto per la produzione?', answer: 'No. Pianifica una griglia a livelli ed esporta una descrizione compatta della mappa. Non ritaglia texture, configura collisioni, sceglie le regole di ordinamento del motore né garantisce il rendering finale.' },
];
const howTo = [
  { name: 'Impostare la geometria della griglia', text: 'Scegli larghezza e altezza della tile, poi imposta il numero di colonne, righe e livelli. Usa la profondità del livello per descrivere il salto verticale tra le quote.' },
  { name: 'Scegliere un livello di disegno', text: 'Seleziona un livello prima di disegnare. Il livello attivo ha un bordo più marcato, mentre gli altri livelli visibili restano semitrasparenti per mostrare il contesto.' },
  { name: 'Disegnare il terreno o la struttura', text: 'Scegli Erba, Pietra, Acqua o Sentiero e fai clic sulle celle. Cambia tavolozza quando la cella successiva richiede un materiale diverso.' },
  { name: 'Correggere la mappa localmente', text: 'Usa Cancella o il clic destro per rimuovere una tile. Quando cambi le dimensioni, le celle ancora comprese nei limiti vengono conservate.' },
  { name: 'Esportare il risultato', text: 'Usa JSON se un altro strumento ricostruirà la griglia. Usa SVG come riferimento visivo rapido per una revisione del design o dello schema del livello.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'editor-mappa-tile-isometrica', title, description,
  ui: {
    controlsTitle: 'Controlli mappa', geometryTitle: 'Geometria griglia', tileWidthLabel: 'Larghezza tile', tileHeightLabel: 'Altezza tile', columnsLabel: 'Colonne', rowsLabel: 'Righe', layersLabel: 'Livelli', layerDepthLabel: 'Profondità livello', toolsTitle: 'Modalità disegno', paintLabel: 'Disegna', eraseLabel: 'Cancella', paletteTitle: 'Tavolozza tile', grassLabel: 'Erba', stoneLabel: 'Pietra', waterLabel: 'Acqua', pathLabel: 'Sentiero', layersTitle: 'Livello attivo', layerLabel: 'Livello', hideLayerLabel: 'Nascondi', showLayerLabel: 'Mostra', mapTitle: 'Mappa isometrica', mapHelp: 'Scegli una tile e un livello, poi fai clic sui rombi. Il clic destro cancella qualsiasi cella.', mapAriaLabel: 'Mappa tile isometrica modificabile', summaryTitle: 'Lettura mappa', filledLabel: 'Celle riempite', coverageLabel: 'Copertura', activeLayerLabel: 'Livello attivo', selectedLabel: 'Tile selezionata', emptyCellLabel: 'Vuota', cellLabel: 'Cella', clearLabel: 'Svuota mappa', resetLabel: 'Ripristina geometria', exportJsonLabel: 'Esporta JSON', exportSvgLabel: 'Esporta SVG', statusReady: 'Pronto per disegnare', statusSaved: 'Salvato localmente', statusCleared: 'Mappa svuotata', statusReset: 'Geometria ripristinata', statusExported: 'File esportato', statusPainted: 'Tile inserita', statusErased: 'Tile cancellata', statusLayerHidden: 'Livello nascosto', statusLayerShown: 'Livello mostrato', legendTitle: 'Legenda mappa', legendEmpty: 'Cella vuota', legendFilled: 'Cella disegnata', modelNote: 'Questo editor descrive una griglia logica a livelli. Non importa un tileset, non calcola collisioni, non configura l ordinamento specifico del motore e non garantisce la posizione finale dei pixel.', privacyDisclosure: 'La tua mappa resta in questo browser. Nessun dato della mappa o dato di telemetria viene caricato.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Usa una griglia isometrica per pianificare spazio e altezza' },
    { type: 'paragraph', html: 'Una mappa isometrica è utile quando un livello deve mostrare posizioni del terreno leggibili e un senso di altezza senza diventare una scena 3D completa. La griglia a rombi rende visibili righe e colonne, mentre i livelli permettono di abbozzare ponti, piattaforme, tetti o stanze sovrapposte.' },
    { type: 'paragraph', html: 'Questo editor mantiene esplicita la geometria. Larghezza e altezza della tile controllano il rombo, colonne e righe definiscono l impronta del terreno e la profondità del livello regola quanto ogni quota sale sullo schermo. Le celle ancora comprese nei limiti restano intatte quando cambi le dimensioni.' },
    { type: 'title', level: 2, text: 'Costruisci un blockout utile in cinque passaggi' },
    { type: 'list', items: ['Adatta le proporzioni della tile al linguaggio visivo del progetto.', 'Disegna prima un materiale del terreno per mantenere leggibili le aree percorribili.', 'Usa un livello per ponti, tetti e piattaforme rialzate invece di indicare l altezza solo con il colore.', 'Nascondi i livelli superiori o passa a Cancella per correggere con precisione le celle inferiori.', 'Esporta JSON per ricostruire la mappa e SVG per una revisione visiva.'] },
    { type: 'title', level: 2, text: 'Leggi righe, colonne e livelli separatamente' },
    { type: 'paragraph', html: 'Righe e colonne indicano la posizione di una cella sul piano logico e dovrebbero restare stabili anche quando cambia la dimensione del rombo. I livelli sono una seconda coordinata: due celle possono condividere riga e colonna ma trovarsi ad altezze diverse. Separare questi concetti rende più semplice ricostruire la mappa nel motore.' },
    { type: 'table', headers: ['Segnale', 'Significato', 'Decisione successiva'], rows: [['Copertura bassa', 'La maggior parte delle celle è ancora vuota.', 'Definisci l area giocabile prima di aggiungere decorazioni.'], ['Più livelli in una colonna', 'La mappa contiene spazio sovrapposto.', 'Controlla che ordinamento e collisioni distinguano le quote.'], ['Rombo molto largo', 'Il movimento orizzontale domina la griglia.', 'Riduci la larghezza della tile o aumenta il viewport di riferimento.'], ['Passo verticale molto profondo', 'I cambi di altezza risaltano molto.', 'Usa meno livelli o verifica che gli asset supportino quella quota.']] },
    { type: 'title', level: 2, text: 'Scegli l esportazione giusta per il prossimo compito' },
    { type: 'paragraph', html: 'JSON è la consegna strutturata: conserva geometria, numero di livelli, stato del disegno e ogni valore delle tile. SVG è la consegna visiva: mostra i rombi colorati per una revisione, una scheda di lavoro o un documento di level design. Nessuna esportazione contiene il tileset sorgente o i metadati del motore.' },
    { type: 'tip', title: 'Cosa non può dimostrare questo blockout', html: 'Una mappa a rombi convincente non dimostra che gli sprite saranno ordinati correttamente, che i personaggi potranno attraversare le quote o che il tileset si unirà senza giunzioni. Prova asset reali, collisioni, asse di ordinamento e camera nel motore di destinazione.' },
  ],
  faqTitle: 'Domande sulle mappe tile isometriche', faq, bibliographyTitle: 'Riferimenti sulle mappe tile', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
