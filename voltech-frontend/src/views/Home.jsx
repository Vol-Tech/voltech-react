const productosDestacados = [
  { id: 1, nombre: 'Cable Master G USB-A a USB-C', precio: 0, imagen: '/img/productos/cable-usb-c-master-g.jpeg' },
  { id: 2, nombre: 'Cable Baseus Tipo-C 60W 2m Negro', precio: 0, imagen: '/img/productos/cable-tipo-c-baseus.jpg' },
  { id: 3, nombre: 'Cable USB-C a Lightning 2m Blanco', precio: 0, imagen: '/img/productos/cable-usb-c-apple.jpeg' },
  { id: 4, nombre: 'Cable VGA a VGA 1.8m', precio: 0, imagen: '/img/productos/cable-vga.jpg' },
]

import CarouselHome from '../components/CarouselHome'
export default function Home() {
  return (
    <main>
      <CarouselHome />
      <div className="titulo-index">
        <h1>Producto Destacado</h1>
        <h3>OFERTA</h3>
      </div>

      <div className="producto-contenedor">
        {productosDestacados.map((producto) => (
          <div className="producto-oferta" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <a href="#">
              <span className="nombre-producto">{producto.nombre}</span>
            </a>
            <p>${producto.precio.toLocaleString('es-CL')}</p>
            <button>Añadir</button>
          </div>
        ))}
      </div>
    </main>
  )
}