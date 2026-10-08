import { Link } from 'react-router-dom'

export default function ProductCard({ producto }) {
  return (
    <div className="producto-oferta">
      <img src={producto.imagen} alt={producto.nombre} />
      <Link to={`/productos/${producto.id}`}>
        <span className="nombre-producto">{producto.nombre}</span>
      </Link>
      <p>${producto.precio.toLocaleString('es-CL')}</p>
      <button>Añadir</button>
    </div>
  )
}