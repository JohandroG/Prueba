import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import axios from 'axios'

const Top3 = () => {

  const [data, setData] = useState(null)

  useEffect(()=>{
      axios.get("/votes/allvotes")
      .then(votes=>{

        let top3 = votes.data.sort((a,b)=>{
          let votesa = a.option1votes + a.option2votes + a.option3votes + a.option4votes
          let votesb = b.option1votes + b.option2votes + b.option3votes + b.option4votes

          if(votesa > votesb){
            return -1
          }
          else{
            return 0
          }
        }).slice(0,3)


          setData(top3)
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

export default Top3