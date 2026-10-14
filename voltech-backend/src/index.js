import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import productoRoutes from './routes/producto.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';
import pedidoRoutes from './routes/pedido.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/pedidos', pedidoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend activo en http://localhost:${PORT}`);
});