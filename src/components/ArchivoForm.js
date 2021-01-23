import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getArchivoTipos} from '../redux/archivoTiposDucks'
import {postArchivo} from '../redux/archivoDucks'

const ArchivoForm = () => {

  const dispatch = useDispatch()
  const tiposArchivo = useSelector(store => store.archivoTipos.array)
  const {register, errors, handleSubmit} = useForm()

  useEffect(()=>{
    dispatch(getArchivoTipos())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (data, event) => {
    dispatch(postArchivo(data, event))
  }

  return (
    <div className="container-main">
      <h2 className="default-title">Registrar Archivo</h2>
      <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
      <label className="label-default"> Tipo
          <select 
            name="tipoArchivo" 
            className="input-default"
            ref={register()}
          >
          {
            tiposArchivo.map((item) => (
              <option key={item.id} value={item.id}>{item.nombre}</option>
            ))
          }
          </select>
        </label>
        <label className="label-default"> Descripcion
          <input
            type="text"
            name="descripcion"
            className="input-default"
            ref={register}
          />
        </label>
        <button className="button-default">Registrar</button>
      </form>
    </div>
  );
}
 
export default ArchivoForm;