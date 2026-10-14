import conexionBD from '../config/db.js';

const obtenerTodosProductos = async () => {
    const query = 'SELECT * FROM productos ORDER BY id ASC';
    const resultado = await conexionBD.query(query);

    return resultado.rows;
};

const obtenerProductosId = async (id) => {
    const query = `SELECT * FROM productos WHERE id = ${id}`;
    const resultado = await conexionBD.query(query);

    return resultado.rows[0];
};

const obtenerBajoStock = async () => {
    const query = 'SELECT * FROM productos WHERE stock <= 5 ORDER BY stock ASC';
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

const actualizarProducto = async (id, producto) => {
    const { nombre, descripcion, precio, stock, imagen_url, categoria } = producto;

    const query = `
        UPDATE productos SET nombre = '${nombre}', descripcion = '${descripcion}', precio = '${precio}',
        stock = '${stock}', imagen_url = '${imagen_url}', categoria = '${categoria}' 
        WHERE id = ${id} RETURNING *;
    `;

    const resultado = await conexionBD.query(query);

    return resultado.rows;
};

const borrarProducto = async (id) => {
    const query = `DELETE FROM productos WHERE id = ${id} RETURNING *`;
    const resultado = await conexionBD.query(query);

    return resultado.rows[0];
};

export default {
    obtenerTodosProductos,
    obtenerProductosId,
    obtenerBajoStock,
    crearProducto,
    actualizarProducto,
    borrarProducto
};