import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'anotador-beisbol';
const title = 'Anotador Premium de Beisbol y Softbol con Seguimiento de Corredores';
const description = 'Registra en vivo los puntajes de beisbol con carreras, hits y errores. Diamante visual con posiciones de corredores, conteo de bolas y strikes, e historial entrada por entrada.';

const faqData = [
  {
    question: 'Como funciona el conteo de lanzamientos en beisbol?',
    answer: 'El conteo muestra el numero de bolas y strikes del bateador actual. Las bolas llegan hasta 4 para una base por bolas. Los strikes llegan hasta 3 para un ponche. Limites ajustables para ligas juveniles.',
  },
  {
    question: 'Que muestra el diamante interactivo de beisbol?',
    answer: 'El diamante muestra primera, segunda y tercera base. Tocar una base la resalta en naranja para indicar que hay un corredor en esa base. Los corredores avanzan automaticamente en los hits.',
  },
  {
    question: 'Como se registran las carreras, hits y errores?',
    answer: 'La matriz R H E muestra carreras, hits y errores de ambos equipos. El historial entrada por entrada muestra como se construyo el marcador a lo largo de todas las entradas.',
  },
];

const howToData = [
  {
    name: 'Registrar Cada Lanzamiento',
    text: 'Toca Strike, Bola, Foul, Hit o Out para registrar cada lanzamiento. El conteo se actualiza automaticamente segun el resultado.',
  },
  {
    name: 'Gestionar Corredores en Base',
    text: 'Toca las bases en el diamante para colocar o quitar corredores. En un hit, los corredores avanzan automaticamente.',
  },
  {
    name: 'Seguir el Progreso de las Entradas',
    text: 'La pantalla de entrada muestra la mitad de entrada actual. Despues de tres outs el juego cambia automaticamente entre las mitades superiores e inferiores.',
  },
  {
    name: 'Revisar la Pizarra',
    text: 'Revisa el resumen R H E y la cuadricula de historial de entradas para ver la progresion completa del marcador.',
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
      text: 'Anotador de Beisbol Gratuito Online: Registra Carreras Hits y Errores con Diamante en Vivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Necesitas un anotador de beisbol confiable para tu proximo partido? Esta herramienta gratuita online registra carreras, hits y errores mientras muestra un diamante interactivo en vivo con las posiciones de los corredores en tiempo real. Cada lanzamiento importa y nuestro marcador digital asegura que nunca pierdas la cuenta de los strikes, los outs o la entrada. Ya sea que estes entrenando una liga infantil, llevando el marcador de un torneo de softbol o dirigiendo un partido de preparatoria, esta herramienta maneja toda la pizarra automaticamente para que te concentres en la accion del campo.',
    },
    {
      type: 'title',
      text: 'Como Este Marcador de Beisbol Te Ahorra Tiempo y Previene Errores',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar el marcador manualmente es propenso a errores, especialmente en partidos de ritmo rapido. Un strike pasado por alto o un corredor olvidado pueden arruinar la pizarra completa. Este anotador digital automatiza las partes tediosas. Toca Strike, Bola, Foul, Hit o Out y el marcador actualiza el conteo al instante. Cuando un bateador recibe base por bolas o se poncha, la herramienta reinicia el conteo automaticamente. Despues de tres outs, cambia la entrada de superior a inferior y registra las carreras. La matriz R H E y la cuadricula de historial entrada por entrada te dan una imagen completa del partido de un vistazo.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Conteo de Lanzamientos en Vivo',
          description: 'Seguimiento automatico de bolas y strikes con deteccion de base por bolas y ponche para cada turno al bate.',
          icon: 'mdi:baseball',
          points: ['Bolas contadas hasta 4', 'Strikes contados hasta 3', 'Reinicio automatico al decidir'],
        },
        {
          title: 'Gestion de Corredores',
          description: 'Diamante interactivo que muestra exactamente quien esta en primera, segunda o tercera base.',
          icon: 'mdi:diamond-stone',
          points: ['Toca las bases para colocar corredores', 'Resaltado visual cuando esta ocupada', 'Se limpia al cambiar de entrada'],
        },
        {
          title: 'Pizarra Completa',
          description: 'Estadisticas completas R H E con historial de puntajes entrada por entrada.',
          icon: 'mdi:scoreboard-outline',
          points: ['Carreras hits y errores', 'Cuadricula entrada por entrada', 'Totales acumulados para ambos equipos'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Quien Necesita Este Seguimiento de Beisbol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta esta disenada para cualquiera que necesite llevar el marcador: entrenadores de beisbol infantil que quieren una pantalla digital clara para sus jugadores, voluntarios de ligas de softbol que gestionan partidos sin un anotador dedicado, padres que siguen los partidos de sus hijos desde las gradas y arbitros que quieren un sistema de verificacion secundario. La interfaz funciona en cualquier dispositivo, desde telefonos inteligentes en el dugout hasta tabletas montadas en la cerca o computadoras portatiles en la banca. Sin instalacion necesaria, solo abre el navegador y comienza a anotar.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gestion Automatica del Conteo:</strong> Las bolas y strikes se reinician automaticamente despues de bases por bolas, ponches, hits y outs. Sin reinicios manuales necesarios.',
        '<strong>Diamante Tactil:</strong> Toca primera, segunda o tercera base para colocar o quitar corredores. El diamante se ilumina en dorado para mostrar las bases ocupadas.',
        '<strong>Puntajes Entrada por Entrada:</strong> Cada media entrada se registra en la cuadricula. Ve exactamente como anoto cada equipo en las nueve entradas.',
        '<strong>Sin Configuracion Requerida:</strong> Abre la pagina y comienza a anotar inmediatamente. Personaliza los nombres de los equipos tocando las etiquetas sobre los puntajes.',
      ],
    },
    {
      type: 'title',
      text: 'Anotacion de Beisbol Simplificada: Conteo Diamante y Pizarra en un Solo Lugar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Llevar el marcador en beisbol requiere rastrear multiples cosas a la vez: el conteo de bolas y strikes, el numero de outs, que bases tienen corredores, las carreras de cada equipo y la entrada actual. Perder el rastro de cualquiera de estos crea confusion y registros inexactos. Esta herramienta consolida todo en una sola pantalla. Los puntos de conteo muestran bolas y strikes de un vistazo. El diamante muestra las posiciones de los corredores. La tabla R H E muestra la pizarra completa. Y la cuadricula de entradas se desplaza horizontalmente para mostrar el historial completo de puntajes. Todo se actualiza en tiempo real con cada toque.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Entrenadores', html: '<p>Mantengan un marcador digital claro visible para todo el equipo desde el dugout.</p>' },
        { type: 'card', title: 'Voluntarios', html: '<p>No se necesita experiencia en anotacion. La herramienta maneja todo el seguimiento complejo automaticamente.</p>' },
        { type: 'card', title: 'Padres', html: '<p>Sigan el partido desde las gradas con una pantalla de puntaje confiable en tiempo real en su telefono.</p>' },
        { type: 'card', title: 'Jugadores', html: '<p>Revisen los puntajes entrada por entrada despues del partido para analizar el rendimiento.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Anotador de Beisbol',
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
    resetConfirm: 'Reiniciar el partido actual? Todos los puntajes se perderan.',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    total: 'Total',
    fullscreen: 'Pantalla Completa',
    toggleSound: 'Activar Sonido',
  },
};
