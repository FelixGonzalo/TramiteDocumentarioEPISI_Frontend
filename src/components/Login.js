import {useForm} from 'react-hook-form'
import './login.css'
import iconLogin from './img/login.svg'

const Login = () => {

  const {register, errors, handleSubmit} = useForm()

  const onSubmit = async (data, event) => {
    
  }

  return (
    <div className="container-login">
      <h2 className="default-title">Login</h2>
      <div className="container-login-flex">
        <img src={iconLogin} width="150px"/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="login-label"> Correo
            <input
              type="text"
              name="correo"
              className="login-input"
              ref={
                register({
                  required : {value: true, message: 'correo obligatorio'},
                  pattern : {value: /[a-z0-9_.-]+@[a-z]+\.[a-z0-9_.-]+[a-z0-9]/i, message: 'correo no válido' }
                })
              }
            />
          </label>
          <span className="login-error">
            {
              errors?.correo?.message
            }
          </span>
          <label className="login-label"> Contraseña
            <input
              type="password"
              name="contrasenia"
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
              errors?.contrasenia?.message
            }
          </span>
          <button className="login-btn">Registrar</button>
        </form>
      </div>
      <p class="login-footer">
        Demo del Sistema
      </p>
    </div>
  );
}
 
export default Login;