import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="foot-container">
        <div className="foot-info">
          <ul>
            <li><a href="#">Categoria X</a></li>
            <li><a href="#">Categoria Y</a></li>
            <li><a href="#">Categoria Z</a></li>
            <li><p>Estamos en Contacto!</p></li>
            <li>
              <Link to="/admin/usuarios" className="link-admin">
                Panel Admin
              </Link>
            </li>
          </ul>
        </div>

        <div className="foot-tab">
          <ul>
            <li><i className="icono-visa"></i></li>
            <li><i className="icono-visa"></i></li>
            <li><i className="icono-visa"></i></li>
            <li>
              <label htmlFor="correo-suscripcion" className="visually-hidden">
                Correo
              </label>
              <input id="correo-suscripcion" type="email" placeholder="Ingresar correo" />
              <button>Suscribirse</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}