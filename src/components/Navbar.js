import {NavLink} from "react-router-dom"

import './navbar.css'
import iconInicio from './img/hogar.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="navbar-option">
        <img src={iconInicio} alt="inicio" height="25px"/>
      </NavLink>
      <NavLink to="/admin.personas" className="navbar-option" activeClassName="navbar-activate">
        Administrar personas
      </NavLink>
      <NavLink to="/registrar.persona" className="navbar-option" activeClassName="navbar-activate">
        Registrar persona
      </NavLink>
      <NavLink to="/" exact className="navbar-option" activeClassName="navbar-activate">
        Salir
      </NavLink>
    </nav>
  );
}
 
export default Navbar;