import React, { useState } from 'react';
import { categorias as categoriasIniciales } from '../data/productos';

const ListadoCategorias = () => {
  const [listaCategorias, setListaCategorias] = useState(categoriasIniciales);
  const [showModal, setShowModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    imagen: ''
  });

  // Abrir modal para Crear
  const handleAbrirCrear = () => {
    setModoEdicion(false);
    setFormData({ id: '', nombre: '', imagen: '/img/Cable tipo C.png' });
    setShowModal(true);
  };

  // Abrir modal para Editar
  const handleAbrirEditar = (cat) => {
    setModoEdicion(true);
    setFormData({ ...cat });
    setShowModal(true);
  };

  // Eliminar categoría
  const handleEliminar = (id) => {
    if (window.confirm('¿Deseas eliminar esta categoría?')) {
      setListaCategorias(listaCategorias.filter((cat) => cat.id !== id));
    }
  };

  // Guardar (Crear o Editar)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (modoEdicion) {
      setListaCategorias(
        listaCategorias.map((cat) => (cat.id === formData.id ? formData : cat))
      );
    } else {
      const nuevoId = formData.nombre.toLowerCase().replace(/\s+/g, '-');
      setListaCategorias([...listaCategorias, { ...formData, id: nuevoId }]);
    }
    setShowModal(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark m-0">🏷️ Gestión de Categorías</h2>
        <button className="btn btn-success fw-bold shadow-sm" onClick={handleAbrirCrear}>
          + Nueva Categoría
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle border">
          <thead className="table-dark">
            <tr>
              <th>ID / Slug</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaCategorias.map((cat) => (
              <tr key={cat.id}>
                <td className="fw-bold text-muted">{cat.id}</td>
                <td>
                  <img
                    src={cat.imagen}
                    alt={cat.nombre}
                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                    className="rounded border bg-light p-1"
                  />
                </td>
                <td className="fw-bold text-dark">{cat.nombre}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-primary me-2 shadow-sm"
                    onClick={() => handleAbrirEditar(cat)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger shadow-sm"
                    onClick={() => handleEliminar(cat.id)}
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL CREAR / EDITAR */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title fw-bold">
                  {modoEdicion ? '✏️ Editar Categoría' : '➕ Nueva Categoría'}
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
                    <label className="form-label fw-bold">Nombre de la Categoría</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Ruta de Imagen</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.imagen}
                      onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
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
                    {modoEdicion ? 'Guardar Cambios' : 'Crear Categoría'}
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

export default ListadoCategorias;