import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home_container';

const App = ({ children }) => (
  <div>
    <div>
      <Switch>
        <Route path="/" component={ Home } />
        {/* <Route path="/results" component={  } /> */}
      </Switch>
    </div>
  </div>
);

export default App;