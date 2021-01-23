import alert from '../helpers/alertas'

const dataInicial = {
  array : []
}

const GET_SOLICITUDES = 'GET_SOLICITUDES'

export default function solicitudReducer(state = dataInicial, action) {
  switch(action.type){
    case GET_SOLICITUDES:
      return {...state, array: action.payload}
      default:
        return state
  } 
}

export const getSolicitudes = () => async (dispatch, getState) => {
  try {
    const response = await fetch('http://localhost:8090/api/solicitudes')
    const data = await response.json()
    dispatch({
      type: GET_SOLICITUDES,
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

export const postSolicitud = (solicitud, event) => async (dispatch, getState) => {
  try {
    var myjson = {
      "descripcion": solicitud.descripcion,
      "tipoSolicitud": {
          "id": solicitud.tipoTramite,
      },
      "personaEmisor": {
          "id": solicitud.idSolicitante
      },
      "personasReceptoras": [
          {
              "id": solicitud.idDestinatario
          },
      ]
    }
    const response = await fetch('http://localhost:8090/api/solicitudes', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(myjson)
    })
    const data = await response.json()
    if(data.status === 500) {
      alert.alertError(`${data.status}: ${data.error}`)
    } else {
      // alert.alertOk(`${data.nombre} registrado !!`)
      event.target.reset()
    }
    console.log(data)
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}