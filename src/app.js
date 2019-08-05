import React from 'react';
import ReactDOM from 'react-dom';
import Shortener from './components/Shortener';
// import 'normalize.css/normalize.css';
import './styles.scss';
const jsx = ( 
    <div>
       <Shortener />
    </div>
);

ReactDOM.render(jsx,document.getElementById('app'));