import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import './defaultForm.css'
import './tramiteForm.css'
import fecha from '../helpers/fechas'
import {useDispatch, useSelector} from 'react-redux'
import {getSolicitudesTipos} from '../redux/solicitudTiposDucks'
import {getPersonas} from '../redux/personaDucks'
import {postSolicitud} from '../redux/solicitudDucks'


const TramiteForm = () => {

  const dispatch = useDispatch()
  const tiposTramite = useSelector(store => store.solicitudTipos.array)
  const personas = useSelector(store => store.personas.array)

  const {register, errors, handleSubmit} = useForm()

  const [solicitante, setSolicitante] = useState(null)
  const [destinatario, setDestinatario] = useState(null)

  useEffect(()=>{
    dispatch(getSolicitudesTipos())
    dispatch(getPersonas())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const buscarPersona = (input) => {
    let text =  input.target.value.trim()
    if (text.length > 0) {
      for (let item of personas){
        if (item.nombre.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
          return item
        }
      }
    } else {
      return null
    }
  }

  const buscarSolicitante = (e) => {
    setSolicitante(buscarPersona(e))
    if (e.code === 'Enter' && solicitante !== null && solicitante !== undefined) e.target.value = solicitante.nombre;
  }

  const buscarDestinatario = (e) => {
    setDestinatario(buscarPersona(e))
    if (e.code === 'Enter' && destinatario !== null && destinatario !== undefined ) e.target.value = destinatario.nombre;
  }

  const onSubmit = (data, event) => {
    dispatch(postSolicitud(data, event,solicitante, destinatario))
  }

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  }

  return (
    <form className="form-default " onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => checkKeyDown(e)}>
      <p className="default-subtitle">Datos generales</p>
      <label className="label-default"> Tipo de Trámite
        <select 
          name="tipoTramite" 
          className="input-default"
            ref={register()}
        >
        {
          tiposTramite.length > 0 ? 
          tiposTramite.map((item) => (
            <option key={item.id} value={item.id}>{item.nombre}</option>
          )) : (<option>No hay datos</option>)
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
      <input
          onKeyDown={e => buscarSolicitante(e)}
          type="search"
          name="solicitante"
          placeholder="Nombre de solicitante"
          className="input-default input-buscador"
          ref={
            register({
              required : {value: true, message: 'solicitante obligatorio'},
            })
          }
        />
      <span className="input-error">
        {
          errors?.solicitante?.message
        }
      </span>
      {
        solicitante !== null && solicitante !== undefined ? (
          <ul className="info-persona">
          <li><span className="persona-dato">{solicitante.puesto.nombre}:</span> {solicitante.nombre}</li>
          </ul>
        ) : ( <ul className="info-persona"><li></li> </ul>)
      }
      <p className="default-subtitle">Datos del destinatario</p>
      <input
        onKeyDown={(e) => buscarDestinatario(e)}
        type="search"
        name="destinatario"
        placeholder="Nombre de destinatario"
        className="input-default input-buscador"
        ref={
          register({
            required : {value: true, message: 'destinatario obligatorio'},
          })
        }
      />
      <span className="input-error">
        {
          errors?.destinatario?.message
        }
      </span>
      {
        destinatario !== null && destinatario !== undefined ? (
          <ul className="info-persona">
          <li><span className="persona-dato">{destinatario.puesto.nombre}:</span> {destinatario.nombre}</li>
          </ul>
        ) : ( <ul className="info-persona"><li></li> </ul>)
      }
      <button type="submit" className="button-default">Registrar</button>
      <input name="fecha" type="text" value={fecha.fechaSistema()} readOnly="readonly" className="tramite-fecha" />
    </form>
  );
}
 
export default TramiteForm;