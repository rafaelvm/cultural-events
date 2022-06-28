import { Header } from "components/Header/Header";
import { Events } from "pages/Events";
import { Home } from "pages/Home";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import history from "utils/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/inicio" component={Home} />
        <Route exact path="/eventos" component={Events} />
        <Redirect to="/inicio" />
      </Switch>
    </Router>
  );
};

export default Routes;
