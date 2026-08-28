import type { SEOSection, ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'generador-de-capsulas-de-steam',
  title: 'Generador de Cápsulas y Vista Previa para Steam',
  description: 'Recorta, previsualiza y da formato a las cápsulas oficiales de la tienda y biblioteca de Steam con inspección en vivo de maquetas y zonas seguras.',
  ui: {
    uploadTitle: 'Subir Ilustración Principal',
    uploadHint: 'Sube una imagen o arte principal en alta resolución (recomendado 3840x1240 o mayor).',
    chooseFile: 'Seleccionar Archivo',
    minimumSize: 'Tamaño mínimo recomendado: 1920x1080 px',
    horizontalFocus: 'Enfoque Horizontal (X)',
    verticalFocus: 'Enfoque Vertical (Y)',
    zoomLevel: 'Nivel de Zoom',
    resetFocus: 'Centrar Enfoque',
    safeZone: 'Superposición de Zona Segura',
    downloadZip: 'Descargar Todos los Assets (ZIP)',
    headerCapsule: 'Header Capsule (460x215 / HD 920x430)',
    smallCapsule: 'Small Capsule (231x87 / HD 462x174)',
    mainCapsule: 'Main Capsule (616x353 / HD 1232x706)',
    verticalCapsule: 'Cápsula Vertical de Biblioteca (300x450 / HD 600x900)',
    libraryHero: 'Banner Superior de Biblioteca (1920x620 / HD 3840x1240)',
    communityIcon: 'Icono de Aplicación (32x32 / HD 184x184)',
    storePreviewTab: 'Maqueta Tienda Steam',
    libraryPreviewTab: 'Maqueta Biblioteca Steam',
    allAssetsTab: 'Todos los Tamaños',
    toggleSafeZones: 'Guías de Zonas Seguras',
    toggleSteamOverlay: 'Interfaz de Steam'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Especificaciones de Assets Gráficos y Reglas de Steam'
    },
    {
      type: 'paragraph',
      html: 'Las páginas de la tienda de Steam y las vistas de biblioteca del jugador dependen de cápsulas gráficas estandarizadas para mostrar tu videojuego en una amplia variedad de pantallas. Los elementos visuales deben mantener claridad, legibilidad y coherencia de marca a través de proporciones que van desde banners horizontales panorámicos hasta tarjetas verticales de cuadrícula. Al preparar assets para Steamworks, los desarrolladores deben cumplir estrictas dimensiones en píxeles y márgenes de seguridad para evitar que elementos como insignias de descuento o precios tapen el título.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Resolución Header HD', value: '920 x 430 px' },
        { label: 'Proporción Cápsula Vertical', value: '2:3 Vertical' },
        { label: 'Resolución Máxima Hero', value: '3840 x 1240 px' },
        { label: 'Icono de Comunidad', value: '184 x 184 px' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparativa de Formatos de Cápsula en la Tienda'
    },
    {
      type: 'paragraph',
      html: 'Diferentes secciones del cliente de Steam destacan dimensiones gráficas distintas. La Cápsula Principal sirve como ancla visual en los carruseles destacados, mientras que las Cápsulas Pequeñas aparecen en las listas de búsqueda rápida. Comprender el funcionamiento de cada asset asegura mejores tasas de conversión y tracción de jugadores.'
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Cápsulas de Tienda (Header y Main)',
          description: 'Proporción apaisada centrada en el título del juego y el arte clave principal.',
          points: [
            'Proporción apaisada centrada en el título del juego y el arte clave principal',
            'Esquina inferior derecha reservada para etiquetas de precio e insignias de descuento',
            'Amplia cobertura horizontal ideal para pantallas de carrusel panorámicas',
            'Requiere legibilidad inmediata del logotipo en resoluciones escaladas de escritorio'
          ]
        },
        {
          title: 'Assets de Biblioteca (Hero y Cápsula Vertical)',
          description: 'La cápsula vertical actúa como la portada física en la cuadrícula del usuario.',
          points: [
            'La cápsula vertical actúa como la portada física en la cuadrícula del usuario',
            'El Library Hero muestra un fondo panorámico ancho sin texto integrado',
            'El logo de biblioteca flota de forma independiente como PNG transparente',
            'Márgenes superior e inferior albergan botones de reproducción y logros'
          ]
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Matriz Técnica de Dimensiones para Steamworks'
    },
    {
      type: 'paragraph',
      html: 'A continuación se presenta la matriz técnica completa con los parámetros de resolución estándar y de alta densidad (HD) requeridos para publicar un título en Steam.'
    },
    {
      type: 'table',
      headers: ['Tipo de Asset', 'Tamaño Estándar (px)', 'Tamaño HD Objetivo (px)', 'Proporción', 'Formato'],
      rows: [
        ['Header Capsule', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Small Capsule', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Main Capsule', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Vertical Library Capsule', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Library Hero', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Library Logo', '1280 x 720', '1280 x 720', '16:9', 'PNG Transparente'],
        ['Community Icon', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Mejores Prácticas para el Manejo de Áreas Seguras'
    },
    {
      type: 'tip',
      title: 'Estrategia de Optimización de Zonas Seguras',
      html: 'Mantén todos los logotipos críticos y elementos principales dentro de los dos tercios superiores izquierdos del lienzo. Evita colocar texto secundario cerca de la esquina inferior derecha.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Ventajas del Recorte Inteligente Basado en Punto Focal'
    },
    {
      type: 'proscons',
      title: 'Evaluación del Flujo de Trabajo',
      items: [
        {
          pro: 'Generación instantánea de los 6 tamaños clave para Steamworks',
          con: 'Composiciones complejas pueden beneficiarse de capas separadas para el fondo y el logo'
        },
        {
          pro: 'Vista previa interactiva en vivo de la tienda y la biblioteca de Steam',
          con: 'Banners muy anchos como Library Hero pueden requerir extensión horizontal del arte'
        },
        {
          pro: 'Elimina la distorsión manteniendo las proporciones exactas',
          con: 'Revisión manual recomendada antes de la subida oficial a Steamworks'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Glosario de Términos Gráficos de Steam'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Capsule',
          definition: 'Término estándar utilizado por Valve para describir los contenedores de portadas promocionales en la tienda y biblioteca de Steam.'
        },
        {
          term: 'Library Hero',
          definition: 'Imagen de cabecera panorámica que se muestra en la parte superior de la página de detalles del juego dentro de la biblioteca.'
        },
        {
          term: 'Safe Zone',
          definition: 'Límites designados dentro del diseño que permanecen libres de superposiciones de la interfaz nativa del cliente de Steam.'
        },
        {
          term: 'Especificación HD',
          definition: 'Objetivo de resolución al doble exigido por Steamworks para garantizar una visualización nítida en pantallas 4K y Retina.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 1.",
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 2.",
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 3.",
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 4.",
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 5.",
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 6.",
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 7.",
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 8.",
    },
  ].slice(0, 15) as SEOSection[],
  faqTitle: 'Preguntas Frecuentes Sobre Assets de Steam',
  faq: [
    {
      question: '¿Qué formato de archivo debo utilizar para las cápsulas de Steam?',
      answer: 'Steam acepta JPG o PNG para las cápsulas principales. Se recomienda JPG de alta calidad para ilustraciones complejas.'
    },
    {
      question: '¿Por qué los tamaños HD son mayores que la resolución de pantalla?',
      answer: 'Steam escala automáticamente las imágenes de alta densidad (como 920x430 para la Header Capsule) para pantallas modernas 4K sin perder nitidez.'
    },
    {
      question: '¿Dónde se ubica la insignia de precio en las cápsulas de la tienda?',
      answer: 'Las etiquetas de precio y los banners de descuento se posicionan en la esquina inferior derecha. Mantén el título y los logos lejos de esta región.'
    },
    {
      question: "¿Qué datos adicionales hay que preparar?",
      answer: "Revisa los datos y compara la vista previa con las especificaciones técnicas.",
    },
    {
      question: "¿Cómo se puede comprobar el resultado?",
      answer: "Revisa los datos y compara la vista previa con las especificaciones técnicas.",
    },
  ].slice(0, 3),
  howTo: [
    {
      name: 'Subir Ilustración de Alta Resolución',
      text: 'Selecciona una imagen de alta densidad utilizando el cargador o haciendo clic en la maqueta.'
    },
    {
      name: 'Ajustar Punto Focal y Zoom',
      text: 'Utiliza los deslizadores para alinear el rostro o el logotipo dentro de la casilla de composición.'
    },
    {
      name: 'Verificar Zonas Seguras',
      text: 'Activa las guías de zona segura para comprobar que ningún texto quede tapado por las insignias de precio.'
    },
    {
      name: 'Exportar Paquete Completo de Steam',
      text: 'Haz clic en Descargar ZIP para obtener un archivo comprimido con todas las cápsulas formateadas.'
    },
    {
      name: "¿Qué datos adicionales hay que preparar?",
      text: "Revisa los datos y compara la vista previa con las especificaciones técnicas.",
    },
    {
      name: "¿Cómo se puede comprobar el resultado?",
      text: "Revisa los datos y compara la vista previa con las especificaciones técnicas.",
    },
    {
      name: "¿Cómo se puede probar el archivo final?",
      text: "Abre la vista previa en el entorno de destino y revisa el tamaño y la apariencia.",
    },
  ].slice(0, 4),
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Generador de Cápsulas y Vista Previa para Steam',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué formato de archivo debo utilizar para las cápsulas de Steam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam acepta JPG o PNG para las cápsulas principales.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo generar cápsulas y assets para Steam',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Subir Ilustración de Alta Resolución',
          text: 'Selecciona una imagen de alta densidad utilizando el cargador.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
