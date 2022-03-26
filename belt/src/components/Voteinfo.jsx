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



const Voteinfo = () => {

  let { _id } = useParams();

  const [data, setData] = useState(null)

  useEffect(()=>{
      axios.get(`/votes/getvote/${_id}`)
      .then(votes=>{
          setData(votes.data)
      })
  })


  return (
    <div>
      <p>
            <Link to="/" className='create'>
                <button className='btn btn-primary'>Back to Home</button>
            </Link>
      </p>
      <h1 className='title'>{data ? data.question : ""}</h1>

      <div className='title'>
        <h3>{data ? data.option1 : ""} ---- {data ? `${data.option1votes} votes` : ""}</h3>
        <h3>{data ? data.option2 : ""} ---- {data ? `${data.option2votes} votes` : ""}</h3>
        <h3>{data ? data.option3 : ""} ---- {data ? `${data.option3votes} votes` : ""}</h3>
        <h3>{data ? data.option4 : ""} ---- {data ? `${data.option4votes} votes` : ""}</h3>
      </div>
    </div>
  )
}

export default Voteinfo