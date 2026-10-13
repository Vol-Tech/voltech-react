import { Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'

export default function ProductCard({ producto, clase = 'producto-oferta' }) {
  const { agregar } = useCarrito();

  const precioFormateado = Number(producto.precio).toLocaleString('es-CL');

  return (
    <div className={clase}>
      <img src={producto.imagen_url} alt={producto.nombre} />

      <Link to={`/categorias/${producto.categoria}/${producto.id}`}>
        <span className="nombre-producto">{producto.nombre}</span>
      </Link>

      <p>${precioFormateado}</p>

      <button onClick={() => agregar(producto)}>Añadir</button>
    </div>
  );
}