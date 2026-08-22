import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'animador-hitbox-hurtbox-sprites';
const title = 'Animador de Hitbox y Hurtbox para Sprites';
const description = 'Dibuja capas de colisión en cada fotograma de tu sprite, previsualiza secuencias con papel cebolla, ajusta coordenadas exactas en píxeles y exporta JSON neutro.';

const faq = [
  {
    question: '¿Cuál es la diferencia entre una hitbox y una hurtbox?',
    answer: 'Una hitbox define la zona que genera un ataque, mientras que una hurtbox delimita el área vulnerable que recibe dicho ataque. Las pushboxes mantienen alejados a los personajes, las grabboxes delimitan agarres y los sensores detectan eventos. El motor y las reglas del juego definen el comportamiento final.',
  },
  {
    question: '¿Mis archivos de sprites salen del navegador?',
    answer: 'No. Las imágenes se decodifican, recortan, dibujan y exportan íntegramente dentro de tu navegador. La herramienta solo guarda en el almacenamiento local preferencias de edición como la velocidad de reproducción y la visibilidad del papel cebolla. Guarda el JSON para conservar tu proyecto.',
  },
  {
    question: '¿Qué sistema de coordenadas utiliza el archivo JSON exportado?',
    answer: 'Cada fotograma mide sus coordenadas en píxeles tomando como origen (0,0) la esquina superior izquierda del recorte. Las dimensiones de rectángulos y círculos almacenan valores no negativos de x, y, ancho y alto. Cada fotograma incluye también su propio punto de pivote en este mismo sistema local.',
  },
  {
    question: '¿Puedo editar hojas de sprites completas e imágenes de fotogramas sueltos?',
    answer: 'Sí. Puedes cargar una imagen PNG o WebP indicando filas y columnas para una división uniforme, o bien seleccionar varias imágenes ordenadas para crear una secuencia cuadro a cuadro. Los archivos numerados se ordenan de forma natural.',
  },
  {
    question: '¿El archivo exportado funciona directamente en cualquier motor de juego?',
    answer: 'El formato JSON es deliberadamente neutro. Registra recortes de fotogramas, pivotes, nombres semánticos de capa y geometría primitiva sin imponer la estructura de un motor específico. Convierte estos datos en tu proyecto considerando su escala, origen y sistema de colisiones.',
  },
];

const howTo = [
  { name: 'Cargar el arte de animación', text: 'Selecciona una hoja de sprites PNG o WebP, o bien una secuencia ordenada de imágenes. Todo el procesamiento se realiza localmente en tu dispositivo.' },
  { name: 'Definir los fotogramas', text: 'Para una hoja uniforme, especifica el número de filas y columnas. Recorre la cinta de animación para verificar que cada recorte encuadre un fotograma limpio.' },
  { name: 'Dibujar capas semánticas de colisión', text: 'Elige una capa de hitbox, hurtbox, pushbox, grabbox, sensor o personalizada, y arrastra un rectángulo o círculo sobre el fotograma activo.' },
  { name: 'Refinar el movimiento en el tiempo', text: 'Selecciona figuras para ajustar sus coordenadas numéricas, copia geometría a fotogramas adyacentes y activa capas de papel cebolla para comparar el movimiento.' },
  { name: 'Exportar datos reproducibles', text: 'Descarga el proyecto JSON neutro y una hoja de contactos en PNG. Conserva las imágenes originales junto al JSON, ya que los píxeles no se incrustan en el archivo.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Carga una animación, confirma los recortes de fotograma y dibuja las áreas de ataque, daño, colisión física, agarre o detección. La cinta de fotogramas mostrará las capas activas.',
    privacyNote: 'Mesa de animación local. Las imágenes no se suben a ningún servidor.',
    loadSprite: 'Colocar material gráfico en la mesa óptica',
    loadHint: 'Selecciona una hoja de sprites uniforme o varias imágenes ordenadas en PNG o WebP. Los archivos numerados se ordenan de forma natural.',
    chooseImages: 'Seleccionar imágenes de sprite',
    slicingTitle: 'División de fotogramas',
    rowsLabel: 'Filas',
    columnsLabel: 'Columnas',
    applySlicing: 'Cortar cinta',
    playbackTitle: 'Vista previa de movimiento',
    previousFrame: 'Fotograma anterior',
    play: 'Reproducir',
    pause: 'Pausar',
    nextFrame: 'Siguiente fotograma',
    fpsLabel: 'Fotogramas por segundo',
    onionPrevious: 'Acetato anterior',
    onionNext: 'Acetato siguiente',
    layerTitle: 'Tintas de colisión',
    typeHitbox: 'Hitbox (Ataque)',
    typeHurtbox: 'Hurtbox (Vulnerable)',
    typePushbox: 'Pushbox (Física)',
    typeGrabbox: 'Grabbox (Agarre)',
    typeSensor: 'Sensor',
    typeCustom: 'Personalizada',
    shapeRectangle: 'Rectángulo',
    shapeCircle: 'Círculo',
    drawShape: 'Dibujar',
    selectShape: 'Seleccionar',
    stageLabel: 'Mesa óptica de animación',
    emptyStage: 'Carga material gráfico para visualizar el fotograma y comenzar a dibujar capas de colisión.',
    frameReadout: 'Fotograma {current} de {total}',
    timelineTitle: 'Cinta de colisiones',
    inspectorTitle: 'Acetato seleccionado',
    noSelection: 'Activa la herramienta Seleccionar y haz clic en una figura para editar sus dimensiones exactas.',
    nameLabel: 'Nombre de la capa',
    xLabel: 'X en píxeles',
    yLabel: 'Y en píxeles',
    widthLabel: 'Ancho en píxeles',
    heightLabel: 'Alto en píxeles',
    radiusLabel: 'Radio en píxeles',
    duplicateShape: 'Duplicar',
    mirrorShape: 'Reflejar horizontalmente',
    deleteShape: 'Eliminar figura seleccionada',
    copyPrevious: 'Copiar fotograma anterior aquí',
    copyAll: 'Copiar este fotograma a todos',
    pivotTitle: 'Pivote del fotograma',
    pivotXLabel: 'Pivote X',
    pivotYLabel: 'Pivote Y',
    exportTitle: 'Exportar plan de animación',
    exportJson: 'Descargar JSON',
    importJson: 'Importar JSON',
    exportContactSheet: 'Descargar hoja de contactos',
    resetProject: 'Limpiar capas de colisión',
    undo: 'Deshacer',
    redo: 'Rehacer',
    statusReady: 'La mesa de animación está lista.',
    statusImageLoaded: 'Se han cargado {count} archivos de imagen en local.',
    statusShapeCreated: 'Se ha añadido una nueva figura de colisión a este fotograma.',
    statusShapeUpdated: 'Geometría de colisión actualizada.',
    statusImported: 'Proyecto de colisión importado. Vuelve a enlazar las imágenes de origen para previsualizar el arte.',
    statusExported: 'Exportación preparada en este dispositivo.',
    statusError: 'El archivo seleccionado no se pudo leer como una imagen o proyecto válido.',
    framesBadge: '{count} fotogramas',
    shapesBadge: '{count} figuras',
    coverageBadge: '{percent}% cubierto',
    coordinatesNote: 'Las coordenadas toman la esquina superior izquierda de cada fotograma recortado como origen (0,0). Los límites se miden en píxeles dentro del fotograma.',
    localOnlyDisclosure: 'El archivo JSON almacena nombres de imagen, recortes, pivotes y geometría de colisión. No incrusta los píxeles de las imágenes.',
    limitationDisclosure: 'Las capas definen regiones geométricas de diseño. Pruébalas en tu motor de juego, ya que la sincronización, escala, físicas y reglas de combate dependen del código de tu proyecto.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Diseña hitboxes y hurtboxes alineadas con el movimiento real del sprite',
    },
    {
      type: 'paragraph',
      html: 'Configurar colisiones resulta complejo cuando cada fotograma se evalúa de manera aislada. Este editor integra en una sola vista el fotograma del sprite, las capas de colisión semánticas, los acetatos adyacentes en papel cebolla y la cinta temporal. Esto permite verificar cuándo se activa un golpe, cómo sigue el área vulnerable al volumen del personaje y si la caja física mantiene estabilidad durante estiramientos o giros.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Elige cada capa de colisión según su función técnica en el juego',
    },
    {
      type: 'table',
      headers: ['Capa', 'Responsabilidad habitual', 'Aspecto a revisar'],
      rows: [
        ['Hitbox', 'Área que aplica un golpe, daño o efecto activo', '¿Aparece únicamente durante los fotogramas de impacto previstos?'],
        ['Hurtbox', 'Área que recibe ataques o impactos del oponente', '¿Ajusta bien al volumen del personaje sin dejar huecos antinaturales?'],
        ['Pushbox', 'Caja de colisión física para impedir que dos personajes se solapen', '¿Mantiene dimensiones estables para evitar empujones o temblores bruscos?'],
        ['Grabbox', 'Alcance necesario para iniciar un agarre o llave', '¿Coincide la ventana de tiempo y el rango con la clave visual de la animación?'],
        ['Sensor', 'Área de detección para interacciones, bordes, objetivos o disparadores', '¿El nombre asignado describe con claridad su propósito técnico?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Interpretación y estructura del sistema de coordenadas',
    },
    {
      type: 'paragraph',
      html: 'El proyecto exportado mide las coordenadas X e Y desde la esquina superior izquierda de cada fotograma recortado. Las dimensiones de ancho y alto son siempre valores no negativos en píxeles, y el pivote utiliza este mismo sistema local. Esto asegura que los ciclos de guardado e importación sean completamente reproducibles, aunque el adaptador de tu motor deberá considerar la escala de textura, los orígenes centrados y las transformaciones del mundo.',
    },
    {
      type: 'tip',
      title: 'Revisa las fases de anticipación, impacto y recuperación en conjunto',
      html: 'Reproduce la animación completa tras ajustar un fotograma clave. Una caja bien dibujada en reposo puede activarse demasiado pronto, desaparecer antes de tiempo o desplazarse de forma discontinua. Utiliza los acetatos anterior y posterior para verificar la fluidez del movimiento sin perder las modificaciones intencionadas.',
    },
    {
      type: 'title',
      level: 2,
      text: 'La hoja de contactos como herramienta de revisión para el equipo',
    },
    {
      type: 'paragraph',
      html: 'La hoja de contactos en PNG muestra todos los fotogramas de la secuencia con sus capas de color superpuestas en un único lienzo. Utilízala junto al archivo JSON para revisar la sincronización de combate con los equipos de arte, diseño y programación. La imagen proporciona una visión de conjunto inmediata, mientras que el JSON aporta los valores exactos de recortes, pivotes y volúmenes de colisión.',
    },
  ],
  faq,
  bibliographyTitle: 'Referencias de diseño de colisiones',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
