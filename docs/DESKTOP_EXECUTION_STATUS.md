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
| Fecha de verificación | 22 de septiembre de 2026 |
| Rama de trabajo | `main` |
| Último incremento verificado antes de este checkpoint | `10e4922` |
| Epic activo | [#32 GameBob Quest Desktop Cohesion](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/32) |
| Fase actual | Frontera y estabilidad de carga completadas; contrato de módulos en curso |
| Último ticket completado | [#23 Hacer fiable y recuperable la carga de módulos](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/23) |
| Siguiente ticket | [#24 Definir el contrato DesktopToolModule](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/24) |
| Siguiente después de #24 | [#25 Crear un Tool Host integrado y retirar el iframe](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/25) |

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

## Qué no está terminado

La frontera técnica y la carga observable ya están protegidas, pero la migración del alojamiento y la continuidad de trabajo todavía no ha empezado. En el estado actual:

- Las herramientas siguen alojándose como páginas Astro completas dentro de un `iframe`.
- No existe todavía un contrato `DesktopToolModule` ni su ciclo de vida.
- No existe un Tool Host integrado sin documentos HTML embebidos.
- No existe un launcher de proyectos que convierta la continuidad en la entrada principal.
- No existe un Artifact Registry ni handoffs persistentes entre etapas.
- Quince de las diecisiete herramientas siguen aisladas del contexto del workspace.
- Navegación, inspector, comandos y lenguaje visual aún no forman un workbench único.

Por tanto, no debe comunicarse que la aplicación está terminada. La formulación precisa es: base técnica saneada, frontera Web/Desktop protegida, carga recuperable y migración de experiencia pendiente.

## Orden de ejecución vigente

1. [#24](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/24): definir el contrato `DesktopToolModule` y su ciclo de vida.
2. [#25](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/25): sustituir el alojamiento por `iframe` mediante el Tool Host integrado.
3. [#26](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/26): entregar launcher de proyectos y restauración de sesión.
4. [#27](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/27): consolidar primitives de workbench y lenguaje operativo.
5. [#28](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/28): introducir Artifact Registry y handoffs.
6. [#29](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/29): completar el corte vertical de sprites.
7. [#30](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/30): reorganizar navegación en workflows, trabajos y Labs.
8. [#31](https://github.com/Game-Bob/jjlmoya-utils-games-development/issues/31): aplicar el gate final de aceptación UX y rendimiento.

No comenzar la migración masiva de herramientas antes de completar #24 y #25. No cerrar #29 con una demostración aislada: debe existir continuidad real de artefactos y restauración de sesión.

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

El siguiente checkpoint se alcanza cuando #24 quede cerrado con evidencia de que:

- Existe un contrato `DesktopToolModule` pequeño, versionado y ajeno al DOM global.
- El ciclo de vida cubre montaje, actualización de contexto, activación, desactivación y liberación.
- Un módulo puede declarar capacidades, comandos y tipos de artefacto sin importar Tauri.
- El host puede cancelar trabajos y liberar recursos al cambiar de herramienta.
- El corte de sprites implementa el contrato sin duplicar su kernel compartido.

Después de eso, el foco pasa inmediatamente a #25.
