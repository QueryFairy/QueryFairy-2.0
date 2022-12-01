import React from 'react';
import { useState, useEffect } from 'react';

import Endpoint from './Endpoint';
import QueryItem from './QueryItem';


const Dropdown = (props) => {
  const {username} = props
  const {setEndpoint} = props
  const [previousQueries, setPreviousQueries] = useState([])

  // const queryItems = []


  useEffect(()=>{
    fetch(`/queries/${username}`).then(response => response.json()).then(queries => setPreviousQueries(queries))  
  })

  console.log(username)
  //   // console.log('in the useEffect function')
  //   // setPreviousQueries('apple')
  //   // const previousQueries = ['apple']
  // //   // const queryItems = []
  // for (let i = 0; i < previousQueries.length; i++){
  //   queryItems.push(<QueryItem key={i} query={previousQueries[i]} setEndpoint={setEndpoint}/>)
  // // let queryItems = previousQueries.map((individualQuery)=> <QueryItem key={`${individualQuery}query`} query={individualQuery} setEndpoint={setEndpoint}/>)
  // }
  // console.log('query items', queryItems)
  //   //     fetch(`/queries/${username}`)
  //   // .then(response => response.json()).then(queries => setPreviousQueries(queries))  
  // }, [])

  // console.warn('in the dropdown component')
  // const queryItems = previousQueries.map((individualQuery)=> <QueryItem key={`${individualQuery}query`} query={individualQuery} setEndpoint={setEndpoint}/>)


  return(
    <div>{previousQueries.map((individualQuery)=> <QueryItem key={`${individualQuery}query`} query={individualQuery} setEndpoint={setEndpoint}/>)}</div>
  )
}

export default Dropdown



