import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from "./components/Home";
import NewVote from './components/NewVote';
import Vote from './components/Vote';
import Voteinfo from './components/Voteinfo';


const RouterComp = () => {
return (
    <Router className="container">

    <Routes>
        <Route path="/polls/new" element={<NewVote/>} exact></Route>
        <Route path="/polls/:_id" element={<Vote/>} exact></Route>
        <Route path="/polls2/:_id" element={<Voteinfo/>} exact></Route>
        <Route path="/" element={<Home/>} exact></Route>
    </Routes>
    </Router>
)
}

export default RouterComp