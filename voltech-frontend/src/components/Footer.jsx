import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="foot-container">
        <div className="foot-info">
          <ul>
            <li><Link to="/categorias/cables">Categoria Cables</Link></li>
            <li><Link to="/categorias/mouse">Categoria Mouse</Link></li>
            <li><Link to="/categorias/monitores">Categoria Monitor</Link></li>
            <li><p>Estamos en Contacto!</p></li>
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