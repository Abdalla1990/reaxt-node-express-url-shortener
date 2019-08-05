import React from 'react';

const Data = props => (
  <div>
    Your url details
    <p>Shortened Url : {props.shortenedurl}</p>
    <p>Original Url : {props.originalurl}</p>
    <p>id : {props.assigned_id}</p>
  </div>
)




export default Data;