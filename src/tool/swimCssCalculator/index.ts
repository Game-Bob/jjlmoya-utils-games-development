import { swimCssCalculator } from './entry';
export * from './entry';

export const SWIM_CSS_CALCULATOR_TOOL = {
  entry: swimCssCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
