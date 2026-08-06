import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'generador-de-capsulas-de-steam',
  title: 'Generador de cápsulas para Steam',
  description: 'Crea cuatro previsualizaciones para Steam desde una imagen maestra, ajusta el punto focal, revisa las zonas seguras y descarga un lote PNG o ZIP local.',
  ui: {
    uploadTitle: 'Suelta tu arte maestro', uploadHint: 'Una imagen de alta resolución se convierte en un conjunto completo de previsualizaciones dentro del navegador.', chooseFile: 'Elegir arte', minimumSize: 'Tamaño mínimo', supportedFormats: 'PNG, JPEG o WebP', invalidImage: 'Elige una imagen de al menos 1920 por 1080 píxeles.', sourcePreview: 'Arte maestro', focalPoint: 'Punto focal', focalHint: 'Haz clic en el arte o mueve los controles para mantener el sujeto importante dentro de cada recorte.', horizontalFocus: 'Horizontal', verticalFocus: 'Vertical', resetFocus: 'Centrar punto focal', outputPreview: 'Conjunto de salidas Steam', safeZone: 'Zona segura', dimensions: 'píxeles', downloadPng: 'PNG', downloadZip: 'Descargar ZIP', buildingZip: 'Creando tu ZIP local...', zipReady: 'Conjunto de cápsulas listo', localOnly: 'Privacidad por diseño. Tu arte permanece en este navegador.', headerCapsule: 'Cápsula de cabecera', mainCapsule: 'Cápsula principal', verticalCapsule: 'Cápsula vertical', communityIcon: 'Icono de comunidad', ready: 'Listo', downloadError: 'No se pudo crear el archivo. Prueba los botones PNG.',
  },
  seo: [
    { type: 'title', text: 'Crea un conjunto coherente de cápsulas para Steam', level: 2 },
    { type: 'paragraph', html: 'La misma ilustración puede funcionar en una cápsula horizontal y perder al personaje al pasar a un formato vertical. Esta herramienta muestra cuatro recortes desde una sola imagen maestra: cabecera de 460 por 215, principal de 616 por 353, vertical de 374 por 448 e icono cuadrado de 184 por 184 píxeles. El punto focal permite decidir qué parte de la composición debe sobrevivir cuando cambia la proporción.' },
    { type: 'paragraph', html: 'La imagen se procesa localmente con canvas. No se sube el archivo ni hace falta una cuenta. Al mover el marcador, todas las previsualizaciones se actualizan para que puedas comprobar logos, rostros, personajes y siluetas antes de exportar.' },
    { type: 'title', text: 'Un flujo práctico para arte de videojuegos', level: 2 },
    { type: 'list', items: ['Empieza con una imagen maestra de al menos 1920 por 1080 píxeles.', 'Coloca el marcador sobre el sujeto visual, no siempre en el centro geométrico.', 'Revisa primero las versiones vertical y cuadrada, porque pierden más contexto.', 'Usa las guías de zona segura como margen para elementos de la plataforma y confirma las plantillas actuales de Steamworks.'] },
    { type: 'paragraph', html: 'Las zonas seguras son guías de composición, no una garantía sobre cada interfaz de Steam. Conserva los logotipos y títulos lejos de los bordes saturados y revisa también las reglas de Valve sobre texto en cápsulas antes de publicar.' },
    { type: 'tip', html: 'Guarda una versión maestra con margen alrededor del sujeto. Si un recorte necesita otra posición del logotipo, modifica el arte fuente y vuelve a generar el conjunto en lugar de estirar una cápsula terminada.' },
  ],
  faq: [
    { question: '¿La imagen sale de mi dispositivo?', answer: 'No. Se decodifica y se pinta en tu navegador. La herramienta no sube el archivo ni necesita una cuenta.' },
    { question: '¿Qué imagen maestra debo usar?', answer: 'Usa PNG, JPEG o WebP de al menos 1920 por 1080 píxeles. Una imagen mayor deja más margen para los recortes.' },
    { question: '¿Qué cambia el punto focal?', answer: 'Cambia la posición del recorte fuente para todas las salidas. Coloca el marcador sobre lo que debe seguir visible.' },
    { question: '¿Las zonas seguras son oficiales?', answer: 'Son guías visuales prácticas. Compáralas con las plantillas actuales de Steamworks antes de publicar.' },
  ],
  howTo: [
    { name: 'Elige una imagen maestra', text: 'Suelta un PNG, JPEG o WebP de al menos 1920 por 1080 píxeles.' },
    { name: 'Ajusta el punto focal', text: 'Haz clic en la previsualización o mueve los controles horizontal y vertical.' },
    { name: 'Revisa los cuatro recortes', text: 'Comprueba cabecera, principal, vertical e icono cuadrado junto a sus guías.' },
    { name: 'Descarga el conjunto', text: 'Baja PNG individuales o crea un ZIP. Todo se procesa localmente.' },
  ],
});
