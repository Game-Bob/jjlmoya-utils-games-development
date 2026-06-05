import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'marcador-baloncesto';
const title = 'Marcador de baloncesto online : Anotador gratuito';
const description =
  'Marcador de baloncesto online gratuito con botones +1, +2 y +3. Lleva la puntuación en partidos de calle, baloncesto escolar y ligas locales. Sin registro, sin descarga, funciona sin conexión.';

const faqData = [
  {
    question: '¿Cómo se lleva la puntuación en un partido de baloncesto?',
    answer:
      'El baloncesto usa tres valores de anotación: tiro libre (+1 punto), canasta (+2 puntos) y triple (+3 puntos). Toca el botón correspondiente cada vez que un equipo anota. El marcador suma el total automáticamente. Para corregir un error, usa el botón de restar junto a la puntuación.',
  },
  {
    question: '¿Cuál es la diferencia entre +1, +2 y +3 en baloncesto?',
    answer:
      '+1 es para tiros libres concedidos tras una falta. +2 es para una canasta normal dentro de la línea de tres puntos. +3 es para lanzamientos desde fuera de la línea de tres. Tener botones separados para cada valor te permite anotar más rápido y reduce errores en comparación con un contador simple.',
  },
  {
    question: '¿Puedo usar este marcador para un partido de baloncesto real?',
    answer:
      'Sí. El marcador está diseñado para partidos reales: baloncesto callejero, partidos escolares, ligas locales y entrenamientos. Guarda la puntuación en tu navegador para que puedas recargar la página sin perder el estado del partido.',
  },
  {
    question: '¿Cómo llevo la puntuación en baloncesto callejero o partidos informales?',
    answer:
      'El baloncesto callejero normalmente se juega a una puntuación objetivo (como 21 o 16) con 1 y 2 puntos (o solo 1). Este marcador funciona para cualquier formato. Usa +1 para canastas normales, +2 para tiros detrás del arco. Define tu propia condición de victoria y usa el botón de restar si te equivocas.',
  },
  {
    question: '¿Funciona sin conexión en el móvil?',
    answer:
      'Sí. Una vez que la página carga, el marcador funciona completamente sin conexión. Perfecto para canchas al aire libre, pabellones sin WiFi o cualquier lugar con señal deficiente. También puedes ir a pantalla completa y la pantalla se mantendrá encendida para que no se bloquee durante el partido.',
  },
  {
    question: '¿Cómo llevo el control de las faltas de equipo y el bonus?',
    answer:
      'Este marcador se centra en la puntuación. Para las faltas de equipo, puedes usar los campos de nombre de equipo para anotar las faltas manualmente (ej. renombra "LOCAL" a "LOCAL 3F"). Recomendamos usar esta herramienta junto con un contador de faltas aparte para partidos oficiales.',
  },
  {
    question: '¿Puedo usar este anotador de baloncesto en mi móvil?',
    answer:
      'Sí. La interfaz está diseñada primero para móviles. Los botones +1, +2 y +3 son grandes y fáciles de pulsar con el pulgar. El modo de pantalla completa oculta los elementos del navegador para que el marcador ocupe toda la pantalla, y el bloqueo de pantalla evita que tu teléfono se apague.',
  },
];

const howToData = [
  {
    name: 'Pon nombre a tus equipos',
    text: 'Toca LOCAL o VISITANTE para introducir los nombres de los equipos. Los nombres se guardan automáticamente en tu navegador para que persistan aunque recargues la página.',
  },
  {
    name: 'Anotar un tiro libre (+1)',
    text: 'Toca el botón +1 cuando un jugador convierta un tiro libre. Cada tiro libre vale un punto y normalmente se concede tras una falta.',
  },
  {
    name: 'Anotar una canasta (+2)',
    text: 'Toca el botón +2 para una canasta normal dentro de la línea de tres puntos. Es la acción de anotación más común en baloncesto.',
  },
  {
    name: 'Anotar un triple (+3)',
    text: 'Toca el botón +3 cuando un jugador anote desde fuera del arco de tres puntos. Un triple se resalta con un botón rojo y activa un efecto de celebración extra.',
  },
  {
    name: 'Corregir un error de anotación',
    text: 'Si añades puntos por accidente, toca el botón de restar para substraerlos. No bajará de cero. No hace falta reiniciar todo el partido por un pequeño error.',
  },
  {
    name: 'Cambiar lados en el descanso',
    text: 'Usa el botón de intercambio para cambiar las posiciones de LOCAL y VISITANTE en el descanso. Ambas puntuaciones y nombres de equipo se intercambian para que no pierdas ningún dato.',
  },
  {
    name: 'Empezar un nuevo partido',
    text: 'Toca el botón de reinicio y confirma para borrar todas las puntuaciones y empezar un nuevo partido. Los nombres de los equipos se conservan para que no tengas que escribirlos otra vez.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Marcador de baloncesto online gratuito : Sin registro, sin descarga',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar la puntuación en baloncesto debería ser sencillo. Un tiro libre es +1. Una canasta es +2. Un triple es +3. Este marcador te da un botón dedicado para cada valor para que puedas tocar y seguir jugando. Sin menús, sin modos, sin configuración. Solo pon nombre a tus equipos y empieza a anotar. La puntuación se guarda en tu navegador automáticamente, así que puedes recargar la página, cerrar el móvil o volver más tarde sin perder el partido.',
    },
    {
      type: 'title',
      text: 'Por qué un anotador de baloncesto dedicado supera a un contador genérico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de las aplicaciones de marcador te obligan a pulsar el mismo botón varias veces para sumar dos o tres puntos. Ese toque extra se acumula a lo largo de un partido de 40 minutos y aumenta la probabilidad de perder la cuenta durante un contraataque o un cambio rápido. Este marcador tiene <strong>tres botones separados</strong> : uno para cada valor de anotación : así que pulsas exactamente una vez por jugada de anotación. El botón +3 se ilumina en rojo y activa una animación explosiva que acompaña la emoción de un triple encestado.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Baloncesto callejero',
          description:
            'Partidos a 16 o 21 con 1 y 2 puntos. Este marcador maneja ambos valores. Solo usa +1 y +2 e ignora el +3 cuando juegues con reglas de calle.',
          icon: 'mdi:basketball',
          points: ['Sin configuración previa', 'Válido para cualquier objetivo', 'Pantalla se mantiene encendida'],
        },
        {
          title: 'Instituto y ligas locales',
          description:
            'Reglas FIBA o NFHS estándar con tiros libres, canastas y triples. Los botones dedicados lo hacen lo suficientemente rápido para un anotador oficial.',
          icon: 'mdi:school',
          points: ['Los tres valores de anotación', 'Nombres de equipo editables', 'Pantalla completa mantiene el móvil despierto'],
        },
        {
          title: 'Práctica y entrenamiento',
          description:
            'Sigue los aciertos durante ejercicios de tiro, partidos de entrenamiento o partidos uno contra uno. El historial no se guarda, así que cada sesión empieza de cero.',
          icon: 'mdi:whistle',
          points: ['Reinicio rápido entre ejercicios', 'Funciona sin conexión en el pabellón', 'Sin necesidad de cuenta'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo funciona la puntuación en baloncesto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El baloncesto tiene tres valores de anotación. Un <strong>tiro libre</strong> vale 1 punto y se lanza desde la línea de tiros libres tras una falta. Una <strong>canasta</strong> vale 2 puntos y cuenta para cualquier enceste dentro del arco de tres puntos durante el juego normal. Un <strong>triple</strong> vale 3 puntos para lanzamientos desde fuera del arco, marcado por la línea de tres puntos. La mayoría de los partidos profesionales y universitarios usan los tres valores. El baloncesto callejero a menudo usa solo 1 y 2 puntos, o solo 1. Este marcador se adapta a cualquier formato.',
    },
    {
      type: 'title',
      text: 'Juega en cualquier formato: ganar por puntuación, por tiempo o el primero en llegar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El baloncesto no tiene un límite de puntuación fijo : el partido termina cuando el reloj llega a cero. Pero el baloncesto callejero suele usar puntuaciones objetivo como el primero en llegar a 16, 21 u 11 (ganar por 2). Este marcador no impone una condición de victoria porque el baloncesto no termina por puntuación. Tú decides cuándo termina el partido, y el botón de reinicio limpia el marcador para el siguiente partido. Los nombres de los equipos se conservan para que puedas jugar partidos consecutivos sin volver a escribirlos.',
    },
    {
      type: 'title',
      text: 'Qué hace diferente a este marcador',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tres botones dedicados</strong> : +1, +2 y +3. Sin cambios cíclicos de valores, sin pulsación prolongada, sin toques adicionales.',
        '<strong>Nombres de equipo editables</strong> : toca el nombre para cambiarlo. Los nombres se guardan en tu navegador y persisten al recargar la página.',
        '<strong>Bloqueo de pantalla activo</strong> : cuando entras en pantalla completa, el marcador evita que la pantalla de tu móvil se apague. No más tocar la pantalla solo para mantenerla encendida.',
        '<strong>Modo de pantalla completa</strong> : oculta las pestañas del navegador y la barra de direcciones para que el marcador ocupe toda la pantalla. Toca el botón de pantalla completa una vez y la herramienta se expande.',
        '<strong>Prioridad sin conexión</strong> : todo el marcador funciona sin conexión a internet después de la primera carga. Sin anuncios, sin rastreadores, sin recopilación de datos.',
        '<strong>Respuesta satisfactoria</strong> : cada toque activa una animación de puntuación, partículas flotantes y una sutil vibración en dispositivos compatibles. El +3 obtiene un efecto de explosión adicional.',
        '<strong>El estado del partido se guarda</strong> : recarga la página, cierra el navegador o vuelve mañana. Las puntuaciones y los nombres de los equipos se almacenan localmente.',
      ],
    },
    {
      type: 'title',
      text: 'Marcador de baloncesto vs. hoja de puntuación en papel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una hoja de puntuación en papel funciona, pero requiere un bolígrafo, una superficie plana y alguien que pueda escribir y ver el partido al mismo tiempo. Un marcador digital resuelve los tres problemas. Los botones son lo suficientemente grandes como para pulsarlos sin mirar. Los números se leen desde cualquier punto de la cancha. La puntuación nunca se mancha, se pierde ni se borra accidentalmente. Y a diferencia del papel, este marcador guarda el estado del partido, para que puedas cerrarlo en el descanso y volver más tarde.',
    },
  ],
  ui: {
    playerA: 'LOCAL',
    playerB: 'VISITANTE',
    swapSides: 'Cambiar lados',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar el partido? Se perderán todos los puntos.',
    cancel: 'Cancelar',
    fullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
    winnerLabel: 'GANADOR',
  },
};
