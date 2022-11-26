import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import KeyList from '../components/KeyList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';

const TreeView = () => {
  const [endpoint, setEndpoint] = useState('');
  const [keyList, setKeyList] = useState([]);
  const [output, setOutput] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(endpoint)
    .then(res=> res.json())
    .then(newData => {
      setData(newData)
      setKeyList(Object.keys(newData));
    });
  }, [endpoint])

  return (
    <div className='treeView'>
      <Endpoint setEndpoint={setEndpoint}/>
      <div className='keysAndOutput'>
        <KeyList keyList = {keyList}/>
        <Output output={output}/>
      </div>
      <Visualizer data={data}/>
    </div>
  );
};

export default TreeView;