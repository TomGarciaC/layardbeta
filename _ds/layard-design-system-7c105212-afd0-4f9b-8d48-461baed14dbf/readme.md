# Layard — Design #System

> Firma mexicana de **crédito privado estructurado inmobiliario**. Pionera de la categoría **CTL (Credit Tenant Lease)** en México. Dirigida a inversionistas institucionales, acreditados y corporativos ancla. Carácter sobrio, editorial y financiero.

Proyecto **S26079 · Nuclea Studio · v1.0 · Junio 2026**.

---

## Qué es Layard

Layard estructura crédito privado respaldado por contratos de arrendamiento de largo plazo (Credit Tenant Lease). No es un prestamista genérico: diseña estructuras donde el flujo contractual del inquilino-ancla respalda la deuda, con garantía fiduciaria y duración alineada al contrato.

**Tres audiencias, énfasis distinto:**

- **Inversionistas** — flujo contractual, garantía fiduciaria, duración alineada, protección real.
- **Acreditados** — capital íntegro desplegado, propiedad preservada, estructura *interest-only*.
- **Corporativos ancla** — aceleración sin deuda en balance, cuello de botella resuelto.

**Lo que Layard NO es:** fintech, banco masivo, fondo de *equity*, firma genérica. El sistema visual y verbal debe distanciarse de los clichés de cada una de esas categorías.

---

## Fuentes (provistas para este sistema)

> No se asume que el lector tenga acceso; se registran por si lo tiene.

- **Codebase CSS** — montado vía File System Access en `CSS/layard-design-system.css` (674 líneas; sistema de tokens completo de Nuclea Studio). Es la fuente de verdad de tokens; se troceó en `tokens/*.css`.
- **Tipografías** (en `uploads/`, copiadas a `assets/fonts/`): `Gloock-Regular.ttf`, `GeneralSans-Variable.ttf`, `GeneralSans-VariableItalic.ttf`.
- **`uploads/Tono de voz.pdf`** — guía de tono de marca (6 páginas). El PDF no expone texto extraíble ni imágenes embebidas y el render falló en el entorno; los lineamientos de voz se reconstruyeron a partir del brief escrito. **Ver CAVEATS.**

---

## CONTENT FUNDAMENTALS — cómo se escribe

**Voz:** la de un **arquitecto financiero experto**, no la de un vendedor. La confianza se gana por **rigor estructural**, no por promesas. Sobrio, preciso, directo.

**Regla principal — la consecuencia primero.** Cada frase empieza por el **resultado para el cliente**, no por el mecanismo técnico.

- ✅ "Recupera tu capital íntegro y conserva la propiedad."
- ❌ "Empleamos una estructura interest-only con garantía fiduciaria que permite…"

**Sin clichés del sector.** Prohibidos: *soluciones a la medida*, *acompañamiento integral*, *aliado estratégico*, *tranquilidad financiera*, *crecimiento sostenible* y similares. Si una frase podría aparecer en el folleto de cualquier banco, se reescribe.

**Casing y registro:**

- Español de México, formal pero no acartonado. Trato de **tú** al cliente directo (acreditado/corporativo); registro institucional en materiales para inversionistas.
- Titulares en **Gloock** con mayúscula inicial de oración (sentence case), no Title Case.
- Eyebrows, labels y tags en **VERSALES** con tracking amplio.
- El wordmark **LAYARD** siempre en versales.

**Cifras y datos:** las cifras destacadas se componen en Gloock (serif) para tratarlas como afirmaciones editoriales, no como adornos de dashboard. Unidades en sans, tamaño menor ("$200 **mdp**").

**Sin emoji.** Nunca. No es parte de la marca.

**Vibe:** editorial financiero — más cercano a un memorándum de inversión o a una publicación seria que a una landing de fintech. Espacio en blanco generoso, frases cortas, afirmaciones verificables.

---

## VISUAL FOUNDATIONS

**Color.** Verde profundo institucional (`#08261E`) como base de marca, con una familia de verdes que va al casi-negro (`#051712`). Un **único acento**: ámbar cobre (`#B87333`), usado con mesura para énfasis, datos clave y CTAs de acento. Fondos sobre **crema cálida** (`#FFFCF0`), no blanco puro. Modo oscuro usa los verdes profundos como lienzo. La paleta es cálida y terrosa, nunca azul-corporativo ni neón-fintech.

**Tipografía.** Dos familias. **Gloock** (serif display, un solo peso 400) para todos los titulares y cifras destacadas — aporta el carácter editorial. **General Sans** (sans variable, 400/500) para cuerpo, UI, datos y tablas. Escala mayor (\~1.4), de 72px (H1) a 12px (label). Tracking apretado en titulares (`-0.02em`), amplio en versales (`0.08–0.12em`).

**Espaciado.** Base de 4px; toda medida es múltiplo de 4. Espaciado generoso entre secciones (64–128px en hero). Columna de texto máx. 720px.

**Fondos.** Planos. Crema o verde sólido. **Sin gradientes decorativos, sin texturas, sin patrones, sin imágenes hand-drawn.** Cuando hay fotografía, es arquitectónica/inmobiliaria, tonos cálidos y sobrios (ver Iconography). Las secciones se separan por color de fondo y aire, no por adornos.

**Bordes.** Hairlines teñidas de verde (`rgba(8,38,30,0.12 → 0.45)`). Grosores de 0.5px a 2px. Sobre oscuro, hairlines en crema translúcida.

**Radios.** Contenidos, **no redondeados**: 2px (tags), 4px (botones/inputs), 6px (cards), 8px (modales). El pill (`full`) se reserva para badges. El registro institucional evita las esquinas muy suaves.

**Sombras.** Mínimas y funcionales, teñidas de verde (`rgba(8,38,30,…)`). Tres niveles (sm/md/lg). Nunca sombras grandes ni difusas; la elevación se sugiere, no se anuncia. Cards normalmente con **borde** antes que con sombra.

**Cards.** Fondo blanco o crema, borde hairline, radio 6px, sombra opcional `sm`/`md`. Densas en información, sin decoración. El acento aparece como hairline superior o como dato, no como relleno.

**Animación.** Sutil e institucional, no fintech. Transiciones de 150–350ms `ease`; revelado lento con `cubic-bezier(0.16,1,0.3,1)` a 500ms para entradas. **Sin bounce, sin rebotes, sin loops decorativos.** Respeta `prefers-reduced-motion`.

**Estados hover.** Botones: oscurecen el relleno (primary → secondary-2; accent → accent-dark). Ghost: rellena con un velo tenue (`rgba(8,38,30,0.05)`) y refuerza el borde. Links de nav: suben de opacidad (0.8 → 1). Nunca cambian de color de marca al azar.

**Estados press.** `transform: scale(0.98)` — una compresión mínima, sin color extra.

**Focus.** Outline de 2px en ámbar (`--color-state-focus`) con offset de 2px. Siempre visible para accesibilidad.

**Transparencia y blur.** Uso restringido. Hairlines y velos de estado usan rgba; no hay glassmorphism. El blur no es parte del lenguaje.

**Layout.** Contenedor máximo 1280px, prosa 720px. Mobile-first. Padding de página 16/32/48px (mobile/tablet/desktop). Navbar full-width sobre verde profundo.

---

## ICONOGRAPHY

**Biblioteca oficial: [Phosphor Icons](https://phosphoricons.com), estilo Thin (Light opcional).** No se proveíó set propio en el codebase; Phosphor en su peso más fino es la familia que mejor encaja con el registro editorial-financiero de Layard — trazo de pelo, geometría sobria, neutralidad.

**Importación (CDN):** `https://unpkg.com/@phosphor-icons/web` (o las hojas por peso `@phosphor-icons/web/src/thin/style.css` y `/light/style.css`). Cargar una vez por página.

**Uso:** `<i class="ph-thin ph-arrow-right"></i>`. En React, el componente `Icon` lo envuelve: `<Icon name="lock-key" />`, `<Icon name="buildings" weight="light" size={24} />`. Catálogo de nombres en phosphoricons.com.

**Reglas de uso:**

- Peso **Thin** por defecto; **Light** cuando se necesite algo más de presencia. Nunca pesos rellenos (fill/duotone/bold) — rompen el registro.
- Color = `currentColor` (verde sobre claro, crema sobre oscuro); el ámbar solo para énfasis puntual.
- Tamaño base 20px; 16px en contextos densos; 24px en hero.
- Uso funcional y escaso. Un ícono acompaña una acción o un dato, nunca decora.
- **Sin emoji. Sin caracteres unicode como íconos.**
- **No crear íconos custom ni SVG inline** salvo que Phosphor no tenga el glifo necesario.
- Íconos afines a la naturaleza de Layard: `lock-key` / `shield-check` (garantía, protección real), `buildings` / `building-office` (inmueble/activo), `scroll` / `file-text` (contrato CTL), `key` (propiedad preservada), `bank` (institucional), `tree-structure` (estructura), `seal-check` (garantía fiduciaria), `calendar-check` (duración alineada), `coins` (capital íntegro), `map-pin` (ubicación urbana), `arrow-right` (avance/CTA). Ver `components/iconography/icons.card.html`.
- El "logo" es un **wordmark tipográfico** (Gloock versales, tracking `.22em`), no un símbolo. No hay isotipo provisto.

---

## PHOTOGRAPHY — Dirección fotográfica

Las imágenes ilustran el **activo subyacente de la estructura** — el inmueble comercial real — nunca el sector financiero en abstracto. Operan en tres registros según el contexto de uso.

**Registro 1 · Tesis y marca** (Hero, Tesis, Filosofía). Fotografía arquitectónica editorial del inmueble: fachada completa del local con inquilino corporativo visible, sin identificar la marca específica, encuadre desde esquina que muestre escala y ubicación urbana. Luz natural, hora dorada o difusa. Contraste contenido, temperatura neutra o ligeramente fría, saturación −10–20%. Sin personas. Horizontal o 1:1.2 vertical.

**Registro 2 · Inversionistas** (página de Inversionistas, tesis de inversión). Abstracción del activo: detalles materiales — textura de concreto, vidrio cortina, acero estructural, patrón de fachada. Sin personas. Composición geométrica, alto contraste, blanco y negro aceptable. Macro o semi-macro con foco nítido en el detalle.

**Registro 3 · Acreditados** (página de Acreditados, programas). Portafolio en operación: inmueble con inquilino corporativo en contexto urbano real, sin identificar la marca específica. Puede incluir actividad exterior sin enfoque en personas. Procesado cálido, ligeramente desaturado. Hora dorada preferida.

**Tratamiento cromático general.** Temperatura neutra a fría (5400–5800 K). Saturación reducida. Sombras ligeramente alzadas. Sin filtros de moda. Las imágenes sobre fondo crema deben tener temperatura fría; las imágenes sobre fondo verde pueden ser más cálidas.

**Nunca usar.** Apretones de mano, reuniones de stock, gráficas de crecimiento, skylines genéricos, personas de traje, renders 3D, dominante azul marcada, filtros de moda, stock genérico sin criterio editorial.

**Placeholders para desarrollo.** Donde no haya fotografía real, usar placeholders con ratio correcto (16:9 o 1:1.2), fondo `#D4C9B0` y etiqueta de registro: `[Registro 1 · Tesis]`, `[Registro 2 · Inversionistas]` o `[Registro 3 · Acreditados]`. Ver `guidelines/photography.html`.

---

## Índice / manifiesto del root

| Ruta | Qué es |
| --- | --- |
| `styles.css` | **Entry point.** Solo `@import`s. Los consumidores enlazan este archivo. |
| `tokens/fonts.css` | `@font-face` (Gloock, General Sans). |
| `tokens/typography.css` | Familias, escala, pesos, leading, tracking. |
| `tokens/colors.css` | Paleta completa + aliases semánticos. |
| `tokens/spacing.css` | Espaciado, layout, radios, bordes, sombras, motion, z-index. |
| `tokens/base.css` | Reset + clases utilitarias tipográficas y de layout. |
| `guidelines/*.html` | Specimen cards (Type, Colors, Spacing, Brand) del Design System tab. |
| `components/` | Primitivos de UI reutilizables (React). Ver abajo. |
| `ui_kits/` | Recreaciones de pantalla completa por producto. |
| `assets/fonts/` | Binarios de tipografía. |
| `SKILL.md` | Empaque como Agent Skill para Claude Code. |

**Componentes:** ver `components/` — Button, Tag, Badge, Card, StatFigure, Input, Select, Eyebrow, Icon, Navbar (cada uno con `.d.ts` + `.prompt.md` + card). Agrupados en `buttons/`, `forms/`, `data/`, `iconography/`, `navigation/`, `surfaces/`.

**UI kits:** ver `ui_kits/` — sitio institucional de Layard (marketing).

---

## CAVEATS

- **Tono de voz.pdf no se pudo leer.** No expone texto ni imágenes y el render a imagen agotó el tiempo del entorno. Los lineamientos de CONTENT FUNDAMENTALS se reconstruyeron del brief escrito; conviene cotejarlos con el PDF original.
- **Sin logo/isotipo.** Solo hay wordmark tipográfico. Si existe un logotipo oficial (SVG/PNG), hay que incorporarlo.
- **Íconos: Phosphor Icons** (Thin/Light) vía CDN — ver componente `Icon` y `components/iconography/`. Si Layard adopta un set propio en el futuro, reemplazar.
- **Sin fotografía de marca aún.** No se proveyó fotografía real; la **dirección fotográfica** está definida (ver sección PHOTOGRAPHY y `guidelines/photography.html`) y los UI kits usan placeholders `#D4C9B0` con etiqueta de registro donde corresponde imagen real.
