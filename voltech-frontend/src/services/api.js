const API_URL = 'http://localhost:3000/api';

export async function obtenerProductos() {
    try {
        const respuesta = await fetch(`${API_URL}/productos`);

        if (!respuesta.ok) throw new Error("Error al obtener los productos");

        return await respuesta.json();
    } catch (error) {
        console.error("Error en obtener productos:", error);
        return [];
    }
}

export async function obtenerProductosCriticos() {
    try {
        const respuesta = await fetch(`${API_URL}/productos/criticos`);

        if (!respuesta.ok) throw new Error("Error al obtener productos criticos");

        return await respuesta.json();
    } catch (error) {
        console.error("Error en obtener los productos criticos:", error);
        return [];
    }
}

export async function obtenerProductoPorId(id) {
    try {
        const respuesta = await fetch(`${API_URL}/productos/${id}`);

        if (!respuesta.ok) throw new Error("Error al obtener el producto por id");

        return await respuesta.json();
    } catch (error) {
        console.error("Error en obtener el producto por su id:", error);
        return null;
    }
}

