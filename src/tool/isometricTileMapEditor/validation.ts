export const validation = {
  reviewedAt: '2026-09-01',
  methodology: 'The editor models a layered isometric grid, keeps cell coordinates and layer visibility in local state, renders visible layers from back to front, and exports the same map state as JSON or SVG. It intentionally treats engine sorting and final asset rendering as out of scope.',
  sources: [
    'https://docs.godotengine.org/en/4.5/tutorials/2d/using_tilemaps.html',
    'https://docs.godotengine.org/en/4.5/classes/class_tileset.html',
    'https://docs.unity3d.com/Manual/Tilemap-Isometric.html',
  ],
  referenceCases: [
    { name: 'Default map', source: '8 columns x 8 rows x 3 layers', output: '192 addressable cells' },
    { name: 'Layer visibility', source: 'Hide one rendered layer', output: 'Lower visible layers receive map clicks' },
    { name: 'Local export', source: 'Editable map state', output: 'JSON and SVG files generated in the browser' },
  ],
  limitations: [
    'The SVG is a logical map preview and does not import or pack a tileset.',
    'Layer depth is an explicit preview offset, not an engine-specific sorting configuration.',
    'Final collisions, camera behavior, sprite sorting, and pixel placement must be verified in the target engine.',
  ],
} as const;
