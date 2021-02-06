
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {NavLink} from "react-router-dom"
import {cambiarPassword} from '../redux/loginDucks'
import './login.css'

const CambiarContraseniaForm = () => {

  const dispatch = useDispatch()
  const {register, errors, handleSubmit} = useForm()

  const onSubmit = async (data, event) => {
    let token = window.location.href.split('token=')
    dispatch(cambiarPassword(data, token[1]))
  }

  return (
    <div className="container-login">
      <h2 className="default-title">Cambiar Contraseña</h2>
      <div className="container-login-flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="login-label"> Nueva contraseña
            <input
              type="password"
              name="password"
              className="login-input"
              ref={
                register({
                  required : {value: true, message: 'contraseña obligatorio'}
                })
              }
            />
          </label>
          <span className="login-error">
            {
              errors?.password?.message
            }
          </span>
          <label className="login-label"> Repetir contraseña
            <input
              type="password"
              name="repeat_password"
              className="login-input"
              ref={
                register({
                  required : {value: true, message: 'repetir contraseña obligatorio'}
                })
              }
            />
          </label>
          <span className="login-error">
            {
              errors?.repeat_password?.message
            }
          </span>
          <button className="login-btn">Cambiar</button>
        </form>
      </div>
      <div className="login-footer">
        <NavLink to="/login" className="login-footer-link">
          Iniciar Sesión
        </NavLink>
      </div>
    </div>
  );
}
 
export default CambiarContraseniaForm;