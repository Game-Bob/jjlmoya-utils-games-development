---
name: gamebob-toolkit-desktop
description: Guia de desarrollo y estandares tecnicos para transformar microfrontends jjlmoya-utils-* en GameBob Toolkits nativos con Tauri, aplicando SOLID estricto, desacoplamiento web/desktop, y respetando las reglas de cero comentarios y cero emojis.
---

# GameBob Toolkit Desktop Development Skill

Esta skill define el protocolo de ingeniería, arquitectura y control de calidad para construir y evolucionar aplicaciones de escritorio nativas GameBob Toolkits a partir de los microfrontends del catálogo `jjlmoya-utils-*`.

---

## 1. Principios No Negociables del Proyecto

1. **SOLID estricto en todos los componentes**:
   - Cada clase, interfaz y componente visual tiene una única responsabilidad y reside en su propio archivo independiente.
   - Prohibido acoplar lógica de cálculo con llamadas al DOM o APIs de sistema operativo.
   - Las herramientas dependen exclusivamente de abstracciones e interfaces tipadas, nunca de implementaciones concretas.

2. **Cero comentarios en el código**:
   - Prohibido incluir comentarios de línea (`//`), bloques (`/* ... */`) o docstrings explicativos en cualquier archivo de código fuente (TypeScript, JavaScript, Rust, Astro, CSS).
   - El linter `eslint-plugin-no-comments` rechaza cualquier comentario. El código debe ser auto-explicativo mediante tipado riguroso y nombres explícitos.

3. **Cero emojis**:
   - Prohibido utilizar emojis en código fuente, nombres de variables, constantes, mensajes de consola, commits, issues o interfaces de usuario.
   - La iconografía es estrictamente vectorial sobria (SVG / Iconify MDI).

4. **Preservación total de la web gratuita (MFE)**:
   - Toda adaptación a escritorio debe mantener el microfrontend web en Astro 100% operativo.
   - Las pruebas existentes de Vitest y la compilación estática de Astro deben pasar siempre sin regresiones.

---

## 2. Arquitectura de Abstracción de Plataforma

Para garantizar que el mismo código ejecute en navegador y en escritorio, se utiliza el patrón Bridge:

```
[Herramienta de Pipeline] (UI / Logic)
           │
           ▼
   [IPlatformBridge] (Contrato TypeScript)
      ┌────┴────────────────────────┐
      ▼                             ▼
[WebPlatformBridge]        [TauriPlatformBridge]
(File API, Blob, LS)       (@tauri-apps/plugin-fs, IPC)
```

### 2.1. Contratos Obligatorios (`src/platform/contracts/`)
- `IFileReader`: Lectura de archivos en texto o binario (Uint8Array).
- `IFileWriter`: Escritura de archivos en disco o descarga virtual.
- `IDialogService`: Diálogos nativos de apertura y guardado de archivos o carpetas.
- `IDirectoryWatcher`: Vigilancia reactiva de cambios en el árbol de directorios locales.
- `IProjectStorageService`: Carga y guardado de la configuración del proyecto (`.gbtoolkit.json`).

### 2.2. Inyección de Plataforma
El punto de entrada de la aplicación detecta el entorno en tiempo de ejecución:
```typescript
import { isTauriEnvironment } from '../platform/detector';
import { WebPlatformBridge } from '../platform/adapters/web';
import { TauriPlatformBridge } from '../platform/adapters/desktop';

export function resolvePlatformBridge() {
    return isTauriEnvironment() ? new TauriPlatformBridge() : new WebPlatformBridge();
}
```

---

## 3. Protocolo de Desarrollo para una Herramienta del Pipeline

Al transformar o incorporar una herramienta en el Toolkit de escritorio:

1. **Separar la lógica de negocio**:
   - Asegurar que `logic.ts` sea una función o clase pura sin dependencias de `window`, `document`, o `__TAURI__`.
   - Crear o mantener su suite completa en `logic.test.ts`.

2. **Desacoplar la entrada y salida de datos**:
   - Reemplazar llamadas directas a `<input type="file">` o `URL.createObjectURL` por llamadas al `PlatformBridge`.
   - En entorno web, `PlatformBridge` abre el selector del navegador o genera la descarga de archivo.
   - En entorno de escritorio, `PlatformBridge` lee directamente del disco o escribe en la ruta del motor de juego.

3. **Registrar en el Workspace Shell**:
   - Integrar la vista en el contenedor unificado de escritorio (`WorkspaceShell`), mapeando sus parámetros de configuración en el esquema `.gbtoolkit.json`.

---

## 4. Estructura de Directorios del Repositorio

```
jjlmoya-utils-<vertical>/
├── src/
│   ├── category/             Metadatos de categoria MFE
│   ├── platform/             Capa de abstraccion SOLID
│   │   ├── contracts/        Interfaces tipadas (IFileReader, etc.)
│   │   ├── adapters/
│   │   │   ├── web/          Implementacion browser nativa
│   │   │   └── desktop/      Implementacion Tauri IPC
│   │   └── detector.ts       Deteccion de runtime
│   ├── tool/                 Herramientas individuales desacopladas
│   │   └── <toolName>/
│   │       ├── component.astro
│   │       ├── entry.ts
│   │       ├── logic.ts
│   │       ├── logic.test.ts
│   │       └── ui.ts
│   ├── workspace/            Contenedor desktop del pipeline
│   ├── index.ts              Exportacion npm del paquete
│   └── tools.ts              Catalogo de herramientas
├── src-tauri/                Nucleo nativo de Tauri 2 (Rust)
│   ├── Cargo.toml
│   ├── tauri.conf.json
│   ├── capabilities/
│   └── src/main.rs
├── docs/                     Documentacion formal (ANALYSIS.md, GDD.md, issues/)
└── tests/                    Pruebas de integracion y contratos
```

---

## 5. Puerta de Calidad (QA Gate) Obligatoria

Antes de dar por finalizada cualquier tarea o proponer cambios:

1. **Tests unitarios e integración**:
   ```bash
   npm run test
   ```
   Todos los tests de Vitest deben pasar con cero errores.

2. **Linter y formateo estricto**:
   ```bash
   npm run lint
   ```
   Tanto ESLint como Stylelint deben terminar con código de salida 0. Cero advertencias toleradas.

3. **Comprobación de tipos y build web**:
   ```bash
   npm run check
   npm run build
   ```
   El sitio Astro debe compilar limpiamente en `dist/`.

4. **Verificación nativa Tauri**:
   ```bash
   cargo check --manifest-path src-tauri/Cargo.toml
   ```
   El código Rust debe compilar sin errores de tipo ni de préstamo (`borrow checker`).
