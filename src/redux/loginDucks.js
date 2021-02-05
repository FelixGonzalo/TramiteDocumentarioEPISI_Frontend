
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
    }
  } catch (error) {
    
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
  const response = await fetch('http://localhost:8090/verificarSesion',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
}