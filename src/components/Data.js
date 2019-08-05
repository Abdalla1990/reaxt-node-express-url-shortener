import React from 'react';

const Data = props => (
  <div className='data-container'>
      {console.log({ props})}
    Url details
    {!props.error && 
        <React.Fragment>
            <p>Shortened Url : {props.shortenedurl}</p>
            <p>Original Url : {props.originalurl}</p>
            <p>id : {props.assigned_id}</p>
        </React.Fragment>
    }
    {
        props.error && <p>{props.error}</p>
    }
  </div>
);

export default Data;