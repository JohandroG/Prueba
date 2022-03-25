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

    let arr = ["pizza","pollo","ella"]

    return (
        <React.Fragment>
            <Navbar/>
            
            <h1>Welcome Home</h1>

            {arr.map(ar=>{
                return <p>{ar}</p>
            })}
        </React.Fragment>
    )
}

export default Home