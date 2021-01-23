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
        <Switch>
          <Route path="/registrar.tramite">
            <TramiteForm/>
          </Route>
          <Route path="/listar.tramites">
            <TramitesList/>
          </Route>
          <Route path="/registrar.persona">
            <PersonaForm/>
          </Route>
          <Route path="/listar.personas">
            <PersonasList/>
          </Route>
          <Route path="/listar.archivos">
            <ArchivosList/>
          </Route>
          <Route path="/registrar.archivo">
            <ArchivoForm/>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
 
export default Routes;