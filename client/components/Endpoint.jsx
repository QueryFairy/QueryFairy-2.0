import React, {useState} from 'react';
let input = '';
const Endpoint = (props) => {
  const { setEndpoint } = props;

  const onChangeHandler = (e) => {
    input = e.target.value
  }
  
  const onClickHandler = () => {
    setEndpoint(input);
  }

  return (
    <div className='API-Call'>
      <input type='text' placeholder='API endpoint' onChange = {onChangeHandler} ></input>
      <button type='button' onClick = {onClickHandler}>Submit</button>
    </div>
  );
};

export default Endpoint;
