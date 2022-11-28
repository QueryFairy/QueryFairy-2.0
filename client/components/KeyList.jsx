import React from 'react';
import Button from '@mui/material/Button';
import theme from '../palette/colorPalette'
import { ThemeProvider }  from '@mui/material/styles';


const KeyList = (props) => {
  const { keyList, setInnerKey } = props;

  const onClickHandler = (e) => {
    console.log('button clicked!')
    setInnerKey(e.target.innerText);
  }

  let flag = 0;
  const keyElements = keyList.map((key) => {
    if (flag === 0) {
      flag = 1;
      return (
        <div>
        <button class="keyButton style1" variant="contained" onClick = {onClickHandler}>{key}</button>
        </div>
      )
    } else {
      flag = 0;
      return (
        <button class="keyButton style2" variant="contained" onClick = {onClickHandler}>{key}</button>
      )
    }
    
  });

  return (
  <div className='KeyList'>
    <ThemeProvider theme={theme}>
        <div class="keyInputs">
          <ul>{ keyElements }</ul>
        </div>
      </ThemeProvider>
    
  </div>
  )
};
export default KeyList;
