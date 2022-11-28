import React from 'react';

const FlashError = (props) => {
  const { errorMessage } = props;
  console.log(errorMessage)
  return (
  <div className='FlashError'>
    <div class='errorMessage'>{errorMessage}</div>
  </div>
  );
};
export default LandingPage;
