import React from 'react';

const Visualizer = (props) => {
  const { data } = props;

  return (
  <div className='Visualizer'>{JSON.stringify(data, null, 2)}</div>
  );
};
export default Visualizer;
