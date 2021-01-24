import Swal from 'sweetalert2'

const alertError = (error) => {  
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error,
  })
}

const miniAlert = (mensaje = "mensaje",icon = "info") => {
  const Toast  = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: icon,
    title: mensaje,
  })  
}

const alertOk = () => {  
  Swal.fire({
    icon: 'success',
    title: 'Listo !!',
  })
}

const alert = {
  alertError,
  alertOk,
  miniAlert
}

export default alert