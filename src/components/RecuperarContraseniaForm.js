import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from "react-router-dom"
import iconLogin from './img/login.svg'
import './login.css'

const RecuperarContraseniaForm = () => {

  const dispatch = useDispatch()
  const {register, errors, handleSubmit} = useForm()

  const onSubmit = async (data, event) => {
    
  }

  return (
    <div className="container-login">
      <h2 className="default-title">Recuperar Contraseña</h2>
      <div className="container-login-flex">
        <img src={iconLogin} width="130px" alt=""/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="login-label"> correo
            <input
              type="text"
              name="correo"
              className="login-input"
              ref={
                register({
                  required : {value: true, message: 'correo obligatorio'}
                })
              }
            />
          </label>
          <span className="login-error">
            {
              errors?.correo?.message
            }
          </span>
          <button className="login-btn">Recuperar</button>
        </form>
      </div>
      <div className="login-footer">
        Enviaremos un mensaje a su correo
        <NavLink to="/login" className="login-footer-link">
          Iniciar Sesión
        </NavLink>
      </div>
    </div>
  );
}
 
export default RecuperarContraseniaForm;