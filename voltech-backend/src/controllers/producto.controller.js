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

export const obtenerProductoPorId = async (req, res) => {
    try {
        const id = req.params.id; 

        const producto = await productoService.obtenerProdId(id);

        res.status(200).json({
            exito: true,
            data: producto
        });

    } catch (error) {
        
        if (error.message.includes("tener un ID")) {
            return res.status(400).json({
                exito: false, 
                mensaje: error.message 
            });
        }

        if (error.message.includes("No se ha encontrado")) {
            return res.status(404).json({
                exito: false, 
                mensaje: error.message 
            });
        }

        res.status(500).json({ 
            exito: false, 
            mensaje: "Error interno del servidor" 
        });
    }
};

export const obtenerProductosCriticos = async (req, res) => {
    try {
        const productos = await productoService.obtenerProdCriticos();

        res.status(200).json({
            exito: true,
            data: productos
        });

    } catch (error) {
        
        if (error.message.includes("stock critico")) {
            return res.status(404).json({ 
                exito: false, 
                mensaje: error.message 
            });
        }

        res.status(500).json({ 
            exito: false, 
            mensaje: "Error interno del inventario" 
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

export const actualizarProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const datosDelFrontend = req.body;

        const productoActualizado = await productoService.modificarProducto(id, datosDelFrontend);

        res.status(200).json({
            exito: true,
            mensaje: `El producto '${productoActualizado.nombre}' fue modificado exitosamente.`,
            data: productoActualizado
        });

    } catch (error) {

        if (error.message.includes("tener un ID") || 
            error.message.includes("tener un nombre") || 
            error.message.includes("tener un precio")) {
            return res.status(400).json({
                exito: false, 
                mensaje: error.message 
            });
        }

        if (error.message.includes("No se ha encontrado")) {
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