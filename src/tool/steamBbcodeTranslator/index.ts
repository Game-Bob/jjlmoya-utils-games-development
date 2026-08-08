import type { ToolDefinition } from '../../types';
import { steamBbcodeTranslator } from './entry';

export * from './entry';
export * from './logic';

export const STEAM_BBCODE_TRANSLATOR_TOOL: ToolDefinition = {
  entry: steamBbcodeTranslator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
