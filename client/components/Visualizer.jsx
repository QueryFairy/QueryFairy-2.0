import React from 'react';

const Visualizer = (props) => {
  const { visualizer } = props;

  return (
  <div className='Visualizer'>{ JSON.stringify(visualizer) }</div>
  );
};
export default Visualizer;
