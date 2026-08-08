import type { ToolDefinition } from '../../types';
import { retroSfxGenerator } from './entry';

export * from './entry';

export const RETRO_SFX_GENERATOR_TOOL: ToolDefinition = {
  entry: retroSfxGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
