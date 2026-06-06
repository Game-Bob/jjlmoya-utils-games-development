import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'marcador-streetball-3x3';
const title = 'Marcador Premium de Streetball 3x3 con Reloj de Tiro';
const description = 'Controla los marcadores de streetball FIBA 3x3 con un reloj de tiro de 12 segundos integrado, faltas por equipo, puntos de muerte súbita e indicadores visuales de media cancha.';

const faq = [
  {
    question: '¿Cómo funciona el reloj de tiro de 12 segundos en el streetball 3x3?',
    answer: 'En FIBA 3x3, los equipos tienen solo 12 segundos para intentar un tiro una vez que obtienen la posesión. El reloj de tiro se reinicia a 12 en cambios de posesión o a 14 segundos en rebotes ofensivos y faltas bajo condiciones específicas.',
  },
  {
    question: '¿Cuál es el límite de puntos para la muerte súbita en baloncesto 3x3?',
    answer: 'El primer equipo en anotar 21 puntos gana el partido de inmediato, sin importar el tiempo restante en el reloj de juego. Esta es la regla de muerte súbita.',
  },
  {
    question: '¿Cómo afectan las faltas por equipo al partido?',
    answer: 'A partir de la 7.ª falta del equipo, los rivales reciben 2 tiros libres. En la 10.ª falta y las siguientes, obtienen 2 tiros libres más posesión del balón, activando el estado de penalización.',
  },
];

const howTo = [
  {
    name: 'Configurar nombres de equipos',
    text: 'Ingresa nombres personalizados para los dos equipos de streetball y personaliza la pantalla.',
  },
  {
    name: 'Registrar puntos y posesión',
    text: 'Toca la cancha de asfalto interactiva para sumar 1 punto (dentro del arco) o 2 puntos (fuera del arco) y alterna el indicador de posesión.',
  },
  {
    name: 'Controlar el reloj de tiro',
    text: 'Toca el reloj de tiro para reiniciarlo a 12, haz clic en el reinicio secundario para 14, o toca dos veces para pausar la cuenta atrás.',
  },
  {
    name: 'Gestionar faltas del equipo',
    text: 'Lleva la cuenta de las faltas de equipo con el contador, que se vuelve rojo al entrar en estado de penalización (7+ faltas).',
  },
];

const faqSchema: WithContext<FAQPage> = {
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
  description,
  step: howTo.map((step, i) => ({
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

export const content: StreetballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Marcador gratuito de streetball 3x3 online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar la puntuación en partidos rápidos de baloncesto 3x3 puede ser complicado mientras gestionas un reloj de tiro corto y controlas las faltas del equipo. Este marcador gratuito de streetball 3x3 online ofrece un diseño industrial de asfalto con estilo neón de alto contraste. Maneja automáticamente el reloj de tiro de 12 segundos, el reloj de partido, el sistema de penalización por faltas y los indicadores de posesión.',
    },
    {
      type: 'title',
      text: 'Reglas de puntuación y reloj de tiro en FIBA 3x3 Streetball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El streetball FIBA 3x3 se diferencia del baloncesto tradicional 5x5. Los partidos duran un período de 10 minutos o terminan al instante cuando un equipo alcanza 21 puntos (muerte súbita). Los tiros dentro del arco y los tiros libres valen 1 punto, mientras que los tiros desde detrás del arco de 6,75 m valen 2 puntos. El reloj de tiro de 12 segundos obliga a jugadas ofensivas rápidas y los jugadores deben sacar el balón detrás del arco tras un cambio de posesión.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partidos informales',
          description: 'Lleva la cuenta rápida en baloncesto callejero con amigos en canchas locales.',
          icon: 'mdi:basketball',
          points: ['Pulsadores de punto simples', 'Diseño adaptable', 'Funciona sin conexión'],
        },
        {
          title: 'Torneos oficiales',
          description: 'Perfecto para torneos oficiales de 3x3 y ligas de streetball.',
          icon: 'mdi:trophy-outline',
          points: ['Cuenta atrás de 10 min', 'Muerte súbita a 21 pts', 'Estados de penalización'],
        },
        {
          title: 'Panel de árbitro',
          description: 'Diseñado para que los árbitros gestionen reinicios rápidos del reloj de tiro y la posesión.',
          icon: 'mdi:school',
          points: ['Reinicios a 12s y 14s', 'Sonido de bocina', 'Gestos táctiles en botones'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Controles interactivos y animaciones táctiles',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Reloj de tiro de 12 segundos</strong> parpadea en rojo y muestra decimales por debajo de 4 segundos, seguido de una bocina simulada.',
        '<strong>Media cancha de hormigón interactiva</strong> permite tocar las zonas de 1 y 2 puntos para anotar directamente sobre el diagrama.',
        '<strong>Aviso de faltas</strong> se vuelve rojo y vibra para indicar penalizaciones por faltas del equipo (7+ y 10+ faltas).',
        '<strong>Indicador de despeje de balón</strong> muestra un recordatorio cuando cambia la posesión hasta que el balón se despeja detrás del arco.',
        '<strong>Control de tiempos muertos</strong> activa una cuenta atrás de 30 segundos con avisos sonoros personalizados.',
      ],
    },
    {
      type: 'title',
      text: '¿Por qué usar un marcador digital de streetball?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un marcador digital elimina las discusiones sobre puntos, faltas o violaciones del reloj de tiro en la cancha. Los números neón brillantes se leen fácilmente desde lejos, y los recordatorios automáticos de posesión y despeje aseguran que el partido fluya sin interrupciones.',
    },
  ],
  ui: {
    teamA: 'Equipo 1',
    teamB: 'Equipo 2',
    points: 'Puntos',
    fouls: 'Faltas',
    timeouts: 'Tiempos',
    shotClock: 'Reloj de tiro',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar el partido? Se perderán todos los datos.',
    cancel: 'Cancelar',
    gameTime: 'Tiempo',
    possession: 'Posesión',
    clearBall: 'Despejar balón',
    matchWon: 'Partido ganado',
    timeoutActive: 'Tiempo muerto',
    penalty: 'Penalización',
    fullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
    overtime: 'Prórroga',
    ptsInside: '+1 Punto',
    ptsOutside: '+2 Puntos',
    toggleSound: 'Activar sonido',
    soundOn: 'Sonido activado',
    soundOff: 'Sonido desactivado',
  },
};
