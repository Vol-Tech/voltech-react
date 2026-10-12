import express from 'express';
import { 
    actualizarDireccionDeUsuario,creacionUsuario, obtenerTodoUsuarios,
    obtenerUsuarioPorEmail, obtenerUsuarioPorId 
} from '../controllers/usuario.controller.js';

const router = express.Router();

router.post('/registro', creacionUsuario); 

router.get('/', obtenerTodoUsuarios);
router.get('/email/:email', obtenerUsuarioPorEmail);

router.get('/:id', obtenerUsuarioPorId);
router.put('/:id/direccion', actualizarDireccionDeUsuario);

export default router;