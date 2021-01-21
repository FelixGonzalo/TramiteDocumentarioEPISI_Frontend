import alert from '../helpers/alertas'

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
    const response = await fetch('http://localhost:8090/api/personas/puestos')
    const data = await response.json()
    dispatch({
      type: GET_PUESTOS,
      payload: data
    })
    if(data.status === 500) {
      alert.alertError(`${data.status}: ${data.error}`)
    }
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}