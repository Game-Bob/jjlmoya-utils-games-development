# Dirección de producto y arquitectura para GameBob Quest Desktop

## Propósito

Este documento define cómo convertir GameBob Quest de un catálogo web alojado en una ventana Tauri en una aplicación de escritorio cohesionada, orientada a proyectos y capaz de mantener contexto entre tareas.

No es una propuesta de rediseño cosmético. La prioridad es cambiar el modelo de producto, el contrato de integración y la jerarquía de la interfaz antes de pulir colores o animaciones.

## Diagnóstico ejecutivo

La aplicación actual tiene una base nativa válida para archivos, proyectos, vigilancia de directorios y empaquetado. El problema está en la capa de producto:

- El workspace carga páginas Astro completas dentro de un `iframe`.
- El shell y cada herramienta aportan su propia cabecera, lenguaje visual, scroll y modelo de interacción.
- El usuario elige entre 17 herramientas, pero la aplicación no le indica qué trabajo continuar ni qué artefacto está transformando.
- Solo SpriteSheet Packer y Hitbox/Hurtbox Animator consumen el canal de contexto del workspace.
- El estado global conoce la herramienta activa, el proyecto y los logs, pero no conoce documentos abiertos, artefactos, trabajos, progreso ni dependencias.
- La documentación web y los textos de onboarding permanecen visibles durante el trabajo operativo.
- El loader inicial depende de un evento `load` conectado después de hidratar el shell. Si el `iframe` termina antes, la máscara puede permanecer indefinidamente.
- El host no tiene estados explícitos de montaje, listo, error, reintento o recuperación.

El resultado se percibe correctamente como una web encapsulada: existe un marco común, pero no una aplicación común.

## Evidencia en la implementación actual

| Hallazgo | Evidencia |
| --- | --- |
| Alojamiento de páginas completas | `src/workspace/components/ToolViewport.astro` crea un `iframe` y `src/pages/workspace/tool/[toolId].astro` crea un documento HTML completo por herramienta. |
| Carrera del loader | `WorkspaceViewportView` registra `load` durante la hidratación, mientras el `iframe` ya tiene un `src` estático. No existe comprobación de documento listo, timeout ni estado de error. |
| Integración parcial | Solo dos herramientas instancian `ToolWorkspaceChannel`. Las otras quince son páginas independientes dentro del contenedor. |
| Sin continuidad de artefactos | `WorkspaceStateModel` no contiene artefactos, documentos, trabajos, historial ni dependencias entre herramientas. |
| Recientes sin experiencia de entrada | `RecentProjectsManager` persiste datos, pero el shell no ofrece un launcher que permita retomarlos. |
| Duplicación visual | Cada herramienta mantiene tokens, paleta, densidad, estructura y controles propios. |
| Densidad editorial | Componentes de hasta 351 líneas mezclan entrada, configuración, resultados, ayuda y exportación en una sola superficie. |
| Navegación que simula pipeline | Las fases son agrupaciones de enlaces. No existe un grafo de entrada, transformación y salida que conecte las herramientas. |

## Visión de producto

GameBob Quest debe ser un compañero de producción local para un proyecto de juego, no un directorio de utilidades.

La unidad principal de trabajo será un proyecto abierto. Dentro del proyecto, el usuario crea o retoma trabajos sobre artefactos: una animación, un atlas, una definición de colisiones, una pista de audio, un paquete de localización o un lanzamiento. Las herramientas aparecen como capacidades aplicables al trabajo actual y conservan el contexto al cambiar de etapa.

La promesa de producto es:

> Abre tu proyecto, continúa exactamente donde estabas y lleva cada recurso desde su fuente hasta el motor sin volver a seleccionar archivos ni reconstruir contexto.

## Principios de experiencia

### 1. Proyecto primero

La primera pantalla debe permitir crear, abrir o retomar un proyecto reciente. El modo sin proyecto puede existir para laboratorios puntuales, pero no debe ser el estado principal ni usar mensajes propios de navegador.

### 2. Trabajo primero, herramienta después

El usuario debe ver el recurso o trabajo actual y su siguiente acción. La selección de una implementación concreta es secundaria.

### 3. Un único workbench

El shell controla navegación, comandos, estado, inspector, actividad y ayuda. Una herramienta aporta únicamente su superficie de trabajo y sus comandos específicos.

### 4. Continuidad visible

Cada salida relevante se registra como artefacto del proyecto y puede convertirse en entrada de la siguiente etapa sin un nuevo diálogo de archivo.

### 5. Divulgación progresiva

La superficie principal contiene solo lo necesario para completar la acción actual. Explicaciones, limitaciones, formatos avanzados y documentación viven en ayuda contextual o paneles secundarios.

### 6. Estados honestos y recuperables

Toda carga o proceso tiene estado explícito: preparando, listo, procesando, completado o bloqueado. Ningún spinner puede ser infinito y todo error debe ofrecer una salida concreta.

### 7. Reutilizar lógica, no páginas

La versión web conserva sus páginas completas y contenido editorial. Desktop reutiliza los kernels de dominio, adaptadores de plataforma y componentes operativos, pero no incrusta la página web como unidad de producto.

## Arquitectura objetivo

```text
Workspace Application Shell
  Project Session
  Command Registry
  Artifact Registry
  Activity Center
  Tool Host
    Desktop Tool Module
      Workbench Surface
      Contextual Inspector
      Commands
      Session State
      Domain Kernel
        Platform Bridge
```

### Application Shell

Es propietario de:

- Proyecto activo y proyectos recientes.
- Navegación por trabajos y flujos.
- Comandos globales y atajos.
- Estado de montaje de cada módulo.
- Registro de artefactos y actividad.
- Persistencia y restauración de la sesión.
- Inspector, ayuda y notificaciones comunes.

### Desktop Tool Module

Cada herramienta de escritorio debe exponer un contrato común con:

- Identidad, nombre breve y capacidades.
- Tipos de artefacto que consume y produce.
- Comandos disponibles y su habilitación.
- Superficie principal y paneles opcionales.
- Estado serializable de la sesión.
- Ciclo de vida de montaje, activación, desactivación y liberación.
- Señal inequívoca de listo o error.

El módulo no crea otro documento HTML, no añade una segunda cabecera y no decide la navegación global.

### Artifact Registry

Un artefacto es una referencia estable a un resultado del proyecto. Debe incluir:

- Identificador y tipo.
- Rutas de origen y salida relativas al proyecto.
- Herramienta que lo produjo.
- Versión de su esquema.
- Estado: actualizado, obsoleto, procesando o error.
- Dependencias de otros artefactos.
- Fecha de última generación válida.

Ejemplos: `SourceFrames`, `TextureAtlas`, `AtlasMetadata`, `CollisionProject`, `PaletteVariant`, `LoopedAudio`, `LocalizationReport`.

### Project Session

La sesión amplía `.gbtoolkit.json` sin convertirlo en un volcado de UI. Debe separar:

- Configuración versionable del pipeline.
- Índice de artefactos reproducibles.
- Estado de sesión local no versionable, como paneles abiertos, selección y posición del cursor.

## Modelo de interfaz

### Launcher

- Proyecto reciente con nombre, motor, ruta y última actividad.
- Acciones principales: continuar, abrir proyecto, crear proyecto.
- Entrada secundaria a laboratorios sin proyecto.
- Sin una herramienta cargada detrás del launcher.

### Workspace

- Barra superior compacta con proyecto, estado y una acción primaria contextual.
- Navegación lateral por trabajos activos y flujos, no por una lista plana de 17 páginas.
- Área central dedicada al contenido operativo.
- Inspector derecho contextual para propiedades de la selección.
- Barra de estado mínima para resultado actual.
- Centro de actividad desplegable solo cuando existe información que consultar.

### Herramienta

- Un solo título, propiedad del shell.
- Un verbo principal visible.
- Controles frecuentes cerca del lienzo.
- Opciones avanzadas agrupadas y cerradas por defecto.
- Estados vacíos que permiten actuar, no párrafos de onboarding.
- Ayuda accesible desde un botón o comando, fuera del flujo principal.

## Estrategia de contenido

Desktop y web no deben compartir exactamente el mismo nivel de texto.

### En la superficie operativa

- Títulos de dos a cinco palabras.
- Etiquetas directas y consistentes.
- Una sola frase en estados vacíos.
- Mensajes de error con causa, consecuencia y acción.
- Nada de SEO, bibliografía, FAQ o explicaciones generales persistentes.

### En ayuda contextual

- Descripción conceptual.
- Limitaciones y decisiones de formato.
- Ejemplos y buenas prácticas.
- Enlace a documentación extensa si procede.

### Vocabulario común

- `Abrir proyecto`, no alternar entre abrir, cargar, importar y elegir para la misma acción.
- `Añadir fuentes` para incorporar archivos de entrada.
- `Generar` para producir artefactos reproducibles.
- `Exportar` únicamente cuando el resultado sale del proyecto o cambia de destino.
- `Actividad` para historial operativo; `Problemas` para bloqueos accionables.

## Flujos de producto

No todas las utilidades pertenecen al mismo tipo de navegación.

### Flujo de sprites

```text
Fotogramas fuente
  Sprite Sheet Fixer
  SpriteSheet Packer
  Hitbox/Hurtbox Animator
  Palette Swapper
  Salidas del motor
```

Este será el primer corte vertical porque ya dispone de dos integraciones parciales y demuestra el valor diferencial de Desktop.

### Flujo de audio

```text
Fuente o síntesis
  Retro SFX Generator
  Audio Loop Point Finder
  WAV y metadatos del motor
```

### Flujo de lanzamiento

```text
Build y contenido
  Localization Sanitizer
  UI Accessibility Tester
  Itch.io Game Tester
  Steam Copy y Capsules
  Informe de preparación
```

### Laboratorios

Damage Formula, Delta Time, Input Buffer y Pixel Per Unit son laboratorios útiles, pero no forman una cadena de artefactos natural. Deben vivir en una sección secundaria `Labs`, conservar presets por proyecto y no presentarse como pasos obligatorios del pipeline.

## Ciclo de carga obligatorio

Cada módulo debe implementar la siguiente máquina de estados:

```text
unmounted -> mounting -> ready
                    -> error -> retrying -> ready
```

Reglas:

- No mostrar spinner durante cargas inferiores a 150 ms.
- Mostrar un estado explicativo si el módulo no está listo en 2 segundos.
- Convertir la falta de señal `ready` en error recuperable, nunca en espera infinita.
- Conservar el último módulo válido hasta que el nuevo esté listo cuando sea seguro.
- Registrar diagnóstico local con módulo, ruta, duración y causa.
- Ofrecer reintentar, abrir actividad o volver al trabajo anterior.

## Plan de migración

### Hito 0: estabilidad observable

- Eliminar la carrera del loader inicial.
- Añadir estados de carga, error, timeout y reintento.
- Medir arranque y cambio de herramienta.
- Mostrar una pantalla de proyecto real en lugar de una herramienta oculta por un loader.

### Hito 1: fundamentos del producto

- Definir `DesktopToolModule`, comandos y ciclo de vida.
- Crear Application Shell, Tool Host y registro de módulos sin `iframe`.
- Crear primitives de workbench y tokens compartidos.
- Separar contenido web de contenido operativo Desktop.

### Hito 2: corte vertical de sprites

- Introducir Artifact Registry y sesión de trabajo.
- Migrar Fixer, Packer, Hitbox y Palette.
- Implementar handoff entre etapas sin volver a seleccionar archivos.
- Restaurar sesión tras cerrar y abrir la aplicación.

### Hito 3: expansión controlada

- Migrar audio como segundo flujo.
- Crear Labs como espacio secundario con presets compartidos.
- Migrar lanzamiento como checklist y generación de informe.

### Hito 4: consolidación

- Atajos y command palette.
- Accesibilidad y navegación por teclado del shell completo.
- Rendimiento, memoria y pruebas de sesiones largas.
- Eliminación final de rutas y adaptadores temporales del host por `iframe`.

## Orden de dependencias

```text
Loader fiable
  Desktop Tool Contract
    Tool Host sin iframe
      Workbench Design System
        Artifact Registry
          Flujo de sprites
            Audio, Labs y Lanzamiento
```

No se debe migrar visualmente cada herramienta antes de estabilizar el contrato y los primitives. Eso produciría diecisiete rediseños incompatibles y una segunda ronda de retrabajo.

## Criterios de éxito

### Percepción de producto

- No existe una segunda página o cabecera dentro del workbench.
- El usuario siempre sabe qué proyecto, trabajo y artefacto tiene activo.
- Cambiar de etapa conserva selección, entradas y resultados.
- La acción principal de cada estado es evidente sin leer documentación.

### Fiabilidad

- Cero loaders infinitos.
- Todo fallo de montaje presenta recuperación en menos de 3 segundos.
- Cambio de módulo local p95 inferior a 250 ms después del primer arranque.
- Restauración de la última sesión sin selectores de archivo redundantes.

### Cohesión

- Un solo sistema de espaciado, tipografía, foco, botones, campos y estados.
- Un solo scrollbar principal por superficie de trabajo.
- Ningún párrafo operativo persistente supera dos líneas en el viewport objetivo.
- Todos los módulos de un flujo declaran entradas, salidas y comandos.

### Valor de flujo

El corte vertical de sprites se considera completo cuando un usuario puede:

1. Abrir un proyecto.
2. Añadir fotogramas fuente una sola vez.
3. Corregirlos y generar el atlas.
4. Abrir el editor de colisiones con el atlas ya disponible.
5. Generar una variante de paleta sin reimportar el recurso.
6. Escribir las salidas configuradas en el proyecto.
7. Cerrar y retomar la sesión en el mismo punto.

## Decisiones que no deben tomarse

- No resolver el problema únicamente con una nueva paleta o bordes más nativos.
- No añadir más herramientas al sidebar hasta que exista contrato de integración.
- No migrar las 17 herramientas en paralelo.
- No duplicar lógica de dominio para Desktop.
- No convertir `.gbtoolkit.json` en almacenamiento de detalles efímeros de UI.
- No mantener el `iframe` como arquitectura final.
- No considerar una herramienta integrada solo porque aparece dentro del shell.

## Definición de terminado para la iniciativa

La iniciativa termina cuando GameBob Quest abre en un launcher de proyectos, monta módulos de escritorio mediante un contrato común, completa al menos un flujo de artefactos extremo a extremo, restaura la sesión y ya no depende de páginas web completas embebidas para su experiencia principal.
