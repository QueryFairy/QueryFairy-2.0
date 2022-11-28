import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import KeyList from '../components/KeyList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import FlashError from '../components/FlashError.jsx';
import { useState, useEffect } from 'react';
import React, { Component, useRef } from 'react';


const Home = () => {
  const [endpoint, setEndpoint] = useState('');
  const [keyList, setKeyList] = useState([]);
  const [output, setOutput] = useState('');
  const [visualizer, setVisualizer] = useState('');
  const [innerKey, setInnerKey] = useState('');
  const [dataObj, setDataObj] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  // called on every click of Call API button

  const isFirstMount = useRef(true);
  const isErrored = useRef(false);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return
    }
    const newLink = endpoint.slice(0, 8)
    if (newLink !== 'https://') {
       setEndpoint('https://' + endpoint);
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
      isErrored.current = true;
      setErrorMessage('Invalid API request. Please check the url and try again.');
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
      console.log('generatePath******')
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
      //console.log('output', output, paths)
      return paths
    };

  const getInnerKey = (obj, path) => {};

  function resetPath() {
    console.log(innerKey);
    setInnerKey('');
  }

  return (
    <div className='container'>
      { isErrored.current ? <FlashError errorMessage={errorMessage}/> : null}
      <Endpoint setEndpoint={setEndpoint}/>
      <KeyList keyList={keyList} setInnerKey={setInnerKey}/>
      <Visualizer visualizer={visualizer} innerKey={innerKey}/>
      <Output output = {output} resetPath={resetPath}/>
    </div>
  );
};

export default Home;
