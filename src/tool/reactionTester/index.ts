export * from './entry';
export const REACTION_TESTER_TOOL: ToolDefinition = {
  entry: reactionTester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
