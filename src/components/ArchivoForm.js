import {useForm} from 'react-hook-form'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getArchivoTipos} from '../redux/archivoTiposDucks'
import {postArchivo} from '../redux/archivoDucks'


const ArchivoForm = () => {

  const dispatch = useDispatch()
  const tipos = useSelector(store => store.archivoTipos.array)
  const {register, errors, handleSubmit} = useForm()

  useEffect(()=>{
    dispatch(getArchivoTipos())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (data, event) => {
    dispatch(postArchivo(data, event))
  }
 
  return (
    <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
    <p className="default-subtitle">Archivos</p>
    <label className="label-default"> Tipo
        <select 
          name="tipoArchivo" 
          className="input-default"
          ref={register()}
        >
        {
          tipos.length > 0 ?
          tipos.map((item) => (
            <option key={item.id} value={item.id}>{item.nombre}</option>
          )) : (<option>No hay datos</option>)
        }
        </select>
      </label>
      <label className="label-default"> Descripcion
        <input
          type="text"
          name="descripcion"
          className="input-default"
          ref={register()}
        />
      </label>
      <span className="input-error">
        {
          errors?.descripcion?.message
        }
      </span>
      <input ref={register()} type="file" name="documento"/>
      <button className="button-default btn-small">Agregar</button>
    </form>
  );
}
 
export default ArchivoForm;