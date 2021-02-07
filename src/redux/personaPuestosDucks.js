import alert from '../helpers/alertas'
import valida from '../helpers/validaciones'

const dataInicial = {
  array : []
}

const GET_PUESTOS = 'GET_PUESTOS'

export default function puestoReducer(state = dataInicial, action){
  switch(action.type){
    case GET_PUESTOS:
      return {...state, array: action.payload}
    default:
      return state
  }
}

export const getPuestos = () => async (dispatch, getState) => {
  try {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch('http://localhost:8090/api/personas/puestos', {
      method: 'GET',
      headers: headers
    })
    const data = await response.json()
    dispatch({
      type: GET_PUESTOS,
      payload: data
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}