import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'

import Nosotros from './views/Nosotros'
import Blogs from './views/Blogs'
import Contacto from './views/Contacto'
import Login from './views/Login'
import Registro from './views/Registro'
import DetalleProducto from './views/DetalleProducto'
import Categorias from './views/Categorias'
import Carrito from './views/Carrito'
import Checkout from './views/Checkout'

import BlogMonitor from './views/BlogMonitor'
import BlogCableTipoC from './views/BlogCableTipoC'
import BlogCableVga from './views/BlogCableVga'
import BlogMouse from './views/BlogMouse'

// Vista Admin
import AdminDashboard from './views/AdminDashboard'

function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>

      <Route path="/admin">
        <Route index element={<AdminDashboard />} />

        <Route path="ordenes" element={<AdminDashboard />} />
        <Route path="ordenes/:id" element={<AdminDashboard />} />

        <Route path="productos" element={<AdminDashboard />} />
        <Route path="productos/nuevo" element={<AdminDashboard />} />
        <Route path="productos/:id" element={<AdminDashboard />} />
        <Route path="productos/editar/:id" element={<AdminDashboard />} />
        <Route path="productos/criticos" element={<AdminDashboard />} />

        <Route path="categorias" element={<AdminDashboard />} />
        <Route path="categorias/nueva" element={<AdminDashboard />} />
        <Route path="categorias/editar/:id" element={<AdminDashboard />} />

        <Route path="usuarios" element={<AdminDashboard />} />
        <Route path="usuarios/nuevo" element={<AdminDashboard />} />
        <Route path="usuarios/:id" element={<AdminDashboard />} />
        <Route path="usuarios/editar/:id" element={<AdminDashboard />} />
        <Route path="usuarios/:id/historial" element={<AdminDashboard />} />

        <Route path="reportes" element={<AdminDashboard />} />
        <Route path="perfil" element={<AdminDashboard />} />
      </Route>

      <Route element={<PublicLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:id" element={<Categorias />} />
        <Route path="/categorias/:categoriaId/:productoId" element={<DetalleProducto />} />
        
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blogs/monitor-gamer" element={<BlogMonitor />} />
        <Route path="/blogs/cable-tipo-c" element={<BlogCableTipoC />} />
        <Route path="/blogs/cable-vga" element={<BlogCableVga />} />
        <Route path="/blogs/mouse-gamer" element={<BlogMouse />} />
      </Route>

    </Routes>
  )
}

export default App