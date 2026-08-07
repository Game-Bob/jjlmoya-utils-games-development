import type { ToolDefinition } from '../../types';
import { spriteSheetPacker } from './entry';

export * from './entry';

export const SPRITE_SHEET_PACKER_TOOL: ToolDefinition = {
  entry: spriteSheetPacker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
