# Archivos locales en GameBob Quest Desktop

## Regla de producto

La web gratuita y la aplicación de escritorio comparten kernels y formatos, no el mecanismo de entrada de archivos. Un usuario de Desktop abre, reutiliza y guarda recursos de su equipo mediante diálogos nativos, rutas de proyecto y artefactos persistentes. Ningún flujo Desktop debe presentarse como una subida de archivos a una web.

La biblioteca web mantiene sus selectores y descargas de navegador. Ese comportamiento no debe filtrarse a un `DesktopToolModule` migrado. El adaptador legacy es deuda transitoria identificada por #34, no el modelo de producto.

## Frontera técnica

- `IPlatformBridge.localImagePicker` ofrece un contrato compartido sin importar Tauri en módulos.
- En Tauri, `pick_local_image` abre el diálogo del sistema y lee exclusivamente el PNG o WebP elegido. No acepta una ruta arbitraria desde JavaScript. Limita la entrada a 64 MiB y valida la firma del archivo.
- En navegador, el adaptador Web usa el selector local del navegador. No hay envío de la imagen a un servidor para este flujo.
- La vista integrada de Sprite Sheet Packer decodifica los bytes locales, muestra la imagen y fija sus dimensiones reales. Su URL temporal se revoca al sustituir la imagen o liberar el módulo.
- La ruta y los metadatos serializables pueden formar parte de la sesión; los bytes, handles, elementos DOM y URL temporales nunca se escriben en `.gbtoolkit.json`.

## Estado comprobado

Los commits `073704d` y `96da021` entregan la primera entrada de archivo local para Sprite Sheet Packer. Se comprobaron selección/cancelación en el adaptador, formato y límite en Rust, liberación de previsualización, 3017 tests, build Web de 289 páginas y consumo del paquete desde Astro externo. El diálogo dentro de una ventana Tauri real aún requiere una prueba manual; los tests y la inspección del navegador no sustituyen esa comprobación.

## Pendiente

- #26: retomar proyectos recientes y restaurar la sesión y el archivo seleccionado, previa autorización nativa de la ruta.
- #28 y #29: registrar SourceFrames, compartirlos entre etapas y escribir salidas configuradas en el proyecto.
- #34: eliminar selectores HTML y documentos legacy del resto de herramientas Desktop que manejan archivos.
- El gate final #31 no puede dar por buena una app con herramientas que obliguen al usuario a repetir un flujo de navegador.
