import React, { Component } from 'react';
import {NavLink, Route, Switch} from "react-router-dom";

import './App.css';
import Github from './Github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Api-Party</h1>
          <h2></h2>
        </div>

        <ul>
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/github" component={Github} />
          <Route render={() => 
            <p>To get started, click one of the links above.</p>
          } />
        </Switch>

      </div>
    );
  }
}

export default App;
