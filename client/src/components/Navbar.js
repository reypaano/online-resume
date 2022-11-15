import React, {useContext} from 'react'
import Logo from '../images/RA-logo.png'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authContext' 

export default function Navbar() {
    const {currentUser,logout} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt=""/>
            </div>
            <div className='links'>
                <Link className='link' to="/">
                    <h6>Home</h6>
                </Link>
                <Link className='link' to="/goals">
                    <h6>Goals</h6>
                </Link>
                <span>{currentUser?.username}</span>
                {currentUser ? 
                    <span onClick={logout}>Logout</span>: 
                    <Link className='link' to="/login">
                        Login
                    </Link>}
            </div>
        </div>
    </div>
  )
}
