import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'marcador-de-snooker-calculador-de-breaks';
const title = 'Marcador de Snooker y Calculador de Breaks';
const description = 'Sigue las puntuaciones de frames de snooker en vivo, calcula el valor del break actual, muestra los puntos restantes en la mesa y obtén el estado del déficit en tiempo real, incluyendo la necesidad de snookers.';

const faqData = [
  {
    question: '¿Cómo se calculan los puntos máximos restantes en la mesa de snooker?',
    answer: 'Cada bola roja restante vale 8 puntos (1 punto por la roja en sí más 7 puntos por embocar una bola de color negra). Una vez que todas las rojas están embocadas, las bolas de color restantes suman un total de 27 puntos.',
  },
  {
    question: '¿Qué significa necesitar snookers en esta calculadora?',
    answer: 'Significa que la diferencia de puntuación es mayor que el total de puntos restantes en la mesa, por lo que un jugador debe forzar faltas de su oponente para poder alcanzarlo en el marcador.',
  },
  {
    question: '¿Qué es una situación de bola negra decisiva?',
    answer: 'Un escenario de bola negra decisiva ocurre cuando todas las bolas han sido embocadas y las puntuaciones del frame están empatadas, lo que requiere recolocar la bola negra en su punto original para determinar al ganador.',
  },
];

const howToData = [
  {
    name: 'Configurar Nombres de Jugadores',
    text: 'Introduce nombres personalizados para los dos jugadores de snooker a fin de personalizar la pantalla del marcador.',
  },
  {
    name: 'Embolcar Bolas y Construir Breaks',
    text: 'Toca las bolas de fieltro iluminadas para registrar las bolas embocadas en secuencia. La calculadora bloquea los colores no elegibles según las reglas.',
  },
  {
    name: 'Revisar el Estado del Déficit',
    text: 'Monitorea la barra de estado en vivo para ver si un jugador está seguro, necesita snookers o si el frame sigue abierto.',
  },
  {
    name: 'Registrar Penalizaciones por Falta',
    text: 'Abre el menú de faltas para asignar puntos de penalización directamente al oponente y cambiar el turno del jugador activo.',
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Marcador de Snooker Online Gratuito y Contador de Breaks',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simplifica tus frames de snooker con nuestro marcador digital. La herramienta calcula los puntos activos del break, los puntos restantes en la mesa y muestra la diferencia exacta de puntuación. La interfaz de fieltro proporciona indicadores interactivos que se iluminan dinámicamente según la secuencia de reglas del snooker. Ya sea que estés arbitrando un torneo local de club o siguiendo partidas amistosas en casa, esta aplicación maneja todos los cálculos automáticamente.',
    },
    {
      type: 'title',
      text: 'Entendiendo la Puntuación del Snooker y los Cálculos de Déficit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una partida estándar de snooker comienza con quince bolas rojas que valen un punto cada una. Los jugadores deben alternar entre una bola roja y una de color. Cada bola de color embocada se devuelve a su punto hasta que no quedan rojas. Después, las bolas de color deben embocarse en su orden numérico, desde la amarilla hasta la negra. Esta calculadora mantiene el seguimiento de la secuencia y advierte cuando se requieren snookers. Al calcular la diferencia de puntuación y los puntos máximos restantes en la mesa, determina exactamente cuándo un frame ha alcanzado su umbral de victoria.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Marcador de Frame',
          description: 'Mantén el control de las puntuaciones del frame y los turnos de los jugadores en una pantalla de alto contraste.',
          icon: 'mdi:scoreboard-outline',
          points: ['Resaltado claro del jugador activo', 'Entrada de nombre personalizada', 'Soporte para deshacer con un clic'],
        },
        {
          title: 'Calculador de Break',
          description: 'Seguimiento en tiempo real de los breaks activos con registro de colores embocados.',
          icon: 'mdi:billiards',
          points: ['Línea de tiempo de bolas embocadas', 'Bloqueo automático de bolas según reglas', 'Estado del break codificado por colores'],
        },
        {
          title: 'Indicadores de Puntos Restantes',
          description: 'Monitorea los puntos máximos que quedan sobre el tapete verde.',
          icon: 'mdi:percent-outline',
          points: ['Seguimiento de diferencia de puntuación', 'Avisos dinámicos de necesidad de snookers', 'Detección de bola negra decisiva'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Controles Interactivos y Retroalimentación de Sonido',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>HUD Táctil de Tapete</strong> permite tocar las bolas para añadir puntos y los registra en la línea de tiempo del break.',
        '<strong>Botones de Acción de Falta</strong> aplican de cuatro a siete puntos de penalización al oponente y finalizan el turno activo.',
        '<strong>Indicador de Estado Dinámico</strong> se actualiza para mostrar juego normal, margen seguro o necesidad de snookers.',
        '<strong>Síntesis de Audio</strong> reproduce un sonido de embocada al meter bola y un zumbador en las faltas.',
      ],
    },
    {
      type: 'title',
      text: 'Reglas de Faltas en Snooker y Sistema de Penalizaciones Explicado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las faltas en snooker otorgan puntos al oponente. El valor de la penalización se determina por el valor de la bola objetivo o la bola involucrada en la falta, con un mínimo de cuatro puntos. Por ejemplo, embocar la bola blanca, golpear una bola de color antes que una roja, o no golpear ninguna bola resulta en penalización. Si se comete una falta al apuntar a la bola azul, rosa o negra, la penalización es de cinco, seis o siete puntos respectivamente. Este marcador digital incluye un panel rápido de faltas para añadir fácilmente los valores de penalización y transferir automáticamente los turnos al siguiente jugador.',
    },
    {
      type: 'title',
      text: '¿Qué Ocurre Durante un Escenario de Bola Negra Decisiva?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando todas las bolas han sido embocadas y las puntuaciones del frame están empatadas, la bola negra se recoloca en su posición original. Los jugadores sortean quién jugará primero, y el primer jugador que emboca la negra o comete una falta pierde el frame. Esta regla de bola negra decisiva garantiza una resolución justa para partidas reñidas sin necesidad de frames adicionales, y nuestro marcador detecta automáticamente este estado de empate final para notificar a ambos jugadores.',
    },
    {
      type: 'title',
      text: 'Por Qué Usar un Marcador Digital de Snooker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El cálculo manual de los puntos restantes y los márgenes de déficit durante frames ajustados es propenso a errores humanos. Esta herramienta de navegador proporciona estadísticas precisas en tiempo real, permitiendo a los jugadores centrarse en su técnica y estrategia. Al mantener una línea de tiempo interactiva de las bolas embocadas, los árbitros pueden verificar fácilmente breaks controvertidos y mantener la continuidad oficial del partido.',
    },
  ],
  ui: {
    title: 'Marcador de Snooker',
    description: 'Sigue puntuaciones de frames y breaks.',
    player1: 'Jugador 1',
    player2: 'Jugador 2',
    score: 'Puntuación',
    currentBreak: 'Break',
    remainingPoints: 'Restantes',
    deficit: 'Diferencia',
    statusSafe: 'Seguro',
    statusNeedSnookers: 'Snookers Necesarios',
    statusDecidingBlack: 'Bola Negra',
    statusNormal: 'Normal',
    foul: 'Falta',
    foulTitle: 'Penalización por Falta',
    foulPoints: 'Penalización',
    foulOnRed: 'Roja/Amarilla/Verde/Marrón',
    foulOnYellow: 'Amarilla',
    foulOnGreen: 'Verde',
    foulOnBrown: 'Marrón',
    foulOnBlue: 'Azul',
    foulOnPink: 'Rosa',
    foulOnBlack: 'Negra',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar el frame actual? Todas las puntuaciones se perderán.',
    cancel: 'Cancelar',
    confirm: 'Confirmar Reinicio',
    endTurn: 'Finalizar Turno',
    miss: 'Fallo',
    redsRemaining: 'Rojas',
    pocketedBalls: 'Embocadas',
    toggleSound: 'Activar Sonido',
    fullscreen: 'Pantalla Completa',
  },
};
