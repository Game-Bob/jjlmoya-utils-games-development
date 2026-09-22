# Contrato DesktopToolModule

## Propósito

`DesktopToolModule` es la frontera entre el shell de GameBob Quest y una capacidad operativa. Permite consultar qué aporta una herramienta antes de crearla y controla su ciclo de vida sin depender de Astro, Tauri ni navegación global.

El contrato no convierte la página Web existente en un módulo Desktop. Web conserva su documento, contenido editorial y flujo manual. Desktop compone una superficie operativa sobre el mismo kernel de dominio.

## Capas

| Capa | Responsabilidad | Puede depender de |
| --- | --- | --- |
| Kernel de dominio | Cálculos, formatos y transformaciones reutilizables | TypeScript puro y contratos públicos |
| `DesktopToolModule` | Manifest, factoría y contrato de integración | Kernel y puertos de plataforma |
| Instancia del módulo | Sesión, comandos y ciclo de vida | Contexto inyectado por el shell |
| Vista del módulo | Renderizar dentro del elemento entregado por el host | DOM local a la superficie |
| Tool Host | Montaje, cambio, cancelación y liberación | Registro de módulos y shell |

Un módulo no puede importar Astro o Tauri, crear otro documento HTML, escribir en `window`, cambiar la URL ni decidir la navegación global. El gate `DesktopToolArchitecture.test.ts` protege estas reglas.

## Manifest

El manifest es inmutable y consultable sin crear una instancia:

| Campo | Función |
| --- | --- |
| `id` y `version` | Identidad estable y versión del contrato del módulo |
| `name` y `description` | Nombre operativo breve y propósito |
| `capabilities` | Capacidades que el shell puede descubrir |
| `commands` | Metadatos de comandos, atajos y requisito de proyecto |
| `inputs` | Tipos y versiones de artefactos aceptados |
| `outputs` | Tipos y versiones de artefactos producidos |

`DesktopToolRegistry` valida IDs, versiones, duplicados y versiones de esquema al arrancar. El host recibe el registro por composición, por lo que añadir otro módulo no exige añadir condiciones al host.

## Ciclo de vida

| Operación | Estado de entrada | Resultado |
| --- | --- | --- |
| `create` | Sin instancia | Instancia aislada en estado creado |
| `mount` | Creado | Recibe superficie, plataforma, proyecto, cancelación y sesión restaurada |
| `activate` | Montado o inactivo | Habilita interacción y comandos |
| `deactivate` | Activo | Pausa interacción sin destruir la sesión |
| `updateContext` | Montado, activo o inactivo | Sustituye proyecto, configuración, plataforma y señal de cancelación |
| `serializeSession` | Montado, activo o inactivo | Devuelve únicamente un objeto JSON válido |
| `dispose` | Cualquier estado no liberado | Cancela trabajo, limpia superficie y libera referencias |

La reactivación reutiliza la misma instancia. Cambiar de herramienta no debe recrear el módulo salvo que el host decida descartarlo por memoria, error irrecuperable o cierre de sesión.

## Contexto y cancelación

El contexto se inyecta; nunca se obtiene desde variables globales. Contiene:

- Proyecto y configuración activos.
- `IPlatformBridge`, que mantiene el módulo ajeno a la implementación Tauri.
- `AbortSignal` para cancelar trabajo al cambiar de herramienta o proyecto.
- Puerto de actividad para informar resultados y problemas al shell.
- Superficie controlada por el Tool Host durante `mount`.

Una instancia no debe conservar servicios de un contexto anterior después de `updateContext` o `dispose`.

## Estado de sesión

El estado persistible admite solo objetos JSON: cadenas, booleanos, números finitos, `null`, arrays y objetos planos. Se rechazan:

- Nodos DOM.
- Handles nativos o instancias de clases.
- Funciones, símbolos y valores `undefined`.
- Referencias cíclicas.
- `NaN` e infinitos.

`assertSerializableSession` se aplica al restaurar y antes de persistir. La sesión describe selección, parámetros y estado operativo mínimo; no almacena servicios, superficies ni resultados reproducibles que pertenezcan al futuro Artifact Registry.

## Módulo de referencia

`SpriteSheetPackerDesktopModule` demuestra el contrato sin adelantar la interfaz del Tool Host:

- Publica capacidades, comando y tipos de artefacto antes del montaje.
- Monta, desactiva, reactiva, serializa y libera una instancia.
- Ejecuta `preview-grid` reutilizando `calculateGridSlices` del kernel público.
- No copia lógica de sprites ni importa adaptadores Tauri.

La migración visual y operativa completa de Sprite Sheet Packer pertenece al corte vertical #29. El módulo actual es la referencia mínima de integración para construir #25.

## Añadir un módulo

1. Mantener o extraer el kernel en `src/tool/<tool>/logic.ts` o un módulo puro equivalente.
2. Implementar `DesktopToolModule` dentro de `src/workspace/modules`.
3. Declarar manifest, comandos y artefactos sin montar la instancia.
4. Implementar todas las transiciones y hacer `dispose` idempotente.
5. Validar cada estado restaurado con `assertSerializableSession`.
6. Registrar el módulo en el punto de composición que introducirá #25.
7. Reutilizar la suite de contrato para montaje, reactivación, liberación y límites arquitectónicos.

No se modifica el Tool Host para reconocer IDs concretos. Si una integración exige una rama por herramienta en el host, la responsabilidad está en el contrato equivocado.

## Gates

Antes de aceptar un módulo:

- Pruebas de manifest y registro sin crear instancias.
- Pruebas de montaje, desactivación, reactivación y liberación.
- Pruebas de sesión restaurada y serializada.
- Pruebas de comandos habilitados y payloads inválidos.
- Gate sin Astro, Tauri ni navegación global.
- Evidencia de reutilización del kernel compartido.
- `npm run test:desktop-contract` y `npm run check` en verde.

## Fuera de alcance

Este contrato no implementa el contenedor visual, cache de instancias, transiciones entre módulos, command palette ni Artifact Registry. Esas responsabilidades corresponden al Tool Host #25 y a los hitos posteriores.
