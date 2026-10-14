const API_URL = 'http://localhost:3000/api';

export const categorias = [
  { id: 'cables', nombre: 'Cables', imagen: '/img/Cable tipo C.png' },
  { id: 'mouse', nombre: 'Mouse', imagen: '/img/Mouse Gamer.png' },
  { id: 'monitores', nombre: 'Monitores', imagen: '/img/Monitor Gamer.png' },
];

export const obtenerProductos = async () => {
  try {
    const respuesta = await fetch(`${API_URL}/productos`);
    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || 'Error al obtener los productos');
    }
    return resultado.data; 
  } catch (error) {
    console.error("Error en obtenerProductos:", error);
    return [];
  }
};

export const obtenerProductoPorId = async (id) => {
  try {
    const respuesta = await fetch(`${API_URL}/productos/${id}`);
    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || `No se encontró el producto con ID ${id}`);
    }

    return resultado.data; 
  } catch (error) {
    console.error(`Error en obtenerProductoPorId (${id}):`, error);
    return null;
  }
};

export const obtenerProductosCriticos = async () => {
  try {
    const respuesta = await fetch(`${API_URL}/productos/criticos`);
    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || 'Error al obtener productos críticos');
    }

    return resultado.data;
  } catch (error) {
    console.error("Error en obtenerProductosCriticos:", error);
    return [];
  }
};

export const crearProd = async (nuevoProducto) => {
  try {
    const respuesta = await fetch(`${API_URL}/productos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoProducto),
    });
    const resultado = await respuesta.json();
    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || resultado.message || 'Error al crear el producto');
    }
    return resultado.data;
  } catch (error) {
    console.error("Error en crearProd:", error);
    throw error;
  }
};

export const actualizarProducto = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(`${API_URL}/productos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosActualizados),
    });
    const resultado = await respuesta.json();
    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || `Error al actualizar el producto ${id}`);
    }
    return resultado.data;
  } catch (error) {
    console.error(`Error en actualizarProducto (${id}):`, error);
    throw error;
  }
};

export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${API_URL}/productos/${id}`, {
      method: 'DELETE',
    });
    const resultado = await respuesta.json();
    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || `Error al eliminar el producto ${id}`);
    }
    return resultado.data;
  } catch (error) {
    console.error(`Error en borrarProducto (${id}):`, error);
    throw error;
  }
};