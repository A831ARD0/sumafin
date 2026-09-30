// Shared components: icons, brand mark, formatters
const { useState, useEffect, useRef, useMemo } = React;

/* ---------- ICONS ---------- */
function Icon({ name, size = 18, stroke = 1.6, ...rest }) {
  const s = size;
  const common = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", ...rest };
  switch (name) {
    case "arrow-right": return (
      <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
    );
    case "arrow-up-right": return (
      <svg {...common}><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>
    );
    case "arrow-down": return (
      <svg {...common}><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></svg>
    );
    case "check": return (
      <svg {...common}><path d="m5 12 5 5L20 7"/></svg>
    );
    case "phone": return (
      <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
    );
    case "whatsapp": return (
      <svg viewBox="0 0 24 24" width={s} height={s} fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/></svg>
    );
    case "map-pin": return (
      <svg {...common}><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    );
    case "clock": return (
      <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    );
    case "mail": return (
      <svg {...common}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
    );
    case "shield": return (
      <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
    );
    case "shield-check": return (
      <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
    );
    case "zap": return (
      <svg {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    );
    case "spark": return (
      <svg {...common}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
    );
    case "wallet": return (
      <svg {...common}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
    );
    case "users": return (
      <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    );
    case "calendar": return (
      <svg {...common}><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    );
    case "doc": return (
      <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>
    );
    case "car": return (
      <svg {...common}><path d="M5 17h14M3 17V11l2-5h14l2 5v6"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg>
    );
    case "key": return (
      <svg {...common}><circle cx="8" cy="14" r="4"/><path d="m11 11 9-9M16 6l3 3M14 8l3 3"/></svg>
    );
    case "building": return (
      <svg {...common}><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>
    );
    case "star": return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
    );
    case "instagram": return (
      <svg {...common}><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
    );
    case "facebook": return (
      <svg {...common}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/></svg>
    );
    case "search": return (
      <svg {...common}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    );
    case "chevron-down": return (
      <svg {...common}><path d="m6 9 6 6 6-6"/></svg>
    );
    case "linkedin": return (
      <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    );
    default: return null;
  }
}

/* ---------- BRAND MARK (echoes logo: 2x2 squares in brand colors) ---------- */
function BrandMark({ size = 32, gap = 2 }) {
  const cell = (size - gap) / 2;
  return (
    <svg className="brand-mark-svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <rect x="0" y="0" width={cell} height={cell} rx="2" fill="#A8DBED"/>
      <rect x={cell + gap} y="0" width={cell} height={cell} rx="2" fill="#5BB3D9"/>
      <rect x="0" y={cell + gap} width={cell} height={cell} rx="2" fill="#1E70B8"/>
      <rect x={cell + gap} y={cell + gap} width={cell} height={cell} rx="2" fill="#133E80"/>
    </svg>
  );
}

function Wordmark({ size = 22, withSub = true }) {
  return (
    <a className="brand" href={onHomePage() ? "#" : "index.html"} aria-label="Sumafin">
      <BrandMark size={size * 1.4} />
      <span className="brand-wordmark" style={{ fontSize: size }}>
        SUMAFIN
        {withSub && <span className="sub">SOLUCIONES FINANCIERAS</span>}
      </span>
    </a>
  );
}

/* ---------- FORMATTERS ---------- */
const fmtMXN = (n) => "$" + Math.round(n).toLocaleString("es-MX");

/* ---------- CROSS-PAGE NAVIGATION ----------
   El sitio no tiene router: Nav y Footer se reutilizan en index.html y en
   las páginas de contenido (buro.html, comisiones.html, etc). Los anchors
   internos (#productos, #faq...) solo existen en index.html, así que desde
   una página de contenido deben apuntar a index.html#id. */
function onHomePage() {
  const p = window.location.pathname;
  return p === "/" || p === "" || /(^|\/)index\.html$/.test(p);
}
function homeHref(hash) {
  return onHomePage() ? hash : "index.html" + hash;
}

Object.assign(window, { Icon, BrandMark, Wordmark, fmtMXN, onHomePage, homeHref });
