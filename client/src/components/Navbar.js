import React from 'react'
import Logo from '../images/RA-logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
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
                <span>Name</span>
                <span>Logout</span>
            </div>
        </div>
    </div>
  )
}
