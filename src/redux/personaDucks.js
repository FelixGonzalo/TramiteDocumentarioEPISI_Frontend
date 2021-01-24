import alert from '../helpers/alertas'
import valida from '../helpers/validaciones'

const dataInicial = {
  array : [],
}

const GET_PERSONAS = 'GET_PERSONAS'
const GET_PERSONAS_DNIRUC = 'GET_PERSONAS_DNIRUC'
const GET_PERSONAS_CODESTUDIANTE = 'GET_PERSONAS_CODESTUDIANTE'

export default function personaReducer(state = dataInicial, action){
  switch(action.type){
    case GET_PERSONAS:
      return {...state, array: action.payload}
    case GET_PERSONAS_DNIRUC:
      return {...state, array: action.payload}
    case GET_PERSONAS_CODESTUDIANTE:
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

export const getPersonasDniRuc = (dni = -1) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8090/api/personas/buscar-por-dni/' +  dni)
    const data = await response.json()
    dispatch({
      type: GET_PERSONAS_DNIRUC,
      payload: data
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}

export const getPersonasCodEstudiante = (codigoEstudiante = -1) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8090/api/personas/buscar-por-codEstudiante/' +  codigoEstudiante)
    const data = await response.json()
    dispatch({
      type: GET_PERSONAS_CODESTUDIANTE,
      payload: data
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}

export const postPersona = (persona, event) => async () => {
  try {

    const validarDniRuc = await fetch('http://localhost:8090/api/personas/buscar-por-dni/' +  persona.dniOruc)
    const DniRuc = await validarDniRuc.json()
    if (validarDniRuc.status === 200 && DniRuc.length > 0) {
      alert.miniAlert('Este DNI ya existe','warning')
    } else {
      const validarCodEstudiante = await fetch('http://localhost:8090/api/personas/buscar-por-codEstudiante/' +  persona.codigoEstudiante)
      const CodEstudiante = await validarCodEstudiante.json()
      if (validarCodEstudiante.status === 200 && CodEstudiante.length > 0) {
        alert.miniAlert('Este Código de estudiante ya existe','warning')
      } else {
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
        valida.manejoErrorPost(response.status)
      }
    }
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}

