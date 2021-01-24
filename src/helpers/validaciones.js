import alert from '../helpers/alertas'

const manejoErrorGet = (status = 200, data = 0) => {
  let mensaje = "Error"
  if (status !== 200) {
    mensaje = status + ': Error del servidor'
    alert.miniAlert(mensaje,'warning')
  } else if (data.length === 0) {
    mensaje = 'No hay datos Registrados'
    alert.miniAlert(mensaje,'warning')
  }
}

const valida = {
  manejoErrorGet
}

export default valida