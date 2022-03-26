import React from 'react'
import { Link } from 'react-router-dom'

import Top3 from './Top3'
import Recent from './Recent'

import "../App.css"

const Home = () => {

return (
    <div className='home'>
        <p>
            <Link to="/polls/new" className='create'>
                <button className='btn btn-primary'>Create new Poll</button>
            </Link>
        </p>
            <div className='homeinfo'>
                <div>
                    <Top3 />
                </div>
                <div>
                    <Recent />
                </div>
            </div>
    </div>


)
}

export default Home