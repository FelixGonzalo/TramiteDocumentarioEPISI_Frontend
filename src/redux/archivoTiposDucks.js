import alert from '../helpers/alertas'
import valida from '../helpers/validaciones'

const dataInicial = {
  array : []
}

const GET_ARCHIVOS_TIPOS = 'GET_ARCHIVOS_TIPOS'

export default function archivoTiposReducer(state = dataInicial, action) {
  switch(action.type){
    case GET_ARCHIVOS_TIPOS:
      return {...state, array: action.payload}
    default:
      return state
  }
}

export const getArchivoTipos = () => async (dispatch, getState) => {
  try {
    const response = await fetch('http://localhost:8090/api/archivos/tipoArchivos')
    const data = await response.json()
    dispatch({
      type: GET_ARCHIVOS_TIPOS,
      payload: data
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}