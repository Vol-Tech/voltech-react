import { obtenerProductosIva } from '../services/producto.service';

export const obtenerProductos = async (req, res) => {
    try {
        const productosConIva = await obtenerProductosIva();

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