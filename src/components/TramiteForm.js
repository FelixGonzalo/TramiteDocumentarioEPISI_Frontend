import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import './defaultForm.css'
import './tramiteForm.css'

const TramiteForm = () => {

  const {register, errors, handleSubmit} = useForm()

  const [tiposTramite, setTiposTramite] = useState([])
  const [personas, setPersonas] = useState([])
  const [solicitante, setSolicitante] = useState(null)
  const [destinatario, setDestinatario] = useState(null)

  const getTiposTramite = async () => {
    const data = await fetch('http://localhost:8090/api/solicitudes/tipo-solicitudes')
    const response = await data.json()
    setTiposTramite(response)
  }

  const getPersonas = async () => {
    const data = await fetch('http://localhost:8090/api/personas')
    const response = await data.json()
    setPersonas(response)
  }

  useEffect(()=>{
    getTiposTramite()
    getPersonas()
  }, [])

  const buscarPersona = (input) => {
    let text =  input.target.value.trim()
    if (text.length > 0) {
      for (let item of personas){
        if (item.nombre.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
          // setSolicitante(item)
          return item
        }
      }
    } else {
      // setSolicitante(null)
      return null
    }
  }

  const buscarSolicitante = (input) => {
    setSolicitante(buscarPersona(input))
  }

  const buscarDestinatario = (input) => {
    setDestinatario(buscarPersona(input))
  }

  const getFecha = () => {
    var fecha = new Date();
    var dia = fecha.getDate() < 10 ? "0"+fecha.getDate() : fecha.getDate()
    var mes = fecha.getMonth() < 9 ? "0"+(fecha.getMonth() + 1) : (fecha.getMonth() + 1)
    return `${fecha.getFullYear()}-${mes}-${dia}`
  }

  const onSubmit = (data, event) => {
    var myjson = {
      "descripcion": data.descripcion,
      "tipoSolicitud": {
          "id": data.tipoTramite,
      },
      "personaEmisor": {
          "id": solicitante.id
      },
      "personasReceptoras": [
          {
              "id": destinatario.id
          },
      ]
    }
    console.log(myjson)
    postData(myjson)
    event.target.reset()
  }

  const postData = (myjson) => {
      fetch('http://localhost:8090/api/solicitudes', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },

        body: JSON.stringify(myjson)
      })
      .then(response => response.json())
      .then(response => console.log(response))
     .catch (err => console.log(err)) 

  }

  return (
    <div className="container-main">
      <h2 className="default-title">Registrar nuevo Trámite</h2>
      <form className="form-default " onSubmit={handleSubmit(onSubmit)}>
      <p className="default-subtitle">Datos generales</p>
        <label className="label-default"> Tipo de Trámite
          <select 
            name="tipoTramite" 
            className="input-default"
             ref={register()}
          >
          {
            tiposTramite.map((item) => (
              <option key={item.id} value={item.id}>{item.nombre}</option>
            ))
          }
          </select>
        </label>
        <label className="label-default"> Descripción
          <textarea
            name="descripcion"
            className="input-default"
            ref={register()}
          />
        </label>
        <p className="default-subtitle">Datos del Solicitante</p>
        <label className="label-default"> Solicitante
          <input
            onKeyDown={buscarSolicitante}
            type="search"
            name="solicitante"
            placeholder="Buscador de solicitante"
            className="input-buscador"
            ref={
              register({
                required : {value: true, message: 'solicitante obligatorio'},
              })
            }
          />
        </label>
        <span className="input-error">
          {
            errors?.solicitante?.message
          }
        </span>
        {
          solicitante !== null && solicitante ? (
            <ul className="info-persona">
            <li className="info-persona-titulo">Solicitante</li>
            <li><span className="persona-dato">Nombre:</span> {solicitante.nombre}</li>
            <li><span className="persona-dato">Correo:</span> {solicitante.correo}</li>
            <li><span className="persona-dato">Puesto:</span> {solicitante.puesto.nombre}</li>
            </ul>
          ) : ( <ul className="info-persona"><li>No hay Datos, regístrelo !!</li> </ul>)
        }
        <p className="default-subtitle">Datos del destinatario</p>
        <label className="label-default"> Destinatario
          <input
            onKeyDown={buscarDestinatario}
            type="search"
            name="destinatario"
            placeholder="Buscador de destinatario"
            className="input-buscador"
            ref={
              register({
                required : {value: true, message: 'destinatario obligatorio'},
              })
            }
          />
        </label>
        <span className="input-error">
          {
            errors?.destinatario?.message
          }
        </span>
        {
          destinatario !== null && destinatario ? (
            <ul className="info-persona">
            <li className="info-persona-titulo">Destinatario</li>
            <li><span className="persona-dato">Nombre:</span> {destinatario.nombre}</li>
            <li><span className="persona-dato">Correo:</span> {destinatario.correo}</li>
            <li><span className="persona-dato">Puesto:</span> {destinatario.puesto.nombre}</li>
            </ul>
          ) : ( <ul className="info-persona"><li>No hay Datos, regístrelo !!</li> </ul>)
        }
        <button className="button-default">Registrar</button>
        <input name="fecha" type="text" value={getFecha()} readOnly="readonly" className="tramite-fecha" />
      </form>
    </div>
  );
}
 
export default TramiteForm;