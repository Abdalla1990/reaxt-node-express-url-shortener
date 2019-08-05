import React, { useRef, useState } from 'react';
import { isValidUrl } from '../../tools/helpers';
import axios from 'axios';
import Data from './Data';
const shortenUrl = async url=>await axios.post('/shorten', {  'url_to_shorten' : url});


const Shoretenr = () => { 
  const ref = useRef();
  const [isValid, setValid] = useState(false);
  const [data, setData] = useState(undefined);

  const handleUrlButtonClick = () => {
    console.log('i am clicked', ref.current.value);
    shortenUrl(ref.current.value).then( (res) => {
      console.log('value', res.data[0]);
      setData(res.data[0])
    })
 }

 const handleUrlChange = () => {
  if(isValidUrl(ref.current.value)) {
    setValid(true);
  }
 }

  return (
  <div>
    Shortener
    <input ref={ref} onChange={handleUrlChange}/>
    <button disabled={!isValid} onClick={handleUrlButtonClick}>CLick Me</button>
    { data && <Data {...data} />}
  </div>
)}




export default Shoretenr;