import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import PostShow from '../views/PostShow';
import PostComments from '../views/PostComments';
import Users from '../views/Users';
import UserShow from '../views/UserShow';

const createRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/posts/:id" component={ PostShow } />
      <Route exact path="/posts/:id/comments" component={ PostComments } />
      <Route exact path="/users" component={ Users } />
      <Route exact path="/users/:id" component={ UserShow } />
    </Switch>
  </BrowserRouter>
);

export default createRoutes;
