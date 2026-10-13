const API_URL = 'http://localhost:3000/api';

export const obtenerProductos = async () => {
    try {
        const respuesta = await fetch(`${API_URL}/productos`);
        const datos = await respuesta.json();

        return datos.data || datos;
    } catch (error) {
        return [];
    }
};

export const obtenerProductoPorId = async (id) => {
    try {
        const respuesta = await fetch(`${API_URL}/productos/${id}`);
        const datos = await respuesta.json();

        return datos.data || datos;
    } catch (error) {
        return null;
    }
};