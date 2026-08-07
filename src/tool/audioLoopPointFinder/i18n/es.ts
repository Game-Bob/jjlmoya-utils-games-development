import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'buscador-puntos-bucle-audio-juegos',
  title: 'Buscador de Puntos de Bucle e Inyector de Metadatos de Audio',
  description: 'Localice puntos exactos de bucle de audio, ajuste a cruces por cero para eliminar clics y exporte archivos WAV con metadatos LOOPSTART y LOOPEND para motores de juegos.',
  ui: {
    title: 'Buscador de Puntos de Bucle de Audio para Juegos',
    subtitle: 'Analizador interactivo de forma de onda, detector de cruce por cero y etiquetador de metadatos WAV',
    dropzoneTitle: 'Arrastre el archivo de audio aquí o haga clic para buscar',
    dropzoneSubtitle: 'Admite pistas de audio WAV, OGG, MP3 y FLAC sin comprimir o codificadas',
    dropzoneButton: 'Seleccionar Archivo de Audio',
    audioInfoTitle: 'Propiedades de la Pista de Audio',
    durationLabel: 'Duración',
    sampleRateLabel: 'Frecuencia de Muestreo',
    channelsLabel: 'Canales de Audio',
    totalSamplesLabel: 'Conteo Total de Muestras',
    loopControlsTitle: 'Configuración de la Región de Bucle',
    loopStartLabel: 'Marcador de Inicio de Bucle',
    loopEndLabel: 'Marcador de Fin de Bucle',
    loopDurationLabel: 'Duración del Bucle',
    zeroCrossingLabel: 'Ajuste de Cruce por Cero',
    snapZeroCrossingButton: 'Ajustar Marcadores al Cruce por Cero Más Cercano',
    playLoopButton: 'Previsualizar Bucle Sin Costuras',
    pauseLoopButton: 'Pausar Reproducción',
    stopLoopButton: 'Detener Reproducción',
    exportWavButton: 'Exportar WAV con Metadatos de Bucle',
    sampleUnitLabel: 'Muestras',
    secondUnitLabel: 'Segundos',
    zoomLabel: 'Zoom de Forma de Onda',
    zoomInButton: 'Acercar',
    zoomOutButton: 'Alejar',
    resetZoomButton: 'Restablecer Vista',
    noFileSelected: 'Aún no se ha cargado ningún archivo de audio',
    invalidAudioFile: 'Error al decodificar el archivo de audio',
    presetsTitle: 'Ajustes Preestablecidos Rápidos',
    presetFullTrack: 'Bucle de Pista Completa',
    presetIntroCut: 'Omitir 10% de Introducción',
    presetMiddleLoop: 'Sección Central 50%',
    statusLooping: 'Reproducción en Bucle Activa',
    statusPaused: 'Reproducción En Pausa',
    statusReady: 'Audio Cargado y Listo',
    statusLoaded: 'Pista de audio cargada correctamente',
    statusDecodeError: 'Error al decodificar el archivo de audio',
    statusSnapped: 'Marcadores ajustados a puntos de cruce por cero',
    statusStopped: 'Reproducción detenida',
    statusExported: 'Archivo WAV exportado con etiquetas de bucle integradas',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Bucle de Audio Continuo y Alineación de Muestras en Videojuegos',
    },
    {
      type: 'paragraph',
      html: 'Lograr una reproducción continua de música de fondo en videojuegos requiere una alineación exacta de muestras en los límites del bucle. A diferencia de los reproductores estándar que simplemente reinician la reproducción desde el principio, los motores de videojuegos modernos como Unity, Godot, Unreal Engine, FMOD y Wwise utilizan puntos de metadatos integrados. Al leer bloques de metadatos estándar como LOOPSTART y LOOPEND directamente desde las cabeceras WAV, los motores pasan sin problemas del marcador final al inicial sin interrumpir la línea acústica. Establecer marcadores manualmente sin inspeccionar la forma de onda introduce chasquidos audibles o distorsiones de fase.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Precisión de Muestreo', value: '44.1 kHz / 48 kHz' },
        { label: 'Umbral de Cruce por Cero', value: 'Amplitud 0.00' },
        { label: 'Estándar de Metadatos', value: 'RIFF smpl e INFO' },
        { label: 'Reducción de Clics', value: '100% Fase Alineada' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Búsqueda de Cruces por Cero Naturales',
    },
    {
      type: 'tip',
      title: 'Estrategia de Cruce por Cero para Eliminación de Clics',
      html: 'Alinee siempre los marcadores de inicio y fin de bucle en puntos de cruce por cero con pendiente positiva donde la forma de onda acústica pasa de valores de amplitud negativos a positivos. Coincidir tanto la amplitud cero como la dirección de pendiente evita desplazamientos bruscos del altavoz.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Desglose de Compatibilidad de Metadatos en Motores de Juegos',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Marcador de Bloque RIFF smpl',
          description: 'Metadatos binarios estándar integrados en la cabecera WAV',
          points: [
            'Compatible nativamente con Godot, FMOD, Wwise y GameMaker',
            'Proporciona precisión exacta por muestra sin deriva temporal',
            'Empaqueta las marcas de bucle dentro del propio archivo WAV',
            'Elimina chasquidos acústicos junto con el ajuste por cero',
          ],
        },
        {
          title: 'Corte Manual de Audio',
          description: 'Dividir introducción y bucle en archivos separados',
          points: [
            'Utilizado por reproductores básicos sin lectura de metadatos',
            'Sujeto a aproximaciones en milisegundos con pérdidas y pausas',
            'Requiere gestionar múltiples archivos de audio en el proyecto',
            'Presenta un alto riesgo de clics en las transiciones',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabla de Referencia de Frecuencias de Muestreo Estándar',
    },
    {
      type: 'table',
      headers: ['Frecuencia Estándar', 'Muestras por Segundo', 'Dominio de Uso Recomendado', 'Resolución Temporal'],
      rows: [
        ['44,100 Hz', '44,100', 'Banda Sonora Estándar de Juegos en CD', '0.0226 ms por muestra'],
        ['48,000 Hz', '48,000', 'Juegos Modernos de Escritorio y Consolas', '0.0208 ms por muestra'],
        ['96,000 Hz', '96,000', 'Archivos de Audio Maestro de Alta Definición', '0.0104 ms por muestra'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Inyección Automatizada de Metadatos a Nivel de Bytes',
    },
    {
      type: 'paragraph',
      html: 'Al exportar pistas de audio desde esta utilidad, las nuevas estructuras de metadatos se incrustan directamente en la cabecera RIFF del archivo binario WAV de salida. La herramienta construye tanto un bloque de muestra estándar como un bloque LIST INFO con etiquetas de comentarios de texto. Este enfoque proporciona compatibilidad total entre motores de juego y DAW.',
    },
  ],
  faqTitle: 'Preguntas Frecuentes',
  faq: [
    {
      question: '¿Qué son las etiquetas de metadatos LOOPSTART y LOOPEND?',
      answer: 'LOOPSTART y LOOPEND son campos de metadatos medidos en número absoluto de muestras. Los motores de juegos usan estos índices para saltar instantáneamente desde la posición final del bucle de regreso a la posición inicial.',
    },
    {
      question: '¿Por qué ocurren clics audibles en los puntos de bucle?',
      answer: 'Los clics ocurren cuando la forma de onda en el marcador final no coincide con el nivel de amplitud o pendiente de fase del marcador inicial. Ajustar los marcadores a puntos de cruce por cero soluciona este problema.',
    },
    {
      question: '¿Se modifica o sube mi archivo de audio original?',
      answer: 'No. Todo el procesamiento, la decodificación, la detección de cruces por cero y la exportación ocurren localmente en la memoria del navegador.',
    },
  ],
  howTo: [
    {
      name: 'Cargar Pista de Audio',
      text: 'Arrastre y suelte su pista de música o busque un archivo WAV, OGG, MP3 o FLAC.',
    },
    {
      name: 'Posicionar Marcadores de Bucle',
      text: 'Ajuste la posición de inicio y fin mediante la vista interactiva o las entradas numéricas de muestras.',
    },
    {
      name: 'Ajustar a Cruces por Cero',
      text: 'Haga clic en el botón de ajuste a cruce por cero para alinear los marcadores automáticamente.',
    },
    {
      name: 'Previsualizar y Exportar',
      text: 'Escuche la reproducción fluida y exporte el archivo WAV con metadatos incrustados.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Buscador de Puntos de Bucle de Audio para Juegos',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué son las etiquetas de metadatos LOOPSTART y LOOPEND?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART y LOOPEND son campos de metadatos medidos en número absoluto de muestras.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo Buscar e Inyectar Puntos de Bucle de Audio',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Cargar Pista de Audio',
          text: 'Arrastre y suelte su pista de música o busque un archivo de audio.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referencias y Lecturas Adicionales',
  bibliography: bibliographyEntries,
};
