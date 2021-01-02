import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import iconAbrir from './img/abrir_documento.svg'

const TramitesList = () => {

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

  const [tramites, setTramites] = useState([])

  const getDatos = async () => {
    const data = await fetch('http://localhost/API%20PUBLICA/tramites.json')
    const response = await data.json()
    setTramites(response)
  }

  useEffect(() => {
    getDatos()
    
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
                    <td>{index+1}</td>
                    <td>{item.personaEmisor.puesto.nombre} {item.personaEmisor.nombre}</td>
                    <td>{item.tipoSolicitud.nombre}</td>
                    <td>{item.estadoSolicitudes[item.estadoSolicitudes.length-1].estado.nombre} - {item.estadoSolicitudes[item.estadoSolicitudes.length-1].fecha}</td>
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