import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import './defaultForm.css'

import {useDispatch, useSelector} from 'react-redux'
import {getPuestos} from '../redux/puestoDucks'
import {postPersona} from '../redux/personaDucks'

const PersonaForm = () => {

  const dispatch = useDispatch()
  const puestos = useSelector(store => store.puestos.array)

  const {register, errors, handleSubmit} = useForm()

  useEffect(()=>{
    dispatch(getPuestos())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (data, event) => {
    dispatch(postPersona(data, event))
  }

  const inputEstudiante = document.getElementById('inputEstudiante')
  const addInputsSegunPuesto = (e) => {
    e !== '1' ? inputEstudiante.classList.add('deshabilitar') : inputEstudiante.classList.remove('deshabilitar')
  }

  return (
    <div className="container-main">
      <h2 className="default-title">Registrar persona</h2>
      <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
        <label className="label-default"> Puesto
          <select 
            onChange={e => addInputsSegunPuesto(e.currentTarget.value)}
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
        <label id="inputEstudiante" className="label-default" > Cod. estudiante
          <input
            type="text"
            name="codigoEstudiante"
            className="input-default"
            ref={
              register({
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
        <button className="button-default">Registrar</button>
      </form>
    </div>
  );
}
 
export default PersonaForm;