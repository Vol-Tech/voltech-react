import express from 'express';
import { obtenerProductos } from '../controllers/producto.controller.js';

const router = express.Router();

router.get('/', obtenerProductos);

export default router;