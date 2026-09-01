import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'Editor de mapas de tiles isométricos';
const description = 'Dibuja mapas en cuadrícula de diamantes con capas, ajusta la geometría de los tiles y exporta el boceto del nivel como JSON o SVG.';
const faq = [
  { question: '¿Qué es un mapa de tiles isométrico?', answer: 'Un mapa de tiles isométrico usa una cuadrícula en forma de diamante para sugerir espacio tridimensional dentro de una escena bidimensional. Las columnas y filas describen el plano del suelo y las capas añaden un desplazamiento de altura.' },
  { question: '¿Cómo coloco un tile?', answer: 'Elige un tile de la paleta, deja Pintar seleccionado, elige la capa activa y haz clic en un diamante. El clic derecho borra una celda incluso mientras Pintar está activo.' },
  { question: '¿Qué cambia la profundidad de capa?', answer: 'La profundidad de capa es el desplazamiento vertical en pantalla entre niveles apilados. Auméntala para representar escalones altos y redúcela cuando las capas deban quedar más juntas.' },
  { question: '¿Puedo usar el SVG exportado en un motor de juegos?', answer: 'El SVG es una referencia visual con los diamantes y colores actuales. JSON es mejor para reconstruir la cuadrícula lógica porque conserva filas, columnas, capas y valores de tile.' },
  { question: '¿Este editor crea un tileset listo para producción?', answer: 'No. Planifica una cuadrícula por capas y exporta una descripción compacta del mapa. No corta texturas, configura colisiones, elige reglas de ordenación ni garantiza el renderizado final en un motor concreto.' },
];
const howTo = [
  { name: 'Configura la geometría', text: 'Elige el ancho y alto del tile, y después el número de columnas, filas y capas. Usa la profundidad de capa para describir el salto vertical entre niveles.' },
  { name: 'Elige una capa de dibujo', text: 'Selecciona una capa antes de pintar. La capa activa tiene un borde más marcado y las demás capas visibles conservan una opacidad reducida para dar contexto espacial.' },
  { name: 'Pinta el suelo o la estructura', text: 'Elige Hierba, Piedra, Agua o Camino y haz clic en las celdas. Cambia la paleta cuando la siguiente celda necesite otro material.' },
  { name: 'Corrige el mapa localmente', text: 'Usa Borrar o haz clic derecho sobre una celda para quitar un tile. Al cambiar las dimensiones se conservan las celdas que siguen dentro de los límites.' },
  { name: 'Exporta el resultado', text: 'Usa JSON si otra herramienta reconstruirá la cuadrícula y SVG si necesitas una referencia visual rápida para revisar el diseño o el nivel.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'editor-de-mapas-de-baldosas-isometricas', title, description,
  ui: {
    controlsTitle: 'Controles del mapa', geometryTitle: 'Geometría de la cuadrícula', tileWidthLabel: 'Ancho del tile', tileHeightLabel: 'Alto del tile', columnsLabel: 'Columnas', rowsLabel: 'Filas', layersLabel: 'Capas', layerDepthLabel: 'Profundidad de capa', toolsTitle: 'Modo de dibujo', paintLabel: 'Pintar', eraseLabel: 'Borrar', paletteTitle: 'Paleta de tiles', grassLabel: 'Hierba', stoneLabel: 'Piedra', waterLabel: 'Agua', pathLabel: 'Camino', layersTitle: 'Capa activa', layerLabel: 'Capa', hideLayerLabel: 'Ocultar', showLayerLabel: 'Mostrar', mapTitle: 'Mapa isométrico', mapHelp: 'Selecciona un tile y una capa, después haz clic en los diamantes. El clic derecho borra cualquier celda.', mapAriaLabel: 'Mapa de tiles isométrico editable', summaryTitle: 'Lectura del mapa', filledLabel: 'Celdas ocupadas', coverageLabel: 'Cobertura', activeLayerLabel: 'Capa activa', selectedLabel: 'Tile seleccionado', emptyCellLabel: 'Vacía', cellLabel: 'Celda', clearLabel: 'Vaciar mapa', resetLabel: 'Restablecer geometría', exportJsonLabel: 'Exportar JSON', exportSvgLabel: 'Exportar SVG', statusReady: 'Listo para dibujar', statusSaved: 'Guardado localmente', statusCleared: 'Mapa vaciado', statusReset: 'Geometría restablecida', statusExported: 'Archivo exportado', statusPainted: 'Tile colocado', statusErased: 'Tile borrado', statusLayerHidden: 'Capa oculta', statusLayerShown: 'Capa visible', legendTitle: 'Clave del mapa', legendEmpty: 'Celda vacía', legendFilled: 'Celda pintada', modelNote: 'Este editor describe una cuadrícula lógica con capas. No importa un tileset, calcula colisiones, configura la ordenación específica del motor ni garantiza la posición final de los píxeles.', privacyDisclosure: 'Tu mapa permanece en este navegador. No se suben datos del mapa ni telemetría.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Usa una cuadrícula isométrica para planificar espacio y altura' },
    { type: 'paragraph', html: 'Un mapa isométrico resulta útil cuando un nivel necesita posiciones de suelo legibles y sensación de altura sin convertirse en una escena 3D completa. La cuadrícula de diamantes hace visibles las filas y columnas, mientras las capas permiten bosquejar puentes, plataformas, tejados o habitaciones superpuestas.' },
    { type: 'paragraph', html: 'Este editor mantiene la geometría explícita. El ancho y alto del tile controlan el diamante, las columnas y filas definen la superficie, y la profundidad de capa controla cuánto sube cada nivel en pantalla. Al cambiar las dimensiones se conservan las celdas que siguen dentro de los límites.' },
    { type: 'title', level: 2, text: 'Construye un blockout útil en cinco pasadas' },
    { type: 'list', items: ['Ajusta las proporciones del tile al lenguaje visual del proyecto.', 'Pinta primero un material de suelo para que las zonas transitables se lean bien.', 'Usa una capa para puentes, tejados o plataformas elevadas en vez de expresar la altura solo con color.', 'Oculta las capas superiores o cambia a Borrar para corregir las celdas inferiores con seguridad.', 'Exporta JSON para reconstruir el mapa y SVG para revisarlo visualmente.'] },
    { type: 'title', level: 2, text: 'Lee por separado filas, columnas y capas' },
    { type: 'paragraph', html: 'Las filas y columnas indican dónde vive una celda en el plano lógico y deben mantenerse estables aunque cambie el tamaño visual del diamante. Las capas añaden una segunda coordenada: dos celdas pueden compartir fila y columna y ocupar alturas distintas. Separar ambos conceptos facilita reconstruir el mapa en un motor.' },
    { type: 'table', headers: ['Señal', 'Significado', 'Siguiente decisión útil'], rows: [['Cobertura escasa', 'La mayoría de las celdas siguen vacías.', 'Define primero la superficie jugable antes de decorar.'], ['Varias capas en una columna', 'El mapa contiene espacio apilado.', 'Comprueba que la ordenación y las colisiones distingan esas alturas.'], ['Diamante muy ancho', 'El desplazamiento horizontal domina la cuadrícula.', 'Reduce el ancho del tile o aumenta el viewport de referencia.'], ['Salto de capa muy profundo', 'Los cambios de altura son muy visibles.', 'Usa menos capas o confirma que los assets soportan esa elevación.']] },
    { type: 'title', level: 2, text: 'Elige el export adecuado para la siguiente tarea' },
    { type: 'paragraph', html: 'JSON es la entrega estructurada: conserva la geometría, el número de capas, el estado de dibujo y todos los valores de tile. SVG es la entrega de presentación: muestra los diamantes coloreados y sirve para una revisión, una issue o un documento de planificación. Ninguno contiene un tileset fuente ni metadatos del motor.' },
    { type: 'tip', title: 'Lo que este blockout no puede demostrar', html: 'Un mapa de diamantes convincente no demuestra que los sprites se ordenen correctamente, que los personajes puedan moverse entre alturas o que un tileset conecte sin juntas. Prueba los assets reales, las colisiones, el eje de ordenación y la cámara en el motor objetivo.' },
  ],
  faqTitle: 'Preguntas sobre mapas de tiles isométricos', faq, bibliographyTitle: 'Referencias sobre mapas de tiles', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
