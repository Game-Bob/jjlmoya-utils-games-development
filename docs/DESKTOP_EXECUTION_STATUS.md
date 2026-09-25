# Estado de ejecución de GameBob Quest Desktop

## Función de este documento

Este es el checkpoint operativo para continuar la iniciativa Desktop sin redescubrir decisiones ni confundir planificación con implementación.

- La dirección de producto y arquitectura vive en [DESKTOP_PRODUCT_DIRECTION.md](./DESKTOP_PRODUCT_DIRECTION.md).
- Los criterios de aceptación viven en los tickets enlazados desde el epic [#32](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/32).
- Este archivo indica hasta dónde se ha llegado y qué debe ejecutarse a continuación.

Debe actualizarse cuando se cierre un ticket de la iniciativa, cambie el orden de ejecución o una decisión modifique el alcance.

## Snapshot verificado

| Campo | Estado |
| --- | --- |
| Fecha de verificación | 25 de septiembre de 2026 |
| Rama de trabajo | `main` |
| Último incremento verificado antes de este checkpoint | `d8803cf` |
| Epic activo | [#32 GameBob Quest Desktop Cohesion](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/32) |
| Fase actual | Tool Host integrado completado; continuidad de proyecto en curso |
| Último ticket completado | [#25 Crear un Tool Host integrado y retirar el iframe](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/25) |
| Siguiente ticket | [#26 Entregar launcher de proyectos y restauración de sesión](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/26) |
| Siguiente después de #26 | [#27 Consolidar workbench y lenguaje operativo](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/27) |

## Qué está terminado

### Base técnica de Tauri

La fase anterior dejó una base estable sobre la que iniciar la migración de producto:

- Toolchain y empaquetado Tauri modernizados.
- IPC nativo y acceso a proyectos endurecidos.
- Persistencia y sincronización básica de proyectos incorporadas.
- Canal de workspace integrado parcialmente en SpriteSheet Packer y Hitbox/Hurtbox Animator.
- Estilos de las herramientas embebidas restaurados.
- Arquitectura y modelo de seguridad documentados.
- CI corregida y validada en Windows, macOS y Ubuntu para el commit `7445ac5`.
- Tickets anteriores #14 a #21 cerrados.

Esto significa que la base compila y se distribuye. No significa que la experiencia Desktop ya sea cohesionada.

### Dirección de producto

La fase de análisis también está terminada:

- Se documentó por qué la aplicación se percibe como una web encapsulada.
- Se acordó que la librería compartida y la web seguirán siendo públicas, gratuitas y funcionalmente completas.
- Se acordó que Desktop será premium por continuidad, automatización, integración nativa y ahorro de trabajo manual.
- Se definieron Application Shell, Desktop Tool Module, Tool Host, Project Session y Artifact Registry como arquitectura objetivo.
- Se eligió el flujo de sprites como primer corte vertical.
- Se abrió el backlog #23 a #33 y se agrupó en el epic #32.

### Frontera de distribución

La issue #33 está completada:

- La API pública se versiona en `public-api.contract.json`.
- El paquete expone catálogo, kernels, contratos y adaptadores Web sin publicar Tauri ni el workspace Desktop.
- Tauri se registra únicamente desde puntos de composición Desktop.
- Un proyecto Astro externo instala el tarball real y ejecuta el kernel de SpriteSheet Packer.
- CI separa los gates de paquete, consumidor externo, web y Desktop.
- La matriz de capacidades y la checklist del corte de sprites están documentadas.

### Carga fiable de módulos

La issue #23 está completada:

- El `iframe` comienza sin ruta y solo navega después de conectar el ciclo de vida.
- Las diecisiete rutas emiten una señal `tool:ready` común y reportan errores de arranque.
- Las cargas rápidas no muestran spinner; las cargas lentas muestran progreso tras 150 ms.
- La ausencia de `ready` se convierte en error recuperable a los 2 segundos.
- El usuario puede reintentar o volver al último módulo que confirmó estar operativo.
- Ruta, duración y causa quedan registradas en la actividad local.
- Las regresiones de carrera, timeout, ruta, script, reintento y vuelta atrás tienen pruebas separadas.

### Contrato DesktopToolModule

La issue #24 está completada:

- Manifest, capacidades, comandos y tipos de artefacto se consultan sin montar una instancia.
- El ciclo de vida cubre montaje, actualización de contexto, activación, desactivación, serialización y liberación.
- El registro valida módulos y duplicados al arrancar sin conocer IDs concretos.
- El estado de sesión admite solo JSON y rechaza DOM, handles, clases, ciclos y valores no portables.
- Un gate impide imports de Astro, Tauri y acceso a navegación global dentro de los módulos.
- Sprite Sheet Packer demuestra montaje y reactivación reutilizando el kernel público de grid.
- El contrato y la guía de extensión están documentados en `DESKTOP_TOOL_MODULE_CONTRACT.md`.

### Tool Host integrado

La issue #25 está completada:

- `ToolViewport` contiene una superficie del host dentro del árbol del shell y ya no crea un `iframe` principal.
- `DesktopToolHost` prepara, activa y confirma módulos de forma transaccional, conservando la última superficie válida hasta el commit.
- Cambio, timeout, reintento, restauración y liberación cancelan trabajo mediante `AbortSignal` y tienen pruebas independientes.
- Sprite Sheet Packer dispone de una superficie integrada que reutiliza el kernel público de grid.
- Los otros dieciséis módulos permanecen disponibles mediante un único adaptador legacy aislado.
- El registro identifica de forma ejecutable qué módulos siguen usando `legacy.iframe`.
- La cabecera pertenece al shell y el scroll se limita a la superficie confirmada.
- Límites de memoria, recursos y condición de retirada están documentados en `DESKTOP_TOOL_HOST.md`.
- En navegador local se verificó el cambio Sprite → Hitbox → Sprite: ambos llegan a listo, queda una sola superficie activa y el documento legacy se elimina al volver.
- Las 72 suites de Vitest pasan con 3006 tests; `astro check` informa cero errores en 688 archivos.
- `npm run lint` y la build Web completa de 289 páginas pasan. El gate de distribución valida ocho exports públicos y el paquete en un consumidor Astro externo.
- El contrato Desktop pasa 108 pruebas TypeScript y siete pruebas Rust; `cargo check` finaliza sin errores.

## Qué no está terminado

La frontera técnica, la carga observable y el alojamiento integrado ya están protegidos, pero la continuidad de proyecto todavía no está terminada. En el estado actual:

- Dieciséis herramientas siguen usando páginas Astro dentro del adaptador legacy, aunque el viewport principal ya no es un documento embebido.
- Solo Sprite Sheet Packer dispone de una superficie `DesktopToolModule` integrada.
- No existe un launcher de proyectos que convierta la continuidad en la entrada principal.
- No existe un Artifact Registry ni handoffs persistentes entre etapas.
- Quince de las diecisiete herramientas siguen aisladas del contexto del workspace.
- Navegación, inspector, comandos y lenguaje visual aún no forman un workbench único.

Por tanto, no debe comunicarse que la aplicación está terminada. La formulación precisa es: base técnica saneada, frontera Web/Desktop protegida, carga recuperable, contrato y host integrados listos, y continuidad de proyecto pendiente.

## Orden de ejecución vigente

1. [#26](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/26): entregar launcher de proyectos y restauración de sesión.
2. [#27](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/27): consolidar primitives de workbench y lenguaje operativo.
3. [#28](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/28): introducir Artifact Registry y handoffs.
4. [#29](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/29): completar el corte vertical de sprites.
5. [#30](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/30): reorganizar navegación en workflows, trabajos y Labs.
6. [#31](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/31): aplicar el gate final de aceptación UX y rendimiento.

No cerrar #29 con una demostración aislada: debe existir continuidad real de artefactos y restauración de sesión.

## Reglas para continuar

- Trabajar directamente sobre `main`, según la decisión del propietario del repositorio.
- Hacer commits pequeños por capacidad verificable, sin acumular toda una issue en un único commit si contiene unidades independientes.
- Preservar la web gratuita y el paquete público; Desktop no puede apropiarse de kernels, formatos ni cálculos compartidos.
- No duplicar lógica de dominio para evitar diseñar el contrato común.
- No añadir nuevas herramientas al catálogo mientras siga pendiente la integración de las existentes.
- Cerrar un ticket únicamente cuando todos sus criterios de aceptación tengan evidencia verificable.
- Actualizar este checkpoint y el epic #32 al cerrar, reordenar o redefinir trabajo.

## Protocolo de reanudación

Al retomar la iniciativa:

1. Leer este checkpoint y `DESKTOP_PRODUCT_DIRECTION.md`.
2. Comprobar `git status`, la cabeza de `main` y los tickets abiertos del epic #32.
3. Si el estado coincide, comenzar por el primer ticket abierto del orden vigente.
4. Si no coincide, reconciliar este archivo con Git y GitHub antes de implementar.
5. Ejecutar validación proporcional a cada commit y la puerta completa antes de cerrar la issue.

No repetir la auditoría general ni reabrir #14 a #21 salvo que exista una regresión observable.

## Próxima definición de éxito

El siguiente checkpoint se alcanza cuando #26 quede cerrado con evidencia de que:

- La entrada principal permite crear, abrir y retomar proyectos recientes.
- La sesión restaura proyecto, herramienta y estado serializable del módulo.
- El modo sin proyecto es deliberado y no el estado ambiguo por defecto.
- Cerrar y volver a abrir la aplicación continúa el trabajo sin reconstruir contexto manualmente.

Después de eso, el foco pasa inmediatamente a #27.
