import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
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