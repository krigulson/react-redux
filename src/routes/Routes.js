import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import PostShow from '../views/PostShow';
import PostComments from '../views/PostComments';

const createRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/posts/:id" component={ PostShow } />
      <Route exact path="/posts/:id/comments" component={ PostComments } />
    </Switch>
  </BrowserRouter>
);

export default createRoutes;
