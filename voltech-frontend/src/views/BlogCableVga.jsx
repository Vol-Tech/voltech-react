import { Link } from 'react-router-dom'

export default function BlogCableVga() {
  return (
    <main className="blog-detalle">
      <Link to="/blogs">volver a Blogs</Link>

      <h1>¿Por qué el cable VGA sigue hasta hoy?</h1>
      <img src="/img/Cable Vga.png" alt="Cable VGA" />

      <p>
        VGA es un estándar de video analógico creado hace décadas. Aunque HDMI y DisplayPort
        ofrecen mejor calidad de imagen, VGA sigue presente en una enorme cantidad de equipos.
      </p>
      <p>
        Los proyectores de las salas de clases, los monitores secundarios, los computadores
        de oficina y los servidores suelen tener conexión VGA, por eso es una opción que casi
        siempre funciona.
      </p>
      <p>
        Tiene límites: al ser analógico puede perder nitidez en cables muy largos y no
        transmite audio, que debe conectarse aparte. Para resoluciones altas conviene usar
        conexiones digitales como HDMI o DisplayPort.
      </p>
    </main>
  )
}