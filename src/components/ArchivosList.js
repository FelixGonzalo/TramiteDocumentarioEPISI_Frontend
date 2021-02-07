import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getArchivosSinSolicitud, deleteArchivo} from '../redux/archivoDucks'
import iconActualizar from './img/actualizar_doc.svg'
import iconVer from './img/ver.svg'
import iconEliminar from './img/eliminar.svg'

const ArchivosList = () => {

  const dispatch = useDispatch()
  const archivos = useSelector(store => store.archivos.array)

  useEffect(() => {
    dispatch(getArchivosSinSolicitud())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="table-responsive table-small">
      
      <table>
        <thead>
          <tr>
            <th>
              <button className="btn-actualizar" onClick={(e)=> dispatch(getArchivosSinSolicitud())}>
                <img src={iconActualizar} alt="" height="25px" />
              </button>
            </th>
            <th>tipo file</th>
            <th>descripcion</th>
            <th>file</th>
          </tr>
        </thead>
        <tbody  id="listaArchivos">
          {
            archivos.length > 0 ? 
              archivos.map((item, index) => (
                <tr key={item.id}>
                  <td>{index+1 < 10 ? "0"+(index+1) : index+1}</td>
                  <td>{item.tipoArchivo.nombre}</td>
                  <td>{item.descripcion}</td>
                  <td>
                    <a href={`http://localhost:8090/api/archivos/ver-archivo/${item.id}`} target="_blank" rel="noreferrer">
                      <img src={iconVer} alt="" width="25px"/>
                    </a>
                    <button onClick={(e)=> dispatch(deleteArchivo(item.id))}>
                      <img src={iconEliminar} alt="" width="25px"/>
                    </button>
                  </td>
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
  );
}
 
export default ArchivosList;