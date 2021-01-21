import Swal from 'sweetalert2'

const alertError = (error) => {  
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: error,
  })
}

const alertOk = (mensaje) => {  
  Swal.fire({
    icon: 'success',
    title: 'Listo...',
    text: mensaje,
  })
}

const alert = {
  alertError,
  alertOk
}

export default alert