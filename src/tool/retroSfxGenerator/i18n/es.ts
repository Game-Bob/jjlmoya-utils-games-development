import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'generador-efectos-sonido-retro',
  title: 'Generador de Efectos de Sonido Retro para Juegos',
  description: 'Crea efectos de sonido retro cortos para juegos en tu navegador con preajustes inmediatos, controles de onda, osciloscopio en vivo y exportacion WAV.',
  ui: {
    waveformLabel: 'Forma de onda',
    waveformSquare: 'Cuadrada',
    waveformSawtooth: 'Diente de sierra',
    waveformSine: 'Senoidal',
    waveformTriangle: 'Triangular',
    waveformNoise: 'Ruido',
    presetLabel: 'Banco de sonidos rapidos',
    presetExplosion: 'Explosion',
    presetLaser: 'Laser',
    presetJump: 'Salto',
    presetCoin: 'Moneda',
    presetPowerUp: 'Potenciador',
    frequencyLabel: 'Frecuencia inicial',
    frequencyEndLabel: 'Frecuencia final',
    durationLabel: 'Duracion',
    decayLabel: 'Decaimiento',
    sweepLabel: 'Barrido de tono',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Paso bajo',
    highpassLabel: 'Paso alto',
    noiseMixLabel: 'Mezcla de ruido',
    toneSection: 'Tono',
    dynamicsSection: 'Dinamica',
    filterSection: 'Textura',
    playButton: 'Reproducir sonido',
    stopButton: 'Detener',
    downloadButton: 'Descargar WAV',
    randomizeButton: 'Aleatorio',
    resetButton: 'Restablecer',
    waveformPreviewLabel: 'Forma de onda en vivo',
    generatedLabel: 'Generado',
    statusReady: 'Listo para escuchar',
    statusPlaying: 'Reproduciendo en tu navegador',
    statusStopped: 'Reproduccion detenida',
    statusDownloaded: 'WAV descargado',
    statusAudioBlocked: 'La reproduccion requiere una pestana de navegador con audio habilitado',
    statusGenerating: 'Renderizando sonido',
    presetHint: 'Elige un punto de partida y luego moldea la senal con los controles inferiores.',
    monoWavHint: '44.1 kHz · WAV mono de 16 bits',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Crea audio para juegos en una Game Jam sin salir del navegador',
    },
    {
      type: 'paragraph',
      html: 'Un buen efecto de sonido para juegos debe comunicar una accion de forma inmediata. Una subida de tono brillante evoca un salto o un potenciador, un barrido descendente rapido sugiere un laser o un objeto al caer, y una ráfaga ruidosa con decaimiento simula una explosion. Este generador convierte estos patrones arcade en audio editable en el navegador. Selecciona un preajuste, escucha al instante y ajusta la senal observando la vista previa de la onda.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Preajustes de sonido', value: '5 patrones iniciales' },
        { label: 'Opciones de oscilador', value: '5 formas de onda' },
        { label: 'Formato de exportacion', value: 'WAV PCM de 16 bits' },
        { label: 'Procesamiento', value: 'En navegador' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Que modifica cada control',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tono y movimiento',
          description: 'Los controles de tono definen la identidad del sonido.',
          points: [
            'La frecuencia inicial define el tono de partida del oscilador',
            'El barrido de tono desplaza la frecuencia hacia un valor final calculado',
            'El vibrato añade una fluctuacion periodica de tono suave',
            'Las ondas cuadrada, diente de sierra, senoidal, triangular y ruido crean texturas armónicas distintas',
          ],
        },
        {
          title: 'Forma y textura',
          description: 'Los controles de dinamica y textura determinan como finaliza el sonido.',
          points: [
            'La duracion controla el tiempo total de emision del efecto',
            'El decaimiento hace que la amplitud disminuya mas rapido o de forma gradual',
            'El filtro paso bajo suaviza frecuencias altas agudas',
            'El filtro paso alto elimina frecuencias graves y la mezcla de ruido aporta textura rugosa',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Receta practica para eventos habituales de juego',
    },
    {
      type: 'table',
      headers: ['Evento', 'Punto de partida util', 'Primer ajuste recomendado'],
      rows: [
        ['Explosion', 'Ruido con tono bajo', 'Aumentar la duracion y bajar el filtro paso bajo para una ráfaga mas pesada'],
        ['Laser', 'Diente de sierra con barrido descendente', 'Acortar la duracion y subir el filtro paso alto para un ataque mas afilado'],
        ['Salto', 'Cuadrada con barrido ascendente', 'Reducir el decaimiento para mantener audible la subida de tono'],
        ['Moneda', 'Cuadrada con barrido ascendente corto', 'Elevar la frecuencia inicial para obtener un sonido de recogida brillante'],
        ['Potenciador', 'Triangular con barrido ascendente largo', 'Añadir un poco de vibrato para dar mas movimiento'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Por que WAV es un formato util en jams',
    },
    {
      type: 'paragraph',
      html: 'El formato WAV es ideal para prototipos porque se importa facilmente en motores de videojuegos, editores de audio y pipelines sin requerir librerias de descompresion especificas. Esta herramienta genera un archivo WAV PCM mono de 16 bits en memoria y lo descarga directamente. El archivo generado es corto y sin compresion; una vez probado en el juego, se puede convertir a formatos comprimidos como Ogg Vorbis.',
    },
    {
      type: 'tip',
      title: 'Escucha al volumen real del juego',
      html: 'Un sonido impresionante en solitario puede resultar fatigante si se activa repetidamente por segundo. Pruebalo dentro del motor del juego y deja suficiente margen dinamico para la musica.',
    },
  ],
  faqTitle: 'Preguntas frecuentes',
  faq: [
    {
      question: '¿El generador sube mis sonidos a un servidor?',
      answer: 'No. La sintesis, la vista previa y la codificacion WAV se realizan integramente en el navegador.',
    },
    {
      question: '¿Puedo usar los sonidos descargados en mi juego comercial?',
      answer: 'El audio generado esta pensado como recurso inicial para prototipos y proyectos de game jams. Revisa las reglas de tu proyecto antes de la publicacion final.',
    },
    {
      question: '¿Por que el barrido de tono cambia la frecuencia final?',
      answer: 'El control deslizante asigna valores negativos a barridos descendentes y positivos a ascendentes, calculando de forma proporcional el tono final.',
    },
    {
      question: '¿Que hago si no escucho ningun sonido?',
      answer: 'Asegurate de que la pestaña del navegador tenga permiso de audio y vuelve a hacer clic en Reproducir sonido.',
    },
  ],
  howTo: [
    {
      name: 'Selecciona un patron de sonido',
      text: 'Elige Explosion, Laser, Salto, Moneda o Potenciador en el banco rapido.',
    },
    {
      name: 'Moldea la senal',
      text: 'Ajusta los controles de forma de onda, tono, barrido, duracion, decaimiento y textura.',
    },
    {
      name: 'Escucha el resultado',
      text: 'Haz clic en Reproducir sonido para comprobar la sintesis en vivo.',
    },
    {
      name: 'Descarga el archivo WAV',
      text: 'Haz clic en Descargar WAV para obtener un archivo PCM mono de 44.1 kHz y 16 bits.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Generador de Efectos de Sonido Retro para Juegos',
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
          name: '¿El generador sube mis sonidos a un servidor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. La sintesis, la vista previa y la codificacion WAV se realizan en el navegador.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo crear un efecto de sonido retro para juegos',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Selecciona un patrón de sonido',
          text: 'Elige un preajuste rápido.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referencias y lecturas recomendadas',
  bibliography: bibliographyEntries,
};
