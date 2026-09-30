// Página de contenido: Aviso de privacidad

function AvisoContent() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="dot-grid"><span /><span /><span /><span /></span>
            Legal
          </span>
          <h1 className="h-section">Aviso de <span className="txt-blue">privacidad</span>.</h1>
          <p className="section-sub">Cómo recabamos, usamos y protegemos tus datos personales al solicitar o contratar un producto con Sumafin.</p>
          <p className="page-updated">Última actualización: septiembre 2026</p>
        </div>
      </header>

      <div className="container">
        <div className="doc">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>Sumafin Servicios Financieros, S.A. de C.V., SOFOM, E.N.R.</strong> ("Sumafin"), con domicilio en Av. Universidad 1205, Col. Reforma, 68050, Oaxaca de Juárez, Oaxaca, es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento.
          </p>

          <h2>2. Datos personales que recabamos</h2>
          <p>Para evaluar y, en su caso, formalizar tu crédito o arrendamiento automotriz, podemos recabar:</p>
          <ul>
            <li>Datos de identificación: nombre, INE o pasaporte, CURP, RFC, fecha de nacimiento.</li>
            <li>Datos de contacto: domicilio, teléfono, correo electrónico.</li>
            <li>Datos laborales y patrimoniales: ingresos, antigüedad laboral, comprobantes de domicilio y de ingresos.</li>
            <li>Datos financieros y crediticios: historial en sociedades de información crediticia (buró de crédito), referencias.</li>
            <li>Para personas morales: acta constitutiva, poderes del representante legal y estados financieros.</li>
          </ul>
          <div className="callout">
            <strong>Datos financieros y patrimoniales</strong>
            Al tratarse de datos sensibles conforme a la ley, los usamos únicamente para evaluar tu solicitud de crédito o arrendamiento y darle seguimiento — nunca para fines distintos sin tu consentimiento.
          </div>

          <h2>3. Finalidades del tratamiento</h2>
          <p><strong>Finalidades primarias</strong> (necesarias para la relación contractual):</p>
          <ul>
            <li>Evaluar y responder tu solicitud de crédito o arrendamiento.</li>
            <li>Verificar tu identidad y consultar tu historial crediticio ante sociedades de información crediticia.</li>
            <li>Formalizar, administrar y dar seguimiento a tu contrato, incluyendo cobranza.</li>
            <li>Cumplir con obligaciones legales y regulatorias ante la CNBV y la CONDUSEF.</li>
          </ul>
          <p><strong>Finalidades secundarias</strong> (no indispensables, puedes oponerte sin que afecte la relación contractual):</p>
          <ul>
            <li>Enviarte información sobre nuevos productos o promociones de Sumafin.</li>
            <li>Fines estadísticos y de mejora en nuestros servicios.</li>
          </ul>

          <h2>4. Transferencias de datos</h2>
          <p>
            Tus datos pueden ser compartidos con sociedades de información crediticia (para consultar y reportar tu historial), con las autoridades financieras (CNBV, CONDUSEF) cuando la normatividad lo requiera, y con las agencias automotrices o aseguradoras involucradas en tu operación, únicamente para las finalidades descritas en este aviso.
          </p>

          <h2>5. Derechos ARCO</h2>
          <p>
            Tienes derecho a Acceder, Rectificar y Cancelar tus datos personales, así como a Oponerte al uso de los mismos para finalidades secundarias (derechos ARCO). Para ejercerlos, escribe a nuestra Unidad Especializada de Atención (UNE) a{" "}
            <a href="mailto:une@sumafin.mx">une@sumafin.mx</a>, indicando tu nombre completo, el derecho que deseas ejercer y una copia de tu identificación oficial. Te daremos respuesta en los plazos que marca la ley.
          </p>

          <h2>6. Cómo limitar el uso de tus datos</h2>
          <p>
            Si deseas dejar de recibir promociones o comunicaciones con fines secundarios, puedes solicitarlo en cualquier momento escribiendo a{" "}
            <a href="mailto:une@sumafin.mx">une@sumafin.mx</a>.
          </p>

          <h2>7. Uso de cookies y tecnologías similares</h2>
          <p>
            Este sitio puede usar cookies y tecnologías similares para mejorar tu experiencia de navegación y para la verificación de seguridad en nuestros formularios (hCaptcha). Puedes deshabilitar las cookies desde la configuración de tu navegador, aunque algunas funciones del sitio podrían dejar de funcionar correctamente.
          </p>

          <h2>8. Cambios a este aviso</h2>
          <p>
            Podemos actualizar este Aviso de Privacidad ante cambios en nuestros servicios o en la normatividad aplicable. La fecha de la última actualización se indica al inicio de esta página. Te recomendamos consultarlo periódicamente.
          </p>

          <h2>9. Contacto</h2>
          <p>
            Para cualquier duda sobre este Aviso de Privacidad o el tratamiento de tus datos, contáctanos en{" "}
            <a href="mailto:une@sumafin.mx">une@sumafin.mx</a>. Si no obtienes una respuesta satisfactoria, tienes derecho a acudir al{" "}
            <a href="https://home.inai.org.mx" target="_blank" rel="noreferrer noopener">INAI</a> o a la{" "}
            <a href="https://www.condusef.gob.mx" target="_blank" rel="noreferrer noopener">CONDUSEF</a>.
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
      <AvisoContent />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
