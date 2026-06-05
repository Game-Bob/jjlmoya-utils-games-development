import { dartsScoreKeeper } from './entry';
export * from './entry';

export const DARTS_SCORE_KEEPER_TOOL = {
  entry: dartsScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
