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

export const obtenerProdId = async (id) => {

    if (!id) {
        throw new Error("El producto debe tener un ID para obtenerlo");
    }

    const producto = await productoModel.obtenerProductosId(id);

    if (!producto) {
        throw new Error("No se ha encontrado un producto con ese ID en la tienda");
    }

    return producto;
};

export const obtenerProdCriticos = async () => {
    const productos = await productoModel.obtenerBajoStock();

    if (productos.length === 0) {
        throw new Error("Actualmente no hay productos con stock critico en la tienda");
    }

    return productos;
};

export const agregarProducto = async (nuevoProd) => {

    if (!nuevoProd.nombre || nuevoProd.nombre.trim() === "") {
        throw new Error("El producto debe tener un nombre de forma obligatoria");
    }

    if (nuevoProd.precio === undefined || nuevoProd.precio <= 0) {
        throw new Error("El producto debe tener un precio y debe ser mayor a cero");
    }

    const productoACrear = {
        nombre: nuevoProd.nombre.trim(),
        descripcion: nuevoProd.descripcion ? nuevoProd.descripcion.trim() : "",
        precio: parseFloat(nuevoProd.precio),
        stock: nuevoProd.stock ? parseInt(nuevoProd.stock) : 0,
        imagen_url: nuevoProd.imagen_url ? nuevoProd.imagen_url.trim() : "",
        categoria: nuevoProd.categoria ? nuevoProd.categoria.trim() : ""
    };

    const productoCreado = await productoModel.crearProducto(productoACrear);

    return productoCreado;
};

export const modificarProducto = async (id, datosProducto) => {

    if (!id) {
        throw new Error("El producto debe tener un ID para actualizarlo");
    }

    if (!datosProducto.nombre || datosProducto.nombre.trim() === "") {
        throw new Error("El producto debe tener nombre para ser actualizado");
    }

    if (datosProducto.precio === undefined || datosProducto.precio <= 0) {
        throw new Error("El producto debe tener un precio y debe ser mayor a 0 para ser actualizado");
    }

    const productoAModificar = {
        nombre: datosProducto.nombre.trim(),
        descripcion: datosProducto.descripcion ? datosProducto.descripcion.trim() : "",
        precio: parseFloat(datosProducto.precio),
        stock: datosProducto.stock ? parseInt(datosProducto.stock) : 0, 
        imagen_url: datosProducto.imagen_url ? datosProducto.imagen_url.trim() : "",
        categoria: datosProducto.categoria ? datosProducto.categoria.trim() : ""
    };

    const productoModificado = await productoModel.actualizarProducto(id, productoAModificar);

    return productoModificado;
};

export const eliminarProducto = async (id) => {

    if (!id) {
        throw new Error("El producto debe tener un ID para obtenerlo");
    }

    const productoEliminado = await productoModel.borrarProducto(id);
    
    if (!productoEliminado) {
        throw new Error("No se encontro ningun producto con ese ID para eliminarlo");
    }

    return productoEliminado;
};