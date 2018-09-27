import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home_container';
import Results from './results/results_container';

const App = ({ children }) => (
  <div>
    <div>
      <Switch>
        <Route path="/results" component={ Results } />
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  </div>
);

export default App;