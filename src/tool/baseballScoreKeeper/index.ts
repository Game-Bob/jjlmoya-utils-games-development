import type { ToolDefinition } from '../../types';
import { baseballScoreKeeper } from './entry';
export * from './entry';

export const BASEBALL_SCOREKEEPER_TOOL: ToolDefinition = {
  entry: baseballScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
