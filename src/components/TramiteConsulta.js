import iconVer from './img/ver.svg'
import iconSend from './img/send.svg'
import Swal from 'sweetalert2'
import './tramiteConsulta.css'
import {sendArchivoXcorreo} from '../redux/archivoDucks'
import {cambiarEstadoSolicitud} from '../redux/SolicitudEstadosDucks'

import {useDispatch} from 'react-redux'

const TramiteConsulta = (props) => {

  const dispatch = useDispatch()

  const enviarArchivoXcorreo = async (idArchivo) => {
    const { value: email } = await Swal.fire({
      input: 'email',
      inputLabel: 'Enviar documento a',
      inputPlaceholder: 'Correo destino'
    })
    if (email) {
      let arrayCorreo = []
      arrayCorreo.push(email)
      dispatch(sendArchivoXcorreo(arrayCorreo,idArchivo))
    }
  }

  const cambiarEstado = (e) => {
    const form = document.getElementById('formCambiarEstadoSolicitud')
    e.preventDefault()
    const formData = new FormData(form);
    console.log(formData.get('documentoRespuesta'))
    // API REST 
    // dispatch(cambiarEstadoSolicitud(idSolicitud, idEstado, formdata))
  }

  return (
    <div className="container-tramite">
      <button  className="btnCerrarConsulta" onClick={props.cerrarConsulta}>
        cerrar
      </button>
      <h3 className="tramite-title">Consulta de trámite</h3>
      <p className="tramite-subtitle">Datos generales </p>
      <p>Tipo: {props.data.tipoSolicitud.nombre} </p>
      <p>Descripción: {props.data.descripcion} </p> 
      <div className="table-responsive">
        <table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Estado</th>
              <th>fecha</th>
              <th>descripcion</th>
            </tr>
          </thead>
          <tbody>
              {
                props.data.estadoSolicitudes.length > 0 ? 
                  props.data.estadoSolicitudes.map((item, index) => (
                    <tr key={item.id} className={item.estado.nombre}>
                      <td>{index+1 < 10 ? "0"+(index+1) : index+1}</td>
                      <td>{item.estado.nombre}</td>
                      <td>{item.fecha}</td>
                      <td>{item.descripcion}</td>
                    </tr>
                  )) : null
              }
          </tbody>
        </table>
      </div>
      <p className="tramite-subtitle">Datos del Solicitante </p>
      <div className="table-responsive">
        <table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Puesto</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Dni ó Ruc / Cod Estudiante</th>
            </tr>
          </thead>
          <tbody>
            <tr key={props.data.personaEmisor.id}>
              <td>01</td>
              <td>{props.data.personaEmisor.puesto.nombre}</td>
              <td>
                {props.data.personaEmisor.apellidos}
                {props.data.personaEmisor.nombre} 
              </td>
              <td>{props.data.personaEmisor.correo}</td>
              <td>{props.data.personaEmisor.dniRuc} / {props.data.personaEmisor.codEstudiante}</td>
            </tr>
          </tbody>
        </table>
      </div>


      <p className="tramite-subtitle">Datos del Destinatario </p>
      <div className="table-responsive">
        <table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Puesto</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Dni ó Ruc / Cod Estudiante</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.personasReceptoras.length > 0 ? 
                props.data.personasReceptoras.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index+1 < 10 ? "0"+(index+1) : index+1}</td>
                    <td>{item.puesto.nombre}</td>
                    <td>
                      {item.apellidos}
                      {item.nombre}
                    </td>
                    <td>{item.correo}</td>
                    <td>{item.dniRuc} / </td>
                  </tr>
                )) : null
            }
          </tbody>
        </table>
      </div>
      <p className="tramite-subtitle">Archivos </p>
      <div className="table-responsive">
        <table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>operaciones</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.archivos.length > 0 ? 
                props.data.archivos.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index+1 < 10 ? "0"+(index+1) : index+1}</td>
                    <td>{item.tipoArchivo.nombre}</td>
                    <td>{item.descripcion}</td>
                    <td>
                      <a href={"http://localhost:8090/api/archivos/ver-archivo/" + item.id + '/'} target="_blank" rel="noreferrer">
                        <img src={iconVer} alt="" width="25px"/>
                      </a>
                      <button className="botonToicon" onClick={(e)=> enviarArchivoXcorreo(item.id)}>
                           <img src={iconSend} alt="" width="25px"/>
                      </button>
                    </td>
                  </tr>
                )) : null
            }
          </tbody>
        </table>
      </div>
      <form className="cambiarEstadoSolicitud" id="formCambiarEstadoSolicitud">
        <p>Cambiar estado de la solicitud</p>
        <label> Descripción
          <textarea
            name="descripcion"
            className="input-default"
          />
        </label>
        <input type="file" name="documento"/>
        <div>
          {
            props.estadosPendientes.map((item) => (
              <button key={item.id} onClick={(e) => cambiarEstado(e)}>{item.nombre}</button>
            ))
          }
        </div>
      </form>
    </div>
  );
}
 
export default TramiteConsulta;