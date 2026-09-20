# Análisis Arquitectónico y Funcional: GameBob 2D Game Dev Toolkit

## 1. Contexto y Justificación del MVP

El catálogo de utilidades web GameBob cuenta con más de 30 repositorios verticales (`jjlmoya-utils-*`), desplegados como microfrontends (MFEs) independientes. El objetivo estratégico es lanzar una línea de aplicaciones de escritorio comerciales (**GameBob Toolkits**) mediante Tauri, que aporten valor real de producción manteniendo las herramientas individuales gratuitas en la web.

Tras evaluar el catálogo bajo criterios de:
- Cohesión de flujo de trabajo entre herramientas
- Intensidad de uso de archivos y ventajas nativas de escritorio
- Disposición de pago del público objetivo
- Sinergia con la marca GameBob

Se selecciona **`jjlmoya-utils-games-development`** como el MVP fundacional.

---

## 2. Inventario de Herramientas y Mapeo en el Pipeline de Producción

El repositorio cuenta actualmente con 18 herramientas operativas. En la web funcionan como calculadoras y editores aislados con entrada manual y descarga de archivos. En la aplicación de escritorio se integran en cuatro fases secuenciales de desarrollo de videojuegos:

```
[FASE 1: ASSETS GRAFICOS]
  SpriteSheet Packer -> Hitbox/Hurtbox Animator -> Pixel Art Palette Swapper -> Isometric Tilemap Editor

[FASE 2: SOUND DESIGN]
  Retro SFX Generator -> Audio Loop Point Finder

[FASE 3: LOGICA Y BALANCE]
  Damage Formula Lab -> Game Delta Time Lab -> Input Buffer Window -> Pixel Per Unit Planner -> Save File Editor

[FASE 4: QA Y PUBLICACION]
  Game UI Accessibility -> Localization Sanitizer -> Itch.io Game Tester -> Steam BBCode -> Steam Capsule
```

### 2.1. Fase de Assets Gráficos
- **SpriteSheet Packer**: Empaqueta secuencias de fotogramas PNG en un único atlas de textura, calculando dimensiones óptimas (potencia de 2 o ajustada) y exportando metadatos para Godot, Unity, Defold y Phaser.
- **Hitbox/Hurtbox Animator**: Permite importar el atlas generado, reproducir animaciones por fotogramas a velocidades configurables y dibujar rectángulos etiquetados de colisión (`hitbox`, `hurtbox`, `body`) con exportación JSON de coordenadas normalizadas.
- **Pixel Art Palette Swapper**: Carga hojas de sprites y sustituye índices de color en espacio RGB por paletas retro predefinidas (Game Boy, PICO-8, NES) o paletas personalizadas, preservando canales alfa.
- **Isometric Tilemap Editor**: Genera y previsualiza patrones de teselas isométricas con capas de colisión.

### 2.2. Fase de Diseño Sonoro
- **Retro SFX Generator**: Síntesis procedural de efectos de sonido (saltos, explosiones, golpes, monedas, láser) con control de envolventes y exportación WAV.
- **Audio Loop Point Finder**: Análisis de audio en dominio temporal para detectar cruces por cero (`zero-crossing`) y generar metadatos de loop sample-accurate para motores de juego.

### 2.3. Fase de Lógica y Mecánicas
- **Damage Formula Lab**: Simulación matemática de curvas de ataque, defensa y mitigación contra distribuciones de nivel.
- **Game Delta Time Fixed Timestep Lab**: Diagnóstico y comparación entre actualizaciones variables dependientes de delta y bucles con acumulador de paso fijo.
- **Game Input Buffer Window Calculator**: Cálculo de ventanas de entrada para combos y saltos teniendo en cuenta latencia de display, input polling y tasas de refresco.
- **Game Pixel Per Unit Planner**: Coordinación de resolución nativa, cámara ortográfica y factor de escala para evitar pixel distortion.
- **Save File Editor**: Decodificación, edición de valores y codificación de partidas guardadas con soporte para Base64, XOR y JSON plano.

### 2.4. Fase de QA, Localización y Lanzamiento
- **Game UI Accessibility Tester**: Evaluación de contraste y matrices de daltonismo sobre capturas reales de interfaz.
- **Localization Sanitizer**: Detección de claves ausentes, caracteres de escape corruptos y desajustes en archivos CSV/JSON de traducción.
- **Itch.io Game Tester**: Validación de empaquetado WebGL/HTML5 para subida a itch.io.
- **Steam BBCode Translator & Capsule Generator**: Preparación de textos promocionales formateados y redimensionado de carátulas a especificaciones de Valve.

---

## 3. Matriz de Ventajas Web vs. Escritorio (Tauri)

| Capacidad | Versión Web (Gratuita) | GameBob Desktop Toolkit (Comercial) |
| :--- | :--- | :--- |
| **Entrada de Archivos** | Diálogo HTML `<input type="file">` o drop manual en cada pestaña | Selección directa de directorio de proyecto; persistencia entre sesiones |
| **Salida de Archivos** | Descarga manual de ficheros o compresión ZIP en memoria | Escritura directa e in situ en la carpeta de assets del motor de juego |
| **Sincronización** | Estática; requiere volver a cargar archivos si cambian | Vigilancia activa de disco (`directory watcher`) con auto-regeneración de atlases |
| **Persistencia** | `localStorage` limitado a 5MB y dependiente del navegador | Fichero de proyecto `.gbtoolkit.json` guardado en la raíz del repositorio de juego |
| **Rendimiento** | Límite de memoria de pestaña (~1.5GB); riesgo de caída de canvas | Procesamiento nativo multi-hilo en Rust para lotes pesados |
| **Conectividad** | Requiere acceso a internet para primera carga | 100% offline y autónomo sin telemetría intrusiva |
| **Atajos de Teclado** | Limitados por colisiones con el navegador (F5, Ctrl+W, Ctrl+S) | Atajos globales de aplicación de escritorio |

---

## 4. Principios de Arquitectura Técnica

Para cumplir con las normas de diseño SOLID y evitar duplicidad de código entre la versión web existente y la aplicación de escritorio:

### 4.1. Single Responsibility Principle (SRP)
Cada componente y servicio tiene una única razón para cambiar. Los componentes de interfaz de las herramientas (`src/tool/*/ui.ts`, `component.astro`) solo se encargan de la presentación visual y la interacción local. La lógica de cálculo (`src/tool/*/logic.ts`) es pura y no tiene dependencias de DOM ni de APIs del sistema operativo.

### 4.2. Open/Closed Principle (OCP)
El sistema está abierto a la adición de nuevas plataformas (por ejemplo, integración con CLI o extensiones de VS Code) sin modificar las herramientas existentes, gracias al patrón puente.

### 4.3. Liskov Substitution Principle (LSP)
Los servicios de plataforma web (`WebFileSystemService`) y escritorio (`TauriFileSystemService`) implementan los mismos contratos tipados (`IFileSystemService`). Cualquier consumidor puede sustituir uno por otro sin alterar el comportamiento esperado.

### 4.4. Interface Segregation Principle (ISP)
Las interfaces de servicios se dividen en contratos pequeños y específicos:
- `IFileReader`: Solo lectura de datos binarios y texto.
- `IFileWriter`: Solo escritura de archivos en disco.
- `IDirectoryWatcher`: Solo suscripción a eventos de cambio en el sistema de archivos.
- `IDialogService`: Solo visualización de cuadros de diálogo para abrir/guardar.
- `IProjectStorageService`: Solo lectura y persistencia de configuración del proyecto.

### 4.5. Dependency Inversion Principle (DIP)
Las herramientas de nivel superior no dependen directamente de las APIs de Tauri ni de las APIs del navegador, sino de abstracciones inyectadas a través de un contenedor o proveedor de servicios `PlatformContext`.

---

## 5. Estrategia de Convivencia con el Paquete npm y Microfrontend Astro

El repositorio actual publica la librería `@jjlmoya/utils-games-development` y genera el sitio estático para Cloudflare Workers. La integración de Tauri debe preservar íntegramente este flujo:
1. `src/` contiene las herramientas, contratos y adaptadores web.
2. `src-tauri/` contiene el núcleo Rust, manifiestos de permisos de Tauri 2 y configuración de empaquetado nativo (Windows, macOS, Linux).
3. Los scripts de validación `npm run lint`, `npm run test` y `npm run build` continúan ejecutándose sobre el código web sin fallos.
4. Los binarios de Tauri consumen la salida estática o ejecutan el servidor local mediante el comando `tauri dev` / `tauri build`.
