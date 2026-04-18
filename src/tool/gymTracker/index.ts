import { gymTracker } from './entry';
export * from './entry';
export const GYM_TRACKER_TOOL: ToolDefinition = {
  entry: gymTracker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
