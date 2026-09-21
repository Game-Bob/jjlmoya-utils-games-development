# Contrato de producto Web y Desktop

## Decisión

GameBob distribuye una librería pública y una experiencia web gratuita con herramientas completas. GameBob Quest Desktop es un producto premium porque conecta esas capacidades dentro de proyectos persistentes y automatiza el trabajo alrededor de ellas.

Ningún cálculo, formato o herramienta existente se retira de la web para justificar Desktop. La frontera comercial coincide con una frontera técnica verificable.

## Superficies públicas

La API publicada se versiona en `public-api.contract.json` y se expone desde `package.json`.

| Superficie | Export | Responsabilidad |
| --- | --- | --- |
| Catálogo | `.`, `./data`, `./entries`, `./runtime/*`, `./category-seo` | Metadatos, contenido localizado y componentes de las herramientas web. |
| Núcleo | `./core/*` | Kernels de dominio puros de cada herramienta. |
| Contratos | `./platform/contracts` | Abstracciones tipadas para archivos, diálogos, proyectos y vigilancia. |
| Web | `./platform/web` | Adaptadores basados en APIs del navegador y almacenamiento virtual. |

El paquete no publica:

- Adaptadores Tauri.
- Comandos IPC o código Rust.
- Componentes, estado ni navegación del workspace Desktop.
- Servicios de proyectos nativos.

`@tauri-apps/api` y `@tauri-apps/plugin-dialog` son dependencias de desarrollo de la aplicación, no dependencias de ejecución de la librería pública.

## Reglas de dependencia

```text
Domain kernels
  Platform contracts
    Web adapters
    Desktop adapters

Web tools
  Domain kernels
  Platform contracts
  Web adapters

Desktop composition
  Domain kernels
  Platform contracts
  Desktop adapters
  Workspace orchestration
```

- Los kernels no importan DOM, Astro, workspace, Tauri, IPC ni filesystem nativo.
- La superficie pública no importa `@tauri-apps/*`, `src-tauri` ni adaptadores Desktop.
- El resolver compartido usa Web por defecto y acepta un bridge inyectado.
- Las páginas de composición Desktop registran `TauriPlatformBridge` explícitamente.
- Desktop puede depender de la librería compartida; la librería compartida nunca depende de Desktop.

El gate `npm run test:product-boundaries` inspecciona estas reglas y falla si una dependencia nativa entra en las fuentes públicas.

## Cómo consume Desktop una herramienta

Desktop no bifurca ni copia la lógica de una herramienta. Para cada módulo:

1. Importa el kernel desde la misma fuente publicada mediante `./core/<toolName>`.
2. Implementa el contrato `DesktopToolModule` definido en #24.
3. Recibe servicios mediante `IPlatformBridge`; no llama a Tauri desde el kernel.
4. Declara entradas, salidas y comandos sin crear una segunda página web.
5. Registra sus resultados como artefactos del proyecto mediante #28.
6. Conserva el componente web y su flujo manual como experiencia gratuita independiente.

Hasta completar #24 y #25, las integraciones existentes con el workspace son adaptadores transitorios, no el contrato final.

## Matriz de capacidades

| Capacidad | Web gratuita | Desktop premium |
| --- | --- | --- |
| Cálculos y transformaciones de cada herramienta | Completa | Completa, usando el mismo kernel |
| Importación manual desde el dispositivo | Sí | Sí |
| Descarga manual de resultados | Sí | Sí |
| Uso sin cuenta o licencia Desktop | Sí | No aplica al producto instalado |
| Proyecto persistente | No requerido | Sí |
| Acceso autorizado al árbol local del proyecto | No | Sí |
| Vigilancia de cambios | No | Sí |
| Regeneración automática | No | Sí |
| Procesamiento por lotes | Manual o puntual | Sí |
| Artefactos compartidos entre herramientas | No | Sí |
| Handoff sin volver a seleccionar archivos | No | Sí |
| Restauración de sesión y trabajos recientes | No | Sí |
| Escritura directa en rutas del motor | No | Sí |
| Historial operativo del proyecto | No | Sí |

La web es completa para una tarea individual. Desktop reduce pasos repetidos cuando muchas tareas forman parte de un proyecto real.

## Consumo externo verificado

Un consumidor Astro externo importa:

- El catálogo raíz.
- El kernel de SpriteSheet Packer.
- Los contratos de plataforma.
- El bridge Web.

El consumidor se instala desde el tarball generado por `npm pack` y ejecuta un build estático real. Los consumidores que rendericen los componentes del catálogo deben registrar `astro-icon`:

```javascript
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
    integrations: [icon()]
});
```

`npm run test:distribution` valida el manifiesto, inspecciona que no se publiquen rutas Desktop, instala el tarball en un directorio temporal y construye el proyecto externo.

## Gates de entrega

| Gate | Evidencia |
| --- | --- |
| API y dependencias públicas | `npm run test:product-boundaries` |
| Tarball y consumidor externo | `npm run test:package-consumer` |
| Web gratuita | `npm run test`, `npm run check`, `npm run build` |
| Desktop | `npm run test:desktop-contract`, Cargo y `npm run tauri:build` |
| Publicación npm | Tag idéntica a `package.json`, distribución verificada y build web |

CI ejecuta estos gates por separado. Una tag incorrecta detiene la publicación y nunca modifica ramas desde el workflow.
