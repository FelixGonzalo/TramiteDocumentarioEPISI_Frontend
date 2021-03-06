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

export const enviarCodigoTofirmarSolicitud = (idSolicitud) => async () => {
  try {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    headers.append('Content-Type', 'application/json');
    const response = await fetch('http://localhost:8090/api/solicitudes/firmar/' + idSolicitud, {
      method: 'POST',
      headers: headers
    })
    switch (response.status) {
      case 200:
          return 'codigo Enviado'
        break;
      default:
          alert.miniAlert('Ahora no podemos atenderlo','warning')
          return 'codigo Error'
        break;
    }
  } catch (error) {
    console.log(error)
  }
}

export const firmarSolicitud = (codigoFirma, rutaDestino) => async () => {
  try {
    let miformdata = new FormData()
    miformdata.append('codigo', codigoFirma);
    console.log('codigo ' + miformdata.get('codigo'))
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch('http://localhost:8090/api/solicitudes/firmar', {
      method: 'POST',
      headers: headers,
      body: miformdata
    })
    switch (response.status) {
      case 201:
          alert.bigAlert('Solicitud firmada: ', codigoFirma, 'success')
          rutaDestino.push('/inicio')
        break;
      default:
          alert.miniAlert('Error al firmar solicitud','warning')
        break;
    }
  } catch (error) {
    console.log(error)
  }
}