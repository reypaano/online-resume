import React from 'react'
import {Link} from 'react-router-dom'

function Register() {
  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder='username'/>
            <input required type="email" placeholder='email'/>
            <input required type="password" placeholder='password'/>
            <button>Register</button>
            <p>This is an error!</p>
            <span>Do you have an account? <Link to="/login">Register</Link></span>
        </form>
    </div>
  )
}

export default Register