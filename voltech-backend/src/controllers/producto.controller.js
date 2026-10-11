import * as productoService from '../services/producto.service.js';

export const obtenerProductos = async (req, res) => {
    try {
        const productosConIva = await productoService.obtenerProductosIva();

        res.status(200).json({
            exito: true,
            data: productosConIva
        });

    } catch (error) {

        if (error.message === "Actualmente no hay productos en la tienda") {
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

export const crearProd = async (req, res) => {
    try {
        const datosFrontend = req.body;

        const nuevoProducto = await productoService.agregarProducto(datosFrontend);

        res.status(201).json({
            exito: true,
            mensaje: "Producto creado correctamente!",
            data: nuevoProducto
        });
    } catch (error) {

        if (error.message.includes("obligatorio") || error.message.includes("mayor a cero")) {
            return res.status(400).json({
                exito: false,
                message: error.message
            });
        }

        res.status(500).json({
            exito: false,
            mensaje: "Error interno del servidor, intente mas tarde"
        });
    }
};