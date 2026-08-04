import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'calculadora-css-natacion';
const title = 'Calculadora de CSS Natacion Velocidad Critica';
const description = 'Calcula tu velocidad critica de natacion CSS ritmo umbral por 100m o 100yd a partir de test de 400m y 200m en piscina.';

const faqData = [
  {
    question: '¿Con que frecuencia se debe realizar el test de CSS en natacion?',
    answer: 'Se recomienda realizar el protocolo de test de 400m y 200m cada 4 a 6 semanas durante el macrociclo de entrenamiento para ajustar los ritmos objetivo.',
  },
  {
    question: '¿Se puede calcular el CSS en piscinas de yardas?',
    answer: 'Si. La formula matematica de velocidad critica se aplica exactamente igual en piscinas cortas de yardas. Cambia el selector a yardas para obtener ritmos por cada 100 yardas.',
  },
];

const howToData = [
  {
    name: 'Selecciona el sistema de medida de la piscina',
    text: 'Elige entre Metrico (metros en piscina de 25m o 50m) o Imperial (yardas en piscina de 25yd) usando el conmutador superior.',
  },
  {
    name: 'Introduce el tiempo del test de 400m',
    text: 'Ingresa los minutos y segundos registrados en tu test de 400 metros a maxima intensidad.',
  },
  {
    name: 'Introduce el tiempo del test de 200m',
    text: 'Ingresa los minutos y segundos registrados en tu test de 200 metros a maxima intensidad.',
  },
  {
    name: 'Calcula y revisa los tiempos de paso',
    text: 'Haz clic en Calcular para ver tu velocidad aeróbica y la matriz de tiempos de paso por 50, 100, 200 y 400 metros.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

const ui: SwimCssCalculatorUI = {
  title: 'Calculadora de Velocidad Critica de Natacion CSS',
  subtitle: 'Calcula tu ritmo umbral aeróbico por 100 metros y matriz de tiempos de paso por zonas.',
  unitLabel: 'Unidad de la piscina',
  unitMeters: 'Metros (Piscina de 25m / 50m)',
  unitYards: 'Yardas (Piscina de 25yd)',
  t400Label: 'Test de 400m / 400yd',
  t200Label: 'Test de 200m / 200yd',
  minutesLabel: 'Minutos',
  secondsLabel: 'Segundos',
  calculateButton: 'Calcular CSS y Tiempos de Paso',
  resetButton: 'Restablecer Valores',
  cssResultTitle: 'Resultados de Velocidad Critica de Natacion',
  cssSpeedLabel: 'Velocidad Aeróbica',
  cssPace100Label: 'Ritmo CSS por 100',
  lapPaceLabel: 'Objetivo por Largo de 25m / 25yd',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Matriz de Ritmos de Entrenamiento en Piscina',
  zoneHeader: 'Zona de Intensidad',
  pace100Header: 'Ritmo Objetivo / 100',
  split50Header: 'Paso 50',
  split100Header: 'Paso 100',
  split200Header: 'Paso 200',
  split400Header: 'Paso 400',
  zoneAerobic: 'Resistencia Aeróbica',
  zoneAerobicDesc: 'Para series largas aeróbicas y calentamiento (~104% ritmo CSS)',
  zoneAerobicRest: 'Descanso: 10s - 15s por serie',
  zoneCss: 'Umbral CSS',
  zoneCssDesc: 'Ritmo objetivo para series de umbral y ritmo de carrera (~100% ritmo CSS)',
  zoneCssRest: 'Descanso: 15s - 20s por serie',
  zoneVo2Max: 'Velocidad VO2 Max',
  zoneVo2MaxDesc: 'Entrenamiento de intervalos de alta intensidad (~96% ritmo CSS)',
  zoneVo2MaxRest: 'Descanso: 30s - 45s por serie',
  invalidNotice: 'El tiempo del test de 400m debe ser estrictamente mayor que el tiempo de 200m.',
  copySplitsButton: 'Copiar Tiempos de Paso',
  copiedNotice: 'Tiempos de paso copiados',
  seo: {
    title: 'Calculadora de CSS Natacion Velocidad Critica Ritmos de Nado',
    description: 'Calcula tu velocidad critica de natacion CSS ritmo umbral por 100m o 100yd a partir de test de 400m y 200m en piscina.',
    h1: 'Calculadora de Velocidad Critica de Natacion y Ritmos de Nado',
    intro: 'La Velocidad Critica de Natacion es la métrica estándar empleada por nadadores y triatletas para estructurar entrenamientos en piscina basados en el umbral aeróbico funcional.',
    statsTitle: 'Indicadores Clave de Rendimiento',
    stat1Label: 'Test de Referencia 1',
    stat1Value: '400m a Maxima Intensidad',
    stat2Label: 'Test de Referencia 2',
    stat2Value: '200m a Maxima Intensidad',
    stat3Label: 'Indicador de Umbral',
    stat3Value: 'Ritmo Base 100m CSS',
    stat4Label: 'Aplicación Práctica',
    stat4Value: 'Tiempos de Paso Cronometro',
    comparativeTitle: 'Enfoque CSS frente a Zonas de Frecuencia Cardiaca',
    comparativeItem1Title: 'Metodologia Velocidad Critica CSS',
    comparativeItem1Desc: 'Mide la velocidad de propulsión real en agua directamente a partir del rendimiento sin interferencias de sensores cardiacos.',
    comparativeItem2Title: 'Frecuencia Cardiaca Convencional',
    comparativeItem2Desc: 'Sufre retardos de lectura en el agua y no refleja los cambios en la técnica de nado bajo fatiga acumulada.',
    tableTitle: 'Desglose de Zonas de Intensidad y Tiempos de Paso',
    tableCol1: 'Zona de Entrenamiento',
    tableCol2: 'Adaptación Fisiológica Principal',
    tableCol3: 'Distancias Recomendadas',
    tableRow1Col1: 'Resistencia Aeróbica',
    tableRow1Col2: 'Capilarización y optimización del metabolismo de grasas.',
    tableRow1Col3: 'Repeticiones de 400m a 800m con descansos cortos de 10 a 15 segundos.',
    tableRow2Col1: 'Umbral CSS',
    tableRow2Col2: 'Capacidad de aclarado de lactato y potencia aeróbica.',
    tableRow2Col3: 'Repeticiones de 100m a 300m con descansos de 15 a 20 segundos.',
    tableRow3Col1: 'Velocidad VO2 Max',
    tableRow3Col2: 'Consumo máximo de oxígeno y frecuencia de brazada.',
    tableRow3Col3: 'Intervalos de 50m a 100m con descansos más amplios.',
    tipTitle: 'Consejo de Entrenamiento para la Prueba',
    tipText: 'Dosifica el ritmo en el test de 400m para evitar acumulación prematura de lactato en los primeros 100 metros.',
    faqTitle: 'Preguntas Frecuentes sobre Velocidad Critica de Natacion',
    faq1Q: '¿Cada cuanto tiempo se debe evaluar el CSS?',
    faq1A: 'Se recomienda reevaluar cada 4 a 6 semanas durante el ciclo de entrenamiento.',
    faq2Q: '¿Se puede aplicar en piscinas de yardas?',
    faq2A: 'Si. La formula matematica es idéntica para piscinas en yardas.',
    glossaryTitle: 'Glosario de Fisiologia de Natacion',
    term1Name: 'Velocidad Critica de Natacion',
    term1Def: 'La velocidad máxima teórica mantenible de forma continua sin agotamiento inmediato.',
    term2Name: 'Tiempo de Paso',
    term2Def: 'El tiempo de paso a marcar en el cronómetro de la piscina en los virajes.',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Principios Biomecanicos de la Velocidad Critica en Natacion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La Velocidad Critica de Natacion representa la pendiente de la relación lineal entre la distancia nadada y el tiempo empleado. Desarrollada por Wakayoshi, esta métrica aísla la capacidad aeróbica restando el esfuerzo de 200 metros al de 400 metros.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m y 200m', label: 'Par de Test Estándar' },
        { value: 'Base 100m', label: 'Estándar de Ritmo' },
        { value: '3 Zonas', label: 'Matriz de Intensidad' },
        { value: '4 Pasos', label: 'Tiempos de Cronómetro' },
      ],
    },
    {
      type: 'title',
      text: 'Ritmo CSS frente a Frecuencia Cardiaca en Agua',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ritmo Directo en Agua CSS',
          description: 'Mide la velocidad real de desplazamiento incluyendo la eficacia de virajes y la hidrodinámica.',
        },
        {
          title: 'Monitorizacion Cardiaca en Agua',
          description: 'Sufre retardo por derivada cardiaca y problemas de estanqueidad en los sensores.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabla de Zonas de Intensidad y Tiempos de Descanso',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Zona de Nado', 'Ritmo Relativo a CSS', 'Objetivo Principal', 'Descanso Sugerido'],
      rows: [
        ['Resistencia Aeróbica', '104% del tiempo CSS', 'Eficiencia metabólica aeróbica', '10 a 15 segundos'],
        ['Umbral CSS', '100% del tiempo CSS', 'Aclarado de lactato y ritmo de prueba', '15 a 20 segundos'],
        ['Velocidad VO2 Max', '96% del tiempo CSS', 'Potencia aeróbica máxima', '30 a 45 segundos'],
      ],
    },
    {
      type: 'title',
      text: 'Estrategia de Ejecución en Series de Piscina',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Consejo para Mantener el Ritmo Objetivo',
      html: 'Mantén de forma estricta el tiempo de paso en cada 50 metros. Salir 2 segundos más rápido al inicio agota los depósitos glucogénicos prematuramente.',
    },
  ],
  ui,
};
