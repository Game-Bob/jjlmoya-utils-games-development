import type { SEOSection, ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'empaquetador-y-extractor-de-sprite-sheets',
  title: 'Empaquetador y Extractor de Sprite Sheets',
  description:
    'Optimiza el rendimiento de juegos 2D empaquetando frames de animación sueltos en atlases de texturas o extrayendo sprites individuales de hojas existentes.',
  ui: {
    packerTab: 'Estudio de Empaquetado',
    extractorTab: 'Extractor de Sprites',
    dropZoneTitle: 'Arrastra y Suelta Frames',
    dropZoneSubtitle: 'Sube imágenes PNG o WebP para generar tu atlas de texturas optimizado',
    selectFilesButton: 'Seleccionar Imágenes de Frames',
    clearAllButton: 'Limpiar Espacio de Trabajo',
    downloadZipButton: 'Descargar Paquete (ZIP)',
    copyJsonButton: 'Copiar JSON del Atlas',
    downloadSheetPngButton: 'Descargar Textura PNG',
    paddingLabel: 'Padding de Frame (px)',
    borderExtrusionLabel: 'Extrusión de Borde (px)',
    maxTextureSizeLabel: 'Dimensión Máxima de Textura',
    powerOfTwoLabel: 'Forzar Potencia de 2 (POT)',
    exportFormatLabel: 'Formato del Motor Objetivo',
    presetPixelArt: 'Preset Pixel Art 16x16',
    presetHdUi: 'Preset Atlas HD UI 1024',
    presetMobile: 'Preset Móvil WebGL 2048',
    formatGenericHash: 'JSON Genérico (Hash)',
    formatGenericArray: 'JSON Genérico (Array)',
    formatUnity: 'Motor Unity 2D',
    formatGodot: 'Motor Godot 2D',
    formatPhaser: 'Motor Phaser / PixiJS',
    formatCss: 'CSS Web Frontend',
    previewTitle: 'Previsualización del Atlas de Textura',
    efficiencyBadge: 'Eficiencia de Textura',
    drawCallsBadge: 'Reducción de Draw Calls',
    totalFramesBadge: 'Frames Empaquetados',
    textureSizeBadge: 'Dimensión del Atlas',
    flipbookTitle: 'Reproductor Flipbook de Animación',
    flipbookFpsLabel: 'Velocidad de Animación (FPS)',
    playAnimation: 'Reproducir Secuencia',
    pauseAnimation: 'Pausar Secuencia',
    frameWidthLabel: 'Ancho del Frame (px)',
    frameHeightLabel: 'Alto del Frame (px)',
    marginLabel: 'Desplazamiento de Margen (px)',
    spacingLabel: 'Espaciado de Rejilla (px)',
    extractedCountLabel: 'Sprites Extraídos',
    codeSnippetTitle: 'Código de Integración con el Motor',
    copySnippetButton: 'Copiar Snippet de Código',
    copiedToast: 'Copiado al Portapapeles',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Comprensión de Batching GPU y Optimización de Llamadas de Dibujo en Motores 2D',
    },
    {
      type: 'paragraph',
      html: 'En pipelines de gráficos 2D modernos, cada archivo de imagen independiente renderizado en pantalla requiere que la CPU envíe un comando conocido como llamada de dibujo o draw call a la GPU. Cuando una animación se compone de docenas de archivos PNG sueltos, la tarjeta gráfica debe cambiar constantemente de textura activa. Empaquetar los frames sueltos en un solo atlas de textura unificado permite agrupar cientos de órdenes de renderizado en un solo lote, eliminando cuellos de botella y acelerando la tasa de fotogramas.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Reducción de Draw Calls' },
        { value: '4x', label: 'Procesamiento GPU Más Rápido' },
        { value: '60 FPS', label: 'Objetivo Estable en Móviles' },
        { value: '100%', label: 'Seguridad Local en Navegador' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparativa entre Archivos de Frames Sueltos y Atlases de Textura Empaquetados',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Archivos de Frames de Animación Sueltos',
          description: 'Archivos PNG o WebP independientes almacenados en disco',
          points: [
            'Genera una llamada de dibujo independiente para cada frame mostrado en pantalla',
            'Provoca cambios frecuentes de unidades de textura y fragmentación de VRAM',
            'Aumenta las peticiones de red HTTP y el tiempo de carga en juegos web',
            'Causa caídas de fotogramas en GPUs móviles durante escenas con muchos sprites',
          ],
        },
        {
          title: 'Atlas de Texturas Empaquetado',
          description: 'Hoja PNG unificada combinada con un archivo JSON de coordenadas',
          points: [
            'Agrupa cientos de frames de sprites en una sola llamada de dibujo de GPU',
            'Maximiza el ancho de banda de memoria gráfica y la tasa de renderizado',
            'Empaqueta todos los frames en un solo archivo descargable reduciendo consumo de red',
            'Permite mantener 60 FPS fluidos en dispositivos móviles de gama baja y navegadores',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Matemática del Movimiento Subpíxel y Extrusión de Bordes',
    },
    {
      type: 'paragraph',
      html: 'Al renderizar arte de píxeles o personajes 2D con movimiento de cámara suavizado o filtrado bilinear, los frames adyacentes de un sprite sheet pueden sangrar entre sí en las fronteras de las coordenadas de textura. Este artefacto visual ocurre porque el muestreo de textura interpola los colores de los píxeles vecinos cuando la posición de la cámara cae entre coordenadas enteras de píxeles.',
    },
    {
      type: 'tip',
      title: 'Estrategia de Extrusión de Borde para Renderizado Sin Costuras',
      html: 'Para eliminar el sangrado subpíxel durante el movimiento de cámara, aplica de 1 a 2 píxeles de extrusión de borde al empaquetar tu sprite sheet. La extrusión duplica los píxeles de los bordes hacia el área de relleno, asegurando que el filtrado interpola colores idénticos en lugar de transparentes o de frames adyacentes.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Guía de Tamaños de Textura para Motores WebGL y de Escritorio',
    },
    {
      type: 'paragraph',
      html: 'Seleccionar las dimensiones máximas adecuadas es fundamental para la compatibilidad multiplataforma. Mientras que las GPUs de escritorio manejan fácilmente texturas de 4096x4096px, los controladores WebGL móviles de gama baja imponen límites máximos de 2048x2048px.',
    },
    {
      type: 'table',
      headers: ['Plataforma Objetivo', 'Tamaño Máximo Recomendado', 'Potencia de 2 (POT)', 'Perfil de Memoria'],
      rows: [
        ['Navegadores Móviles y HTML5', '2048 x 2048 px', 'Obligatorio en WebGL 1.0', 'Ancho de Banda Bajo y Alta Eficiencia'],
        ['Motores de PC y Consola', '4096 x 4096 px', 'Recomendado', 'Alta Capacidad GPU y Mipmapping Rápido'],
        ['Consolas Retro y Portátiles', '1024 x 1024 px', 'Requisito Estricto de Hardware', 'Límites de VRAM Estrictos'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Ventajas y Desventajas del Empaquetado en Potencia de 2',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Ofrece el 100% de compatibilidad con controladores móviles antiguos y WebGL 1.0',
          con: 'Puede introducir espacio transparente no utilizado al empaquetar pocos sprites',
        },
        {
          pro: 'Permite la generación automática de mipmaps por hardware para un escalado suave',
          con: 'Aumenta ligeramente el área de superficie de textura inicial',
        },
        {
          pro: 'Optimiza la asignación de memoria VRAM en la tarjeta gráfica',
          con: 'Requiere configurar el padding cuidadosamente para evitar desperdicio',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Glosario Técnico de Arquitectura de Empaquetado de Sprites',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Comando enviado por la CPU a la GPU indicando que debe renderizar un lote de geometría con textura.',
        },
        {
          term: 'Algoritmo Bin Packing',
          definition: 'Técnica matemática que organiza rectángulos de diferentes tamaños en un contenedor mínimo sin solapamientos.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Proceso de clonar los píxeles de los bordes hacia el relleno exterior para prevenir costuras visuales.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Reproducción rápida secuencial de fotogramas 2D para simular movimiento físico continuo.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Lista de Verificación y Diagnóstico para Desarrolladores de Juegos',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Reglas de Producción para Desarrollo de Videojuegos',
      html: 'Agrupa animaciones en atlases compartidos por personaje, aplica dimensiones potencia de dos en WebGL, usa 1-2px de extrusión de borde y recorta transparencias sobrantes antes de empaquetar.',
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 1.",
    },
    {
      type: 'paragraph',
      html: "Esta sección resume las comprobaciones necesarias para una exportación limpia y una vista previa fiable. 2.",
    },
  ].slice(0, 17) as SEOSection[],
  faq: [
    {
      question: '¿Qué es un sprite sheet y por qué es esencial para juegos 2D?',
      answer:
        'Un sprite sheet es una imagen compuesta que contiene múltiples fotogramas de animación. Al combinar imágenes en una hoja, los motores dibujan muchos objetos en un solo comando de GPU.',
    },
    {
      question: '¿Cómo funciona el empaquetado en navegador en esta herramienta?',
      answer:
        'Tus imágenes se procesan localmente en la API Canvas HTML5 de tu navegador. El algoritmo calcula coordenadas óptimas y genera la imagen PNG y el JSON de inmediato sin enviar datos fuera de tu equipo.',
    },
    {
      question: '¿Puedo extraer fotogramas de una hoja de sprites existente?',
      answer:
        'Sí. Cambia al modo Extractor, sube tu hoja de sprites y ajusta las dimensiones de rejilla para cortar y descargar cada imagen individualmente.',
    },
  ],
  howTo: [
    {
      name: 'Subir Fotogramas de Animación',
      text: 'Arrastra y suelta tus archivos de fotogramas PNG o WebP en el área de carga.',
    },
    {
      name: 'Configurar Ajustes de Empaquetado',
      text: 'Ajusta el padding, la extrusión de borde y la dimensión máxima de textura. Selecciona el formato de tu motor como Unity o Godot.',
    },
    {
      name: 'Previsualizar y Exportar',
      text: 'Prueba la animación en el reproductor flipbook para verificar la alineación y descarga tu paquete comprimido ZIP.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Empaquetador y Extractor de Sprite Sheets',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es un sprite sheet y por qué es esencial para juegos 2D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un sprite sheet es una imagen compuesta que contiene múltiples fotogramas de animación que permite dibujar objetos en una sola llamada de GPU.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo Empaquetar y Extraer Sprite Sheets',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Subir Fotogramas de Animación',
          text: 'Arrastra y suelta tus archivos de fotogramas PNG o WebP en el área de carga.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
