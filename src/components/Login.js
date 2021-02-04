import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {iniciarSesion} from '../redux/loginDucks'
import './login.css'
import iconLogin from './img/login.svg'

const Login = () => {

  const dispatch = useDispatch()
  const {register, errors, handleSubmit} = useForm()

  const onSubmit = async (data, event) => {
    dispatch(iniciarSesion(data,event))
  }

  return (
    <div className="container-login">
      <h2 className="default-title">Login</h2>
      <div className="container-login-flex">
        <img src={iconLogin} width="150px" alt=""/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="login-label"> Username
            <input
              type="text"
              name="username"
              className="login-input"
              ref={
                register({
                  required : {value: true, message: 'username obligatorio'}
                })
              }
            />
          </label>
          <span className="login-error">
            {
              errors?.username?.message
            }
          </span>
          <label className="login-label"> Contraseña
            <input
              type="password"
              name="password"
              className="login-input"
              ref={
                register({
                  required : {value: true, message: 'contraseña obligatorio'},
                  pattern : {value: /^[0-9A-Za-zÀ-ÿ\s]+$/i, message: 'contraseña no válido' }
                })
              }
            />
          </label>
          <span className="login-error">
            {
              errors?.password?.message
            }
          </span>
          <button className="login-btn">Registrar</button>
        </form>
      </div>
      <p className="login-footer">
        Demo del Sistema
      </p>
    </div>
  );
}
 
export default Login;