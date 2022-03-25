import React from 'react'
import Register from './Register'
import Login from './Login'

const Start = () => {

    function secure(){
        const user = sessionStorage.getItem("userinfo")
        if(user){
            window.location.replace("/home")
        }
    }
    secure()

return (
    <React.Fragment>

        <h1 className='d-flex justify-content-center'>Welcome to this app to start please...</h1>

        <div className='d-flex justify-content-around px-5'>
            <div className='mx-3'>
                <Register />
            </div>
            <div className='mx-3'>
                <Login />
            </div>
        </div>
    </React.Fragment>
)
}

export default Start