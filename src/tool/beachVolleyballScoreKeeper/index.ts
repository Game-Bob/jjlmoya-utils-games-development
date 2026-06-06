import { beachVolleyballScoreKeeper } from './entry';
export * from './entry';

export const BEACH_VOLLEYBALL_SCOREKEEPER_TOOL = {
  entry: beachVolleyballScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
