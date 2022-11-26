import React from 'react';
const KeyList = (props) => {
  const { keyList } = props;
  
  const keyButtons = keyList.length ? keyList.map(key => <button>{key}</button>) : <p></p>;

  return (
  <div className='KeyList'>
    <div>{keyButtons}</div>
  </div>
  )
};
export default KeyList;
