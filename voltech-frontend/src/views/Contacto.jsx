export default function Contacto() {
  return (
    <main className="main-contacto">

      <img src="img/VolTech Logo - Sin texto.png" alt="main-logo" />

      <form className="form-container" id="formulario">

        <h2>Formulario de Contactos</h2>
        <h4>NOMBRE COMPLETO</h4>
        <input type="nombre" id="#" required />
        <h4>CORREO</h4>
        <input type="correo" id="#" required />
        <h4>CONTENIDO</h4>
        <input type="contenido" id="#" required />

        <button type="submit">ENVIAR</button>
      </form>

    </main>
  )
}