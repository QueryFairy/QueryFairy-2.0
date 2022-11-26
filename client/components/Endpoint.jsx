import React from 'react';
const Endpoint = (props) => {
  const { endpoint } = props;

  return (
    <div className='API-Call'>
      <input type='text'></input>
      <button type='button'>Call API</button>
    </div>
  );
};

export default Endpoint;
