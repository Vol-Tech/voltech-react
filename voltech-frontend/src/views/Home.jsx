import { useState, useEffect } from 'react'
import CarouselHome from '../components/CarouselHome'
import { obtenerProductos } from '../services/api'
import { useCarrito } from '../context/CarritoContext'

export default function Home() {
  const [productosDestacados, setProductosDestacados] = useState([])
  const { agregar } = useCarrito()

  useEffect(() => {
    obtenerProductos().then((datos) => setProductosDestacados(datos.slice(0, 4)))
  }, [])

  return (
    <main>
      <CarouselHome />
      <div className="titulo-index">
        <h1>Producto Destacado</h1>
        <h3>OFERTA</h3>
      </div>

      <div className="producto-contenedor">
        {productosDestacados.map((producto) => (
          <div className="producto-oferta" key={producto.id}>
            <img src={producto.imagen_url} alt={producto.nombre} />
            <a href="#">
              <span className="nombre-producto">{producto.nombre}</span>
            </a>
            <p>${Number(producto.precio).toLocaleString('es-CL')}</p>
            <button onClick={() => agregar(producto)}>Añadir</button>
          </div>
        ))}
      </div>
    </main>
  )
}