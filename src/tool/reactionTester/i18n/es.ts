import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'test-reflejos';
const title = 'Test de Velocidad de Reacción (Reflejos): Benchmark Online';
const description = 'Mide tus reflejos en milisegundos con nuestro test de reacción profesional. Compite por rangos desde \'Tortuga\' hasta \'Ciberatleta\' y analiza tu rendimiento.';

const ui: ReactionTesterUI = {
  title: 'Test de Reflejos',
  subtitle: 'Mide tu velocidad de reacción en milisegundos. Promedio de 5 intentos.',
  startBtn: 'Haz click para comenzar',
  goTitle: '¡YA!',
  goSubtitle: '¡DALE AHORA!',
  earlyTitle: '¡Demasiado pronto!',
  earlySubtitle: 'Espera a que se ponga verde.',
  earlyRetry: 'Click para reintentar',
  promptNext: 'Click para intento',
  promptFinal: 'Ver Resultados Finales',
  avgLabel: 'Promedio final',
  copyBtn: 'Copiar',
  tweetBtn: 'Twittear',
  retryBtn: 'Intentar de nuevo',
  inputMouse: 'Ratón',
  inputTouch: 'Táctil',
  inputSpace: 'Espacio',
  historyTitle: 'Historial Local',
  historyBest: 'Top 5 Mejores',
  historyWorst: 'Top 5 Peores',
  historyEmpty: 'Juega para registrar tu primer récord',
  copySuccess: '¡Copiado!',
  shareText: '¡He sacado {ms}ms en el Test de Reflejos!\nRango: {rank}\n\n¿Puedes superarme?\n{url}',
  rankCiberatleta: 'Ciberatleta',
  rankTigre: 'Tigre',
  rankHumano: 'Humano',
  rankTortuga: 'Tortuga',
  rankDormido: 'Dormido',
  f150: '¡¿ERES UN ROBOT?!',
  f180: '¡INCREÍBLE!',
  f210: '¡Muy rápido!',
  f250: 'Buena reacción',
  f300: 'No está mal...',
  f400: 'Un poco lento...',
  f600: 'Te has dormido',
  fSlow: 'Despierta...',
  wp0t: 'ESPERA...', wp0s: 'Aguanta la respiración...',
  wp1t: 'QUIETO...', wp1s: 'No parpadees ahora',
  wp2t: 'ATENTO...', wp2s: 'Dedos preparados...',
  wp3t: 'HOLD...', wp3s: 'Paciencia, saltamontes',
  wp4t: 'OJITO...', wp4s: 'Va a salir ya...'
};

const faqData = [
  { question: '¿Cuál es el tiempo de reacción medio de un humano?', answer: 'El tiempo medio de reacción humana ante un estímulo visual es de aproximadamente 250 a 270 milisegundos. Los atletas de alto rendimiento y pro-gamers suelen estar por debajo de los 200ms.' },
  { question: '¿Cómo puedo mejorar mis reflejos?', answer: 'La clave es la práctica constante y el descanso. Jugar a videojuegos de acción (FPS), practicar deportes rápidos como el ping-pong y mantener una buena hidratación ayuda a mantener el sistema nervioso alerta.' },
  { question: '¿Afecta la pantalla a mi resultado?', answer: 'Sí. Existe algo llamado \'input lag\'. Las pantallas con baja tasa de refresco (60Hz) o los ratones inalámbricos antiguos pueden añadir entre 15 y 50ms extras a tu tiempo real de reacción.' },
  { question: '¿A qué edad empezamos a perder reflejos?', answer: 'Fisiológicamente, los reflejos humanos alcanzan su pico máximo entre los 20 y 24 años. A partir de ahí, se produce un declive muy lento (aprox. 2-6ms por década) si no se entrenan.' },
];

const howTo = [
  { name: 'Esperar al color rojo', text: 'Haz clic en la zona de inicio y espera pacientemente a que la pantalla cambie de color.' },
  { name: 'Reaccionar al verde', text: 'En cuanto veas el color verde, haz clic o toca la pantalla lo más rápido que puedas.' },
  { name: 'Ver el resultado', text: 'El sistema calculará la diferencia exacta en milisegundos entre el cambio de color y tu pulsación.' },
  { name: 'Analizar tu rango', text: 'Repite el test 5 veces para obtener una media fiable y descubrir si eres una \'Tortuga\' o un \'Ciberatleta\'.' },
];

const seo = [
  { type: 'title' as const, text: '¿Cómo funciona este Test de Reflejos?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Esta herramienta mide tu <strong>tiempo de reacción visual</strong> con precisión quirúrgica. Calculamos el intervalo exacto desde que la pantalla se ilumina hasta que la señal viaja de tus ojos al cerebro, y de ahí a tus dedos. El test exige <strong>5 intentos consecutivos</strong> para calcular tu promedio real, eliminando el factor suerte.'
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Promedio de 5 intentos:</strong> Eliminamos el factor "suerte" obligándote a ser consistente. Un solo clic afortunado no te hará un Ciberatleta.',
      '<strong>Sistema Anti-Trampas:</strong> Tiempos de espera aleatorios (1.5s - 4.5s) y detección de clics anticipados para evitar predicciones.',
      '<strong>Ciencia real:</strong> Procesamiento cerebral ~180-200ms + respuesta motora +20-40ms = tu tiempo total de reacción.',
    ]
  },
  { type: 'title' as const, text: 'Tabla de Clasificación Mundial', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Tiempo', 'Rango', 'Descripción'],
    rows: [
      ['&lt; 180 ms', 'Ciberatleta', 'Nivel sobrehumano propio de pros de eSports o pilotos de caza.'],
      ['180 - 230 ms', 'Tigre', 'Reflejos afilados. Probablemente seas muy bueno en shooters.'],
      ['230 - 280 ms', 'Humano', 'El promedio saludable. Estás despierto y funcionando correctamente.'],
      ['280 - 350 ms', 'Tortuga', 'Por debajo de la media. Descansa o entrena más.'],
      ['&gt; 350 ms', 'Dormido', 'Posible fatiga, sueño o hardware lento (input lag).'],
    ]
  },
  { type: 'title' as const, text: '¿Por qué eres lento? Culpando al Hardware', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitor (Hz)',
        description: 'Un monitor de 60Hz tarda ~16ms en pintar un cuadro. Uno de 144Hz tarda solo 7ms. Esa diferencia de 10ms cuenta en tu puntuación final.',
        icon: 'mdi:monitor',
        points: ['60Hz = ~16ms por frame', '144Hz = ~7ms por frame', 'Diferencia visible en test']
      },
      {
        title: 'Ratón Inalámbrico',
        description: 'Los ratones bluetooth de oficina baratos tienen latencias altas. Para este test, usa cable o tecnología wireless 2.4GHz de baja latencia.',
        icon: 'mdi:mouse-variant',
        points: ['Bluetooth barato: +15-50ms', '2.4GHz gamer: <1ms extra', 'Cable USB: referencia']
      },
      {
        title: 'Navegador',
        description: 'Las extensiones que bloquean anuncios o scripts pesados pueden causar "stuttering". Prueba en modo incógnito para tu récord real.',
        icon: 'mdi:web',
        points: ['Cierra extensiones pesadas', 'Modo incógnito = más limpio', 'Chrome/Firefox recomendado']
      },
    ]
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

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
