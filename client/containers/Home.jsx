import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import KeyList from '../components/KeyList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';

const Home = () => {
  const [endpoint, setEndpoint] = useState('');
  const [keyList, setKeyList] = useState({});
  const [output, setOutput] = useState('');
  const [visualizer, setVisualizer] = useState({});

  
 

  return (
    <div className='container'>
      <Endpoint />
      <KeyList />
      <Visualizer />
      <Output />
    </div>
  );
};

export default Home;
