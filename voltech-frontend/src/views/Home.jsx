import { useState, useEffect } from 'react'
import CarouselHome from '../components/CarouselHome'
import { obtenerProductos } from '../services/api'
import ProductCard from '../components/ProductCard'
import { useCarrito } from '../context/CarritoContext'

export default function Home() {
  const [productosDestacados, setProductosDestacados] = useState([])
  const [cargando, setCargando] = useState(true)
  const { agregar } = useCarrito()

  useEffect(() => {
    setCargando(true)
    obtenerProductos()
      .then((respuesta) => {
        const lista = Array.isArray(respuesta) ? respuesta : (respuesta?.data || [])
        setProductosDestacados(lista.slice(0, 4))
      })
      .finally(() => setCargando(false)) 
  }, [])

  return (
    <main>
      <CarouselHome />
      <div className="titulo-index">
        <h1>Producto Destacado</h1>
        <h3>OFERTA</h3>
      </div>

      <div className="producto-contenedor">
        {cargando ? (
          <div className="d-flex flex-column justify-content-center align-items-center w-100 my-5">
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2 text-muted">Cargando productos...</p>
          </div>
        ) : (
          productosDestacados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} clase="producto" />
          ))
        )}
      </div>
    </main>
  )
}