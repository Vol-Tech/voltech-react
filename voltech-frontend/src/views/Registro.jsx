import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { creacionUsuario, regiones_comunas } from '../services/api'

export default function Registro() {
  const navigate = useNavigate();

  const [ datosForm, setDatosForm ] = useState({
    run: '',
    nombre: '',
    apellido: '',
    email: '',
    confirmarEmail: '',
    contrasena: '',
    confirmarContrasena: '',
    telefono: '',
    region: '',
    comuna: ''
  });

  const [ msgError, setMsgError ] = useState('');
  const [ cargando, setCargando ] = useState(false);


  const registrar = async (e) => {
    e.preventDefault();
    setMsgError('');

    if (datosForm.email.trim() !== datosForm.confirmarEmail.trim()) {
      setMsgError('Los email no coinciden');
      return;
    }

    if (datosForm.contrasena !== datosForm.confirmarContrasena) {
      setMsgError('Las contraseñas no coinciden');
      return;
    }

    setCargando(true);

    const direccionCompleta = datosForm.comuna && datosForm.region;

    const nuevoUsuario = {
      run: datosForm.run.trim(),
      nombre: datosForm.nombre.trim(),
      apellidos: datosForm.apellido.trim(),
      email: datosForm.email.trim(),
      contrasena: datosForm.contrasena,
      telefono: datosForm.telefono.trim(),
      region: datosForm.region,
      comuna: datosForm.comuna
    };

    try {
      await creacionUsuario(nuevoUsuario);
      alert('¡Usuario registrado! Ahora puedes iniciar sesion.');

      navigate('/login');
    } catch (error) {
      setMsgError(error.message || 'Error al registrar el usuario');
    } finally {
      setCargando(false);
    }
  };

  const comunasDisponibles = datosForm.region ? regiones_comunas[datosForm.region] : [];


  return (
    <main className="main-login">

      <img src="img/VolTech Logo - Sin texto.png" alt="main-logo" />

      <form className="form-container" id="formulario" onSubmit={registrar}>
        <h3>Registro de usuario</h3>
        <h4>Run</h4>
        <input type="text" id="regRun" placeholder="Ingrese RUN sin guion ni puntos" value={datosForm.run} onChange={(e) => setDatosForm({ ...datosForm, run: e.target.value })} required />
        <h4>Nombre y Apellido</h4>
        <div className="nom-apellidos-container">
          <input type="text" id="regNombre" placeholder="Max: 50 caracteres" value={datosForm.nombre} onChange={(e) => setDatosForm({ ...datosForm, nombre: e.target.value })} required />
          <input type="text" id="regApellido" placeholder="Max: 50 caracteres" value={datosForm.apellido} onChange={(e) => setDatosForm({ ...datosForm, apellido: e.target.value })} required />
        </div>
        <h4>Correo</h4>
        <input type="text" id="regCorreo" placeholder="Ingrese correo (ej: usuario@duoc.cl)" value={datosForm.email} onChange={(e) => setDatosForm({ ...datosForm, email: e.target.value })} required />
        <h4>Confirmar Correo</h4>
        <input type="text" id="regConfirmarCorreo" placeholder="Confirmar correo" value={datosForm.confirmarEmail} onChange={(e) => setDatosForm({ ...datosForm, confirmarEmail: e.target.value })} required />
        <h4>Constraseña</h4>
        <input type="password" id="regContraseña" placeholder="Ingrese contraseña" value={datosForm.contrasena} onChange={(e) => setDatosForm({ ...datosForm, contrasena: e.target.value })} required />
        <h4>Confirmar Contraseña</h4>
        <input type="password" id="regConfirmContraseña" placeholder="Confirme contraseña" value={datosForm.confirmarContrasena} onChange={(e) => setDatosForm({ ...datosForm, confirmarContrasena: e.target.value })} required />
        <h4>Telefono (opcional)</h4>
        <input type="tel" id="regTelefono" placeholder="Ingrese num telefonico" value={datosForm.telefono} onChange={(e) => setDatosForm({ ...datosForm, telefono: e.target.value })} />

        <div className="select-container">
          <select name="region" id="sel-region" value={datosForm.region} onChange={(e) => setDatosForm({ ...datosForm, region: e.target.value, comuna: '' })}>
            <option value="">Seleccione la Region</option>
            {Object.keys(regiones_comunas).map((reg) => (
              <option key={reg} value={reg}>{reg}</option>
            ))}
          </select>

          <select name="comuna" id="sel-comuna" value={datosForm.comuna} onChange={(e) => setDatosForm({ ...datosForm, comuna: e.target.value })}>
            <option value="">Seleccione la Comuna</option>
            {comunasDisponibles.map((com) => (
              <option key={com} value={com}>{com}</option>
            ))}
          </select>
        </div>

        <button type="submit">Registrar</button>

        {msgError && (
          <div className="alert alert-danger py-2 w-100 text-center text-danger fw-bold" role="alert">
            {msgError}
          </div>
        )}
      </form>

    </main>
  )
}