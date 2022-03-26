import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../App.css"

const NewVote = () => {

  const [data, setData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: ""
  })

  const [error, setError] = useState(null)



  const handleInputChange = (e)=>{
    setData({
        ...data,
        [e.target.name] : e.target.value
    })
}

const createV = (e) =>{
  e.preventDefault();

      axios.post("http://localhost:8080/votes/create",data).then(info=>{
        console.log(info);
      window.location.replace("/")
      })
      .catch(err=>{
          // console.log(err.response.data);
          setError(err.response.data)

          console.log(error);
      })
  
}




  return (

    <React.Fragment>
      <p>
            <Link to="/" className='create'>
                <button className='btn btn-primary'>Back to Home</button>
            </Link>
      </p>
      <div>
        <form className='d-flex flex-row justify-content-around m-5' onSubmit={createV}>
          <div className='d-flex flex-column justify-content-between align-items-center'>
            <div className="question">
              <label>Your question</label>
              <input type="text" name='question' onChange={handleInputChange}></input>
            </div>

            <div className="errors p-3">
              <p>{error ? error.error1 : ""}</p>
              <p>{error ? error.error2 : ""}</p>
              <p>{error ? error.error3 : ""}</p>
              <p>{error ? error.error4 : ""}</p>
            </div>

            <div className="but">
              <button type='submit' className='btn btn-primary'>Submit Poll</button>
            </div>
          </div>

          <div>
            <div className="option1">
              <label>Option 1:</label>
              <input type="text" name='option1' onChange={handleInputChange}></input>
            </div>
            <div className="option2">
              <label>Option 2:</label>
              <input type="text" name='option2' onChange={handleInputChange}></input>
            </div>
            <div className="option3">
              <label>Option 3:</label>
              <input type="text" name='option3' onChange={handleInputChange}></input>
            </div>
            <div className="option4">
              <label>Option 4:</label>
              <input type="text" name='option4' onChange={handleInputChange}></input>
            </div>
          </div>

        </form>
      </div>
    </React.Fragment>
  )
}

export default NewVote