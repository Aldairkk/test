# War of P: concepto de rediseño MOBA

Maquetas originales de cómo podría verse **War of P** como un MOBA 5v5 bien diseñado.
Cada pantalla es un HTML/SVG autocontenido (`shared.css` + archivo) renderizado a PNG de 1920×1080.

> Nota: no se pudo acceder a https://warofp.com/web/ desde el entorno de trabajo (la red lo bloquea),
> así que estas maquetas no se basan en el contenido real del sitio.

| Pantalla | Imagen | Fuente |
|---|---|---|
| En partida (HUD) | `01-gameplay-hud.png` | `01-gameplay-hud.html` |
| Selección de héroes (draft) | `02-hero-draft.png` | `02-hero-draft.html` |
| Lobby principal | `03-main-lobby.png` | `03-main-lobby.html` |

## Principios de diseño aplicados

- **El centro de la pantalla es para jugar.** El HUD ocupa los bordes, la barra de habilidades queda abajo y centrada, y el minimapa va en una esquina fija.
- **Lectura inmediata de equipos.** Azul para los aliados y rojo para los enemigos en todo el juego: anillos, barras de vida, marcador, minimapa y kill feed.
- **Telegrafía clara.** Los ataques enemigos muestran su área antes de impactar, y las habilidades propias muestran su alcance al apuntar.
- **Información accionable.** Temporizadores de objetivos, estado de la definitiva de cada aliado, tiempo de reaparición, compra sugerida y pings con contexto.
- **Draft con contexto.** Bans visibles, filtro por rol, porcentaje de victorias, kit y dificultad del héroe, y preferencias de los compañeros.
- **Lobby que lleva a jugar.** Un botón JUGAR dominante con el modo y los roles ya elegidos, y el progreso (rango, misiones, pase) a la vista sin estorbar.

## Regenerar las imágenes

```bash
node render.js 01-gameplay-hud.html 02-hero-draft.html 03-main-lobby.html
```
