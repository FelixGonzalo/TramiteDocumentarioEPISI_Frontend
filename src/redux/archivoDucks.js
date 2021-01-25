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
    const response = await fetch('http://localhost:8090/api/archivos')
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
    const response = await fetch('http://localhost:8090/api/archivos/archivos-sin-solicitud')
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
    // var myjson = {
    //   "descripcion": archivo.descripcion,
    //   "documento": archivo.documento,
    //   "tipoArchivo": {
    //       "id": Number(archivo.tipoArchivo),
    //   }
    // }
    let formdata = new FormData();
    formdata.append('descripcion', archivo.descripcion);
    formdata.append('documento', archivo.documento);
    formdata.append('tipoArchivo.id', Number(archivo.tipoArchivo));
    // http://localhost:8090/api/archivos
    const response = await fetch('http://localhost:8090/api/archivos/crear-con-file', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: formdata
    })
    const data = await response.json()
    console.log(data)
    valida.manejoMiniErrorPost(response.status)
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}