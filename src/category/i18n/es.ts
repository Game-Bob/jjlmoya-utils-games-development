import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'desarrollo-de-videojuegos',
  title: 'Utilidades para desarrollo de videojuegos',
  description: 'Herramientas de navegador para creadores indie, desde preparar arte para tiendas hasta organizar entregas de producción.',
  seo: [
    { type: 'title', text: 'Herramientas para el oficio de crear videojuegos', level: 2 },
    { type: 'paragraph', html: 'Crear un videojuego está formado por pequeñas decisiones: una composición debe resistir varios formatos de tienda, un icono debe leerse de un vistazo y una tarea de producción debe poder repetirse. Esta categoría reúne utilidades enfocadas para quienes diseñan, publican y presentan juegos. Cada herramienta convierte un flujo estrecho pero frustrante en una interacción clara dentro del navegador.' },
    { type: 'title', text: 'Pensadas para creadores independientes', level: 2 },
    { type: 'paragraph', html: 'Los equipos indie suelen alternar entre programas de arte, paneles de publicación y carpetas de revisión sin contar con un departamento de producción. Una buena utilidad acorta esa entrega, hace visibles las decisiones importantes y mantiene al creador al mando de sus archivos fuente.' },
    { type: 'list', items: ['Flujos concretos con resultados visibles', 'Procesamiento local en el navegador cuando es posible', 'Dimensiones y estados de exportación claros', 'Guías que complementan la documentación oficial'] },
    { type: 'tip', html: 'Usa estas herramientas como una capa de previsualización. Conserva los archivos fuente, compara la exportación con los requisitos actuales de cada plataforma y revisa la salida más pequeña.' },
  ],
};
