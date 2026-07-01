import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'marcador-voleibol-playa';
const title = 'Marcador de Voleibol Playa y Control de Rotación';
const description = 'Sigue los puntos del voleibol playa, el orden de saque, los cambios de lado por viento y los sets con una visualización interactiva cenital de una cancha de arena dorada.';

const faq = [
  {
    question: '¿Cuándo cambian de lado los equipos en voleibol playa?',
    answer: 'Para garantizar la equidad bajo condiciones exteriores (viento, sol, arena), los equipos cambian de lado cada 7 puntos durante los dos primeros sets, y cada 5 puntos durante el set decisivo.',
  },
  {
    question: '¿Cómo funciona la rotación de saque en voleibol playa?',
    answer: 'Cada equipo tiene 2 jugadores que deben alternar el saque. Cuando un equipo gana una ruptura de servicio (side-out), debe rotar al servidor para que el jugador que no sacó la última vez sea el siguiente en sacar.',
  },
  {
    question: '¿Cuántos puntos se necesitan para ganar un set de voleibol playa?',
    answer: 'Los sets 1 y 2 se juegan a 21 puntos. Si se requiere un tercer set, se juega a 15 puntos. En todos los casos, un equipo debe ganar por al menos 2 puntos de diferencia.',
  },
];

const howTo = [
  {
    name: 'Configurar Alineación',
    text: 'Ingresa nombres personalizados para los dos jugadores de ambos equipos A y B.',
  },
  {
    name: 'Registrar Puntos',
    text: 'Toca en la tarjeta de un equipo o haz clic en la cancha interactiva para añadir puntos. La alineación y rotación se actualizan automáticamente.',
  },
  {
    name: 'Seguir Avisos de Cambio de Lado',
    text: 'Cuando el banner de cambio se deslice hacia abajo, realiza el cambio físico de lado y haz clic en el botón de intercambio para invertir la orientación de la cancha.',
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

export const content: BeachVolleyballLocaleContent = {
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
      text: 'Marcador de Voleibol Playa Online y Control de Rotación de Saque',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mantener el orden de saque y las posiciones del equipo bajo el sol ardiente puede ser difícil. Este marcador profesional de voleibol playa cuenta con un diseño digital de cancha con textura de arena y alto contraste, optimizado para visibilidad exterior. Evita problemas de lectura por deslumbramiento, automatiza las reglas de cambio de lado y rastrea cuál de los dos jugadores debe sacar después de cada punto de side-out.',
    },
    {
      type: 'title',
      text: 'Entendiendo la Rotación y las Reglas de Saque en Voleibol Playa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aunque no hay posiciones fijas ni faltas de rotación basadas en la ubicación en la cancha en el voleibol playa 2v2, los jugadores deben alternar estrictamente el saque. Cuando el equipo receptor gana una jugada (conocido como side-out), obtiene el derecho a sacar. El jugador que no sacó la vez anterior que su equipo sirvió debe ser el nuevo servidor. Sacar fuera de orden es una falta y resulta en un punto para los oponentes. Este tablero digital cuenta con indicadores de saque activos y pelotas saltando junto a los círculos de los jugadores para evitar errores de rotación.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Reglas Oficiales FIVB',
          description: 'Cumple con las directrices oficiales de puntuación, incluyendo límites de sets y cambios de lado.',
          icon: 'mdi:volleyball',
          points: ['Sets a 21 (desempate a 15)', 'Margen estricto de ventaja de 2', 'Cambios de lado automáticos'],
        },
        {
          title: 'Control de Rotación',
          description: 'Nunca discutas ni te confundas sobre a quién le toca sacar.',
          icon: 'mdi:account-sync-outline',
          points: ['Indicadores de saque brillantes', 'Iniciales mapeadas en la arena', 'Modal de superposición de alineación'],
        },
        {
          title: 'Optimizado para Exteriores',
          description: 'Diseñado para jugar en canchas de arena bajo la luz solar directa.',
          icon: 'mdi:weather-sunny',
          points: ['Tema amarillo de alto contraste', 'Persistencia de pantalla Wake Lock', 'Gesto de deslizar para deshacer punto'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Funciones Interactivas y Configuración del Juego',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Cancha SVG de Arena Dorada:</strong> Refleja visualmente el estado del juego. Toca directamente en cualquier mitad de la cancha para otorgar un punto a ese equipo.',
        '<strong>Animación de Rotación de Cancha:</strong> Cuando se activa la advertencia de cambio de lado, al hacer clic en el botón de intercambio se rota toda la cancha SVG 180 grados para que la pantalla se alinee con tus posiciones físicas.',
        '<strong>Alertas de Cambio de Lado FIVB:</strong> Muestra un banner de advertencia de alta visibilidad cuando el puntaje combinado es múltiplo de 7 (en los sets 1 y 2) o múltiplo de 5 (en el set final).',
        '<strong>Partículas de Arena:</strong> Agrega retroalimentación visual en los cambios de puntuación con partículas de arena animadas que surgen desde las coordenadas del toque.',
        '<strong>Control de Deshacer por Gesto:</strong> Desliza hacia abajo en la tarjeta para deshacer el último punto registrado al instante.',
      ],
    },
    {
      type: 'title',
      text: 'Por Qué los Equipos Cambian de Lado en Voleibol Playa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A diferencia del voleibol indoor, los partidos de voleibol playa están muy influenciados por elementos ambientales como el deslumbramiento solar, el calor, la fuerza del viento y la consistencia de la arena. Cambiar de lado con frecuencia asegura que ningún equipo reciba una ventaja injusta debido a una dirección favorable del viento o tener el sol en los ojos. Las reglas establecen cambiar de lado cada 7 puntos durante los dos primeros sets, y cada 5 puntos durante el tercer set.',
    },
  ],
  ui: {
    teamA: 'Equipo 1',
    teamB: 'Equipo 2',
    points: 'Puntos',
    sets: 'Sets',
    reset: 'Reiniciar',
    resetConfirm: '¿Reiniciar el partido? Se perderán todos los puntos y alineaciones.',
    cancel: 'Cancelar',
    switchSides: 'Cambiar de Lado',
    switchSidesDesc: '¡El puntaje acumulado alcanzó el umbral de cambio!',
    fullscreen: 'Pantalla Completa',
    exitFullscreen: 'Salir de Pantalla Completa',
    player1: 'Jugador 1',
    player2: 'Jugador 2',
    serving: 'Sacando',
    winner: 'Ganador',
    undo: 'Deshacer',
  },
};

