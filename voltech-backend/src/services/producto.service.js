const pool = require('../config/db');

const obtenerTodosProductos = async () => {
    const query = 'SELECT * FROM productos ORDER BY id ASC';
    const resultado = await pool.query(query);

    return resultado.rows;
};

module.exports = { obtenerTodosProductos };