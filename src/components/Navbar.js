import {NavLink} from "react-router-dom"

import './navbar.css'
import iconInicio from './img/hogar.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="navbar-option">
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
      <NavLink to="/listar.archivos" className="navbar-option" activeClassName="navbar-activate">
        Listar archivos
      </NavLink>
      <NavLink to="/registrar.archivo" className="navbar-option" activeClassName="navbar-activate">
        Registrar archivo
      </NavLink>
      <NavLink to="/" exact className="navbar-option" activeClassName="navbar-activate">
        Salir
      </NavLink>
    </nav>
  );
}
 
export default Navbar;