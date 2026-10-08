const conexionBD = require('../config/db');

// aca va la logica de negocio

const obtenerTodosProductos = async () => {
    const query = 'SELECT * FROM productos ORDER BY id ASC';
    const resultado = await conexionBD.query(query);

    return resultado.rows;
};

module.exports = { obtenerTodosProductos };