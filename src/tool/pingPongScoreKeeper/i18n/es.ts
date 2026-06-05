import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'marcador-de-ping-pong';
const title = 'Marcador de Ping Pong Online : Contador de Tenis de Mesa Gratis';
const description =
  'Sigue partidos de tenis de mesa con puntuación de juegos y sets. Marcador de ping pong online gratis para partidos amistosos y torneos. Sin registro necesario.';

const faqData = [
  {
    question: '¿Cómo funciona la puntuación en ping pong?',
    answer:
      'Un juego estándar de ping pong se juega a 11 puntos. Debes ganar por 2 puntos de diferencia. Si el marcador llega a 10-10, se sigue jugando hasta que alguien saque 2 puntos de ventaja. El saque cambia cada 2 puntos. Este marcador controla todo esto automáticamente.',
  },
  {
    question: '¿Cómo uso este marcador?',
    answer:
      'Pulsa el botón + debajo de cada jugador para añadir un punto. La puntuación se actualiza automáticamente. Cuando un jugador llega a 11 con 2 de ventaja, el juego termina y empieza uno nuevo. El contador de juegos ganados registra cuántos ha ganado cada uno. Pulsa Finalizar Partido cuando termine el encuentro.',
  },
  {
    question: '¿Cómo funciona el indicador de saque?',
    answer:
      'El saque cambia cada 2 puntos. Aparece un punto junto al jugador que está sacando. Sigue las reglas oficiales del tenis de mesa. Puedes ver en todo momento quién debe sacar durante el partido.',
  },
  {
    question: '¿Puedo usarlo en el móvil durante un partido?',
    answer:
      'Sí. La interfaz es adaptable a móviles con botones grandes. El modo pantalla completa oculta el navegador y mantiene la pantalla encendida.',
  },
  {
    question: '¿Guarda los datos del partido?',
    answer:
      'Sí. La puntuación actual, los juegos ganados y los nombres de los jugadores se guardan automáticamente en tu navegador.',
  },
];

const howToData = [
  {
    name: 'Poner nombre a los jugadores',
    text: 'Toca el nombre de jugador por defecto y escribe el tuyo. Los nombres se guardan automáticamente.',
  },
  {
    name: 'Añadir un punto',
    text: 'Pulsa el gran botón circular + del jugador que ha anotado. La puntuación se actualiza con una animación de celebración.',
  },
  {
    name: 'Quitar un punto',
    text: 'Pulsa el botón de menos si has añadido un punto por error.',
  },
  {
    name: 'Empezar un juego nuevo',
    text: 'Cuando termine un juego, pulsa Nuevo Juego para empezar el siguiente. O pulsa Finalizar Partido para acabar el encuentro.',
  },
  {
    name: 'Finalizar el partido',
    text: 'Pulsa Finalizar Partido para ver al ganador anunciado con trofeo y confeti.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Marcador de Ping Pong Online Gratis : Seguimiento de Partidos de Tenis de Mesa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar la puntuación en ping pong debería ser sencillo, pero las reglas pueden liar. ¿Quién saca ahora? ¿Es 10-10 o 11-9? ¿Cuántos juegos ha ganado cada uno? Este marcador de ping pong online gratuito se encarga de todo automáticamente. Solo tienes que pulsar el botón + cuando alguien puntúa. El marcador lleva la cuenta de puntos por juego, juegos ganados en el partido y quién está sacando. Todo se actualiza en tiempo real con animaciones de celebración que hacen que cada punto cuente. Sin registro, sin descargas, sin menús complicados.',
    },
    {
      type: 'title',
      text: 'Cómo funciona la puntuación del ping pong en este marcador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El tenis de mesa sigue un sistema de puntuación estándar. Cada juego se juega a 11 puntos. Un jugador debe ganar por 2 puntos, así que si el marcador llega a 10-10, se sigue jugando hasta que alguien saque 2 de ventaja. El saque cambia cada 2 puntos durante un juego. Este marcador sigue todas estas reglas automáticamente. No necesitas recordar quién saca ni cuándo cambiar. El indicador de saque muestra un punto junto al jugador que sirve. Cuando un jugador gana un juego, el marcador pasa automáticamente al siguiente. El contador de juegos ganados aumenta para el ganador. Un partido puede tener cualquier número de juegos, pero normalmente es al mejor de 5 o 7. Pulsa Finalizar Partido cuando el encuentro termine y se anunciará al ganador con una celebración.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partidos Amistosos',
          description: 'Puntuación rápida y sencilla para ping pong casual entre amigos. Seguimiento automático de juegos y partidos.',
          icon: 'mdi:table-tennis',
          points: ['Un toque por punto', 'Seguimiento automático de saque', 'Funciona sin conexión'],
        },
        {
          title: 'Club y Liga',
          description: 'Mantén un registro limpio de juegos y resultados. Perfecto para torneos de club y ligas.',
          icon: 'mdi:trophy-outline',
          points: ['Seguimiento de juegos ganados', 'Soporte al mejor de 5 o 7', 'Adaptado a móviles'],
        },
        {
          title: 'Torneos',
          description: 'Sigue múltiples partidos en un entorno de torneo. Reinicio rápido entre encuentros.',
          icon: 'mdi:school',
          points: ['Reinicio rápido de partido', 'Puntuación persistente', 'Modo pantalla completa'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Qué hace especial a este marcador de ping pong',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Puntuación automática</strong> el marcador conoce las reglas del ping pong. Juegos a 11, ganar por 2, cambios de saque automáticos.',
        '<strong>Seguimiento de juegos ganados</strong> cada juego ganado queda registrado. Ve de un vistazo cuántos juegos ha ganado cada jugador en el partido.',
        '<strong>Indicador de saque</strong> un punto visible muestra qué jugador está sacando, siguiendo la regla de rotación cada 2 puntos.',
        '<strong>Animaciones de celebración</strong> cada punto activa una animación aleatoria. Ocho efectos diferentes mantienen cada punto emocionante.',
        '<strong>Partículas flotantes</strong> cada punto anotado genera texto flotante que celebra el momento.',
        '<strong>Ceremonia de cierre</strong> pulsa Finalizar Partido para activar el anuncio del ganador con trofeo y confeti.',
        '<strong>Nombres editables</strong> toca el campo de nombre para renombrar jugadores. Los nombres se guardan en tu navegador.',
        '<strong>Modo pantalla completa</strong> oculta la interfaz del navegador para que el marcador llene la pantalla y la mantenga encendida.',
        '<strong>Prioridad offline</strong> funciona sin internet. Sin anuncios, sin seguimiento, sin recopilación de datos.',
      ],
    },
    {
      type: 'title',
      text: 'Marcador de Ping Pong vs. Puntuación Manual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La puntuación manual en ping pong exige llevar la cuenta, recordar quién saca, saber cuándo cambiar de saque y mantener el recuento de juegos ganados. Es fácil perder el hilo, especialmente en un partido rápido. Este marcador digital lo maneja todo automáticamente. Solo necesitas pulsar un botón cuando se anota un punto. El marcador lleva la cuenta del juego, detecta cuándo se gana un juego, registra los juegos ganados en el partido y muestra quién está sacando. Cada punto se celebra con animaciones y partículas. La puntuación nunca se confunde y nunca te pierdes un cambio de saque. Ya sea que estés jugando una partida informal con amigos o compitiendo en un torneo, este marcador de ping pong online gratuito te da todo lo que necesitas.',
    },
  ],
  ui: {
    playerA: 'Jugador 1',
    playerB: 'Jugador 2',
    winnerLabel: 'CAMPEÓN',
    finishMatch: 'Finalizar Partido',
    newGame: 'Nuevo Juego',
    serving: 'Sacando',
    changeSide: 'Cambiar Lados',
    swapHint: 'Toca para cambiar',
    game: 'Juego',
    set: 'Set',
    gamePoint: 'Punto de Juego',
    matchPoint: 'Punto de Partido',
    mode: 'Formato',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Puntos',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar partido? Se perderán todos los datos.',
    cancel: 'Cancelar',
    fullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
  },
};
