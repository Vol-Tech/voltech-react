import * as pedidoService from '../services/pedido.service.js';

export const creacionPedido = async (req, res) => {
    try {
        const datosBoleta = req.body;
        const nuevoPedido = await pedidoService.procesarPedido(datosBoleta);

        res.status(201).json({
            exito: true,
            mensaje: "Pedido realizado con exito!",
            data: nuevoPedido
        });

    } catch (error) {
        
        if (error.message.includes("requiere") || 
            error.message.includes("obligatoria") || 
            error.message.includes("vacio")) {
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

export const obtenerPedidosUsuario = async (req, res) => {
    try {
        const usuario_id = req.params.usuario_id;
        const historial = await pedidoService.obtenerHistorialUsuario(usuario_id);

        res.status(200).json({
            exito: true,
            data: historial
        });

    } catch (error) {

        if (error.message.includes("requiere un ID")) {
            return res.status(400).json({
                exito: false,
                mensaje: error.message 
            });
        }

        if (error.message.includes("no tiene pedidos")) {
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