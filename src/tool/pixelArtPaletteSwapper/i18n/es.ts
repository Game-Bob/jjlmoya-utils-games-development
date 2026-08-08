import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'cambiador-paleta-pixel-art',
  title: 'Cambiador de Paleta para Pixel Art',
  description: 'Reduce sprites y hojas de sprites a paletas clásicas de consola o a un conjunto personalizado de colores hexadecimales directamente en tu navegador.',
  ui: {
    uploadTitle: 'Arrastra un sprite o hoja de sprites',
    uploadHint: 'Los archivos PNG, JPEG o WebP se procesan en tu dispositivo',
    chooseImage: 'Elegir imagen',
    replaceImage: 'Reemplazar imagen',
    paletteTitle: 'Elegir paleta',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'Inspirada en NES',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Colores personalizados',
    customPaletteHint: 'Separa los valores hexadecimales con comas, espacios o saltos de línea.',
    applyCustomPalette: 'Aplicar paleta',
    resetCustomPalette: 'Restablecer',
    sourcePreview: 'Original',
    resultPreview: 'Resultado limitado',
    waitingForImage: 'Esperando una imagen',
    uploadToPreview: 'Sube una imagen para previsualizarla',
    resultEmpty: 'Tus versiones original y con paleta limitada aparecerán lado a lado.',
    downloadPng: 'Descargar PNG',
    downloadDisabled: 'Sube una imagen para habilitar la exportación.',
    colorCount: 'Colores de origen',
    mappedCount: 'Colores usados',
    imageSize: 'Tamaño de imagen',
    paletteCount: 'colores de paleta',
    preserveAlpha: 'Conservar transparencia',
    zoomLabel: 'Zoom',
    processing: 'Mapeando píxeles',
    invalidPalette: 'Añade al menos un color hexadecimal válido',
    invalidImage: 'Elige una imagen PNG, JPEG o WebP',
    readyStatus: 'Listo',
    dropActive: 'Suelta para cargar',
    mappedSummary: 'Se han mapeado {source} colores de origen a {mapped} colores de la paleta',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Convierte un Sprite a Todo Color en una Paleta Retro Deliberada',
    },
    {
      type: 'paragraph',
      html: 'Una paleta limitada es mucho más que una restricción técnica. Otorga al sprite un vocabulario de color coherente, ayuda a que los elementos de una escena encajen visualmente y evoca el carácter de una consola o plataforma clásica. Este cambiador de paletas para navegador te permite comparar la imagen original con una versión reducida mientras experimentas con paletas de Game Boy, inspiradas en NES, PICO-8, Commodore 64, DawnBringer 16 y listas personalizadas.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Cómo Funciona el Mapeo al Color Más Cercano',
    },
    {
      type: 'paragraph',
      html: 'La herramienta lee los canales rojo, verde y azul de cada píxel visible y compara ese color con cada color de la paleta seleccionada. Selecciona la entrada de la paleta con la distancia RGB al cuadrado más pequeña y escribe el color de reemplazo en un nuevo búfer de lienzo. El canal alfa se mantiene independiente para preservar la transparencia original y conservar la opacidad de los bordes suavemente cuando la opción Conservar transparencia está activa.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Limitación de paleta',
          description: 'Cada color de origen se reemplaza por la muestra disponible más cercana.',
          points: [
            'Rápido y predecible para sprites, iconos, baldosas e interfaces',
            'Conserva las dimensiones y posiciones de los píxeles originales',
            'Facilita la revisión de un presupuesto de color determinado',
          ],
        },
        {
          title: 'Cambio de paleta (Palette Swapping)',
          description: 'La misma imagen se puede remapear a otro conjunto de colores cuidadosamente elegido.',
          points: [
            'Útil para trajes alternativos, biomas y estados de daño',
            'Las listas hexadecimales personalizadas permiten adaptarse a tu dirección artística',
            'El PNG descargado queda listo para volver a importarse en tu editor',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Cómo Elegir una Paleta para Pixel Art',
    },
    {
      type: 'table',
      headers: ['Paleta', 'Colores', 'Uso recomendado', 'Aspectos a vigilar'],
      rows: [
        ['Game Boy', '4', 'Estilo monocromo portátil y estudios de volumen', 'El rango reducido puede fusionar materiales de tono similar'],
        ['Inspirada en NES', '16', 'Sprites estilo arcade, personajes y baldosas', 'Los colores muy brillantes pueden eclipsar detalles pequeños'],
        ['PICO-8', '16', 'Pixel art moderno con acentos saturados', 'Los tonos muy saturados requieren un contraste intencionado'],
        ['Commodore 64', '16', 'Escenas retro suaves y estética de ordenador', 'El bajo contraste se beneficia de siluetas bien definidas'],
        ['DawnBringer 16', '16', 'Paleta artesanal versátil para uso general', 'Las rampas de color siguen exigiendo una dirección de luz clara'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Flujo de Trabajo Práctico para Hojas de Sprites',
    },
    {
      type: 'paragraph',
      html: 'Comienza con la imagen de origen más grande que edites cómodamente y sube aquí el sprite o hoja exportada. Selecciona un preajuste para definir una dirección visual o pega tu propia lista de colores hexadecimales. Inspecciona ambos lienzos a mayor zoom para comprobar si se han perdido detalles en los rostros, contornos o luces clave. Si el resultado parece apagado o confuso, prueba una paleta con saltos de valor más marcados o añade un color de acento deliberado a la lista personalizada.',
    },
    {
      type: 'tip',
      title: 'Mantén la paleta intencionada',
      html: 'Una lista de colores más extensa no es automáticamente mejor. Comienza con cuatro a dieciseis colores, asigna una función a cada tono y reserva los brillos máximos para puntos de interés visual. El algoritmo del color más cercano preserva las posiciones de los píxeles, pero no puede decidir qué colores deben estructurar la jerarquía visual de tu sprite.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Lista de Comprobación para Exportar Pixel Art',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Antes de importar el PNG resultante',
      html: 'Revisa el resultado al 100% y a la escala final del juego, confirma que los bordes transparentes sigan limpios, verifica que las siluetas importantes sigan siendo legibles y conserva la imagen de origen junto con el archivo exportado para poder ajustar la paleta sin empezar desde cero.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cuantización de color',
          definition: 'Proceso de reducir un conjunto amplio de colores a uno más reducido y definido.',
        },
        {
          term: 'Rampa de paleta',
          definition: 'Secuencia ordenada de tonos oscuros, medios y claros para sombrear un material o superficie.',
        },
        {
          term: 'Paleta indexada',
          definition: 'Tabla de color compacta donde los píxeles hacen referencia a un índice en lugar de almacenar valores de color completos.',
        },
      ],
    },
  ],
  faq: [
    {
      question: '¿El cambiador de paletas sube mi imagen a algún servidor?',
      answer: 'No. La imagen se decodifica en un lienzo dentro de tu navegador, se procesa localmente con JavaScript y se exporta directamente como un archivo PNG. La utilidad no tiene ningún paso de carga externa.',
    },
    {
      question: '¿Puedo utilizar mi propia paleta de colores?',
      answer: 'Sí. Pega valores hexadecimales de 6 o 3 dígitos en el campo de Colores personalizados, separados por comas, espacios o saltos de línea, y selecciona Aplicar paleta.',
    },
    {
      question: '¿Cambia las dimensiones del sprite o hoja de sprites?',
      answer: 'No. El archivo exportado mantiene el ancho, el alto, la posición de los píxeles y la transparencia original cuando la opción Conservar transparencia está activa.',
    },
    {
      question: '¿Qué algoritmo utiliza para seleccionar los colores?',
      answer: 'Asigna cada píxel al color más cercano de la paleta seleccionada mediante la distancia Euclídea al cuadrado en el espacio RGB. Es un método rápido, determinista y fácil de previsualizar, aunque no aplica tramado ni corrección perceptiva Lab.',
    },
  ],
  howTo: [
    {
      name: 'Cargar un sprite',
      text: 'Arrastra una imagen PNG, JPEG o WebP al espacio de trabajo o usa el botón Elegir imagen.',
    },
    {
      name: 'Elegir una paleta',
      text: 'Selecciona un preajuste clásico o introduce tus propios colores hexadecimales. El resultado se actualiza al instante al aplicar una paleta.',
    },
    {
      name: 'Comparar y exportar',
      text: 'Inspecciona los lienzos original y limitado, ajusta el zoom y descarga el resultado en formato PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Cambiador de Paleta para Pixel Art',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿El cambiador de paletas sube mi imagen a algún servidor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. La imagen se decodifica y se procesa localmente en el navegador, y luego se exporta directamente en formato PNG.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo utilizar mi propia paleta de colores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Pega valores hexadecimales válidos en el campo Colores personalizados y aplica la paleta.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo limitar un sprite a una paleta retro',
      step: [
        { '@type': 'HowToStep', name: 'Cargar un sprite', text: 'Arrastra una imagen al espacio de trabajo o elígela desde tu dispositivo.' },
        { '@type': 'HowToStep', name: 'Elegir una paleta', text: 'Selecciona un preajuste o aplica una lista personalizada de colores hexadecimales.' },
        { '@type': 'HowToStep', name: 'Comparar y exportar', text: 'Revisa el resultado y descarga el archivo PNG resultante.' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
