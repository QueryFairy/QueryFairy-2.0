import React from 'react';
import TreeList from './TreeList.jsx';

const TreeItem = (props) => {
  const { item, set, setOutput, name } = props;

  if (set && typeof set === 'object') {
    return (
      <li>
        <button>{item}</button>
        <TreeList visualizer={set} setOutput={setOutput} name={name} />
      </li>
    );
  }
  // let holder;

  // if (typeof set === 'object') {
  //   holder = (

  //   );
  // } else {
  //   holder = (
  //     <li>
  //       <button>{item}</button>
  //     </li>
  //   );
  // }
  return (
    <li>
      <button>{item}</button>
    </li>
  );
};

export default TreeItem;
