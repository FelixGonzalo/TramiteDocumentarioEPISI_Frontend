import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PersonasList from "./components/PersonasList";
import PersonaForm from "./components/PersonaForm";
import TramiteForm from "./components/TramiteForm";
import Header from './components/Header'
import TramitesList from './components/TramitesList';
import ArchivosList from './components/ArchivosList'
import ArchivoForm from './components/ArchivoForm'
import Login from './components/Login'
import Navbar from './components/Navbar'
import './general.css'

const Routes = () => {
  return (
    <Fragment>
      <Router>
          <Header/>
          <Switch>
          <Route path="/registrar.tramite">
            <Navbar/>
            <main className="container-main">
              <h2 className="default-title">Registrar trámite</h2>
              <div className="containerFlex">
                <div>
                  <ArchivoForm/>
                  <ArchivosList/>
                </div>
                <TramiteForm/>
              </div>
            </main>
          </Route>
          <Route path="/listar.tramites">
            <Navbar/>
            <main className="container-main">
              <h2 className="default-title">Lista de Trámites</h2>
              <TramitesList/>
            </main>
          </Route>
          <Route path="/registrar.persona">
            <Navbar/>
            <main className="container-main">
              <h2 className="default-title">Registrar persona</h2>
              <PersonaForm/>
            </main>
          </Route>
          <Route path="/listar.personas">
            <Navbar/>
            <main className="container-main">
              <h2 className="default-title">Lista de Personas</h2>
              <PersonasList/>
            </main>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
 
export default Routes;