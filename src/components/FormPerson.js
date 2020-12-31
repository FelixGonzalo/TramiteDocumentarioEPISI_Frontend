import { useForm } from "react-hook-form"
import './formPerson.css'

const FormPerson = () => {

  const {register, errors, handleSubmit} = useForm()

  const onSubmit = (data, event) => {
    var myjson = {
      "dni_ruc": data.dniOruc,
      "nombre": data.nombre,
      "correo": data.correo,
      "cod_estudiante": data.codigoEstudiante,
      "puesto": {
          "id_puesto": data.puesto,
          "nombre": data.puesto === 1 ? "Estudiante" : "Docente"
      }
    }
    postData(myjson)
    event.target.reset()
  }

  const postData = (myjson) => {
    fetch('http://localhost:8090/api/personas', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },

        body: JSON.stringify(myjson)
      })
    .then(response => response.json())
  }

  return (
    <div className="container-main">
      <h2 className="default-title">Registrar persona</h2>
      <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
        <label className="label-default"> Nombre
          <input
            type="text"
            name="nombre"
            placeholder={errors?.nombre?.message}
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'Nombre obligatorio'}
              })
            }
          />
        </label>
        <label className="label-default"> DNI/RUC
          <input
            type="text"
            name="dniOruc"
            placeholder={errors?.dniOruc?.message}
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'DNI/RUC obligatorio'}
              })
            }
          />
        </label>
        <label className="label-default"> Correo
          <input
            type="text"
            name="correo"
            placeholder={errors?.correo?.message}
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'Correo obligatorio'}
              })
            }
          />
        </label>
        <label className="label-default"> Cod. estudiante
          <input
            type="text"
            name="codigoEstudiante"
            placeholder={errors?.codigoEstudiante?.message}
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'Código de estudiante obligatorio'}
              })
            }
          />
        </label>
        <label className="label-default"> Puesto
          <select 
            name="puesto" 
            className="input-default"
             ref={register()}
          >
            <option value="1">Estudiante</option>
            <option value="2">Docente</option>
          </select>
        </label>
        <button className="button-default">Registrar</button>
      </form>
    </div>
  );
}
 
export default FormPerson;