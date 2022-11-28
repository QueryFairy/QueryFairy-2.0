import React from 'react';
import TreeItem from './TreeItem.jsx';

const TreeList = (props) => {
  const { visualizer, setOutput, name } = props;

  const treeItems = Object.keys(visualizer).map((key) => {
    const newName = /[^a-z]/g.test(key)
      ? `${name}['${key}']`
      : `${name}.${key}`;
    return (
      <TreeItem
        set={visualizer[key]}
        item={key}
        setOutput={setOutput}
        name={newName}
      />
    );
  });

  return <ul className='TreeList'>{treeItems}</ul>;
};

export default TreeList;
