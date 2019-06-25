import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import participants from './participants.js';

ReactDOM.render(<App participants= {participants}/>, document.getElementById('root'));
