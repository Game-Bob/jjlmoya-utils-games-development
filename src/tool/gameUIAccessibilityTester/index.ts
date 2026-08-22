import type { ToolDefinition } from '../../types';
import { gameUiAccessibilityTester } from './entry';

export * from './entry';

export const GAME_UI_ACCESSIBILITY_TESTER_TOOL: ToolDefinition = {
  entry: gameUiAccessibilityTester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
