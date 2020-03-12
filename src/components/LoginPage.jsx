import React from 'react'
import vid from '../assets/One-Swan.mp4'

const LoginPage = (props) => {
    const goToHomePage = () => props.history.push('/')
    return (
        <div className='container'>
            <h1>Login Page</h1>
            <form>
                <input type='text' name='username' placeholder='Username' />
                <input type='password' name='password' placeholder='Password' />
                <input type='submit' value='Submit' className='submit' />
            </form>
            <button onClick={goToHomePage}>Home Page</button>
            <video id="myVideo" autoPlay muted loop >
                <source src={vid} type="video/mp4" id="video" /> Not supported
            </video>
        </div>
    )
}

export default LoginPage