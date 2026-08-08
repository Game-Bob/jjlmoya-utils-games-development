import type { ToolDefinition } from '../../types';
import { localizationSanitizer } from './entry';

export * from './entry';
export * from './logic';

export const LOCALIZATION_SANITIZER_TOOL: ToolDefinition = {
  entry: localizationSanitizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
