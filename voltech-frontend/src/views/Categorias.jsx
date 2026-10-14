import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categorias, obtenerProductos } from '../services/api'

export default function Categorias() {
  const { id } = useParams()
  const categoriaId = id || categorias[0].id
  const categoriaActual = categorias.find((cat) => cat.id.toLowerCase() === categoriaId.toLowerCase()) || categorias[0]
  
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setCargando(true)
    obtenerProductos()
      .then((respuesta) => {
        const lista = Array.isArray(respuesta) ? respuesta : (respuesta?.data || [])
        const filtrados = lista.filter(
          (producto) => producto.categoria.toLowerCase() === categoriaId.toLowerCase()
        )
        setProductos(filtrados)
      })
      .finally(() => setCargando(false))
  }, [categoriaId])

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
        {cargando ? (
          <div className="d-flex flex-column justify-content-center align-items-center w-100 my-5">
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2 text-muted">Cargando categoría...</p>
          </div>
        ) : (
          productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} clase="producto" />
          ))
        )}
      </div>

    </main>
  )
}