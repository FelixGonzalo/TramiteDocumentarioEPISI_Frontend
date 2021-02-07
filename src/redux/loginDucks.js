import alert from '../helpers/alertas'

const dataInicial = {
  array: []
}

const GET_TOKEN = 'GET_TOKEN'

export default function loginReducer(state = dataInicial, action){
  switch (action.type) {
    case GET_TOKEN:
      return {...state, array: action.payload}
    default:
      return state;
  }
}

export const iniciarSesion = (usuario,event) => async () => {
  try {
    let username = 'frontendapp';
    let password = '12345';
    let formdata = new FormData();
    let headers = new Headers();

    formdata.append('grant_type','password');
    formdata.append('username', usuario.username);
    formdata.append('password', usuario.password);

    headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
    const response = await fetch('http://localhost:8090/api/security/oauth/token', {
      method: 'POST',
      headers: headers,
      body: formdata
    })
    const data = await response.json()

    if (response.status === 200) {
      localStorage.setItem('mitoken', data.access_token)
      window.location.href = "/inicio";
    } else {
      alert.miniAlert('Usuario no encontrado','error')
    }
  } catch (error) {
    console.log(error)
  }
}

export const cerrarSesion = () => async () => {
  localStorage.removeItem('mitoken')
}

export const verificarSesion = () => async (dispatch) => {
  try {
    console.log()
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}

export const verificarToken = () => async () => {
  let headers = new Headers();
  headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
  const response = await fetch('http://localhost:8090/verificarSesion', {
      method: 'GET',
      headers: headers
  })
}

export const recuperarPassword = (correo) => async () => {
  try {
    let formdata = new FormData();
    formdata.append('correo', correo.correo);
    const response = await fetch('http://localhost:8090/api/usuarios/forgot_password',{
      method: 'POST',
      body: formdata
    })
    switch (response.status) {
      case 404:
          alert.bigAlert('Correo sin permisos de acceso !!',`Ningun usuario con ( ${correo.correo} ) tiene acceso al sistema`)
        break;
      case 500:
          alert.bigAlert('Oops !! Correo no se encuentra',`Si afirma que el correo es correcto pruebe más tarde`)
        break;
      case 200:
          alert.bigAlert('Revise su correo !!','Puede cerrar esta pestaña', 'success')
        break;
      default:
          alert.miniAlert('Ahora no podemos atenderlo','error')
        break;
    }
  } catch (error) {
    console.log("errorrr")
    console.log(error)
  }
}

export const cambiarPassword = (newPassword, token) => async () => {
  try {
    if (newPassword.password !== newPassword.repeat_password) {
      alert.miniAlert('Error al repetir contraseña','error')
    } else {
      let formdata = new FormData()
      formdata.append('token', token);
      formdata.append('password', newPassword.password);
      formdata.append('repeat-password', newPassword.repeat_password);
      const response = await fetch('http://localhost:8090/api/usuarios/cambiar_contrasenia',{
        method: 'POST',
        body: formdata
      })
      const data = response.json()
      switch (response.status) {
        case 201:
            alert.miniAlert('Listo ahora puede iniciar sesión !!','success')
          break;
        default:
            alert.miniAlert('No se pudo cambiar la contraseña !!','error')
          break;
      }
    }
  } catch (error) {
    console.log(error)
  }
}