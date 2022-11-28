import React from 'react';
const KeyList = (props) => {
  const { keyList, setInnerKey } = props;

  const onClickHandler = (e) => {
    setInnerKey(e.target.innerText);
  }

  const keyElements = keyList.map((key) => {
    return (
      <li><button onClick={onClickHandler}>{key}</button></li>
    )
  });

  return (
  <div className='KeyList'>
    <ul>{ keyElements }</ul>
  </div>
  )
};
export default KeyList;
