import React from 'react';
import NodeItem from './NodeItem.jsx';

const NodeList = (props) => {
  const { nodeList, setNode } = props;

  const nodeElements = nodeList.map((node) => <NodeItem key={`${node}node`} node={node} setNode={setNode} />);

  return (
  <div className='NodeList'>
    <ul>{ nodeElements }</ul>
  </div>
  )
};

export default NodeList;
