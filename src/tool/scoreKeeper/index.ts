export * from './entry';
export const SCORE_KEEPER_TOOL: ToolDefinition = {
  entry: scoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
