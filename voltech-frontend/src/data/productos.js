export const categorias = [
  { id: 'cables', nombre: 'Cables', imagen: '/img/Cable tipo C.png' },
  { id: 'mouse', nombre: 'Mouse', imagen: '/img/Mouse Gamer.png' },
  { id: 'monitores', nombre: 'Monitores', imagen: '/img/Monitor Gamer.png' },
]

export const productos = [
  { id: 1, nombre: 'Cable Master G USB-A a USB-C', precio: 4190, stock: 15, categoria: 'cables', imagen: '/img/productos/cable-usb-c-master-g.jpeg' },
  { id: 2, nombre: 'Cable Baseus Tipo-C 60W 2m Negro', precio: 9490, stock: 10, categoria: 'cables', imagen: '/img/productos/cable-tipo-c-baseus.jpg' },
  { id: 3, nombre: 'Cable USB-C a Lightning 2m Blanco Apple', precio: 29990, stock: 8, categoria: 'cables', imagen: '/img/productos/cable-usb-c-apple.jpeg' },
  { id: 4, nombre: 'Cable VGA a VGA 1.8m', precio: 990, stock: 20, categoria: 'cables', imagen: '/img/productos/cable-vga.jpg' },

  { id: 5, nombre: 'Mouse Inalámbrico HP 200 - Azul', precio: 11290, stock: 12, categoria: 'mouse', imagen: '/img/productos/mouse-hp-azul.jpg' },
  { id: 6, nombre: 'Mouse Gamer Alámbrico GXT 160 Ture RGB - Negro', precio: 20590, stock: 7, categoria: 'mouse', imagen: '/img/productos/mouse-gamer.jpeg' },
  { id: 7, nombre: 'Mouse Bluetooth Inalámbrico Slimblade 2.0 - Blanco', precio: 14690, stock: 14, categoria: 'mouse', imagen: '/img/productos/mouse-inalambrico.jpg' },
  { id: 8, nombre: 'Mouse Inalámbrico M280 - Negro', precio: 10490, stock: 9, categoria: 'mouse', imagen: '/img/productos/mouse-logi.jpg' },

  { id: 9, nombre: 'Monitor Portátil ASUS 15,6 FHD, 60Hz, IPS, 5ms, ZenScreen MB169CK', precio: 117990, stock: 5, categoria: 'monitores', imagen: '/img/productos/monitor-asus-1.jpeg' },
  { id: 10, nombre: 'ASUS ROG XG27AQDMES - OLED monitor - 27 - 2560 x 1440 - DisplayPort / HDMI / USB - Black - 240 Hz', precio: 589990, stock: 4, categoria: 'monitores', imagen: '/img/productos/monitor-2.jpg' },
  { id: 11, nombre: 'Monitor Gamer ASUS TUF 24, FHD, 180Hz, IPS, 1ms, VG249QL3A', precio: 124990, stock: 6, categoria: 'monitores', imagen: '/img/productos/monitor-3.jpg' },
  { id: 12, nombre: 'Monitor Gamer ASUS TUF 32 QHD 170Hz, VA, 1ms, VG32AQA1A', precio: 232990, stock: 3, categoria: 'monitores', imagen: '/img/productos/monitor-4.jpg' },
]


// OPERACIONES CRUD 

export function obtenerProductos() {
  return productos
}

export function obtenerProductosPorCategoria(idCategoria) {
  return productos.filter((producto) => producto.categoria === idCategoria)
}

export function obtenerProductoPorId(id) {
  return productos.find((producto) => producto.id === Number(id))
}

export function obtenerProductosSimilares(producto) {
  return productos
    .filter((p) => p.categoria === producto.categoria && p.id !== producto.id)
    .slice(0, 3)
}


// OPERACIONES CRUD FALTANTES (Create, Update, Delete)

export function crearProducto(nuevoProducto) {
  const nuevoId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
  const productoConId = { id: nuevoId, ...nuevoProducto };
  
  productos.push(productoConId);
  return productoConId;
}

export function actualizarProducto(id, datosActualizados) {
  const index = productos.findIndex((producto) => producto.id === Number(id));
  
  if (index !== -1) {
    productos[index] = { ...productos[index], ...datosActualizados };
    return productos[index];
  }
  return null; 
}

export function eliminarProducto(id) {
  const index = productos.findIndex((producto) => producto.id === Number(id));
  
  if (index !== -1) {
    productos.splice(index, 1);
    return true; 
  }
  return false; 
}