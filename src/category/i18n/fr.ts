import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'categorie-template',
  title: 'Catégorie Template',
  description: 'Description de la catégorie.',
  seo: [
    {
      type: 'summary',
      title: 'Résumé',
      items: ['Point 1', 'Point 2', 'Point 3'],
    },
    {
      type: 'title',
      text: 'Titre de section',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Contenu SEO de la catégorie.',
    },
  ],
};

