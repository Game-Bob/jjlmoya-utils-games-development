import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculadora-formulas-dano-juegos-ttk';
const title = 'Laboratorio de Fórmulas de Daño y Gráficos TTK';
const description = 'Compara fórmulas de daño para videojuegos en tiempo real mediante curvas, mapas de calor, puntos de redondeo, críticos y tiempo para derrotar al objetivo (TTK).';

const faq = [
  {
    question: '¿Qué compara la calculadora de fórmulas de daño?',
    answer: 'Evalúa dos expresiones matemáticas seguras contra las mismas variables de combate. Permite comparar curvas de daño, saltos en cantidad de golpes, tiempo para derrotar (TTK), reglas de redondeo, orden de resistencias y mapas de calor sin ejecutar JavaScript.',
  },
  {
    question: '¿Qué variables y funciones puedo utilizar?',
    answer: 'Las variables disponibles son attack, defense, level, power, resistance, flat, criticalChance y criticalMultiplier. Las funciones seguras son min, max, clamp, abs, sqrt, pow, floor, round y ceil. Admite operadores aritméticos y paréntesis.',
  },
  {
    question: '¿Cómo se calcula el tiempo para derrotar (TTK)?',
    answer: 'Los golpes necesarios resultan de dividir la vida del objetivo entre el daño esperado redondeado (hacia arriba). El TTK mide el intervalo entre el primer y el último golpe, por lo que usa (golpes - 1) / ataques por segundo. Si se elimina de un golpe, el TTK es 0 segundos.',
  },
  {
    question: '¿Por qué influye el orden de aplicación de la resistencia?',
    answer: 'Aplicar un modificador plano antes del porcentaje de resistencia también reduce ese valor plano. Aplicar la resistencia primero deja el modificador plano posterior intacto. El laboratorio expone ambos flujos porque distintos motores de juego eligen reglas diferentes.',
  },
  {
    question: '¿Una curva suave asegura que el juego esté equilibrado?',
    answer: 'No. Una curva revela zonas de daño cero, acantilados y saltos de efectividad, pero el equilibrio depende del contexto del encuentro, roles, ritmo e iteración en pruebas de juego. La herramienta ofrece datos numéricos y nunca un veredicto universal.',
  },
];

const howTo = [
  { name: 'Elegir dos fórmulas', text: 'Selecciona una plantilla de partida (lineal, ratio o escalado por nivel) o escribe tus propias fórmulas A y B.' },
  { name: 'Ajustar el estado de combate', text: 'Ingresa los valores de ataque, defensa, nivel, coeficiente de poder, porcentaje de resistencia, modificador plano, críticos, vida y cadencia.' },
  { name: 'Definir las reglas del motor', text: 'Configura cómo se redondea el daño y si la resistencia se aplica antes o después del modificador plano.' },
  { name: 'Analizar curvas y umbrales', text: 'Compara la trayectoria del impacto, el barrido de ataque, el mapa de calor defensivo, los golpes necesarios y los avisos de diagnóstico.' },
  { name: 'Preservar el experimento', text: 'Copia un enlace compartible o descarga la configuración en JSON, la tabla en CSV o la imagen PNG del gráfico.' },
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

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Escribe la regla de daño actual, coloca una alternativa al lado y ajusta el estado de combate. El laboratorio muestra cómo se comportan ambas fórmulas en los extremos de progresión.',
    localNote: 'Modelo de combate privado. Las fórmulas y archivos se mantienen en este navegador.',
    formulaDeck: 'Cámara de fórmulas',
    formulaALabel: 'Fórmula A (Modelo actual)',
    formulaBLabel: 'Fórmula B (Alternativa)',
    formulaHint: 'Variables: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Funciones seguras: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Protección lineal',
    presetRatio: 'Armadura por ratio',
    presetLevel: 'Escalado por nivel',
    combatInputs: 'Estado de combate',
    attackLabel: 'Ataque',
    defenseLabel: 'Defensa',
    levelLabel: 'Nivel',
    powerLabel: 'Coeficiente de poder',
    resistanceLabel: 'Porcentaje de resistencia',
    flatLabel: 'Modificador plano',
    criticalChanceLabel: 'Probabilidad de crítico (%)',
    criticalMultiplierLabel: 'Multiplicador de crítico',
    healthLabel: 'Vida del objetivo',
    cadenceLabel: 'Ataques por segundo',
    roundingLabel: 'Redondeo del daño',
    roundingNone: 'Conservar decimales',
    roundingFloor: 'Redondear hacia abajo (Floor)',
    roundingRound: 'Entero más cercano',
    roundingCeil: 'Redondear hacia arriba (Ceil)',
    orderLabel: 'Orden de modificadores',
    resistanceFirst: 'Resistencia y luego plano',
    flatFirst: 'Plano y luego resistencia',
    runLabel: 'Comparativa de impacto en vivo',
    resultDamage: 'Daño esperado',
    resultHits: 'Golpes para derrotar',
    resultTtk: 'Tiempo para derrotar (TTK)',
    resultDifference: 'Diferencia de daño',
    formulaAName: 'Actual',
    formulaBName: 'Alternativa',
    curveTitle: 'Trayectoria por nivel de ataque',
    curveCaption: 'El ataque se barre desde la mitad hasta el doble del valor actual mientras la defensa se mantiene fija.',
    heatmapTitle: 'Campo de presión',
    heatmapCaption: 'Cada celda muestra el daño esperado de la Fórmula A en combinaciones de ataque y defensa.',
    attackAxis: 'El ataque aumenta hacia la derecha',
    defenseAxis: 'La defensa aumenta hacia abajo',
    scenariosTitle: 'Siluetas de combate',
    scenarioSkirmisher: 'Hostigador',
    scenarioGuardian: 'Guardián',
    scenarioBoss: 'Jefe final',
    scenarioCustom: 'Ajuste actual',
    diagnosticsTitle: 'Puntos críticos y saltos',
    statusBalanced: 'No se detectan anomalías numéricas en este barrido. Esto no constituye un veredicto de equilibrio.',
    exportTitle: 'Exportar experimento',
    copyLink: 'Copiar enlace compartible',
    exportCsv: 'Descargar CSV',
    exportJson: 'Descargar JSON',
    importJson: 'Importar JSON',
    exportPng: 'Descargar gráfico PNG',
    reset: 'Restablecer modelo',
    privacyDisclosure: 'El enlace compartible guarda la configuración en el fragmento de la URL y no se envía a servidores.',
    limitationDisclosure: 'El daño crítico esperado es un promedio y no una simulación estocástica. Bloqueos de animación, recargas, fallos y estados no están incluidos.',
    importError: 'El archivo seleccionado no es una configuración válida del laboratorio de daño.',
    copiedStatus: 'Enlace compartible copiado al portapapeles.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Compara fórmulas de daño en juegos antes de integrarlas en tu motor',
    },
    {
      type: 'paragraph',
      html: 'Una fórmula de daño puede parecer equilibrada en un par concreto de ataque y defensa pero romperse en los extremos de la progresión. Este laboratorio evalúa dos fórmulas contra el mismo estado y analiza su comportamiento a lo largo de un rango controlado, asegurando que las anomalías sean visibles antes de programar las reglas.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Lenguaje de expresiones restringido y seguro',
    },
    {
      type: 'paragraph',
      html: 'El campo de fórmula acepta variables numéricas con nombre, operadores aritméticos y funciones matemáticas estándar. No evalúa código JavaScript ejecutable, evitando riesgos de seguridad y permitiendo la estabilidad de las gráficas.',
    },
    {
      type: 'table',
      headers: ['Métrica', 'Cálculo realizado', 'Pregunta de diseño'],
      rows: [
        ['Daño esperado', 'Fórmula base con factor de crítico esperado, orden de modificadores y redondeo', '¿La regla responde de forma coherente en personajes débiles y fuertes?'],
        ['Golpes para derrotar', 'Vida del objetivo dividida entre el daño redondeado (hacia arriba)', '¿Un solo punto de estadística elimina un golpe completo requerido?'],
        ['Tiempo para derrotar (TTK)', 'Intervalos entre golpes divididos entre los ataques por segundo', '¿La cadencia crea el ritmo de combate deseado?'],
        ['Campo de presión', 'Muestra de la Fórmula A en combinaciones de ataque y defensa', '¿Existen zonas muertas, acantilados o mesetas inesperadas?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Diferenciar la evidencia aritmética del veredicto de diseño',
    },
    {
      type: 'paragraph',
      html: 'Un gráfico limpio no demuestra por sí solo que un combate sea divertido o justo. Las relaciones numéricas adquieren significado al contrastarse con los roles de combate, la curva de nivel y las pruebas con jugadores.',
    },
    {
      type: 'tip',
      title: 'Examina tanto el daño por impacto como la cantidad de golpes',
      html: 'Un cambio pequeño en la cifra de daño puede parecer insignificante en la curva pero cruzar un umbral de vida y reducir un golpe entero. Compara siempre el daño con los golpes para derrotar y el TTK.',
    },
  ],
  faq,
  bibliographyTitle: 'Referencias de diseño de combate y matemáticas',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
