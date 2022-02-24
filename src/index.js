import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  // Wrapping App component in BrowserRouter component gives it routing functionality.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);