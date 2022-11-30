import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import NodeList from '../components/NodeList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import { useState, useEffect } from 'react';
import React from 'react';

const LayerView = () => {
  // ???
  useEffect(() => {}, []);

  // intialize states
  const [endpoint, setEndpoint] = useState('');
  const [nodeList, setNodeList] = useState([]);
  const [output, setOutput] = useState('');

  useEffect(() => {
    // if link does not have https:// add it to the endpoint and use setEndpoint to change state of endpoint
    const newLink = endpoint.slice(0, 8);
    if (newLink !== 'https://') {
      setEndpoint('https://' + endpoint);
    }
    //
    fetch(endpoint)
      .then((res) => res.json())
      .then((newData) => {
        setVisualizer(newData);
        setNodeList(Object.keys(newData));
        setOutput('visualizer');
      })
      .catch((err) => console.log(err));
  }, [endpoint]);
  const [visualizer, setVisualizer] = useState({});
  const [node, setNode] = useState('');

  useEffect(() => {
    // output must be a string. It contains
    const psuedoData = eval(output);
    console.log('PSEUDO', psuedoData);
    if (psuedoData) {
      const newData = psuedoData[node];
      setNodeList(Object.keys(newData));
      const newPath = /[^a-z]/g.test(node)
        ? `${output}['${node}']`
        : `${output}.${node}`;

      setOutput(newPath);
    }
  }, [node]);

  useEffect(() => {
    if (output.length) {
      // output is 'visualizer'
      const psuedoData = eval(output);
      // 
      setNodeList(Object.keys(psuedoData));
    }
  }, [output]);

  const resetPath = () => {
    console.log(output);
    setOutput('visualizer');
  };

  return (
    <div className='container'>
      <Endpoint setEndpoint={setEndpoint} />
      <NodeList nodeList={nodeList} setNode={setNode} />
      <Visualizer visualizer={eval(output)} />
      <Output output={`data${output.slice(10)}`} resetPath={resetPath} />
    </div>
  );
};

export default LayerView;
