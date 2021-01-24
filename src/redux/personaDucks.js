import alert from '../helpers/alertas'
import valida from '../helpers/validaciones'

const dataInicial = {
  array : []
}

const GET_PERSONAS = 'GET_PERSONAS'

export default function personaReducer(state = dataInicial, action){
  switch(action.type){
    case GET_PERSONAS:
      return {...state, array: action.payload}
    default:
      return state
  }
}

export const getPersonas = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8090/api/personas')
    const data = await response.json()
    dispatch({
      type: GET_PERSONAS,
      payload: data
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}

export const postPersona = (persona, event) => async () => {
  try {
    var myjson = {
      "dniRuc": persona.dniOruc,
      "nombre": persona.nombre,
      "correo": persona.correo,
      "codEstudiante": persona.codigoEstudiante,
      "puesto": {
          "id": Number(persona.puesto),
      }
    }
    const response = await fetch('http://localhost:8090/api/personas', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(myjson)
    })
    const data = await response.json()
    switch (response.status) {
      case 500:
          alert.alertError(`${response.status}: ${response.error}`)
        break;
      case 400:
          alert.alertError(`${response.status}: Error`)
        break;
      default:
        alert.alertOk(`${data.nombre} registrado !!`)
        event.target.reset()
        break;
    }
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}

