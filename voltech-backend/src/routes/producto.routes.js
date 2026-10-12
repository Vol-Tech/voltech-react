import express from 'express';
import { crearProd, obtenerProductos } from '../controllers/producto.controller.js';

const router = express.Router();

router.get('/', obtenerProductos);
router.post('/', crearProd);

export default router;