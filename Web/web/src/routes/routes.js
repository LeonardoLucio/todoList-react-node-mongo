import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'


import Home from '../views/Home'
import Task from '../views/Task';
import QrCode from '../views/QrCode';

export default function Router() {
    return(
 
    <BrowserRouter>
    <Routes>
    <Route element = {<Home/>} path="/" exact />
    <Route element = {<Task/>} path="/task"/>
    <Route element = {<Task/>} path="/task/:id"/>
    <Route element = {<QrCode/>} path="/QrCode"/>
    </Routes>
    </BrowserRouter>
    )
}
