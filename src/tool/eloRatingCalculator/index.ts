import type { ToolDefinition } from '../../types';
import { eloRatingCalculator } from './entry';
export * from './entry';
export const ELO_RATING_CALCULATOR_TOOL: ToolDefinition = {
  entry: eloRatingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
