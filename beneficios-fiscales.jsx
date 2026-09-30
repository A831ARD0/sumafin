// Página de contenido: Beneficios fiscales del arrendamiento

function BeneficiosFiscalesContent() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="dot-grid"><span /><span /><span /><span /></span>
            Para empresas y profesionistas
          </span>
          <h1 className="h-section">Beneficios <span className="txt-blue">fiscales</span> del arrendamiento.</h1>
          <p className="section-sub">Por qué rentar tu flotilla o tu auto de trabajo puede costarte menos que comprarlo, una vez que metes al SAT en la cuenta.</p>
          <p className="page-updated">Última actualización: septiembre 2026</p>
        </div>
      </header>

      <div className="container">
        <div className="doc">
          <h2>¿Por qué el arrendamiento es fiscalmente eficiente?</h2>
          <p>
            Cuando compras un auto con crédito, solo puedes deducir la depreciación del vehículo (con un tope anual que marca la Ley del ISR) y los intereses del financiamiento. Cuando lo arrendas con Sumafin, la renta mensual completa se convierte en un gasto deducible para tu actividad empresarial o profesional — sin los límites de depreciación que aplican a la compra.
          </p>

          <div className="callout">
            <strong>Este contenido es informativo</strong>
            No sustituye la asesoría de tu contador. Los porcentajes y topes de deducibilidad los define el SAT y pueden cambiar; te recomendamos confirmar tu caso específico con tu asesor fiscal antes de decidir.
          </div>

          <h2>¿Qué puedes deducir?</h2>
          <table>
            <thead>
              <tr><th>Concepto</th><th>Con arrendamiento</th></tr>
            </thead>
            <tbody>
              <tr><td>Renta mensual</td><td>Deducible al 100% para ISR</td></tr>
              <tr><td>IVA de la renta</td><td>Acreditable</td></tr>
              <tr><td>Mantenimiento y seguro (si están incluidos en tu plan)</td><td>Deducibles como parte de la renta</td></tr>
              <tr><td>Depreciación del vehículo</td><td>No aplica — no es tu activo</td></tr>
            </tbody>
          </table>

          <h2>ISR: deducción de la renta</h2>
          <p>
            La renta que pagas por el arrendamiento de tu auto se deduce como gasto del ejercicio, siempre que el vehículo se use para tu actividad empresarial o profesional y cuentes con el comprobante fiscal (CFDI) correspondiente. A diferencia de la compra, no hay un tope de depreciación anual que limite cuánto puedes deducir.
          </p>

          <h2>IVA acreditable</h2>
          <p>
            El IVA que pagas sobre la renta mensual es acreditable contra el IVA que trasladas en tus propias ventas o servicios, siempre que el vehículo esté estrictamente relacionado con tu actividad económica.
          </p>

          <h2>Requisitos para deducir correctamente</h2>
          <ul>
            <li>Contar con el CFDI de cada renta a nombre de tu empresa o actividad profesional.</li>
            <li>Que el vehículo se use para tu actividad empresarial (no para uso personal).</li>
            <li>Registrar la renta en tu contabilidad dentro del ejercicio fiscal correspondiente.</li>
            <li>Conservar el contrato de arrendamiento vigente con Sumafin.</li>
          </ul>

          <h2>¿A quién le conviene más?</h2>
          <p>
            El arrendamiento suele convenir más a empresas y profesionistas con actividad comprobable que buscan optimizar su carga fiscal y renovar su flotilla cada 2–4 años sin preocuparse por la reventa. Si tu prioridad es ser dueño del vehículo desde el primer día, el <a href={homeHref("#productos")}>crédito automotriz</a> puede ser la mejor opción — sin los beneficios fiscales de la renta, pero con el auto como tu activo.
          </p>

          <div className="callout">
            <strong>¿Quieres calcular tu caso?</strong>
            Cuéntale a un asesor tu actividad y el uso que le darás al vehículo, y te ayudamos a comparar el costo real de comprar vs. arrendar con Sumafin.
          </div>

          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href={homeHref("#cotiza")}>
              Solicitar arrendamiento <Icon name="arrow-right" size={14} stroke={2} />
            </a>
            <a className="btn btn-whatsapp" href="https://wa.me/5219511234567" target="_blank" rel="noreferrer noopener">
              <Icon name="whatsapp" size={16} /> Preguntar a un asesor
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
      <BeneficiosFiscalesContent />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
