import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect, useNavigate } from "react-router-dom";


const Register = (props) => {
  const [errorMessage, setErrorMessage] = useState('')


  const updateUsername=(event)=>{
    props.setUsername(event.target.value)
  }
  const updatePassword = (event) => {
    props.setPassword(event.target.value)
  }
  const updateFirstName = (event) => {
    props.setFirstName(event.target.value)
  }
  const updateLastName = (event) =>{
    props.setLastName(event.target.value)
  }

  const updateEmail = (event) => {
    props.setEmail(event.target.value)
  }

  //test redirecting functionality between login view and homepage view
  // const loginUser = (event) =>{
  //   console.log('testing')
  //   props.setIsLoggedIn(true)
  // }
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

  // const registerUser = (event) =>{
  //   event.preventDefault()
  //   const reqObj = {
  //     first_name, last_name, email, password, username
  //   }
  //   fetch('/signup', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'Application/JSON'},
  //     body: JSON.stringify(reqObj)
  //   }).then((response)=>{
  //     if(response.status === 200){
  //       console.log('new user created')
  //       return <Redirect to='/'/>
  //     }
  //   }).catch((error)=>{
  //     setErrorMessage('Username already exists. Please try again')
  //     setTimeout(()=>setErrorMessage(''), 3000)
  //   })
  // }


  return(
    <div className='registerPage'>
      {errorMessage != '' ? <FlashError errorMessage={errorMessage} /> : null}
      <div>
        <div className='registerInputs'>
        <label className="registerFirstName">First Name:</label>
        <input
        type="text"
        value={props.firstName}
        onChange={(e)=>updateFirstName(e)}
        ></input>
        <br></br>
        <label className='registerLastName'>Last Name:</label>
        <input
        type="text"
        value={props.lastName}
        onChange={(e)=>updateLastName(e)}
        ></input>
        <br></br>
        <label className='registerEmail'>Email:</label>
        <input
        type="text"
        value={props.email}
        onChange={(e)=>updateEmail(e)}
        ></input>
        <br></br>
        <label className='registerUsername'>Username:</label>
        <input
        type="text"
        value={props.username}
        onChange={(e)=>updateUsername(e)}
        ></input>
        <br></br>
        <label className='registerPassword'>Password:</label>
        <input
        type="text"
        value={props.password}
        onChange={(e)=>updatePassword(e)}
        ></input>
        <br></br>
        </div>
        <div className='buttons'>
        <button className='registerButton' onClick={(e)=>registerUser(e)}>
          Register
        </button>
        </div>
      </div>
    </div>
  )
}

export default Register