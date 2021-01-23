
const fechaSistema = () => {
  var fecha = new Date();
  var dia = fecha.getDate() < 10 ? "0"+fecha.getDate() : fecha.getDate()
  var mes = fecha.getMonth() < 9 ? "0"+(fecha.getMonth() + 1) : (fecha.getMonth() + 1)
  return `${fecha.getFullYear()}-${mes}-${dia}`
}

const date = {
  fechaSistema
}

export default date