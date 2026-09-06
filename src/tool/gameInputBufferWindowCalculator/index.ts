import type { ToolDefinition } from '../../types';
import { gameInputBufferWindowCalculator } from './entry';

export * from './entry';

export const GAME_INPUT_BUFFER_WINDOW_CALCULATOR_TOOL: ToolDefinition = {
  entry: gameInputBufferWindowCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
