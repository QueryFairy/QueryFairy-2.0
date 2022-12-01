import React from 'react';
import { useState, useEffect } from 'react';

import Endpoint from './Endpoint';
import Dropdown from './Dropdown';

const QueryItem = (props) => {
  const {query} = props
  const {setEndpoint} = props
  const onClickHandler = (event) =>{
    // console.log('in onclick handler within queryitem')
    setEndpoint(event.target.query)
  }
  console.log('in query item')
return(
  <div onClick={onClickHandler}>
    {query}
  </div>
)
}

export default QueryItem