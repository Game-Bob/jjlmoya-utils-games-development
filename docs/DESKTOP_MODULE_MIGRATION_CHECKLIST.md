# Checklist de migración de módulos Desktop

## Uso obligatorio

Esta checklist se completa para cada `DesktopToolModule` antes de considerar integrada una herramienta. Una casilla solo se marca con evidencia en código y pruebas.

### Núcleo compartido

- [ ] Existe un kernel de dominio puro y cubierto por tests.
- [ ] El kernel forma parte de `./core/<toolName>` o de otro export público explícito.
- [ ] Web y Desktop importan el mismo kernel sin copias ni forks.
- [ ] El kernel no importa DOM, Astro, workspace, Tauri, IPC ni filesystem nativo.

### Web gratuita

- [ ] La herramienta completa sigue disponible sin proyecto Desktop.
- [ ] No requiere cuenta ni comprobación de licencia Desktop.
- [ ] Importación, cálculo y exportación manual continúan operativos.
- [ ] El build web y el consumidor externo permanecen verdes.

### Contrato Desktop

- [ ] Implementa `DesktopToolModule` y declara identidad, capacidades y ciclo de vida.
- [ ] Declara tipos de artefacto de entrada y salida.
- [ ] Recibe `IPlatformBridge` y servicios mediante inyección.
- [ ] No importa `@tauri-apps/*` desde el módulo o su kernel.
- [ ] Monta una superficie operativa sin documento HTML, cabecera ni scroll duplicados.
- [ ] Expone comandos con estado de habilitación y una acción primaria clara.
- [ ] Serializa únicamente el estado de sesión que debe restaurarse.
- [ ] Libera listeners, watchers y recursos durante `deactivate` o `dispose`.

### Continuidad

- [ ] Consume artefactos existentes sin volver a seleccionar sus archivos.
- [ ] Registra resultados reproducibles en el Artifact Registry.
- [ ] Invalida o regenera resultados cuando cambian sus dependencias.
- [ ] Restaura selección, parámetros y trabajo activo al reabrir el proyecto.
- [ ] Informa progreso, éxito y error mediante la actividad común del shell.

### Evidencia de salida

- [ ] Tests del kernel.
- [ ] Tests del contrato del módulo.
- [ ] Test de handoff desde la etapa anterior y hacia la siguiente.
- [ ] Test de restauración de sesión.
- [ ] Prueba manual de la herramienta web.
- [ ] Prueba manual de la herramienta dentro del workbench Desktop.

## Aplicación al corte vertical de sprites

Estado verificado el 25 de septiembre de 2026. `Cumple` describe evidencia actual; `Parcial` indica una integración transitoria; `Pendiente` no debe interpretarse como defecto del kernel web.

| Herramienta | Web completa | Kernel público compartido | Sin dependencia Tauri pública | Bridge Desktop | `DesktopToolModule` | Handoff de artefactos | Restauración |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sprite Sheet Fixer | Cumple | Cumple | Cumple | Pendiente | Pendiente #24 y #29 | Pendiente #28 y #29 | Pendiente #26 y #29 |
| SpriteSheet Packer | Cumple | Cumple | Cumple | Parcial: recibe el bridge; falta flujo de archivos | Cumple #24 y #25; flujo completo pendiente #29 | Pendiente #28 y #29 | Pendiente #26 y #29 |
| Hitbox/Hurtbox Animator | Cumple | Cumple | Cumple | Parcial | Pendiente #24 y #29 | Pendiente #28 y #29 | Pendiente #26 y #29 |
| Pixel Art Palette Swapper | Cumple | Cumple | Cumple | Pendiente | Pendiente #24 y #29 | Pendiente #28 y #29 | Pendiente #26 y #29 |

### Evidencia ya disponible

- Los cuatro kernels se publican mediante el patrón `./core/*`.
- El gate de fronteras inspecciona sus fuentes y el resolver compartido.
- El consumidor externo ejecuta realmente el kernel de SpriteSheet Packer.
- Packer y Hitbox ya intercambian contexto parcial con el workspace.

### Bloqueos explícitos

- #24 y #25 ya aportan contrato y alojamiento integrado para el módulo de referencia.
- #26 debe aportar restauración de proyecto y sesión.
- #28 debe definir artefactos y handoffs persistentes.
- #29 debe completar y verificar las cuatro filas.

No se migrará audio ni lanzamiento hasta que el corte de sprites complete esta checklist o el epic #32 documente una excepción explícita.
