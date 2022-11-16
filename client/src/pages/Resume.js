import React, {useContext} from 'react'
import CreatorInfo from '../components/CreatorInfo'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Timeline from '../components/timelineComponent/Timeline'
import { AuthContext } from '../context/authContext'


function Resume() {
  
  const {currentUser} = useContext(AuthContext)
  return (
    <> 
      {currentUser ? (<div>
          <CreatorInfo/>
          <Timeline/>
        </div>) :
        (<div className='error-page'>
          <h1>Please Login to access this Page!</h1>
        </div>)
      }
    </>
   
  )
}

export default Resume