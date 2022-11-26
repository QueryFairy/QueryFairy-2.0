import React from 'react';
const Endpoint = (props) => {
  const { setEndpoint } = props;
  let temp = '';

  return (
    <div className='API-Call'>
      <input type='text' onChange={(e) => temp=e.target.value}></input>
      <button type='button' onClick={() => {setEndpoint(temp)}}>Call API</button>
    </div>
  );
};

export default Endpoint;
