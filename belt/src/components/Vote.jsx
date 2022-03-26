import React from 'react'
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../App.css"
import axios from "axios"

const Vote = () => {

  let { _id } = useParams();

  const [data, setData] = useState(null)

  useEffect(()=>{
      axios.get(`/votes/getvote/${_id}`)
      .then(votes=>{
          setData(votes.data)
      })
  })

  const vote1 = () =>{
    axios.get(`/votes/vote1/${_id}`)
    .then(data=>{
      window.location.replace(`/polls2/${_id}`)
    })
  }


  const vote2 = () =>{
    axios.get(`/votes/vote2/${_id}`)
    .then(data=>{
      window.location.replace(`/polls2/${_id}`)
    })
  }


  const vote3 = () =>{
    axios.get(`/votes/vote3/${_id}`)
    .then(data=>{
      window.location.replace(`/polls2/${_id}`)
    })
  }


  const vote4 = () =>{
    axios.get(`/votes/vote4/${_id}`)
    .then(data=>{
      window.location.replace(`/polls2/${_id}`)
    })
  }

  return (
    <div>
      <h1 className='title'>{data ? data.question : ""}</h1>

      <div className='votes'>
        <div className='option'>
            <h3>{data ? data.option1 : ""}</h3>
            <button type='button' onClick={vote1}>{data ? `Vote ${data.option1}` : ""}</button>
        </div>
        <div className='option'>
            <h3>{data ? data.option2 : ""}</h3>
            <button type='button' onClick={vote2}>{data ? `Vote ${data.option2}` : ""}</button>
        </div>
        
        
        <div className='option'>
            <h3>{data ? data.option3 : ""}</h3>
            <button type='button' onClick={vote3}>{data ? `Vote ${data.option3}` : ""}</button>
        </div>
        <div className='option'>
            <h3>{data ? data.option4 : ""}</h3>
            <button type='button' onClick={vote4}>{data ? `Vote ${data.option4}` : ""}</button>
        </div>

      </div>
    </div>
  )
}

export default Vote