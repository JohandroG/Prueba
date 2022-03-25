import React, {Fragment, useState} from 'react'
import axios from "axios";


const Register = () => {

//!------VARIABLES---------------------------------------------------------
    const [errors, setErrors] = useState([{}])

//!------VARIABLES---------------------------------------------------------


    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confpass: ""
    })

    const handleInputChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const register = (e) =>{
        e.preventDefault();

            axios.post("http://localhost:8080/users/register",data).then(info=>{
            sessionStorage.setItem("userinfo", JSON.stringify(info.data));
            window.location.replace("/home")
            })
            .catch(err=>{
                console.log(err.response.data);

                setErrors({
                    errors : err.response.data
                })

                console.log(errors);
            })
        
    }


    return (
        <Fragment>

            <h1 className='m-3'>Register</h1>
            <div className="errors p-1">
            <p>



            </p>
            </div>
            <form onSubmit={register}>

            <div className="input-group input-group-sm m-3 ">
                <span class="input-group-text" id="inputGroup-sizing-sm">Firstname</span>
                <input type="text" className='form-control' name="firstname" onChange={handleInputChange}></input>
            </div>
            <div className="input-group input-group-sm m-3 ">
                <span class="input-group-text" id="inputGroup-sizing-sm">Lastname</span>
                <input type="text" className='form-control' name="lastname" onChange={handleInputChange}></input>
            </div>
            <div className="input-group input-group-sm m-3 ">
                <span class="input-group-text" id="inputGroup-sizing-sm">Username</span>
                <input type="text" className='form-control' name="username" onChange={handleInputChange}></input>
            </div>
            <div className="input-group input-group-sm m-3 ">
                <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
                <input type="text" className='form-control' name="password" onChange={handleInputChange}></input>
            </div>
            <div className="input-group input-group-sm m-3 ">
                <span class="input-group-text" id="inputGroup-sizing-sm">Confirm Password</span>
                <input type="text" className='form-control' name="confpass" onChange={handleInputChange}></input>
            </div>

            <div className="but">
                <button type='submit' className='btn btn-primary m-3'>
                    Register
                </button>
            </div>

            </form>
            

        </Fragment>
    )
}

export default Register
