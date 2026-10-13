import React, { useState } from 'react';
import ListadoProductos from './ListadoProductos';
import ListadoCategorias from './ListadoCategorias';
import ListadoOrdenes from './ListadoOrdenes';
import ListadoUsuarios from './ListadoUsuarios';

const AdminDashboard = () => {
  // Estado para controlar qué sección del admin está activa
  const [seccionActual, setSeccionActual] = useState('dashboard');

  return (
    <div className="container-fluid p-0 bg-light min-vh-100">
      {/* 1. Barra Superior del Admin */}
      <nav className="navbar navbar-dark bg-dark px-3 shadow-sm" style={{ height: '50px' }}>
        <span className="navbar-brand mb-0 h6 text-light">VolTech Admin Panel</span>
      </nav>

      <div className="row g-0">
        {/* 2. Menú Lateral (Sidebar Izquierdo) */}
        <div className="col-md-2 bg-white border-end min-vh-100 p-2 d-flex flex-column justify-content-between" style={{ minHeight: 'calc(100vh - 50px)' }}>
          <div>
            <ul className="nav flex-column gap-1">
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start border-0 rounded py-2 px-3 fw-bold ${seccionActual === 'dashboard' ? 'bg-primary text-white shadow-sm' : 'text-dark bg-transparent'}`}
                  onClick={() => setSeccionActual('dashboard')}
                >
                  🏠 Dashboard
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start border-0 rounded py-2 px-3 fw-bold ${seccionActual === 'ordenes' ? 'bg-primary text-white shadow-sm' : 'text-dark bg-transparent'}`}
                  onClick={() => setSeccionActual('ordenes')}
                >
                  📋 Órdenes
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start border-0 rounded py-2 px-3 fw-bold ${seccionActual === 'productos' ? 'bg-primary text-white shadow-sm' : 'text-dark bg-transparent'}`}
                  onClick={() => setSeccionActual('productos')}
                >
                  📦 Productos
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start border-0 rounded py-2 px-3 fw-bold ${seccionActual === 'categorias' ? 'bg-primary text-white shadow-sm' : 'text-dark bg-transparent'}`}
                  onClick={() => setSeccionActual('categorias')}
                >
                  🏷️ Categorías
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start border-0 rounded py-2 px-3 fw-bold ${seccionActual === 'usuarios' ? 'bg-primary text-white shadow-sm' : 'text-dark bg-transparent'}`}
                  onClick={() => setSeccionActual('usuarios')}
                >
                  👥 Usuarios
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start border-0 rounded py-2 px-3 fw-bold ${seccionActual === 'reportes' ? 'bg-primary text-white shadow-sm' : 'text-dark bg-transparent'}`}
                  onClick={() => setSeccionActual('reportes')}
                >
                  📊 Reportes
                </button>
              </li>
            </ul>

            <hr className="my-3 text-muted" />

            <ul className="nav flex-column">
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start border-0 rounded py-2 px-3 fw-bold ${seccionActual === 'perfil' ? 'bg-primary text-white shadow-sm' : 'text-dark bg-transparent'}`}
                  onClick={() => setSeccionActual('perfil')}
                >
                  👤 Perfil
                </button>
              </li>
            </ul>
          </div>

          {/* Botones inferiores del Sidebar */}
          <div className="mb-3 d-flex flex-column gap-2 px-2">
            <a href="/" className="btn btn-dark text-start py-2 px-3 fw-bold shadow-sm">
              🛒 Tienda
            </a>
            <a href="/login" className="btn btn-danger text-start py-2 px-3 fw-bold shadow-sm">
              🚪 Cerrar Sesión
            </a>
          </div>
        </div>

        {/* 3. Área de Contenido Principal (Dinámica según la sección elegida) */}
        <div className="col-md-10 p-4">
          
          {/* SECCIÓN 1: DASHBOARD (Resumen y Métricas) */}
          {seccionActual === 'dashboard' && (
            <>
              <div className="mb-4">
                <h2 className="fw-bold text-dark m-0">Dashboard</h2>
                <p className="text-muted m-0">Resumen de las actividades diarias</p>
              </div>

              {/* Tarjetas Superiores */}
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="card text-white bg-primary border-0 shadow-sm rounded-3 p-2">
                    <div className="card-body">
                      <h5 className="card-title fs-5">🛒 Compras</h5>
                      <h2 className="display-5 fw-bold my-2">1,234</h2>
                      <p className="card-text small m-0 opacity-75">Probabilidad de aumento: 20%</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-white bg-success border-0 shadow-sm rounded-3 p-2">
                    <div className="card-body">
                      <h5 className="card-title fs-5">📦 Productos</h5>
                      <h2 className="display-5 fw-bold my-2">400</h2>
                      <p className="card-text small m-0 opacity-75">Inventario actual: 500</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card text-dark bg-warning border-0 shadow-sm rounded-3 p-2">
                    <div className="card-body">
                      <h5 className="card-title fs-5">👥 Usuarios</h5>
                      <h2 className="display-5 fw-bold my-2">890</h2>
                      <p className="card-text small m-0 opacity-75">Nuevos usuarios este mes: 120</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cuadrícula de Accesos Rápidos */}
              <div className="row g-3">
                <div className="col-md-3">
                  <div className="card border shadow-sm rounded-3 text-center p-3 h-100 bg-white" style={{ cursor: 'pointer' }} onClick={() => setSeccionActual('dashboard')}>
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="text-dark fw-bold mb-2">📊 Dashboard</h5>
                      <p className="text-muted small m-0">Visión general de todas las métricas y estadísticas clave del sistema.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border shadow-sm rounded-3 text-center p-3 h-100 bg-white" style={{ cursor: 'pointer' }} onClick={() => setSeccionActual('ordenes')}>
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="text-dark fw-bold mb-2">📋 Órdenes</h5>
                      <p className="text-muted small m-0">Gestión y seguimiento de todas las órdenes de compra realizadas.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border shadow-sm rounded-3 text-center p-3 h-100 bg-white" style={{ cursor: 'pointer' }} onClick={() => setSeccionActual('productos')}>
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="text-dark fw-bold mb-2">📦 Productos</h5>
                      <p className="text-muted small m-0">Administrar inventario y detalles de los productos disponibles.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border shadow-sm rounded-3 text-center p-3 h-100 bg-white" style={{ cursor: 'pointer' }} onClick={() => setSeccionActual('categorias')}>
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="text-dark fw-bold mb-2">🏷️ Categorías</h5>
                      <p className="text-muted small m-0">Organizar productos en categorías para facilitar su navegación.</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* SECCIÓN 2: LISTADO DE PRODUCTOS */}
          {seccionActual === 'productos' && <ListadoProductos />}

          {/* SECCIÓN 3: LISTADO DE CATEGORÍAS */}
          {seccionActual === 'categorias' && <ListadoCategorias />}

          {/* SECCIÓN 4: ÓRDENES */}
          {seccionActual === 'ordenes' && <ListadoOrdenes />}

          {/* SECCIÓN 5: USUARIOS */}
          {seccionActual === 'usuarios' && <ListadoUsuarios />}

          {/* SECCIÓN TEMPORAL PARA OTRAS PÁGINAS (Reportes, Perfil) */}
          {seccionActual === 'reportes' || seccionActual === 'perfil' ? (
            <div className="bg-white p-5 rounded shadow-sm text-center">
              <h3 className="text-capitalize fw-bold text-dark">Módulo de {seccionActual}</h3>
              <p className="text-muted">Vista en desarrollo para la siguiente entrega.</p>
              <button className="btn btn-primary mt-2" onClick={() => setSeccionActual('dashboard')}>
                Volver al Dashboard
              </button>
            </div>
          ) : null}

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;