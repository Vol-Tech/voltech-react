const API_URL = 'http://localhost:3000/api';

// colecciones auxiliares para el front

export const categorias = [
  { id: 'cables', nombre: 'Cables', imagen: '/img/Cable tipo C.png' },
  { id: 'mouse', nombre: 'Mouse', imagen: '/img/Mouse Gamer.png' },
  { id: 'monitores', nombre: 'Monitores', imagen: '/img/Monitor Gamer.png' },
];

export const regiones_comunas = {
  'Metropolitana': ['Santiago', 'Puente Alto', 'Maipú', 'La Florida', 'Providencia', 'Las Condes', 'San Bernardo'],
  'Valparaíso': ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Villa Alemana', 'San Antonio'],
  'Biobío': ['Concepción', 'Talcahuano', 'Chiguayante', 'Los Ángeles', 'Coronel']
};

// endpoints de la api productos 'http://localhost:3000/api/productos'

// GET's
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

// POST
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

// PUT
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

// DELETE
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

// endpoints de la api usuarios 'http://localhost:3000/api/productos'

// GET''s
export const obtenerTodoUsuarios = async () => {
  try {
    const respuesta = await fetch(`${API_URL}/usuarios`);
    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || 'Error al obtener los usuarios');
    }

    return resultado.data; 
  } catch (error) {
    console.error("Error en obtenerTodoUsuarios:", error);
    return [];
  }
};


export const obtenerUsuarioPorEmail = async (email) => {
  try {
    const respuesta = await fetch(`${API_URL}/usuarios/email/${email}`);
    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || `No se encontró el usuario con EMAIL ${email}`);
    }

    return resultado.data; 
  } catch (error) {
    console.error(`Error en obtenerProductoPorId (${email}):`, error);
    return null;
  }
};

export const obtenerIdUsuario = async (id) => {
  try {
    const respuesta = await fetch(`${API_URL}/usuarios/${id}`);
    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || `No se encontró el usuario con ID ${id}`);
    }

    return resultado.data; 
  } catch (error) {
    console.error(`Error en obtenerIdUsuario (${id}):`, error);
    return null;
  }
};

// POST
export const creacionUsuario = async (nuevoUsuario) => {
  try {
    const respuesta = await fetch(`${API_URL}/usuarios/registro`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoUsuario),
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || resultado.message || 'Error al crear el usuario');
    }

    return resultado.data;
  } catch (error) {
    console.error("Error en creacionUsuario:", error);
    throw error;
  }
};

// PUT
export const actualizarDireccionDeUsuario = async (id, datosDireccion) => {
  try {
    const respuesta = await fetch(`${API_URL}/usuarios/${id}/direccion`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosActualizados),
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || `Error al actualizar el usuario de id ${id}`);
    }

    return resultado.data;
  } catch (error) {
    console.error(`Error en actualizarDireccionDeUsuario (${id}):`, error);
    throw error;
  }
};

// endpoints de la api pedidos 'http://localhost:3000/api/pedidos'

// GET
export const obtenerPedidosUsuario = async (usuario_id) => {
  try {
    const respuesta = await fetch(`${API_URL}/pedidos/usuario/${usuario_id}`);
    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || `Error al obtener los pedidos del usuario ${usuario_id}`);
    }

    return resultado.data;
  } catch (error) {
    console.error(`Error en obtenerPedidosUsuario (${usuario_id}):`, error);
    return [];
  }
};

// POST
export const creacionPedido = async (datosBoleta) => {
  try {
    const respuesta = await fetch(`${API_URL}/pedidos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosBoleta),
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok || !resultado.exito) {
      throw new Error(resultado.mensaje || 'Error al realizar el pedido');
    }

    return resultado.data;
  } catch (error) {
    console.error("Error en creacionPedido:", error);
    throw error;
  }
};