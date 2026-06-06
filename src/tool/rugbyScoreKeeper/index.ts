import type { ToolDefinition } from '../../types';
import { rugbyScoreKeeper } from './entry';
export * from './entry';

export const RUGBY_SCOREKEEPER_TOOL: ToolDefinition = {
  entry: rugbyScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
