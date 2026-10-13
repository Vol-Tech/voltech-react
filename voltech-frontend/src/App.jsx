import { Routes, Route } from 'react-router-dom'
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

import BlogMonitor from './views/BlogMonitor'
import BlogCableTipoC from './views/BlogCableTipoC'
import BlogCableVga from './views/BlogCableVga'
import BlogMouse from './views/BlogMouse'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />

        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:id" element={<Categorias />} />

        <Route path="/carrito" element={<Carrito />} />

        <Route path="/blogs/monitor-gamer" element={<BlogMonitor />} />
        <Route path="/blogs/cable-tipo-c" element={<BlogCableTipoC />} />
        <Route path="/blogs/cable-vga" element={<BlogCableVga />} />
        <Route path="/blogs/mouse-gamer" element={<BlogMouse />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App