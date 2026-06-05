import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'marcador-futbol';
const title = 'Marcador de Fútbol Online Gratis : Registro de Goles en Vivo';
const description =
  'Lleva el marcador de tus partidos de fútbol online gratis. Contador de goles simple para partidos, amistosos y torneos. Sin registro ni descargas.';

const faqData = [
  {
    question: '¿Cómo se usa este marcador de fútbol?',
    answer:
      'Toca el botón + debajo de cada equipo para añadir un gol. El marcador se actualiza al instante con una animación de celebración. Usa el botón de menos para deshacer un error. Los nombres de los equipos se pueden editar: solo toca el nombre por defecto y escribe el tuyo. Todo se guarda automáticamente en tu navegador para que puedas cerrar la página y volver más tarde.',
  },
  {
    question: '¿Puedo usarlo en el móvil durante un partido?',
    answer:
      'Sí. La interfaz está diseñada para uso móvil con botones grandes que puedes tocar sin mirar. El modo pantalla completa oculta el navegador y mantiene la pantalla encendida durante todo el partido. El diseño vertical permite alcanzar ambas secciones cómodamente con el pulgar.',
  },
  {
    question: '¿Guarda los datos del partido?',
    answer:
      'Sí. El marcador actual y los nombres de los equipos se guardan automáticamente en tu navegador. Puedes recargar la página, cerrar el navegador o volver al día siguiente y tus datos seguirán ahí.',
  },
  {
    question: '¿Puedo llevar la cuenta de la prórroga o los penaltis?',
    answer:
      'Sí. El marcador funciona igual para cualquier formato de partido. Solo sigue usando los botones + durante la prórroga o los penaltis. Cuando termine el partido, toca Finalizar Partido para ver el resultado final.',
  },
  {
    question: '¿Es realmente gratis, sin límites ocultos?',
    answer:
      'Sí, completamente gratis sin restricciones. Sin planes premium, sin límites de participantes, sin marcas de agua, sin anuncios. Todo funciona sin conexión en tu navegador. No necesitas cuenta ni correo electrónico.',
  },
];

const howToData = [
  {
    name: 'Pon nombre a los equipos',
    text: 'Toca el nombre del equipo por defecto y escribe el tuyo. El nuevo nombre se guarda automáticamente en tu navegador.',
  },
  {
    name: 'Añade un gol',
    text: 'Toca el gran botón circular + del equipo que ha marcado. El número del marcador sube con una animación de celebración.',
  },
  {
    name: 'Elimina un gol',
    text: 'Toca el botón de menos debajo del + si añadiste un gol por accidente. El marcador se ajusta al instante.',
  },
  {
    name: 'Finaliza el partido',
    text: 'Toca Finalizar Partido en la parte inferior para ver al ganador anunciado con un trofeo y confeti. Descarta la celebración tocando fuera.',
  },
  {
    name: 'Reinicia el partido',
    text: 'Toca el icono de reinicio en la barra superior y confirma para borrar ambos marcadores. Los nombres de los equipos se conservan para que no tengas que volver a introducirlos.',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: 'Marcador de Fútbol Online Gratis : Sigue el Partido en Vivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar el marcador durante un partido de fútbol debería ser lo más fácil del juego. Este marcador de fútbol online te permite registrar goles de dos equipos en tiempo real con solo un toque. Sin registros, sin descargas, sin menús complicados. Abre la página, pon nombre a tus equipos y empieza a contar goles. Ya sea que estés al borde del campo entrenando a fútbol base, dirigiendo un partido amistoso entre amigos o llevando el marcador en un partido de liga local, esta herramienta está diseñada para ser rápida y sencilla. Cada equipo tiene su propia sección con un color distintivo, un marcador grande y un botón +1 dedicado. Toca para añadir un gol, toca el botón de menos para deshacer un error. Todo el historial del partido permanece visible en pantalla para que siempre sepas qué ha pasado y cuándo.',
    },
    {
      type: 'title',
      text: 'Por qué necesitas un marcador de fútbol dedicado en lugar de un contador genérico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un contador numérico genérico sirve para contar cualquier cosa, pero un marcador de fútbol dedicado entiende cómo funciona el juego. Separa visualmente los dos equipos con colores distintos para que nunca toques el lado equivocado. El botón de gol es grande y agradable de pulsar, incluso cuando sujetas el móvil con una mano al borde del campo. El botón de menos te permite corregir errores al instante sin tener que reiniciar todo el partido. Y cuando termina el partido, el botón Finalizar Partido activa una pantalla de celebración que muestra el resultado final con confeti y un trofeo. Los contadores genéricos no pueden hacer nada de eso. Tratan todos los puntos de la misma manera. El fútbol no es genérico, y tu marcador tampoco debería serlo.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partidos Amistosos y Entrenamientos',
          description: 'Registro rápido de goles para partidos de práctica y sesiones de entrenamiento. Reinicia entre partidos con un solo toque. Funciona sin conexión para usarlo en cualquier campo.',
          icon: 'mdi:soccer',
          points: ['Registro de goles con un toque', 'Funciona completamente sin conexión', 'Sin cuenta ni correo electrónico', 'Reinicio instantáneo entre partidos'],
        },
        {
          title: 'Ligas Locales y Torneos',
          description: 'Mantén un marcador limpio para partidos de liga donde cada gol cuenta. Marcador grande legible desde el otro lado del campo. Los colores de los equipos ayudan a evitar confusiones.',
          icon: 'mdi:trophy-outline',
          points: ['Secciones de equipos con colores', 'Nombres de equipos editables', 'Finalizar partido con celebración', 'Marcador grande legible a distancia'],
        },
        {
          title: 'Fútbol Juvenil y Escolar',
          description: 'Suficientemente simple para que los jóvenes jugadores lo operen ellos mismos. Los entrenadores pueden registrar goles mientras se concentran en el partido. El modo pantalla completa mantiene la pantalla encendida.',
          icon: 'mdi:school',
          points: ['Fácil de usar para niños', 'Pantalla completa mantiene la pantalla encendida', 'Nombres de equipos editables', 'Sin funciones que distraigan'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo seguir un partido de fútbol en directo con este marcador online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Usar este marcador de fútbol es muy sencillo. Al abrir la página, verás dos secciones de equipo. El equipo local aparece en rojo y el visitante en azul. Cada sección tiene un número grande de marcador en el centro, un campo para el nombre del equipo arriba y dos botones debajo. Toca el gran botón circular + para añadir un gol a ese equipo. El número del marcador se anima con un efecto de celebración cada vez que se registra un gol. Ocho animaciones de gol diferentes rotan aleatoriamente, para que cada gol se sienta único. Partículas flotantes salen del área del botón con textos como GOAL y SIUUU. La pantalla parpadea brevemente para marcar el momento. Si te equivocas, toca el pequeño botón de menos para eliminar el último gol. Los campos de nombre de equipo son editables. Toca el nombre por defecto para escribir tu propio nombre. Los nombres se guardan automáticamente en tu navegador junto con el marcador actual. Esto significa que puedes cerrar la página, volver más tarde y tus datos del partido seguirán ahí. Al final del partido, toca Finalizar Partido para ver al ganador anunciado con una animación de trofeo y confeti cayendo. Puedes descartar la celebración y mantener el marcador visible.',
    },
    {
      type: 'title',
      text: 'Marcador de fútbol adaptado al móvil, diseñado para el borde del campo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta está diseñada ante todo para móviles. El diseño vertical coloca un equipo encima del otro para que puedas alcanzar ambas secciones cómodamente con el pulgar mientras sujetas el teléfono. Los botones son lo suficientemente grandes como para tocarlos sin mirar la pantalla. El modo pantalla completa elimina las barras del navegador y mantiene la pantalla del teléfono encendida durante todo el partido. No más tocar la pantalla cada pocos minutos para evitar que se apague. La interfaz funciona tanto en orientación horizontal como vertical. También funciona sin conexión después de la primera carga, así que no necesitas conexión a internet en el campo. No hay anuncios, ni rastreadores, ni recopilación de datos. Tus datos del partido nunca salen de tu dispositivo.',
    },
    {
      type: 'title',
      text: 'Qué hace especial a este marcador de fútbol',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Equipos con colores</strong> rojo para local y azul para visitante. Sabes qué equipo es cuál al instante sin necesidad de leer.',
        '<strong>Animaciones de celebración</strong> cada gol activa una celebración aleatoria. Ocho animaciones diferentes: boom, rise, glow, ball bounce y más.',
        '<strong>Partículas flotantes</strong> cada gol genera texto flotante con mensajes como GOAL y SIUUU. Cada celebración es única.',
        '<strong>Ceremonia de Finalizar Partido</strong> toca Finalizar Partido para activar el anuncio del ganador con animación de trofeo, nombre del equipo y lluvia de confeti.',
        '<strong>Nombres de equipos editables</strong> toca el campo de nombre para renombrar tus equipos. Los nombres se guardan localmente en tu navegador.',
        '<strong>Bloqueo de pantalla</strong> el modo pantalla completa evita que la pantalla del móvil se apague durante el partido.',
        '<strong>Modo pantalla completa</strong> oculta la interfaz del navegador para que el marcador ocupe toda la pantalla sin distracciones.',
        '<strong>Sin conexión</strong> funciona sin internet después de la primera visita. Sin anuncios, sin rastreo, sin recopilación de datos.',
        '<strong>Persistencia instantánea</strong> los marcadores y nombres se guardan automáticamente. Recarga la página o cierra el navegador y tus datos del partido vuelven.',
        '<strong>Reinicio con confirmación</strong> el botón de reinicio pide confirmación antes de borrar los marcadores. Evita la pérdida accidental de datos.',
      ],
    },
    {
      type: 'title',
      text: 'Marcador de Fútbol vs Hoja de Papel : por qué lo digital es mejor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las hojas de papel para el marcador se han usado durante décadas, pero tienen problemas reales. Necesitas un bolígrafo que funcione, una superficie plana para escribir y suficiente atención para anotar mientras ves el partido. Una sola distracción puede hacer que te pierdas un gol o escribas el número equivocado. Una vez escrito en papel, el marcador no se puede corregir limpiamente. Los números tachados hacen que la hoja sea difícil de leer. El papel puede mojarse con la lluvia, volarse con el viento o perderse entre partidos. Un marcador de fútbol digital soluciona todos estos problemas. Los botones son lo suficientemente grandes como para pulsarlos al tacto sin mirar. Los números se muestran claramente con un tamaño de letra legible desde cualquier punto del campo. Los errores se corrigen al instante con el botón de menos. El marcador se guarda automáticamente y nunca se pierde. Y a diferencia del papel, el marcador añade animaciones de celebración y feedback visual que hacen que llevar el marcador sea más divertido. Ya sea que entrenes a un equipo juvenil, dirijas una liga de domingo o juegues con amigos, este marcador de fútbol online gratuito te da todo lo que necesitas y nada que no necesites.',
    },
    {
      type: 'title',
      text: 'Marcador de fútbol gratuito para todos los niveles del juego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta es completamente gratuita, sin limitaciones. No hay niveles premium, ni funciones ocultas tras un muro de pago, ni marcas de agua en la pantalla. Funciona para cualquier nivel de fútbol, desde partidos informales con amigos hasta partidos de liga organizados. La interfaz simple permite que cualquiera pueda usarla, desde jóvenes jugadores que aprenden el juego hasta entrenadores experimentados gestionando un torneo. No se requiere registro. No hace falta correo electrónico. No se recopilan datos personales. Abre la página, empieza el partido, toca los goles. Eso es todo.',
    },
  ],
  ui: {
    playerA: 'Local',
    playerB: 'Visitante',
    winnerLabel: 'CAMPEÓN',
    finishMatch: 'Finalizar Partido',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar el partido? Se perderán todos los datos.',
    cancel: 'Cancelar',
    fullscreen: 'Pantalla Completa',
    exitFullscreen: 'Salir de Pantalla Completa',
  },
};
