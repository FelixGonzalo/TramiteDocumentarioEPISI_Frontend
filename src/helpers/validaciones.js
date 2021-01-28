import alert from '../helpers/alertas'

const manejoErrorGet = (status = 200, data = "") => {
  let mensaje = "Error"
  if (status !== 200) {
    mensaje = status + ': Error al conectar con el servidor'
    alert.miniAlert(mensaje,'warning')
  } else if (data.length === 0) {
    mensaje = 'No hay datos Registrados'
    alert.miniAlert(mensaje,'warning')
  }
}

const manejoErrorPost = (status = 201) => {
  if (status !== 201) {
    alert.miniAlert(`${status}: No se puede registrar`,'error')
  } else {
    alert.alertOk()
  }
}

const manejoMiniErrorPost = (status = 201) => {
  if (status !== 201) {
    alert.miniAlert(`${status}: No se puede registrar`,'error')
  } else {
    alert.miniAlert('Listo!','success')
  }
}

const manejoMiniErrorDelete = (status = 204) => {
  if (status !== 204) {
    alert.miniAlert(`${status}: No se puede eliminar`,'error')
  } else {
    alert.miniAlert('Eliminación lista!','success')
  }
}

const valida = {
  manejoErrorGet,
  manejoErrorPost,
  manejoMiniErrorPost,
  manejoMiniErrorDelete
}

export default valida