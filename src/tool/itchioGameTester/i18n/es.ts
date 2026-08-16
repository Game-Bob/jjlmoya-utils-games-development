import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'probador-de-juegos-itchio',
  title: 'Inspector de Juegos Web para Itch.io y Optimizador de Resolución en Vivo',
  description: 'Sube archivos de exportación HTML5 o archivos ZIP para probar viewports en vivo, corregir scrollbars de relación de aspecto, inspeccionar builds de Godot y Unity WebGL, y generar configuraciones de embed para Itch.io.',
  ui: {
    dropzoneTitle: 'Arrastra y Suelta tu Build o Archivo ZIP',
    dropzoneHint: 'Suelta cualquier archivo .ZIP, carpeta exportada o archivos de build HTML5 en esta área para inspeccionarlos.',
    chooseFiles: 'Seleccionar Archivo o Carpeta',
    engineDetected: 'Motor Detectado',
    compatibilityScore: 'Puntuación de Compatibilidad con Itch.io',
    viewportWidth: 'Ancho del Viewport (px)',
    viewportHeight: 'Alto del Viewport (px)',
    presets: 'Presets de Resolución Rápidos',
    fitTest: 'Prueba de Diseño y Scrollbars en Vivo',
    copySettings: 'Copiar Configuración de Embed para Itch.io',
    copied: 'Copiado al Portapapeles',
    embedMode: 'Modo de Embed',
    scrollbars: 'Activar Scrollbars',
    noIssuesFound: 'Todas las comprobaciones pasaron correctamente. El paquete cumple al 100% los estándares de Itch.io.',
    filesInspected: 'Archivos Inspeccionados',
    resetViewport: 'Restablecer Viewport',
    autoScaleToggle: 'Escalar Viewport Automáticamente al Ancho de Pantalla',
    scaledNotice: 'El viewport supera el ancho de pantalla. Se aplicó un zoom artificial para que el canvas completo quepa en pantalla. Desactiva el auto-escalado para ver el diseño real roto.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Guía de Formato para Exportaciones HTML5 de Juegos en Itch.io'
    },
    {
      type: 'paragraph',
      html: 'Publicar juegos HTML5 y WebGL en Itch.io requiere configurar correctamente las dimensiones del viewport, la estructura de archivos y las cabeceras de seguridad cross-origin. Los juegos basados en navegador deben cargarse dentro de un iframe sin generar scrollbars ni recortes de canvas.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Relación de Aspecto Estándar', value: '16:9 Horizontal' },
        { label: 'Resolución Clásica Itch', value: '960 x 540 px' },
        { label: 'Archivo de Entrada Requerido', value: 'index.html en Raíz' },
        { label: 'Requisito Godot 4', value: 'Cabeceras COOP / COEP' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Requisitos de Exportación Web por Motor'
    },
    {
      type: 'paragraph',
      html: 'Distintos motores de juego generan paquetes únicos para la web. Conocer las restricciones específicas de cada motor ayuda a eliminar errores de carga antes de publicar.'
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Godot Engine (Exportación HTML5)',
          description: 'Genera index.html junto con binarios WebAssembly (.wasm) y el paquete de datos principal (.pck). Godot 4 requiere soporte SharedArrayBuffer activado en Itch.io.'
        },
        {
          title: 'Unity WebGL Build',
          description: 'Estructura el build en un directorio Build/ con archivos framework.js, data y wasm. El tamaño del canvas es fijo y requiere dimensiones explícitas del iframe para evitar scrollbars.'
        },
        {
          title: 'Phaser y Construct',
          description: 'Builds JavaScript ligeros con canvas HTML5 o renderizador WebGL. Ideales para escalado responsive de ventana completa y bajo consumo de memoria en móvil.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Errores Comunes al Empaquetar para Itch.io y Cómo Resolverlos'
    },
    {
      type: 'table',
      headers: ['Tipo de Error', 'Causa Raíz', 'Solución Recomendada'],
      rows: [
        ['index.html anidado', 'Comprimir la carpeta padre en lugar del contenido', 'Asegúrate de que index.html está directamente en la raíz del archivo.'],
        ['Error 404 por mayúsculas', 'Rutas de archivos con diferencias de mayúsculas/minúsculas', 'Mantén todas las extensiones y referencias en minúsculas para evitar errores en servidores Linux.'],
        ['Scrollbars en el canvas', 'Dimensiones del viewport menores que el canvas', 'Define las dimensiones del embed de Itch.io 20px más grandes que el canvas o elimina los márgenes de desbordamiento.'],
        ['Audio sin comprimir', 'Archivos WAV grandes en el paquete web', 'Comprime los efectos de sonido y música en formato OGG o MP3 para reducir el tiempo de descarga inicial.']
      ]
    },
    {
      type: 'tip',
      html: 'Al embeber un juego WebGL de 1280x720 en Itch.io, configura las dimensiones del viewport del embed exactamente a 1280x720 con "Embed in page" activado y "Click to launch" desactivado.'
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
  ].slice(0, 9),
  faq: [
    {
      question: 'Mi juego de Godot 4 muestra una pantalla negra en Itch.io. ¿Por qué sucede?',
      answer: 'Las exportaciones web de Godot 4 usan multi-hilo WebAssembly, que requiere soporte SharedArrayBuffer. En la página de edición de tu juego en Itch.io, activa "SharedArrayBuffer support" en las opciones del frame para habilitar las cabeceras COOP/COEP necesarias.'
    },
    {
      question: '¿Necesito comprimir mis archivos en ZIP antes de usar este inspector?',
      answer: 'No. Puedes subir un archivo ZIP o seleccionar directamente tus archivos exportados HTML5. El inspector lee los archivos directamente en la memoria del navegador.'
    },
    {
      question: "¿Qué ajuste hay que revisar antes de publicar? 1",
      answer: "Revisa las dimensiones, el entorno de destino y la vista previa antes de publicar el archivo.",
    },
  ].slice(0, 2),
  howTo: [
    {
      name: 'Subir Archivos del Juego o ZIP',
      text: 'Arrastra y suelta tu archivo ZIP de exportación HTML5 o selecciona el directorio de build que contiene index.html.'
    },
    {
      name: 'Revisar el Informe de Compatibilidad',
      text: 'Consulta el informe de auditoría automático para verificar la posición de index.html en la raíz, advertencias de mayúsculas y detección del motor.'
    },
    {
      name: 'Redimensionar el Viewport en Vivo',
      text: 'Usa los controles de resolución y los presets de relación de aspecto para probar el embed del iframe en vivo sin scrollbars.'
    },
    {
      name: 'Copiar Configuración para Itch.io',
      text: 'Haz clic en Copiar Configuración para obtener los valores exactos de ancho y alto del viewport listos para tu página de publicación en Itch.io.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Inspector de Juegos Web para Itch.io',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Mi juego de Godot 4 muestra una pantalla negra en Itch.io. ¿Por qué sucede?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las exportaciones web de Godot 4 usan multi-hilo WebAssembly, que requiere soporte SharedArrayBuffer. En la página de edición de tu juego en Itch.io, activa "SharedArrayBuffer support" en las opciones del frame para habilitar las cabeceras COOP/COEP necesarias.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Necesito comprimir mis archivos en ZIP antes de usar este inspector?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Puedes subir un archivo ZIP o seleccionar directamente tus archivos exportados HTML5. El inspector lee los archivos directamente en la memoria del navegador.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo auditar y probar el viewport de tu juego en Itch.io',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Subir Archivos del Juego o ZIP',
          text: 'Arrastra y suelta tu archivo ZIP de exportación HTML5 o selecciona el directorio de build que contiene index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Redimensionar el Viewport en Vivo',
          text: 'Usa los controles de resolución y los presets de relación de aspecto para probar el embed del iframe en vivo sin scrollbars.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
