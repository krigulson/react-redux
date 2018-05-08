import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostShow from '../views/PostShow';
import PostComments from '../views/PostComments';
import Users from '../views/Users';
import UserShow from '../views/UserShow';

import Form from '../components/Form';
import AllPosts from '../views/AllPosts';

const createRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ AllPosts } />
      <Route exact path="/posts/new" component={ Form } />
      <Route exact path="/posts/:id" component={ PostShow } />
      <Route exact path="/posts/:id/comments" component={ PostComments } />
      <Route exact path="/users" component={ Users } />
      <Route exact path="/users/:id" component={ UserShow } />
    </Switch>
  </BrowserRouter>
);

export default createRoutes;
