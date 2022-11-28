import React from 'react';

const FlashError = (props) => {
  const { errorMessage } = props;
  return (
  <div className='FlashError'>
    <div>{errorMessage}</div>
  </div>
  );
};
export default FlashError;
