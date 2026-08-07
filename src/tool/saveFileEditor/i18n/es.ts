import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'editor-archivos-guardado-juegos',
  title: 'Editor y Ofuscador de Archivos de Guardado de Juegos',
  description: 'Desencripta, inspecciona, edita payloads JSON y vuelve a encriptar archivos de guardado usando Base64, máscaras XOR o texto plano 100% local en tu navegador.',
  ui: {
    title: 'Editor y Ofuscador de Guardado de Juegos',
    subtitle: 'Inspecciona, modifica y encripta archivos de estado de guardado local sin filtraciones a servidores',
    dropSaveFile: 'Arrastra y suelta el archivo de guardado aquí',
    orSelectFile: 'o haz clic para explorar un archivo local',
    encryptionMethod: 'Formato de Encriptación',
    methodBase64: 'Codificación Base64',
    methodXor: 'Máscara XOR + Base64',
    methodRaw: 'JSON Plano / Sin Encriptar',
    xorKeyLabel: 'Clave Secreta XOR',
    xorKeyPlaceholder: 'ej. MiClaveSecretaJuego2026',
    jsonRawTitle: 'Payload JSON Decodificado (Editor en Vivo)',
    encodeAndDownload: 'Encriptar y Descargar Archivo',
    copyEncoded: 'Copiar Texto Encriptado',
    copiedNotice: '¡Copiado al Portapapeles!',
    decodedKeysCount: 'Parámetros Totales',
    dataSize: 'Tamaño del Payload',
    detectedFormat: 'Formato Detectado',
    exportPreviewLabel: 'Previsualización de Salida Encriptada',
    decodePanelTitle: 'Decodificación y Editor JSON en Vivo',
    exportPanelTitle: 'Payload de Salida Re Encriptado',
    decodeError: 'Error al decodificar el archivo de guardado',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Seguridad y Protocolos de Ofuscación en Guardado de Juegos',
    },
    {
      type: 'paragraph',
      html: 'Los videojuegos serializan el estado de progreso del jugador en formatos de almacenamiento persistentes para mantener inventarios, niveles desbloqueados y atributos a lo largo de las sesiones de juego. Para evitar manipulaciones directas en editores de texto plano por parte de los usuarios finales, los estudios de desarrollo ofuscan estos archivos con esquemas de codificación binaria como Base64 o máscaras bit a bit XOR contra una clave secreta personalizada. Durante las pruebas internas de control de calidad y depuración de operaciones en vivo, los equipos técnicos necesitan la capacidad inmediata de inspeccionar estructuras JSON crudas, forzar estados límite de prueba y volver a encriptar los datos modificados para su despliegue sin necesidad de reevaluar ni recompilar binarios.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Privacidad de Procesamiento', value: '100% Local' },
        { label: 'Decodificadores Soportados', value: 'Base64 / XOR / JSON' },
        { label: 'Latencia de Decodificación', value: '0 ms' },
        { label: 'Riesgo de Filtración', value: 'Cero' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparativa de Esquemas de Ofuscación',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Codificación Base64',
          description: 'Conversión de texto rápida que evita ediciones accidentales en blocs de notas convencionales pero no ofrece seguridad criptográfica real.',
        },
        {
          title: 'Máscara XOR + Base64',
          description: 'Práctica habitual en desarrollo indie. Mezcla bytes de texto con una clave secreta personalizada para evitar editores de memoria o Cheat Engine.',
        },
        {
          title: 'Payload JSON Plano',
          description: 'Estado de guardado legible sin encriptar. Ideal para prototipado inicial, builds de depuración e iteraciones internas del equipo.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Prácticas de Pruebas de QA para Verificación de Estados',
    },
    {
      type: 'tip',
      title: 'Mejores Prácticas de Seguridad en Guardados durante QA',
      html: 'Mantén siempre claves de depuración separadas para builds internas y de producción. Al verificar errores en casos límite, utiliza editores locales para forzar límites de inventario y estadísticas de borde sin recompilar el código del juego.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Guía de Parámetros de Estado de Juego',
    },
    {
      type: 'table',
      headers: ['Tipo de Dato', 'Formato Recomendado', 'Caso de Uso Habitual', 'Capa de Ofuscación'],
      rows: [
        ['Enteros Numéricos', 'Entero de 32 bits', 'Monedas, Nivel, Experiencia, Munición', 'Máscara XOR'],
        ['Banderas Booleanas', 'Booleano Estándar', 'Tutorial Completo, Jefe Derrotado', 'Base64 / XOR'],
        ['Objetos Anidados', 'Jerarquía JSON', 'Inventario del Jugador, Árbol de Habilidades', 'Codificado en Base64'],
        ['Fechas y Tiempos', 'ISO 8601 UTC', 'Recompensa Diaria, Marca de Tiempo de Guardado', 'Máscara XOR'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Ingeniería Inversa y Consideraciones Anti Tamper',
    },
    {
      type: 'paragraph',
      html: 'Aunque la ofuscación en el cliente evita que los usuarios casuales modifiquen archivos de guardado en editores estándar, las operaciones XOR y Base64 no constituyen algoritmos criptográficos verdaderos. Las herramientas de análisis de memoria y desensamblado como RenderDoc o x64dbg permiten inspeccionar las rutinas de generación de claves en ensamblados de C++ o C# compilados. Para títulos multijugador competitivos, la validación de estado autoritativo en servidor o firmas criptográficas HMAC son esenciales para detectar alteraciones al iniciar el juego.',
    },
  ],
  faqTitle: 'Preguntas Frecuentes',
  faq: [
    {
      question: '¿Se suben mis archivos de guardado a un servidor remoto?',
      answer: 'No. Toda la decodificación, edición de árbol JSON y re-encriptación ocurre 100% dentro de tu navegador web sin enviar datos al exterior.',
    },
    {
      question: '¿Cómo funciona la ofuscación XOR en motores como Unity o Godot?',
      answer: 'La ofuscación XOR recorre los bytes UTF-8 de la cadena JSON serializada aplicando una operación XOR bit a bit contra los caracteres de una clave secreta.',
    },
  ],
  howTo: [
    {
      name: 'Cargar o Pegar Archivo de Guardado',
      text: 'Sube tu archivo de guardado encriptado o arrástralo directamente a la zona de carga.',
    },
    {
      name: 'Seleccionar Método de Decodificación y Clave',
      text: 'Selecciona Base64 o Máscara XOR e introduce la clave secreta correspondiente.',
    },
    {
      name: 'Editar el Estado JSON',
      text: 'Modifica los valores numéricos, banderas o inventarios directamente en el editor JSON en vivo.',
    },
    {
      name: 'Encriptar y Exportar',
      text: 'Descarga o copia el payload resultante listo para ser probado en el motor de juego.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Editor de Archivos de Guardado de Juegos',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Se suben mis archivos de guardado a un servidor remoto?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Toda la decodificación y edición ocurre 100% dentro de tu navegador.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo Editar Archivos de Guardado Encriptados',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Cargar o Pegar Archivo',
          text: 'Sube tu archivo de guardado encriptado.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referencias y Lecturas Adicionales',
  bibliography: bibliographyEntries,
};
