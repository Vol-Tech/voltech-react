import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categorias, obtenerProductosPorCategoria } from '../data/productos'

export default function Categorias() {
  const { id } = useParams()
  const categoriaId = id || categorias[0].id
  const categoriaActual = categorias.find((cat) => cat.id === categoriaId)
  const productos = obtenerProductosPorCategoria(categoriaId)

  return (
    <main className="container py-4">
      <div className="titulo-categoria">
        <h2>Categorias Disponibles</h2>
      </div>
      <div className="row g-3 justify-content-center mb-4">
        {categorias.map((cat) => (
          <div className="col-6 col-md-3" key={cat.id}>
            <Link to={`/categorias/${cat.id}`} className="card text-center text-decoration-none p-2">
              <img src={cat.imagen} alt={cat.nombre} className="categoria-img" />
              <span className="mt-2">{cat.nombre}</span>
            </Link>
          </div>
        ))}
      </div>

      <h2 className="mb-3">{categoriaActual.nombre}</h2>

      <div className="producto-contenedor">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} clase="producto" />
        ))}
      </div>

    </main>
  )
}