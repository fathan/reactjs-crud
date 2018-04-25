import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import registerServiceWorker from './registerServiceWorker';

// CONTAINER
import Full from './containers/Full/Full';

// VIEWS
import Login from './views/Auth/Login';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login} />
      <Route path="/" name="Dashboard Page" component={Full} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
