import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import theme from '../palette/colorPalette'
import { ThemeProvider }  from '@mui/material/styles';

let input = '';

const Endpoint = (props) => {
  const { setEndpoint } = props;

  const onChangeHandler = (e) => {
    input = e.target.value;
  }
  
  const onClickHandler = () => {
    console.log('hi')
    setEndpoint(input);
  }

  return ( 
    <div className='API-Call'>
      <ThemeProvider theme={theme}>
        <div class="inputs">
          <TextField id="standard-basic" label="API Endpoint" variant="standard" onChange = {onChangeHandler}/>
          <Button id="button" color="secondary" variant="contained" onClick = {onClickHandler}>Submit</Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Endpoint;
