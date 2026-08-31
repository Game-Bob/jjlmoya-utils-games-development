import type { ToolDefinition } from '../../types';
import { gamePixelPerUnitPlanner } from './entry';

export * from './entry';

export const GAME_PIXEL_PER_UNIT_PLANNER_TOOL: ToolDefinition = {
  entry: gamePixelPerUnitPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
