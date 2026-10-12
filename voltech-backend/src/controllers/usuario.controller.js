import * as usuarioService from '../services/usuario.service.js';

export const obtenerTodoUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.obtenerUsuarios();

        res.status(200).json({
            exito: true,
            data: usuarios
        });

    } catch (error) {

        if (error.message === "Actualmente no hay usuarios registrados") {
            return res.status(404).json({
                exito: false,
                mensaje: error.message
            });
        }

        res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor, intente mas tarde"
        });
    }
};

export const obtenerUsuarioPorId = async (req, res) => {
    try {
        const id = req.params.id;

        const usuario = await usuarioService.obtenerIdUsuario(id);

        res.status(200).json({
            exito: true,
            data: usuario
        });

    } catch (error) {

        if (error.message.includes("tener un ID")) {
            return res.status(400).json({
                exito: false,
                mensaje: error.message
            });
        }

        if (error.message.includes("No se ha encontrado a un usuario")) {
            return res.status(404).json({
                exito: false,
                mensaje: error.message
            });
        }

        res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor, intente mas tarde"
        });
    }
};

export const obtenerUsuarioPorEmail = async (req, res) => {
    try {
        const email = req.params.email;
        
        const usuario = await usuarioService.obtenerEmailUsuario(email);

        res.status(200).json({
            exito: true,
            data: usuario
        });

    } catch (error) {
        
        if (error.message.includes("tener un email")) {
            return res.status(400).json({
                exito: false,
                mensaje: error.message
            });
        }

        if (error.message.includes("No se ha encontrado a un usuario")) {
            return res.status(404).json({
                exito: false,
                mensaje: error.message
            });
        }

        res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor, intente mas tarde"
        });
    }
};

export const creacionUsuario = async (req, res) => {
    try {
        const datosFrontend = req.body;

        const nuevoUsuario = await usuarioService.agregarUsuario(datosFrontend);

        res.status(201).json({
            exito: true,
            mensaje: "Usuario creado correctamente!",
            data: nuevoUsuario
        });

    } catch (error) {
        
        if (error.message.includes("forma obligatoria")) {
            return res.status(400).json({
                exito: false,
                mensaje: error.message
            });
        }

        if (error.message.includes("ya esta registrado")) {
            return res.status(409).json({
                exito: false,
                mensaje: error.message
            });
        }

        res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor, intente mas tarde"
        });
    }
};

export const actualizarDireccionDeUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const datosDireccion = req.body;

        const usuarioActualizado = await usuarioService.actualizarDireccionUsuario(id, datosDireccion);

        res.status(200).json({
            exito: true,
            mensaje: "Datos de la direccion actualizados!",
            data: usuarioActualizado
        });

    } catch (error) {
        
        if (error.message.includes("obligatoria para la direccion") ||
            error.message.includes("Se requieren los datos") || 
            error.message.includes("tener un ID")) {
            return res.status(400).json({
                exito: false,
                mensaje: error.message
            });
        }

        if (error.message.includes("no se encontro el usuario")) {
            return res.status(404).json({
                exito: false,
                mensaje: error.message
            });
        }

        res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor, intente mas tarde"
        });
    }
};