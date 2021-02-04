
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
  let username = 'frontendapp';
  let password = '12345';
  let formdata = new FormData();
  let headers = new Headers();

  formdata.append('grant_type','password');
  formdata.append('username', usuario.username);
  formdata.append('password', usuario.password);

  headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
  fetch('http://localhost:8090/api/security/oauth/token', {
    method: 'POST',
    headers: headers,
    body: formdata
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    localStorage.setItem('mitoken',responseJson.access_token)
  })
  .catch((error) => {
    console.error(error);
  })
}

export const cerrarSesion = () => async () => {
  localStorage.removeItem('mitoken')
}

export const getToken = () => async (dispatch) => {
  try {
    console.log()
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}