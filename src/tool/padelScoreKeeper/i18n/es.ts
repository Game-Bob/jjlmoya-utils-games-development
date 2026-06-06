import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'marcador-de-padel';
const title = 'Marcador de Padel Premium : Punto de Oro y Rotación de Saque';
const description = 'Controla los puntos de pádel con la regla oficial del Punto de Oro, alertas de rotación de saque, tiebreaks y animación dinámica de cambio de lado.';

const faq = [
  {
    question: '¿Qué es el Punto de Oro en el pádel?',
    answer: 'El Punto de Oro es un punto decisivo que se juega cuando el marcador llega a 40-40 (Deuce). No hay ventajas. El equipo que recibe elige si recibir el saque por la izquierda o por la derecha, y quien gane ese único punto se lleva todo el juego.',
  },
  {
    question: '¿Cómo funcionan los formatos de set en el pádel?',
    answer: 'Los partidos estándar se juegan al mejor de 3 sets, ganando cada set el primer equipo que llegue a 6 juegos (con ventaja de 2). Si el marcador llega a 6-6, se juega un tiebreak a 7 puntos. El formato opcional Golden Set termina en 4 juegos con tiebreak en 4-4.',
  },
  {
    question: '¿Cuándo cambian los jugadores de lado en el pádel?',
    answer: 'Los jugadores cambian de lado tras el primer juego y luego cada 2 juegos (cuando la suma de juegos del set actual es impar, ej. 1, 3, 5). Durante los tiebreaks, los jugadores cambian de lado cada 6 puntos.',
  },
];

const howTo = [
  {
    name: 'Configurar el formato del partido',
    text: 'Selecciona el formato estándar (primero a 6 juegos) o el formato corto golden set (primero a 4 juegos).',
  },
  {
    name: 'Introducir nombres de los jugadores',
    text: 'Escribe los nombres de los equipos para personalizar el marcador. Tus configuraciones se guardan automáticamente.',
  },
  {
    name: 'Registrar puntos en la pista',
    text: 'Toca cualquier lado de la pista de pádel isométrica para anotar puntos. Los indicadores de saque te guiarán en las rotaciones diagonales.',
  },
  {
    name: 'Decidir Puntos de Oro',
    text: 'Cuando se llegue al deuce, selecciona el lado que devuelve (receptor izquierdo o derecho) y haz clic en el equipo ganador para finalizar el juego.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Marcador de Pádel Online Gratuito y Seguimiento de Partidos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar la puntuación en el pádel puede volverse complicado con rallies rápidos, tiebreaks, cambios de lado y la regla oficial del Punto de Oro. Este marcador de pádel online gratuito elimina las complicaciones. Simplemente toca la pista visual para anotar puntos y deja que la herramienta gestione automáticamente las rotaciones de saque, los lados del receptor, el historial de sets y los cambios de campo en tiempo real.',
    },
    {
      type: 'title',
      text: 'Entendiendo la Puntuación del Pádel, Puntos de Oro y Rotaciones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El pádel sigue una puntuación similar al tenis (15, 30, 40, Juego) pero introduce reglas específicas para un juego más rápido. Según las reglas profesionales de la FIP, cuando el marcador llega a 40-40, se juega un Punto de Oro decisivo. El equipo restador elige qué lado (izquierdo o derecho) recibirá el saque, y el ganador de ese único punto se lleva el juego. Además, los equipos deben cambiar de lado cada vez que el total de juegos en un set sea impar, y cada 6 puntos durante un tiebreak.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partidos Amistosos',
          description: 'Control de puntuación rápido y limpio para partidas con tus compañeros de pádel.',
          icon: 'mdi:tennis',
          points: ['Añadir puntos con un toque', 'Diseño adaptado a móviles', 'Funciona sin conexión'],
        },
        {
          title: 'Club y Liga',
          description: 'Sigue los partidos competitivos del club y torneos locales con facilidad.',
          icon: 'mdi:trophy-outline',
          points: ['Archivo histórico de sets', 'Sets de 6 o 4 juegos', 'Soporte para Punto de Oro'],
        },
        {
          title: 'Modo Árbitro',
          description: 'Herramienta completa para arbitrar partidos oficiales o sesiones de entrenamiento.',
          icon: 'mdi:school',
          points: ['Indicadores de saque y recepción', 'Rotación interactiva de pista', 'Modo consola a pantalla completa'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Funciones Digitales Avanzadas para Jugadores de Pádel',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Lógica Oficial del Punto de Oro</strong> permite al equipo restador elegir el lado del receptor en el deuce, mostrando la trayectoria del saque.',
        '<strong>Indicador Visual de Pista</strong> muestra las posiciones del servidor (S) y del receptor (R) de forma dinámica para evitar errores de rotación.',
        '<strong>Cambio Automático de Lados</strong> gira el diseño de la pista en juegos impares o intervalos de tiebreak para que siempre coincida con tu vista física.',
        '<strong>Formatos de Set Personalizables</strong> admite sets estándar de 6 juegos o sets rápidos Golden Set de 4 juegos.',
        '<strong>Guardado Automático en el Navegador</strong> mantiene los nombres de los jugadores y el marcador actual incluso si actualizas la página.',
      ],
    },
    {
      type: 'title',
      text: 'Reglas del Tiebreak en Pádel: Estándar vs Super Tiebreak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En los sets estándar de pádel, si el marcador llega a 6-6 en juegos, se juega un tiebreak a 7 puntos. En un tiebreak, los puntos se cuentan de forma numérica (1, 2, 3, etc.). El primer equipo en alcanzar 7 puntos con un margen de 2 gana el set. El jugador al que le toca sacar sirve el primer punto desde el lado derecho (deuce). A partir de ahí, cada jugador sirve dos puntos consecutivos, comenzando desde el lado izquierdo (ventaja). En algunos formatos de torneo, si el partido está empatado a 1-1 en sets, se juega un Super Tiebreak a 10 puntos en lugar de un tercer set completo para decidir el partido.',
    },
    {
      type: 'title',
      text: 'Cambios de Campo y Rotaciones: Manteniendo la Igualdad en el Pádel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El cambio de campo es esencial en el pádel para asegurar que factores ambientales como el sol, el viento o las imperfecciones de la pista no favorezcan a un equipo sobre otro. Los jugadores deben intercambiar lados después del primer juego de cada set y luego cada dos juegos (ej. 1-0, 2-1, 3-2, 4-3, 5-4). Nuestro marcador digital de pádel incluye una animación dinámica de cambio de lado que gira automáticamente la disposición visual de la pista 180 grados cuando los jugadores deben cambiar de lado físicamente. Esto asegura que el equipo mostrado en la parte superior de tu pantalla siempre coincida con el equipo que juega en el lado opuesto de la pista real.',
    },
    {
      type: 'title',
      text: 'Formato de Sets Estándar vs Golden Set',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mientras que los partidos estándar se juegan a 6 juegos por set, muchas ligas recreativas y torneos rápidos adoptan el formato "Golden Set" donde los sets se juegan solo a 4 juegos (con tiebreak en 4-4). Este marcador te permite cambiar entre estos formatos con un solo toque en la barra de herramientas. Independientemente del formato seleccionado, el marcador gestiona todos los tiebreaks, las rotaciones de saque y los cálculos de puntuación automáticamente.',
    },
    {
      type: 'title',
      text: 'Consejos para un Control de Puntuación Eficaz en la Pista',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Usa un Soporte de Pista o Sujetador de Móvil:</strong> Coloca tu móvil o tablet en la valla de la pista de pádel a la altura de la red. Esto permite que los jugadores de ambos lados vean fácilmente la puntuación activa y los indicadores de saque.',
        '<strong>Personaliza los Nombres Antes de Empezar:</strong> Tómate 10 segundos para escribir los nombres reales de los jugadores o equipos. Esto hace que los anuncios de voz (si están activados) y el marcador visual sean mucho más atractivos y oficiales.',
        '<strong>Activa el Modo Pantalla Completa:</strong> Haz clic en el botón de pantalla completa del panel superior. Esto maximiza la interfaz del marcador y ayuda a evitar que la pantalla se apague automáticamente durante rallies largos.',
      ],
    },
    {
      type: 'title',
      text: '¿Por Qué Usar un Marcador Digital de Pádel?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En lugar de discutir constantemente sobre quién sirve, de quién es el turno de recibir o cuál es la puntuación, un marcador digital mantiene a todos alineados. Al mostrar visualmente las posiciones del servidor y del receptor directamente en la pantalla, los jugadores pueden echar un vistazo rápido al móvil en el banquillo y saber exactamente dónde colocarse. Esto mejora el ritmo de juego y evita errores de rotación.',
    },
  ],
  ui: {
    playerA: 'Equipo 1',
    playerB: 'Equipo 2',
    game: 'Juego',
    set: 'Set',
    tiebreak: 'Tiebreak',
    goldPoint: 'Punto de Oro',
    selectReceiver: 'Seleccionar Receptor',
    leftReceiver: 'Receptor Izquierdo',
    rightReceiver: 'Receptor Derecho',
    server: 'Saca',
    receiver: 'Recibe',
    changeEnds: 'Cambiar de Lado',
    matchWon: 'Partido Ganado',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar el partido? Se perderán todos los datos.',
    cancel: 'Cancelar',
    fullscreen: 'Pantalla Completa',
    exitFullscreen: 'Salir de Pantalla Completa',
    deuce: 'Deuce',
    advantage: 'Ventaja',
    formatStandard: '6 Juegos',
    formatGoldenSet: '4 Juegos',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Punto de Oro Decisivo',
  },
};
