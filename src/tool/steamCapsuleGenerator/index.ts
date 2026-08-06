import type { ToolDefinition } from '../../types';
import { steamCapsuleGenerator } from './entry';
export * from './entry';
export const STEAM_CAPSULE_GENERATOR_TOOL: ToolDefinition = {
  entry: steamCapsuleGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
