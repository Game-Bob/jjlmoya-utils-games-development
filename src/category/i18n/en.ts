import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'template-category',
  title: 'Template Category',
  description: 'Category description.',
  seo: [
    {
      type: 'summary',
      title: 'Summary',
      items: ['Point 1', 'Point 2', 'Point 3'],
    },
    {
      type: 'title',
      text: 'Section title',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Category SEO content.',
    },
  ],
};

