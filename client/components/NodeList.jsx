import React from 'react';
import NodeItem from './NodeItem.jsx';

const NodeList = (props) => {
  const { nodeList, setNode } = props;

  const nodeElements = nodeList.map((node) => <NodeItem key={`${node}node`} node={node} setNode={setNode} />);

  return (
  <ul className='NodeList'>
    <ul>{ nodeElements }</ul>
  </ul>
  )
};

export default NodeList;
