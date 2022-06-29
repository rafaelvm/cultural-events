import { Header } from "components/Header/Header";
import { Home, Events, Contact, FavoriteEvents } from "pages";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import history from "utils/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/inicio" component={Home} />
        <Route exact path="/eventos" component={Events} />
        <Route exact path="/contato" component={Contact} />
        <Route exact path="/eventos-favoritos" component={FavoriteEvents} />
        <Redirect to="/inicio" />
      </Switch>
    </Router>
  );
};

export default Routes;
