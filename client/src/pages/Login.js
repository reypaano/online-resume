import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'

function Login() {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  const handleChange = e =>{
    setInputs(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await login(inputs)
      const response = await axios.post("http://localhost:3001/api/auth/login", inputs)
      navigate("/landing")
    } catch(err){
        setError(err.response.data)
    }
    
  }

  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='username' name='username' onChange={handleChange}/>
            <input type="password" placeholder='password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {err && <p>{err}</p>}
            <span>Do you have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login