import type { ToolDefinition } from '../../types';
import { fixerEditor } from './entry';

export * from './entry';

export const FIXER_EDITOR_TOOL: ToolDefinition = {
  entry: fixerEditor,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
