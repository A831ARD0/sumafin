// Página de contenido: Términos de uso

function TerminosContent() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="dot-grid"><span /><span /><span /><span /></span>
            Legal
          </span>
          <h1 className="h-section">Términos de <span className="txt-blue">uso</span>.</h1>
          <p className="section-sub">Las condiciones que aplican al usar este sitio web. No sustituyen el contrato de crédito o arrendamiento que firmas con nosotros.</p>
          <p className="page-updated">Última actualización: septiembre 2026</p>
        </div>
      </header>

      <div className="container">
        <div className="doc">
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y usar este sitio web (sumafin.mx), operado por Sumafin Servicios Financieros, S.A. de C.V., SOFOM, E.N.R. ("Sumafin"), aceptas estos Términos de Uso. Si no estás de acuerdo, te pedimos no utilizar el sitio.
          </p>

          <h2>2. Objeto del sitio</h2>
          <p>
            Este sitio tiene fines informativos y de contacto. La información sobre tasas, plazos, montos y comisiones que aquí se muestra es de carácter orientativo y <strong>no constituye una oferta vinculante</strong>. El otorgamiento de cualquier crédito o arrendamiento está sujeto a evaluación y aprobación de Sumafin, y las condiciones finales quedan establecidas únicamente en el contrato que firmes con nosotros.
          </p>

          <h2>3. Uso permitido</h2>
          <p>Al usar este sitio, te comprometes a no:</p>
          <ul>
            <li>Usar el sitio con fines ilícitos o contrarios a estos términos.</li>
            <li>Intentar vulnerar la seguridad del sitio o acceder a información que no te corresponde.</li>
            <li>Usar sistemas automatizados (bots, scrapers) para extraer contenido del sitio sin autorización.</li>
            <li>Suplantar la identidad de Sumafin o de terceros al contactarnos a través de este sitio.</li>
          </ul>

          <h2>4. Propiedad intelectual</h2>
          <p>
            La marca Sumafin, su logotipo y los contenidos de este sitio (textos, imágenes, diseño) son propiedad de Sumafin Servicios Financieros, S.A. de C.V. o de sus licenciantes, y están protegidos por la legislación aplicable en materia de propiedad intelectual. No está permitida su reproducción total o parcial sin autorización previa.
          </p>

          <h2>5. Enlaces a sitios de terceros</h2>
          <p>
            Este sitio incluye enlaces a plataformas de terceros (como CONDUSEF, el Buró de Entidades Financieras o WhatsApp) para tu información y conveniencia. Sumafin no controla ni es responsable por el contenido o las políticas de esos sitios externos.
          </p>

          <h2>6. Protección de datos personales</h2>
          <p>
            Tratamos tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y a la normatividad aplicable a las SOFOM. Consulta el detalle de qué datos recabamos, para qué los usamos y cómo ejercer tus derechos ARCO en nuestro{" "}
            <a href="aviso.html">Aviso de Privacidad</a>.
          </p>

          <h2>7. Limitación de responsabilidad</h2>
          <p>
            Sumafin hace su mejor esfuerzo para que la información de este sitio esté actualizada y sea correcta, pero no garantiza que esté libre de errores en todo momento. Sumafin no será responsable por decisiones tomadas exclusivamente con base en la información de este sitio, sin haber confirmado las condiciones finales con un asesor.
          </p>

          <h2>8. Modificaciones</h2>
          <p>
            Podemos actualizar estos Términos de Uso en cualquier momento para reflejar cambios en nuestros servicios o en la normatividad aplicable. La fecha de la última actualización se indica al inicio de esta página.
          </p>

          <h2>9. Legislación aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia relacionada con este sitio se someterá a los tribunales competentes, sin perjuicio de tu derecho a acudir a la CONDUSEF como usuario de servicios financieros.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Si tienes dudas sobre estos Términos de Uso, escríbenos a{" "}
            <a href="mailto:hola@sumafin.mx">hola@sumafin.mx</a>.
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
      <TerminosContent />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
