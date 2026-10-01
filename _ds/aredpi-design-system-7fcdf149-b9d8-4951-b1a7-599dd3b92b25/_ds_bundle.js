/* @ds-bundle: {"format":4,"namespace":"AREDPIDesignSystem_7fcdf1","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Kpi","sourcePath":"components/data/Kpi.jsx"},{"name":"EmailField","sourcePath":"components/forms/EmailField.jsx"},{"name":"OptionChip","sourcePath":"components/forms/OptionChip.jsx"},{"name":"GlassCard","sourcePath":"components/surfaces/GlassCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"29ee8d6b918b","components/data/Kpi.jsx":"5fc53df55544","components/forms/EmailField.jsx":"3fb0279ab7de","components/forms/OptionChip.jsx":"edabbe3ffabf","components/surfaces/GlassCard.jsx":"c8e084d2fcf7","ui_kits/website/AppMockup.jsx":"df4f8d76b908","ui_kits/website/Header.jsx":"34ca759439cb","ui_kits/website/Hero.jsx":"55bec53f3795","ui_kits/website/HomeSections.jsx":"9596556f6f4a","ui_kits/website/Qualifier.jsx":"4c54745c6b62","ui_kits/website/Shared.jsx":"cbc8c79c94a8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AREDPIDesignSystem_7fcdf1 = window.AREDPIDesignSystem_7fcdf1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chevron({
  s = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }));
}
function Button({
  variant = 'primary',
  size = 'md',
  chevron,
  disabled = false,
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const isPrimary = variant === 'primary';
  const showChevron = chevron ?? isPrimary;
  const lg = size === 'lg';
  const h = lg ? 60 : 52;
  const circle = lg ? 44 : 38;
  const padL = lg ? 30 : 24;
  const padR = showChevron ? (h - circle) / 2 : padL;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: showChevron ? 'space-between' : 'center',
    gap: 14,
    height: h,
    paddingLeft: padL,
    paddingRight: padR,
    boxSizing: 'border-box',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-sans)',
    fontSize: lg ? 17 : 'var(--button-size)',
    fontWeight: 'var(--button-weight)',
    lineHeight: 'var(--button-lh)',
    letterSpacing: '-0.005em',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-brand), box-shadow var(--dur-base) var(--ease-brand), background var(--dur-base) var(--ease-brand), border-color var(--dur-fast)',
    transform: !disabled && press ? 'scale(0.98)' : !disabled && hover ? 'translateY(-1px)' : 'none'
  };
  const look = isPrimary ? {
    background: hover && !disabled ? 'linear-gradient(135deg, var(--orange-deep) 0%, var(--orange-deep) 100%)' : 'var(--gradient-brand)',
    color: 'var(--on-orange)',
    border: 'none',
    boxShadow: disabled ? 'none' : hover ? '0 14px 36px rgba(240,80,31,0.32)' : 'var(--shadow-cta)'
  } : {
    background: 'var(--surface)',
    color: 'var(--ink)',
    border: '1px solid ' + (hover && !disabled ? 'var(--ink-muted)' : 'var(--border)'),
    boxShadow: 'none'
  };
  const circleStyle = {
    width: circle,
    height: circle,
    borderRadius: '50%',
    flex: 'none',
    display: 'grid',
    placeItems: 'center',
    background: isPrimary ? 'var(--surface)' : 'var(--surface-2)',
    color: isPrimary ? 'var(--orange-deep)' : 'var(--ink)',
    transition: 'transform var(--dur-base) var(--ease-brand)',
    transform: hover && !disabled ? 'translateX(2px)' : 'none'
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === 'a' ? href : undefined,
    type: Tag === 'button' ? type : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...look,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), showChevron && /*#__PURE__*/React.createElement("span", {
    style: circleStyle
  }, /*#__PURE__*/React.createElement(Chevron, {
    s: lg ? 20 : 18
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/Kpi.jsx
try { (() => {
function parse(value) {
  const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
  if (!m) return null;
  const n = parseFloat(m[2].replace(/\./g, '').replace(',', '.'));
  return isNaN(n) ? null : {
    pre: m[1],
    n,
    post: m[3],
    dec: (m[2].split(',')[1] || '').length
  };
}
function Kpi({
  value,
  label,
  size = 'md',
  tone = 'ink',
  countUp = true,
  align = 'left',
  style
}) {
  const ref = React.useRef(null);
  const p = parse(value);
  const [shown, setShown] = React.useState(countUp && p ? 0 : null);
  React.useEffect(() => {
    if (!countUp || !p || !ref.current) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(null);
      return;
    }
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(),
        D = 1400;
      const step = t => {
        const k = Math.min(1, (t - t0) / D);
        const ease = 1 - Math.pow(1 - k, 4);
        setShown(p.n * ease);
        if (k < 1) raf = requestAnimationFrame(step);else setShown(null);
      };
      raf = requestAnimationFrame(step);
    }, {
      threshold: 0.4
    });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, countUp]);
  const text = shown === null || !p ? value : p.pre + shown.toLocaleString('es-AR', {
    minimumFractionDigits: p.dec,
    maximumFractionDigits: p.dec
  }) + p.post;
  const fs = size === 'lg' ? 64 : size === 'sm' ? 28 : 'var(--kpi-size)';
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      lineHeight: 'var(--kpi-lh)',
      fontWeight: 'var(--kpi-weight)',
      letterSpacing: 'var(--kpi-tracking)',
      color: tone === 'orange' ? 'var(--orange-text)' : 'var(--ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, text), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      lineHeight: 1.4,
      color: 'var(--ink-muted)',
      maxWidth: 220
    }
  }, label));
}
Object.assign(__ds_scope, { Kpi });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Kpi.jsx", error: String((e && e.message) || e) }); }

// components/forms/EmailField.jsx
try { (() => {
const BLOCKED = ['gmail.com', 'googlemail.com', 'hotmail.com', 'hotmail.com.ar', 'hotmail.es', 'outlook.com', 'outlook.es', 'live.com', 'live.com.ar', 'msn.com', 'yahoo.com', 'yahoo.com.ar', 'yahoo.es', 'ymail.com', 'icloud.com', 'me.com', 'aol.com', 'protonmail.com', 'proton.me', 'gmx.com', 'mail.com', 'yandex.com'];
function checkEmail(v) {
  const s = (v || '').trim().toLowerCase();
  if (!s) return {
    ok: false,
    reason: 'empty'
  };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) return {
    ok: false,
    reason: 'format'
  };
  const d = s.split('@')[1];
  if (BLOCKED.includes(d) || /^(gmail|hotmail|outlook|yahoo|live)\./.test(d)) return {
    ok: false,
    reason: 'personal'
  };
  return {
    ok: true
  };
}
function EmailField({
  label = 'Correo corporativo',
  placeholder = 'nombre@tuempresa.com',
  value,
  defaultValue = '',
  onChange,
  onValidChange,
  hint = 'Te escribimos solo para coordinar la reunión.',
  required = true,
  id = 'email-corporativo',
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const [touched, setTouched] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const v = value ?? inner;
  const res = checkEmail(v);
  const showErr = touched && !res.ok && !(res.reason === 'empty' && !required);
  const msg = res.reason === 'personal' ? 'Usá tu correo corporativo: no aceptamos Gmail, Hotmail, Outlook ni Yahoo.' : res.reason === 'format' ? 'Revisá el formato del correo.' : 'Necesitamos tu correo corporativo.';
  React.useEffect(() => {
    onValidChange && onValidChange(res.ok, v);
  }, [res.ok, v]);
  const valid = touched && res.ok;
  const borderC = showErr ? 'var(--error)' : focus ? 'var(--orange)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--label-weight)',
      letterSpacing: 'var(--label-tracking)',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "email",
    inputMode: "email",
    autoComplete: "email",
    value: v,
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": showErr || undefined,
    "aria-describedby": id + '-msg',
    onChange: e => {
      setInner(e.target.value);
      onChange && onChange(e.target.value, e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => {
      setFocus(false);
      setTouched(true);
    },
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 54,
      padding: '0 44px 0 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + borderC,
      outline: 'none',
      background: focus ? 'var(--surface)' : 'var(--surface-2)',
      boxShadow: focus ? showErr ? '0 0 0 3px rgba(179,38,30,0.12)' : '0 0 0 3px rgba(255,111,49,0.14)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--ink)',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-base) var(--ease-brand), background var(--dur-fast)'
    }
  }), valid && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--success)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })))), /*#__PURE__*/React.createElement("span", {
    id: id + '-msg',
    role: showErr ? 'alert' : undefined,
    style: {
      fontSize: 'var(--small-size)',
      lineHeight: 'var(--small-lh)',
      color: showErr ? 'var(--error)' : 'var(--ink-muted)'
    }
  }, showErr ? msg : hint));
}
Object.assign(__ds_scope, { EmailField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/EmailField.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OptionChip({
  label,
  description,
  selected = false,
  multiple = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const ind = 20;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: multiple ? 'checkbox' : 'radio',
    "aria-checked": selected,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 14,
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      padding: '18px 20px',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      color: 'var(--ink)',
      opacity: disabled ? 0.45 : 1,
      background: selected ? 'var(--orange-soft)' : 'var(--surface)',
      border: '1px solid ' + (selected ? 'var(--orange)' : hover && !disabled ? 'var(--ink-faint)' : 'var(--border)'),
      boxShadow: selected ? '0 0 0 3px rgba(255,111,49,0.12)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-brand), border-color var(--dur-fast), box-shadow var(--dur-base) var(--ease-brand)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: ind,
      height: ind,
      marginTop: description ? 1 : 0,
      boxSizing: 'border-box',
      borderRadius: multiple ? 6 : '50%',
      display: 'grid',
      placeItems: 'center',
      border: selected ? 'none' : '1.5px solid var(--ink-faint)',
      background: selected ? 'var(--gradient-brand)' : 'var(--surface)',
      color: 'var(--on-orange)',
      transition: 'background var(--dur-fast)'
    }
  }, selected && (multiple ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--surface)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--small-size)',
      lineHeight: 'var(--small-lh)',
      color: 'var(--ink-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { OptionChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionChip.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GlassCard({
  tone = 'glass',
  notch = false,
  padding = 'var(--card-padding)',
  radius = 'var(--radius-lg)',
  as = 'div',
  children,
  style,
  ...rest
}) {
  const N = 28;
  const tones = {
    glass: {
      background: 'var(--surface-glass)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))'
    },
    solid: {
      background: 'var(--surface)'
    },
    highlight: {
      background: 'var(--orange-soft)',
      borderColor: 'rgba(255,111,49,0.28)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: 'relative',
      boxSizing: 'border-box',
      padding,
      borderRadius: radius,
      border: '1px solid var(--border)',
      boxShadow: notch ? 'none' : 'var(--shadow-card)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      clipPath: notch ? `polygon(0 0, calc(100% - ${N}px) 0, calc(100% - ${N}px) ${N}px, 100% ${N}px, 100% 100%, 0 100%)` : undefined,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AppMockup.jsx
try { (() => {
const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const SERIES = {
  budget: [100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120],
  forecast: [100, 101.5, 103, 104.5, 107, 109.5, 111, 113.5, 115, 117, 119.5, 121],
  real: [100, 101.8, 103.4, 105.2, 107.9, 110.1, 111.6, null, null, null, null, null]
};
function Chart({
  w = 560,
  h = 200
}) {
  const min = 96,
    max = 124,
    pad = 8;
  const x = i => pad + i * (w - pad * 2) / 11,
    y = v => h - pad - (v - min) / (max - min) * (h - pad * 2);
  const path = arr => arr.map((v, i) => v == null ? '' : (i && arr[i - 1] != null ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: '0 0 ' + w + ' ' + h,
    style: {
      display: 'block'
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: 0,
    x2: w,
    y1: pad + i * (h - pad * 2) / 3,
    y2: pad + i * (h - pad * 2) / 3,
    stroke: "var(--border)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: path(SERIES.budget),
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "1.5",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: path(SERIES.forecast),
    fill: "none",
    stroke: "var(--orange)",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: path(SERIES.real),
    fill: "none",
    stroke: "var(--amber)",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x(6),
    cy: y(111.6),
    r: "4",
    fill: "var(--surface)",
    stroke: "var(--amber)",
    strokeWidth: "2"
  }));
}
function AppMockup() {
  const [sc, setSc] = React.useState(1);
  const scen = ['Base', 'Aumento 8 % en julio', 'Congelamiento de vacantes', 'Paritaria + bono', 'Reestructura'];
  const rows = [['Sueldos básicos', '1.284.500.000', '1.301.220.000', '+1,3 %'], ['Cargas sociales', '372.505.000', '377.353.800', '+1,3 %'], ['Horas extra', '48.900.000', '44.120.000', '−9,8 %'], ['Bonos', '96.000.000', '96.000.000', '0,0 %']];
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    fontVariantNumeric: 'tabular-nums'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--surface-2)'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--ink-faint)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "lbl",
    style: {
      marginLeft: 12
    }
  }, "Budget & Forecast \xB7 Ejercicio 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--border)',
      padding: 16,
      display: 'grid',
      gap: 6,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      padding: '4px 10px 8px'
    }
  }, "Escenarios"), scen.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSc(i),
    style: {
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 12px',
      borderRadius: 12,
      font: '500 14px var(--font-sans)',
      color: 'var(--ink)',
      background: sc === i ? 'var(--orange-soft)' : 'transparent',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, s, sc === i && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--orange-text)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Gasto salarial anual \xB7 ARS"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 30,
      letterSpacing: '-0.03em',
      marginTop: 6
    }
  }, sc === 1 ? '1.818.693.800' : '1.801.905.000')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, [['Budget', 'var(--ink)'], ['Forecast', 'var(--orange)'], ['Real', 'var(--amber)']].map(([l, c]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--ink-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 3,
      borderRadius: 2,
      background: c
    }
  }), l)))), /*#__PURE__*/React.createElement(Chart, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      ...mono,
      fontSize: 11,
      color: 'var(--ink-muted)',
      marginTop: -12
    }
  }, MONTHS.map(m => /*#__PURE__*/React.createElement("span", {
    key: m
  }, m))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Concepto', 'Budget', 'Forecast', 'Desvío'].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    className: "lbl",
    style: {
      textAlign: i ? 'right' : 'left',
      padding: '8px 0',
      borderBottom: '1px solid var(--border)',
      fontWeight: 500
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, r.map((c, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      ...(i ? mono : {
        fontSize: 14
      }),
      textAlign: i ? 'right' : 'left',
      padding: '10px 0',
      borderBottom: '1px solid var(--border)',
      color: i === 3 ? c.startsWith('−') ? 'var(--success)' : 'var(--ink)' : 'var(--ink)'
    }
  }, c)))))))));
}
Object.assign(window, {
  AppMockup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AppMockup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function Header({
  onCta,
  onHome
}) {
  const {
    Button
  } = DS;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  const link = {
    font: '500 15px var(--font-sans)',
    color: 'var(--ink)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 14,
      left: 0,
      right: 0,
      zIndex: 20,
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px 0 14px',
      borderRadius: 999,
      background: 'var(--surface-glass)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      border: '1px solid ' + (scrolled ? 'var(--border)' : 'transparent'),
      boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
      transition: 'all var(--dur-base) var(--ease-brand)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome();
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-aredpi-320.jpg",
    alt: "aREDPI",
    style: {
      height: 46,
      mixBlendMode: 'multiply'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, ['WebApp de Budget & Forecast', 'Soluciones a medida', 'Clientes', 'Nosotros'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: link
  }, l))), /*#__PURE__*/React.createElement(Button, {
    onClick: onCta
  }, "Agend\xE1 una reuni\xF3n")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-2)',
      borderTop: '1px solid var(--border)',
      padding: '56px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-aredpi-320.jpg",
    alt: "aREDPI",
    style: {
      height: 64,
      mixBlendMode: 'multiply',
      marginLeft: -8
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-muted)',
      fontSize: 14,
      maxWidth: 360
    }
  }, "Software hecho a medida para organizaciones de gran escala. Desde Buenos Aires para 9 pa\xEDses.")), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "\xA9 2026 aREDPI \xB7 SAP \xB7 SuccessFactors \xB7 Workday \xB7 Power BI")));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const HERO_MSGS = [{
  eyebrow: 'aREDPI WebApp de Budget & Forecast',
  title: 'Tu presupuesto salarial. En días, no semanas.',
  lead: 'Centralizá el budget y el forecast de gastos salariales en un solo lugar. Planificá, simulá y controlá todo el año.'
}, {
  eyebrow: 'Escenarios',
  title: 'Cinco escenarios a la vez. Ninguna versión de Excel.',
  lead: 'Compará aumentos, altas y bajas en simultáneo y elegí con números, no con intuición.'
}, {
  eyebrow: 'Del dato a la decisión',
  title: 'Especialistas, no generalistas.',
  lead: '25 años construyendo software hecho a medida para RR. HH., Compensaciones, Payroll y Finanzas.'
}];
function Hero({
  onCta
}) {
  const {
    Button
  } = DS;
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  React.useEffect(() => {
    if (reduce) return;
    const f = () => {
      const r = ref.current.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / total)));
    };
    f();
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  const idx = Math.min(2, Math.floor(p * 3 * 0.999));
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      height: reduce ? 'auto' : '300vh',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: reduce ? 'relative' : 'sticky',
      top: 0,
      height: '100vh',
      minHeight: 720,
      overflow: 'hidden',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/seda-grilla-hero.png",
    alt: "",
    style: {
      position: 'absolute',
      right: '-6%',
      top: 0,
      height: '100%',
      width: '78%',
      objectFit: 'cover',
      objectPosition: '75% 50%',
      transform: 'scale(' + (1 + p * 0.08) + ') translateY(' + -p * 40 + 'px)',
      transition: 'transform 80ms linear'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, var(--bg) 30%, rgba(250,250,248,0.6) 52%, rgba(250,250,248,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 420,
      maxWidth: 720
    }
  }, HERO_MSGS.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 24,
      opacity: i === idx ? 1 : 0,
      transform: i === idx ? 'none' : i < idx ? 'translateY(-20px)' : 'translateY(20px)',
      transition: 'opacity 600ms var(--ease-brand), transform 700ms var(--ease-brand)',
      pointerEvents: i === idx ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    accent: true
  }, m.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-xl-size)',
      lineHeight: 'var(--display-xl-lh)',
      letterSpacing: 'var(--display-xl-tracking)',
      fontWeight: 400,
      textWrap: 'balance'
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--lead-size)',
      lineHeight: 'var(--lead-lh)',
      color: 'var(--ink-muted)',
      maxWidth: 560
    }
  }, m.lead)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onCta
  }, "Agend\xE1 una reuni\xF3n"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Calcul\xE1 tu ahorro")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 56,
      alignItems: 'center'
    }
  }, HERO_MSGS.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 3,
      width: i === idx ? 40 : 18,
      borderRadius: 2,
      background: i === idx ? 'var(--orange)' : 'var(--ink-faint)',
      transition: 'all var(--dur-base) var(--ease-brand)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "lbl",
    style: {
      marginLeft: 10
    }
  }, "0", idx + 1, " / 03 \xB7 Scrolle\xE1")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections.jsx
try { (() => {
function WordReveal({
  text
}) {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setP(1);
      return;
    }
    const f = () => {
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4))));
    };
    f();
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  const words = text.split(' ');
  return /*#__PURE__*/React.createElement("p", {
    ref: ref,
    style: {
      fontSize: 'var(--display-l-size)',
      lineHeight: 1.12,
      letterSpacing: 'var(--display-l-tracking)',
      maxWidth: 1040,
      textWrap: 'pretty'
    }
  }, words.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i / words.length < p ? 'var(--ink)' : 'var(--ink-faint)',
      transition: 'color 200ms'
    }
  }, w, " ")));
}
function Section({
  children,
  band,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0',
      background: band ? 'var(--surface-2)' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, children));
}
function SectionTitle({
  eyebrow,
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      marginBottom: 'var(--space-12)',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--display-l-size)',
      lineHeight: 'var(--display-l-lh)',
      letterSpacing: 'var(--display-l-tracking)',
      fontWeight: 400,
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--lead-size)',
      lineHeight: 'var(--lead-lh)',
      color: 'var(--ink-muted)'
    }
  }, lead));
}
const BENEFITS = [{
  icon: 'file-spreadsheet',
  title: 'Chau versiones de Excel',
  text: 'Un solo presupuesto, con trazabilidad de cada cambio y de quién lo hizo.'
}, {
  icon: 'git-compare',
  title: 'Escenarios en minutos',
  text: 'Simulá aumentos, altas y bajas y compará hasta 5 escenarios en simultáneo.'
}, {
  icon: 'chart-line',
  title: 'Desvíos a la vista',
  text: 'Budget, forecast y real mes a mes, para corregir antes de que sea tarde.'
}, {
  icon: 'sparkles',
  title: 'Analista de IA',
  text: 'Preguntale a tus datos en lenguaje natural y recibí la explicación del desvío.'
}];
function HomeSections({
  onCta
}) {
  const {
    Kpi,
    GlassCard,
    Button
  } = DS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 24,
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement(Kpi, {
    value: "+25",
    label: "a\xF1os de experiencia"
  }), /*#__PURE__*/React.createElement(Kpi, {
    value: "+50",
    label: "clientes de gran escala"
  }), /*#__PURE__*/React.createElement(Kpi, {
    value: "+500",
    label: "aplicaciones"
  }), /*#__PURE__*/React.createElement(Kpi, {
    value: "+3.000",
    label: "usuarios"
  }), /*#__PURE__*/React.createElement(Kpi, {
    value: "9",
    label: "pa\xEDses"
  }))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(WordReveal, {
    text: "Armar el presupuesto salarial no deber\xEDa depender de pocas personas, de diez versiones de Excel ni de escenarios que tardan d\xEDas. Lo resolvemos con software hecho a medida, del dato a la decisi\xF3n."
  })), /*#__PURE__*/React.createElement(Section, {
    band: true
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "aREDPI WebApp de Budget & Forecast",
    title: "Planific\xE1, simul\xE1 y control\xE1 el gasto salarial todo el a\xF1o.",
    lead: "Arm\xE1s el presupuesto y despu\xE9s lo segu\xEDs mes a mes. Con integraciones a SAP, SuccessFactors, Workday y Power BI."
  }), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(AppMockup, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginTop: 24
    }
  }, BENEFITS.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: b.title,
    delay: i * 60,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    tone: i === 3 ? 'highlight' : 'solid',
    notch: i === 3,
    padding: 28,
    style: {
      height: '100%',
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 26,
    color: i === 3 ? 'var(--orange-text)' : 'var(--orange)'
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      lineHeight: 'var(--heading-lh)',
      letterSpacing: 'var(--heading-tracking)',
      fontWeight: 500
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-muted)',
      fontSize: 15,
      lineHeight: 1.55
    }
  }, b.text)))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Resultados",
    title: "Menos armado, m\xE1s an\xE1lisis.",
    lead: "En 90 d\xEDas tu equipo deja de consolidar planillas y empieza a decidir con escenarios."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement(Kpi, {
    size: "lg",
    value: "80 %",
    tone: "orange",
    label: "menos de tiempo en el armado del presupuesto"
  })), /*#__PURE__*/React.createElement(GlassCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement(Kpi, {
    size: "lg",
    value: "5",
    label: "escenarios en simult\xE1neo"
  })), /*#__PURE__*/React.createElement(GlassCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement(Kpi, {
    size: "lg",
    value: "90",
    label: "d\xEDas de implementaci\xF3n"
  })), /*#__PURE__*/React.createElement(GlassCard, {
    padding: 28,
    tone: "solid",
    style: {
      display: 'grid',
      alignContent: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Integraciones"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px/1.5 var(--font-sans)'
    }
  }, "SAP \xB7 SuccessFactors \xB7 Workday \xB7 Power BI"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--gradient-brand)',
      color: 'var(--on-orange)',
      padding: '80px 72px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      maxWidth: 700
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.4 var(--font-mono)',
      letterSpacing: '.06em'
    }
  }, "CALIFICADOR \xB7 2 MINUTOS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--display-l-size)',
      lineHeight: 'var(--display-l-lh)',
      letterSpacing: 'var(--display-l-tracking)',
      fontWeight: 400
    }
  }, "Contanos c\xF3mo arm\xE1s hoy tu presupuesto."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      fontWeight: 500
    }
  }, "No te pedimos sueldos ni datos de n\xF3mina: solo horas.")), /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      flex: 'none',
      height: 60,
      padding: '0 8px 0 30px',
      borderRadius: 999,
      border: 'none',
      background: 'var(--surface)',
      color: 'var(--ink)',
      font: '600 17px var(--font-sans)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      cursor: 'pointer'
    }
  }, "Empez\xE1 ahora", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--gradient-brand)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    stroke: 2.2
  })))))));
}
Object.assign(window, {
  HomeSections
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Qualifier.jsx
try { (() => {
const Q_STEPS = [{
  key: 'size',
  title: '¿Cuántas personas hay en tu nómina?',
  opts: [['menos500', 'Menos de 500'], ['500', 'Entre 500 y 2.000'], ['2000', 'Entre 2.000 y 10.000'], ['10000', 'Más de 10.000']]
}, {
  key: 'como',
  title: '¿Cómo armás hoy el presupuesto salarial?',
  opts: [['excel', 'Excel y mails', 'Varias versiones dando vueltas'], ['propio', 'Un sistema propio', 'Desarrollado internamente'], ['modulo', 'Un módulo del ERP', 'SAP, SuccessFactors, Workday'], ['no', 'Todavía no lo armamos']]
}, {
  key: 'dolor',
  multiple: true,
  title: '¿Qué te gustaría resolver primero?',
  sub: 'Podés elegir más de una.',
  opts: [['tiempo', 'Tardamos semanas en armarlo'], ['versiones', 'Demasiadas versiones de Excel'], ['escenarios', 'Simular escenarios rápido'], ['desvios', 'Controlar desvíos mes a mes'], ['personas', 'Depende de pocas personas'], ['integrar', 'Integrar con SAP o Workday']]
}];
function Qualifier({
  onClose
}) {
  const {
    OptionChip,
    EmailField,
    Button,
    GlassCard
  } = DS;
  const [step, setStep] = React.useState(0);
  const [ans, setAns] = React.useState({
    dolor: []
  });
  const [ok, setOk] = React.useState(false);
  const total = Q_STEPS.length + 1;
  const s = Q_STEPS[step];
  const pick = v => setAns(a => s.multiple ? {
    ...a,
    [s.key]: a[s.key].includes(v) ? a[s.key].filter(x => x !== v) : [...a[s.key], v]
  } : {
    ...a,
    [s.key]: v
  });
  const canNext = s ? s.multiple ? ans[s.key].length > 0 : !!ans[s.key] : ok;
  const done = step === total;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      position: 'relative',
      padding: '150px 0 96px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/seda-grilla-hero.png",
    alt: "",
    style: {
      position: 'absolute',
      right: '-20%',
      top: 0,
      width: '90%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    notch: true,
    padding: 48,
    style: {
      maxWidth: 720
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    accent: true
  }, "Listo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-l-size)',
      lineHeight: 'var(--display-l-lh)',
      letterSpacing: 'var(--display-l-tracking)',
      fontWeight: 400
    }
  }, "Gracias. Te escribimos en menos de 24 horas."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--lead-size)',
      lineHeight: 'var(--lead-lh)',
      color: 'var(--ink-muted)'
    }
  }, "Un especialista va a revisar tus respuestas y te propone una reuni\xF3n de 30 minutos para mostrarte la WebApp con escenarios parecidos a los tuyos."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    chevron: true,
    onClick: onClose
  }, "Volver al inicio"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Paso ", step + 1, " de ", total), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "lbl",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Cerrar")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      borderRadius: 2,
      background: 'var(--border)',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: (step + 1) / total * 100 + '%',
      borderRadius: 2,
      background: 'var(--gradient-brand)',
      transition: 'width var(--dur-base) var(--ease-brand)'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      lineHeight: 1.08,
      letterSpacing: '-0.03em',
      fontWeight: 400,
      marginBottom: s && s.sub ? 10 : 28
    }
  }, s ? s.title : '¿A dónde te escribimos?'), s && s.sub && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-muted)',
      marginBottom: 24
    }
  }, s.sub), s ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: s.opts.length > 4 ? '1fr 1fr' : '1fr 1fr',
      gap: 12
    }
  }, s.opts.map(([v, l, d]) => /*#__PURE__*/React.createElement(OptionChip, {
    key: v,
    label: l,
    description: d,
    multiple: s.multiple,
    selected: s.multiple ? ans[s.key].includes(v) : ans[s.key] === v,
    onClick: () => pick(v)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-muted)',
      marginTop: -12
    }
  }, "No te pedimos sueldos ni datos de n\xF3mina: solo horas."), /*#__PURE__*/React.createElement(EmailField, {
    onValidChange: setOk
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 36
    }
  }, step > 0 ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setStep(step - 1)
  }, "Atr\xE1s") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(Button, {
    disabled: !canNext,
    onClick: () => setStep(step + 1)
  }, step === total - 1 ? 'Agendá una reunión' : 'Siguiente'))))));
}
Object.assign(window, {
  Qualifier
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Qualifier.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const DS = window.AREDPIDesignSystem_7fcdf1;
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  stroke = 1.8
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '<i data-lucide="' + name + '"></i>';
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': stroke
      },
      root: ref.current
    });
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      width: size,
      height: size
    },
    "aria-hidden": "true"
  });
}
function Reveal({
  children,
  delay = 0,
  style
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(var(--enter-offset))',
      transition: 'opacity var(--dur-enter) var(--ease-brand) ' + delay + 'ms, transform var(--dur-enter) var(--ease-brand) ' + delay + 'ms',
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      color: accent ? 'var(--orange-text)' : undefined
    }
  }, children);
}
Object.assign(window, {
  DS,
  Icon,
  Reveal,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Kpi = __ds_scope.Kpi;

__ds_ns.EmailField = __ds_scope.EmailField;

__ds_ns.OptionChip = __ds_scope.OptionChip;

__ds_ns.GlassCard = __ds_scope.GlassCard;

})();
