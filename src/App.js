import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// components
import Home from './components/Home/Home';
import RouteNoMatch from './components/RouteNoMatch/RouteNoMatch';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route component={RouteNoMatch}/>
      </Switch>
    </Router>
  );
}