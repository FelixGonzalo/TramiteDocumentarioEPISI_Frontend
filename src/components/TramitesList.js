import {useEffect} from 'react'
import Swal from 'sweetalert2'
import './tramitesList.css'
import iconAbrir from './img/abrir_documento.svg'
import iconEstudiante from './img/estudiante.svg'
import iconPersona from './img/persona.svg'

import {useDispatch, useSelector} from 'react-redux'
import {getSolicitudes} from '../redux/solicitudDucks'

const TramitesList = () => {

  const dispatch = useDispatch()
  const tramites = useSelector(store => store.solicitudes.array)

  const consultarTramite = (data) => {
    console.log("pulsado " + data.personaEmisor.nombre)
    
    Swal.fire({
      showCloseButton: true,
      showConfirmButton: false,
      width: 600,
      title: "Consulta de Trámite",
      html:
        `<b>Datos generales: </b>
         <p className="pruebita">Tipo: ${data.tipoSolicitud.nombre} </p>
         <p>Descripción: ${data.descripcion} </p> 

         <b>Datos del Solicitante: </b>
         <p>${data.personaEmisor.puesto.nombre}: ${data.personaEmisor.nombre} </p> 
         <p>Correo:  ${data.personaEmisor.correo} </p>
         <p>Dni/Ruc:  ${data.personaEmisor.dniRuc} </p>
         <p>Cod Estudiante:  ${data.personaEmisor.codEstudiante} </p>

         <b>Datos de Destinatarios: </b>
         <p></p>
         <b>Datos del Estado: </b>
         <p></p>
        `,
      footer: "Sistema de EPISI"
    })
  }

  useEffect(() => {
    dispatch(getSolicitudes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Solicitante</th>
            <th>Tipo de trámite</th>
            <th>Estado de solicitud</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            tramites.length > 0 ? 
              tramites.map((item, index) => (
                <tr key={item.id}>
                  <td>{index+1 < 10 ? "0"+(index+1) : index+1}</td>
                  <td><img src={item.personaEmisor.puesto.id === 1 ? iconEstudiante : iconPersona} alt="" height="18px"/> {item.personaEmisor.nombre}</td>
                  <td>{item.tipoSolicitud.nombre}</td>
                  <td>
                    <span className={ "estado-tramite "+ item.estadoSolicitudes[item.estadoSolicitudes.length-1].estado.nombre}>
                      {item.estadoSolicitudes[item.estadoSolicitudes.length-1].estado.nombre}
                      </span>
                    <span className="fecha-tramite">{item.estadoSolicitudes[item.estadoSolicitudes.length-1].fecha}</span>
                  </td>
                  <td><button onClick={() => consultarTramite(item)}><img src={iconAbrir} alt="Abrir documento" height= "20px"/></button></td>
                </tr>
              )) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  );
}
 
export default TramitesList;