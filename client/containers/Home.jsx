import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import KeyList from '../components/KeyList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import FlashError from '../components/FlashError.jsx';
import { useState, useEffect } from 'react';
import React, { Component, useRef } from 'react';

//
const Home = (props) => {
  const {username} = props
  // setting states
  const [endpoint, setEndpoint] = useState('');
  const [keyList, setKeyList] = useState([]);
  const [output, setOutput] = useState('');
  const [visualizer, setVisualizer] = useState('');
  const [innerKey, setInnerKey] = useState('');
  const [dataObj, setDataObj] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  // {current: true} persists throughout lifecycle of component
  const isFirstMount = useRef(true);

  useEffect(() => {
    // on initial rendering, neglect fetch request
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    // if link does not have https:// add it to the endpoint and use setEndpoint to change state of endpoint
    const newLink = endpoint.slice(0, 8);
    if (newLink !== 'https://') {
      setEndpoint('https://' + endpoint);
    }
    // fetch API request with endpoint
    fetch(endpoint)
      .then((res) => res.json())
      .then((newData) => {
        setDataObj(newData);
        setVisualizer(newData);
        setKeyList(getKeys(newData).sort());
      })
      .catch((err) => {
        setErrorMessage(
          'Invalid API request. Please check the url and try again.'
        );
        setTimeout(() => setErrorMessage(''), 3000);
      });
  }, [endpoint]);

  // on initial rendering, neglect generating path
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    const path = generatePath(dataObj, innerKey).toString(); // fix this to get path and
    const newPath = 'dataObj' + path;
    setVisualizer(eval(newPath));
  }, [innerKey]);

  //
  const getKeys = (obj, map = {}) => {
    // base case: returns once it reaches something besides an object/array
    if (typeof obj !== 'object') {
      return;
    }
    // find number of times keys in nested object occurs
    for (let key in obj) {
      map[key] = map[key] + 1 || 1;
      getKeys(obj[key], map);
    }
    console.log('MAP', map);
    // returns unique keys from nested object
    return Object.keys(map).filter((key) => map[key] === 1);
  };

  //
  function generatePath(dataObj, keyname) {
    let paths = [];
    function recurse(obj, str = '') {
      if (typeof obj !== 'object') return;
      for (let key in obj) {
        //check if the string includes non alphanumeric characters
        const updatedStr = /[^a-z]/g.test(key)
          ? `${str}['${key}']`
          : //if string includes non alphanumeric characters use dot notation for readibility
            `${str}.${key}`;
        if (key === keyname) {
          paths.push(updatedStr);
        } else {
          recurse(obj[key], updatedStr);
        }
      }
      return null;
    }
    recurse(dataObj);
    if (paths[0] === undefined) paths[0] = '';
    setOutput('data' + paths[0]);
    return paths;
  }

  const getInnerKey = (obj, path) => {};

  function resetPath() {
    console.log(innerKey);
    setInnerKey('');
  }

  return (
    <div className='container'>
      {errorMessage !== '' ? <FlashError errorMessage={errorMessage} /> : null}
      <Endpoint setEndpoint={setEndpoint} username={username}/>
      <KeyList keyList={keyList} setInnerKey={setInnerKey} />
      <Visualizer visualizer={visualizer} innerKey={innerKey} />
      <Output
        output={output}
        setErrorMessage={setErrorMessage}
        resetPath={resetPath}
      />
    </div>
  );
};

export default Home;
