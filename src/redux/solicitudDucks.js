import alert from '../helpers/alertas'
import valida from '../helpers/validaciones'

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
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch('http://localhost:8090/api/solicitudes', {
      method: 'GET',
      headers: headers
    })
    const data = await response.json()
    dispatch({
      type: GET_SOLICITUDES,
      payload: data.reverse()
    })
    valida.manejoErrorGet(response.status, data)
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
} // Solicitudes que no estan archivadas

export const postSolicitud = (solicitud, event, solicitante,destinatario) => async (dispatch, getState) => {
  try {
    var myjson = {
      "descripcion": solicitud.descripcion,
      "tipoSolicitud": {
          "id": solicitud.tipoTramite,
      },
      "personaEmisor": {
          "id": solicitante.id
      },
      "personasReceptoras": [
          {
              "id": destinatario.id
          },
      ]
    }
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    headers.append('Content-Type', 'application/json');
    const response = await fetch('http://localhost:8090/api/solicitudes', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(myjson)
    })
    const data = await response.json()
    if(data.status === 500) {
      alert.alertError(`${data.status}: ${data.error}`)
    } else {
      alert.alertOk()
      event.target.reset()
    }
  } catch (error) {
    console.log(error)
    alert.alertError(error)
  }
}