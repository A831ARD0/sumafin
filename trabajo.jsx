// Página de contenido: Trabaja con nosotros

function TrabajoContent() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="dot-grid"><span /><span /><span /><span /></span>
            Únete al equipo
          </span>
          <h1 className="h-section">Trabaja <span className="txt-blue">con nosotros</span>.</h1>
          <p className="section-sub">Somos un equipo pequeño con presencia real en Oaxaca y Puebla. Si te gusta el trato directo con clientes y quieres crecer con nosotros, escríbenos.</p>
        </div>
      </header>

      <div className="container">
        <div className="doc">
          <h2>Por qué Sumafin</h2>
          <ul>
            <li>Equipo cercano, con sucursales propias en Oaxaca y Puebla — no un call center.</li>
            <li>Trato directo con clientes reales, no solo con expedientes.</li>
            <li>Crecimiento dentro de una financiera regional en expansión.</li>
            <li>Cultura sin letras chiquitas: lo mismo que le prometemos al cliente, te lo prometemos a ti.</li>
          </ul>

          <h2>¿Cómo aplicar?</h2>
          <p>
            Por ahora no publicamos vacantes específicas en este sitio, pero si quieres formar parte del equipo, envíanos tu CV y cuéntanos en qué área te gustaría colaborar. Te contactaremos cuando haya una posición que encaje con tu perfil.
          </p>

          <div className="callout">
            <strong>Áreas donde más solicitamos talento</strong>
            Asesoría y ventas · Originación y análisis de crédito · Atención a clientes (UNE) · Operaciones y cobranza
          </div>

          <div style={{ marginTop: 28 }}>
            <a className="btn btn-primary" href="mailto:empleo@sumafin.mx?subject=Bolsa%20de%20trabajo%20Sumafin">
              <Icon name="mail" size={16} /> Enviar mi CV a empleo@sumafin.mx
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <AlertaBanner />
      <Nav />
      <TrabajoContent />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
