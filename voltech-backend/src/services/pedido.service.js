import pedidoModel from "../models/pedido.model.js";
import * as usuarioService from './usuario.service.js';

export const procesarPedido = async (datosBoleta) => {
    const { usuario_id, datosDireccion, carrito, total } = datosBoleta;

    if (!usuario_id) {
        throw new Error("El usuario debe tener un ID para hacer el pedido");
    }

    if (!carrito || carrito.length === 0) {
        throw new Error("El carrito no puede estar vacio para hacer el pedido");
    }

    if (!total || total <= 0) {
        throw new Error("El total del pedido debe ser mayor a 0");
    }

    await usuarioService.actualizarDireccionUsuario(usuario_id, datosDireccion);

    const articulosFormateados = carrito.map(articulo => ({
        producto_id: parseInt(articulo.producto_id),
        cantidad: parseInt(articulo.cantidad),
        precio_unitario: parseFloat(articulo.precio_unitario),
    }));

    const pedidoCreado = await pedidoModel.crearPedido(usuario_id, total, articulosFormateados, datosDireccion);

    return pedidoCreado;
};

export const obtenerHistorialUsuario = async (usuario_id) => {

    if (!usuario_id) {
        throw new Error("Se requiere un ID de un usuario existente");
    }

    const pedidos = await pedidoModel.obtenerPedidosPorUsuario(usuario_id);

    if (pedidos.length === 0) {
        throw new Error("El usuario no tiene pedidos registrados");
    }

    return pedidos;
};