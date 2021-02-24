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
    var listaDestinatarios = ''
    var listaEstado = ''
    data.personasReceptoras.length > 0 ? 
      data.personasReceptoras.map((item, index) => (
        listaDestinatarios += `<tr>
          <td>${index+1 < 10 ? "0"+(index+1) : index+1}</td>
          <td>${item.puesto.nombre}</td>
          <td>${item.nombre}</td>
          <td>${item.correo}</td>
          <td>${item.dniRuc}</td>
        </tr>`
      )) : listaDestinatarios = `<tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>`

     data.estadoSolicitudes.length > 0 ? 
      data.estadoSolicitudes.map((item, index) => (
        listaEstado += `<tr class=${item.estado.nombre}>
          <td>${index+1 < 10 ? "0"+(index+1) : index+1}</td>
          <td>${item.estado.nombre}</td>
          <td>${item.fecha}</td>
          <td>${item.descripcion}</td>
        </tr>`
      )) : listaEstado = `<tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>`
                
    Swal.fire({
      showCloseButton: true,
      showConfirmButton: false,
      width: 800,
      title: "Consulta de Trámite",
      html:
        `
          <div class="container-tramite">
            <p class="tramite-subtitle">Datos generales: </p>
            <p>Tipo: ${data.tipoSolicitud.nombre} </p>
            <p>Descripción: ${data.descripcion} </p> 

            <p class="tramite-subtitle">Datos del Solicitante: </p>
            <p>${data.personaEmisor.puesto.nombre}: ${data.personaEmisor.nombre} </p> 
            <p>Correo:  ${data.personaEmisor.correo} </p>
            <p>Dni/Ruc:  ${data.personaEmisor.dniRuc} </p>
            <p>Cod Estudiante:  ${data.personaEmisor.codEstudiante} </p>

            <p class="tramite-subtitle">Datos de Destinatarios: </p>
            <div class="table-responsive">
              <table class="">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Puesto</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Dni/Ruc</th>
                  </tr>
                </thead>
                <tbody>
                  ${listaDestinatarios}
                </tbody>
              </table>
            </div>
            <p class="tramite-subtitle">Datos del Estado: </p>
            <div class="table-responsive">
              <table class="">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Estado</th>
                    <th>fecha</th>
                    <th>descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  ${listaEstado}
                </tbody>
              </table>
            </div>
          <div/>
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
            <th>Destinatario</th>
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
                  <td><img src={item.personasReceptoras[0].puesto.id === 1 ? iconEstudiante : iconPersona} alt="" height="18px"/> {item.personasReceptoras[0].nombre}</td>
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