import React from "react";

const NodeItem = (props) => {
  const { node, setNode } = props;

  const handleClick = () => {
    setNode(node);
  }

  return(<button onClick={handleClick}>{node}</button>)
}

export default NodeItem;