import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

    function secure(){
        const user = sessionStorage.getItem("userinfo")
        if(!user){
            window.location.replace("/")
        }
    }
    secure()

    

    const clearsession = () =>{
        sessionStorage.clear()
    }


    return (
        <div>
            <div>
                <NavLink to="/home" className="btn btn-dark m-2" activeClassName="active">
                Home
                </NavLink>
                <NavLink to="/create" className="btn btn-primary m-2" activeClassName="active">
                Create...
                </NavLink>
                <Link to="/" className="btn btn-danger m-2" onClick={clearsession}>
                Close session
                </Link>
            </div>
            <hr/>
        </div>
    )
}

export default Navbar