// Ben 10 · tema para Kino TV (apiVersion 18)
//
// Los temas viven como datos en kino-plugin.json (appThemes): no corren código,
// no usan la red y no piden permisos. Este archivo solo dibuja una pantalla de
// presentación con un botón por tema (go.useTheme). Ajustes ▸ Apariencia sigue
// siendo la vía principal para activarlos.

const THEMES = [
  { id: "ben10-omnitrix", es: "Omnitrix", en: "Omnitrix" },
  { id: "ben10-heatblast", es: "Inferno", en: "Heatblast" },
  { id: "ben10-diamondhead", es: "Diamante", en: "Diamondhead" },
  { id: "ben10-fourarms", es: "Cuatro Brazos", en: "Four Arms" },
  { id: "ben10-xlr8", es: "XLR8", en: "XLR8" },
];

export async function screen({ activeTheme }) {
  const buttons = THEMES.map((t) => {
    const on = activeTheme === t.id;
    return {
      type: "ElevatedButton",
      key: "theme-" + t.id,
      icon: on ? "check" : "bolt",
      labelText: on ? t.es + " · activo (desactivar)" : "Transformar en " + t.es,
      labelTextEn: on ? t.en + " · on (turn off)" : "Transform into " + t.en,
      onPressed: { go: { useTheme: { theme: on ? null : t.id } } },
    };
  });

  return {
    type: "SingleChildScrollView",
    children: [
      {
        type: "Column",
        padding: 16,
        gap: 12,
        children: [
          { type: "Badge", text: "TEMA INSPIRADO EN BEN 10", textEn: "BEN 10 INSPIRED THEME", color: "primary" },
          { type: "Text", text: "¡Es hora de transformarse!", textEn: "It's hero time!", style: "h1" },
          {
            type: "Text",
            text: "Omnitrix verde y cuatro transformaciones: fuego, cristal, fuerza y velocidad.",
            textEn: "Green Omnitrix and four transformations: fire, crystal, strength and speed.",
            style: "caption",
            color: "muted",
          },
          { type: "Divider" },
          {
            type: "Card",
            variant: "outlined",
            key: "about",
            children: [
              {
                type: "Text",
                text: "Cada tema convierte el logo en un alien distinto y cambia colores, bordes, forma de los botones y velocidad de las transiciones.",
                textEn: "Each theme turns the logo into a different alien and changes colors, borders, button shape and transition speed.",
              },
            ],
          },
          { type: "Column", gap: 8, crossAxisAlignment: "stretch", children: buttons },
          {
            type: "Text",
            text: "También puedes cambiarlo en Ajustes ▸ Apariencia. Tema no oficial hecho por un fan; sin relación con Cartoon Network ni Warner Bros.",
            textEn: "You can also switch it in Settings ▸ Appearance. Unofficial fan-made theme; not affiliated with Cartoon Network or Warner Bros.",
            style: "caption",
            color: "muted",
          },
        ],
      },
    ],
  };
}

export async function screenEvent() {
  // go.useTheme lo resuelve Kino directamente desde la pulsación del botón.
  return null;
}
