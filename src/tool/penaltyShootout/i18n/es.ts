import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'marcador-penaltis';
const title = 'Marcador de Penaltis Online: Contador de Tanda de Penales';
const description =
  'Lleva el marcador de tandas de penaltis de fútbol en directo. Registro de 5 lanzamientos, eliminación matemática, muerte súbita y victoria animada.';

const faqData = [
  {
    question: '¿Cuándo termina una tanda de penaltis antes de tiempo?',
    answer:
      'Una tanda finaliza en el momento en que un equipo logra una ventaja de goles que el rival ya no puede empatar matemáticamente con sus tiros restantes.',
  },
  {
    question: '¿Cómo funciona la muerte súbita en los penaltis?',
    answer:
      'Si tras 5 penaltis por equipo hay empate, se lanzan tandas individuales de un penalti por equipo hasta que uno marque y el otro falle en la misma ronda.',
  },
  {
    question: '¿Quién lanza primero en la tanda de penaltis?',
    answer:
      'El árbitro realiza un sorteo con moneda para elegir la portería y un segundo sorteo para decidir qué equipo tira primero.',
  },
  {
    question: '¿Se puede cambiar al portero durante los penaltis?',
    answer:
      'Un portero lesionado que no pueda continuar puede ser sustituido por un suplente designado, si al equipo le quedan cambios disponibles.',
  },
];

const howToData = [
  {
    name: 'Asigna nombre a los equipos',
    text: 'Escribe los nombres personalizados de los equipos antes de iniciar los lanzamientos.',
  },
  {
    name: 'Registra cada penalti',
    text: 'Pulsa GOL o FALLO en cada tiro. La app actualiza marcadores, indicadores visuales y el turno de tiro.',
  },
  {
    name: 'Transición a Muerte Súbita',
    text: 'Si hay empate tras 5 tiros por equipo, la herramienta entra automáticamente en muerte súbita.',
  },
  {
    name: 'Anuncio de Campeón',
    text: 'Al confirmarse la victoria, una pantalla animada anuncia al equipo ganador con el marcador final.',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Reglamento Oficial IFAB de Tanda de Penaltis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las tandas de penaltis (oficialmente <em>tiros desde el punto de penalti</em>) determinan el ganador de un partido de fútbol empatado en eliminatorias según la Regla 10 de la IFAB.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Tiros Iniciales' },
        { value: '11m', label: 'Distancia al Gol' },
        { value: '1v1', label: 'Tirador vs Portero' },
        { value: 'ABBA / AB', label: 'Orden de Tiros' },
      ],
    },
    {
      type: 'tip',
      title: 'Regla de Eliminación Matemática',
      html: 'Si un equipo consigue más goles de los que el rival puede alcanzar con los lanzamientos que le quedan, la tanda concluye de inmediato.',
    },
    {
      type: 'title',
      text: 'Comparativa: Fase Regular de 5 Tiros vs Muerte Súbita',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fase Inicial (5 Penaltis)',
          description: '5 tiros alternos por equipo. Solo se interrumpe si la remontada es matemáticamente imposible.',
        },
        {
          title: 'Fase de Muerte Súbita',
          description: 'Rondas individuales de tiro a partir de la 5ª ronda. Cualquier diferencia de goles tras tiros iguales otorga la victoria.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Resumen de Normas IFAB en Penaltis',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Regla / Requisito', 'Estándar Oficial IFAB'],
      rows: [
        ['Jugadores Elegibles', 'Solo pueden tirar los jugadores presentes en el campo al pitar el final del partido.'],
        ['Posición del Portero', 'Debe mantener al menos parte de un pie sobre la línea de meta en el momento del impacto.'],
        ['Fintas en la Carrera', 'Se permite fintentar durante la carrera, pero se sanciona fintentar tras completar la carrera.'],
        ['Igualdad de Jugadores', 'Si un equipo tiene menos jugadores por expulsión, el rival debe reducir su número para igualar.'],
      ],
    },
    {
      type: 'title',
      text: 'Pros y Contras de las Tandas de Penaltis',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Evaluación del Formato',
      items: [
        {
          pro: 'Garantiza un ganador definitivo en un tiempo predecible.',
          con: 'La presión psicológica extrema puede eclipsar el juego de 120 minutos.',
        },
        {
          pro: 'Ofrece máxima emoción y espectáculo para los aficionados.',
          con: 'Un fallo individual puede acarrear una culpa desproporcionada.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Equipo Local',
    teamBLabel: 'Equipo Visitante',
    scoreGoal: 'GOL',
    scoreMiss: 'FALLO',
    undo: 'Deshacer',
    reset: 'Reiniciar',
    suddenDeath: 'Muerte Súbita',
    regularRounds: 'Ronda Regular',
    roundLabel: 'Ronda',
    turnLabel: 'Turno de Tiro',
    winnerTitle: '¡Campeón de la Tanda!',
    unreachableLead: 'Ventaja inalcanzable en ronda regular',
    regularRoundsWin: 'Victoria tras 5 penaltis regulares',
    suddenDeathWin: 'Victoria en muerte súbita',
    statusPending: 'Pendiente',
    statusScored: 'Gol',
    statusMissed: 'Fallo',
  },
};
