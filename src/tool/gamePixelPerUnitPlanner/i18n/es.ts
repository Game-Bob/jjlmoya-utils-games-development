import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamePixelPerUnitPlannerUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  { question: '¿Qué significa píxeles por unidad en un juego?', answer: 'Los píxeles por unidad, o PPU, indican cuántos píxeles de textura representan una unidad del mundo. Una densidad coherente ayuda a que sprites, tiles y cámara compartan una escala predecible.' },
  { question: '¿Por qué importan las escalas enteras?', answer: 'Una escala entera asigna el mismo número completo de píxeles de pantalla a cada píxel original. Las escalas fraccionarias pueden producir bordes desiguales o suavizado.' },
  { question: '¿Qué es el pixel bleeding?', answer: 'Es la aparición de color de un texel vecino o de otra zona de un atlas. El filtrado, los bordes, el movimiento subpixel y la falta de padding pueden provocarlo.' },
  { question: '¿Cómo uso la escala recomendada?', answer: 'Úsala como candidata que cabe en la resolución y se acerca a tu objetivo. Después comprueba en el motor el filtrado nearest, el snapping de cámara y el padding del atlas.' },
  { question: '¿El planificador elige el PPU correcto para cualquier motor?', answer: 'No. Es una ayuda aritmética transparente. Cada motor puede cambiar cámara, importación, mipmaps, redondeo y pixel snapping, así que el resultado necesita una prueba real.' },
];

const howTo = [
  { name: 'Elige la pantalla de destino', text: 'Indica el ancho y alto de la vista de juego o del lienzo de referencia en píxeles.' },
  { name: 'Carga el sprite', text: 'Elige una imagen y deja que la herramienta detecte su ancho y alto nativos. También puedes usar el sprite de ejemplo de Bob.' },
  { name: 'Elige una escala', text: 'Mueve el control de escala o pulsa un preset. Los multiplicadores enteros son los candidatos más nítidos.' },
  { name: 'Lee la preview', text: 'Comprueba el footprint del sprite, el PPU horizontal y vertical, el viewport visible y el aviso de bleeding.' },
  { name: 'Valida en el motor', text: 'Prueba la escala elegida con filtrado nearest, cámara alineada, padding de atlas y las resoluciones reales del juego.' },
];

const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Planificador de píxeles por unidad para juegos', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Cómo probar el escalado de un sprite pixel art', step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<GamePixelPerUnitPlannerUI> = {
  slug: 'planificador-pixeles-por-unidad-sprite-juegos',
  title: 'Planificador de píxeles por unidad para sprites de juegos',
  description: 'Sube un sprite o usa el ejemplo de Bob para ver su footprint a distintas escalas enteras, comprobar el PPU y detectar riesgos de pixel bleeding.',
  ui: {
    inputsTitle: 'Carga y prueba tu sprite', uploadTitle: 'Tu imagen de origen', uploadHint: 'Elige un PNG, GIF, WebP o JPEG. Sus dimensiones nativas alimentan cada preview.', chooseSpriteLabel: 'Elegir sprite', noSpriteLabel: 'No hay sprite cargado', defaultSpriteLabel: 'Sprite de Bob de ejemplo', loadedSpriteLabel: 'Cargado', clearSpriteLabel: 'Quitar sprite', displayWidthLabel: 'Ancho de pantalla px', displayHeightLabel: 'Alto de pantalla px', spriteWidthLabel: 'Ancho del sprite px', spriteHeightLabel: 'Alto del sprite px', worldWidthLabel: 'Ancho del sprite en unidades', worldHeightLabel: 'Alto del sprite en unidades', targetScaleLabel: 'Escala objetivo en pantalla', targetScaleHint: 'Píxeles de pantalla por cada píxel de la textura.', resolutionPresetsLabel: 'Resoluciones de referencia', preset320: '320 x 180', preset384: '384 x 216', preset640: '640 x 360', scalePresetsLabel: 'Escalas rápidas', scale1: '1x', scale2: '2x', scale3: '3x', scale4: '4x', scale6: '6x', resetLabel: 'Restablecer valores', fieldTitle: 'Míralo a distintos tamaños', fieldCaption: 'La imagen cargada se renderiza con escalado nearest para valorar su footprint real en cada multiplicador entero.', previewPlaceholder: 'Carga un sprite para empezar la prueba visual', previewScaleLabel: 'Escala de preview', sourceImageAlt: 'Preview del sprite cargado', viewportLabel: 'Pantalla', spriteLabel: 'Sprite renderizado', crispTitle: 'Escalas nítidas', crispCaption: 'Los multiplicadores enteros conservan el tamaño uniforme de los píxeles. Las escalas grises superan la pantalla declarada.', fitLabel: 'Cabe en pantalla:', yesLabel: 'sí', noLabel: 'no', recommendedLabel: 'ajuste más cercano', summaryTitle: 'Resumen del plan', ppuXLabel: 'PPU horizontal', ppuYLabel: 'PPU vertical', viewportWorldLabel: 'Mundo visible', fitScaleLabel: 'Mayor escala que cabe', bleedingRiskLabel: 'Riesgo de bleeding', lowRisk: 'Bajo', mediumRisk: 'Medio', highRisk: 'Alto', riskLowMessage: 'Los ejes están alineados y la escala objetivo es entera y cabe en la pantalla. Comprueba aun así el filtrado y el padding del atlas.', riskMediumMessage: 'El objetivo encaja de forma imperfecta: revisa el desajuste de ejes o las escalas resaltadas.', riskHighMessage: 'La escala puede producir muestreo desigual. Prefiere un multiplicador entero y revisa las dimensiones del sprite.', alignmentLabel: 'Nota de muestreo', tableTitle: 'Registro accesible de escalas', tableScale: 'Escala', tableWidth: 'Ancho renderizado', tableHeight: 'Alto renderizado', tableFits: 'Cabe en pantalla', modelNote: 'El PPU se calcula como píxeles renderizados del sprite divididos por su tamaño en unidades en cada eje. El riesgo de bleeding es una heurística, no una inspección de textura ni una garantía del motor.', privacyDisclosure: 'El archivo se procesa en este navegador. No se suben sprites, archivos de proyecto ni telemetría.', statusReady: 'Preview actualizada', unitPixels: 'px', unitUnits: 'unidades',
  },
  seo: [
    { type: 'title', level: 2, text: 'Convierte el tamaño del sprite en una decisión de escala' },
    { type: 'paragraph', html: 'Un sprite tiene el tamaño de su bitmap y el tamaño que ocupa en el mundo del juego. El PPU conecta ambas medidas. La preview te permite ver la consecuencia visual en lugar de confiar solo en una cifra.' },
    { type: 'paragraph', html: 'Carga una imagen real y la herramienta toma sus dimensiones nativas. Después multiplica cada eje por la escala elegida y calcula qué parte del mundo queda visible en la resolución declarada.' },
    { type: 'title', level: 2, text: 'Qué debes mirar en la preview' },
    { type: 'list', items: ['Compara el footprint del sprite con la pantalla de referencia.', 'Prueba primero escalas enteras para mantener cada píxel uniforme.', 'Usa el PPU de ambos ejes para encontrar estiramientos no intencionados.', 'Trata el aviso de bleeding como una señal para probar el motor.'] },
    { type: 'title', level: 2, text: 'Por qué una escala entera suele ser más limpia' },
    { type: 'paragraph', html: 'A 3x, cada píxel de origen ocupa tres píxeles de pantalla. A 2.5x, el renderer debe repartir algunos píxeles con anchos distintos. El filtrado nearest evita mezclar colores, pero no puede corregir una cámara colocada entre posiciones de píxel.' },
    { type: 'table', headers: ['Señal', 'Lectura', 'Siguiente decisión'], rows: [['PPU igual', 'Los dos ejes comparten densidad.', 'Compáralo con tiles y la cuadrícula del proyecto.'], ['Escala fraccionaria', 'El footprint no usa un multiplicador entero.', 'Prueba la escala entera más cercana.'], ['No cabe', 'El sprite supera la pantalla.', 'Reduce la escala o aumenta la resolución de referencia.']] },
    { type: 'title', level: 2, text: 'Distingue el bleeding del simple tamaño' },
    { type: 'paragraph', html: 'El pixel bleeding suele venir de muestras vecinas en un atlas, bordes filtrados o coordenadas de cámara no alineadas. Si la imagen se ve suave, primero revisa el filtrado; si aparecen costuras, revisa padding, clamp y límites del atlas.' },
    { type: 'title', level: 2, text: 'Usa el sprite de ejemplo para aprender el flujo' },
    { type: 'paragraph', html: 'El Bob de ejemplo deja ver la forma del personaje con el lazo rosa desde el primer momento. Cambia la resolución y la escala para observar cuándo el cuerpo deja de caber o cuándo los píxeles pierden uniformidad.' },
    { type: 'title', level: 2, text: 'Qué valida y qué no valida esta herramienta' },
    { type: 'paragraph', html: 'La herramienta compara dimensiones y footprints en una vista controlada. No abre un proyecto del motor, no inspecciona un atlas, no mide un dispositivo y no puede garantizar movimiento pixel perfect durante una partida.' },
    { type: 'title', level: 2, text: 'Un flujo corto para elegir una escala' },
    { type: 'paragraph', html: 'Carga el sprite, selecciona la resolución de referencia, prueba 1x, 2x, 3x y 4x, y elige la mayor escala entera que conserve aire en pantalla. Luego repite la comprobación en las resoluciones que realmente soporta el juego.' },
    { type: 'tip', title: 'La última comprobación ocurre en el motor', html: 'Usa esta preview para acotar una decisión. Después activa nearest filtering, revisa el padding del atlas, alinea la cámara y prueba movimiento y diferentes resoluciones antes de dar por bueno el resultado.' },
  ],
  faqTitle: 'Preguntas sobre escalado de sprites', faq, bibliographyTitle: 'Referencias de renderizado pixel art', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
