import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Redirect, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from './containers/Home.jsx';
import LayerView from './containers/LayerView.jsx';
import Login from './containers/Login.jsx';
import Register from './containers/Register.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')


  return (
    <Router>
      <div>
        <nav>
          <div className ="logo">
            <img className = "logo-image" src="https://i.ibb.co/R2FtV5F/Query-Fairy-Logo.png"></img>
            <p className = "title">Query Fairy</p>
          </div>
          <div className='links'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/layerview">LayerView</Link>
            </li>
            <li>
              <Link to="/login" >Login</Link>
            </li>
            <li>
              <Link to='/register'>Sign Up</Link>
            </li>
          </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/layerview">
            <LayerView username={username}/>
          </Route>
          <Route exact path="/">
            <Home username={username}/>
          </Route>
          <Route exact path="/login">
            {isLoggedIn ? <Redirect to='/'/> : <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} password={password} setPassword={setPassword} username={username} setUsername={setUsername}/>}
          </Route>
          <Route exact path="/register">
          {isLoggedIn ? <Redirect to='/'/> : <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} password={password} setPassword={setPassword} username={username} setUsername={setUsername} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail}/>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
