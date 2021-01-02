import iconAbrir from './img/abrir_documento.svg'

const TramitesList = () => {
  return (
    <main className="container-main">
      <h2 className="default-title">Lista de Trámites</h2>
      <div className="table-responsive">
        <table className="tramites-list">
          <thead>
            <tr>
              <th>#</th>
              <th>Solicitante</th>
              <th>Tipo de trámite</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Félix Castro</td>
              <td>Prácticas pre profesionales</td>
              <td><img src={iconAbrir} alt="Abrir documento" height= "20px"/></td>
            </tr>
            {/* {
              personas.length > 0 ? 
                personas.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.nombre}</td>
                    <td>{item.correo}</td>
                    <td>Puesto</td>
                  </tr>
                )) : messageError()
            } */}
          </tbody>
        </table>
      </div>
    </main>
  );
}
 
export default TramitesList;