// Página de contenido: ¿Qué es el Buró de Entidades Financieras?

function BuroContent() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="dot-grid"><span /><span /><span /><span /></span>
            Transparencia
          </span>
          <h1 className="h-section">¿Qué es el <span className="txt-blue">Buró de Entidades Financieras</span>?</h1>
          <p className="section-sub">Una herramienta pública para que compares instituciones financieras y conozcas más sobre Sumafin antes de contratar.</p>
          <p className="page-updated">Última actualización: septiembre 2026</p>
        </div>
      </header>

      <div className="container">
        <div className="doc">
          <h2>¿Qué es?</h2>
          <p>
            El Buró de Entidades Financieras es una plataforma pública operada por la CONDUSEF que concentra información sobre las instituciones financieras que operan en México: bancos, SOFOMES, aseguradoras, Afores y más. Ahí puedes consultar los productos que ofrece cada institución, sus comisiones y tasas, las cláusulas relevantes de sus contratos, las reclamaciones que han recibido de sus clientes y las sanciones que les han impuesto las autoridades.
          </p>

          <h2>¿Para qué te sirve?</h2>
          <p>
            Te permite comparar entidades financieras antes de contratar un producto, y también conocer más a fondo los productos que ya tienes contratados con nosotros. Es una herramienta pensada para que tomes decisiones informadas sobre tu crédito o arrendamiento automotriz.
          </p>

          <h2>¿Qué información encuentras de Sumafin?</h2>
          <ul>
            <li>Nuestros datos de registro: <strong>Sumafin Servicios Financieros, S.A. de C.V., SOFOM, E.N.R.</strong></li>
            <li>Las comisiones y tasas de nuestros productos de crédito y arrendamiento automotriz.</li>
            <li>Las reclamaciones que hemos recibido y cómo las hemos resuelto.</li>
            <li>Las cláusulas relevantes de nuestros contratos de adhesión.</li>
          </ul>

          <div className="callout">
            <strong>Consulta nuestro registro</strong>
            Puedes verificar el registro de Sumafin directamente en el portal público del{" "}
            <a href="https://www.buro.gob.mx" target="_blank" rel="noreferrer noopener">Buró de Entidades Financieras</a>{" "}
            o en el{" "}
            <a href="https://webapps.condusef.gob.mx/SIPRES_N/jsp/pub/index.jsp" target="_blank" rel="noreferrer noopener">SIPRES</a>.
          </div>

          <h2>¿Quién regula a Sumafin?</h2>
          <p>
            Operamos como Sociedad Financiera de Objeto Múltiple, Entidad No Regulada (SOFOM, E.N.R.), supervisada por la Comisión Nacional Bancaria y de Valores (CNBV) en materia de prevención de lavado de dinero, y registrados ante la CONDUSEF en el Registro de Prestadores de Servicios Financieros (SIPRES).
          </p>

          <h2>¿Tienes una queja o aclaración?</h2>
          <p>
            Si tienes una duda que no hemos resuelto a tu satisfacción, puedes escribir a nuestra Unidad Especializada de Atención (UNE) a{" "}
            <a href="mailto:une@sumafin.mx">une@sumafin.mx</a>, o acudir a la CONDUSEF al 800 999 8080 /{" "}
            <a href="https://www.condusef.gob.mx" target="_blank" rel="noreferrer noopener">condusef.gob.mx</a>.
          </p>
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
      <BuroContent />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
