import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'torneo';
const title = 'Generador de Brackets y Torneos Online Gratis';
const description = 'Organiza torneos y crea brackets de eliminación directa gratis y sin registro. Ideal para FIFA, Pádel, eSports y juegos de mesa. 100% Mobile Friendly.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Torneo en Curso',
  nextMatch: 'Siguiente Partido',
  share: 'Compartir',
  backNew: 'Volver / Nuevo',
  back: 'Volver',
  newTournament: 'Nuevo Torneo',
  setupSubtitle: 'Configura y genera tu cuadro de competición.',
  tournamentNameLabel: 'Nombre del Torneo',
  tournamentNamePlaceholder: 'Ej. Torneo de Verano',
  addPlayersLabel: 'Añadir Participantes',
  addPlayerPlaceholder: 'Nombre... o varios separados por comas',
  playersLabel: 'Jugadores',
  clearAll: 'Borrar Todo',
  emptyList: 'La lista está vacía',
  howItWorks: '¿Cómo funciona?',
  howItWorksText: 'Añade participantes, ponle nombre y genera. El sistema creará automáticamente los cruces y gestionará los "Byes" (pases directos) si son impares.',
  historyLabel: 'Historial',
  noHistory: 'No hay torneos guardados',
  noOldTournaments: 'No hay torneos anteriores',
  generateBtn: 'Generar Cuadro',
  shuffleLabel: 'Aleatorizar emparejamientos',
  scoreLabel: 'Activar Marcadores (Opcional)',
  dragHint: 'Arrastra para mover',
  roundFinal: 'Final',
  roundSemifinal: 'Semifinales',
  roundQuarter: 'Cuartos',
  roundPrefix: 'Ronda',
  byeLabel: 'Pase Directo',
  waiting: 'Esperando...',
  emptyRound: 'Ronda vacía',
  confirmClearPlayers: '¿Borrar toda la lista de jugadores?',
  alertMinPlayers: 'Necesitas al menos 2 jugadores.',
  alertLoadFailed: 'No se pudo cargar el torneo.',
  confirmDeleteTournament: '¿Borrar este torneo del historial permanentemente?',
  toastShareLimit: 'Solo se pueden compartir torneos de hasta 32 jugadores',
  toastShareError: 'Error al generar el enlace',
  toastShareCopied: 'Enlace copiado al portapapeles',
  toastShareFailed: 'No se pudo copiar. URL:',
  toastFinished: '¡Torneo Finalizado!',
  defaultName: 'Torneo',
};

const faqData = [
  { question: '¿Cómo funciona la eliminación directa?', answer: 'Es un sistema de competición donde el participante que pierde un encuentro queda automáticamente eliminado del torneo. Los ganadores avanzan a la siguiente ronda (octavos, cuartos, semifinal) hasta que solo quedan dos para la gran final.' },
  { question: '¿Qué pasa si tengo un número impar de jugadores?', answer: 'Nuestra herramienta gestiona automáticamente los "BYEs". Algunos jugadores pasarán directamente a la segunda ronda sin jugar en la primera para que el cuadro siempre acabe en potencias de dos (2, 4, 8, 16...).' },
  { question: '¿Puedo guardar y compartir el cuadro del torneo?', answer: 'Sí, puedes compartir el bracket mediante un enlace único generado al instante. Al ser una herramienta sin registro, los datos se mantienen en tu navegador mientras la pestaña esté abierta.' },
  { question: '¿Sirve para torneos de eSports como FIFA o LoL?', answer: 'Totalmente. Está diseñado para ser rápido y visual, ideal para gestionar torneos rápidos de consola, juegos de PC o incluso competiciones de juegos de mesa y cartas.' },
  { question: '¿Es gratis crear torneos?', answer: 'Sí, completamente gratuito y sin restricciones. No hay planes premium, límites de participantes, marcas de agua, ni anuncios intrusivos. Todo funciona offline en tu navegador.' },
  { question: '¿Se borran mis datos si cierro el navegador?', answer: 'No. Utilizamos LocalStorage para guardar todos tus torneos automáticamente en tu dispositivo. Puedes cerrar la pestaña, apagar el ordenador y volver días después: tu torneo seguirá ahí. El historial completo también se mantiene persistente.' },
  { question: '¿Cómo funciona el botón "Siguiente Partido"?', answer: 'El sistema detecta automáticamente el próximo enfrentamiento que está listo para jugarse (ambos participantes confirmados) pero aún sin resultado. Al pulsar "Siguiente Partido", la vista salta directamente a ese match.' },
];

const howTo = [
  { name: 'Introducir participantes', text: 'Escribe los nombres de los jugadores o equipos que van a participar en la competición.' },
  { name: 'Generar el cuadro', text: 'Pulsa el botón de generar. El sistema creará automáticamente los enfrentamientos y las rondas necesarias.' },
  { name: 'Actualizar resultados', text: 'Haz clic en los participantes ganadores de cada partido para que avancen automáticamente a la siguiente fase del bracket.' },
  { name: 'Descargar y finalizar', text: 'Una vez completado el torneo, descarga el resultado final para guardar el recuerdo de la victoria.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Generador de Brackets y Organizador de Torneos Online',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Gestiona tus competiciones deportivas, de videojuegos o de mesa con el organizador de torneos más completo, gratuito y sin registro. Crea cuadros de eliminatoria directa (brackets) visuales e interactivos en segundos, con <strong>sistema de puntuación integrado</strong>, historial automático y navegación inteligente entre partidos. Todo funciona offline, directamente en tu navegador.',
  },
  {
    type: 'title' as const,
    text: '¿Cómo crear un Torneo de Eliminación Directa?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Organizar una competición profesional nunca ha sido tan sencillo. <strong>Nombra tu torneo</strong>, añade participantes (uno a uno o pegando una lista separada por comas), aleatoriza los cruces si quieres, genera el bracket, gestiona los resultados tocando al ganador de cada encuentro y usa el botón "Siguiente Partido" para navegar entre partidos sin resolver.',
  },
  {
    type: 'title' as const,
    text: 'Funcionalidades Avanzadas',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Entrada masiva:</strong> Añade varios participantes a la vez separados por comas.',
      '<strong>Marcadores exactos:</strong> Sistema de puntuación con scores tipo 3-1 ó 21-19.',
      '<strong>Navegación inteligente:</strong> Botón "Siguiente Partido" que salta al próximo encuentro pendiente.',
      '<strong>Bracket arrastrable:</strong> Vista de escritorio con scroll libre para torneos grandes.',
      '<strong>Historial persistente:</strong> Todos los torneos se guardan en tu navegador automáticamente.',
      '<strong>Walkovers automáticos:</strong> Resolución de pases directos y Byes sin intervención manual.',
      '<strong>Compartir por URL:</strong> Genera un enlace comprimido para enviar el bracket a cualquiera.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Ideal para cualquier tipo de competición',
    level: 2 as const,
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Videojuegos y eSports',
        description: 'Perfecto para FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros o Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Partidas rápidas', 'Sin límite de equipos', 'Compartible al instante'],
      },
      {
        title: 'Deportes y Pistas',
        description: 'Gestiona cuadros de Pádel, Tenis, Ping Pong, Bádminton, Fútbol Sala o Baloncesto 3x3.',
        icon: 'mdi:trophy-outline',
        points: ['Marcadores integrados', 'Vista móvil optimizada', 'Sin papel ni pizarra'],
      },
      {
        title: 'Juegos de Mesa y Cartas',
        description: 'Organiza partidas de Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Ajedrez o Dominó.',
        icon: 'mdi:cards-playing-outline',
        points: ['Hasta 64 jugadores', 'Historial de rondas', 'Gestión de Byes'],
      },
    ],
  },
  {
    type: 'title' as const,
    text: '¿Qué son los "Byes" o Pases Directos?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'En un torneo de eliminación directa ideal, el número de participantes debe ser una potencia de 2 (4, 8, 16, 32...). Cuando tienes un número impar o no potencia de 2 —por ejemplo 7, 10 o 13 jugadores—, el sistema asigna automáticamente <strong>"Byes"</strong> en la primera ronda. Un "Bye" significa que un participante pasa directamente a la siguiente fase sin jugar. Nuestro algoritmo calcula y asigna estos pases de forma justa y automática.',
  },
  {
    type: 'title' as const,
    text: 'Instantáneo, Gratuito y Sin Registro',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Cero fricción. Sin cuentas, sin instalaciones, sin esperas. Añade participantes y genera tu torneo al instante. Todo se guarda automáticamente en tu navegador con <strong>LocalStorage</strong>: puedes cerrar la pestaña, apagar el ordenador y volver días después. Tu torneo y el historial completo seguirán ahí.',
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faqTitle: 'Preguntas frecuentes', faq: faqData, bibliography: [], howTo, schemas };
