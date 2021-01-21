import Swal from 'sweetalert2'

export default function alertError(error){  
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: error,
  })
}