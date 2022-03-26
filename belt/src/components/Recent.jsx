import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


import axios from "axios"
const Recent = () => {


    const [data, setData] = useState(null)

    useEffect(()=>{
        axios.get("/votes/allvotes")
        .then(votes=>{
            setData(votes.data.reverse())
        })
    })



  return (
    <div className='recent'>

      <div>
        {data ? data.map((item)=>{
          return (
          <div key={item._id} className="card m-2 p-3 pb-1">
  
            <Link to={`/polls/${item._id}`}>
              <h4>{item.question}</h4>
            </Link>
            
            <p>
              {item.option1}: {item.option1votes} | {item.option2}: {item.option2votes} 
              {item.option3 ? " |" : ""} {item.option3 ? item.option3 : ""}{item.option3 ? ":" : ""} {item.option3 ? item.option3votes : ""}
              {item.option4 ? " |" : ""} {item.option4 ? item.option4 : ""}{item.option4 ? ":" : ""} {item.option4 ? item.option4votes : ""}
            </p>
            
            <p>(Recently)</p>
          </div>
          )
        }) : "No Info"}
      </div>
    </div>
  )
}

export default Recent