import {useForm} from 'react-hook-form'
import {useEffect, useState} from 'react'
import './defaultForm.css'

import {useDispatch, useSelector} from 'react-redux'
import {getPuestosToRegistrar} from '../redux/personaPuestosDucks'
import {postPersona} from '../redux/personaDucks'

const PersonaForm = () => {

  const dispatch = useDispatch()
  const puestos = useSelector(store => store.personaPuestos.array)

  const [registrarEmpresa, setRegistrarEmpresa] = useState(false)

  const {register, errors, handleSubmit} = useForm()

  useEffect(()=>{
    dispatch(getPuestosToRegistrar())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (data, event) => {
    dispatch(postPersona(data, event))
  }

  const addInputsSegunPuesto = (e) => {
    e !== '1' ? setRegistrarEmpresa(true) : setRegistrarEmpresa(false)
  }

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  }
  return (
    <form className="form-default" onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => checkKeyDown(e)}>
      <label className="label-default"> Puesto
        <select 
          onChange={e => addInputsSegunPuesto(e.currentTarget.value)}
          name="puesto" 
          className="input-default"
          ref={register()}
        >
        {
          puestos.length > 0 ? 
          puestos.map((item) => (
            <option key={item.id} value={item.id}>{item.nombre}</option>
          )) : ( <option>No hay datos</option>)
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
      {
        registrarEmpresa !== true ? (
          <div>
            <label className="label-default"> Apellidos
            <input
                type="text"
                name="apellidos"
                className="input-default"
                ref={
                  register({
                    required : {value: true, message: 'Apelligos obligatorio'},
                    pattern : {value: /^[A-Za-zÀ-ÿ\s]+$/i, message: 'apellidos no válido' }
                  })
                }
              />
            </label>
            <span className="input-error">
              {
                errors?.apellidos?.message
              }
            </span>
          </div>
        ) : null
      }
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
      <label className="label-default"> DNI/RUC
        <input
          type="text"
          name="dniOruc"
          className="input-default"
          ref={
            register({
              required : {value: true, message: 'DNI/RUC obligatorio'},
              pattern : {value: /[0-9]+$/, message: 'se acepta solo números' },
              minLength : {value: 8, message: 'muy corto, son 8 caracteres para DNI'},
              maxLength : {value: 11, message: 'te pasaste, solo 11 caracteres para RUC'}
            })
          }
        />
      </label>
      <span className="input-error">
        {errors?.dniOruc?.message}
      </span>
      {
        registrarEmpresa !== true ? (
          <div>
            <label className="label-default" > Cod. estudiante
              <input
                type="text"
                name="codigoEstudiante"
                className="input-default"
                ref={
                  register({
                    required : {value: true, message: 'Cod. estudiante obligatorio'},
                    pattern : {value: /[0-9]+$/, message: 'solo se acepta números' },
                    minLength : {value: 10, message: 'muy corto, son 10 números'},
                    maxLength : {value: 10, message: 'muy grande, solo 10 números'}
                  })
                }
              />
            </label>
            <span className="input-error">
              {errors?.codigoEstudiante?.message}
            </span>
          </div>
        ) : null
      }
      <button className="button-default">Registrar</button>
    </form>
  );
}
 
export default PersonaForm;