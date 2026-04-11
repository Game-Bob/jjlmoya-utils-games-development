import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'marcador-deportivo';
const title = 'Marcador Deportivo Online: Contador de Puntos Gratis (2026)';
const description =
  'Marcador digital con botones gigantes para móvil. Ideal para pádel, ping-pong y fútbol. Sin anuncios que molesten en mitad del partido. Simple y rápido.';

const faqData = [
  {
    question: '¿Funciona sin conexión a internet?',
    answer:
      'Sí, una vez cargada la página, el marcador funciona completamente offline. No necesitas datos ni WiFi durante el partido. Todo se guarda localmente en tu navegador.',
  },
  {
    question: '¿Puedo usar el marcador para tenis y pádel?',
    answer:
      'Sí, el modo Tenis/Pádel gestiona automáticamente la secuencia 15-30-40-AD y lleva la cuenta de sets y juegos según el reglamento oficial. Perfecto para partidos amistosos.',
  },
  {
    question: '¿Se puede poner en pantalla completa?',
    answer:
      'Sí, puedes activar el modo pantalla completa desde tu navegador (F11 en PC, o botón de pantalla completa en móvil). Los números ocupan el 80% de la pantalla para máxima visibilidad.',
  },
  {
    question: '¿Cómo corrijo un punto si me equivoco?',
    answer:
      'Hay un botón separado para restar puntos en cada tarjeta de jugador. Puedes corregir errores rápidamente sin tener que reiniciar el marcador completo.',
  },
  {
    question: '¿Funciona para baloncesto con canastas de 1, 2 y 3 puntos?',
    answer:
      'Sí, en el modo Baloncesto aparecen botones dedicados de +1, +2 y +3 para anotar cualquier jugada rápidamente sin pulsaciones extra.',
  },
  {
    question: '¿El marcador gestiona automáticamente el saque en ping-pong?',
    answer:
      'Sí, en el modo Ping Pong el indicador de saque rota automáticamente cada 2 puntos (o cada punto en deuce), siguiendo las reglas oficiales de la ITTF.',
  },
];

const howToData = [
  {
    name: 'Selecciona tu deporte',
    text: 'Elige el deporte desde el selector en la parte superior: Libre, Tenis, Pádel, Ping Pong, Voleibol o Baloncesto.',
  },
  {
    name: 'Personaliza los nombres',
    text: 'Toca sobre "LOCAL" o "VISITANTE" para cambiar los nombres de los jugadores o equipos.',
  },
  {
    name: 'Suma puntos con un toque',
    text: 'Toca la zona grande del marcador para sumar un punto. En baloncesto usa los botones +1, +2 o +3.',
  },
  {
    name: 'Indica el saque',
    text: 'Usa el botón de saque en la esquina inferior para marcar quién saca. El indicador amarillo aparece automáticamente.',
  },
  {
    name: 'Corrige errores',
    text: 'Usa el botón "−" si sumaste un punto por error. No es necesario reiniciar el marcador completo.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Reglamentos Oficiales',
  bibliography: [
    {
      name: 'ITTF: Reglamento oficial de tenis de mesa (Ping Pong)',
      url: 'https://www.ittf.com/handbook/',
    },
    {
      name: 'ITF: Reglas oficiales del tenis',
      url: 'https://www.itftennis.com/en/about-us/governance/rules-and-regulations/',
    },
    {
      name: 'FIP: Reglamento oficial del pádel',
      url: 'https://www.padelfip.com/es/regulaciones/',
    },
    {
      name: 'FIVB: Reglas oficiales del voleibol',
      url: 'https://www.fivb.com/en/volleyball/thegame_volleyball/rulesofthegame_volleyball',
    },
    {
      name: 'FIBA: Reglas oficiales del baloncesto',
      url: 'https://www.fiba.basketball/en/official-basketball-rules',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tu Árbitro Digital de Bolsillo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el calor del partido, es fácil perder la cuenta. "¿Íbamos 4-3 o 3-4?". Este marcador está diseñado para resolver esas discusiones antes de que empiecen. Con una interfaz de <strong>botones gigantes</strong> que ocupan casi toda la tarjeta, puedes sumar puntos sin mirar la pantalla, solo estirando el brazo hacia el móvil en el banco.',
    },
    {
      type: 'title',
      text: 'Selector de Deporte Inteligente',
      level: 2,
    },
    {
      type: 'grid',
      columns: [
        {
          type: 'card',
          title: 'Modo Tenis / Pádel',
          html: '<p>Interfaz adaptada con contadores de <strong>Sets</strong> y <strong>Juegos</strong>. El sistema gestiona automáticamente la secuencia 15-30-40-AD y lleva la cuenta de los juegos ganados según el reglamento oficial.</p>',
        },
        {
          type: 'card',
          title: 'Modo Baloncesto',
          html: '<p>El marcador detecta el deporte y cambia su interfaz. En modo baloncesto, tendrás botones dedicados de <strong>+1, +2 y +3</strong> para anotar rápidamente cualquier jugada sin pulsaciones extra.</p>',
        },
        {
          type: 'card',
          title: 'Modo Ping Pong',
          html: '<p>Olvídate de memorizar a quién le toca sacar. El indicador visual rota automáticamente cada 2 puntos (o cada punto en deuce), siguiendo las reglas oficiales de la ITTF.</p>',
        },
      ],
    },
    {
      type: 'title',
      text: 'Características Pensadas para el Deporte',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Modo Alta Visibilidad:</strong> Números que ocupan el 80% de la pantalla para máxima legibilidad bajo el sol.',
        '<strong>Nombres Editables:</strong> Toca sobre "LOCAL" o "VISITANTE" para poner los nombres de los jugadores.',
        '<strong>Prevención de Errores:</strong> Botón de restar puntos separado para corregir fallos rápidamente sin reiniciar.',
        '<strong>Funciona Offline:</strong> Una vez cargado, no necesitas internet durante el partido.',
      ],
    },
  ],
  ui: {
    playerA: 'LOCAL',
    playerB: 'VISITANTE',
    swapSides: 'Cambiar Lado',
    reset: 'Reiniciar',
    serve: 'Saque',
    sets: 'Sets',
    games: 'Juegos',
    victory: '¡VICTORIA!',
    newGame: 'Nueva Partida',
    continueGame: 'Continuar Jugando',
    resetConfirm: '¿Reiniciar marcador?',
    sportSimple: 'Libre (Fútbol, 3 en Raya...)',
    sportTennis: 'Tenis',
    sportPadel: 'Pádel',
    sportPingpong: 'Ping Pong',
    sportVolleyball: 'Voleibol',
    sportBasket: 'Baloncesto',
  },
};
