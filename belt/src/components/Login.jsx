import React, {Fragment, useState} from 'react'
import axios from "axios";


const Login = () => {



    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const login = (e) =>{
        e.preventDefault();

            axios.post("http://localhost:8080/users/login",data).then(info=>{

            sessionStorage.setItem("userinfo", JSON.stringify(info.data));
            window.location.replace("/home")

            })
            .catch(err=>{
                console.log(err.response.data);

                // setErrors({
                //     errors : err.response.data
                // })

                // console.log(errors);
            })
        
    }


    return (
        <React.Fragment>
            <h1 className='m-3'>Login</h1>
            <div className="errors p-1">

            </div>

            <form onSubmit={login}>
                <div className="input-group input-group-sm m-3 ">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Username</span>
                    <input type="text" className='form-control' name="username" onChange={handleInputChange}></input>
                </div>
                <div className="input-group input-group-sm m-3 ">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
                    <input type="text" className='form-control' name="password" onChange={handleInputChange}></input>
                </div>
                
                <div className="but">
                    <button type='submit' className='btn btn-primary m-3'>
                        Login
                    </button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Login
