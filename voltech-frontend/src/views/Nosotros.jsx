export default function Nosotros() {
  return (
    <main className="main-nosotros">
      <div className="nosotros-container">

        <div className="nosotros-descripcion">
          <h2>¿Quienes Somos?</h2>
          <p>
            Hoy día, tanto los especialistas en tecnología como los entusiastas de esta creen que ensamblar
            computadoras y actualizar sus elementos tecnológicos es una necesidad permanente. En este caso sería VolTech, un proyecto de comercio electrónico que tiene como objetivo proporcionar una experiencia
            de navegación dinámica tanto interactiva y visualmente, a través de un catálogo
            enfocado en hardware y periféricos.
          </p>
        </div>

        <img src="img/foto-nosotros.jpeg" alt="nosotros-foto" />
      </div>

      <h2 className="marcas-texto">Marcas con las que Trabajamos</h2>

      <div className="marcas-container">
        <img src="img/marcas/master-g.png" alt="marca" />
        <img src="img/marcas/baseus.png" alt="marca-2" />
        <img src="img/marcas/hp.png" alt="marca-3" />
        <img src="img/marcas/asus.png" alt="marca-4" />
        <img src="img/marcas/Logitech-logo.png" alt="marca-5" />
      </div>
    </main>
  )
}