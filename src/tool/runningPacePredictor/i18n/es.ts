import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'calculadora-ritmos-running';
const title = 'Calculadora de Ritmos de Running y Predicción de Marcas';
const description =
  'Calcula ritmos de carrera, predice tiempos en 5K, 10K, Media Maratón y Maratón con la fórmula de Riegel, y genera zonas objetivo de entrenamiento.';

const faqData = [
  {
    question: '¿Qué precisión tiene la fórmula de Peter Riegel para predecir tiempos de maratón?',
    answer:
      'La fórmula de Peter Riegel T2 = T1 * (D2 / D1)^1.06 ofrece una alta precisión en corredores con buen fondo aeróbico. Para distancias largas como la maratón, la exactitud depende del volumen de kilometraje semanal, las tiradas largas superiores a 25km y la estrategia de nutrición.',
  },
  {
    question: '¿Cuál es la fórmula exacta para convertir min/km a min/milla?',
    answer:
      'Para convertir el ritmo de min/km a min/milla, se multiplican los segundos totales por kilómetro por 1.609344. Por ejemplo, un ritmo de 5:00 min/km (300 segundos) equivale a 482.8 segundos por milla, es decir, 8:03 min/milla.',
  },
  {
    question: '¿Por qué los tiempos predichos a veces son demasiado exigentes en maratón?',
    answer:
      'El exponente 1.06 asume un nivel de resistencia aeróbica óptimo. Si un corredor no tiene suficiente base de volumen, el desacople cardíaco y el agotamiento de glucógeno hacen que el tiempo real sea superior al estimado por Riegel.',
  },
  {
    question: '¿Cómo debo estructurar las zonas de ritmo para series y rodajes?',
    answer:
      'Las series (VO2 máx) deben realizarse entre el 95% y 105% del ritmo de 5K. los rodajes de ritmo controlado o tempo entre el 110% y 120%, y los rodajes suaves entre el 125% y 145% de dicho ritmo.',
  },
];

const howToData = [
  {
    name: 'Selecciona el Sistema de Unidades',
    text: 'Elige entre Sistema Métrico (kilómetros, min/km) o Imperial (millas, min/milla) mediante el selector superior.',
  },
  {
    name: 'Elige Distancia o Presets Rápidos',
    text: 'Haz clic en un chip de distancia de competición (5K, 10K, Media Maratón, 42K) o introduce la distancia personalizada.',
  },
  {
    name: 'Ajusta el Tiempo de Referencia',
    text: 'Usa los botones de ajuste (+1m, +5m, -1m, -5m) o introduce las horas, minutos y segundos de una carrera reciente.',
  },
  {
    name: 'Analiza Predicciones y Zonas',
    text: 'Consulta de forma inmediata tu ritmo medio, los tiempos estimados en distancias oficiales por la fórmula de Riegel y tus zonas de entrenamiento.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
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
      text: 'Principios Biomecánicos del Ritmo de Carrera y Predicción de Marcas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El cálculo del ritmo de carrera y la predicción de marcas en ruta requieren comprender los sistemas metabólicos de producción de energía, el reclutamiento de fibras musculares y la acumulación de fatiga a lo largo de la distancia. El rendimiento en carreras de fondo se fundamenta en el consumo máximo de oxígeno (VO2 máx), el umbral de lactato y la economía de carrera. Al pasar de pruebas cortas a maratón, la eficiencia biomecánica y la capacidad de almacenamiento de glucógeno muscular se convierten en factores limitantes clave.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Exponente Riegel' },
        { value: '4 Oficiales', label: 'Distancias Clave' },
        { value: '3 Vías', label: 'Cálculo Reactivo' },
        { value: '3 Niveles', label: 'Zonas Objetivo' },
      ],
    },
    {
      type: 'title',
      text: 'Fundamentos Matemáticos de la Fórmula de Riegel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Desarrollada por el ingeniero Peter Riegel en 1977, la fórmula T2 = T1 * (D2 / D1)^1.06 modela la caída de velocidad esperada a medida que aumenta la distancia. El exponente de fatiga de 1.06 refleja la degradación aeróbica promedio en atletas entrenados. En atletas de élite con una base aeróbica excepcional, el exponente puede situarse cerca de 1.03, mientras que en corredores novatos sin adaptación al volumen el factor de fatiga sube a valores entre 1.08 y 1.10.',
    },
    {
      type: 'title',
      text: 'Comparativa entre Sistema Métrico e Imperial',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sistema Métrico (min/km)',
          description: 'Unidad estándar en atletismo internacional y pruebas europeas. Permite controlar parciales exactos cada 1000 metros para una regulación precisa del ritmo y umbral anaeróbico.',
        },
        {
          title: 'Sistema Imperial (min/milla)',
          description: 'Unidad de referencia en carreras populares de Estados Unidos y Reino Unido. Una milla equivale a 1.609344 kilómetros, ofreciendo referencias de parciales más largos para maratón.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabla de Distancias Oficiales de Competición',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nombre de Prueba', 'Distancia Métric (km)', 'Distancia Imperial (mi)', 'Vía Energética Principal'],
      rows: [
        ['5K Carrera en Ruta', '5.00 km', '3.11 mi', '90% Aeróbica / 10% Anaeróbica Glicolítica'],
        ['10K Carrera en Ruta', '10.00 km', '6.21 mi', '95% Aeróbica / 5% Anaeróbica Glicolítica'],
        ['Media Maratón', '21.0975 km', '13.11 mi', '99% Aeróbica (Predominio de Umbral de Lactato)'],
        ['Maratón Completa', '42.195 km', '26.22 mi', '100% Aeróbica (Limitada por Oxidación de Grasas y Glucógeno)'],
      ],
    },
    {
      type: 'title',
      text: 'Estrategia de Dosificación y Negative Splitting',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Efectividad del Negative Split',
      html: 'Los análisis estadísticos de récords mundiales demuestran que correr la segunda mitad de la prueba ligeramente más rápido que la primera (negative split) optimiza el consumo metabólico. Salir un 2% más lento que el ritmo objetivo de Riegel evita la acidosis prematura y preserva las reservas de glucógeno.',
    },
    {
      type: 'title',
      text: 'Estructuración de Zonas de Entrenamiento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La estructuración científica del entrenamiento de resistencia exige una adecuada polarización de la intensidad. Los rodajes suaves estimulan la biogénesis mitocondrial, los rodajes tempo elevan la velocidad de aclarado de lactato y las series de alta intensidad amplían el techo del VO2 máx.',
    },
  ],
  ui: {
    title: 'Calculadora de Ritmos de Running y Predicción de Marcas',
    subtitle: 'Calcula ritmos y predice tiempos objetivo con la fórmula de Riegel',
    paceCalculatorTitle: 'Calculadora de Ritmo, Distancia y Tiempo',
    racePredictorTitle: 'Predicción de Marcas en Competición',
    trainingZonesTitle: 'Zonas Objetivo de Ritmo de Entrenamiento',
    distanceLabel: 'Distancia',
    timeLabel: 'Tiempo',
    paceLabel: 'Ritmo Medio',
    hoursLabel: 'Horas',
    minutesLabel: 'Minutos',
    secondsLabel: 'Segundos',
    unitKm: 'Kilómetros',
    unitMiles: 'Millas',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/milla',
    presetsTitle: 'Distancias Rápidas',
    calculateButton: 'Calcular Ritmo y Predicciones',
    resetButton: 'Reiniciar',
    recentRaceTitle: 'Marca de Referencia Reciente',
    predictedTimesTitle: 'Tiempos Estimados en Competición',
    distanceHeader: 'Distancia',
    estimatedTimeHeader: 'Tiempo Estimado',
    targetPaceHeader: 'Ritmo Objetivo',
    trainingZoneHeader: 'Zona de Entrenamiento',
    paceRangeHeader: 'Rango de Ritmo',
    zoneEasy: 'Rodaje Suave y Recuperación',
    zoneEasyDesc: 'Construcción de base aeróbica y regeneración',
    zoneTempo: 'Tempo y Fartlek',
    zoneTempoDesc: 'Mejora del umbral anaeróbico y ritmo de competición sostenido',
    zoneIntervals: 'Series e Intervalos',
    zoneIntervalsDesc: 'Desarrollo de VO2 máx y tolerancia a la velocidad',
    riegelExplanation: 'Las predicciones aplican la Fórmula de Riegel T2 = T1 * (D2 / D1)^1.06 según tu marca reciente.',
    seo: {
      title: 'Calculadora de Ritmos de Running y Predicción de Marcas',
      description: 'Calcula tu ritmo de carrera, estima tiempos en 5K, 10K, Media Maratón y Maratón con la fórmula de Riegel y genera zonas objetivo de entrenamiento.',
      h1: 'Calculadora de Ritmos de Running y Predicción de Marcas',
      intro: 'El cálculo preciso del ritmo de carrera y la predicción de tiempos son herramientas fundamentales para corredores de fondo. Esta herramienta convierte tiempo, distancia y ritmo estimando tu rendimiento.',
      statsTitle: 'Métricas de Rendimiento Aeróbico',
      stat1Label: 'Exponente Riegel',
      stat1Value: '1.06',
      stat2Label: 'Distancias Clave',
      stat2Value: '4 Oficiales',
      stat3Label: 'Cálculo de Ritmo',
      stat3Value: '3 Vías',
      stat4Label: 'Zonas de Entreno',
      stat4Value: '3 Niveles',
      comparativeTitle: 'Comparativa de Unidades de Ritmo',
      comparativeItem1Title: 'Sistema Métrico (min/km)',
      comparativeItem1Desc: 'Medición estándar internacional enfocada en parciales de 1000 metros.',
      comparativeItem2Title: 'Sistema Imperial (min/milla)',
      comparativeItem2Desc: 'Medición habitual en pruebas anglosajonas, donde 1 milla equivale a 1.60934 kilómetros.',
      tableTitle: 'Resumen de Distancias Oficiales',
      tableCol1: 'Prueba',
      tableCol2: 'Kilómetros',
      tableCol3: 'Millas',
      tableRow1Col1: 'Carrera 5K',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: 'Carrera 10K',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Media Maratón',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Recomendación de Estrategia de Ritmo',
      tipText: 'Evita salir a un ritmo superior al objetivo Riegel. Correr la segunda mitad ligeramente más rápido (negative split) optimiza el consumo metabólico.',
      faqTitle: 'Preguntas Frecuentes',
      faq1Q: '¿Qué precisión tiene la fórmula de Riegel para maratón?',
      faq1A: 'Asume un entrenamiento aeróbico adecuado. En maratón, el tiempo final depende del volumen semanal de kilómetros y la nutrición.',
      faq2Q: '¿Cuál es la diferencia entre min/km y min/milla?',
      faq2A: 'Min/km indica los minutos por kilómetro y min/milla por milla. Multiplica min/km por 1.60934 para obtener min/milla.',
      glossaryTitle: 'Glosario de Running',
      term1Name: 'Fórmula de Riegel',
      term1Def: 'Fórmula matemática desarrollada por Peter Riegel para predecir tiempos en carreras de fondo.',
      term2Name: 'Umbral de Lactato',
      term2Def: 'Intensidad a partir de la cual el lactato se acumula en sangre más rápido de lo que se elimina.',
    },
  },
};
