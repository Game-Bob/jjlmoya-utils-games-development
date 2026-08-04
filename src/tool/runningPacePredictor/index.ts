import { runningPacePredictor } from './entry';
export * from './entry';

export const RUNNING_PACE_PREDICTOR_TOOL = {
  entry: runningPacePredictor,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
