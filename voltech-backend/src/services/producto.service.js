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

export const agregarProducto = async (nuevoProd) => {

    if (!nuevoProd.nombre || nuevoProd.nombre.trim() === "") {
        throw new Error("El producto debe tener un nombre");
    }

    if (nuevoProd.precio === undefined || nuevoProd.precio <= 0) {
        throw new Error("El producto debe tener un precio y debe ser mayor a cero");
    }

    const productoACrear = {
        nombre: nuevoProd.nombre.trim(),
        descripcion: nuevoProd.descripcion ? nuevoProd.descripcion.trim() : "",
        precio: parseFloat(nuevoProd.precio),
        stock: nuevoProd.stock ? parseInt(nuevoProd.stock) : 0,
        imagen_url: nuevoProd.imagen_url,
        categoria: nuevoProd.categoria
    };

    const productoCreado = await productoModel.crearProducto(productoACrear);

    return productoCreado;
};