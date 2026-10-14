import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { obtenerUsuarioPorEmail } from '../services/api'

export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ contrasena, setContrasena ] = useState('');

  const [ msgError, setMsgError ] = useState('');
  const [ cargando, setCargando ] = useState(false);

  const navigate = useNavigate();

  const iniciarSesion = async (e) => {
    e.preventDefault();
    setMsgError('');
    setCargando(true);

    try {
      const usuario = await obtenerUsuarioPorEmail(email.trim());
    <main className="main-login">

      <img src="/img/VolTech Logo - Sin texto.png" alt="main-logo" />

      <form className="form-container" id="formulario" onSubmit={iniciarSesion}>

        <h3>Inicio de sesión</h3>

        {msgError && (
          <div className="alert alert-danger py-2 w-100 text-center" role="alert">
            {msgError}
          </div>
        )}

        <h4>Correo</h4>
        <input 
          type="email" 
          id="regCorreo" 
          placeholder="Ingrese correo (ej: usuario@duoc.cl)" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <h4>Constraseña</h4>
        <input 
          type="password" 
          id="regContraseña" 
          placeholder="Ingrese contraseña" 
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required />

        <button type="submit" disabled={cargando}>
          {cargando ? 'Verificando...' : 'Iniciar Sesión'}
        </button>
      </form>

    </main>
      if (contraGuardada && String(contraGuardada) !== String(contrasena)) {
        setMsgError('Contraseña incorrecta');
        return;
      }

      localStorage.setItem('usuario', JSON.stringify(usuario));
      alert(`¡Bienvenido/a de vuelta, ${usuario.nombre}!`);

      if (usuario.rol === 'administrador') {
        navigate('/admin');
      } else {
        navigate('/');
      }

    } catch (error) {
      setMsgError('Error al intentar iniciar sesion');
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="main-login">

      <img src="img/VolTech Logo - Sin texto.png" alt="main-logo" />

      <form className="form-container" id="formulario" onSubmit={iniciarSesion}>

        <h3>Inicio de sesión</h3>
        <h4>Correo</h4>
        <input type="text" id="regCorreo" placeholder="Ingrese correo (ej: usuario@duoc.cl)" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <h4>Constraseña</h4>
        <input type="password" id="regContraseña" placeholder="Ingrese contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />

        <button type="submit">Iniciar Sesión</button>
      </form>

    </main>
  )
}