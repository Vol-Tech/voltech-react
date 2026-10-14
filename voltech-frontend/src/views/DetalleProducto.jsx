import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { categorias, obtenerProductoPorId, obtenerProductos } from '../services/api'
import { useCarrito } from '../context/CarritoContext'

export default function DetalleProducto() {
  const { productoId } = useParams()
  const { agregar } = useCarrito()
  
  const [producto, setProducto] = useState(null)
  const [similares, setSimilares] = useState([])
  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    obtenerProductoPorId(productoId).then((prod) => {
      setProducto(prod)
      if (prod && prod.categoria) {
        obtenerProductos().then((todos) => {
          const filtrados = todos
            .filter((p) => p.categoria.toLowerCase() === prod.categoria.toLowerCase() && Number(p.id) !== Number(prod.id))
            .slice(0, 3)
          setSimilares(filtrados)
        })
      }
    })
  }, [productoId])

  if (!producto) {
    return (
      <main className="d-flex flex-column justify-content-center align-items-center my-5 py-5">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3 text-muted">Cargando detalles del producto...</p>
      </main>
    )
  }

  const categoria = categorias.find((cat) => cat.id.toLowerCase() === producto.categoria.toLowerCase()) || { nombre: producto.categoria }

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
          <img className="foto-principal" src={producto.imagen_url} alt={producto.nombre} />

          <div className="detalle-mini-foto-container">
            <img src={producto.imagen_url} alt={`${producto.nombre} foto 1`} />
            <img src={producto.imagen_url} alt={`${producto.nombre} foto 2`} />
            <img src={producto.imagen_url} alt={`${producto.nombre} foto 3`} />
          </div>
        </div>

        <div className="detalle-container">

          <div className="nombre-precio">
            <h2>{producto.nombre}</h2>
            <h2>${Number(producto.precio).toLocaleString('es-CL')}</h2>
          </div>

          <p className="parrafo-producto">
            {producto.descripcion || 'Descripción disponible próximamente.'}
          </p>

          <div className="cantidad-producto">
            <h3>Cantidad</h3>

            <select 
              name="numeros" 
              id="numeros"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              disabled={Number(producto.stock) === 0}
            >
              {Number(producto.stock) > 0 ? (
                Array.from({ length: Number(producto.stock) }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))
              ) : (
                <option value="0">Sin stock</option>
              )}
            </select>
          </div>

          <button 
            onClick={() => agregar(producto, cantidad)}
            disabled={Number(producto.stock) === 0}
          >
            {Number(producto.stock) > 0 ? 'Agregar al Carrito' : 'Agotado'}
          </button>

        </div>
      </div>

      <h2 className="titulo-productos">Productos similares</h2>

      <div className="producto-contenedor">
        {similares.map((similar) => (
          <div className="producto" key={similar.id}>
            <img src={similar.imagen_url} alt={similar.nombre} />
            <Link to={`/categorias/${similar.categoria}/${similar.id}`}>
              <span className="nombre-producto">{similar.nombre}</span>
            </Link>
          </div>
        ))}
      </div>

    </main>
  )
}