import { useParams, Link } from 'react-router-dom'
import { categorias, obtenerProductoPorId, obtenerProductosSimilares } from '../data/productos'

export default function DetalleProducto() {
  const { productoId } = useParams()
  const producto = obtenerProductoPorId(productoId)

  const categoria = categorias.find((cat) => cat.id === producto.categoria)
  const similares = obtenerProductosSimilares(producto)

  return (
    <main>

      <ul className="ruta">
        <li><Link to="/">Home &gt;</Link></li>
        <li><Link to="/categorias">Categorías &gt;</Link></li>
        <li><Link to={`/categorias/${producto.categoria}`}>{categoria.nombre} &gt;</Link></li>
        <li>{producto.nombre}</li>
      </ul>

      <div className="detalle-main-container">

        <div className="foto-detalle-producto-container">
          <img className="foto-principal" src={producto.imagen} alt={producto.nombre} />

          <div className="detalle-mini-foto-container">
            <img src={producto.imagen} alt={`${producto.nombre} foto 1`} />
            <img src={producto.imagen} alt={`${producto.nombre} foto 2`} />
            <img src={producto.imagen} alt={`${producto.nombre} foto 3`} />
          </div>
        </div>

        <div className="detalle-container">

          <div className="nombre-precio">
            <h2>{producto.nombre}</h2>
            <h2>${producto.precio.toLocaleString('es-CL')}</h2>
          </div>

          <p className="parrafo-producto">
            {producto.descripcion || 'Descripción disponible próximamente.'}
          </p>

          <div className="cantidad-producto">
            <h3>Cantidad</h3>

            <select name="numeros" id="numeros">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <button>Agregar al Carrito</button>

        </div>
      </div>

      <h2 className="titulo-productos">Productos similares</h2>

      <div className="producto-contenedor">
        {similares.map((similar) => (
          <div className="producto" key={similar.id}>
            <img src={similar.imagen} alt={similar.nombre} />
            <Link to={`/categorias/${similar.categoria}/${similar.id}`}>
              <span className="nombre-producto">{similar.nombre}</span>
            </Link>
          </div>
        ))}
      </div>

    </main>
  )
}