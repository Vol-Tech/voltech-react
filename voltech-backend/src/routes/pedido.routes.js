import express from 'express';
import { crearPedido, listarPedidosDeUsuario } from '../controllers/pedido.controller.js';

const router = express.Router();

router.post('/', crearPedido);

router.get('/usuario/:usuario_id', listarPedidosDeUsuario);

export default router;