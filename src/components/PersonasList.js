import {useEffect} from 'react'
import iconEstudiante from './img/estudiante.svg'
import iconPersona from './img/persona.svg'
import iconDni from './img/dni.svg'
import iconEmpresa from './img/empresa.svg'
import iconCarnetEstudiante from './img/carnet_estudiante.svg'

import {useDispatch, useSelector} from 'react-redux'
import {getPersonas} from '../redux/personaDucks'

const PersonasList = () => {

  const dispatch = useDispatch()
  const personas = useSelector(store => store.personas.array)

  useEffect(() => {
    dispatch(getPersonas())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Identificación</th>
            <th>Correo</th>
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
                  <td><img src={item.puesto.id === 1 ? iconCarnetEstudiante : item.dniRuc.length === 8 ? iconDni : iconEmpresa} alt="" height="18px" />{item.puesto.id === 1 ?  " "+ item.codEstudiante : " "+ item.dniRuc}</td>
                  <td>{item.correo}</td>
                  <td><img src={item.puesto.id === 1 ? iconEstudiante : iconPersona} alt="" height="18px" /> {item.puesto.nombre}</td>
                </tr>
              )) : (
                <tr>
                  <td></td>
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
  );
}
 
export default PersonasList;