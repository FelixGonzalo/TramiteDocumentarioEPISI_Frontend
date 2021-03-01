import {NavLink} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {cerrarSesion} from '../redux/loginDucks'
import {useEffect, useState} from 'react'
import './navbar.css'
import iconUser from './img/carnet_estudiante.svg'
import iconInicio from './img/hogar.svg'

const Navbar = () => {

  const dispatch = useDispatch()

  const salir = () => {
    dispatch(cerrarSesion())
    // mejorar validacion con intervencion del servidor
  }

  const [usuarioActual, setUsuarioActual] = useState(null)
  const [tipoUsuario, setTipoUsuario] = useState('ROLE_USER')

  useEffect(() => {
    const usuarioActual = JSON.parse(window.atob(localStorage.getItem('mitoken').split('.')[1]))
    setUsuarioActual(usuarioActual)
    usuarioActual.authorities.forEach(tipo => {
      tipo === 'ROLE_ADMIN' && (setTipoUsuario('ROLE_ADMIN'))
    });
  }, [])

  return (
    <nav className="navbar">
      <div className="usuario-actual">
        <img src={iconUser} alt="" height="20px"/>
        <span>{usuarioActual !== null && (usuarioActual.user_name)}</span>
      </div>
      <NavLink to="/inicio" exact className="navbar-option">
        <img src={iconInicio} alt="inicio" height="25px"/>
      </NavLink>
      {
        tipoUsuario === 'ROLE_ADMIN' && (
          <NavLink to="/listar.personas" className="navbar-option" activeClassName="navbar-activate">
            Listar personas
          </NavLink>
        )
      }
      {
        tipoUsuario === 'ROLE_ADMIN' && (
          <NavLink to="/registrar.persona" className="navbar-option" activeClassName="navbar-activate">
            Registrar persona
          </NavLink>
        )
      }
      <NavLink to="/listar.tramites" className="navbar-option" activeClassName="navbar-activate">
        Lista de trámites
      </NavLink>
      {
        tipoUsuario === 'ROLE_ADMIN' && (
          <NavLink to="/registrar.tramite" className="navbar-option" activeClassName="navbar-activate">
            Registrar trámite
          </NavLink>
        )
      }
      <NavLink to="/login" exact className="navbar-option" activeClassName="navbar-activate" onClick={(e) => salir()}>
        Salir
      </NavLink>
    </nav>
  );
}
 
export default Navbar;