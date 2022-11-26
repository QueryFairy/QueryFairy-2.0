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

import React from 'react';
import { createRoot } from "react-dom/client"
import App from './App.jsx';
import styles from './stylesheets/styles.scss';
// import './stylesheets/styles.css';

// import { Provider } from 'react-redux';
// import styles from './stylesheets/application.scss'; // eslint-disable-line no-unused-vars
const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />)