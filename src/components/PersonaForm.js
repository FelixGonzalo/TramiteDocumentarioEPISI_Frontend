import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import './defaultForm.css'

const PersonaForm = () => {

  const {register, errors, handleSubmit} = useForm()

  const [puestos, setPuestos] = useState([]);

  const getPuestos = async () => {
    const data = await fetch('http://localhost:8090/api/personas/puestos')
    const response = await data.json()
    setPuestos(response)
  }

  useEffect(()=>{
    getPuestos()
  }, [])

  const postData = (json) => {
    try {
      fetch('http://localhost:8090/api/personas', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },

        body: JSON.stringify(json)
      })
      .then(response => response.json())
      .then(response => console.log(response))
    } catch (error) {
     
    }
  }

  const onSubmit = (data, event) => {
    var myjson = {
      "dniRuc": data.dniOruc,
      "nombre": data.nombre,
      "correo": data.correo,
      "codEstudiante": data.codigoEstudiante,
      "puesto": {
          "id": Number(data.puesto),
      }
    }
    console.log(myjson)
    postData(myjson)
    event.target.reset()
  }

  return (
    <div className="container-main">
      <h2 className="default-title">Registrar persona</h2>
      <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
        <label className="label-default"> Nombre
          <input
            type="text"
            name="nombre"
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'nombre obligatorio'},
                pattern : {value: /^[A-Za-zÀ-ÿ\s]+$/i, message: 'nombre no válido' }
              })
            }
          />
        </label>
        <span className="input-error">
          {
            errors?.nombre?.message
          }
        </span>
        <label className="label-default"> DNI/RUC
          <input
            type="text"
            name="dniOruc"
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'DNI/RUC obligatorio'},
                pattern : {value: /[0-9]+$/, message: 'Solo números' },
                minLength : {value: 8, message: 'muy corto, son 8 caracteres para DNI'},
                maxLength : {value: 11, message: 'te pasaste, solo 11 caracteres para RUC'}
              })
            }
          />
        </label>
        <span className="input-error">
          {errors?.dniOruc?.message}
        </span>
        <label className="label-default"> Correo
          <input
            type="text"
            name="correo"
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'Correo obligatorio'},
                pattern : {value: /[a-z0-9_.-]+@[a-z]+\.[a-z0-9_.-]+[a-z0-9]/i, message: 'correo no válido' }
              })
            }
          />
        </label>
        <span className="input-error">
          {errors?.correo?.message}
        </span>
        <label className="label-default"> Cod. estudiante
          <input
            type="text"
            name="codigoEstudiante"
            className="input-default"
            ref={
              register({
                required : {value: true, message: 'código de estudiante obligatorio'},
                pattern : {value: /[0-9]+$/, message: 'Solo números' },
                minLength : {value: 10, message: 'muy corto, son 10 caracteres'},
                maxLength : {value: 10, message: 'te pasaste, solo 10 caracteres'}
              })
            }
          />
        </label>
        <span className="input-error">
          {errors?.codigoEstudiante?.message}
        </span>
        <label className="label-default"> Puesto
          <select 
            name="puesto" 
            className="input-default"
             ref={register()}
          >
          {
            puestos.map((item) => (
              <option key={item.id} value={item.id}>{item.nombre}</option>
            ))
          }
          </select>
        </label>
        <button className="button-default">Registrar</button>
      </form>
    </div>
  );
}
 
export default PersonaForm;