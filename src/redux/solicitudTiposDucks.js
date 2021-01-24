import alert from '../helpers/alertas'
import valida from '../helpers/validaciones'

const dataInicial = {
  array : []
}

const GET_SOLICITUD_TIPOS = 'GET_SOLICITUD_TIPOS'

export default function solicitudTiposReducer(state = dataInicial, action) {
  switch(action.type){
    case GET_SOLICITUD_TIPOS:
      return {...state, array: action.payload}
      default:
        return state
  } 
}

export const getSolicitudesTipos = () => async (dispatch, getState) => {
  try {
    const response = await fetch('http://localhost:8090/api/solicitudes/tipo-solicitudes')
    const data = await response.json()
    dispatch({
      type: GET_SOLICITUD_TIPOS,
      payload: data
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}