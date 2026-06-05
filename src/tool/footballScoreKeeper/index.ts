import { footballScoreKeeper } from './entry';
export * from './entry';

export const FOOTBALL_SCORE_KEEPER_TOOL = {
  entry: footballScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
