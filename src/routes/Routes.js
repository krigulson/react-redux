import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import PostShow from '../views/PostShow';

const createRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/posts/:id" component={ PostShow } />
    </Switch>
  </BrowserRouter>
);

export default createRoutes;
