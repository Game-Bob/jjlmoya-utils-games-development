import type { ToolDefinition } from '../../types';
import { gameDeltaTimeFixedTimestepLab } from './entry';

export * from './entry';

export const GAME_DELTA_TIME_FIXED_TIMESTEP_LAB_TOOL: ToolDefinition = {
  entry: gameDeltaTimeFixedTimestepLab,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
