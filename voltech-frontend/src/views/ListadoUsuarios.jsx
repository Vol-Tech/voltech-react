import React, { useState } from 'react';

// Datos simulados de usuarios registrados
const usuariosIniciales = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@email.com', rol: 'Cliente', fechaRegistro: '2026-09-15' },
  { id: 2, nombre: 'María López', email: 'm.lopez@empresa.cl', rol: 'Cliente', fechaRegistro: '2026-10-02' },
  { id: 3, nombre: 'Admin VolTech', email: 'admin@voltech.cl', rol: 'Administrador', fechaRegistro: '2026-01-10' },
  { id: 4, nombre: 'Carlos Ruiz', email: 'cruiz99@mail.com', rol: 'Cliente', fechaRegistro: '2026-10-13' },
];

const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState(usuariosIniciales);
  const [showModal, setShowModal] = useState(false);

  // Estado para el formulario de nuevo usuario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    rol: 'Cliente'
  });

  const handleAbrirCrear = () => {
    setFormData({ nombre: '', email: '', rol: 'Cliente' });
    setShowModal(true);
  };

  const handleEliminar = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar a este usuario del sistema?')) {
      setUsuarios(usuarios.filter(user => user.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear el nuevo usuario simulado
    const nuevoUsuario = {
      id: usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1,
      nombre: formData.nombre,
      email: formData.email,
      rol: formData.rol,
      fechaRegistro: new Date().toISOString().split('T')[0] // Fecha actual en formato YYYY-MM-DD
    };

    setUsuarios([...usuarios, nuevoUsuario]);
    setShowModal(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark m-0">👥 Gestión de Usuarios</h2>
        <button className="btn btn-success fw-bold shadow-sm" onClick={handleAbrirCrear}>
          + Nuevo Usuario
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle border">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Correo Electrónico</th>
              <th>Rol</th>
              <th>Fecha de Registro</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((user) => (
                <tr key={user.id}>
                  <td className="fw-bold text-muted">#{user.id}</td>
                  <td className="fw-bold">{user.nombre}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`badge ${user.rol === 'Administrador' ? 'bg-danger' : 'bg-info text-dark'}`}>
                      {user.rol}
                    </span>
                  </td>
                  <td>{user.fechaRegistro}</td>
                  <td className="text-center">
                    <button 
                      className="btn btn-sm btn-danger shadow-sm"
                      onClick={() => handleEliminar(user.id)}
                      disabled={user.rol === 'Administrador'} // No se puede borrar a otro admin fácilmente
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  No hay usuarios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL PARA CREAR USUARIO */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title fw-bold">➕ Agregar Usuario Manualmente</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-bold">Nombre Completo</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Correo Electrónico</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Rol de Sistema</label>
                    <select 
                      className="form-select"
                      value={formData.rol}
                      onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                    >
                      <option value="Cliente">Cliente (Comprador)</option>
                      <option value="Administrador">Administrador (Acceso al Panel)</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-success fw-bold">
                    Crear Usuario
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

export default ListadoUsuarios;