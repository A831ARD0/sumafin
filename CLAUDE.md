# Sumafin — Página web

Landing page de una financiera automotriz (crédito y arrendamiento) con presencia en Oaxaca y Puebla.

## Stack

- **Vanilla HTML/CSS + React 18 via CDN** — sin build step, sin bundler
- **JSX transpilado en el navegador** con Babel standalone (modo prototipo)
- **Fuentes**: Geist (sans) + JetBrains Mono — cargadas desde Google Fonts

## Estructura de archivos

```
index.html          # Entry point — carga CDN scripts y los .jsx
styles.css          # Sistema de diseño completo (variables CSS, layout, componentes)
components.jsx      # Icon(), BrandMark(), Wordmark(), fmtMXN — expuestos en window.*
sections.jsx        # Todas las secciones de la página — expuestas en window.*
app.jsx             # App principal, smooth-scroll, TweaksPanel
tweaks-panel.jsx    # Panel flotante de tweaks (useTweaks, TweakToggle, etc.)
sumafin-logo.png    # Logo real de Sumafin
```

## Paleta de marca

| Variable         | Valor     | Uso                        |
|------------------|-----------|----------------------------|
| `--navy`         | `#133E80` | Color primario / botones   |
| `--navy-deep`    | `#0A2B5C` | Fondos oscuros / footer    |
| `--blue`         | `#1E70B8` | Acentos / links / eyebrows |
| `--cyan`         | `#5BB3D9` | CTAs secundarios           |
| `--cyan-light`   | `#A8DBED` | Fondos suaves / celda hero |

El motivo gráfico del logo (4 cuadros 2×2) se repite como `BrandMark` SVG y como `.dot-grid` en los eyebrows.

## Secciones de la página (en orden)

1. **Nav** — sticky, blur, links de ancla
2. **Hero** — headline + grid 2×2 con métricas clave
3. **StatsStrip** — 4 cifras (toggle en Tweaks)
4. **Products** — Crédito vs Arrendamiento (cards)
5. **Process** — 4 pasos
6. **Benefits** — 6 beneficios en grid
7. **Requisitos** — Persona física / moral
8. **Cotizacion** — Formulario + canales de contacto (sin simulador)
9. **Testimonials** — 3 testimonios (toggle en Tweaks)
10. **Sucursales** — Oaxaca y Puebla con mapa SVG stub
11. **FAQ** — accordion
12. **Brands** — strip de marcas aliadas (toggle en Tweaks)
13. **Footer** — links, social, newsletter

## Convenciones importantes

- **No hay simulador/calculadora** — el usuario lo descartó. La sección de cotización usa formulario de contacto + canales directos (WhatsApp, teléfono, correo).
- Todo el texto editable vive en **sections.jsx** — arrays de datos al inicio de cada componente.
- Los componentes se exponen vía `Object.assign(window, {...})` para que Babel los encuentre entre archivos.
- El panel de Tweaks solo aparece cuando el host manda `__activate_edit_mode` — en producción no se ve.

## Datos de contacto (placeholder — reemplazar con reales)

- Oaxaca: `951 123 4567` / `oaxaca@sumafin.mx`
- Puebla: `222 987 6543` / `puebla@sumafin.mx`
- WhatsApp: `https://wa.me/5219511234567`
- Email general: `hola@sumafin.mx`

## Para editar copy

Abre `sections.jsx` y busca el componente por nombre. Los arrays de datos (steps, items, list, etc.) están al inicio de cada función. No hay lógica de negocio mezclada con el copy.

## Para servir localmente

```bash
python3 -m http.server 3000
# Abre http://localhost:3000
```
