import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import theme from '../palette/colorPalette'
import { ThemeProvider }  from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Dropdown from './Dropdown.jsx'


let input = '';

const Endpoint = (props) => {
  const { setEndpoint } = props;
  const {username} = props
  const [clicked, setClicked] = useState(false)

  const onChangeHandler = (e) => {
    input = e.target.value;
  }
  
  const onSubmitHandler = () => {
    console.log('hi')
    setEndpoint(input);
  }

  const onClickHandler = (e) => {
    // console.log(username)
    setClicked(!clicked)
  }

  return ( 
    <div className='API-Call'>
      <ThemeProvider theme={theme}>
        <div class="inputs">
          <TextField id="standard-basic" label="API Endpoint" variant="standard" onChange = {onChangeHandler} onFocus = {onClickHandler} onBlur = {onClickHandler}/>
          <Button id="button" color="secondary" variant="contained" onClick = {onSubmitHandler}>Submit</Button>
        </div>
        <div>
          {clicked ? <Dropdown username={username} setEndpoint={setEndpoint}/> : ''}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Endpoint;
