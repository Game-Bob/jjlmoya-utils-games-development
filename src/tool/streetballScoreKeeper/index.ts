import { streetballScoreKeeper } from './entry';
export * from './entry';

export const STREETBALL_SCOREKEEPER_TOOL = {
  entry: streetballScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
