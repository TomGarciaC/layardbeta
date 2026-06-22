/* ============================================================
   LAYARD — Panel de Tweaks
   Tres controles expresivos para el Home:
     1) Paleta — esquema de color completo
     2) Hero   — composición (dividido, editorial, oscuro)
     3) Escala — jerarquía tipográfica
   Requiere: React 18 + ReactDOM 18 + Babel (cargados en index.html)
   y tweaks-panel.jsx (el starter del panel de Tweaks).
   ============================================================ */

const { useEffect } = React;
const { useTweaks, TweaksPanel, TweakSection, TweakRadio } = window;

/* ----------------------------------------------------------
   Valores por defecto
   ---------------------------------------------------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paleta": "Verde",
  "hero": "Dividido",
  "escala": "Editorial"
}/*EDITMODE-END*/;

/* ----------------------------------------------------------
   Helpers: aplican clases en <body> según el valor activo
   ---------------------------------------------------------- */
const PALETA_CLASSES  = ['paleta-pizarra', 'paleta-tierra'];
const HERO_CLASSES    = ['hero-editorial', 'hero-oscuro'];
const ESCALA_CLASSES  = ['escala-compacta', 'escala-monumental'];

function setBodyClasses(pool, active) {
  const b = document.body;
  pool.forEach(c => b.classList.remove(c));
  if (active) b.classList.add(active);
}

function applyPaleta(v) {
  setBodyClasses(PALETA_CLASSES,
    v === 'Pizarra' ? 'paleta-pizarra' :
    v === 'Tierra'  ? 'paleta-tierra'  : null);
}
function applyHero(v) {
  setBodyClasses(HERO_CLASSES,
    v === 'Editorial' ? 'hero-editorial' :
    v === 'Oscuro'    ? 'hero-oscuro'    : null);
}
function applyEscala(v) {
  setBodyClasses(ESCALA_CLASSES,
    v === 'Compacta'    ? 'escala-compacta'    :
    v === 'Monumental'  ? 'escala-monumental'  : null);
}

/* ----------------------------------------------------------
   Componente del panel
   ---------------------------------------------------------- */
function LayardTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => { applyPaleta(t.paleta); },  [t.paleta]);
  useEffect(() => { applyHero(t.hero); },       [t.hero]);
  useEffect(() => { applyEscala(t.escala); },   [t.escala]);

  return (
    React.createElement(TweaksPanel, null,

      React.createElement(TweakSection, { label: "Paleta de color" }),
      React.createElement(TweakRadio, {
        label: "Esquema",
        value: t.paleta,
        options: ["Verde", "Pizarra", "Tierra"],
        onChange: v => setTweak("paleta", v)
      }),

      React.createElement(TweakSection, { label: "Composición del hero" }),
      React.createElement(TweakRadio, {
        label: "Disposición",
        value: t.hero,
        options: ["Dividido", "Editorial", "Oscuro"],
        onChange: v => setTweak("hero", v)
      }),

      React.createElement(TweakSection, { label: "Escala tipográfica" }),
      React.createElement(TweakRadio, {
        label: "Tamaño",
        value: t.escala,
        options: ["Compacta", "Editorial", "Monumental"],
        onChange: v => setTweak("escala", v)
      })
    )
  );
}

/* ----------------------------------------------------------
   Monte
   ---------------------------------------------------------- */
const _tweaksRoot = document.getElementById('tweaks-root');
if (_tweaksRoot) {
  ReactDOM.createRoot(_tweaksRoot).render(React.createElement(LayardTweaks));
}
