import React from "react";

const NodeItem = (props) => {
  const { node, setNode } = props;

  const handleClick = () => {
    setNode(node);
  }

  return(<li><button onClick={handleClick}>{node}</button></li>)
}

export default NodeItem;