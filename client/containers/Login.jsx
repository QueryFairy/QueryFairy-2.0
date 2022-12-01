import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect, useNavigate } from "react-router-dom";


const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState('')


  const updateUsername=(event)=>{
    props.setUsername(event.target.value)
  }
  const updatePassword = (event) => {
    props.setPassword(event.target.value)
  }

  //test redirecting functionality between login view and homepage view
  const loginUser = (event) =>{
    console.log('testing')
    props.setIsLoggedIn(true)
  }
  // const loginUser = (event) => {
  //   event.preventDefault()
  //   const reqObj = {
  //     username, 
  //     password
  //   }
  //   fetch('/login', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'Application/JSON'},
  //     body: JSON.stringify(reqObj)
  //   }).then((response)=>{
  //     if(response.status === 201){
  //       console.log('successful login')
  //       return <Redirect to='/'/>
  //     }
  //   }).catch((error)=>{
  //     setErrorMessage('Invalid username or password')
  //     setTimeout(()=>setErrorMessage(''), 3000)
  //   })
  // }


  return(
    <div className='loginAndRegister'>
      {errorMessage != '' ? <FlashError errorMessage={errorMessage} /> : null}
      <div>
        <div className='loginAndRegisterInputs'>
        <label className="username">Username:</label>
        <input
        type="text"
        value={props.username}
        onChange={(e)=>updateUsername(e)}
        ></input>
        <br></br>
        <label className='password'>Password:</label>
        <input
        type="password"
        value={props.password}
        onChange={(e)=>updatePassword(e)}
        ></input>
        <br></br>
        </div>
        <div className='buttons'>
        <button className='loginButton' onClick={(e)=>loginUser(e)}>
          Login
        </button>
        </div>
      </div>
    </div>
  )
}

export default Login