import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import KeyList from '../components/KeyList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import { useState, useEffect } from 'react';
import React, { Component, useRef } from 'react';


const Home = () => {
  const [endpoint, setEndpoint] = useState('');
  const [keyList, setKeyList] = useState([]);
  const [output, setOutput] = useState('');
  const [visualizer, setVisualizer] = useState('');
  const [innerKey, setInnerKey] = useState('');
  const [dataObj, setDataObj] = useState({});
  // called on every click of Call API button

  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return
    }
    
    // fetch API request with endpoint
    fetch(endpoint)
    .then(res => res.json())
    .then(newData => {
      setDataObj(newData);
      setVisualizer(newData);
      setKeyList(getKeys(newData).sort());
      console.log(keyList)
    })
    .catch((err) => {
      console.log('Invalid API Request!');
    })
  }, [endpoint]);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    console.log('visualizer', visualizer)
    console.log(innerKey)
    console.log(endpoint)
    console.log(dataObj)
    const path = generatePath(dataObj, innerKey).toString(); // fix this to get path and
    const newPath = 'dataObj' + path;
    console.log(newPath)
    setVisualizer(eval(newPath));
  }, [innerKey]);
 
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

  function generatePath(dataObj, keyname){
      let paths = [];
      console.log('generate')
      function recurse(obj, str=''){
        if(typeof obj !== 'object') return;
        for(let key in obj){
          const updatedStr = /[^a-z]/g.test(key) 
          ? `${str}['${key}']`
          : `${str}.${key}`
          if(key === keyname){
            paths.push(updatedStr);
          }else{
            recurse(obj[key], updatedStr);
          }
        }
        return null;
      }
      recurse(dataObj);
      setOutput(JSON.stringify(paths));
      console.log('output', output)
      return paths
    };

  const getInnerKey = (obj, path) => {};

  return (
    <div className='container'>
      <Endpoint setEndpoint={setEndpoint}/>
      <KeyList keyList={keyList} setInnerKey={setInnerKey}/>
      <Visualizer visualizer={visualizer} innerKey={innerKey}/>
      <Output output = {output}/>
    </div>
  );
};

export default Home;
