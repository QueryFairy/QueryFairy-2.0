import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home.jsx';
import TreeView from './containers/treeview.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  console.log('App started')
  return (
    <Router>
      <div>
        <nav>
          <p>Query Fairy</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/treeview">TreeView</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/treeview">
            <TreeView />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
