# Tool Host integrado

## Responsabilidad

`DesktopToolHost` es el propietario del ciclo de vida de las herramientas dentro del workspace. El shell solicita un módulo por ID y el host lo resuelve mediante `DesktopToolRegistry`; no contiene ramas por herramienta ni monta páginas completas.

La superficie activa pertenece al mismo árbol DOM, cabecera y viewport que el shell. `SpriteSheetPackerDesktopModule` es la primera integración de referencia. Las otras herramientas continúan disponibles mediante un adaptador legacy aislado mientras se migran.

## Cambio transaccional

El cambio de herramienta sigue esta secuencia:

1. Cancelar cualquier montaje pendiente anterior.
2. Crear una instancia y una superficie conectada al DOM pero invisible e inerte para el nuevo módulo.
3. Montar con un `AbortSignal` y un timeout de 2 segundos.
4. Activar la nueva instancia antes de modificar la superficie visible.
5. Confirmar la nueva superficie de forma atómica.
6. Desactivar, cancelar y liberar inmediatamente la instancia anterior.

Un fallo antes del commit descarta la superficie preparada y conserva la última herramienta válida. El usuario puede reintentar o restaurar esa herramienta sin recrearla.

## Límites de memoria y recursos

El host de esta fase no mantiene cache de módulos:

- Existe como máximo una instancia activa confirmada.
- Durante una transición puede existir una única instancia adicional en preparación.
- Una solicitud posterior cancela y descarta la preparación anterior.
- La superficie anterior solo permanece hasta que la nueva confirma montaje y activación.
- Tras el commit, la instancia anterior se libera inmediatamente.
- Cada montaje dispone de 2 segundos para confirmar; el timeout aborta y ejecuta rollback.
- El loader se retrasa 150 ms para evitar parpadeos en cargas rápidas.

`dispose` debe ser idempotente y liberar listeners, timers, observers, workers, blobs, canvas, audio y referencias DOM. El host cancela la señal antes de liberar una instancia. Una vista solo puede limpiar el elemento de superficie recibido; no puede modificar el documento o el shell.

Una futura cache solo podrá introducirse con un presupuesto medible, una política explícita de expulsión y pruebas de sesiones largas. Hasta entonces, conservar instancias inactivas es una violación del contrato.

## Estados y recuperación

El host publica `idle`, `mounting`, `ready`, `error` y `retrying`, reutilizando el vocabulario de carga de #23.

- `mounting` y `retrying` no ocultan una superficie activa válida.
- `error` conserva el ID de la herramienta solicitada, la causa y la herramienta aún activa.
- `retry` repite la última solicitud con una instancia y superficie nuevas.
- `restoreActive` cancela la solicitud fallida y vuelve al módulo confirmado sin recrearlo.

La actividad producida por un módulo se atribuye al ID que recibió su contexto, incluso si otra herramienta empieza a prepararse después.

## Adaptador legacy

`LegacyIframeDesktopToolModule` es una frontera temporal, no una segunda estrategia de host. Es el único componente autorizado para crear un `iframe` y traducir el protocolo `postMessage` anterior al contexto y actividad tipados.

El adaptador exige la identidad canónica de la herramienta y el origen exacto del host, espera una señal `tool:ready`, propaga `tool:error` y elimina listener, señal y documento embebido durante `dispose`. Los documentos legacy son código local de confianza. El `sandbox` permite scripts y mismo origen para que sus módulos carguen; no se considera una frontera de seguridad frente a código malicioso. Las rutas `/workspace/tool/*` anuncian el ID del registro, no el slug de la URL.

### Condición de retirada

Cada herramienta abandona el adaptador cuando:

1. dispone de un `DesktopToolModule` que monta una superficie operativa local;
2. reutiliza su kernel público sin duplicarlo;
3. supera las pruebas de ciclo de vida, cancelación y liberación;
4. mantiene intacta su página Web gratuita;
5. cumple la checklist de migración correspondiente.

Cuando ningún manifest declare la capacidad `legacy.iframe`, se eliminan en el mismo cambio:

- `src/workspace/host/legacy`;
- las rutas `/workspace/tool/*` usadas solo como documentos embebidos;
- el protocolo de compatibilidad `postMessage` que ya no tenga consumidores.

El recuento del registro es evidencia ejecutable de la transición: actualmente hay un módulo integrado y dieciséis adaptadores legacy. Cada migración debe reducir ese número; nunca puede aumentarlo.

## Gates

Antes de modificar el host:

- pruebas de commit, rollback, timeout, cancelación y restauración;
- prueba de liberación de la superficie anterior;
- prueba de composición que impide reintroducir un `iframe` en `ToolViewport`;
- gate arquitectónico sin Astro, Tauri ni navegación global en módulos;
- `npm run check`;
- build Web completa;
- gate Desktop TypeScript y Rust.
