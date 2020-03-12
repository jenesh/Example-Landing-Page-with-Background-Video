import React from 'react'
import vid from '../assets/One-Swan.mp4'

const LandingPage = (props) => {
    const goToLoginPage = () => props.history.push('/login')
    return (
        <div>
            <div className="container">
                <h1>Home Page</h1>
                <button onClick={goToLoginPage}>Login</button>
            </div>
            <video id="myVideo" autoPlay muted loop >
                <source src={vid} type="video/mp4" id="video" /> Not supported
            </video>
        </div>
    )
}

export default LandingPage