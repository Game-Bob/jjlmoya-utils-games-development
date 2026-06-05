import { pingPongScoreKeeper } from './entry';
export * from './entry';

export const PING_PONG_SCORE_KEEPER_TOOL = {
  entry: pingPongScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
