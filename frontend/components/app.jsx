import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home_container';
import Results from './results/results_container';
import Vehicle from './vehicle/vehicle_show_container';

const App = ({ children }) => (
  <div>
    <div>
      <Switch>
        <Route path="/results" component={ Results } />
        <Route path="/vehicle" component={ Vehicle } />
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  </div>
);

export default App;