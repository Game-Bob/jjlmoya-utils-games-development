import type { ToolDefinition } from '../../types';
import { audioLoopPointFinder } from './entry';

export * from './entry';

export const AUDIO_LOOP_POINT_FINDER_TOOL: ToolDefinition = {
  entry: audioLoopPointFinder,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
