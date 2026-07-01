import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'anotador-beisbol';
const title = 'Anotador de Béisbol y Sóftbol con Seguimiento de Corredores';
const description = 'Registra en vivo los puntajes de béisbol con carreras, hits y errores. Diamante visual con posiciones de corredores, conteo de bolas y strikes, e historial entrada por entrada.';

const faqData = [
  {
    question: '¿Cómo funciona el conteo de lanzamientos en béisbol?',
    answer: 'El conteo muestra el número de bolas y strikes del bateador actual. Las bolas llegan hasta 4 para una base por bolas. Los strikes llegan hasta 3 para un ponche. Límites ajustables para ligas juveniles.',
  },
  {
    question: '¿Qué muestra el diamante interactivo de béisbol?',
    answer: 'El diamante muestra primera, segunda y tercera base. Tocar una base la resalta en naranja para indicar que hay un corredor en esa base. Los corredores avanzan automáticamente en los hits.',
  },
  {
    question: '¿Cómo se registran las carreras, hits y errores?',
    answer: 'La matriz R H E muestra carreras, hits y errores de ambos equipos. El historial entrada por entrada muestra cómo se construyó el marcador a lo largo de todas las entradas.',
  },
];

const howToData = [
  {
    name: 'Registrar Cada Lanzamiento',
    text: 'Toca Strike, Bola, Foul, Hit o Out para registrar cada lanzamiento. El conteo se actualiza automáticamente según el resultado.',
  },
  {
    name: 'Gestionar Corredores en Base',
    text: 'Toca las bases en el diamante para colocar o quitar corredores. En un hit, los corredores avanzan automáticamente.',
  },
  {
    name: 'Seguir el Progreso de las Entradas',
    text: 'La pantalla de entrada muestra la mitad de entrada actual. Después de tres outs el juego cambia automáticamente entre las mitades superiores e inferiores.',
  },
  {
    name: 'Revisar la Pizarra',
    text: 'Revisa el resumen R H E y la cuadrícula de historial de entradas para ver la progresión completa del marcador.',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Anotador de Béisbol Gratuito Online: Registra Carreras Hits y Errores con Diamante en Vivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '¿Necesitas un anotador de béisbol confiable para tu próximo partido? Esta herramienta gratuita online registra carreras, hits y errores mientras muestra un diamante interactivo en vivo con las posiciones de los corredores en tiempo real. Cada lanzamiento importa y nuestro marcador digital asegura que nunca pierdas la cuenta de los strikes, los outs o la entrada. Ya sea que estés entrenando una liga infantil, llevando el marcador de un torneo de sóftbol o dirigiendo un partido de preparatoria, esta herramienta maneja toda la pizarra automáticamente para que te concentres en la acción del campo.',
    },
    {
      type: 'title',
      text: 'Cómo Este Marcador de Béisbol Te Ahorra Tiempo y Previene Errores',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar el marcador manualmente es propenso a errores, especialmente en partidos de ritmo rápido. Un strike pasado por alto o un corredor olvidado pueden arruinar la pizarra completa. Este anotador digital automatiza las partes tediosas. Toca Strike, Bola, Foul, Hit o Out y el marcador actualiza el conteo al instante. Cuando un bateador recibe base por bolas o se poncha, la herramienta reinicia el conteo automáticamente. Después de tres outs, cambia la entrada de superior a inferior y registra las carreras. La matriz R H E y la cuadrícula de historial entrada por entrada te dan una imagen completa del partido de un vistazo.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Conteo de Lanzamientos en Vivo',
          description: 'Seguimiento automático de bolas y strikes con detección de base por bolas y ponche para cada turno al bate.',
          icon: 'mdi:baseball',
          points: ['Bolas contadas hasta 4', 'Strikes contados hasta 3', 'Reinicio automático al decidir'],
        },
        {
          title: 'Gestión de Corredores',
          description: 'Diamante interactivo que muestra exactamente quién está en primera, segunda o tercera base.',
          icon: 'mdi:diamond-stone',
          points: ['Toca las bases para colocar corredores', 'Resaltado visual cuando está ocupada', 'Se limpia al cambiar de entrada'],
        },
        {
          title: 'Pizarra Completa',
          description: 'Estadísticas completas R H E con historial de puntajes entrada por entrada.',
          icon: 'mdi:scoreboard-outline',
          points: ['Carreras hits y errores', 'Cuadrícula entrada por entrada', 'Totales acumulados para ambos equipos'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Quién Necesita Este Seguimiento de Béisbol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta está diseñada para cualquiera que necesite llevar el marcador: entrenadores de béisbol infantil que quieren una pantalla digital clara para sus jugadores, voluntarios de ligas de sóftbol que gestionan partidos sin un anotador dedicado, padres que siguen los partidos de sus hijos desde las gradas y árbitros que quieren un sistema de verificación secundario. La interfaz funciona en cualquier dispositivo, desde teléfonos inteligentes en el dugout hasta tabletas montadas en la cerca o computadoras portátiles en la banca. Sin instalación necesaria, solo abre el navegador y comienza a anotar.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gestión Automática del Conteo:</strong> Las bolas y strikes se reinician automáticamente después de bases por bolas, ponches, hits y outs. Sin reinicios manuales necesarios.',
        '<strong>Diamante Táctil:</strong> Toca primera, segunda o tercera base para colocar o quitar corredores. El diamante se ilumina en dorado para mostrar las bases ocupadas.',
        '<strong>Puntajes Entrada por Entrada:</strong> Cada media entrada se registra en la cuadrícula. Ve exactamente cómo anotó cada equipo en las nueve entradas.',
        '<strong>Sin Configuración Requerida:</strong> Abre la página y comienza a anotar inmediatamente. Personaliza los nombres de los equipos tocando las etiquetas sobre los puntajes.',
      ],
    },
    {
      type: 'title',
      text: 'Anotación de Béisbol Simplificada: Conteo Diamante y Pizarra en un Solo Lugar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar el marcador en béisbol requiere rastrear múltiples cosas a la vez: el conteo de bolas y strikes, el número de outs, qué bases tienen corredores, las carreras de cada equipo y la entrada actual. Perder el rastro de cualquiera de estos crea confusión y registros inexactos. Esta herramienta consolida todo en una sola pantalla. Los puntos de conteo muestran bolas y strikes de un vistazo. El diamante muestra las posiciones de los corredores. La tabla R H E muestra la pizarra completa. Y la cuadrícula de entradas se desplaza horizontalmente para mostrar el historial completo de puntajes. Todo se actualiza en tiempo real con cada toque.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Entrenadores', html: '<p>Mantengan un marcador digital claro visible para todo el equipo desde el dugout.</p>' },
        { type: 'card', title: 'Voluntarios', html: '<p>No se necesita experiencia en anotación. La herramienta maneja todo el seguimiento complejo automáticamente.</p>' },
        { type: 'card', title: 'Padres', html: '<p>Sigan el partido desde las gradas con una pantalla de puntaje confiable en tiempo real en su teléfono.</p>' },
        { type: 'card', title: 'Jugadores', html: '<p>Revisen los puntajes entrada por entrada después del partido para analizar el rendimiento.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Anotador de Béisbol',
    description: 'Registra carreras, hits y errores con vista de diamante.',
    away: 'Visitante',
    home: 'Local',
    runs: 'C',
    hits: 'H',
    errors: 'E',
    inning: 'Entrada',
    topInning: 'Sup',
    bottomInning: 'Inf',
    balls: 'Bolas',
    strikes: 'Strikes',
    outs: 'Outs',
    strikeBtn: 'Strike',
    ballBtn: 'Bola',
    foulBtn: 'Foul',
    hitBtn: 'Hit',
    outBtn: 'Out',
    walkBtn: 'Base',
    runBtn: '+1 Carrera',
    errorBtn: 'Error',
    newBatter: 'Nuevo Bateador',
    resetMatch: 'Reiniciar Partido',
    resetConfirm: '¿Reiniciar el partido actual? Todos los puntajes se perderán.',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    total: 'Total',
    fullscreen: 'Pantalla Completa',
    toggleSound: 'Activar Sonido',
  },
};

