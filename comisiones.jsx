// Página de contenido: Comisiones, tasa y CAT

function ComisionesContent() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="dot-grid"><span /><span /><span /><span /></span>
            Transparencia
          </span>
          <h1 className="h-section">Comisiones, <span className="txt-blue">tasa y CAT</span>.</h1>
          <p className="section-sub">Las condiciones de nuestros productos, claras y sin letras chiquitas — antes de que firmes cualquier contrato.</p>
          <p className="page-updated">Última actualización: septiembre 2026</p>
        </div>
      </header>

      <div className="container">
        <div className="doc">
          <h2>Nuestras condiciones</h2>
          <table>
            <thead>
              <tr><th>Concepto</th><th>Detalle</th></tr>
            </thead>
            <tbody>
              <tr><td>Tasa de interés</td><td>Desde 11.9% anual fija*</td></tr>
              <tr><td>Comisión por apertura</td><td>2.5% sobre el monto financiado</td></tr>
              <tr><td>Comisión por pago anticipado</td><td>No aplica</td></tr>
              <tr><td>Enganche mínimo (crédito)</td><td>20% del valor del vehículo</td></tr>
              <tr><td>Plazo</td><td>12 a 60 meses</td></tr>
              <tr><td>Monto máximo</td><td>Hasta $1,500,000 MXN</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: "var(--ink-3)" }}>*La tasa final depende de tu perfil crediticio, el monto y el plazo solicitados. Te la confirmamos antes de firmar cualquier contrato.</p>

          <h2>¿Qué es el CAT?</h2>
          <p>
            El Costo Anual Total (CAT) es el indicador que incluye la tasa de interés, las comisiones y los gastos asociados a tu crédito, expresado como un porcentaje anual. Te sirve para comparar de forma justa el costo real de un financiamiento entre distintas instituciones, más allá de la tasa de interés por sí sola.
          </p>
          <div className="callout">
            <strong>CAT promedio informativo</strong>
            El CAT varía según el monto, el plazo y el perfil del cliente. Sumafin te informa tu CAT específico antes de la firma de cualquier contrato, en cumplimiento de la normatividad de la CONDUSEF. Este porcentaje es informativo y no representa un costo definitivo.
          </div>

          <h2>Transparencia y regulación</h2>
          <p>
            <strong>Sumafin Servicios Financieros, S.A. de C.V., SOFOM, E.N.R.</strong> — Institución registrada ante la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF) en el Registro de Prestadores de Servicios Financieros (SIPRES). Supervisada por la Comisión Nacional Bancaria y de Valores (CNBV) como Sociedad Financiera de Objeto Múltiple, Entidad No Regulada.
          </p>
          <p>
            El otorgamiento de crédito o arrendamiento está sujeto a análisis y aprobación. Las condiciones finales de tu producto quedan establecidas en el contrato correspondiente.
          </p>

          <h2>Verifica nuestro registro</h2>
          <p>
            Puedes consultar el registro de Sumafin en el{" "}
            <a href="https://webapps.condusef.gob.mx/SIPRES_N/jsp/pub/index.jsp" target="_blank" rel="noreferrer noopener">portal público del SIPRES</a>{" "}
            y en el{" "}
            <a href="https://www.buro.gob.mx" target="_blank" rel="noreferrer noopener">Buró de Entidades Financieras</a>. Si quieres entender mejor qué es y cómo usarlo, visita nuestra página{" "}
            <a href="buro.html">¿Qué es el Buró?</a>
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
      <ComisionesContent />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
