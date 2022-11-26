import React, {useState} from 'react';
const Endpoint = (props) => {
  const { setEndpoint } = props;
  const [input, setInput] = useState('');

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  }
  
  const onClickHandler = () => {
    console.log(input)
    // fetch using input
    // setEndpoint(result of API call)
  }


  return (
    <div className='API-Call'>
      <input type='text' onChange = {onChangeHandler} ></input>
      <button type='button' onClick = {onClickHandler}>Call API</button>
    </div>
  );
};

export default Endpoint;
