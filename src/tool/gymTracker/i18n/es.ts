import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'seguimiento-entrenamiento-gym';
const title = 'Seguimiento de Entrenamiento Gym: Gráficas de Progreso y Fuerza';
const description =
  'Registra tus levantamientos, selecciona el ejercicio y visualiza tu avance con gráficas de fuerza. Optimiza tu sobrecarga progresiva en el gimnasio.';

const faqData = [
  {
    question: '¿Para qué sirve el seguimiento de entrenamiento?',
    answer:
      'Sirve para aplicar la sobrecarga progresiva de manera científica. Al saber exactamente cuánto levantaste la sesión anterior, puedes intentar superar esa marca, lo que garantiza el crecimiento muscular y la ganancia de fuerza a largo plazo.'
  },
  {
    question: '¿Qué datos debo registrar?',
    answer:
      'Lo más importante es el peso máximo (top set) que has logrado mover con buena técnica para un número determinado de repeticiones. Nuestra herramienta se enfoca en registrar el peso por sesión para generar tu gráfica de progreso.'
  },
  {
    question: '¿Cómo se interpretan las gráficas?',
    answer:
      'Una línea ascendente indica que estás progresando. Una línea plana (meseta) sugiere que necesitas ajustar tu volumen, intensidad o recuperación. Una línea descendente persistente puede ser señal de sobreentrenamiento.'
  },
  {
    question: '¿Dónde se guardan mis datos?',
    answer:
      'Los datos se guardan de forma local en tu navegador (Local Storage). Esto significa que tu privacidad es total y no necesitas crear una cuenta, pero si borras los datos del navegador, el historial se perderá.'
  },
];

const howToData = [
  {
    name: 'Selecciona el ejercicio',
    text: 'Elige entre los levantamientos fundamentales como Sentadilla, Press de Banca o Peso Muerto en el menú desplegable.'
  },
  {
    name: 'Introduce el peso',
    text: 'Después de tu serie más pesada, introduce los kilogramos levantados en el campo correspondiente.'
  },
  {
    name: 'Pulsa Añadir',
    text: 'Guarda tu marca. El sistema actualizará automáticamente tu historial y la gráfica de progreso.'
  },
  {
    name: 'Analiza tu evolución',
    text: 'Consulta la gráfica periódicamente para identificar mesetas y motivarte al ver tu crecimiento real en fuerza.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es'
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Seguimiento de Entrenamiento en el Gimnasio: La Clave para el Progreso Real',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'En el mundo del fitness y el culturismo, existe un principio fundamental que separa a quienes obtienen resultados asombrosos de quienes se estancan rápidamente: la <strong>sobrecarga progresiva</strong>. Sin embargo, es imposible aplicar este principio de manera efectiva si no llevas un registro detallado de tus levantamientos. En esta guía, exploraremos por qué el seguimiento de tu entrenamiento es vital, cómo utilizar nuestra herramienta de <strong>seguimiento de entrenamiento gym</strong> para maximizar tus ganancias y los fundamentos científicos que respaldan esta práctica.'
    },
    {
      type: 'title',
      text: '¿Qué es la Sobrecarga Progresiva?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La sobrecarga progresiva es el aumento gradual del estrés aplicado al cuerpo durante el ejercicio físico. Para que un músculo crezca o se fortalezca, debe ser sometido a un estímulo mayor al que está acostumbrado. Si vas al gimnasio y levantas siempre el mismo peso, con las mismas repeticiones y el mismo tiempo de descanso, tu cuerpo no tendrá ninguna razón biológica para adaptarse y crecer.'
    },
    {
      type: 'list',
      items: [
        'Aumento del peso: Levantar más kilos que la sesión anterior.',
        'Aumento de repeticiones: Hacer más repeticiones con el mismo peso.',
        'Aumento del volumen: Realizar más series totales por grupo muscular.',
        'Reducción del descanso: Hacer el mismo trabajo en menos tiempo.',
        'Mejora de la técnica: Realizar el ejercicio con control superior y mayor rango de movimiento.',
      ]
    },
    {
      type: 'title',
      text: 'Por qué el Registro Manual es Superior a la Memoria',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Muchos deportistas cometen el error de confiar en su memoria para recordar cuánto levantaron la semana pasada. Sin embargo, en un entrenamiento típico que incluye entre 5 y 10 ejercicios diferentes, es muy fácil olvidar si hiciste 80 kg o 82.5 kg en la prensa, o si lograste 10 repeticiones o 12. Esta falta de precisión conduce a la mediocridad.'
    },
    {
      type: 'tip',
      title: 'El Poder de Visualizar el Progreso',
      html: 'Ver una línea ascendente en un gráfico te da el impulso necesario para intentar esa repetición extra que marca la diferencia entre estancamiento y crecimiento muscular consistente.'
    },
    {
      type: 'title',
      text: 'Los Ejercicios Fundamentales para el Seguimiento',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Si bien todos los ejercicios son valiosos, hay ciertos levantamientos compuestos que ofrecen la mejor visión de tu fuerza general y desarrollo físico. Estos son los que deberías priorizar en tu seguimiento: <strong>Press de Banca</strong> para empuje horizontal, <strong>Press Militar</strong> para empuje vertical, <strong>Dominadas</strong> para tracción y <strong>Hip Thrust</strong> para glúteos.'
    },
    {
      type: 'title',
      text: 'Cómo Analizar tus Gráficas de Progreso',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Una vez que hayas registrado varios entrenamientos, empezarás a ver patrones: una <strong>línea ascendente constante</strong> indica el camino correcto, una <strong>meseta</strong> sugiere que necesitas ajustar tu volumen o descanso, y una <strong>tendencia a la baja</strong> puede ser señal de fatiga acumulada.'
    },
    {
      type: 'title',
      text: 'La Psicología del Éxito en el Gimnasio',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Entrenar es tanto un reto mental como físico. Al usar una herramienta visual que te muestra que hoy eres un 1% más fuerte que hace quince días, estás alimentando tu sistema de recompensa de dopamina. Esto crea un bucle de retroalimentación positiva que convierte el entrenamiento en un hábito sostenible.'
    },
  ],
  ui: {
    exerciseLabel: 'Ejercicio',
    pushCategory: 'Empuje',
    pullCategory: 'Tracción',
    gluteCategory: 'Glúteo',
    customExerciseCategory: 'Personalizados',
    addCustomExercisetitle: 'Agregar ejercicio personalizado',
    newExerciseLabel: 'Nuevo ejercicio',
    exercisePlaceholder: 'Nombre del ejercicio...',
    addBtn: 'Añadir',
    registerWeightLabel: 'Registrar Peso (KG)',
    weightPlaceholder: '00.0',
    startBtn: 'Empezar',
    resetBtn: 'Reiniciar',
    okBtn: 'OK',
    noData: 'Sin datos',
    recordLabel: 'Récord',
    lastLabel: 'Último',
    historyTitle: 'Logs',
    exportBtn: 'Exportar',
    confirmDeletetitle: '¿Borrar historial?',
    confirmDeleteText: 'Esta acción no se puede deshacer. Se eliminarán todos los registros del ejercicio seleccionado.',
    deleteBtn: 'Borrar',
    cancelBtn: 'Cancelar',
    units: 'kg',
    
    benchPress: 'Press de Banca',
    overheadPress: 'Press Militar',
    pushPress: 'Push Press',
    inclineDbPress: 'Press Inclinado con Mancuernas',
    dipsTriceps: 'Fondos de Tríceps',
    tricepsExtensions: 'Extensiones de Tríceps en Polea',
    pullUp: 'Dominadas',
    barbellRow: 'Remo con Barra',
    latPulldown: 'Jalón al Pecho',
    dbRow: 'Remo con Mancuerna',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Curl de Bíceps con Barra',
    hipThrust: 'Hip Thrust',
    rdl: 'Peso Muerto Rumano',
    lunges: 'Zancadas',
    gluteKick: 'Patada de Glúteo en Polea',
    hipAbduction: 'Abducción de Cadera en Máquina',
    stepUp: 'Step Up'
  }
};
