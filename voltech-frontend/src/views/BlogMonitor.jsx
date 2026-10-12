import { Link } from 'react-router-dom'

export default function BlogMonitor() {
  return (
    <main className="blog-detalle">
      <Link to="/blogs">volver a Blogs</Link>

      <h1>¿Por qué necesitas un monitor Gamer?</h1>
      <img src="/img/Monitor Gamer.png" alt="Monitor Gamer" />

      <p>
        La tasa de refresco indica cuántas veces por segundo se actualiza la imagen
        en pantalla. Un monitor de 144 Hz muestra 144 imágenes por segundo, mientras
        que uno tradicional muestra 60, lo que vuelve el movimiento mucho más fluido.
      </p>
      <p>
        Otro dato importante es el tiempo de respuesta: mientras menor sea, menos
        estela o desenfoque verás en las escenas rápidas. En partidas competitivas,
        esa diferencia te permite reaccionar antes.
      </p>
    </main>
  )
}