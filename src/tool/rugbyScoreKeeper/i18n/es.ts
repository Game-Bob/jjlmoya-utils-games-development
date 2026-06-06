import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'marcador-de-rugby';
const title = 'Marcador de Rugby con Cronómetros de Castigo y Reloj de Partido';
const description = 'Sigue los resultados en vivo de partidos de rugby con registro de ensayos, conversiones, penaltis y drops. Gestiona los cronómetros de castigo y los tiempos de cada tiempo con un marcador interactivo de estadio.';

const faqData = [
  {
    question: '¿Cómo se anotan puntos en un partido de rugby union?',
    answer: 'Un ensayo vale 5 puntos y se concede cuando un jugador apoya el balón en el área de meta contraria. El golpe de castigo tras un ensayo vale 2 puntos. Los penaltis y los drops valen 3 puntos cada uno.',
  },
  {
    question: '¿Qué ocurre cuando un jugador recibe una tarjeta amarilla en rugby?',
    answer: 'Una tarjeta amarilla implica una suspensión temporal. El jugador debe abandonar el campo durante 10 minutos de tiempo de juego activo. Su equipo juega con un jugador menos durante este periodo. El cronómetro de castigo solo cuenta mientras el reloj de partido está en marcha.',
  },
  {
    question: '¿Cuánto dura un partido de rugby union?',
    answer: 'Un partido estándar de rugby union consta de dos tiempos de 40 minutos con un descanso de 10 minutos. El reloj se detiene durante lesiones e incidentes graves. Se puede añadir tiempo adicional por interrupciones.',
  },
];

const howToData = [
  {
    name: 'Registrar Anotaciones',
    text: 'Toca los botones de Ensayo, Conversión, Penalti o Drop para registrar puntos. Después de marcar un ensayo, el botón de Conversión se ilumina automáticamente.',
  },
  {
    name: 'Gestionar Castigos',
    text: 'Toca Tarjeta Amarilla para enviar a un jugador al castigo. Introduce su nombre o número y un cronómetro de 10 minutos se inicia automáticamente.',
  },
  {
    name: 'Controlar el Tiempo de Partido',
    text: 'Usa el reloj de partido para gestionar dos tiempos de 40 minutos. Pausa el reloj durante lesiones y reanúdalo cuando el juego se reanude.',
  },
  {
    name: 'Seguir la Evolución del Marcador',
    text: 'Supervisa el marcador en vivo con los puntos locales y visitantes. Consulta el resumen de anotaciones para ver el desglose de ensayos, conversiones, penaltis y drops.',
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
    image: undefined,
    url: undefined,
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Marcador de Rugby Online Gratuito con Seguimiento en Vivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toma el control del marcador de tu partido de rugby con nuestro marcador digital interactivo. Registra ensayos, conversiones, penaltis y drops en tiempo real. El sistema de gestión de castigos descuenta automáticamente las suspensiones de los jugadores y el reloj de partido mantiene ambos tiempos perfectamente cronometrados. Ya sea que estés arbitrando un partido de club local o entrenando a un equipo juvenil, esta herramienta gestiona todos los detalles de puntuación y tiempo automáticamente.',
    },
    {
      type: 'title',
      text: 'Sistema de Puntuación del Rugby Union Explicado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El rugby union ofrece cuatro formas de anotar puntos, cada una requiriendo diferentes habilidades y estrategias. El ensayo es la jugada de ataque más valiosa, premiando a los equipos por romper la línea defensiva y apoyar el balón en la zona de ensayo. Tras un ensayo, el equipo anotador intenta un golpe de castigo por dos puntos adicionales. Los penaltis y los drops añaden profundidad táctica, permitiendo a los equipos anotar desde juego abierto o tras infracciones del rival.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Ensayo',
          description: 'Apoya el balón en la zona de marca para obtener cinco puntos.',
          icon: 'mdi:rugby',
          points: ['Cinco puntos', 'Prepara el intento de conversión', 'Requiere apoyar el balón'],
        },
        {
          title: 'Conversión',
          description: 'Patea entre los palos tras un ensayo para dos puntos.',
          icon: 'mdi:goal',
          points: ['Dos puntos si acierta', 'Se patea desde la posición del ensayo', 'Debe superar el larguero'],
        },
        {
          title: 'Penalti',
          description: 'Patea a palos tras infracción rival para tres puntos.',
          icon: 'mdi:alert-octagon',
          points: ['Tres puntos', 'Se puede patear o tocar', 'Suele decidir partidos ajustados'],
        },
        {
          title: 'Drop',
          description: 'Golpea el balón de botepronto entre los palos durante el juego para tres puntos.',
          icon: 'mdi:circle-outline',
          points: ['Tres puntos', 'El balón debe tocar el suelo primero', 'Golpe ganador de alta presión'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo Funciona el Sistema de Castigo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El castigo es un sistema de suspensión temporal por infracciones peligrosas o reiteradas. Cuando un árbitro muestra una tarjeta amarilla, el jugador debe abandonar el campo durante diez minutos de juego activo. Durante ese tiempo, su equipo juega con un jugador menos, creando una ventaja numérica para el equipo contrario. El cronómetro de castigo solo cuenta mientras el reloj de partido está en marcha, garantizando una aplicación justa independientemente de las interrupciones.',
    },
    {
      type: 'list',
      items: [
        '<strong>Penalización de Tarjeta Amarilla:</strong> Diez minutos de castigo por juego peligroso o infracciones reiteradas del equipo.',
        '<strong>Desventaja Numérica:</strong> El equipo infractor juega con 14 jugadores en lugar de 15 durante el periodo de suspensión.',
        '<strong>Regreso Automático:</strong> Cuando el tiempo expira, el jugador se reincorpora automáticamente desde la línea de medio campo.',
        '<strong>Expulsión por Tarjeta Roja:</strong> Una segunda tarjeta amarilla o una infracción grave resulta en tarjeta roja y expulsión definitiva.',
      ],
    },
    {
      type: 'title',
      text: 'Gestión del Tiempo de Partido y los Periodos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un partido estándar de rugby union se divide en dos tiempos de 40 minutos con un descanso de 10 minutos. El reloj de partido corre de forma continua durante el juego activo, pero el árbitro puede pausarlo por lesiones, revisiones de juego peligroso u otras interrupciones. Este marcador digital incluye un reloj de partido preciso con controles de pausa y reanudación, seguimiento automático de los tiempos e indicadores visuales claros para cada periodo de juego.',
    },
    {
      type: 'title',
      text: 'Por Qué Usar un Marcador Digital de Rugby',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El marcaje manual en rugby es complicado por la variedad de métodos de puntuación, la gestión de los tiempos de castigo y el control de los periodos. Esta herramienta de navegador proporciona puntuación precisa en tiempo real, descuentos automáticos de castigo y cronometraje exacto del partido. Los entrenadores pueden centrarse en la estrategia del juego en lugar de en las cuentas, los árbitros disponen de un sistema de respaldo fiable y los jugadores pueden verificar el estado del partido de un vistazo.',
    },
  ],
  ui: {
    title: 'Marcador de Rugby',
    description: 'Sigue los resultados del partido y los cronómetros de castigo.',
    home: 'Local',
    away: 'Visitante',
    score: 'Marcador',
    tryLabel: 'Ensayo +5',
    conversion: 'Conversión +2',
    penalty: 'Penalti +3',
    dropGoal: 'Drop +3',
    conversionYes: 'Sí',
    conversionNo: 'No',
    sinBin: 'Tarjeta Amarilla',
    sinBinTitle: 'Suspensión de Castigo',
    sinBinPlayer: 'Nombre o número del jugador:',
    sinBinAdd: 'Iniciar Suspensión',
    sinBinEmpty: 'Sin suspensiones activas',
    sinBinReturn: 'Regresó',
    matchClock: 'Reloj de Partido',
    half: 'Tiempo',
    half1: 'Primer Tiempo',
    half2: 'Segundo Tiempo',
    startMatch: 'Saque Inicial',
    pauseMatch: 'Pausa',
    resumeMatch: 'Reanudar',
    resetMatch: 'Reiniciar Partido',
    resetConfirm: '¿Reiniciar el partido actual? Se perderán todos los puntos y cronómetros.',
    cancel: 'Cancelar',
    confirm: 'Confirmar Reinicio',
    period: 'Periodo',
    scoringSummary: 'Resumen de Anotaciones',
    tryScored: 'Ensayos',
    conversionSuccess: 'Conversiones',
    conversionMiss: 'Conversiones Falladas',
    penaltyScored: 'Penaltis',
    dropGoalScored: 'Drops',
    totalPoints: 'Total',
    fullscreen: 'Pantalla Completa',
    toggleSound: 'Activar Sonido',
    eventLog: 'Historial de Eventos',
    eventEmpty: 'Aún no hay eventos',
    undoBtn: 'Deshacer Último',
    timeOff: 'Tiempo Detenido',
    timeOn: 'Tiempo en Marcha',
  },
};
