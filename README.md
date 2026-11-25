# Ben 10 · tema para Kino TV

Tema para **toda la app** de Kino (celular y TV) inspirado en *Ben 10* clásico: el Omnitrix verde y cuatro transformaciones. Cada tema convierte el logo en un alien distinto.

> **Aviso:** es un tema no oficial hecho por un fan, sin relación con Cartoon Network ni Warner Bros. Los logos y el icono son dibujos originales y simplificados, no material oficial.

Es un plugin de **solo temas**: los temas son datos en `kino-plugin.json` (`appThemes`). No usa la red (`"hosts": []`) y no pide permisos. Guía oficial: <https://kinotvapp.github.io/kino-plugins/themes/>

> Requiere **Kino 0.9.81 o posterior** (`apiVersion` 18). Los bordes los dibuja Kino 0.9.82 o posterior; en 0.9.81 el tema funciona, pero sin bordes.

## Los cinco temas

| id | Nombre | Logo | Acento | Carácter |
|---|---|---|---|---|
| `ben10-omnitrix` | Omnitrix | anillo con el reloj de arena | verde `#4DFF1A` | formas redondas, botones circulares, transiciones suaves (200 ms) |
| `ben10-heatblast` | Inferno (Heatblast) | llama con núcleo claro | naranja `#FF5A00` | esquinas casi rectas, bordes de 2 dp, cortes rápidos (120 ms), experiencia ligera |
| `ben10-diamondhead` | Diamante (Diamondhead) | racimo de cristales con faceta | menta `#35F2A0` | esquinas rectas, botones cuadrados, fundidos de 260 ms y deriva del héroe activa |
| `ben10-fourarms` | Cuatro Brazos (Four Arms) | torso con cuatro brazos y puños | rojo `#FF3B30` | esquinas duras con borde de 2 dp, botones cuadrados, zoom de foco 1,10 |
| `ben10-xlr8` | XLR8 | tres flechas de velocidad | azul `#2F8CFF` | esquinas suaves, cortes casi instantáneos (60 ms), zoom de foco 1,12, experiencia ligera |

> No cambies nunca un `id` después de publicar: de él cuelgan la elección y los ajustes de cada persona.

## Qué hay en cada parte

- **Logo.** `logo.wordmark` (menú lateral, cabecera del celular, riel abierto de la TV) lleva el emblema del alien a la izquierda y «KINO» en bloques con esquinas cortadas a la derecha. `logo.mark` (riel cerrado de la TV) es solo el emblema. El alien usa `accent` y los detalles claros `textPrimary`, así que el color sale del tema. Kino conserva su propio logo en la pantalla de inicio y en las pantallas de decisión.
- **Reproductor.** Botón de play grande (`playButtonScale` 1,5; 1,6 en TV), barra de reproducción gruesa (1,4; 1,6 en TV) y forma de botones distinta por tema: circular, redondeada o cuadrada.
- **Tipografía.** Kino no permite cargar una fuente desde un tema (solo escalas): `typography.scale` 1,05 y `titleScale` 1,12 dan títulos más grandes; la identidad tipográfica va en el logo.
- **Experiencia.** Inferno y XLR8 sugieren la experiencia ligera y los demás la completa. Kino pregunta al activar el tema y nada cambia sin tu «sí».
- **Plugins de terceros.** `"pluginColors": "override"`: el tema manda también sobre los colores `theme` de otros plugins. Se puede apagar con el interruptor **Colores de los plugins**.

## Personalizar (Ajustes ▸ Apariencia ▸ Personalizar)

Se puede cambiar el acento (verde, naranja, menta, azul o rojo), la duración del fundido (0–500 ms) y el fondo.

## Pantalla de presentación

`plugin.js` exporta `screen` y `screenEvent` para una página con un botón «Transformar en…» por tema (`go.useTheme`). Se abre desde la pestaña de ajustes del plugin con **Ver presentación** y lee `activeTheme` para alternar «Transformar» y «Desactivar».

## Archivos

```
kino-plugin.json   manifiesto, cinco temas y logos vectoriales
plugin.js          pantalla de presentación (los temas no necesitan código)
icon.png           icono 256×256 del plugin
README.md          este archivo
```

## Probar

Con el kit oficial de plugins de Kino:

```bash
node sdk/validate.mjs .                                                       # formato y advertencias, celular y TV
node sdk/run.mjs --context '{"activeTheme":"ben10-omnitrix"}' . screen         # pantalla con el tema activo
```

Los cinco temas cumplen en mis comprobaciones las protecciones de legibilidad de Kino (fondo oscuro, `accent` y `focus` ≥ 3:1 sobre el fondo, `onAccent` y texto ≥ 4,5:1), y todos los rellenos de los logos usan solo colores permitidos. Aun así, confirma con el validador oficial y mira el resultado en **Ajustes ▸ Apariencia** antes de publicar. El emblema del Omnitrix usa arcos SVG que no pude rasterizar en mi entorno: revísalo en la vista previa.

## Publicar

1. Sube la carpeta a un repositorio de GitHub.
2. Sigue <https://kinotvapp.github.io/kino-plugins/publish/>.
3. `categories: ["themes"]` lo lista en **Temas** en la tienda de plugins.

El manifiesto pesa unos 9 KB de los 16 KB permitidos, así que aún queda espacio para otro alien.

## Propuesta visual del icono (`icon.png`)

- **Fondo:** negro verdoso con círculos concéntricos muy tenues, como la pantalla del reloj.
- **Símbolo:** el dial del Omnitrix: un anillo de cuatro cuadrantes (verde, naranja, azul y menta) con halo de luz, una placa oscura con borde verde y el reloj de arena brillante al centro.
- **Ruido:** pequeñas chispas verdes, blancas y azules alrededor.
- **Marco:** doble borde fino, gris verdoso por fuera y verde por dentro.

Puedes reemplazarlo por un PNG tuyo cuadrado de hasta 128 KB con el mismo nombre `icon.png`.
