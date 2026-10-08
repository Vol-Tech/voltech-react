import React from 'react';

const Home = () => {
  return (
    <main className="container mt-4">
      {/* Banner VolTech */}
      <div className="row align-items-center rounded p-4 mb-5" style={{ backgroundColor: '#eef2fb' }}>
        <div className="col-md-6 pe-4">
          <h2 className="fw-bold mb-3" style={{ color: '#1a2b4c' }}>Tienda Tecnologica VolTech</h2>
          <p className="text-muted fs-5">
            Nos encargamos de tener lo mas actualizado de hoy
            para todo lo que necesites y junto a unas buenas ofertas
            que te daremos por esta semana del 18 al ser una tienda
            original de Chile.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src="/img/Banner Index.png" alt="Banner VolTech VR" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      {/* Sección Productos Destacados */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-0">Producto Destacado</h1>
        <h3 className="text-success fw-bold mt-2 mb-4">OFERTA</h3>
        
        <div className="row justify-content-center g-4">
          {/* Producto 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-success border-opacity-25">
              <img src="/img/productos/cable-usb-c-master-g.jpeg" className="card-img-top p-3" alt="Cable USB-C Master G" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fs-6">Cable USB-C Master G</h5>
                <p className="card-text fw-bold text-success mt-auto">$5.000</p>
                <button className="btn btn-outline-success w-100">Añadir</button>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-success border-opacity-25">
              <img src="/img/productos/cable-tipo-c-baseus.jpg" className="card-img-top p-3" alt="Cable Tipo-C Baseus" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fs-6">Cable Tipo-C Baseus</h5>
                <p className="card-text fw-bold text-success mt-auto">$7.500</p>
                <button className="btn btn-outline-success w-100">Añadir</button>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-success border-opacity-25">
              <img src="/img/productos/cable-usb-c-apple.jpeg" className="card-img-top p-3" alt="Cable USB-C Apple" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fs-6">Cable USB-C Apple</h5>
                <p className="card-text fw-bold text-success mt-auto">$15.000</p>
                <button className="btn btn-outline-success w-100">Añadir</button>
              </div>
            </div>
          </div>

          {/* Producto 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-success border-opacity-25">
              <img src="/img/productos/cable-vga.jpg" className="card-img-top p-3" alt="Cable VGA" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fs-6">Cable VGA</h5>
                <p className="card-text fw-bold text-success mt-auto">$3.000</p>
                <button className="btn btn-outline-success w-100">Añadir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;