import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'categoria-template',
  title: 'Categoría Template',
  description: 'Descripción de la categoría.',
  seo: [
    {
      type: 'summary',
      title: 'Resumen',
      items: ['Punto 1', 'Punto 2', 'Punto 3'],
    },
    {
      type: 'title',
      text: 'Título de sección',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Contenido SEO de la categoría.',
    },
  ],
};

