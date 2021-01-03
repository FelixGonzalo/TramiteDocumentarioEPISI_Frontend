import { useForm } from "react-hook-form"
import './formDefault.css'
import './formTramite.css'

const FormTramite = () => {

  const {register, errors, handleSubmit} = useForm()

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
            <option value="1">Informe de prácticas</option>
            <option value="2">Solicitud de asesor</option>
            <option value="2">Jurado de Informe</option>
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
            type="search"
            name="solicitante"
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
        <ul className="info-solicitante">
          <li>Félix Castro Cubas</li>
          <li>201714029@uns.edu.pe</li>
          <li>Estudiante</li>
        </ul>
        <button className="button-default">Registrar</button>
        <input name="fecha" type="text" value="07/12/2020" readOnly="readonly" className="tramite-fecha" />
      </form>
    </div>
  );
}
 
export default FormTramite;