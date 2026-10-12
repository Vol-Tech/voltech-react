export default function Blogs() {
  return (
    <main>

      <h2 className="titulo-blogs">NOTICIAS IMPORTANTES</h2>

      <article className="nosotros-container">
        <div className="nosotros-descripcion">
          <h2>¿Por que necesitas un monitor Gamer?</h2>
          <p>
            Descubre como la velocidad de refresco de nuestros monitores VolTech
            elimina el desenfoque de movimiento, reduciendo el lag y mejorando tus
            reflejos en partidas competitivas.
          </p>
          <button>VER CASO</button>
        </div>
        <div className="blog-imagen">
          <img src="img/Monitor Gamer.png" alt="Monitor Gamer Blog" />
        </div>
      </article>

      <article className="nosotros-container">
        <div className="nosotros-descripcion">
          <h3>La verdad sobre los cables USB Tipo-C</h3>
          <p>
            No todos los cables cargan a la misma velocidad, te enseñamos a identificar
            el amperaje correcto en tus cables Tipo-C para proteger la batería de tus
            equipos sin perder rendimiento.
          </p>
          <button>VER CASO</button>
        </div>
        <div className="blog-imagen">
          <img src="img/Cable tipo C.png" alt="Cable tipo C Blog" />
        </div>
      </article>

      <article className="nosotros-container">
        <div className="nosotros-descripcion">
          <h3>¿Por qué el cable VGA sigue hasta hoy?</h3>
          <p>
            A pesar del dominio de HDMI y DisplayPort, el clasico cable VGA analogico sigue
            siendo el rey indiscutido de la estabilidad en proyectores universitarios,
            monitores secundarios y servidores.
          </p>
          <button>VER CASO</button>
        </div>
        <div className="blog-imagen">
          <img src="img/Cable Vga.png" alt="Cable VGA" />
        </div>
      </article>

      <article className="nosotros-container">
        <div className="nosotros-descripcion">
          <h3>El DPI y precisión en tu Mouse Gamer</h3>
          <p>
            ¿Aumentar los DPI realmente te hace apuntar mejor? Vamos a ver cómo funcionan:
            los sensores opticos de la linea de ratones VolTech y como ajustar la sensibilidad
            segun tu estilo de juego.
          </p>
          <button>VER CASO</button>
        </div>
        <div className="blog-imagen">
          <img src="img/Mouse Gamer.png" alt="Mouse Gamer Blog" />
        </div>
      </article>

    </main>
  )
}