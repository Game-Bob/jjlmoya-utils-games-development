import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'marcador-de-tenis';
const title = 'Marcador de Tenis Online : Seguimiento de Partidos Gratis';
const description = 'Sigue partidos de tenis con puntuación de sets y juegos. Marcador de tenis online gratis para partidos y torneos. Sin registro necesario.';

const faqData = [
  {
    question: '¿Cómo funciona la puntuación en tenis?',
    answer: 'Los partidos de tenis se juegan en juegos y sets. Un juego se puntúa como Love, 15, 30, 40. Un marcador de 40-40 se llama Deuce, y requiere que un jugador gane 2 puntos consecutivos. Un set lo gana el primer jugador que gane 6 juegos con un margen de 2 juegos. Si el marcador llega a 6-6, se juega un tiebreak.',
  },
  {
    question: '¿Cómo uso este marcador de tenis?',
    answer: 'Pulsa el botón + de un jugador cuando puntúe. La puntuación se actualiza automáticamente. El marcador lleva el orden de saque, los marcadores de los juegos, los sets actuales y el historial de sets completados.',
  },
  {
    question: '¿Cuándo cambian de lado los tenistas?',
    answer: 'Los tenistas cambian de lado después del primer, tercer y cada juego impar posterior de cada set. También cambian al final de un set a menos que el número total de juegos sea par. En un tiebreak, cambian cada 6 puntos.',
  },
  {
    question: '¿Este marcador admite tiebreaks?',
    answer: 'Sí, cuando un set llega a 6-6, el marcador entra automáticamente en modo tiebreak, donde los puntos se cuentan numéricamente hasta 7. Un jugador debe ganar por 2 puntos de diferencia para concluir el tiebreak y el set.',
  },
  {
    question: '¿Puedo usarlo en mi móvil?',
    answer: 'Sí, la interfaz está optimizada para dispositivos móviles con botones grandes. También puedes activar el modo pantalla completa para mantener la pantalla encendida durante el partido.',
  },
];

const howToData = [
  {
    name: 'Poner nombre a los jugadores',
    text: 'Toca los campos de nombre para escribir nombres personalizados. Se guardan en tu navegador.',
  },
  {
    name: 'Añadir puntos',
    text: 'Pulsa el botón + del jugador que ha ganado el punto. La puntuación se actualizará automáticamente.',
  },
  {
    name: 'Gestionar resultados de sets',
    text: 'El marcador concluye juegos y sets automáticamente. Archiva los sets completados y pasa al siguiente set.',
  },
  {
    name: 'Cambiar de lado',
    text: 'El marcador te avisa cuando los jugadores necesitan cambiar de lado. Pulsa el botón de cambio para intercambiar los lados visuales.',
  },
  {
    name: 'Finalizar el partido',
    text: 'El marcador concluye el partido automáticamente según las reglas del tenis y anuncia al ganador.',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Marcador de Tenis Online Gratis y Seguimiento de Partidos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar la puntuación en tenis puede ser complicado con términos como deuce, ventaja y tiebreak. Este marcador de tenis online gratuito automatiza todo el proceso. Solo tienes que pulsar el botón + cuando un jugador puntúa. La herramienta gestiona puntos, juegos, sets y cambios de lado automáticamente en tiempo real.',
    },
    {
      type: 'title',
      text: 'Cómo funciona la puntuación del tenis en este marcador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El tenis usa una estructura de puntuación única. Un juego estándar progresa a través de Love, 15, 30, 40 y Juego. Cuando ambos jugadores alcanzan 40, el marcador es Deuce. Desde Deuce, un jugador debe anotar dos puntos consecutivos para ganar el juego. El primer punto se llama Ventaja, y el siguiente punto asegura el juego. Si el oponente gana el siguiente punto, el marcador vuelve a Deuce. Los sets los gana el primer jugador en ganar 6 juegos con un margen de 2. Cuando el set llega a 6-6, se juega un tiebreak a 7 puntos.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partidos Casuales',
          description: 'Puntuación rápida y sencilla para partidos de tenis informales con amigos.',
          icon: 'mdi:tennis',
          points: ['Puntuación con un toque', 'Indicador de cambio de lado', 'Funciona sin conexión'],
        },
        {
          title: 'Club',
          description: 'Seguimiento perfecto para partidos de club y torneos.',
          icon: 'mdi:trophy-outline',
          points: ['Archivo de historial de sets', 'Mejor de 3 o 5 sets', 'Diseño adaptado a móviles'],
        },
        {
          title: 'Torneos',
          description: 'Diseñado para seguimiento oficial de partidos y uso arbitral.',
          icon: 'mdi:school',
          points: ['Soporte de tiebreak', 'Marcador a pantalla completa', 'Seguridad de datos local'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Características especiales del marcador',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Lógica automática de reglas de tenis</strong> calcula Love, 15, 30, 40, deuce, ventaja y tiebreak automáticamente.',
        '<strong>Archivo de historial de sets</strong> muestra el marcador de sets anteriores de un vistazo.',
        '<strong>Ayuda para cambio de lado</strong> avisa a los jugadores cuando deben cambiar de lado.',
        '<strong>Celebraciones vibrantes</strong> muestra partículas flotantes por los puntos ganados.',
        '<strong>Mejor de 3 o 5 sets</strong> formato de partido configurable.',
        '<strong>Nombres guardados localmente</strong> mantiene los nombres personalizados entre visitas.',
      ],
    },
    {
      type: 'title',
      text: 'Marcador Digital vs Seguimiento Manual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los marcadores manuales requieren concentración constante para actualizar números, recordar la rotación de saque, comprobar tiebreaks y calcular cambios de lado. Este marcador de tenis digital maneja cada regla del tenis automáticamente. Puedes concentrarte completamente en el partido mientras la herramienta actualiza los historiales de sets y anuncia al ganador con una ceremonia de celebración.',
    },
  ],
  ui: {
    playerA: 'Jugador 1',
    playerB: 'Jugador 2',
    winnerLabel: 'CAMPEÓN',
    finishMatch: 'Finalizar Partido',
    newGame: 'Nuevo Set',
    serving: 'Sacando',
    changeSide: 'Cambiar de Lado',
    swapHint: 'Toca para cambiar de lado',
    game: 'Juego',
    set: 'Set',
    gamePoint: 'Punto de Juego',
    setPoint: 'Punto de Set',
    matchPoint: 'Punto de Partido',
    mode: 'Sets',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Puntos',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar partido? Se perderán todos los datos.',
    cancel: 'Cancelar',
    fullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
    deuce: 'Deuce',
    advantage: 'Ventaja',
    tiebreak: 'Tiebreak',
  },
};
