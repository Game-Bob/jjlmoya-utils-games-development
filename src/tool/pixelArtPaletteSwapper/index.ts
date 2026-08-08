import type { ToolDefinition } from '../../types';
import { pixelArtPaletteSwapper } from './entry';

export * from './entry';
export * from './logic';

export const PIXEL_ART_PALETTE_SWAPPER_TOOL: ToolDefinition = {
  entry: pixelArtPaletteSwapper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
