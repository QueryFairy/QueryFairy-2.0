import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home.jsx';
import LayerView from './containers/LayerView.jsx';
import TreeView from './containers/TreeView.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <p>Query Fairy</p>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/layerview'>LayerView</Link>
            </li>
            <li>
              <Link to='/treeview'>TreeView</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/treeview'>
            <TreeView />
          </Route>
          <Route exact path='/layerview'>
            <LayerView />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
