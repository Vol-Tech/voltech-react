import usuarioModel from '../models/usuario.model.js'

export const obtenerUsuarios = async () => {
    const usuarios = await usuarioModel.obtenerTodosUsuarios();

    if (usuarios.length === 0) {
        throw new Error("Actualmente no hay usuarios registrados");
    }

    return usuarios;
};

export const obtenerIdUsuario = async (id) => {

    if (!id) {
        throw new Error("El usuario debe tener un ID para obtenerlo");
    }

    const usuario = await usuarioModel.obtenerUsuarioId(id);

    if (!usuario) {
        throw new Error("No se ha encontrado a un usuario con ese ID");
    } 

    return usuario;
};

export const obtenerEmailUsuario = async (email) => {

    if (!email) {
        throw new Error("El usuario debe tener un email para obtenerlo");
    }

    const usuario = await usuarioModel.obtenerUsuarioEmail(email);

    if (!usuario) {
        throw new Error("No se ha encontrado a un usuario con ese email");
    } 

    return usuario;
};

export const agregarUsuario = async (nuevoUsuario) => {

    if (!nuevoUsuario.nombre || nuevoUsuario.nombre.trim() === "") {
        throw new Error("El usuario debe tener un nombre de forma obligatoria");
    }

    if (!nuevoUsuario.apellidos || nuevoUsuario.apellidos.trim() === "") {
        throw new Error("El usuario debe tener apellidos de forma obligatoria");
    }

    if (!nuevoUsuario.email || nuevoUsuario.email.trim() === "") {
        throw new Error("El usuario debe tener un email de forma obligatoria");
    }

    if (nuevoUsuario.contrasena || nuevoUsuario.contrasena.trim() === "") {
        throw new Error("El usuario debe tener una contraseña de forma obligatoria");
    }

    const emailFormateado = nuevoUsuario.email.trim();
    const usuarioExiste = await usuarioModel.obtenerUsuarioEmail(emailFormateado);

    if (usuarioExiste) {
        throw new Error("Este correo ya esta registrado");
    }

    const usuarioACrear = {
        nombre: nuevoUsuario.nombre.trim(),
        apellidos: nuevoUsuario.apellidos.trim(),
        email: emailFormateado,
        contrasena: nuevoUsuario.contrasena.trim()
    };

    const usuarioCreado = await usuarioModel.crearUsuario(usuarioACrear);

    return usuarioCreado;
};
