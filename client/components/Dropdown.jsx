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


  return(
    <div>{previousQueries.map((individualQuery)=> <QueryItem key={`${individualQuery}query`} query={individualQuery} setEndpoint={setEndpoint}/>)}</div>
  )
}

export default Dropdown



