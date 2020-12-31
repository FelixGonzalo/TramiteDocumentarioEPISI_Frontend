import './adminPerson.css'

const AdminPerson = () => {
  return (
    <main className="container-main">
      <h2 className="default-title">Administrador de Personas</h2>
      <div className="table-responsive">
        <table className="adminPerson-list">
          <thead>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Puesto</th>
          </thead>
          <tbody id="listaPersonas_item">
            <tr>
              <td>#</td>
              <td>Nombre</td>
              <td>Correo</td>
              <td>Puesto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
 
export default AdminPerson;