import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav className="nav-tab">
        <Link to="/">
          <img src="/img/VolTech Logo - Sin texto.png" alt="icono-tab" />
        </Link>

        <input type="checkbox" id="menu-habilitar" className="menu-habilitar" />
        <label htmlFor="menu-habilitar" className="menu-icono" aria-label="Abrir menú">
          <i className="bi bi-list"></i>
        </label>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>

          <li className="usuario-contenedor">
            <a className="icono-usuario" href="#" aria-label="Usuario"></a>
            <ul className="menu-registro">
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/registro">Registrarse</Link></li>
            </ul>
          </li>

          <li><a className="icono-carrito" href="#" aria-label="Carrito"></a></li>
        </ul>
      </nav>
    </header>
  )
}