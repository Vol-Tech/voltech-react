const productoModel = require('../models/producto.model');

const obtenerProductosIva = async () => {
    const productos = await productoModel.obtenerTodosProductos();
    const iva = 0.19;

    const formatearPrecio = productos.map(producto => {
        const precioBase = parseFloat(producto.precio);
        const precioConIva = precioBase * iva;

        return {
            ...producto,
            precioNeto: precioBase,
            iva: Math.round(precioConIva),
            precioTotal: Math.round(precioBase + precioConIva)
        };
    });

    if (productos.length === 0) {
        throw new Error("Actualmente no hay productos en la tienda");
    }

    return formatearPrecio;
};

module.exports = { obtenerProductosIva };