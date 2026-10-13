import { Link } from 'react-router-dom'

export default function BlogMouse() {
  return (
    <main className="blog-detalle">
      <Link to="/blogs">volver a Blogs</Link>

      <h1>El DPI y precisión en tu Mouse Gamer</h1>
      <img src="/img/Mouse Gamer.png" alt="Mouse Gamer" />

      <p>
        DPI significa puntos por pulgada. Indica cuánto se mueve el cursor en pantalla por
        cada pulgada que desplazas el mouse: con 800 DPI, el cursor recorre 800 puntos por
        cada pulgada.
      </p>
      <p>
        Más DPI no significa mejor puntería. Un valor muy alto vuelve el cursor demasiado
        sensible y puede dificultar apuntar con precisión; muchos jugadores prefieren
        valores moderados.
      </p>
      <p>
        Lo mejor es probar distintos valores y ajustar también la sensibilidad dentro del
        juego según tu estilo: más baja para apuntar con precisión y más alta para giros
        rápidos.
      </p>
    </main>
  )
}