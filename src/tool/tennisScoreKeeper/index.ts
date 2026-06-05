import { tennisScoreKeeper } from './entry';
export * from './entry';

export const TENNIS_SCORE_KEEPER_TOOL = {
  entry: tennisScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
