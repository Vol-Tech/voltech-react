import { Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'

export default function ProductCard({ producto, clase = 'producto-oferta' }) {
  const { agregar } = useCarrito()

  return (
    <div className={clase}>
      <img src={producto.imagen} alt={producto.nombre} />
      <Link to={`/categorias/${producto.categoria}/${producto.id}`}>
        <span className="nombre-producto">{producto.nombre}</span>
      </Link>
      <p>${producto.precio.toLocaleString('es-CL')}</p>
      <button onClick={() => agregar(producto)}>Añadir</button>
    </div>
  )
}