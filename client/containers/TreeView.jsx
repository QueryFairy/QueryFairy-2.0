import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import NodeList from '../components/NodeList.jsx';
import Visualizer from '../components/Visualizer.jsx';
import { useState, useEffect } from 'react';
import React from 'react';

const TreeView = () => {
  useEffect(()=>{}, []);

  const [endpoint, setEndpoint] = useState('');
  const [nodeList, setNodeList] = useState([]);
  const [output, setOutput] = useState('');
  useEffect(() => {
    fetch(endpoint)
    .then(res=> res.json())
    .then(newData => {
      setVisualizer(newData)
      setNodeList(Object.keys(newData));
      setOutput('visualizer');
    }).catch(err => console.log(err));
  }, [endpoint])
  const [visualizer, setVisualizer] = useState({});
  const [node, setNode] = useState('');

  useEffect(() => {
    const psuedoData = eval(output);
    if(psuedoData){
      const newData = psuedoData[node];
      setNodeList(Object.keys(newData));
      const newPath = /[^a-z]/g.test(node) 
                    ? `${output}['${node}']`
                    : `${output}.${node}`

      setOutput(newPath);
    }
  }, [node]);

  useEffect(() => {
    if(output.length){
      const psuedoData = eval(output);
      setNodeList(Object.keys(psuedoData));
    }
  }, [output]);

  const resetPath = () => {
    console.log(output);
    setOutput('visualizer');
  }

  return (
    <div className='treeView'>
      <Endpoint setEndpoint={setEndpoint}/>
      <div className='keysAndOutput'>
        <NodeList nodeList={nodeList} setNode={setNode}/>
        <Output output={output} resetPath={resetPath}/>
      </div>
      <Visualizer visualizer={eval(output)}/>
    </div>
  );
};

export default TreeView;