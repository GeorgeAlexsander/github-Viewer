import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

export default function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:login/repositories" component={RepositoriesPage} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}
