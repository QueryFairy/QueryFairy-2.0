/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date 11/21/2022
 * @description NBA stat tracking app
 *
 * ************************************
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import styles from './stylesheets/styles.scss';
import ReactDOM from "react-dom/client";
// import './stylesheets/styles.css';
//const root = ReactDOM.createRoot(document.getElementById("root"));
// import { Provider } from 'react-redux';
// import styles from './stylesheets/application.scss'; // eslint-disable-line no-unused-vars
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />, document.getElementById('root'));
