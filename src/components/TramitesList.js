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
         <p><b>Tipo: </b> ${data.tipoSolicitud.nombre} </p>
         <p><b>Descripción: </b> ${data.descripcion} </p> 

         <b>Datos del Solicitante: </b>
         <p><b>${data.personaEmisor.puesto.nombre}: </b> ${data.personaEmisor.nombre} </p> 
         <p><b>Correo: </b> ${data.personaEmisor.correo} </p>
        `,
      footer: "para SPRINT 2"
    })
  }

  // const [tramites, setTramites] = useState([])

  // const getDatos = async () => {
  //   const data = await fetch('http://localhost:8090/api/solicitudes')
  //   const response = await data.json()
  //   setTramites(response)
  // }

  useEffect(() => {
    // getDatos()
    dispatch(getSolicitudes())
    
  }, [])

  return (
    <main className="container-main">
      <h2 className="default-title">Lista de Trámites</h2>
      <div className="table-responsive">
        <table className="tramites-list">
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
    </main>
  );
}
 
export default TramitesList;