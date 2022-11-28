import Endpoint from '../components/Endpoint.jsx';
import Output from '../components/Output.jsx';
import Visualizer from '../components/Visualizer.jsx';
import TreeList from '../components/TreeList.jsx';
import { useState, useEffect } from 'react';
import React from 'react';

const TreeView = () => {
  useEffect(() => {}, []);

  const [endpoint, setEndpoint] = useState('');
  const [treeList, setTreeList] = useState([]);
  const [output, setOutput] = useState('');

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((newData) => {
        setVisualizer(newData);
        setOutput('visualizer');
      })
      .catch((err) => console.log(err));
  }, [endpoint]);

  const [visualizer, setVisualizer] = useState({});

  // useEffect(() => {
  //   const pseudoData = eval(output);
  //   if (pseudoData) {
  //     const newData = psuedoData[node];
  //     setNodeList(Object.keys(newData));
  //     const newPath = /[^a-z]/g.test(node)
  //       ? `${output}['${node}']`
  //       : `${output}.${node}`;

  //     setOutput(newPath);
  //   }
  // }, [node]);

  // useEffect(() => {
  //   if (output.length) {
  //     const pseudoData = eval(output);
  //     setNodeList(Object.keys(pseudoData));
  //   }
  // }, [output]);

  const resetPath = () => {
    setOutput('visualizer');
  };

  return (
    <div className='container'>
      <Endpoint setEndpoint={setEndpoint} />
      <TreeList
        visualizer={visualizer}
        setOutput={setOutput}
        name='visualizer'
      />
      <Visualizer visualizer={eval(output)} />
      <Output output={`data${output.slice(10)}`} resetPath={resetPath} />
    </div>
  );
};

export default TreeView;
