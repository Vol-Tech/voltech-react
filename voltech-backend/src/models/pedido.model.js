import conexionBD from "../config/db.js";

const crearPedido = async (usuario_id, total, articulos) => {
    await conexionBD.query('BEGIN');

    try {
        const queryPedido = `
            INSERT INTO pedidos (usuario_id, total) VALUES (${usuario_id}, ${total})
            RETURNING *;
        `;

        const resultado = await conexionBD.query(queryPedido);
        const nuevoPedido = resultado.rows[0];

        for (const articulo of articulos) {
            const queryArticulo = `
                INSERT INTO pedido_items (pedido_id, producto_id, cantidad, precio_unitario)
                VALUES (${nuevoPedido.id}, ${articulo.producto_id}, ${articulo.cantidad}, ${articulo.precio_unitario});
            `;
            await conexionBD.query(queryArticulo);
        }

        await conexionBD.query('COMMIT');
        return nuevoPedido;

    } catch (error) {
        await conexionBD.query('ROLLBACK');
        throw error;
    }
};

const obtenerPedidosPorUsuario = async (usuario_id) => {
    const query = `
        SELECT * FROM pedidos WHERE usuario_id = ${usuario_id} 
        ORDER BY fecha_creacion DESC;
    `;
    const resultado = await conexionBD.query(query);

    return resultado.rows;
};

export default {
    crearPedido,
    obtenerPedidosPorUsuario
};