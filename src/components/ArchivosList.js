import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getArchivos} from '../redux/archivoDucks'

const ArchivosList = () => {

  const dispatch = useDispatch()
  const archivos = useSelector(store => store.archivos.array)

  useEffect(() => {
    dispatch(getArchivos())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="table-responsive">
        <table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>descripcion</th>
              <th>id_solicitud</th>
              <th>file</th>
              <th>tipo file</th>
            </tr>
          </thead>
          <tbody>
            {
              archivos.length > 0 ? 
                archivos.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index+1 < 10 ? "0"+(index+1) : index+1}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
    </div>
  );
}
 
export default ArchivosList;