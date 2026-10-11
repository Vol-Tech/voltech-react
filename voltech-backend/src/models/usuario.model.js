import conexionBD from '../config/db.js';

const obtenerTodosUsuarios = async () => {
    const query = 'SELECT * FROM usuarios ORDER BY id ASC';
    const respuesta = await conexionBD.query(query);

    return respuesta.rows;
};

const crearUsuario = async (usuario) => {
    
};

export default {
    obtenerTodosUsuarios
};