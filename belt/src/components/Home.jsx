import React from 'react'
import Navbar from './Navbar'


const Home = () => {


    function secure(){
        const user = sessionStorage.getItem("userinfo")
        if(!user){
            window.location.replace("/")
        }
    }
    secure()


    return (
        <React.Fragment>
            <Navbar/>
            
            <h1>Welcome Home</h1>
        </React.Fragment>
    )
}

export default Home