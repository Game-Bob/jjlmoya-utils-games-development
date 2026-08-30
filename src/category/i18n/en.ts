import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'game-development',
  title: 'Game Development Utilities',
  description: 'Practical browser tools for indie game creators, from store artwork preparation to production handoffs.',
  seo: [
    { type: 'title', text: 'Tools for the craft of game development', level: 2 },
    { type: 'paragraph', html: 'Game development is a chain of small decisions: a composition must survive several storefront formats, an icon must remain readable at a glance and a production task must be easy to repeat. This category collects focused utilities for people who build, publish and promote games. Each tool is designed to turn a narrow but frustrating workflow into a clear browser interaction.' },
    { type: 'title', text: 'Made for independent creators', level: 2 },
    { type: 'paragraph', html: 'Indie teams often move between art software, publishing dashboards and review folders without a dedicated production department. A useful utility should shorten that handoff, expose the important decisions and keep the creator in control of the source files.' },
    { type: 'list', items: ['Focused workflows with visible outputs', 'Local browser processing where practical', 'Clear dimensions and export states', 'Guidance that complements official platform documentation'] },
    { type: 'tip', html: 'Use these tools as a preflight layer. Keep your source project files, compare final exports with the platform owner\'s current requirements and ask a teammate to review the smallest output.' },
  ],
};
