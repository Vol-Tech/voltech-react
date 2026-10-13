import React, { useState, useEffect } from 'react';
import { obtenerProductos, borrarProducto, crearProd, actualizarProducto, categorias } from '../services/api';

const ListadoProductos = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);

  // Estado para controlar los campos del formulario (adaptado a NeonDB)
  const [formData, setFormData] = useState({
    id: null,
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: 'Cables',
    imagen_url: ''
  });

  // Función asíncrona para recargar la tabla desde NeonDB
  const cargarProductos = async () => {
    const datos = await obtenerProductos();
    setListaProductos(datos);
  };

  // Cargar productos al abrir la vista
  useEffect(() => {
    cargarProductos();
  }, []);

  // Manejar eliminación de productos en la BD
  const handleEliminar = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmar) {
      try {
        await borrarProducto(id);
        await cargarProductos();
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  // Abrir modal para CREAR un nuevo producto
  const handleAbrirCrear = () => {
    setModoEdicion(false);
    setFormData({
      id: null,
      nombre: '',
      descripcion: '',
      precio: '',
      stock: '',
      categoria: 'Cables',
      imagen_url: 'https://i.imgur.com/O4NVYbh.jpg'
    });
    setShowModal(true);
  };

  // Abrir modal para EDITAR un producto existente
  const handleAbrirEditar = (producto) => {
    setModoEdicion(true);
    setFormData({
      id: producto.id,
      nombre: producto.nombre,
      descripcion: producto.descripcion || '',
      precio: Number(producto.precio),
      stock: producto.stock,
      categoria: producto.categoria,
      imagen_url: producto.imagen_url || producto.imagen || ''
    });
    setShowModal(true);
  };

  // Guardar los datos en NeonDB (Creación o Edición)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      nombre: formData.nombre,
      descripcion: formData.descripcion || `Producto ${formData.nombre}`,
      precio: Number(formData.precio),
      stock: Number(formData.stock),
      categoria: formData.categoria,
      imagen_url: formData.imagen_url || 'https://i.imgur.com/O4NVYbh.jpg'
    };

    try {
      if (modoEdicion) {
        await actualizarProducto(formData.id, payload);
      } else {
        await crearProducto(payload);
      }

      // Actualizamos la vista consultando los datos frescos de la BD
      await cargarProductos();
      setShowModal(false);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark m-0">📦 Gestión de Productos</h2>
        <button className="btn btn-success fw-bold shadow-sm" onClick={handleAbrirCrear}>
          + Nuevo Producto
        </button>
      </div>

      {/* TABLA DE PRODUCTOS */}
      <div className="table-responsive">
        <table className="table table-hover align-middle border">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaProductos.length > 0 ? (
              listaProductos.map((prod) => (
                <tr key={prod.id}>
                  <td className="fw-bold">{prod.id}</td>
                  <td>
                    <img 
                      src={prod.imagen_url} 
                      alt={prod.nombre} 
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                      className="rounded border"
                    />
                  </td>
                  <td>{prod.nombre}</td>
                  <td className="text-capitalize">{prod.categoria}</td>
                  <td>${Number(prod.precio).toLocaleString('es-CL')}</td>
                  <td>
                    <span className={`badge ${prod.stock > 5 ? 'bg-success' : 'bg-danger'}`}>
                      {prod.stock} u.
                    </span>
                  </td>
                  <td className="text-center">
                    <button 
                      className="btn btn-sm btn-primary me-2 shadow-sm"
                      onClick={() => handleAbrirEditar(prod)}
                    >
                      ✏️ Editar
                    </button>
                    <button 
                      className="btn btn-sm btn-danger shadow-sm" 
                      onClick={() => handleEliminar(prod.id)}
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4">
                  No hay productos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL FORMULARIO (CREAR Y EDITAR) */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title fw-bold">
                  {modoEdicion ? '✏️ Editar Producto' : '➕ Nuevo Producto'}
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-bold">Nombre del Producto</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required 
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Descripción</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.descripcion}
                      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                      placeholder="Descripción breve del producto"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Precio ($)</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        value={formData.precio}
                        onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Stock</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        value={formData.stock}
                        onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                        required 
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Categoría</label>
                    <select 
                      className="form-select text-capitalize"
                      value={formData.categoria}
                      onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                    >
                      {categorias.map((cat) => (
                        <option key={cat.id} value={cat.nombre}>
                          {cat.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">URL de Imagen</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.imagen_url}
                      onChange={(e) => setFormData({ ...formData, imagen_url: e.target.value })}
                      placeholder="https://i.imgur.com/ejemplo.jpg"
                      required 
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-success fw-bold">
                    {modoEdicion ? 'Guardar Cambios' : 'Crear Producto'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListadoProductos;