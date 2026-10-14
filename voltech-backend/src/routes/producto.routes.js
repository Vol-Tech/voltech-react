import express from 'express';
import { actualizarProducto, borrarProducto, crearProd, obtenerProductoPorId, 
    obtenerProductos, obtenerProductosCriticos 
} from '../controllers/producto.controller.js';

const router = express.Router();

router.post('/', crearProd);

router.get('/', obtenerProductos);
router.get('/criticos', obtenerProductosCriticos);

router.get('/:id', obtenerProductoPorId);
router.put('/:id', actualizarProducto);
router.delete('/:id', borrarProducto);


export default router;