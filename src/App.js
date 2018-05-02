import React, { Component } from 'react';
import createRoutes from './routes/Routes';

const routes = createRoutes();
class App extends Component {
  render() {
    return routes;
  }
}

export default App;
