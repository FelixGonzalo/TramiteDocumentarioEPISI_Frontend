import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import './defaultForm.css'
import './tramiteForm.css'

const TramiteForm = () => {

  const {register, errors, handleSubmit} = useForm()

  const [tiposTramite, setTiposTramite] = useState([])
  const [personas, setPersonas] = useState([])
  const [solicitante, setSolicitante] = useState(null)

  const getTiposTramite = async () => {
    const data = await fetch('http://localhost/API%20PUBLICA/tipostramites.json')
    const response = await data.json()
    setTiposTramite(response)
  }

  const getPersonas = async () => {
    const data = await fetch('http://localhost/API%20PUBLICA/personas.json')
    const response = await data.json()
    setPersonas(response)
  }

  useEffect(()=>{
    getTiposTramite()
    getPersonas()
  }, [])

  const buscarSolicitante = (input) => {
    let text =  input.target.value.trim()

    if (text.length > 0) {
      for (let item of personas){
        if (item.nombre.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
          setSolicitante(item)
          break;
        }
      }
    } else {
      setSolicitante(null)
    }
    
  }

  const getFecha = () => {
    var fecha = new Date();
    var dia = fecha.getDate() < 10 ? "0"+fecha.getDate() : fecha.getDate()
    var mes = fecha.getMonth() < 9 ? "0"+(fecha.getMonth() + 1) : (fecha.getMonth() + 1)
    return `${fecha.getFullYear()}-${mes}-${dia}`
  }

  const onSubmit = (data, event) => {
    // var myjson = {
    //   "dni_ruc": data.dniOruc,
    //   "nombre": data.nombre,
    //   "correo": data.correo,
    //   "cod_estudiante": data.codigoEstudiante,
    //   "puesto": {
    //       "id_puesto": data.puesto,
    //       "nombre": data.puesto === 1 ? "Estudiante" : "Docente"
    //   }
    // }
    // postData(myjson)
    // event.target.reset()
  }

  const postData = (myjson) => {
    // try {
    //   fetch('http://localhost:8090/api/personas', {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },

    //     body: JSON.stringify(myjson)
    //   })
    //   .then(response => response.json())
    // } catch (error) {
     
    // }
  }

  return (
    <div className="container-main">
      <h2 className="default-title">Registrar nuevo Trámite</h2>
      <form className="form-default " onSubmit={handleSubmit(onSubmit)}>
      <p className="default-subtitle">Datos generales</p>
        <label className="label-default"> Tipo de Trámite
          <select 
            name="puesto" 
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
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'nombre obligatorio'},
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
              <ul className="info-solicitante">
              <li><b>Datos del solicitante</b></li>
              <li>{solicitante.nombre}</li>
              <li>{solicitante.correo}</li>
              <li>{solicitante.puesto.nombre}</li>
              </ul>
            ) : ( <ul className="info-solicitante"><li>Ingrese el nombre</li> </ul>)
          }
          
        
        <button className="button-default">Registrar</button>
        <input name="fecha" type="text" value={getFecha()} readOnly="readonly" className="tramite-fecha" />
      </form>
    </div>
  );
}
 
export default TramiteForm;