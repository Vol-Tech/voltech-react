import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { obtenerProductos } from '../services/api'
import { useCarrito } from '../context/CarritoContext'

export default function Carrito() {
  const { items, total, cambiarCantidad, eliminar, vaciar } = useCarrito()
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setCargando(true)
    obtenerProductos()
      .then((respuesta) => {
        const lista = Array.isArray(respuesta) ? respuesta : (respuesta?.data || [])
        setProductos(lista)
      })
      .finally(() => setCargando(false))
  }, [])

  return (
    <main className="container py-4">
      <div className="row g-4">

        <section className="col-lg-6">
          <h2>Lista de productos</h2>
          <div className="producto-contenedor lista-carrito">
            {cargando ? (
              <div className="d-flex justify-content-center align-items-center w-100 my-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              </div>
            ) : (
              productos.map((producto) => (
                <ProductCard key={producto.id} producto={producto} clase="producto" />
              ))
            )}
          </div>
        </section>

        <section className="col-lg-6">
          <h2>Carrito de compras</h2>

          {items.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td><img src={item.imagen_url} alt={item.nombre} className="carrito-img" /></td>
                        <td>{item.nombre}</td>
                        <td>${Number(item.precio).toLocaleString('es-CL')}</td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.cantidad}</span>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(Number(item.precio) * item.cantidad).toLocaleString('es-CL')}</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => eliminar(item.id)}>
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="text-end">Total: ${Number(total).toLocaleString('es-CL')}</h4>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={vaciar}>Limpiar</button>
                <Link to="/checkout" className="btn btn-success">Comprar ahora</Link>
              </div>
            </>
          )}
        </section>

      </div>
    </main>
  )
}