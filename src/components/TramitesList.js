import {useEffect, useState} from 'react'
import './tramitesList.css'
import iconAbrir from './img/abrir_documento.svg'
import iconEstudiante from './img/estudiante.svg'
import iconPersona from './img/persona.svg'
import iconPDF from './img/pdf.svg'
import {getSolicitudEstadosPendiente} from '../redux/SolicitudEstadosDucks'

import {useDispatch, useSelector} from 'react-redux'
import {getSolicitudes} from '../redux/solicitudDucks'
import TramiteConsulta from './TramiteConsulta'

const TramitesList = () => {

  const dispatch = useDispatch()
  const tramites = useSelector(store => store.solicitudes.array)
  const estadosPendientes = useSelector(store => store.solicitudEstados.array)

  const [dataConsulta, setDataConsulta] = useState(null)
  const [usuarioActual, setUsuarioActual] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('ROLE_USER')

  useEffect(() => {
    dispatch(getSolicitudes())
    const usuarioActual = JSON.parse(window.atob(localStorage.getItem('mitoken').split('.')[1]))
    setUsuarioActual(usuarioActual.dniRuc)
    usuarioActual.authorities.forEach(tipo => {
      tipo === 'ROLE_ADMIN' && (setTipoUsuario('ROLE_ADMIN'))
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const abrirConsulta = (item) => {
    dispatch(getSolicitudEstadosPendiente(item.id))
    setDataConsulta(item)
    document.getElementById('tabla-lista-tramites').classList.add('lista-tramites')
  }

  const cerrarConsulta = () => {
    setDataConsulta(null)
    document.getElementById('tabla-lista-tramites').classList.remove('lista-tramites')
  }

  return (
    <div>
      <div className="table-responsive" id="tabla-lista-tramites">
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
                  (usuarioActual === item.personasReceptoras[0].dniRuc || tipoUsuario === 'ROLE_ADMIN') && (
                    <tr key={item.id}>
                      <td>{index+1 < 10 ? "0"+(index+1) : index+1}</td>
                      <td>
                        <img src={item.personaEmisor.puesto.id === 1 ? iconEstudiante : iconPersona} alt="" height="18px"/>
                        <span className="apellidos">{' '+item.personaEmisor.apellidos} </span>
                        {' '+item.personaEmisor.nombre}
                      </td>
                      <td className="apellidoYnombre">
                        <img src={item.personasReceptoras[0].puesto.id === 1 ? iconEstudiante : iconPersona} alt="" height="18px"/>
                        <span className="apellidos">{item.personasReceptoras[0].apellidos}</span>
                        {' '+item.personasReceptoras[0].nombre}
                      </td>
                      <td>{item.tipoSolicitud.nombre}</td>
                      <td>
                        <span className={ "estado-tramite "+ item.estadoSolicitudes[item.estadoSolicitudes.length-1].estado.nombre}>
                          {item.estadoSolicitudes[item.estadoSolicitudes.length-1].estado.nombre}
                          </span>
                        <span className="fecha-tramite">{item.estadoSolicitudes[item.estadoSolicitudes.length-1].fecha}</span>
                      </td>
                      <td>
                        <button className="botonToicon" onClick={() => abrirConsulta(item)}><img src={iconAbrir} alt="Abrir documento" height= "20px"/></button>
                        <a className="botonToicon" href={'http://localhost:8090/api/solicitudes/exportar/' + item.id + '/'} target="_blank" rel="noreferrer"><img src={iconPDF} alt="generar PDF" height= "20px"/></a>
                      </td>
                    </tr>
                    )
                )) : null
            }
          </tbody>
        </table>
      </div>
      {
        dataConsulta !== null && (<TramiteConsulta data={dataConsulta} estadosPendientes={estadosPendientes} cerrarConsulta={(e) => cerrarConsulta()}/>)
      }
    </div>
  );
}
 
export default TramitesList;