import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'
import { creacionPedido, regiones_comunas } from '../services/api'
import { guardarUltimaOrden } from '../services/ordenes'

const listaRegiones = Object.keys(regiones_comunas)

export default function Checkout() {
  const { items, total, vaciar } = useCarrito()
  const navigate = useNavigate()
  const [pagando, setPagando] = useState(false)

  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    calle: '',
    departamento: '',
    region: '',
    comuna: '',
    indicaciones: '',
  })

  const comunas = datos.region ? regiones_comunas[datos.region] : []

  function manejarCambio(e) {
    const { name, value } = e.target
    if (name === 'region') {
      setDatos({ ...datos, region: value, comuna: '' })
    } else {
      setDatos({ ...datos, [name]: value })
    }
  }

  async function pagar(e) {
    e.preventDefault()
    setPagando(true)

    const numeroLocal = Date.now().toString().slice(-8)
    const ordenBase = {
      numero: numeroLocal,
      codigo: `ORDER${numeroLocal.slice(-5)}`,
      cliente: datos,
      items,
      total,
    }

    const datosBoleta = {
      cliente: datos,
      items: items.map((item) => ({ producto_id: item.id, cantidad: item.cantidad })),
      total: total,
    }

    try {
      const respuesta = await creacionPedido(datosBoleta)

      guardarUltimaOrden({
        ...ordenBase,
        numero: (respuesta && (respuesta.numero || respuesta.id)) || numeroLocal,
        estado: 'exitoso',
      })
      vaciar()
      navigate('/compra-exitosa')
    } catch (error) {
      console.error('No se pudo realizar el pago:', error)
      guardarUltimaOrden({ ...ordenBase, estado: 'error' })
      setPagando(false)
      navigate('/pago-error')
    }

    try {
      const respuesta = await creacionPedido(datosBoleta)

      guardarUltimaOrden({
        ...ordenBase,
        numero: (respuesta && (respuesta.numero || respuesta.id)) || numeroLocal,
        estado: 'exitoso',
      })
      vaciar()
      navigate('/compra-exitosa')
    } catch (error) {
      console.error('No se pudo realizar el pago:', error)
      guardarUltimaOrden({ ...ordenBase, estado: 'error' })
      setPagando(false)
      navigate('/pago-error')
    }
  }

  if (items.length === 0) {
    return (
      <main className="container py-4 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/categorias" className="btn btn-outline-primary mt-3">Ver categorías</Link>
      </main>
    )
  }

  return (
    <main className="container py-4">
      <div className="card shadow-sm mx-auto checkout-card">
        <div className="card-body">

          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h2 className="h4 mb-1">Carrito de compra</h2>
              <p className="text-muted mb-0">Completa la siguiente informacion</p>
            </div>
            <span className="badge bg-primary fs-6">
              Total a pagar: ${Number(total).toLocaleString('es-CL')}
            </span>
          </div>

          <div className="table-responsive mb-4">
            <table className="table table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.imagen_url} alt={item.nombre} className="carrito-img" /></td>
                    <td>{item.nombre}</td>
                    <td>${Number(item.precio).toLocaleString('es-CL')}</td>
                    <td>{item.cantidad}</td>
                    <td>${(Number(item.precio) * item.cantidad).toLocaleString('es-CL')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <form onSubmit={pagar}>

            <h3 className="h5">Información del cliente</h3>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="nombre" className="form-label">Nombre *</label>
                <input id="nombre" name="nombre" className="form-control" required
                  value={datos.nombre} onChange={manejarCambio} />
              </div>
              <div className="col-md-6">
                <label htmlFor="apellidos" className="form-label">Apellidos *</label>
                <input id="apellidos" name="apellidos" className="form-control" required
                  value={datos.apellidos} onChange={manejarCambio} />
              </div>
              <div className="col-12">
                <label htmlFor="correo" className="form-label">Correo *</label>
                <input id="correo" name="correo" type="email" className="form-control" required
                  value={datos.correo} onChange={manejarCambio} />
              </div>
            </div>

            <h3 className="h5">Dirección de entrega de los productos</h3>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="calle" className="form-label">Calle *</label>
                <input id="calle" name="calle" className="form-control" required
                  value={datos.calle} onChange={manejarCambio} />
              </div>
              <div className="col-md-6">
                <label htmlFor="departamento" className="form-label">Departamento (opcional)</label>
                <input id="departamento" name="departamento" className="form-control" placeholder="Ej: 989"
                  value={datos.departamento} onChange={manejarCambio} />
              </div>
              <div className="col-md-6">
                <label htmlFor="region" className="form-label">Región *</label>
                <select id="region" name="region" className="form-select" required
                  value={datos.region} onChange={manejarCambio}>
                  <option value="">Selecciona una región</option>
                  {listaRegiones.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="comuna" className="form-label">Comuna *</label>
                <select id="comuna" name="comuna" className="form-select" required
                  disabled={!datos.region} value={datos.comuna} onChange={manejarCambio}>
                  <option value="">Selecciona una comuna</option>
                  {comunas.map((comuna) => (
                    <option key={comuna} value={comuna}>{comuna}</option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="indicaciones" className="form-label">Indicaciones para la entrega (opcional)</label>
                <textarea id="indicaciones" name="indicaciones" className="form-control" rows={2}
                  placeholder="Ej: Color del porton, alguna referencia de la casa o despartamento"
                  value={datos.indicaciones} onChange={manejarCambio} />
              </div>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-success" disabled={pagando}>
                {pagando ? 'Procesando...' : 'Pagar ahora $' + Number(total).toLocaleString('es-CL')}
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  )
}