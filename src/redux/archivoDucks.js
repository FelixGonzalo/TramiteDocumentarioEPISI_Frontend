import alert from '../helpers/alertas'

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
    if(data.status === 500) {
      alert.alertError(`${data.status}: ${data.error}`)
    }
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}