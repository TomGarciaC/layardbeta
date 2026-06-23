/* @ds-bundle: {"format":3,"namespace":"LayardDesignSystem_7c1052","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/data/Eyebrow.jsx"},{"name":"StatFigure","sourcePath":"components/data/StatFigure.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Icon","sourcePath":"components/iconography/Icon.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"07e8d2805b48","components/data/Badge.jsx":"ef0be4d14587","components/data/Eyebrow.jsx":"c578f56cfe9f","components/data/StatFigure.jsx":"fc2ddf4d8466","components/data/Tag.jsx":"6d137047036a","components/forms/Input.jsx":"7433bf10efb1","components/forms/Select.jsx":"ebf5351fc17f","components/iconography/Icon.jsx":"f4c6fad1467a","components/navigation/Navbar.jsx":"17dc5b5ff589","components/surfaces/Card.jsx":"cbd7f91d531b","ui_kits/website/Audiences.jsx":"299201ea9e0b","ui_kits/website/ContactForm.jsx":"cfc4cef4f657","ui_kits/website/Footer.jsx":"d65abae81b8e","ui_kits/website/Hero.jsx":"d0fa25d4af31","ui_kits/website/StatsBand.jsx":"f3e160fffa5a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LayardDesignSystem_7c1052 = window.LayardDesignSystem_7c1052 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: 'var(--text-label)',
    padding: 'var(--space-2) var(--space-4)'
  },
  md: {
    fontSize: 'var(--text-body-sm)',
    padding: 'var(--space-3) var(--space-6)'
  },
  lg: {
    fontSize: 'var(--text-body)',
    padding: 'var(--space-4) var(--space-8)'
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--color-primary)',
    fg: 'var(--color-text-inverse)',
    bd: 'var(--color-primary)',
    hoverBg: 'var(--color-secondary-2)'
  },
  secondary: {
    bg: 'var(--color-base-light)',
    fg: 'var(--color-primary)',
    bd: 'var(--color-base-light)',
    hoverBg: 'var(--color-surface-2)'
  },
  accent: {
    bg: 'var(--color-accent)',
    fg: 'var(--color-base-light)',
    bd: 'var(--color-accent)',
    hoverBg: 'var(--color-accent-dark)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--color-secondary-1)',
    bd: 'var(--color-secondary-1)',
    hoverBg: 'var(--color-state-hover-light)'
  },
  'ghost-inverse': {
    bg: 'transparent',
    fg: 'var(--color-text-inverse)',
    bd: 'var(--color-border-inverse)',
    hoverBg: 'var(--color-state-hover-dark)'
  }
};

/**
 * Layard button — three institutional fills plus ghost variants.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = as;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-wide)',
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    border: 'var(--border-width-base) solid',
    borderColor: v.bd,
    background: hover && !disabled ? v.hoverBg : v.bg,
    color: v.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-color), var(--transition-transform)',
    userSelect: 'none',
    opacity: disabled ? 0.4 : 1,
    transform: active && !disabled ? 'scale(0.98)' : 'none',
    fontSize: s.fontSize,
    padding: s.padding,
    ...style
  };
  if ((variant === 'ghost' || variant === 'ghost-inverse') && hover && !disabled) {
    base.borderColor = variant === 'ghost' ? 'var(--color-primary)' : 'rgba(255,252,240,0.5)';
    if (variant === 'ghost') base.color = 'var(--color-primary)';
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    disabled: as === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--color-surface-3)',
    color: 'var(--color-text-secondary)'
  },
  accent: {
    background: 'var(--color-accent-light)',
    color: 'var(--color-accent-dark)'
  },
  dark: {
    background: 'var(--color-primary)',
    color: 'var(--color-text-inverse)'
  }
};

/** Badge — rounded status pill with optional leading dot. */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      padding: 'var(--space-1) var(--space-3)',
      borderRadius: 'var(--radius-full)',
      lineHeight: 1.5,
      background: t.background,
      color: t.color,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow — uppercase amber label above a heading. */
function Eyebrow({
  children,
  color = 'var(--color-text-accent)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color,
      lineHeight: 1,
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data/StatFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** StatFigure — editorial Gloock figure with unit, label and optional caption. */
function StatFigure({
  value,
  unit = '',
  label = '',
  caption = '',
  align = 'left',
  size = '56px',
  inverse = false,
  style = {},
  ...rest
}) {
  const fg = inverse ? 'var(--color-text-inverse)' : 'var(--color-text-primary)';
  const muted = inverse ? 'rgba(255,252,240,0.6)' : 'var(--color-text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--color-text-accent)',
      lineHeight: 1
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: size,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: fg
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.42em',
      marginLeft: '0.2em',
      color: muted
    }
  }, unit)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: muted,
      lineHeight: 'var(--leading-normal)',
      maxWidth: '32ch'
    }
  }, caption));
}
Object.assign(__ds_scope, { StatFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatFigure.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TAG_VARIANTS = {
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--color-base-light)',
    border: 'transparent'
  },
  dark: {
    background: 'var(--color-primary)',
    color: 'var(--color-text-inverse)',
    border: 'transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-secondary-1)',
    border: 'var(--color-border-medium)'
  }
};

/** Tag — small uppercase categorical label. */
function Tag({
  children,
  variant = 'outline',
  style = {},
  ...rest
}) {
  const v = TAG_VARIANTS[variant] || TAG_VARIANTS.outline;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      padding: 'var(--space-1) var(--space-3)',
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1.4,
      background: v.background,
      color: v.color,
      border: `var(--border-width-base) solid ${v.border}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — text field with optional label and hint, institutional styling. */
function Input({
  label = '',
  hint = '',
  error = '',
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--color-accent-dark)' : focus ? 'var(--color-state-focus)' : 'var(--color-border-medium)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-text-primary)',
      background: 'var(--color-base-white)',
      border: `var(--border-width-base) solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3) var(--space-4)',
      outline: focus ? '2px solid var(--color-state-focus)' : 'none',
      outlineOffset: 2,
      transition: 'var(--transition-color)',
      width: '100%'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: error ? 'var(--color-accent-dark)' : 'var(--color-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — native dropdown with institutional styling and uppercase label. */
function Select({
  label = '',
  hint = '',
  options = [],
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-text-primary)',
      background: 'var(--color-base-white)',
      border: `var(--border-width-base) solid ${focus ? 'var(--color-state-focus)' : 'var(--color-border-medium)'}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3) var(--space-8) var(--space-3) var(--space-4)',
      outline: focus ? '2px solid var(--color-state-focus)' : 'none',
      outlineOffset: 2,
      width: '100%',
      cursor: 'pointer',
      transition: 'var(--transition-color)'
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--color-text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/iconography/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — Phosphor Icons (estilo fino, registro editorial de Layard).
 * Requiere la hoja de Phosphor cargada vía CDN una vez en la página:
 *   <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/thin/style.css" />
 *   <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css" />
 * o el bundle completo: https://unpkg.com/@phosphor-icons/web
 *
 * Renderiza un <i class="ph-thin ph-arrow-right">. No usa SVG inline.
 */
function Icon({
  name,
  weight = 'thin',
  size = 20,
  color = 'currentColor',
  title,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: `ph-${weight} ph-${name}`,
    role: title ? 'img' : 'presentation',
    "aria-label": title || undefined,
    "aria-hidden": title ? undefined : 'true',
    style: {
      fontSize: typeof size === 'number' ? `${size}px` : size,
      lineHeight: 1,
      color,
      display: 'inline-flex',
      flex: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/iconography/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Navbar — full-width institutional navigation over deep green. */
function Navbar({
  brand = 'Layard',
  links = [],
  activeHref = '',
  cta = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      background: 'var(--color-primary)',
      padding: 'var(--space-4) var(--space-12)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      maxWidth: 'var(--container-max)',
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h5)',
      color: 'var(--color-text-inverse)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      textDecoration: 'none'
    }
  }, brand), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '48px',
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement(NavLink, {
    href: l.href,
    active: l.href === activeHref
  }, l.label)))), /*#__PURE__*/React.createElement("div", null, cta)));
}
function NavLink({
  href,
  active,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-regular)',
      color: 'var(--color-text-inverse)',
      textDecoration: 'none',
      opacity: active || hover ? 1 : 0.8,
      transition: 'opacity var(--transition-base)'
    }
  }, children);
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — institutional surface: hairline border, contained radius, optional amber top rule. */
function Card({
  children,
  variant = 'light',
  topRule = false,
  shadow = 'none',
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const isDark = variant === 'dark';
  const shadowMap = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: isDark ? 'var(--color-surface-dark-2)' : 'var(--surface-card, #fff)',
      color: isDark ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
      border: `var(--border-width-base) solid ${isDark ? 'var(--color-border-inverse)' : 'var(--color-border-light)'}`,
      borderTop: topRule ? 'var(--border-width-thick) solid var(--color-accent)' : undefined,
      borderRadius: 'var(--radius-lg)',
      boxShadow: shadowMap[shadow] || 'none',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Audiences.jsx
try { (() => {
// Layard website — three-audiences interactive section
function Audiences() {
  const {
    Card,
    Eyebrow
  } = window.LayardDesignSystem_7c1052;
  const [tab, setTab] = React.useState('inversionistas');
  const data = {
    inversionistas: {
      label: 'Inversionistas',
      head: 'Flujo contractual, garantía real.',
      body: 'Duración alineada al contrato de arrendamiento y garantía fiduciaria desde la primera disposición. Protección real, no covenants que se evaporan.',
      points: ['Flujo contractual del inquilino-ancla', 'Garantía fiduciaria', 'Duración alineada', 'Protección real del principal']
    },
    acreditados: {
      label: 'Acreditados',
      head: 'Capital íntegro, propiedad preservada.',
      body: 'Estructura interest-only que despliega el capital completo sin diluir control ni vender el activo. Conservas la propiedad.',
      points: ['Capital íntegro desplegado', 'Propiedad preservada', 'Estructura interest-only', 'Sin dilución de control']
    },
    corporativos: {
      label: 'Corporativos ancla',
      head: 'Aceleración sin deuda en balance.',
      body: 'Resolvemos el cuello de botella de expansión sin cargar deuda al balance corporativo. El arrendamiento financia el crecimiento.',
      points: ['Sin deuda en balance', 'Cuello de botella resuelto', 'Expansión acelerada', 'Off-balance-sheet']
    }
  };
  const tabs = Object.keys(data);
  const d = data[tab];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-1)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Una estructura, tres lecturas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      margin: '16px 0 40px',
      maxWidth: '18ch'
    }
  }, "Cada parte gana por una raz\xF3n distinta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--color-border-light)',
      marginBottom: '40px'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      cursor: 'pointer',
      padding: '14px 20px',
      background: 'transparent',
      border: 'none',
      borderBottom: tab === t ? '2px solid var(--color-accent)' : '2px solid transparent',
      color: tab === t ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
      marginBottom: '-1px',
      transition: 'var(--transition-color)'
    }
  }, data[t].label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: '48px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.5rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      maxWidth: '15ch'
    }
  }, d.head), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-text-secondary)',
      marginTop: '20px',
      maxWidth: '46ch'
    }
  }, d.body)), /*#__PURE__*/React.createElement(Card, {
    topRule: true,
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, d.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'baseline',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)',
      fontSize: 13
    }
  }, "\u2014"), p)))))));
}
window.Audiences = Audiences;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Audiences.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactForm.jsx
try { (() => {
// Layard website — contact form with submitted state
function ContactForm() {
  const {
    Input,
    Select,
    Button,
    Eyebrow,
    Card
  } = window.LayardDesignSystem_7c1052;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-1)',
      padding: '96px 48px 112px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '880px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Hablemos de la estructura"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '3rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      margin: '16px 0 20px',
      maxWidth: '14ch'
    }
  }, "Empecemos por tu resultado."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-text-secondary)',
      maxWidth: '40ch'
    }
  }, "Cu\xE9ntanos qu\xE9 necesitas resolver. Respondemos con una lectura de la estructura, no con un folleto.")), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-10)",
    shadow: "sm"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      minHeight: '280px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }
  }, "Recibido"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2rem',
      lineHeight: 1.15
    }
  }, "Te leemos en 48 horas."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--color-text-secondary)'
    }
  }, "Un estructurador de Layard revisar\xE1 tu caso y responder\xE1 directamente."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setSent(false)
  }, "Enviar otra"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Nombre y apellido",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo corporativo",
    type: "email",
    placeholder: "nombre@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Perfil",
    options: ['Inversionista', 'Acreditado', 'Corporativo ancla']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Monto a estructurar",
    placeholder: "$0 mdp"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      marginTop: '8px',
      justifyContent: 'center'
    }
  }, "Solicitar lectura")))));
}
window.ContactForm = ContactForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Layard website — footer
function Footer() {
  const cols = [{
    h: 'Estructura',
    items: ['Qué es CTL', 'Garantía fiduciaria', 'Interest-only', 'Proceso']
  }, {
    h: 'Audiencias',
    items: ['Inversionistas', 'Acreditados', 'Corporativos ancla']
  }, {
    h: 'Firma',
    items: ['Tesis', 'Equipo', 'Contacto', 'Aviso legal']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-base-dark)',
      color: 'var(--color-text-inverse)',
      padding: '72px 48px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h5)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase'
    }
  }, "Layard"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'rgba(255,252,240,0.55)',
      marginTop: '16px',
      maxWidth: '34ch',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Cr\xE9dito privado estructurado inmobiliario. Pionera de la categor\xEDa CTL en M\xE9xico.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--color-accent)',
      marginBottom: '16px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'rgba(255,252,240,0.7)'
    }
  }, i))))))), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--color-border-inverse)',
      margin: '48px 0 24px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'rgba(255,252,240,0.45)'
    }
  }, "\xA9 2026 Layard. Informaci\xF3n con fines ilustrativos; no constituye oferta.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Layard website — Hero section
function Hero() {
  const {
    Button,
    Eyebrow,
    Tag
  } = window.LayardDesignSystem_7c1052;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--color-primary)',
      color: 'var(--color-text-inverse)',
      padding: '112px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cr\xE9dito privado estructurado \xB7 CTL"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '4.5rem',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: 'var(--color-text-inverse)',
      maxWidth: '16ch',
      margin: '20px 0 0'
    }
  }, "El contrato es la garant\xEDa."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(255,252,240,0.72)',
      maxWidth: '52ch',
      marginTop: '24px'
    }
  }, "Estructuramos cr\xE9dito respaldado por arrendamientos de largo plazo. El flujo del inquilino-ancla paga la deuda; t\xFA conservas la propiedad y despliegas el capital \xEDntegro."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Solicitar estructura"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-inverse",
    size: "lg"
  }, "Ver la tesis")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '56px'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "dark",
    style: {
      border: '1px solid var(--color-border-inverse)'
    }
  }, "Pionera CTL en M\xE9xico"), /*#__PURE__*/React.createElement(Tag, {
    variant: "dark",
    style: {
      border: '1px solid var(--color-border-inverse)'
    }
  }, "Garant\xEDa fiduciaria"), /*#__PURE__*/React.createElement(Tag, {
    variant: "dark",
    style: {
      border: '1px solid var(--color-border-inverse)'
    }
  }, "Interest-only"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Layard website — stats band on dark surface
function StatsBand() {
  const {
    StatFigure
  } = window.LayardDesignSystem_7c1052;
  const stats = [{
    label: 'Capital estructurado',
    value: '$200',
    unit: 'mdp',
    caption: 'Monto de operación piloto. Estructurado caso por caso.'
  }, {
    label: 'Duración media',
    value: '7',
    unit: 'años',
    caption: 'Alineada al contrato de arrendamiento.'
  }, {
    label: 'Estructuras CTL',
    value: '18',
    unit: '',
    caption: 'Cerradas desde la fundación de la firma.'
  }, {
    label: 'En balance del cliente',
    value: '$0',
    unit: '',
    caption: 'La deuda no toca el balance corporativo.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-dark-2)',
      padding: '88px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatFigure, _extends({
    key: s.label,
    inverse: true,
    size: "56px"
  }, s)))));
}
window.StatsBand = StatsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsBand.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StatFigure = __ds_scope.StatFigure;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Card = __ds_scope.Card;

})();
