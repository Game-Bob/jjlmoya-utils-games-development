import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'calculadora-elo';
const title = 'Calculadora de Rating ELO para Ajedrez, Esports y Deportes';
const description = 'Calculadora gratuita de rating ELO para victorias, empates y derrotas. Introduce ambos ratings, elige un factor K y obtén el cambio exacto de puntuación, puntuación esperada, nuevo ELO y ELO del oponente.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Rating del jugador',
  opponentLabel: 'Rating del oponente',
  kFactorLabel: 'Factor K',
  resultLabel: 'Resultado del partido',
  winLabel: 'Victoria',
  drawLabel: 'Empate',
  lossLabel: 'Derrota',
  calculateLabel: 'Calcular',
  resetLabel: 'Reiniciar',
  expectedLabel: 'Esperado',
  deltaLabel: 'Cambio',
  newRatingLabel: 'Nuevo rating',
  opponentNewRatingLabel: 'Nuevo ELO del oponente',
  kFactorHelpTitle: '¿Qué es el factor K?',
  kFactorHelpText: 'K controla la agresividad de la actualización. Un K bajo significa rankings estables. Un K alto hace que cada resultado mueva los ratings más rápido.',
  kFactorLowText: 'Estable',
  kFactorHighText: 'Volátil',
  resultSummaryLabel: 'Impacto del partido',
  initialImpactText: 'El empate mantiene la tabla ajustada',
  historyVersusLabel: 'vs',
  historyToLabel: 'a',
  playerPointsLabel: 'puntos del jugador',
  opponentEloLabel: 'ELO del oponente',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'RATING',
  upsetLabel: 'Probabilidad de sorpresa',
  favoriteLabel: 'Presión del favorito',
  balancedLabel: 'Partido equilibrado',
  historyLabel: 'Cálculos locales',
  noHistoryLabel: 'Ejecuta un cálculo para guardarlo aquí',
  copiedLabel: 'Copiado',
  copyLabel: 'Copiar',
  clearLabel: 'Limpiar',
  kBeginner: 'Principiante',
  kClub: 'Club',
  kTournament: 'Torneo',
  kElite: 'Élite',
};

const faqData = [
  { question: '¿Cómo calculo el cambio de rating ELO después de un partido?', answer: 'Introduce tu ELO actual, el ELO del oponente, el resultado del partido y el factor K. La calculadora estima tu puntuación esperada, la compara con el resultado real y devuelve los puntos exactos ganados o perdidos.' },
  { question: '¿Qué significa el factor K en ELO?', answer: 'El factor K controla la sensibilidad del rating. Un factor K bajo hace que los ratings sean estables y se muevan lentamente. Un factor K alto hace que los ratings reaccionen más rápido, lo cual es útil para jugadores nuevos, temporadas cortas o ligas locales activas.' },
  { question: '¿Por qué gano menos puntos ELO cuando venzo a un oponente de menor rating?', answer: 'Porque la fórmula ya esperaba que ganaras. Vencer a un oponente de rating mucho más bajo confirma la predicción, por lo que la ganancia de rating es pequeña. Vencer a un oponente más fuerte es más sorprendente, por lo que la ganancia es mayor.' },
  { question: '¿El oponente pierde la misma cantidad de puntos ELO?', answer: 'En un intercambio ELO estándar de dos jugadores, sí. Los puntos ganados por un lado se restan del otro, por lo que la calculadora muestra tanto el nuevo ELO del jugador como el nuevo ELO del oponente.' },
  { question: '¿Puedo usar esta calculadora ELO fuera del ajedrez?', answer: 'Sí. ELO funciona para cualquier competición repetida uno contra uno donde los jugadores más fuertes deberían tener más probabilidades de ganar, incluyendo esports, ligas de tenis, grupos de pádel, tenis de mesa, clubes de debate y ligas fantasy.' },
];

const howTo = [
  { name: 'Introduce el rating del jugador', text: 'Escribe el rating actual del jugador cuyo cambio quieres calcular.' },
  { name: 'Introduce el rating del oponente', text: 'Añade el rating del oponente para que la calculadora pueda estimar la puntuación esperada.' },
  { name: 'Elige el factor K y el resultado', text: 'Usa un factor K más bajo para rankings estables o un factor K más alto cuando los ratings deban ajustarse rápido, luego elige victoria, empate o derrota.' },
  { name: 'Lee los nuevos ratings', text: 'La calculadora muestra la puntuación esperada, el cambio de rating, tu nuevo ELO y el nuevo ELO del oponente tras el intercambio de puntos.' },
];

const seo = [
  { type: 'title' as const, text: 'Calcula Puntos ELO Después de Cualquier Partido', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Usa esta calculadora de rating ELO cuando necesites una respuesta rápida a una pregunta muy práctica: <strong>¿cuántos puntos ELO gano o pierdo después de este resultado?</strong> Introduce tu rating, el rating del oponente, el resultado del partido y el factor K. La herramienta calcula la puntuación esperada, la variación de rating, tu nuevo ELO y el nuevo ELO del oponente en la misma tarjeta de resultados.'
  },
  {
    type: 'summary' as const,
    title: 'Lo que responde esta calculadora',
    items: [
      'Cuántos puntos ELO ganas tras una victoria contra un oponente más fuerte o más débil.',
      'Cuántos puntos ELO pierdes tras una derrota sorpresiva.',
      'Si un empate debería aumentar o disminuir tu rating.',
      'Cuál es el rating del oponente después del mismo intercambio de puntos.',
      'Cómo cambiar el factor K hace que el movimiento del rating sea estable o volátil.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'puntuación de victoria', description: 'Una victoria se trata como un punto completo antes de compararla con la puntuación esperada.' },
      { value: '0.5', label: 'puntuación de empate', description: 'Un empate está justo entre una victoria y una derrota, por lo que puede ganar puntos contra un oponente más fuerte.' },
      { value: '0.0', label: 'puntuación de derrota', description: 'Una derrota contra un oponente de menor rating suele costar más porque era inesperada.' },
    ]
  },
  { type: 'title' as const, text: 'Lo que Hace la Fórmula ELO', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'Los tres pasos detrás de cada resultado',
    description: 'La calculadora sigue la idea estándar de ELO sin hacerte trabajar manualmente con la fórmula.',
    items: [
      { label: 'Puntuación esperada', value: 'La diferencia de rating se convierte en una puntuación de estilo probabilístico. Se espera que los jugadores con mayor rating obtengan más puntuación.' },
      { label: 'Puntuación real', value: 'Una victoria cuenta como 1, un empate como 0.5 y una derrota como 0.' },
      { label: 'Cambio de rating', value: 'La diferencia entre la puntuación real y la esperada se multiplica por el factor K y se redondea a puntos.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situación', 'Lo que suele pasar', 'Por qué sucede'],
    rows: [
      ['Vences a un oponente más fuerte', 'Gran ganancia de ELO', 'Tu puntuación real fue mucho mayor de lo esperado'],
      ['Vences a un oponente más débil', 'Pequeña ganancia de ELO', 'La fórmula ya esperaba que ganaras'],
      ['Empatas con un oponente más fuerte', 'Pequeña ganancia de ELO', 'Un empate puede superar tu puntuación esperada'],
      ['Pierdes contra un oponente más débil', 'Gran pérdida de ELO', 'El resultado fue peor de lo esperado'],
    ]
  },
  { type: 'title' as const, text: 'Eligiendo el Factor K Adecuado para tu Sistema de Rating', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>El factor K es el mando de sensibilidad de un sistema ELO.</strong> No decide quién merecía ganar. Decide con qué fuerza reacciona la tabla de rating a un resultado. Si tu liga tiene muchos partidos y ratings maduros, un K más bajo mantiene la tabla tranquila. Si los jugadores son nuevos o las temporadas son cortas, un K más alto ayuda a que los ratings se ajusten más rápido.'
  },
  {
    type: 'table' as const,
    headers: ['Factor K', 'Usar para', 'Lo que el usuario debe esperar'],
    rows: [
      ['10 a 16', 'Clubes de ajedrez establecidos, grupos de expertos, rankings de larga duración', 'Ratings muy estables con pequeños cambios después de cada partido'],
      ['20 a 32', 'Ligas locales, escaleras de club, torneos recurrentes', 'Movimiento equilibrado que se siente receptivo sin sobrerreaccionar'],
      ['40 a 60', 'Jugadores nuevos, temporadas cortas, escaleras de esports, grupos informales', 'Corrección rápida cuando el rating actual puede ser inexacto'],
      ['60 o más', 'Solo formatos experimentales o ratings provisionales', 'Ratings muy volátiles donde un partido puede cambiar la tabla drásticamente'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Mejor valor predeterminado para la mayoría de usuarios',
    html: 'Si no sigues una regla oficial de federación, empieza con <strong>K 32</strong>. Es suficientemente receptivo para escaleras activas y a la vez estable para que un resultado afortunado no reescriba completamente el ranking.'
  },
  { type: 'title' as const, text: 'Cómo Leer el Resultado de tu Calculadora ELO', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Esperado:</strong> la puntuación que la fórmula predijo antes del partido. Una puntuación esperada más alta significa que eras el favorito.',
      '<strong>Cambio:</strong> los puntos ELO exactos añadidos o quitados del rating del jugador.',
      '<strong>Nuevo rating:</strong> el rating del jugador después de aplicar el resultado.',
      '<strong>Nuevo ELO del oponente:</strong> el rating del oponente después del movimiento de puntos opuesto.',
      '<strong>Impacto del partido:</strong> un resumen en lenguaje claro de con qué fuerza movió el resultado la tabla.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Ajedrez y juegos de mesa',
        description: 'Calcula ratings post-partida para noches de club, eventos online y grupos de rating privados.',
        icon: 'mdi:chess-knight',
        points: ['Soporte victoria-empate-derrota', 'ELO del oponente mostrado', 'Ideal para rankings a largo plazo']
      },
      {
        title: 'Escaleras de esports',
        description: 'Actualiza rankings de jugadores o equipos después de partidos repetidos uno contra uno donde la habilidad puede cambiar rápidamente.',
        icon: 'mdi:gamepad-variant',
        points: ['Opciones de factor K más alto', 'Corrección rápida de rating', 'Recompensas claras por sorpresas']
      },
      {
        title: 'Escaleras deportivas',
        description: 'Mantén rankings justos para tenis, pádel, squash, tenis de mesa, bádminton y ligas locales.',
        icon: 'mdi:tennis',
        points: ['Actualizaciones manuales simples', 'Funciona para clubes', 'Fácil para organizadores']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'Cuándo ELO es una buena opción de rating',
    items: [
      {
        pro: 'Excelente para partidos repetidos uno contra uno donde los jugadores más fuertes deberían ganar más a menudo.',
        con: 'Menos ideal para deportes de equipo donde la contribución individual es difícil de aislar.'
      },
      {
        pro: 'Fácil de explicar porque las victorias contra oponentes más fuertes valen más puntos.',
        con: 'Necesita suficientes partidos antes de que los ratings se sientan precisos para jugadores completamente nuevos.'
      },
      {
        pro: 'Suficientemente simple para mantener en una hoja de cálculo, escalera de club o tabla de liga.',
        con: 'Las reglas del factor K deben ser consistentes o los rankings se vuelven difíciles de confiar.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Importante para organizadores de ligas',
    html: 'Elige tu factor K antes de que empiece la temporada y publícalo. Los jugadores confían más en las tablas ELO cuando todos saben cómo se calculan los ratings antes de introducir los resultados.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
