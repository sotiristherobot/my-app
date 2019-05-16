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

{/*<div className="App">*/}
{/*  <header className="App-header">*/}
{/*    <img src={logo} className="App-logo" alt="logo" />*/}
{/*    <p>*/}
{/*      Edit <code>src/App.js</code> and save to reload.*/}
{/*    </p>*/}
{/*    <a*/}
{/*        className="App-link"*/}
{/*        href="https://reactjs.org"*/}
{/*        target="_blank"*/}
{/*        rel="noopener noreferrer"*/}
{/*    >*/}
{/*      Learn React*/}
{/*    </a>*/}
{/*  </header>*/}
{/*</div>*/}