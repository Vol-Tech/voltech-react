import productoModel from '../models/producto.model.js';

export const obtenerProductosIva = async () => {
    const productos = await productoModel.obtenerTodosProductos();

    if (productos.length === 0) {
        throw new Error("Actualmente no hay productos en la tienda");
    }

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

    return formatearPrecio;
};