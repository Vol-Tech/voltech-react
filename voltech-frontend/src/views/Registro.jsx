import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { creacionUsuario } from '../services/api'

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
      nombre: `${datosForm.nombre.trim()} ${formData.apellido.trim()}`.trim(),
      email: datosForm.email.trim(),
      contrasena: datosForm.contrasena,
      telefono: datosForm.telefono.trim(),
      direccion: direccionCompleta
    }
  };

  return (
    <main className="main-login">

      <img src="img/VolTech Logo - Sin texto.png" alt="main-logo" />

      <form className="form-container" id="formulario">
        <h3>Registro de usuario</h3>
        <h4>Run</h4>
        <input type="text" id="regRun" placeholder="Ingrese RUN sin guion ni puntos" required />
        <h4>Nombre y Apellido</h4>
        <div className="nom-apellidos-container">
          <input type="text" id="regNombre" placeholder="Max: 50 caracteres" required />
          <input type="text" id="regApellido" placeholder="Max: 50 caracteres" required />
        </div>
        <h4>Correo</h4>
        <input type="text" id="regCorreo" placeholder="Ingrese correo (ej: usuario@duoc.cl)" required />
        <h4>Confirmar Correo</h4>
        <input type="text" id="regConfirmarCorreo" placeholder="Confirmar correo" required />
        <h4>Constraseña</h4>
        <input type="password" id="regContraseña" placeholder="Ingrese contraseña" required />
        <h4>Confirmar Contraseña</h4>
        <input type="password" id="regConfirmContraseña" placeholder="Confirme contraseña" required />
        <h4>Telefono (opcional)</h4>
        <input type="tel" id="regTelefono" placeholder="Ingrese num telefonico" />

        <div className="select-container">
          <select name="region" id="sel-region">
            <option value="">Seleccione la Region</option>
          </select>

          <select name="comuna" id="sel-comuna">
            <option value="">Seleccione la Comuna</option>
          </select>
        </div>

        <button type="submit">Registrar</button>
      </form>

    </main>
  )
}