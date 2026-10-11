import conexionBD from '../config/db.js';

const obtenerTodosProductos = async () => {
    const query = 'SELECT * FROM productos ORDER BY id ASC';
    const resultado = await conexionBD.query(query);

    return resultado.rows;
};

const crearProducto = async (producto) => {
    const { nombre, descripcion, precio, stock, imagen_url, categoria } = producto;

    const query = `
        INSERT INTO productos (nombre, descripcion, precio, stock, imagen_url, categoria)
        VALUES ('${nombre}', '${descripcion}', ${precio}, ${stock}, '${imagen_url}', '${categoria}')
        RETURNING *;
    `;

    const resultado = await conexionBD.query(query);

    return resultado.rows[0];
};

export default {
    obtenerTodosProductos,
    crearProducto
};