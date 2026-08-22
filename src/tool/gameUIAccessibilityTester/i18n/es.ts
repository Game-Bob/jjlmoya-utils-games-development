import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'evaluador-estres-accesibilidad-ui-juegos';
const title = 'Evaluador de Estrés de Accesibilidad para UI de Juegos';
const description = 'Inspecciona capturas de pantalla de tu juego localmente con simulaciones de daltonismo, sondas de contraste en HUD, desenfoque, reducción de escala y mapa de calor de bordes.';

const faq = [
  {
    question: '¿Esta herramienta certifica que la interfaz de mi juego es accesible?',
    answer: 'No. Combina simulaciones documentadas de visión en color, mediciones deterministas de color, heurísticas de estrés visual y preguntas de revisión. Utiliza los hallazgos para guiar la revisión de diseño y las pruebas con jugadores, no como un certificado formal.',
  },
  {
    question: '¿Mi captura de pantalla sale del navegador?',
    answer: 'No. La imagen se decodifica, muestrea, transforma y exporta completamente dentro de tu navegador. La herramienta solo guarda ajustes de visualización como la lente seleccionada, el zoom y el desenfoque en el almacenamiento local.',
  },
  {
    question: '¿Qué debo medir con las dos sondas de color?',
    answer: 'Elige dos colores que deban comunicar significados distintos, como marcadores de aliado y enemigo, estados activo y desactivado, salud y daño, o dos niveles de rareza. Muestrea píxeles representativos en el mismo contexto de juego.',
  },
  {
    question: '¿Por qué una buena relación de contraste puede requerir revisión manual?',
    answer: 'Un par puede medir bien mientras que un icono pequeño, texto fino, un fondo en movimiento, el desorden visual o una convención basada solo en color siguen siendo difíciles de identificar. La relación describe los colores muestreados, no la interacción completa.',
  },
  {
    question: '¿Qué muestra el mapa de calor?',
    answer: 'El mapa de calor es una heurística de bordes locales. Destaca los píxeles donde la separación RGB cercana cae drásticamente tras aplicar la simulación seleccionada. Permite orientar la atención hacia señales frágiles, pero no identifica la semántica de la interfaz.',
  },
];

const howTo = [
  { name: 'Cargar una captura local', text: 'Selecciona una captura PNG, JPEG o WebP del juego o menú. La imagen se mantiene en la memoria local de tu navegador.' },
  { name: 'Elegir una lente de estrés', text: 'Compara la captura original con una simulación de visión en color, escala de grises, contraste reducido o desaturación.' },
  { name: 'Estresar la jerarquía y la escala', text: 'Añade desenfoque, reduce la escala de renderizado, aplica zoom a los píxeles o activa el mapa de calor de bordes.' },
  { name: 'Muestrear dos señales críticas', text: 'Selecciona la sonda A o B y haz clic en la imagen original, o define los colores directamente mediante los controles de color.' },
  { name: 'Registrar y exportar hallazgos', text: 'Consulta la guía de revisión, añade tus observaciones y descarga una lámina comparativa junto con el informe estructurado en JSON.' },
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

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Carga una captura de pantalla del juego, elige una lente de estrés y compara dos señales que el jugador deba diferenciar. Empieza comparando aliado contra enemigo, estados de salud, rareza, elementos interactivos o marcadores del minimapa.',
    privacyNote: 'Mesa óptica local. Las capturas de pantalla no se suben a ningún servidor.',
    dropTitle: 'Arrastra una captura del juego o interfaz a la mesa óptica',
    dropHint: 'Arrastra una imagen aquí o elígela desde tu dispositivo. Utiliza un momento representativo con fondos reales y desorden visual.',
    chooseImage: 'Elegir captura',
    replaceImage: 'Reemplazar captura',
    supportedFiles: 'PNG, JPEG o WebP de hasta 16 MB. Las imágenes grandes se reducen a un borde de análisis de 1600 px.',
    lensLabel: 'Lente de simulación',
    lensOriginal: 'Original',
    lensProtanopia: 'Protanopía',
    lensDeuteranopia: 'Deuteranopía',
    lensTritanopia: 'Tritanopía',
    lensAchromatopsia: 'Escala de grises',
    lensReducedContrast: 'Contraste reducido',
    lensDesaturation: 'Desaturación',
    compareLabel: 'Modo de comparación',
    compareSideBySide: 'Lado a lado',
    compareSplit: 'Lente dividida',
    comparePress: 'Mantener para revelar',
    holdOriginal: 'Mantener para ver original',
    splitPosition: 'Posición de lente',
    stressLabel: 'Controles de estrés de señal',
    blurLabel: 'Desenfoque en píxeles',
    downscaleLabel: 'Vista en pantalla pequeña',
    downscaleFull: 'Completa',
    downscaleHalf: 'Mitad',
    downscaleQuarter: 'Un cuarto',
    downscaleEighth: 'Un octavo',
    zoomLabel: 'Zoom de inspección de píxeles',
    heatmapLabel: 'Mapa de calor de bordes',
    heatmapHint: 'Destaca separaciones locales que se reducen drásticamente con la lente activa.',
    originalView: 'Campo de señal original',
    simulatedView: 'Campo de señal bajo estrés',
    emptyCanvas: 'Selecciona una captura para activar el campo de comparación. Tu imagen permanecerá en este dispositivo.',
    sampleTitle: 'Sondas de señal crítica',
    sampleInstructions: 'Selecciona A o B y haz clic en la imagen original. Compara colores que codifiquen acciones o estados distintos para el jugador.',
    sampleA: 'Sonda A',
    sampleB: 'Sonda B',
    sampleAName: 'Significado de sonda A',
    sampleBName: 'Significado de sonda B',
    manualColor: 'Definir color directamente',
    sampleAInitial: 'Marcador aliado',
    sampleBInitial: 'Marcador enemigo',
    noSample: 'Esperando captura de pantalla',
    originalContrast: 'Contraste original',
    simulatedContrast: 'Contraste bajo estrés',
    separationRetained: 'Separación conservada',
    statusStrong: 'La señal se mantiene distinta',
    statusWatch: 'Inspeccionar en contexto',
    statusReview: 'Revisar diseño de señal',
    statusPending: 'Sin análisis todavía',
    measurementLabel: 'Medición',
    heuristicLabel: 'Heurística',
    manualReviewLabel: 'Estado de revisión manual',
    measurementHint: 'El contraste utiliza la fórmula de luminancia relativa WCAG para los dos colores sRGB muestreados. Solo describe este par y es más significativo cuando los colores están en contacto.',
    heuristicHint: 'La separación conservada compara la distancia RGB lineal antes y después de la lente. Es una advertencia orientativa, no un umbral perceptivo ni una condición de aprobado.',
    promptTitle: 'Guía de revisión de interfaz',
    promptColorOnly: '¿Pueden los jugadores identificar aliado, enemigo, advertencia, éxito y fallo sin depender exclusivamente del tono?',
    promptChangingBackground: '¿El texto se mantiene legible sobre los fondos más brillantes, oscuros y saturados del juego?',
    promptMinimap: '¿Los marcadores del minimapa se diferencian por forma, etiqueta, posición o patrón además del color?',
    promptStates: '¿Los estados seleccionado, desactivado, no disponible, tiempo de recarga, salud y daño siguen siendo inequívocos?',
    promptShape: '¿Un icono, etiqueta, patrón, animación, posición o sonido refuerza cada señal de color crítica?',
    findingLabel: 'Hallazgo del equipo',
    findingPlaceholder: 'Ejemplo: El contorno enemigo desaparece sobre la viñeta de daño',
    addFinding: 'Añadir hallazgo',
    findingsEmpty: 'No hay hallazgos registrados. Utiliza la guía como primera pasada de revisión.',
    exportSheet: 'Descargar lámina comparativa',
    exportReport: 'Descargar informe estructurado',
    resetTool: 'Limpiar sesión',
    uploadError: 'No se pudo leer esta imagen. Selecciona un archivo PNG, JPEG o WebP válido.',
    fileTooLarge: 'La imagen supera los 16 MB. Exporta una captura más pequeña y vuelve a intentarlo.',
    imageReady: 'Captura cargada localmente. Muestrea dos señales críticas para iniciar la revisión.',
    reportDownloaded: 'Informe estructurado de hallazgos descargado.',
    sheetDownloaded: 'Lámina comparativa descargada.',
    localOnlyDisclosure: 'La decodificación, simulación, muestreo, mapa de calor y exportaciones se ejecutan en este navegador. Solo los ajustes de visualización se guardan localmente.',
    limitationDisclosure: 'Esta herramienta ayuda en la revisión de diseño. Las simulaciones son modelos, el desenfoque y los mapas de calor son heurísticas, y ningún resultado certifica accesibilidad ni sustituye las pruebas con jugadores.',
    reportTitle: 'Lámina de revisión de accesibilidad UI de juego',
    reportFindingReview: 'El par de señales muestreado pierde un contraste o separación de color sustancial bajo la lente seleccionada. Revísalo en el contexto completo de juego.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Cómo evaluar la accesibilidad en interfaces de juegos sin subir capturas',
    },
    {
      type: 'paragraph',
      html: 'La interfaz de un videojuego comunica en condiciones de alta presión visual: la salud cambia mientras la cámara rota, los marcadores enemigos se cruzan sobre escenarios brillantes, los colores de rareza compiten con efectos de partículas y los iconos del minimapa se reducen a pocos píxeles. Este evaluador local mantiene la captura en tu navegador y te permite inspeccionar esas combinaciones reales mediante simulaciones de visión en color y condiciones de estrés práctico.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Mediciones, heurísticas y juicio humano responden a preguntas distintas',
    },
    {
      type: 'table',
      headers: ['Tipo de evidencia', 'Lo que ofrece este evaluador', 'Lo que no permite concluir'],
      rows: [
        ['Medición', 'Luminancia relativa y relación de contraste para dos colores sRGB muestreados', 'Si cada borde de texto o fondo del juego cumple una normativa'],
        ['Simulación', 'Transformaciones de protanopía, deuteranopía y tritanopía según matrices publicadas', 'La experiencia visual exacta de cada jugador individual'],
        ['Heurística', 'Desenfoque, reducción de escala, desaturación, contraste reducido y colapso de bordes', 'Una puntuación universal de aprobado o un diagnóstico automático'],
        ['Revisión manual', 'Preguntas de guía y hallazgos exportables vinculados a la captura y ajustes', 'Certificación formal o sustitución de pruebas con jugadores'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Selecciona sondas de color que representen una decisión del jugador',
    },
    {
      type: 'paragraph',
      html: 'No muestrees dos colores simplemente porque parezcan atractivos. Elige un par cuya diferencia modifique la acción del jugador: aliado y enemigo, seguro y peligroso, seleccionado y no disponible, curación y daño, u objetivo y elemento decorativo. Si el par pierde diferenciación bajo estrés, añade una forma, icono, etiqueta, patrón, posición o señal sonora en lugar de buscar únicamente otro tono.',
    },
    {
      type: 'tip',
      title: 'Evalúa el fotograma más complejo',
      html: 'Utiliza una captura tomada durante un combate u momento cargado de acción, no un diseño estático limpio. Revisa la misma señal sobre escenarios claros, oscuros, con movimiento, efectos visuales, superposiciones de daño y la escala de pantalla más pequeña que soportes.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Interpreta el informe exportado como una conversación de diseño',
    },
    {
      type: 'paragraph',
      html: 'El informe en JSON registra la lente, los ajustes de estrés, los colores muestreados, el contraste medido, la heurística de separación y las observaciones del equipo. Adjunta la lámina comparativa en PNG a una tarea o incidencia y describe la consecuencia en el juego junto con la señal redundante que planeas implementar.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
