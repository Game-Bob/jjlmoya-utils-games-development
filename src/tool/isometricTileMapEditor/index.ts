import type { ToolDefinition } from '../../types';
import { isometricTileMapEditor } from './entry';

export * from './entry';

export const ISOMETRIC_TILE_MAP_EDITOR_TOOL: ToolDefinition = {
  entry: isometricTileMapEditor,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
