// Main app: Sumafin landing page

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showBrands": true,
  "showStats": true,
  "showTestimonials": true,
  "heroAccentStyle": "blue"
}/*EDITMODE-END*/;

const HERO_STYLES = {
  blue: { accent: "var(--blue)" },
  navy: { accent: "var(--navy)" },
  cyan: { accent: "var(--cyan)" },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const s = HERO_STYLES[t.heroAccentStyle] || HERO_STYLES.blue;
    document.documentElement.style.setProperty('--hero-accent', s.accent);
  }, [t.heroAccentStyle]);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <AlertaBanner />
      <Nav />
      <Hero />
      {t.showStats && <StatsStrip />}
      <Nosotros />
      <Products />
      <Process />
      <Benefits />
      <Requisitos />
      <Cotizacion />
      {t.showTestimonials && <Testimonials />}
      <Sucursales />
      <FAQ />
      {t.showBrands && <Brands />}
      <Footer />

      <TweaksPanel title="Sumafin · Tweaks">
        <TweakSection label="Secciones visibles" />
        <TweakToggle label="Stats strip" value={t.showStats} onChange={(v) => setTweak("showStats", v)} />
        <TweakToggle label="Testimonios" value={t.showTestimonials} onChange={(v) => setTweak("showTestimonials", v)} />
        <TweakToggle label="Marcas aliadas" value={t.showBrands} onChange={(v) => setTweak("showBrands", v)} />

        <TweakSection label="Ir a sección" />
        <div style={{display:'grid', gap: 4}}>
          {[
            ["#cotiza", "→ Solicita cotización"],
            ["#productos", "→ Productos"],
            ["#como-funciona", "→ Cómo funciona"],
            ["#nosotros", "→ Nosotros"],
            ["#sucursales", "→ Sucursales"],
            ["#faq", "→ Preguntas frecuentes"],
          ].map(([href, label]) => (
            <a key={href} href={href}
              style={{
                padding: '7px 10px', borderRadius: 6,
                background: 'rgba(41,38,27,.04)',
                border: '1px solid rgba(41,38,27,.08)',
                color: '#29261b', fontSize: 11, textDecoration: 'none'
              }}>
              {label}
            </a>
          ))}
        </div>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
