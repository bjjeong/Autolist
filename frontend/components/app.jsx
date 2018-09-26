import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';

const App = ({ children }) => (
  <div>
    <div>
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  </div>
);

export default App;