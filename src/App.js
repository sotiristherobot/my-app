import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// components
import Home from './components/Home/Home';
import RouteNoMatch from './components/RouteHelpers/RouteNoMatch';
import RouteNotAuthed from './components/RouteHelpers/RouteNotAuthed';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/not-authorized"} component={RouteNotAuthed}/>
        <Route component={RouteNoMatch}/>
      </Switch>
    </Router>
  );
}