import conexionBD from '../config/db.js';

// model ejecuta solo SQL
const obtenerTodosProductos = async () => {
    const query = 'SELECT * FROM productos ORDER BY id ASC';
    const resultado = await conexionBD.query(query);

    return resultado.rows;
};

export default {
    obtenerTodosProductos
};