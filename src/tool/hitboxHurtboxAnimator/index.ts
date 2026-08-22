import type { ToolDefinition } from '../../types';
import { hitboxHurtboxAnimator } from './entry';

export * from './entry';

export const HITBOX_HURTBOX_ANIMATOR_TOOL: ToolDefinition = {
  entry: hitboxHurtboxAnimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
