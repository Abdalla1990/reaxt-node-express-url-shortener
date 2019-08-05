import React from 'react';

const Data = props => (
  <div className='data-container'>
    Url details
    <p>Shortened Url : {props.shortenedurl}</p>
    <p>Original Url : {props.originalurl}</p>
    <p>id : {props.assigned_id}</p>
  </div>
);

export default Data;