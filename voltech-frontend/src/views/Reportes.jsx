import React, { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import html2pdf from 'html2pdf.js';

// Datos de prueba (luego los reemplazarás con datos de tu backend)
const dataVentas = [
  { mes: 'Ene', ventas: 4000, ordenes: 24 },
  { mes: 'Feb', ventas: 3000, ordenes: 18 },
  { mes: 'Mar', ventas: 5000, ordenes: 35 },
  { mes: 'Abr', ventas: 4500, ordenes: 28 },
  { mes: 'May', ventas: 6000, ordenes: 42 },
];

function Reportes() {
  // Referencia para capturar todo el contenedor y transformarlo en PDF
  const reporteRef = useRef();

  // Función que genera y descarga el PDF
  const descargarPDF = () => {
    const elemento = reporteRef.current;
    const opciones = {
      margin: 0.5,
      filename: 'reporte-ventas-voltech.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' } // Horizontal para que entre bien la gráfica
    };
    html2pdf().set(opciones).from(elemento).save();
  };

  return (
    // Agregamos la referencia 'ref={reporteRef}' al contenedor principal
    <div ref={reporteRef} className="w-100 bg-light p-3">
      
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-dark m-0">Módulo de Reportes</h2>
          <p className="text-muted m-0">Estadísticas generales de la tienda</p>
        </div>
        {/* Botón con el evento onClick y la etiqueta para que no se imprima a sí mismo en el PDF */}
        <button onClick={descargarPDF} className="btn btn-primary shadow-sm" data-html2canvas-ignore>
          📄 Exportar PDF
        </button>
      </div>

      {/* Tarjetas de Métricas (KPIs) */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card bg-white border-0 shadow-sm rounded-3 p-2 h-100">
            <div className="card-body">
              <h6 className="text-muted fw-bold mb-2">Ventas Totales</h6>
              <h2 className="display-6 fw-bold text-dark m-0">$22,500</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-white border-0 shadow-sm rounded-3 p-2 h-100">
            <div className="card-body">
              <h6 className="text-muted fw-bold mb-2">Órdenes Completadas</h6>
              <h2 className="display-6 fw-bold text-dark m-0">147</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-white border-0 shadow-sm rounded-3 p-2 h-100">
            <div className="card-body">
              <h6 className="text-muted fw-bold mb-2">Nuevos Usuarios</h6>
              <h2 className="display-6 fw-bold text-dark m-0">32</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Sección del Gráfico */}
      <div className="card bg-white border-0 shadow-sm rounded-3 p-4">
        <h5 className="fw-bold text-dark mb-4">Ingresos por Mes</h5>
        
        {/* Es crucial darle una altura fija al contenedor para que Recharts se dibuje */}
        <div style={{ width: '100%', height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataVentas} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
              <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{fill: '#6c757d'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#6c757d'}} dx={-10} />
              <Tooltip 
                cursor={{fill: '#f8f9fa'}} 
                contentStyle={{borderRadius: '8px', border: '1px solid #dee2e6', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}
              />
              <Bar dataKey="ventas" fill="#0d6efd" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Reportes;