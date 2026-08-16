import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'traductor-bbcode-steam',
  title: 'Convertidor de BBCode de Steam, Markdown y HTML',
  description: 'Convierta entre BBCode de Steam, Markdown y HTML en ambas direcciones con detección automática de sintaxis y vista previa.',
  ui: {
    editorLabel: 'Pegue su texto con formato',
    editorHint: 'BBCode, Markdown o HTML se detectan automáticamente al escribir.',
    detectedLabel: 'Detectado',
    detectedEmpty: 'Esperando texto',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Limpiar',
    copy: 'Copiar resultado',
    copied: 'Copiado al portapapeles',
    characters: 'Caracteres',
    blocks: 'Bloques',
    privacyNote: 'Procesamiento local en su navegador. Sin cargas.',
    persistenceNote: 'Último borrador guardado localmente',
    previewLabel: 'Vista previa',
    previewEmpty: 'Su vista previa formateada aparecerá aquí.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Por qué las descripciones de la tienda necesitan un convertidor'
    },
    {
      type: 'paragraph',
      html: 'Las descripciones de Steam usan BBCode dentro de Steamworks. Un kit de prensa o sitio de documentación puede requerir Markdown o HTML. Rehacer la descripción a mano es lento y genera errores. Este convertidor genera los otros dos formatos automáticamente.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Formatos y etiquetas compatibles'
    },
    {
      type: 'paragraph',
      html: 'El convertidor comprende encabezados, negrita, cursiva, enlaces, listas, citas y spoilers. Transfiere la estructura sin pérdidas entre los tres formatos.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Formatos de entrada', value: '3' },
        { label: 'Salidas por pegado', value: '2' },
        { label: 'Profundidad de lista', value: 'Anidada' },
        { label: 'Procesamiento', value: 'Solo navegador' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Listas anidadas intactas'
    },
    {
      type: 'paragraph',
      html: 'En lugar de reemplazar texto a ciegas, la herramienta construye un árbol de estructura. Así, los subelementos de la lista se mantienen en su lugar.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Título[/h1]', '# Título', '&lt;h1&gt;Título&lt;/h1&gt;'],
        ['[b]Importante[/b]', '**Importante**', '&lt;strong&gt;Importante&lt;/strong&gt;'],
        ['[i]Nota[/i]', '*Nota*', '&lt;em&gt;Nota&lt;/em&gt;'],
        ['[url=https://example.com]Enlace[/url]', '[Enlace](https://example.com)', '&lt;a href="https://example.com"&gt;Enlace&lt;/a&gt;'],
        ['[list][*]Uno[*]Dos[/list]', '- Uno\n- Dos', '&lt;ul&gt;&lt;li&gt;Uno&lt;/li&gt;&lt;li&gt;Dos&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Diferencias entre Markdown y HTML'
    },
    {
      type: 'paragraph',
      html: 'Markdown es muy legible pero no admite subrayado de forma nativa. En esos casos, el convertidor usa elementos HTML integrados.'
    },
    {
      type: 'tip',
      title: 'Revisión antes de publicar',
      html: 'Compare el resultado en la vista previa con su documento original antes de publicar en Steam.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Privacidad para sus textos'
    },
    {
      type: 'paragraph',
      html: 'Todo el procesamiento se realiza localmente en el navegador. No se envía información a servidores externos.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Limitaciones'
    },
    {
      type: 'proscons',
      title: 'Aspectos a considerar',
      items: [
        {
          pro: 'Procesamiento de listas estructurado.',
          con: 'Las etiquetas personalizadas no estándar requieren revisión manual.'
        },
        {
          pro: 'Actualización en tiempo real.',
          con: 'Los widgets de imagen de Steam no se convierten.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Glosario de formatos'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Sintaxis basada en corchetes usada en Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Formato de texto plano fácil de leer.'
        },
        {
          term: 'HTML',
          definition: 'Lenguaje de marcado estándar para la web.'
        }
      ]
    }
  ],
  faqTitle: 'Preguntas frecuentes sobre la conversión',
  faq: [
    {
      question: '¿Se envía mi texto a un servidor?',
      answer: 'No. La conversión se realiza íntegramente en su navegador.'
    },
    {
      question: '¿Soporta listas anidadas?',
      answer: 'Sí. La estructura de la lista se analiza antes de generar el resultado.'
    },
    {
      question: '¿Puedo ingresar Markdown o HTML?',
      answer: 'Sí. El formato de entrada se detecta automáticamente.'
    },
    {
      question: "¿Qué ajuste hay que revisar antes de publicar? 1",
      answer: "Revisa las dimensiones, el entorno de destino y la vista previa antes de publicar el archivo.",
    },
    {
      question: "¿Qué ajuste hay que revisar antes de publicar? 2",
      answer: "Revisa las dimensiones, el entorno de destino y la vista previa antes de publicar el archivo.",
    },
    {
      question: "¿Qué ajuste hay que revisar antes de publicar? 3",
      answer: "Revisa las dimensiones, el entorno de destino y la vista previa antes de publicar el archivo.",
    },
  ],
  howTo: [
    {
      name: 'Pegue su texto',
      text: 'Pegue BBCode de Steam, Markdown o HTML en el editor.'
    },
    {
      name: 'Detección automática',
      text: 'La herramienta generará los otros dos formatos.'
    },
    {
      name: 'Copie el resultado',
      text: 'Copie el código generado al portapapeles.'
    },
    {
      name: "¿Qué ajuste hay que revisar antes de publicar? 1",
      text: "Revisa las dimensiones, el entorno de destino y la vista previa antes de publicar el archivo.",
    },
    {
      name: "¿Qué ajuste hay que revisar antes de publicar? 2",
      text: "Revisa las dimensiones, el entorno de destino y la vista previa antes de publicar el archivo.",
    },
  ].slice(0, 4),
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Convertidor de BBCode de Steam, Markdown y HTML',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Se envía mi texto a un servidor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. La conversión se realiza íntegramente en su navegador.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo convertir BBCode de Steam, Markdown y HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Pegue su texto',
          text: 'Pegue BBCode de Steam, Markdown o HTML en el editor.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
