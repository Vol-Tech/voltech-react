import conexionBD from '../config/db.js';

const obtenerTodosUsuarios = async () => {
    const query = 'SELECT * FROM usuarios ORDER BY id ASC';
    const respuesta = await conexionBD.query(query);

    return respuesta.rows;
};

const obtenerUsuarioId = async (id) => {
    const query = `SELECT * FROM usuarios WHERE id = ${id}`;
    const resultado = await conexionBD.query(query);

    return resultado.rows[0];
};

const obtenerUsuarioEmail = async (email) => {
    const query = `SELECT * FROM usuarios WHERE email = '${email}'`;
    const resultado = await conexionBD.query(query);

    return resultado.rows[0];
};

const crearUsuario = async (usuario) => {
    const { nombre, apellidos, email, contrasena} = usuario;

    const query = `
        INSERT INTO usuarios (nombre, apellidos, email, contrasena)
        VALUES ('${nombre}', '${apellidos}', '${email}', '${contrasena}')
        RETURNING *;
    `;

    const resultado = await conexionBD.query(query);

    return resultado.rows[0];
};

const actualizarDireccion = async (id, calle, comuna, region, departamento) => {
    const query = `
        UPDATE usuarios SET calle = '${calle}', comuna = '${comuna}',
        region = '${region}, departamento = '${departamento}'
        WHERE id = ${id} RETURNING *;
    `;

    const resultado = await conexionBD.query(query);

    return resultado.rows[0];
};



export default {
    obtenerTodosUsuarios,
    obtenerUsuarioId,
    obtenerUsuarioEmail,
    crearUsuario,
    actualizarDireccion
};