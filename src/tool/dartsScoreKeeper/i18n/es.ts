import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'marcador-de-dardos';
const title = 'Marcador de Dardos Online: Seguimiento de Legs y Sets';
const description = 'Sigue partidos de dardos con puntuación de legs y sets. Marcador de dardos online gratis para partidas de 501 y 301 con cálculos de cierre en vivo y estadísticas.';

const faqData = [
  {
    question: '¿Cómo funciona la puntuación en dardos 501 y 301?',
    answer: 'Los jugadores comienzan con una puntuación fija de 501 o 301 puntos. Cada jugador se turna para lanzar tres dardos, y el valor total de esos lanzamientos se resta de su puntuación. El objetivo es llegar exactamente a cero puntos. Si la regla de Cierre con Doble está activada, el dardo ganador final debe caer en un segmento doble o en la diana interior.',
  },
  {
    question: '¿Qué es un busto en dardos y cuándo ocurre?',
    answer: 'Un busto ocurre cuando un jugador anota más puntos de los que le quedan, o cuando su puntuación se reduce exactamente a un punto con la regla de Cierre con Doble activa. Cuando un jugador hace busto, su turno termina inmediatamente y su puntuación se restablece al total que tenía al inicio de ese turno.',
  },
  {
    question: '¿Cómo se calcula el promedio en dardos?',
    answer: 'El promedio en dardos se calcula tomando el número total de puntos anotados, dividiéndolo por el número total de dardos lanzados y multiplicando el resultado por tres. Esto representa la puntuación media que un jugador logra por turno estándar de tres dardos.',
  },
  {
    question: '¿Qué es un cierre en dardos?',
    answer: 'Un cierre es la combinación específica de lanzamientos necesaria para reducir la puntuación restante a cero y ganar el leg. Los marcadores profesionales muestran sugerencias de cierre para puntuaciones de 170 o menos, guiando a los jugadores sobre qué sencillos, dobles o triples atacar.',
  },
];

const howToData = [
  {
    name: 'Elegir puntuación inicial y reglas',
    text: 'Selecciona 501 o 301 como puntuación inicial y activa o desactiva la regla de Cierre con Doble según el nivel de juego deseado.',
  },
  {
    name: 'Introducir nombres de jugadores',
    text: 'Haz clic en los campos de nombre en la parte superior del marcador para personalizar los nombres. Los valores se guardarán automáticamente en tu navegador.',
  },
  {
    name: 'Registrar dardos lanzados',
    text: 'Usa el teclado interactivo o toca directamente los sectores de la diana para registrar tus lanzamientos. Selecciona primero el multiplicador (Sencillo, Doble o Triple) y luego el número acertado.',
  },
  {
    name: 'Seguir recomendaciones de cierre',
    text: 'Cuando tu puntuación restante baje de 170, mira el panel de cierre para ver los objetivos óptimos para finalizar el leg.',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: 'Marcador de Dardos Online Gratis y Seguimiento de Partidos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gestionar las puntuaciones en dardos requiere cálculo mental rápido y concentración. Este marcador digital de legs hace todos los cálculos por ti, permitiéndote concentrarte únicamente en lanzar. Ya sea que practiques solo o juegues un partido competitivo con amigos, este marcador sigue puntos, legs, sets, promedios de lanzamiento y objetivos de cierre con doble.',
    },
    {
      type: 'title',
      text: 'Formatos de Puntuación de Dardos Estándar Explicados',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los partidos de dardos se juegan en legs y sets. Los formatos más populares a nivel mundial son 501 y 301, ambos juegos de resta donde los jugadores reducen su puntuación a cero.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Torneo 501',
          description: 'El formato estándar para torneos profesionales en todo el mundo.',
          icon: 'mdi:trophy-outline',
          points: ['Puntuación inicial estándar', 'Cierre con doble requerido', 'Enfoque en puntuación alta'],
        },
        {
          title: '301 Casual',
          description: 'Una versión más rápida del juego de resta, ideal para partidas rápidas.',
          icon: 'mdi:clock-outline',
          points: ['Ritmo de juego más rápido', 'Opción de entrada con doble', 'Excelente para practicar'],
        },
        {
          title: 'Modo Cricket',
          description: 'Un juego estratégico de acertar objetivos popular en pubs y ligas.',
          icon: 'mdi:bullseye',
          points: ['Enfoque en números 15-20', 'Seguimiento de diana', 'Sistema de reglas alternativo'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Entendiendo la Matemática del Cierre en Dardos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El cierre más alto posible en dardos es 170, logrado lanzando Triple 20, Triple 20 y Doble Diana. Cuando tu puntuación llega a 170 o menos, entras en rango de cierre, donde una secuencia específica de dardos puede ganar el juego.',
    },
    {
      type: 'table',
      headers: ['Puntuación', 'Objetivo Dardo 1', 'Objetivo Dardo 2', 'Objetivo Dardo 3'],
      rows: [
        ['170', 'Triple 20 (60)', 'Triple 20 (60)', 'Doble Diana (50)'],
        ['120', 'Triple 20 (60)', 'Sencillo 20 (20)', 'Doble 20 (40)'],
        ['100', 'Triple 20 (60)', 'Sencillo 20 (20)', 'Doble 10 (20)'],
        ['80', 'Triple 20 (60)', 'Doble 10 (20)', '-'],
        ['40', 'Doble 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Características de este Marcador Digital de Dardos',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Métodos de Entrada Interactivos</strong> alterna entre una diana radial visual y un teclado numérico rápido.',
        '<strong>Motor de Cierre Inteligente</strong> muestra combinaciones en vivo para finalizar legs.',
        '<strong>Detección de Busto</strong> reinicia automáticamente lanzamientos inválidos y alerta al usuario.',
        '<strong>Registro de Historial de Turnos</strong> rastrea rondas anteriores y puntuaciones restantes.',
        '<strong>Estadísticas Detalladas del Partido</strong> calcula promedios de tres dardos dinámicamente.',
      ],
    },
    {
      type: 'title',
      text: 'Seguimiento Manual vs Digital de Dardos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las pizarras tradicionales requieren escribir, borrar y cálculos constantes. Este marcador online elimina el riesgo de errores, automatiza los promedios y presenta objetivos de cierre. Coloca tu dispositivo junto al tablero, activa el modo pantalla completa para mantener la pantalla activa y disfruta de una puntuación sin complicaciones.',
    },
  ],
  ui: {
    playerA: 'Jugador 1',
    playerB: 'Jugador 2',
    winnerLabel: 'CAMPEÓN',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar partido? Se perderán todos los datos.',
    cancel: 'Cancelar',
    fullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
    leg: 'Leg',
    set: 'Set',
    average: 'Prom',
    checkout: 'Cierre',
    busted: 'Busto',
    dart: 'Turno de Dardos',
    score301: '301',
    score501: '501',
    doubleOut: 'Cierre con Doble',
    noCheckout: 'Sin Cierre',
  },
};
