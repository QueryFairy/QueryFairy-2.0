import React from 'react';

const NodeList = (props) => {
  const { nodeList } = props;

  const nodeElements = nodeList.map((node) => <button>{node}</button>);

  return (
  <div className='NodeList'>
    <ul>{ nodeElements }</ul>
  </div>
  )
};

export default NodeList;
