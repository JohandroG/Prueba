import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Start from "./components/Start";
import Home from "./components/Home";
import Navbar  from './components/Navbar';


const RouterComp = () => {
return (
    <Router className="container">

    <Routes>
        <Route path="/home" element={<Home/>} exact></Route>
        <Route path="/" element={<Start/>} exact></Route>
    </Routes>
    </Router>
)
}

export default RouterComp