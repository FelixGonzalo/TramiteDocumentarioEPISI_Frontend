import {useForm} from 'react-hook-form'

const ArchivoForm = () => {

   const {register, errors, handleSubmit} = useForm()

   const onSubmit = (data, event) => {
  
  }

  return (
    <div className="container-main">
      <h2 className="default-title">Registrar persona</h2>
      <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
        <label className="label-default"> Descripcion
          <input
            type="text"
            name="descripcion"
            className="input-default"
            ref={register}
          />
        </label>
      </form>
    </div>
  );
}
 
export default ArchivoForm;