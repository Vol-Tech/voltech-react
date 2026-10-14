import express from 'express';
import { creacionPedido, obtenerPedidosUsuario } from '../controllers/pedido.controller.js';

const router = express.Router();

router.post('/', creacionPedido);

router.get('/usuario/:usuario_id', obtenerPedidosUsuario);

export default router;