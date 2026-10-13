import { obtenerProductos, obtenerProductoPorId, crearProducto } from './productos.js';

describe('Pruebas Unitarias - productos.js', () => {

  it('Debería retornar un arreglo de productos iniciales', () => {
    const productos = obtenerProductos();
    expect(Array.isArray(productos)).toBe(true);
    expect(productos.length).toBeGreaterThan(0);
  });

  it('Debería obtener un producto específico por su ID', () => {
    const producto = obtenerProductoPorId(1);
    expect(producto).toBeDefined();
    expect(producto.id).toBe(1);
  });

  it('Debería agregar un producto nuevo a la lista', () => {
    const nuevoProducto = {
      nombre: 'Teclado Test',
      precio: 15000,
      stock: 10,
      categoria: 'accesorios',
      imagen: '/img/test.png'
    };
    
    const resultado = crearProducto(nuevoProducto);
    expect(resultado.id).toBeDefined();
    expect(resultado.nombre).toBe('Teclado Test');
  });

});