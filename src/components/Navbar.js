import {NavLink} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {cerrarSesion} from '../redux/loginDucks'

import './navbar.css'
import iconInicio from './img/hogar.svg'

const Navbar = () => {

  const dispatch = useDispatch()

  const salir = () => {
    dispatch(cerrarSesion())
    // mejorar validacion con intervencion del servidor
  }

  return (
    <nav className="navbar">
      <NavLink to="/inicio" exact className="navbar-option">
        <img src={iconInicio} alt="inicio" height="25px"/>
      </NavLink>
      <NavLink to="/listar.personas" className="navbar-option" activeClassName="navbar-activate">
        Listar personas
      </NavLink>
      <NavLink to="/registrar.persona" className="navbar-option" activeClassName="navbar-activate">
        Registrar persona
      </NavLink>
      <NavLink to="/listar.tramites" className="navbar-option" activeClassName="navbar-activate">
        Lista de trámites
      </NavLink>
      <NavLink to="/registrar.tramite" className="navbar-option" activeClassName="navbar-activate">
        Registrar trámite
      </NavLink>
      <NavLink to="/login" exact className="navbar-option" activeClassName="navbar-activate" onClick={(e) => salir()}>
        Salir
      </NavLink>
    </nav>
  );
}
 
export default Navbar;