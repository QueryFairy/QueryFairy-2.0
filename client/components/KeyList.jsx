import React from 'react';
const KeyList = (props) => {
  const { keyList } = props;

  const keyElements = keyList.map((key) => {
    return (
      <li><a>{key}</a></li>
    )
  });

  return (
  <div className='KeyList'>
    <ul>{ keyElements }</ul>
  </div>
  )
};
export default KeyList;
