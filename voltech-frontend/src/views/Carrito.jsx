import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { obtenerProductos } from '../data/productos'
import { useCarrito } from '../context/CarritoContext'

export default function Carrito() {
  const { items, total, cambiarCantidad, eliminar, vaciar } = useCarrito()
  const productos = obtenerProductos()

  return (
    <main className="container py-4">
      <div className="row g-4">

        <section className="col-lg-6">
          <h2>Lista de productos</h2>
          <div className="producto-contenedor">
            {productos.map((producto) => (
              <ProductCard key={producto.id} producto={producto} clase="producto" />
            ))}
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
                        <td><img src={item.imagen} alt={item.nombre} className="carrito-img" /></td>
                        <td>{item.nombre}</td>
                        <td>${item.precio.toLocaleString('es-CL')}</td>
                        <td>
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
                        </td>
                        <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
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

              <h4 className="text-end">Total: ${total.toLocaleString('es-CL')}</h4>

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