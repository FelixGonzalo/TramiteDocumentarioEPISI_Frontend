import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AdminPerson from "./AdminPerson";
import FormPerson from "./FormPerson";
import Header from './Header'
import TramitesList from "./TramitesList";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/listar.tramites">
            <TramitesList/>
          </Route>
          <Route path="/registrar.persona">
            <FormPerson/>
          </Route>
          <Route path="/admin.personas">
            <AdminPerson/>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
 
export default Routes;