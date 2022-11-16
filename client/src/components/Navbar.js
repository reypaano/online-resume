import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom"
import {Logo} from '../images/RA-logo.png'
import { AuthContext } from '../context/authContext' 

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const {currentUser,logout} = useContext(AuthContext)
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev)
          }}
        >
          Logo
        </button>
      </div>
      <div className="link-container">
        <div className="links">
            <Link className='link' to="/landing">
                <h6>Home</h6>
            </Link>
            <Link className='link' to="/goals">
                <h6>Goals</h6>
            </Link>
        
        </div> 
      
        <div className="user-link">
        <span> <h6>{currentUser?.username}</h6></span>
            {currentUser ? 
            <span onClick={logout}><h6>Logout</h6></span>: 
            <Link className='link' to="/">
                <h6>Login</h6>
            </Link>}
        </div>
    </div>
    </div>
  );
}

export default Navbar;


