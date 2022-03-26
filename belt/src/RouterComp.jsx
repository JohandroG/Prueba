import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from "./components/Home";
import NewVote from './components/NewVote';



const RouterComp = () => {
return (
    <Router className="container">

    <Routes>
        <Route path="/" element={<Home/>} exact></Route>
        <Route path="/polls/new" element={<NewVote/>} exact></Route>
    </Routes>
    </Router>
)
}

export default RouterComp