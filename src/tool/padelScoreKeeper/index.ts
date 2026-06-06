import { padelScoreKeeper } from './entry';
export * from './entry';

export const PADEL_SCOREKEEPER_TOOL = {
  entry: padelScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
