import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header'

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/registrar.persona">
            Registrar personas
          </Route>
          <Route path="/admin.personas">
            Administración personas
          </Route>
          <Route path="/">
            Principal
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
 
export default Routes;