import { useEffect, useState } from "react"
import './adminPerson.css'

const AdminPerson = () => {

  const [personas, setPersonas] = useState([])

  useEffect(() => {
    getDatos()
  }, [])
  
  const getDatos = async () => {
    const data = await fetch('http://localhost:8090/api/personas')
    const response = await data.json()
    setPersonas(response)
  }

  return (
    <main className="container-main">
      <h2 className="default-title">Administrador de Personas</h2>
      <div className="table-responsive">
        <table className="adminPerson-list">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Puesto</th>
            </tr>
          </thead>
          <tbody>
            {
              personas.length > 0 ? 
                personas.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.nombre}</td>
                    <td>{item.correo}</td>
                    <td>Puesto</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4">Datos no disponibles</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </main>
  );
}
 
export default AdminPerson;