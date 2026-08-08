import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'depurador-csv-localizacion-godot-unity',
  title: 'Depurador de Archivos CSV y JSON de Localizacion para Godot y Unity',
  description: 'Inspeccione archivos CSV o JSON de traduccion en busca de celdas vacias, claves duplicadas y filas defectuosas, y exporte una copia limpia lista para el motor.',
  ui: {
    csvTab: 'Archivo CSV',
    jsonTab: 'Archivo JSON',
    dropTitle: 'Arrastre un archivo de traduccion aqui',
    dropSubtitle: 'Inspeccione la estructura en su navegador conservando el archivo fuente en su equipo.',
    browseButton: 'Buscar archivos',
    sampleButton: 'Cargar ejemplo',
    clearButton: 'Limpiar',
    inputLabel: 'Entrada de archivo de traduccion',
    formatLabel: 'Formato',
    healthLabel: 'Estado del archivo',
    readyStatus: 'Listo para importar',
    reviewStatus: 'Requiere revision',
    emptyCellsLabel: 'Celdas vacias',
    duplicateKeysLabel: 'Claves duplicadas',
    malformedRowsLabel: 'Filas defectuosas',
    cleanRowsLabel: 'Filas limpias',
    issueListTitle: 'Hallazgos',
    noIssues: 'No se encontraron problemas en este analisis.',
    previewTitle: 'Vista previa de traduccion',
    previewSubtitle: 'Las primeras filas muestran la estructura normalizada que se exportara.',
    exportTitle: 'Exportar archivo limpio',
    exportSubtitle: 'Se eliminan duplicados, se rellenan columnas faltantes y se escapan valores CSV.',
    downloadButton: 'Descargar archivo limpio',
    copyButton: 'Copiar resultado',
    copiedMessage: 'Resultado limpio copiado al portapapeles.',
    emptyIssue: 'Celda de traduccion vacia',
    duplicateIssue: 'Clave duplicada eliminada',
    malformedIssue: 'Disparidad de columnas o comillas',
    parseIssue: 'No se pudo analizar el archivo.',
    rowLabel: 'Fila',
    columnLabel: 'Columna',
    keyLabel: 'Clave',
    sampleFileName: 'ejemplo-localizacion.csv',
    privacyNote: 'Procesamiento local en el navegador',
    waitingTitle: 'Esperando un archivo',
    waitingSubtitle: 'Arrastre un archivo CSV o JSON para comenzar la inspeccion.',
    fileTypeNote: 'CSV UTF-8 o JSON estructurado',
  },
  seo: [
    { type: 'title', level: 2, text: 'Por que los archivos de localizacion fallan al importar en el motor' },
    {
      type: 'paragraph',
      html: 'Las tablas de traduccion son sencillas de editar pero faciles de dañar. Una coma dentro de una frase o comillas faltantes pueden desplazar los valores a la columna de idioma incorrecta. Una clave duplicada genera ambiguedad al importar.',
    },
    {
      type: 'paragraph',
      html: 'El importador CSV de Godot requiere una fila de cabecera, una primera columna de identificadores y columnas de idioma consistentes. Unity Localization tambien utiliza CSV. Esta herramienta valida y normaliza la estructura antes de la importacion.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: 'Verificacion de comas' },
        { value: 'JSON', label: 'Entrada de matrices y mapas' },
        { value: '0 subidas', label: 'Procesamiento local' },
        { value: '1 clic', label: 'Exportacion limpia' },
      ],
    },
    { type: 'title', level: 2, text: 'Que verifica el depurador' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Detectado antes de importar',
          description: 'Problemas dificiles de detectar a simple vista',
          points: ['Celdas de idioma vacias', 'Claves duplicadas', 'Registros con columnas sobrantes o faltantes', 'Sintaxis de comillas invalida'],
        },
        {
          title: 'Normalizado para exportar',
          description: 'Correcciones seguras y predecibles',
          points: ['Columnas faltantes rellenadas', 'Campos extra unidos en la ultima columna', 'Se conserva la primera aparicion de clave', 'El archivo original no se modifica'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Como revisar el archivo depurado' },
    {
      type: 'paragraph',
      html: 'La limpieza estructural no reemplaza la revision linguistica. Utilice la lista de hallazgos para completar traducciones pendientes.',
    },
    {
      type: 'table',
      headers: ['Hallazgo', 'Significado', 'Accion recomendada'],
      rows: [
        ['Celda vacia', 'Una columna de idioma no contiene texto', 'Traduzca o confirme si es intencional'],
        ['Clave duplicada', 'Mas de una fila usa el mismo identificador', 'Compare las filas antes de usar la primera aparicion'],
        ['Fila defectuosa', 'Estructura o comillas no coinciden con la cabecera', 'Revise la celda final normalizada'],
        ['Error de analisis', 'El archivo JSON no se puede leer', 'Corrija la sintaxis antes de importar'],
      ],
    },
    { type: 'title', level: 2, text: 'Convenciones CSV para videojuegos' },
    {
      type: 'paragraph',
      html: 'Las reglas CSV basicas exigen campos separados por comas y delimitacion con comillas dobles cuando existen signos de puntuacion.',
    },
    {
      type: 'tip',
      title: 'Conserve el archivo original',
      html: 'Mantenga el archivo original del traductor y pruebe la version limpia en el motor antes de confirmar cambios.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Clave de traduccion', definition: 'Identificador unico utilizado por el codigo del juego.' },
        { term: 'Campo CSV', definition: 'Valor individual entre delimitadores.' },
        { term: 'Escapado', definition: 'Uso de comillas para mantener la puntuacion como texto.' },
        { term: 'Locale', definition: 'Codigo de idioma y region como es, en o ja.' },
      ],
    },
  ],
  faq: [
    {
      question: '¿Se suben los archivos a un servidor?',
      answer: 'No, todo el procesamiento se realiza localmente en el navegador.',
    },
    {
      question: '¿Que ocurre si una fila CSV tiene comas adicionales?',
      answer: 'La fila se marca como defectuosa y los campos extra se unen en la columna final.',
    },
    {
      question: '¿Como se limpian las claves duplicadas?',
      answer: 'Se conserva la primera aparicion y las siguientes se omiten del archivo limpio.',
    },
    {
      question: '¿Valida la calidad de la traduccion?',
      answer: 'No, solo verifica la estructura del archivo y campos faltantes.',
    },
  ],
  howTo: [
    { name: 'Seleccionar formato', text: 'Elija CSV o JSON.' },
    { name: 'Inspeccionar hallazgos', text: 'Cargue el archivo y revise la lista de inconsistencias.' },
    { name: 'Exportar y probar', text: 'Descargue la version limpia e importela en su motor.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Depurador de Archivos CSV y JSON de Localizacion para Godot y Unity',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: '¿Se suben los archivos a un servidor?',
        acceptedAnswer: { '@type': 'Answer', text: 'No, todo el procesamiento se realiza localmente en el navegador.' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como depurar un archivo de localizacion',
      step: [
        { '@type': 'HowToStep', name: 'Seleccionar formato', text: 'Elija CSV o JSON.' },
        { '@type': 'HowToStep', name: 'Inspeccionar hallazgos', text: 'Cargue el archivo y revise la lista de inconsistencias.' },
        { '@type': 'HowToStep', name: 'Exportar y probar', text: 'Descargue la version limpia e importela en su motor.' },
      ],
    },
  ],
  bibliography: [
    { name: 'Documentacion ResourceImporterCSVTranslation de Godot', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Documentacion de importacion CSV en Unity Localization', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'Especificacion RFC 4180 CSV', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
