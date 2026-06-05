import { basketScoreKeeper } from './entry';
export * from './entry';

export const BASKET_SCORE_KEEPER_TOOL = {
  entry: basketScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

