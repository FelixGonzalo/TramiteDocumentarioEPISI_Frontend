import alert from '../helpers/alertas'

const dataInicial = {
  array : []
}

const GET_SOLICITUD_ESTADOS = 'GET_SOLICITUD_ESTADOS'

export default function solicitudEstadosReducer(state = dataInicial, action) {
  switch(action.type){
    case GET_SOLICITUD_ESTADOS:
      return {...state, array: action.payload}
      default:
        return state
  } 
}

export const getSolicitudEstadosPendiente = (idSolicitud) => async (dispatch) => {
  try {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch('http://localhost:8090/api/solicitudes/listar-estados/' + idSolicitud, {
      method: 'GET',
      headers: headers
    })
    const data = await response.json()
    dispatch({
      type: GET_SOLICITUD_ESTADOS,
      payload: data
    })
    if (response.status !== 200) {
      alert.miniAlert(response.status + ': error al obtener solicitudes','warning')
    }
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}

export const cambiarEstadoSolicitud = (idSolicitud, idEstado, formdata, nombreEstado, rutaDestino) => async (dispatch) => {
  try {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('mitoken'));
    const response = await fetch(`http://localhost:8090/api/solicitudes/actualizar-estado/${idSolicitud}/estado/${idEstado}`, {
      method: 'PUT',
      headers: headers,
      body: formdata
    })
    const data = await response.json()
    console.log('respuesta de cambiar estado:')
    console.log(response.status)
    console.log('data:')
    console.log(data)
    if (response.status !== 201) {
      alert.miniAlert(response.status + ': error al cambiar el estado de la solicitud','warning')
    } else if (response.status === 201)  {
      alert.miniAlert('Archivo cambiado a estado: ' + nombreEstado,'success')
      rutaDestino.push('/inicio')
    }
  } catch (error) {
    alert.miniAlert(error,'warning')
  }
}
