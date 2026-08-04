import { penaltyShootout } from './entry';
export * from './entry';

export const PENALTY_SHOOTOUT_TOOL = {
  entry: penaltyShootout,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
