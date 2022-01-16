import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes, BrowserRouter} from 'react-router-dom'


import Home from './views/Home';
import Task from './views/Task';
import QrCode from './views/QrCode';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element = {<Home/>} path="/" exact />
    <Route element = {<Task/>} path="/Task"/>
    <Route element = {<QrCode/>} path="/QrCode"/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
