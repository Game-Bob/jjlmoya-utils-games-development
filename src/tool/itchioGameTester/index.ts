import type { ToolDefinition } from '../../types';
import { itchioGameTester } from './entry';

export * from './entry';

export const ITCHIO_GAME_TESTER_TOOL: ToolDefinition = {
  entry: itchioGameTester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
