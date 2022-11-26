import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import KeyList from '../components/KeyList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';


const Home = () => {
  const [endpoint, setEndpoint] = useState('');
  const [keyList, setKeyList] = useState([]);
  const [output, setOutput] = useState('');
  const [visualizer, setVisualizer] = useState('');

  // called on every click of Call API button
  useEffect(() => {
    // fetch API request with endpoint
    fetch(endpoint)
    .then(res => res.json())
    .then(newData => {
      setVisualizer(newData);
      setKeyList(getKeys(newData).sort());
    })
    .catch((err) => {
      console.log('Invalid API Request!');
    })
  }, [endpoint]);

  console.log('Home rendered')
 
  const getKeys = (obj, map = {}) => {
    if(typeof obj !== 'object') {
      return;
  }
  
    for(let key in obj){
      map[key] = map[key] + 1 || 1;
      getKeys(obj[key], map);
    }
    // return Object.keys(map).filter(key => map[key] === 1);
    return Object.keys(map).filter(key => map[key] === 1);
  }

  return (
    <div className='container'>
      <Endpoint setEndpoint = {setEndpoint}/>
      <KeyList keyList = {keyList}/>
      <Visualizer visualizer = {visualizer}/>
      <Output output = {output}/>
      
    </div>
  );
};

export default Home;
