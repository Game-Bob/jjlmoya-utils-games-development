import type { ToolDefinition } from '../../types';
import { saveFileEditor } from './entry';

export * from './entry';

export const SAVE_FILE_EDITOR_TOOL: ToolDefinition = {
  entry: saveFileEditor,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
