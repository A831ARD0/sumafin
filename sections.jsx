// All page sections for Sumafin — modernized

/* ============================================================
   ALERTA ANTI-FRAUDE
============================================================ */
function AlertaBanner() {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return (
    <div className="alerta-banner" role="alert">
      <span className="alerta-ico"><Icon name="shield-check" size={14} stroke={2} /></span>
      <span><strong>Aviso importante:</strong> Sumafin no solicita depósitos ni anticipos para otorgar financiamiento. Si alguien lo hace en nuestro nombre, repórtalo a la <a href="https://www.condusef.gob.mx" target="_blank" rel="noreferrer noopener">CONDUSEF</a>.</span>
      <button className="alerta-close" onClick={() => setVisible(false)} aria-label="Cerrar aviso">×</button>
    </div>
  );
}

/* ============================================================
   NAV
============================================================ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <Wordmark />
        <div className="nav-links">
          <a href={homeHref("#productos")}>Crédito</a>
          <a href={homeHref("#productos")}>Arrendamiento</a>
          <a href={homeHref("#como-funciona")}>Cómo funciona</a>
          <a href={homeHref("#nosotros")}>Nosotros</a>
          <a href={homeHref("#sucursales")}>Sucursales</a>
          <a href={homeHref("#faq")}>Preguntas</a>
        </div>
        <div className="nav-cta">
          {/* TODO: agregar teléfono real — por ahora oculto */}
          {/* <a className="nav-phone" href="tel:+529511234567">
            <Icon name="phone" size={14} /> 951 123 4567
          </a> */}
          <a className="btn btn-primary btn-sm" href={homeHref("#cotiza")}>
            Solicita tu cotización <Icon name="arrow-right" size={14} stroke={2} />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO
============================================================ */
function Hero() {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-grid">
          <div>
            <span className="hero-tag">
              <span className="pulse"></span>
              Operando en Oaxaca y Puebla · CNBV regulada
            </span>
            <h1 className="h-display">
              Tu próximo auto,<br />
              <span className="txt-blue">financiado</span> a tu medida.
            </h1>
            <p className="lede">
              En Sumafin diseñamos planes de crédito y arrendamiento automotriz a tu medida. Sin trámites interminables — te damos respuesta ágil y te acompañamos en cada paso.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href="#cotiza">
                Solicita tu cotización <Icon name="arrow-right" size={16} stroke={2} />
              </a>
              <a className="btn btn-ghost btn-lg" href="#como-funciona">
                Cómo funciona
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <HeroValueGrid />
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroValueGrid() {
  return (
    <div className="hv-grid">
      <div className="hv-cell hv-1">
        <div>
          <div className="hv-label">Aprobación</div>
          <div className="hv-value">Ágil</div>
        </div>
        <div className="hv-caption">Respuesta rápida, sin trámites eternos.</div>
        <Icon name="clock" size={28} stroke={1.5} className="hv-ico" />
      </div>
      <div className="hv-cell hv-2">
        <div>
          <div className="hv-label">Plazos</div>
          <div className="hv-value">12–60</div>
        </div>
        <div className="hv-caption">Meses de plazo, para crédito o arrendamiento.</div>
        <Icon name="calendar" size={28} stroke={1.5} className="hv-ico" />
      </div>
      <div className="hv-cell hv-3">
        <div>
          <div className="hv-label">Sucursales</div>
          <div className="hv-value">04</div>
        </div>
        <div className="hv-caption">Contamos con sucursales en Oaxaca, Puebla, Veracruz y Querétaro.</div>
        <Icon name="map-pin" size={28} stroke={1.5} className="hv-ico" />
      </div>
      <div className="hv-cell hv-4">
        <div>
          <div className="hv-label">Marcas</div>
          <div className="hv-value">09</div>
        </div>
        <div className="hv-caption">Marcas aliadas para financiar tu próximo auto.</div>
        <Icon name="car" size={28} stroke={1.5} className="hv-ico" />
      </div>
    </div>
  );
}

/* ============================================================
   STATS STRIP
============================================================ */
function StatsStrip() {
  // Altura por logo normalizada por área (altura = raíz(área objetivo / aspecto))
  // para que los tres ocupen el mismo peso visual pese a tener proporciones distintas.
  const badges = [
    { img: "cnbv-logo.png", h: 63, title: "CNBV", desc: "Supervisada como SOFOM, E.N.R.", href: "https://www.cnbv.gob.mx" },
    { img: "condusef-logo.png", h: 37, title: "CONDUSEF · SIPRES", desc: "Registrada ante el SIPRES", href: "https://webapps.condusef.gob.mx/SIPRES_N/jsp/pub/index.jsp" },
    { img: "buro-logo.png", h: 58, title: "Buró de Entidades Financieras", desc: "Consulta pública", href: "https://www.buro.gob.mx" },
  ];

  return (
    <section className="stats-strip">
      <div className="container">
        <div className="trust-badges">
          <div className="trust-badge trust-badge-stat">
            <span className="trust-badge-chip"><span className="trust-badge-num">+8,400</span></span>
            <span className="trust-badge-text">
              <strong>Clientes atendidos</strong>
              <span>En Oaxaca y Puebla desde 2014</span>
            </span>
          </div>
          {badges.map((b) => (
            <a key={b.title} className="trust-badge" href={b.href} target="_blank" rel="noreferrer noopener">
              <span className="trust-badge-chip"><img src={b.img} alt={b.title} className="trust-badge-logo" style={{ height: b.h }} /></span>
              <span className="trust-badge-text">
                <strong>{b.title}</strong>
                <span>{b.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   NOSOTROS
============================================================ */
function Nosotros() {
  return (
    <section className="nosotros" id="nosotros">
      <div className="container">
        <div className="section-head no-right">
          <div>
            <span className="eyebrow">
              <span className="dot-grid"><span /><span /><span /><span /></span>
              Nosotros
            </span>
            <h2 className="h-section">Doce años financiando autos en <span className="txt-blue">Oaxaca y Puebla</span>.</h2>
          </div>
        </div>

        <div className="lede-block">
          Sumafin nació en Oaxaca en 2014 con una idea simple: crédito y arrendamiento automotriz sin la burocracia de la banca tradicional. Hoy operamos como SOFOM regulada por la CNBV, con equipo propio en cada sucursal.
        </div>

        <div className="nosotros-grid">
          <div className="mv-card">
            <div className="mv-card-head"><h4>Misión</h4></div>
            <div className="mv-card-body"><p>Facilitar el acceso a un auto propio o en arrendamiento con procesos simples, tasas claras y trato humano.</p></div>
          </div>
          <div className="mv-card">
            <div className="mv-card-head"><h4>Visión</h4></div>
            <div className="mv-card-body"><p>Ser la financiera automotriz de referencia en el sureste de México, por transparencia y cercanía con cada cliente.</p></div>
          </div>
          <div className="nosotros-stats">
            <Stat num="12" lbl="años operando en Oaxaca y Puebla" />
            <Stat num="+8,400" lbl="clientes atendidos" />
            <Stat num="02" lbl="sucursales con equipo propio" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRODUCTS — Crédito vs Arrendamiento
============================================================ */
function Products() {
  return (
    <section className="products" id="productos">
      <div className="container">
        <div className="section-head no-right">
          <div>
            <span className="eyebrow">
              <span className="dot-grid"><span /><span /><span /><span /></span>
              Productos
            </span>
            <h2 className="h-section">Dos caminos para tener tu auto <span className="txt-blue">hoy</span>.</h2>
          </div>
        </div>
        <div className="lede-block">
          Ya sea que quieras un auto en propiedad o renovarlo cada cierto tiempo, en Sumafin tenemos un plan que se ajusta a tu vida y a tu bolsillo.
        </div>

        <div className="products-grid">
          <article className="product-card">
            <span className="product-tag">Para personas</span>
            <span className="product-icon"><Icon name="wallet" size={26} stroke={1.6} /></span>
            <h3>Crédito automotriz</h3>
            <p className="product-meta">Compra tu auto nuevo o seminuevo. Al terminar el plazo, es 100% tuyo.</p>
            <div className="product-features">
              <FeatItem>Tasa fija desde 11.9% anual</FeatItem>
              <FeatItem>Enganche desde el 20% del valor</FeatItem>
              <FeatItem>Sin penalización por pagos anticipados</FeatItem>
              <FeatItem>Autos nuevos y seminuevos hasta 5 años</FeatItem>
            </div>
            <div className="product-stats">
              <Stat num="12–60" lbl="meses de plazo" />
              <Stat num="20%" lbl="enganche mínimo" />
              <Stat num="$1.5M" lbl="monto máximo" />
            </div>
            <div className="product-cta-row">
              <a className="btn btn-primary" href="#cotiza">Solicitar crédito <Icon name="arrow-right" size={14} stroke={2} /></a>
              <a className="btn-link" href="#requisitos">Ver requisitos</a>
            </div>
          </article>

          <article className="product-card featured">
            <span className="product-tag">Empresas y profesionistas</span>
            <span className="product-icon"><Icon name="key" size={26} stroke={1.6} /></span>
            <h3>Arrendamiento</h3>
            <p className="product-meta">Renueva tu auto cada 2–4 años, deduce el 100% de las rentas y olvídate de la depreciación.</p>
            <div className="product-features">
              <FeatItem>Deduce 100% de tus rentas mensuales</FeatItem>
              <FeatItem>Sin enganche tradicional — solo depósito inicial</FeatItem>
              <FeatItem>Mantenimiento y seguro incluidos*</FeatItem>
              <FeatItem>Cambia, renueva o compra al final del plazo</FeatItem>
            </div>
            <div className="product-stats">
              <Stat num="24–60" lbl="meses de plazo" />
              <Stat num="100%" lbl="deducible IVA/ISR" />
            </div>
            <div className="product-cta-row">
              <a className="btn" href="#cotiza" style={{ background: 'var(--cyan)', color: '#fff' }}>
                Solicitar arrendamiento <Icon name="arrow-right" size={14} stroke={2} />
              </a>
              <a className="btn-link" href="beneficios-fiscales.html">Ver beneficios fiscales</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FeatItem({ children }) {
  return (
    <div className="product-feat-item">
      <span className="check"><Icon name="check" size={11} stroke={3} /></span>
      <span>{children}</span>
    </div>
  );
}

function Stat({ num, lbl }) {
  return (
    <div className="product-stat">
      <div className="stat-num">{num}</div>
      <div className="stat-lbl">{lbl}</div>
    </div>
  );
}

/* ============================================================
   PROCESS — How it works
============================================================ */
function Process() {
  const steps = [
    { n: "01", title: "Solicítalo", desc: "Llena el formulario o llámanos. Te contactamos en menos de 2 horas hábiles.", ico: "spark", bg: "var(--cyan-light)", fg: "var(--navy-deep)" },
    { n: "02", title: "Entrega tus datos", desc: "Proporciona la documentación solicitada.", ico: "doc", bg: "var(--cyan)", fg: "var(--navy-deep)" },
    { n: "03", title: "Te aprobamos", desc: "Evaluamos tu perfil y te damos respuesta lo mas pronto posible.", ico: "shield-check", bg: "var(--blue)", fg: "#fff" },
    { n: "04", title: "Recibe tu auto", desc: "Nos encargamos de todo el papeleo y coordinamos la entrega. En pocos días ya estás manejando.", ico: "car", bg: "var(--navy)", fg: "#fff" },
  ];

  return (
    <section className="process" id="como-funciona">
      <div className="container">
        <div className="section-head no-right">
          <div>
            <span className="eyebrow">
              <span className="dot-grid"><span /><span /><span /><span /></span>
              El proceso
            </span>
            <h2 className="h-section">Cuatro pasos. <span className="txt-blue">Cero filas.</span></h2>
          </div>
        </div>
        <div className="lede-block">
          Diseñamos un proceso transparente donde tú ves todo: tasa, plazo, mensualidad y costo total desde el primer minuto.
        </div>
        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.n} className="process-step">
              <div className="step-icon" style={{ background: s.bg, color: s.fg }}>
                <Icon name={s.ico} size={22} stroke={1.6} />
                <span className="step-badge" style={{ color: s.bg === "var(--cyan-light)" ? "var(--navy-deep)" : s.bg }}>{s.n}</span>
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BENEFITS
============================================================ */
function Benefits() {
  const items = [
    { ico: "map-pin", title: "Atención local", desc: "Asesores que conocen Oaxaca y Puebla. Te visitamos donde estés." },
    { ico: "zap", title: "Aprobación ágil", desc: "Sin esperas eternas. Respuesta clara, sin vueltas." },
    { ico: "wallet", title: "Planes flexibles", desc: "Tú eliges el plazo, el enganche y la mensualidad que te acomoda." },
    { ico: "spark", title: "Tasas competitivas", desc: "Desde 11.9% anual fija. Sin variaciones a lo largo del plazo." },
    { ico: "shield-check", title: "Sin penalización", desc: "Adelanta pagos o liquida cuando quieras. Sin comisiones ocultas." },
    { ico: "users", title: "Asesoría personalizada", desc: "Un asesor te acompaña — antes, durante y después." },
  ];

  return (
    <section className="benefits" id="beneficios">
      <div className="container">
        <div className="section-head no-right">
          <div>
            <span className="eyebrow">
              <span className="dot-grid"><span /><span /><span /><span /></span>
              Por qué Sumafin
            </span>
            <h2 className="h-section">Hecho para que digas <span className="txt-blue">que sí</span>.</h2>
          </div>
        </div>
        <div className="lede-block">
          Somos una financiera regional con la agilidad de una fintech y la cercanía de la sucursal de toda la vida.
        </div>
        <div className="benefits-grid">
          {items.map((b) => (
            <div key={b.title} className="benefit">
              <span className="benefit-ico"><Icon name={b.ico} size={22} stroke={1.6} /></span>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   REQUISITOS
============================================================ */
function Requisitos() {
  return (
    <section className="requisitos" id="requisitos">
      <div className="container">
        <div className="section-head no-right">
          <div>
            <span className="eyebrow">
              <span className="dot-grid"><span /><span /><span /><span /></span>
              Requisitos
            </span>
            <h2 className="h-section">Lo que necesitas para empezar.</h2>
          </div>
        </div>
        <div className="lede-block">
          Documentación mínima, todo digital. Si te falta algo, tu asesor te orienta — no te dejamos a medias.
        </div>

        <div className="req-grid">
          <article className="req-card">
            <span className="req-meta"><Icon name="users" size={12} stroke={2} /> Persona física</span>
            <h3>Si compras para ti.</h3>
            <p className="req-sub">Personas asalariadas o con actividad empresarial.</p>
            <ul className="req-list">
              <li>Tener entre 21 y 75 años cumplidos al final del plazo.</li>
              <li>Identificación oficial vigente (INE o pasaporte).</li>
              <li>Comprobante de domicilio reciente (máx. 3 meses).</li>
              <li>Comprobantes de ingresos de los últimos 3 meses.</li>
              <li>Ingreso mínimo mensual de $12,000 MXN.</li>
              <li>Antigüedad laboral mínima de 1 año.</li>
            </ul>
          </article>

          <article className="req-card">
            <span className="req-meta"><Icon name="building" size={12} stroke={2} /> Persona moral</span>
            <h3>Si financias tu flotilla.</h3>
            <p className="req-sub">Empresas y negocios establecidos en México.</p>
            <ul className="req-list">
              <li>Acta constitutiva y poderes del representante legal.</li>
              <li>RFC, comprobante de domicilio fiscal y CSF.</li>
              <li>Estados financieros al ultimo trimestre.</li>
              <li>Declaración anual {new Date().getFullYear()}.</li>
              <li>Antigüedad mínima de la empresa: 2 años.</li>
              <li>Identificación del representante legal.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COTIZACIÓN — replaces simulator
============================================================ */
// ↓ Pega aquí la clave de web3forms.com (entra al sitio, escribe tu correo y cópiala)
const WEB3FORMS_KEY = '4cf70859-201d-476f-8664-f3daae927b10';

// ↓ Sitekey pública de hCaptcha (no es un secreto, puede estar en el código)
const HCAPTCHA_SITEKEY = 'c5f49a72-7a7e-4eaa-830a-cffee4848116';

function Cotizacion() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [fields, setFields] = useState({ nombre: '', tel: '', email: '', producto: '', ciudad: '' });
  const [touched, setTouched] = useState({});

  // ── Protección anti-bot ──────────────────────────────────────────────
  // 1. Honeypot: campo oculto que los bots llenan pero los humanos no ven
  const [honeypot, setHoneypot] = useState('');

  // 2. Rate limit: máximo 1 envío cada 3 minutos por sesión
  const RATE_LIMIT_MS = 3 * 60 * 1000;
  const [rateLimitMsg, setRateLimitMsg] = useState(() => {
    try {
      const last = sessionStorage.getItem('sf_last_submit');
      if (!last) return '';
      const diff = Date.now() - parseInt(last, 10);
      if (diff < RATE_LIMIT_MS) {
        const mins = Math.ceil((RATE_LIMIT_MS - diff) / 60000);
        return `Solicitud recibida. Espera ${mins} min antes de enviar otra.`;
      }
    } catch {}
    return '';
  });
  // ────────────────────────────────────────────────────────────────────

  // 3b. hCaptcha se monta a mano: el script de hcaptcha.com escanea el DOM
  // una sola vez al cargar, antes de que React pinte este formulario, así
  // que su auto-render nunca encuentra el div. Lo renderizamos nosotros
  // en cuanto el widget esté disponible.
  const captchaBoxRef = useRef(null);
  const captchaWidgetId = useRef(null);
  useEffect(() => {
    let cancelled = false;
    const interval = setInterval(() => {
      if (cancelled || captchaWidgetId.current !== null || !captchaBoxRef.current) return;
      if (window.hcaptcha?.render) {
        captchaWidgetId.current = window.hcaptcha.render(captchaBoxRef.current, { sitekey: HCAPTCHA_SITEKEY });
        clearInterval(interval);
      }
    }, 200);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  const validators = {
    nombre:   (v) => v.trim().length >= 3 ? '' : 'Escribe tu nombre completo',
    tel:      (v) => /^\d[\d\s\-]{8,}$/.test(v.trim()) ? '' : 'Teléfono inválido (mín. 10 dígitos)',
    email:    (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Correo inválido',
    producto: (v) => v ? '' : 'Selecciona un producto',
    ciudad:   (v) => v ? '' : 'Selecciona tu ciudad',
  };

  const errors = Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, validators[k](v)]));
  const isValid = Object.values(errors).every((e) => e === '');

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  const onSubmit = async (e) => {
    e.preventDefault();

    // ── Verificaciones anti-bot ──────────────────────────────────────
    // 1. Si el honeypot tiene contenido → es un bot; ignorar silenciosamente
    if (honeypot) return;

    // 2. Rate limit
    try {
      const last = sessionStorage.getItem('sf_last_submit');
      if (last && Date.now() - parseInt(last, 10) < RATE_LIMIT_MS) {
        const mins = Math.ceil((RATE_LIMIT_MS - (Date.now() - parseInt(last, 10))) / 60000);
        setRateLimitMsg(`Ya enviaste una solicitud. Espera ${mins} min antes de enviar otra.`);
        return;
      }
    } catch {}
    // ────────────────────────────────────────────────────────────────

    setTouched({ nombre: true, tel: true, email: true, producto: true, ciudad: true });
    if (!isValid) return;

    // 4. Verificar que el usuario completó hCaptcha
    const hcToken = window.hcaptcha?.getResponse(captchaWidgetId.current);
    if (!hcToken) {
      setSendError('Completa la verificación de seguridad (el recuadro azul).');
      return;
    }

    setSending(true);
    setSendError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nueva cotización Sumafin — ${fields.producto} · ${fields.ciudad}`,
          from_name: 'Sumafin Web',
          botcheck: false,
          'h-captcha-response': hcToken,   // 4. Token de hCaptcha para verificación
          nombre: fields.nombre,
          telefono: fields.tel,
          correo: fields.email,
          producto: fields.producto,
          ciudad: fields.ciudad,
        }),
      });
      const data = await res.json();
      if (data.success) {
        try { sessionStorage.setItem('sf_last_submit', String(Date.now())); } catch {}
        window.hcaptcha?.reset(captchaWidgetId.current);
        setSent(true);
      } else {
        setSendError('No se pudo enviar. Intenta de nuevo o llámanos directamente.');
      }
    } catch {
      setSendError('Error de conexión. Verifica tu internet e intenta de nuevo.');
      window.hcaptcha?.reset(captchaWidgetId.current);
    } finally {
      setSending(false);
    }
  };

  const fieldErr = (k) => touched[k] && errors[k]
    ? <span style={{ fontSize: 11, color: '#fca5a5', marginTop: 4, display: 'block' }}>{errors[k]}</span>
    : null;

  return (
    <section className="cotiza" id="cotiza">
      <div className="container">
        <div className="cotiza-inner">
          <div className="cotiza-grid">
            <div>
              <span className="eyebrow" style={{ color: 'var(--cyan-light)' }}>
                <span className="dot-grid"><span /><span /><span /><span /></span>
                Solicita tu cotización
              </span>
              <h2>Déjanos tus datos y un asesor te contacta <span style={{ color: 'var(--cyan)' }}>hoy mismo.</span></h2>
              <p className="lede">
                Sin compromiso. Sólo platicamos contigo para entender qué buscas y armarte la mejor opción.
              </p>

              {/* TODO: mostrar canales cuando estén disponibles (WhatsApp, teléfonos, correo) */}
              {/* <div className="channels">
                <div className="cotiza-channel" style={{ cursor: 'default', opacity: .6 }}>
                  <span className="ch-ico"><Icon name="whatsapp" size={20} /></span>
                  <div>
                    <div className="ch-label">WhatsApp · Respuesta inmediata</div>
                    <div className="ch-value" style={{ fontSize: 13, fontStyle: 'italic' }}>Próximamente</div>
                  </div>
                </div>
                <a className="cotiza-channel" href="tel:+529511234567">
                  <span className="ch-ico"><Icon name="phone" size={20} stroke={1.8} /></span>
                  <div>
                    <div className="ch-label">Teléfono Oaxaca · Lun–Sáb</div>
                    <div className="ch-value">951 123 4567</div>
                  </div>
                  <Icon name="arrow-up-right" size={16} stroke={2} className="ch-arrow" />
                </a>
                <a className="cotiza-channel" href="tel:+522229876543">
                  <span className="ch-ico"><Icon name="phone" size={20} stroke={1.8} /></span>
                  <div>
                    <div className="ch-label">Teléfono Puebla · Lun–Sáb</div>
                    <div className="ch-value">222 987 6543</div>
                  </div>
                  <Icon name="arrow-up-right" size={16} stroke={2} className="ch-arrow" />
                </a>
                <div className="cotiza-channel" style={{ cursor: 'default', opacity: .6 }}>
                  <span className="ch-ico"><Icon name="mail" size={20} stroke={1.8} /></span>
                  <div>
                    <div className="ch-label">Correo</div>
                    <div className="ch-value" style={{ fontSize: 13, fontStyle: 'italic' }}>Próximamente</div>
                  </div>
                </div>
              </div> */}
            </div>

            {sent ? (
              <div className="cotiza-card sent">
                <div className="success-ico"><Icon name="check" size={32} stroke={3} /></div>
                <h3>¡Recibimos tu solicitud!</h3>
                <p style={{ color: 'rgba(255,255,255,.7)', margin: '8px 0 0' }}>
                  Un asesor de Sumafin te contactará en las próximas <strong style={{ color: '#fff' }}>2 horas hábiles</strong> al teléfono o correo que indicaste.
                </p>
                <button className="btn btn-ghost" style={{ marginTop: 24, color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}
                  onClick={() => { setSent(false); setFields({ nombre: '', tel: '', email: '', producto: '', ciudad: '' }); setTouched({}); }}>
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form className="cotiza-card" onSubmit={onSubmit} noValidate>
                {/* ── Honeypot anti-spam (invisible para humanos) ── */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden', opacity: 0 }}>
                  <label>Do not fill this field</label>
                  <input type="text" name="website_url" tabIndex={-1} autoComplete="off"
                    value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>
                {/* ─────────────────────────────────────────────── */}
                <h3>Solicita una cotización</h3>
                <div className="ccc-sub">Responde 5 datos y un asesor te llama hoy.</div>

                <div className="form-row">
                  <div className="field">
                    <label>Nombre completo</label>
                    <input type="text" placeholder="Tu nombre" value={fields.nombre}
                      onChange={set('nombre')} onBlur={blur('nombre')}
                      style={touched.nombre && errors.nombre ? { borderColor: '#fca5a5' } : {}} />
                    {fieldErr('nombre')}
                  </div>
                  <div className="field">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="951 000 0000" value={fields.tel}
                      onChange={set('tel')} onBlur={blur('tel')}
                      style={touched.tel && errors.tel ? { borderColor: '#fca5a5' } : {}} />
                    {fieldErr('tel')}
                  </div>
                </div>

                <div className="field">
                  <label>Correo electrónico</label>
                  <input type="email" placeholder="tu@correo.com" value={fields.email}
                    onChange={set('email')} onBlur={blur('email')}
                    style={touched.email && errors.email ? { borderColor: '#fca5a5' } : {}} />
                  {fieldErr('email')}
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>Producto</label>
                    <select value={fields.producto} onChange={set('producto')} onBlur={blur('producto')}
                      style={touched.producto && errors.producto ? { borderColor: '#fca5a5' } : {}}>
                      <option value="">Selecciona…</option>
                      <option value="Crédito automotriz">Crédito automotriz</option>
                      <option value="Arrendamiento">Arrendamiento</option>
                      <option value="Flotilla empresarial">Flotilla empresarial</option>
                      <option value="No estoy seguro/a">No estoy seguro/a</option>
                    </select>
                    {fieldErr('producto')}
                  </div>
                  <div className="field">
                    <label>Ciudad</label>
                    <select value={fields.ciudad} onChange={set('ciudad')} onBlur={blur('ciudad')}
                      style={touched.ciudad && errors.ciudad ? { borderColor: '#fca5a5' } : {}}>
                      <option value="">Selecciona…</option>
                      <option value="Oaxaca de Juárez">Oaxaca de Juárez</option>
                      <option value="Puebla">Puebla</option>
                      <option value="Córdoba">Córdoba</option>
                      <option value="Querétaro">Querétaro</option>
                    </select>
                    {fieldErr('ciudad')}
                  </div>
                </div>
                <p style={{ fontSize: 11.5, color: '#fca5a5', margin: '-8px 0 14px', lineHeight: 1.4 }}>
                  ¿Tu ciudad no aparece? Por el momento no contamos con cobertura en otras ciudades.
                </p>

                {/* Widget hCaptcha — el usuario debe completarlo antes de enviar */}
                <div className="captcha-wrap">
                  <div ref={captchaBoxRef} />
                </div>

                <button type="submit" disabled={sending || !!rateLimitMsg} className="btn" style={{
                  background: isValid && !sending && !rateLimitMsg ? 'var(--cyan)' : 'rgba(91,179,217,.4)',
                  color: 'var(--navy-deep)', fontWeight: 600,
                  cursor: isValid && !sending && !rateLimitMsg ? 'pointer' : 'not-allowed',
                  transition: 'background .2s ease',
                }}>
                  {sending ? 'Enviando…' : <> Solicitar cotización <Icon name="arrow-right" size={14} stroke={2.5} /></>}
                </button>
                {rateLimitMsg && (
                  <p style={{ fontSize: 12.5, color: 'var(--cyan-light)', margin: '8px 0 0', textAlign: 'center' }}>{rateLimitMsg}</p>
                )}
                {sendError && (
                  <p style={{ fontSize: 12.5, color: '#fca5a5', margin: '8px 0 0', textAlign: 'center' }}>{sendError}</p>
                )}
                <div className="privacy">
                  Al enviar aceptas nuestro aviso de privacidad.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
============================================================ */
function Testimonials() {
  const items = [
    { quote: "Lo que más me gustó fue que no me marearon. Mi asesor me explicó todo, sin letras chiquitas. A los 2 días ya tenía mi camioneta.", name: "Marisol R.", role: "Oaxaca de Juárez · Crédito", stars: 5 },
    { quote: "Renovamos la flotilla de la panadería con arrendamiento. Deducimos todo y mantenemos el flujo de la empresa intacto.", name: "Carlos H.", role: "Puebla · Arrendamiento empresarial", stars: 5 },
    { quote: "Tenía miedo por mi historial. En Sumafin me escucharon antes de juzgarme y encontramos un plan que sí podía pagar.", name: "Diego M.", role: "Cholula · Crédito seminuevo", stars: 5 },
  ];

  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <div className="section-head no-right">
          <div>
            <span className="eyebrow">
              <span className="dot-grid"><span /><span /><span /><span /></span>
              Testimonios
            </span>
            <h2 className="h-section">Más de 8,400 personas ya manejan <span className="txt-blue">con Sumafin</span>.</h2>
          </div>
        </div>
        <div className="testi-grid">
          {items.map((t, i) => (
            <article key={i} className="testi-card">
              <span className="testi-stars">
                {Array.from({ length: t.stars }).map((_, k) => <Icon key={k} name="star" size={15} />)}
              </span>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <span className="testi-avatar">{t.name[0]}</span>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SUCURSALES
============================================================ */
function Sucursales() {
  const list = [
    {
      city: "Oaxaca",
      state: "Estado de Oaxaca",
      address: "Av. Universidad 1205, Col. Reforma",
      cp: "68050, Oaxaca de Juárez",
      hours: "Lun–Vie 9:00–19:00 · Sáb 10:00–14:00",
      phone: null, // TODO: agregar teléfono real de Oaxaca
      mail: "oaxaca@sumafin.mx",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9159.362007547088!2d-96.711677!3d17.036167199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7231e4d908feb%3A0x27b4cd27d969f229!2sSUMAFIN!5e0!3m2!1ses-419!2smx!4v1790618837697!5m2!1ses-419!2smx",
    },
    {
      city: "Puebla",
      state: "Estado de Puebla",
      address: "Blvd. Atlixcáyotl 5208, Reserva Territorial",
      cp: "72830, San Andrés Cholula",
      hours: "Lun–Vie 9:00–19:00 · Sáb 10:00–14:00",
      phone: null, // TODO: agregar teléfono real de Puebla
      mail: "puebla@sumafin.mx",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4528.243467782157!2d-98.2008333!3d19.024166700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0be1318201f%3A0x6a4209ee7e45b8d8!2sVolkswagen%20Bonn%20Dorada!5e0!3m2!1ses-419!2smx!4v1790618826194!5m2!1ses-419!2smx",
    },
  ];

  return (
    <section className="sucursales" id="sucursales">
      <div className="container">
        <div className="section-head no-right">
          <div>
            <span className="eyebrow">
              <span className="dot-grid"><span /><span /><span /><span /></span>
              Sucursales
            </span>
            <h2 className="h-section">Cerca de ti, en <span className="txt-blue">Oaxaca y Puebla</span>.</h2>
          </div>
        </div>

        <div className="lede-block">
          Visítanos para conocer tu plan en persona o agenda una videollamada con un asesor. Atención de lunes a sábado.
        </div>

        <div className="suc-grid">
          {list.map((s) => (
            <article key={s.city} className="suc-card">
              <div className="suc-map">
                <iframe
                  src={s.mapEmbed}
                  title={`Mapa Sumafin ${s.city}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="suc-body">
                <div className="suc-state">{s.state}</div>
                <h3>Sumafin {s.city}</h3>
                <div className="suc-info">
                  <div className="row">
                    <span className="ico-wrap"><Icon name="map-pin" size={14} stroke={2} /></span>
                    <span><strong>{s.address}</strong>{s.cp}</span>
                  </div>
                  <div className="row">
                    <span className="ico-wrap"><Icon name="clock" size={14} stroke={2} /></span>
                    <span>{s.hours}</span>
                  </div>
                  <div className="row">
                    <span className="ico-wrap"><Icon name="mail" size={14} stroke={2} /></span>
                    {/* TODO: mostrar s.phone cuando esté disponible */}
                    <span>{s.phone ? `${s.phone} · ` : ''}{s.mail}</span>
                  </div>
                </div>
                <div className="suc-actions">
                  <a className="btn btn-primary btn-sm" href="#cotiza">Agendar visita <Icon name="arrow-right" size={12} stroke={2.5} /></a>
                  {/* TODO: usar el WhatsApp propio de cada sucursal cuando exista; por ahora comparten el número general */}
                  <a className="btn btn-whatsapp btn-sm" href={`https://wa.me/5219511234567?text=${encodeURIComponent('Hola, quiero información de la sucursal de ' + s.city)}`} target="_blank" rel="noreferrer noopener">
                    <Icon name="whatsapp" size={13} /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
============================================================ */
function FAQ() {
  const [openSet, setOpenSet] = useState(() => new Set());
  const [activeCat, setActiveCat] = useState(null);
  const [query, setQuery] = useState("");
  const groups = [
    {
      label: "Confianza y regulación",
      items: [
        {
          q: "¿Sumafin es una empresa regulada y confiable?",
          a: (
            <>
              Sí. Sumafin Servicios Financieros, S.A. de C.V. opera como Sociedad Financiera de Objeto Múltiple, Entidad No Regulada (SOFOM, E.N.R.), supervisada por la Comisión Nacional Bancaria y de Valores (CNBV) y con registro ante la CONDUSEF en el SIPRES. Puedes verificar nuestro registro directamente en el{" "}
              <a href="https://webapps.condusef.gob.mx/SIPRES_N/jsp/pub/index.jsp" target="_blank" rel="noreferrer noopener">portal público del SIPRES</a>.
            </>
          ),
        },
        {
          q: "¿Cómo puedo presentar una queja o aclaración?",
          a: (
            <>
              Puedes contactar a nuestro equipo en cualquier sucursal o escribir a{" "}
              <a href="mailto:hola@sumafin.mx">hola@sumafin.mx</a>. Si no obtienes una respuesta satisfactoria, tienes derecho a acudir a la{" "}
              <a href="https://www.condusef.gob.mx" target="_blank" rel="noreferrer noopener">CONDUSEF</a>{" "}
              (800 999 8080) o a consultar nuestro historial de reclamaciones en el{" "}
              <a href="https://www.buro.gob.mx" target="_blank" rel="noreferrer noopener">Buró de Entidades Financieras</a>.
            </>
          ),
        },
      ],
    },
    {
      label: "Aplicación y requisitos",
      items: [
        { q: "¿Estoy en buró de crédito, puedo aplicar?", a: "Sí. Evaluamos cada caso de forma individual. Tener detalles en buró no es razón automática de rechazo — depende de tu perfil completo, ingresos y antigüedad laboral." },
        { q: "¿Puedo aplicar si no tengo historial crediticio?", a: "Sí. No tener historial no te descalifica. Al tratarse de financiamiento con garantía sobre el vehículo, podemos evaluar tu perfil con más flexibilidad: nos apoyamos en tus ingresos comprobables, tu antigüedad laboral y el enganche que aportes." },
        { q: "¿Cuánto enganche necesito?", a: "Para crédito automotriz, el enganche mínimo es del 20% del valor del auto. Mientras más alto, menor será tu mensualidad y el costo total del financiamiento." },
        { q: "¿Puedo financiar un auto seminuevo?", a: "Sí, con hasta 5 años de antigüedad (modelo no mayor a 5 años al cierre del crédito) y con verificación mecánica previa." },
      ],
    },
    {
      label: "Costos y condiciones",
      items: [
        { q: "¿Cuál es la diferencia entre crédito y arrendamiento?", a: "En crédito, el auto es tuyo desde el día uno y al pagar la última cuota la deuda se cancela. En arrendamiento, pagas por el uso y al final puedes comprarlo, renovarlo o devolverlo — ideal para empresas y profesionistas por los beneficios fiscales." },
        { q: "¿Aplican comisiones por apertura o cancelación?", a: "Cobramos comisión de apertura del 2.5%. No hay penalización por pago anticipado ni por liquidación total — puedes adelantar cuando quieras." },
        { q: "¿Qué es el CAT y cómo lo calcula Sumafin?", a: "El Costo Anual Total (CAT) es el indicador que incluye tasa de interés, comisiones y gastos asociados a tu crédito, expresado como porcentaje anual. Sumafin te informa tu CAT antes de firmar cualquier contrato, en cumplimiento de la normatividad de la CONDUSEF. El CAT varía según el monto, plazo y perfil del cliente." },
        { q: "¿Qué pasa si me atraso en un pago?", a: "Se generan intereses moratorios sobre el saldo vencido, en los términos y el porcentaje que quedan escritos en tu contrato — nunca hay cargos que no te hayamos informado antes de firmar. Si prevés un problema para pagar, avísanos antes de la fecha de corte: en muchos casos podemos reestructurar o ajustar tu calendario." },
      ],
    },
    {
      label: "Proceso y cobertura",
      items: [
        { q: "¿Cuánto tarda la aprobación?", a: "Evaluamos tu perfil en cuanto recibimos toda tu documentación y te damos respuesta ágil, sin trámites interminables." },
        { q: "¿El trámite es en línea o tengo que ir a sucursal?", a: "Puedes iniciar y avanzar todo el trámite a distancia: envías tu solicitud y tu documentación por WhatsApp o correo, y un asesor te acompaña por teléfono. Solo la firma del contrato y la entrega de la unidad se hacen de forma presencial en nuestras sucursales de Oaxaca o Puebla, o en la agencia donde compres el auto." },
        { q: "¿En qué ciudades opera Sumafin?", a: "Atendemos principalmente Oaxaca y Puebla, donde tenemos sucursal y equipo propio, además de las zonas conurbadas y municipios cercanos de ambos estados. Si estás fuera de esa cobertura, escríbenos: evaluamos casos por excepción." },
      ],
    },
  ];

  // Aplana los grupos asignando un índice global a cada pregunta (para el estado "abierto").
  let i = -1;
  const flat = groups.map((g, gi) => ({
    gi,
    label: g.label,
    items: g.items.map((it) => { i += 1; return { ...it, idx: i }; }),
  }));
  const total = flat.reduce((n, g) => n + g.items.length, 0);

  const q = query.trim().toLowerCase();
  const visibleGroups = activeCat === null ? [] : flat
    .filter((g) => activeCat === -1 || g.gi === activeCat)
    .map((g) => ({ ...g, items: g.items.filter((it) => !q || it.q.toLowerCase().includes(q)) }))
    .filter((g) => g.items.length > 0);
  const visibleCount = visibleGroups.reduce((n, g) => n + g.items.length, 0);
  const visibleIdxs = visibleGroups.flatMap((g) => g.items.map((it) => it.idx));
  const allExpanded = visibleIdxs.length > 0 && visibleIdxs.every((idx) => openSet.has(idx));

  const toggleItem = (idx) => setOpenSet((prev) => {
    const next = new Set(prev);
    next.has(idx) ? next.delete(idx) : next.add(idx);
    return next;
  });
  const toggleExpandAll = () => setOpenSet(allExpanded ? new Set() : new Set(visibleIdxs));

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-topbar">
          <div>
            <span className="eyebrow">
              <span className="dot-grid"><span /><span /><span /><span /></span>
              Dudas frecuentes
            </span>
            <h2 className="h-section">¿En qué podemos <span className="txt-blue">ayudarte</span>?</h2>
            <p className="section-sub">Respuestas simples y transparentes sobre tu financiamiento.</p>
          </div>
          <div className="faq-search">
            <Icon name="search" size={17} stroke={1.8} />
            <input
              type="text"
              placeholder="Busca por palabra o tema…"
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setQuery(v);
                if (v.trim() && activeCat !== -1) setActiveCat(-1);
              }}
            />
          </div>
        </div>

        <div className="faq-body">
          <aside className="faq-sidebar">
            <div className="faq-sidebar-label">Explora por tema</div>
            <button className={"faq-cat-btn" + (activeCat === -1 ? " active" : "")} onClick={() => setActiveCat(-1)}>
              <span>Todas las preguntas</span><span className="faq-cat-count">{total}</span>
            </button>
            {groups.map((g, gi) => (
              <button key={gi} className={"faq-cat-btn" + (activeCat === gi ? " active" : "")} onClick={() => setActiveCat(gi)}>
                <span>{g.label}</span><span className="faq-cat-count">{g.items.length}</span>
              </button>
            ))}
            <div className="faq-sidebar-help">
              <strong>¿No encuentras tu respuesta?</strong>
              <p>Un asesor puede orientarte personalmente.</p>
              <a href="https://wa.me/5219511234567" target="_blank" rel="noreferrer noopener">
                <Icon name="whatsapp" size={15} /> Hablar por WhatsApp
              </a>
            </div>
          </aside>

          <div className="faq-main">
            {activeCat === null ? (
              <div className="faq-placeholder">
                <span className="faq-placeholder-ico"><Icon name="search" size={22} stroke={1.6} /></span>
                <p>Elige un tema a la izquierda para ver sus preguntas.</p>
              </div>
            ) : (
              <div className="faq-toolbar">
                <span>Mostrando <strong>{visibleCount}</strong> {visibleCount === 1 ? "respuesta" : "respuestas"}</span>
                {visibleIdxs.length > 0 && (
                  <button className="faq-expand-all" onClick={toggleExpandAll}>
                    {allExpanded ? "Colapsar todo" : "Expandir todo"}
                  </button>
                )}
              </div>
            )}

            {activeCat !== null && visibleGroups.length === 0 && (
              <p className="faq-empty">No encontramos preguntas que coincidan con "{query}".</p>
            )}

            {visibleGroups.map((g) => (
              <div className="faq-group" key={g.gi}>
                <div className="faq-group-head">
                  <h4>{g.label}</h4>
                  <span>{g.items.length} {g.items.length === 1 ? "pregunta" : "preguntas"}</span>
                </div>
                {g.items.map((it) => (
                  <div key={it.idx} className={"faq-card" + (openSet.has(it.idx) ? " open" : "")}>
                    <button className="faq-q" aria-expanded={openSet.has(it.idx)} aria-controls={"faq-a-" + it.idx} onClick={() => toggleItem(it.idx)}>
                      <span>{it.q}</span>
                      <span className="faq-chev"><Icon name="chevron-down" size={16} stroke={2} /></span>
                    </button>
                    <div className="faq-a" id={"faq-a-" + it.idx}>{it.a}</div>
                  </div>
                ))}
              </div>
            ))}

            <div className="faq-cta-banner">
              <div>
                <h4>¿Necesitas ayuda personal?</h4>
                <p>Cuéntanos tu caso y recibe orientación de un asesor.</p>
              </div>
              <a className="btn" href="https://wa.me/5219511234567" target="_blank" rel="noreferrer noopener">
                Contactar asesor <Icon name="arrow-right" size={14} stroke={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BRANDS STRIP
============================================================ */
function Brands() {
  // Alturas calculadas para que cada logo ocupe la misma área visual
  // (altura = raíz(área objetivo / aspecto)); si no, los emblemas cuadrados
  // (VW, MG) se ven diminutos junto a los wordmarks alargados (BYD, KIA).
  const brands = [
    { name: "Volkswagen", img: "brand-logos/volkswagen.webp", h: 51 },
    { name: "SEAT", img: "brand-logos/seat.png", h: 30 },
    { name: "CUPRA", img: "brand-logos/cupra.png", h: 42 },
    { name: "Audi", img: "brand-logos/audi.png", h: 32 },
    { name: "KIA", img: "brand-logos/kia.png", h: 27 },
    { name: "MG", img: "brand-logos/mg.png", h: 51 },
    { name: "Chery", img: "brand-logos/chery.png", h: 32 },
    { name: "Geely", img: "brand-logos/geely.png", h: 38 },
    { name: "BYD", img: "brand-logos/byd.png", h: 25 },
  ];
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-header">Trabajamos con las principales agencias en Oaxaca y Puebla</div>
        <div className="brands-row">
          {brands.map((b) => (
            <img key={b.name} className="brand-logo" src={b.img} alt={b.name} style={{ height: b.h }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Wordmark />
            <p>Financiera automotriz regulada por la CNBV. Crédito y arrendamiento de autos en Oaxaca y Puebla desde 2014.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={16} /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Productos</h5>
            <ul>
              <li><a href={homeHref("#productos")}>Crédito automotriz</a></li>
              <li><a href={homeHref("#productos")}>Arrendamiento</a></li>
              <li><a href={homeHref("#productos")}>Flotillas empresariales</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Acerca de Sumafin</h5>
            <ul>
              <li><a href={homeHref("#nosotros")}>Conócenos</a></li>
              <li><a href="buro.html">¿Qué es el Buró?</a></li>
              <li><a href="comisiones.html">Comisiones / Tasa / CAT</a></li>
              <li><a href="trabajo.html">Trabaja con nosotros</a></li>
            </ul>
            <h5 className="footer-sub">Unidad Especializada de Atención (UNE)</h5>
            <ul>
              <li><a href="mailto:une@sumafin.mx">une@sumafin.mx</a></li>
              {/* TODO: agregar teléfono real de la UNE */}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contáctanos</h5>
            <ul>
              <li><a href="mailto:hola@sumafin.mx">hola@sumafin.mx</a></li>
              <li><a href="https://wa.me/5219511234567" target="_blank" rel="noreferrer noopener">WhatsApp</a></li>
              <li><a href={homeHref("#faq")}>Preguntas frecuentes</a></li>
            </ul>
            <h5 className="footer-sub">Nuestras oficinas</h5>
            <ul className="footer-offices">
              <li>Oaxaca: Av. Universidad 1205, Col. Reforma, 68050, Oaxaca de Juárez</li>
              <li>Puebla: Blvd. Atlixcáyotl 5208, Reserva Territorial, 72830, San Andrés Cholula</li>
            </ul>
            <p className="footer-hours">Horario: Lun–Vie 9:00–19:00 · Sáb 10:00–14:00</p>
          </div>
        </div>

        <div className="footer-legal">
          <p>
            <strong>Sumafin Servicios Financieros, S.A. de C.V., SOFOM, E.N.R.</strong> — Institución registrada ante la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF) en el Registro de Prestadores de Servicios Financieros (SIPRES). Supervisada por la Comisión Nacional Bancaria y de Valores (CNBV) como Sociedad Financiera de Objeto Múltiple, Entidad No Regulada.
          </p>
          <p>
            El Costo Anual Total (CAT) varía en función del monto, plazo y perfil crediticio del solicitante. Sumafin informa el CAT antes de la firma del contrato conforme a la normatividad vigente. El otorgamiento de crédito está sujeto a análisis y aprobación.
          </p>
          <p>
            Para consultas y reclamaciones: <strong>CONDUSEF</strong> · Tel. 800 999 8080 · <a href="https://www.condusef.gob.mx" target="_blank" rel="noreferrer noopener">condusef.gob.mx</a> · <a href="https://www.buro.gob.mx" target="_blank" rel="noreferrer noopener">Buró de Entidades Financieras</a>
          </p>
        </div>

        <div className="footer-bot">
          <span>© 2026 Sumafin Servicios Financieros, S.A. de C.V., SOFOM, E.N.R.</span>
          <div className="links">
            <a href="terminos.html">Términos de uso</a>
            <a href="aviso.html">Aviso de privacidad</a>
            <a href="comisiones.html">CAT informativo</a>
            <a href="https://www.condusef.gob.mx" target="_blank" rel="noreferrer noopener">CONDUSEF</a>
            <a href="https://www.buro.gob.mx" target="_blank" rel="noreferrer noopener">Buró de Entidades</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { AlertaBanner, Nav, Hero, StatsStrip, Nosotros, Brands, Products, Process, Benefits, Requisitos, Cotizacion, Testimonials, Sucursales, FAQ, Footer });
