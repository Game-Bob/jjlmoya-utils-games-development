import { snookerScoreKeeper } from './entry';
export * from './entry';

export const SNOOKER_SCOREKEEPER_TOOL = {
  entry: snookerScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
