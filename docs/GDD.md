# GDD — GameBob Quest (Nombre Interno: gamebob-gamedevelopment)

## 1. Concepto y Visión del Producto

**GameBob Quest** (nombre interno técnico `gamebob-gamedevelopment`) es la aplicación de escritorio nativa orientada a desarrolladores de videojuegos independientes, artistas de pixel art y diseñadores de mecánicas 2D. 

A diferencia de la versión web de GameBob —que ofrece calculadoras y utilidades individuales para consultas rápidas sin persistencia— el Toolkit de escritorio funciona como un entorno integrado de producción local que se conecta directamente al sistema de archivos del motor de juego (Godot, Unity, Defold, Raylib, Love2D, Phaser).

El principio rector es eliminar la fricción entre la creación de recursos y su integración en el motor:
- Cero descargas manuales ni descompresiones de archivos ZIP.
- Re-empaquetado y exportación automática al detectar cambios en los recursos fuente.
- Coordinación continua entre sprites, cajas de colisión (hitboxes/hurtboxes), paletas de color y metadatos de animación.

---

## 2. Arquetipos de Usuario

### 2.1. Desarrollador Indie en Solitario
- **Contexto**: Crea prototipos rápidos o juegos completos usando motores ligeros (Godot, Defold, Raylib).
- **Problema**: Pierde tiempo alternando entre generadores web de sprites, editores de audio y herramientas de cálculo de balance, renombrando archivos y copiándolos manualmente a su carpeta de proyecto.
- **Solución del Toolkit**: Configura la ruta de su proyecto una sola vez y el Toolkit sincroniza automáticamente texturas, animaciones JSON y efectos de audio en la carpeta `res://assets/`.

### 2.2. Pixel Artist y Animador 2D
- **Contexto**: Dibuja secuencias de fotogramas en Aseprite o Photoshop y necesita validar animaciones, ajustar cajas de colisión y generar variantes de paleta.
- **Problema**: Los motores de juego a menudo tienen herramientas de recorte complejas o requieren recompilar el proyecto para verificar colisiones y cambios de color.
- **Solución del Toolkit**: Previsualización instantánea a 60 FPS con zoom pixel-perfect, dibujo directo de cajas de impacto/daño y exportación de hojas de sprites con sustitución de paletas en un clic.

### 2.3. Technical Designer
- **Contexto**: Ajusta tablas de daño, curvas de nivel, ventanas de entrada de botones (input buffer) y comprobación de fuentes multilingües.
- **Problema**: Dispersión de hojas de cálculo y scripts artesanales que no validan los límites de la tasa de refresco ni la integridad de los textos.
- **Solución del Toolkit**: Laboratorios visuales de curvas de daño, cálculo exacto de márgenes de frames según latencia de entrada y sanitización de CSV/JSON de localización en tiempo real.

---

## 3. Core Loop (Bucle de Interacción Principal)

```
[1. Configurar Proyecto Local]
       │
       ▼
[2. Modificar Recursos Fuente en Disco] (.png, .wav, .csv)
       │
       ▼
[3. Procesamiento y Validación en Toolkit] (Empaquetado, Hitboxes, Paletas, Audio Loops)
       │
       ▼
[4. Sincronización Automática en Motor] (Escritura directa en carpeta de juego)
       │
       ▼
[5. Comprobación In-Game y Reanudación]
```

1. **Configuración de Proyecto**: El usuario abre o crea un archivo de configuración `.gbtoolkit.json` en la raíz de su repositorio de juego. Define directorios de entrada (por ejemplo, `raw_art/`, `raw_audio/`) y directorios de destino (por ejemplo, `game/assets/sprites/`, `game/assets/sfx/`).
2. **Edición Externa**: El usuario edita sprites o audio en sus programas habituales.
3. **Detección y Enlace**: El vigilante nativo de disco de Tauri detecta los cambios y actualiza el visor del Toolkit sin requerir recarga manual.
4. **Validación y Ajuste**: Si es necesario, el usuario calibra hitboxes, aplica una paleta alternativa o define puntos de loop de audio con detección de cruce por cero.
5. **Exportación Atómica**: El Toolkit escribe directamente los archivos `.png`, `.json` y `.wav` optimizados en las carpetas de destino del motor.

---

## 4. Comparativa de Niveles: Web Gratuita vs. Desktop Toolkit

| Área | Web Gratuita (gamebob.dev) | GameBob Desktop Toolkit |
| :--- | :--- | :--- |
| **Acceso a Datos** | Solo archivos seleccionados por el usuario mediante `<input>` | Acceso irrestricto a la carpeta de trabajo del proyecto local |
| **Persistencia** | Sesión volátil en navegador o almacenamiento local efímero | Fichero `.gbtoolkit.json` versionable en Git junto al código del juego |
| **Automatización** | Manual en cada paso (clic en descargar por cada recurso) | Vigilancia de directorio con auto-re-exportación en segundo plano |
| **Multi-herramienta** | Cada utilidad vive en una pestaña o URL independiente | Espacio de trabajo unificado con pipeline integrado por pestañas/vistas |
| **Formatos de Motor** | JSON genérico | Perfiles de exportación específicos (Godot 4 AtlasTexture, Unity Sprite, Defold Atlas, Phaser 3) |
| **Rendimiento** | Limitado por memoria de la pestaña del navegador | Motor Rust nativo con aceleración por hardware y uso mínimo de RAM |
| **Conexión** | Requiere internet para cargar la aplicación web | 100% autónomo y funcional sin conexión a internet |

---

## 5. Arquitectura de Interfaz y Experiencia de Usuario (UI/UX)

### 5.1. Estructura del Espacio de Trabajo
- **Barra de Navegación Lateral (Pipeline Navigator)**: Organizada por fases del desarrollo (Gráficos, Audio, Balance, Publicación). Permite saltar entre herramientas conservando el contexto del proyecto activo.
- **Área Central de Trabajo (Active Canvas / Workspace)**: Lienzo principal de la herramienta activa (por ejemplo, editor de colisiones, empaquetador de atlas o sintetizador de ondas).
- **Barra Superior de Proyecto (Project Header)**: Muestra la ruta del proyecto local activo, el estado del vigilante de carpetas (activo/pausado) y el botón de sincronización forzada.
- **Panel Inferior de Salida y Logs (Engine Output Dock)**: Registro de archivos exportados, advertencias de empaquetado o errores de validación de cadenas de texto.

### 5.2. Sistema de Diseño
- Tema oscuro profesional con contraste optimizado para jornadas prolongadas de desarrollo.
- Tipografía técnica monospace para métricas, valores numéricos y rutas de archivo.
- Cero dependencias de iconos con emojis: iconografía vectorial sobria mediante SVG.
- Atajos de teclado coherentes:
  * `Ctrl+S` / `Cmd+S`: Guardar proyecto y forzar exportación.
  * `Ctrl+O` / `Cmd+O`: Abrir proyecto existente.
  * `Ctrl+P` / `Cmd+P`: Selector rápido de herramienta del pipeline.
  * `Espacio`: Reproducir / pausar animación o prueba de audio.

---

## 6. Requisitos Técnicos y Entorno

- **Runtime de Escritorio**: Tauri 2.x sobre Rust 1.97+.
- **Frontend Core**: TypeScript, componentes modulares desacoplados, estilos CSS puros sin utilidades ad-hoc.
- **Plataformas Objetivo**: Windows 10/11 (x64), macOS (Apple Silicon y x64), Linux (AppImage y deb).
- **Mantenimiento del Microfrontend**: La compilación web mediante Astro debe permanecer 100% operativa y sin modificaciones incompatibles.
