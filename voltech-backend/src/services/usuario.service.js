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

    if (!nuevoUsuario.contrasena || nuevoUsuario.contrasena.trim() === "") {
        throw new Error("El usuario debe tener una contraseña de forma obligatoria");
    }

    const emailFormateado = nuevoUsuario.email.trim();

    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const esDominioValido = dominiosPermitidos.some(dominio => emailFormateado.endsWith(dominio));

    if (!esDominioValido) {
        throw new Error("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com");
    }

    const usuarioExiste = await usuarioModel.obtenerUsuarioEmail(emailFormateado);

    if (usuarioExiste) {
        throw new Error("Este correo ya esta registrado");
    }

    const usuarioACrear = {
        run: nuevoUsuario.run ? nuevoUsuario.run.trim() : "",
        nombre: nuevoUsuario.nombre.trim(),
        apellidos: nuevoUsuario.apellidos.trim(),
        email: emailFormateado,
        contrasena: nuevoUsuario.contrasena.trim(),
        telefono: nuevoUsuario.telefono ? nuevoUsuario.telefono.trim() : "",
        region: nuevoUsuario.region ? nuevoUsuario.region.trim() : "",
        comuna: nuevoUsuario.comuna ? nuevoUsuario.comuna.trim() : ""
    };

    const usuarioCreado = await usuarioModel.crearUsuario(usuarioACrear);

    return usuarioCreado;
};

export const actualizarDireccionUsuario = async (id, datosDireccion) => {
    
    if (!id) {
        throw new Error("El usuario debe tener un ID para actualizar su direccion");
    }

    if (!datosDireccion) {
        throw new Error("Se requieren los datos de direccion para actualizar el perfil");
    }

    if (!datosDireccion.calle || datosDireccion.calle.trim() === "") {
        throw new Error("La calle es obligatoria para la direccion de envio");
    }

    if (!datosDireccion.comuna || datosDireccion.comuna.trim() === "") {
        throw new Error("La comuna es obligatoria para la direccion de envio");
    }

    if (!datosDireccion.region || datosDireccion.region.trim() === "") {
        throw new Error("La region es obligatoria para la direccion de envio");
    }

    const calleFormateado = datosDireccion.calle.trim();
    const comunaFormateado = datosDireccion.comuna.trim();
    const regionFormateado = datosDireccion.region.trim();
    
    const departamentoFormateado = datosDireccion.departamento ? datosDireccion.departamento.trim() : "";

    const usuarioActualizado = await usuarioModel.actualizarDireccion( id, calleFormateado, comunaFormateado, regionFormateado, departamentoFormateado);

    if (!usuarioActualizado) {
        throw new Error("No se pudo actualizar la direccion, no se encontro el usuario");
    }

    return usuarioActualizado;
};