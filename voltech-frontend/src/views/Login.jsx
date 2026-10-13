export default function Login() {
  return (
    <main className="main-login">

      <img src="img/VolTech Logo - Sin texto.png" alt="main-logo" />

      <form className="form-container" id="formulario">

        <h3>Inicio de sesión</h3>
        <h4>Correo</h4>
        <input type="text" id="regCorreo" placeholder="Ingrese correo (ej: usuario@duoc.cl)" required />
        <h4>Constraseña</h4>
        <input type="password" id="regContraseña" placeholder="Ingrese contraseña" required />

        <button type="submit">Iniciar Sesión</button>
      </form>

    </main>

  )
}