import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PersonasList from "./components/PersonasList";
import PersonaForm from "./components/PersonaForm";
import TramiteForm from "./components/TramiteForm";
import Header from './components/Header'
import TramitesList from './components/TramitesList';
import ArchivosList from './components/ArchivosList'
import ArchivoForm from './components/ArchivoForm'

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <main className="container-main">
          <Switch>
          <Route path="/registrar.tramite">
            <h2 className="default-title">Registrar trámite</h2>
            <TramiteForm/>
          </Route>
          <Route path="/listar.tramites">
            <h2 className="default-title">Lista de Trámites</h2>
            <TramitesList/>
          </Route>
          <Route path="/registrar.persona">
            <h2 className="default-title">Registrar persona</h2>
            <PersonaForm/>
          </Route>
          <Route path="/listar.personas">
            <h2 className="default-title">Lista de Personas</h2>
            <PersonasList/>
          </Route>
          <Route path="/listar.archivos">
            <ArchivosList/>
          </Route>
          <Route path="/registrar.archivo">
             <h2 className="default-title">Registrar Archivo</h2>
            <ArchivoForm/>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
        </main>
      </Router>
    </Fragment>
  );
}
 
export default Routes;