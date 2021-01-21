import {useEffect} from 'react'
import './personasList.css'
import iconEstudiante from './img/estudiante.svg'
import iconPersona from './img/persona.svg'

import {useDispatch, useSelector} from 'react-redux'
import {getPersonas} from '../redux/personaDucks'

const PersonasList = () => {

  const dispatch = useDispatch()
  const personas = useSelector(store => store.personas.array)

  useEffect(() => {
    dispatch(getPersonas())
  }, [])
  
  return (
    <main className="container-main">
      <h2 className="default-title">Lista de Personas</h2>
      <div className="table-responsive">
        <table className="adminPerson-list">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Identificación</th>
              <th>Puesto</th>
            </tr>
          </thead>
          <tbody>
            {
              personas.length > 0 ? 
                personas.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index+1 < 10 ? "0"+(index+1) : index+1}</td>
                    <td>{item.nombre}</td>
                    <td>{item.correo}</td>
                    <td>{item.puesto.id === 1 ? item.codEstudiante : item.dniRuc}</td>
                    <td><img src={item.puesto.id === 1 ? iconEstudiante : iconPersona} alt="" height="18px" /> {item.puesto.nombre}</td>
                  </tr>
                )) : (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </main>
  );
}
 
export default PersonasList;