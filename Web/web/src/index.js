import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes, BrowserRouter} from 'react-router-dom'


import Router from '../src/routes/routes'

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);
