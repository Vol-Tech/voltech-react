import React, { useState } from 'react';

// Datos simulados de órdenes (ahora incluyen el detalle de los productos comprados)
const ordenesIniciales = [
  { 
    id: 'ORD-001', cliente: 'Juan Pérez', rut: '18.123.456-7', fecha: '2026-10-10', total: 45990, estado: 'Entregado',
    detalle: [
      { nombre: 'Cable USB-C a Lightning 2m Blanco Apple', cantidad: 1, precio: 29990 },
      { nombre: 'Mouse Inalámbrico M280 - Negro', cantidad: 1, precio: 16000 }
    ]
  },
  { 
    id: 'ORD-002', cliente: 'María López', rut: '15.987.654-3', fecha: '2026-10-12', total: 117990, estado: 'En camino',
    detalle: [
      { nombre: 'Monitor Portátil ASUS 15,6 FHD', cantidad: 1, precio: 117990 }
    ]
  },
  { 
    id: 'ORD-003', cliente: 'Carlos Ruiz', rut: '20.555.444-K', fecha: '2026-10-13', total: 14690, estado: 'Pendiente',
    detalle: [
      { nombre: 'Mouse Bluetooth Inalámbrico Slimblade 2.0', cantidad: 1, precio: 14690 }
    ]
  },
];

const ListadoOrdenes = () => {
  const [ordenes, setOrdenes] = useState(ordenesIniciales);
  
  // Estados para el Modal de la Boleta
  const [showModal, setShowModal] = useState(false);
  const [boletaActiva, setBoletaActiva] = useState(null);

  // Función para cambiar el estado de la orden
  const handleCambiarEstado = (id) => {
    const nuevosEstados = {
      'Pendiente': 'En camino',
      'En camino': 'Entregado',
      'Entregado': 'Pendiente'
    };

    setOrdenes(ordenes.map(orden => 
      orden.id === id ? { ...orden, estado: nuevosEstados[orden.estado] } : orden
    ));
  };

  const getColorEstado = (estado) => {
    switch(estado) {
      case 'Entregado': return 'bg-success';
      case 'En camino': return 'bg-primary';
      case 'Pendiente': return 'bg-warning text-dark';
      default: return 'bg-secondary';
    }
  };

  // Funciones para manejar la vista de la boleta
  const abrirBoleta = (orden) => {
    setBoletaActiva(orden);
    setShowModal(true);
  };

  const cerrarBoleta = () => {
    setShowModal(false);
    setBoletaActiva(null);
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark m-0">📋 Gestión de Órdenes</h2>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle border">
          <thead className="table-dark">
            <tr>
              <th>ID Orden</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden) => (
              <tr key={orden.id}>
                <td className="fw-bold text-primary">{orden.id}</td>
                <td>{orden.cliente}</td>
                <td>{orden.fecha}</td>
                <td className="fw-bold">${orden.total.toLocaleString('es-CL')}</td>
                <td>
                  <span className={`badge ${getColorEstado(orden.estado)}`}>
                    {orden.estado}
                  </span>
                </td>
                <td className="text-center">
                  <button 
                    className="btn btn-sm btn-outline-dark me-2"
                    onClick={() => abrirBoleta(orden)}
                  >
                    👁️ Ver Boleta
                  </button>
                  <button 
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleCambiarEstado(orden.id)}
                  >
                    🔄 Cambiar Estado
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL DE LA BOLETA / FACTURA */}
      {showModal && boletaActiva && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content shadow-lg">
              
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title fw-bold">🧾 Detalle de Boleta: {boletaActiva.id}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={cerrarBoleta}></button>
              </div>

              <div className="modal-body p-4">
                {/* Cabecera de la boleta */}
                <div className="row mb-4 border-bottom pb-3">
                  <div className="col-sm-6">
                    <h6 className="mb-1 text-muted">Datos del Cliente:</h6>
                    <div className="fw-bold fs-5">{boletaActiva.cliente}</div>
                    <div>RUT: {boletaActiva.rut}</div>
                  </div>
                  <div className="col-sm-6 text-sm-end mt-3 mt-sm-0">
                    <h6 className="mb-1 text-muted">Información de Venta:</h6>
                    <div><strong>Fecha:</strong> {boletaActiva.fecha}</div>
                    <div><strong>Estado:</strong> <span className={`badge ${getColorEstado(boletaActiva.estado)}`}>{boletaActiva.estado}</span></div>
                    <div><strong>Método de pago:</strong> Tarjeta de Crédito / Webpay</div>
                  </div>
                </div>

                {/* Detalle de productos */}
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead className="table-light">
                      <tr>
                        <th>Producto</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-end">Precio Unit.</th>
                        <th className="text-end">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {boletaActiva.detalle.map((item, index) => (
                        <tr key={index}>
                          <td>{item.nombre}</td>
                          <td className="text-center">{item.cantidad}</td>
                          <td className="text-end">${item.precio.toLocaleString('es-CL')}</td>
                          <td className="text-end fw-bold">${(item.cantidad * item.precio).toLocaleString('es-CL')}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3" className="text-end fw-bold fs-5 border-0 pt-3">TOTAL A PAGAR:</td>
                        <td className="text-end fw-bold fs-5 border-0 pt-3 text-primary">
                          ${boletaActiva.total.toLocaleString('es-CL')}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="modal-footer bg-light">
                <button type="button" className="btn btn-secondary" onClick={cerrarBoleta}>
                  Cerrar
                </button>
                <button type="button" className="btn btn-success" onClick={() => window.print()}>
                  🖨️ Imprimir Boleta
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListadoOrdenes;