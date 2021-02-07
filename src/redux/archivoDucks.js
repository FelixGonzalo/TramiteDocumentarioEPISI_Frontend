import alert from '../helpers/alertas'
import valida from '../helpers/validaciones'

const dataInicial = {
  array : []
}

const GET_ARCHIVOS = 'GET_ARCHIVOS'

export default function archivoReducer(state = dataInicial, action) {
  switch(action.type){
    case GET_ARCHIVOS:
      return {...state, array: action.payload}
    default:
      return state
  }
}

export const getArchivos = () => async (dispatch, getState) => {
  try {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch('http://localhost:8090/api/archivos', {
      method: 'GET',
      headers: headers
    })
    const data = await response.json()
    dispatch({
      type: GET_ARCHIVOS,
      payload: data
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}

export const getArchivosSinSolicitud = () => async (dispatch, getState) => {
  try {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch('http://localhost:8090/api/archivos/archivos-sin-solicitud', {
      method: 'GET',
      headers: headers
    })
    const data = await response.json()
    dispatch({
      type: GET_ARCHIVOS,
      payload: data
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}

export const postArchivo = (archivo, event) => async (dispatch, getState) => {
  try {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    let formdata = new FormData();
    formdata.append('documento', archivo.documento[0]);
    formdata.append('descripcion', archivo.descripcion);
    formdata.append('tipoArchivo.id', archivo.tipoArchivo);
    const response = await fetch('http://localhost:8090/api/archivos/crear-con-file', {
      method: 'POST',
      headers: headers,
      body: formdata
    })
    valida.manejoMiniErrorPost(response.status)
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}

export const deleteArchivo = (id) => async () => {
  try {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch('http://localhost:8090/api/archivos/'+ id, {
      method: 'DELETE',
      headers: headers
    })
    console.log(response.status)
    valida.manejoMiniErrorDelete(response.status)
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}

export const sendArchivoXcorreo = (data) => async () => {
  try {
    var myjson = {
      "correos": [data.correo]
    }
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch('http://localhost:8090/api/archivos/enviar-archivo/' + data.idDocumento, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(myjson)
    })
    const data = response.json()
    console.log(response.status)
    console.log("----")
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}