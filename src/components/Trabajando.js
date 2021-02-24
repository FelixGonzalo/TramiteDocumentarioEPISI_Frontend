import iconUrlDesconocida from './img/trabajando.svg'
import './Trabajando.css'

const Trabajando = (props) => {
  return (
    <div className="container-UrlDesconocida">
      <img src={iconUrlDesconocida} alt="" height="300px"/><br/>
      <p>•.{props.mensaje}.•</p>
    </div>
  );
}
 
export default Trabajando