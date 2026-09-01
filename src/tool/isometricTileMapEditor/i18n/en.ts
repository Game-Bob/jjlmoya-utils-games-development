import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  {
    question: 'What is an isometric tile map?',
    answer: 'An isometric tile map uses a diamond-shaped grid to suggest three-dimensional space in a two-dimensional scene. Columns and rows describe the ground plane while layers add a simple height offset.',
  },
  {
    question: 'How do I paint a tile?',
    answer: 'Choose a tile from the palette, keep Paint selected, choose the active layer, and click a diamond. Right-clicking a cell erases it even when Paint is selected.',
  },
  {
    question: 'What does layer depth change?',
    answer: 'Layer depth is the vertical screen offset between stacked layers. Increase it when your art treats one grid level as a taller step, and reduce it when layers should sit close together.',
  },
  {
    question: 'Can I use the exported SVG in a game engine?',
    answer: 'The SVG is a visual reference containing the current diamonds and tile colors. The JSON is the better source for rebuilding the logical grid in an engine because it preserves rows, columns, layers, and tile values.',
  },
  {
    question: 'Does this editor create a production tileset?',
    answer: 'No. It plans a layered grid and exports a compact map description. It does not slice textures, configure collisions, choose sorting settings, or guarantee that a particular engine will render your final assets correctly.',
  },
];

const howTo = [
  { name: 'Set the grid geometry', text: 'Choose the tile width and height, then set the number of columns, rows, and layers. Use layer depth to describe the vertical step between levels.' },
  { name: 'Choose a drawing layer', text: 'Select a layer button before painting. The active layer is outlined more strongly, while other layers remain visible with reduced opacity for spatial context.' },
  { name: 'Paint the ground or structure', text: 'Choose Grass, Stone, Water, or Path and click cells to place them. Change the palette when a different material should occupy the next cell.' },
  { name: 'Correct the map locally', text: 'Use Erase or right-click a cell to remove a tile. Changing the grid dimensions preserves cells that still fit inside the new bounds.' },
  { name: 'Export the planning result', text: 'Use JSON when another tool will rebuild the grid. Use SVG when you need a quick visual reference for a design review or level sketch.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Isometric Tile Map Editor',
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
  name: 'How to sketch an isometric tile map',
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'isometric-tile-map-editor',
  title: 'Isometric Tile Map Editor',
  description: 'Paint layered diamond-grid maps, tune tile geometry, and export an isometric level sketch as JSON or SVG.',
  ui: {
    controlsTitle: 'Map controls',
    geometryTitle: 'Grid geometry',
    tileWidthLabel: 'Tile width',
    tileHeightLabel: 'Tile height',
    columnsLabel: 'Columns',
    rowsLabel: 'Rows',
    layersLabel: 'Layers',
    layerDepthLabel: 'Layer depth',
    toolsTitle: 'Drawing mode',
    paintLabel: 'Paint',
    eraseLabel: 'Erase',
    paletteTitle: 'Tile palette',
    grassLabel: 'Grass',
    stoneLabel: 'Stone',
    waterLabel: 'Water',
    pathLabel: 'Path',
    layersTitle: 'Active layer',
    layerLabel: 'Layer',
    hideLayerLabel: 'Hide',
    showLayerLabel: 'Show',
    mapTitle: 'Isometric map',
    mapHelp: 'Select a tile, choose a layer, then click the diamonds. Right-click any cell to erase it.',
    mapAriaLabel: 'Editable isometric tile map',
    summaryTitle: 'Map readout',
    filledLabel: 'Filled cells',
    coverageLabel: 'Coverage',
    activeLayerLabel: 'Active layer',
    selectedLabel: 'Selected tile',
    emptyCellLabel: 'Empty',
    cellLabel: 'Cell',
    clearLabel: 'Clear map',
    resetLabel: 'Reset geometry',
    exportJsonLabel: 'Export JSON',
    exportSvgLabel: 'Export SVG',
    statusReady: 'Ready to draw',
    statusSaved: 'Saved locally',
    statusCleared: 'Map cleared',
    statusReset: 'Geometry reset',
    statusExported: 'File exported',
    statusPainted: 'Tile placed',
    statusErased: 'Tile erased',
    statusLayerHidden: 'Layer hidden',
    statusLayerShown: 'Layer shown',
    legendTitle: 'Map key',
    legendEmpty: 'Empty cell',
    legendFilled: 'Painted cell',
    modelNote: 'This editor describes a logical layered grid. It does not import a tileset, calculate collision, perform engine-specific sorting, or guarantee final pixel placement.',
    privacyDisclosure: 'Your map stays in this browser. No map data or telemetry is uploaded.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Use an isometric grid to plan space and height' },
    { type: 'paragraph', html: 'An isometric map is useful when a level needs readable ground positions and a sense of height without becoming a full 3D scene. The diamond grid makes row and column movement visible, while layers provide a compact way to sketch bridges, platforms, rooftops, or stacked rooms.' },
    { type: 'paragraph', html: 'This editor keeps geometry explicit. Tile width and height control the diamond, columns and rows control the ground footprint, and layer depth controls how far each additional level moves upward on screen. Changing the dimensions preserves cells that remain inside the new map bounds, so you can explore proportions without starting over.' },
    { type: 'title', level: 2, text: 'Build a useful blockout in five passes' },
    { type: 'list', items: ['Set the tile proportions to match the visual language of the project.', 'Paint a ground material before adding paths or water so movement areas stay legible.', 'Use one layer for bridges, roofs, or raised platforms instead of encoding height only in color.', 'Switch to Erase for corrections and inspect the lower layers before placing a tile above them.', 'Export JSON for reconstruction and SVG for a visual review document.'] },
    { type: 'title', level: 2, text: 'Read rows, columns, and layers separately' },
    { type: 'paragraph', html: 'Rows and columns describe where a cell lives on the logical plane. They should remain stable even when the visual diamond changes size. Layers describe a second coordinate: two cells may share the same row and column while occupying different heights. Keeping those concepts separate makes the exported map easier to rebuild in an engine.' },
    { type: 'table', headers: ['Signal', 'Meaning', 'Useful next decision'], rows: [['Sparse coverage', 'Most cells are still empty.', 'Block out the playable footprint before adding decoration.'], ['Several layers in one column', 'The map contains stacked space.', 'Check that sorting and collision rules will distinguish those levels.'], ['Very wide diamond', 'Horizontal travel dominates the visual grid.', 'Reduce tile width or increase the reference viewport if the map feels stretched.'], ['Very deep layer step', 'Height changes are visually strong.', 'Use fewer layers or confirm that the engine art supports that elevation.']] },
    { type: 'title', level: 2, text: 'Choose the right export for the next task' },
    { type: 'paragraph', html: 'JSON is the structured handoff: it preserves the geometry, the layer count, the active drawing state, and every tile value. SVG is the presentation handoff: it shows the current colored diamonds and is useful in a design review, a ticket, or a level-planning document. Neither export contains a source tileset or engine metadata.' },
    { type: 'tip', title: 'What this blockout cannot prove', html: 'A convincing diamond map does not prove that sprites will sort correctly, that characters can navigate between elevations, or that a tileset will connect without seams. Treat the map as a spatial contract, then test the real assets, collision shapes, sorting axis, and camera in the target engine.' },
  ],
  faqTitle: 'Isometric tile map questions',
  faq,
  bibliographyTitle: 'Tile map references',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
