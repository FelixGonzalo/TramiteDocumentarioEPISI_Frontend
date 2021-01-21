import alert from '../helpers/alertas'

// constantes
const dataInicial = {
  array : []
} // tiene el estado que inicia limpio


// action.type:
const GET_PERSONAS = 'GET_PERSONAS'

//reducer
export default function personaReducer(state = dataInicial, action){
  switch(action.type){
    case GET_PERSONAS:
      return {...state, array: action.payload}
    default:
      return state
  }
}

// acciones 1()nuestros parametros 2()parametros necesarios
//dispatch activa el reducer y el getState obtiene la dataInicial
export const getPersonas = () => async (dispatch, getState) => {
  try {
    const response = await fetch('http://localhost:8090/api/personas')
    const data = await response.json()
    dispatch({
      type: GET_PERSONAS,
      payload: data
    })
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}

export const postPersona = (persona) => async (dispatch, getState) => {
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
    alert.alertOk(`${data.nombre} registrado !!`)
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}