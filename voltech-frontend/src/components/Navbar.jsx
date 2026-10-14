import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCarrito } from '../context/CarritoContext'

export default function Navbar() {
  const { total } = useCarrito()
  const [menuUsuario, setMenuUsuario] = useState(false)
  const menu = () => { setMenuUsuario(!menuUsuario) }

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
          <li><Link to="/categorias">Categorias</Link></li>

          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>

          <li className="usuario-contenedor">
            <div>
              <button className="boton-usuario"
                onClick={menu}
              ><a className="icono-usuario" href="#" aria-label="Usuario"></a>
              </button>
              {
                menuUsuario && (
                  <ul className="menu-registro">
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                    <li><Link to="/registro">Registrarse</Link></li>
                  </ul>
                )
              }
            </div>

          </li>

          <li><Link className="icono-carrito" to="/carrito" aria-label="Carrito"></Link></li>
          <li>${total.toLocaleString('es-CL')}</li>
        </ul>
      </nav>
    </header>
  )
}