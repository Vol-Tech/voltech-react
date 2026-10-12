import { Link } from 'react-router-dom'

export default function BlogCableTipoC() {
  return (
    <main className="blog-detalle">
      <Link to="/blogs">volver a Blogs</Link>

      <h1>La verdad sobre los cables USB Tipo-C</h1>
      <img src="/img/Cable tipo C.png" alt="Cable USB Tipo-C" />

      <p>
        Que un cable tenga conector USB Tipo-C no significa que cargue o transfiera datos
        a la misma velocidad. El conector es solo la forma; lo que cambia es lo que hay
        adentro del cable.
      </p>
      <p>
        Algunos cables sirven solo para cargar con poca potencia, otros transfieren datos
        muy lento y otros soportan carga rápida y transmisión de video. Por eso, dos cables
        que se ven iguales pueden rendir muy distinto.
      </p>
      <p>
        Antes de comprar, revisa la potencia máxima (en watts) y la velocidad de datos que
        indica el fabricante, y compárala con lo que necesita tu equipo. Elegir bien te
        evita cargas lentas y pérdidas de rendimiento.
      </p>
    </main>
  )
}