import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import NodeList from '../components/NodeList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import { useState, useEffect } from 'react';
import React from 'react';

const TreeView = () => {
  console.log('TreeView started');
  const [endpoint, setEndpoint] = useState('');
  const [nodeList, setNodeList] = useState([]);
  const [output, setOutput] = useState('');
  const [data, setData] = useState({});
  const [node, setNode] = useState({})

  useEffect(() => {
    fetch(endpoint)
    .then(res=> res.json())
    .then(newData => {
      setData(newData)
      setNodeList(Object.keys(newData));
    });
  }, [endpoint])

  useEffect(() => {

  }, [node])

  return (
    <div className='treeView'>
      <Endpoint setEndpoint={setEndpoint}/>
      <div className='keysAndOutput'>
        <NodeList nodeList={nodeList}/>
        <Output output={output}/>
      </div>
      <Visualizer data={data}/>
    </div>
  );
};

export default TreeView;