import React, { useContext, useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
import { toast } from 'react-toastify'

function Goals() {
  const [data, setData] =useState([])
  const [err, setError] = useState(null)
  const {currentUser} = useContext(AuthContext)

  const loadData = async () => {
    const response = await axios.get(`http://localhost:3001/api/goals/` )
    setData(response.data)
  } 

  const deleteGoal =(id,name) => {
    if(window.confirm("Are you sure you want to delete This Goal: " + name))
      axios.delete(`http://localhost:3001/api/goals/${id}`)
      toast.success("Goal deleted successfully!")
      setTimeout(()=> loadData(),500)
  }

  useEffect (() => {
    loadData()
  }, [])
    
  return (
    <>
      {currentUser ? (
        <div className="goals">
        <div className='add-btn-cont'>
            <Link to="/add-goal">
              <button className='btn btn-add'> Add New Entry</button>
            </Link>
        </div>
          
        <div className='table-container'>
          <table className='styled-table'>
            <thead>
              <tr>
                <th> ID</th>
                <th> NAME</th>
                <th> DESCRIPTION</th>
                <th> TARGET DATE</th>
                <th> COMPLETED DATE</th>
                <th> ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index)=>{
                return(
                  <tr key={item.id}>
                    <th scope='row'>{index+1}</th>
                    <td>{item.goal_name}</td>
                    <td>{item.goal_description}</td>
                    <td>{item.goal_target_date}</td>
                    <td>{item.goal_completed}</td>
                    <td>
                      <Link to={`/update/` + item.id}>
                        <button  className='btn btn-edit'>EDIT</button>
                      </Link>
                      <button className='btn btn-delete' onClick={()=>{
                        deleteGoal(item.id, item.goal_name)
                      }}> DELETE</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>   
      </div>) :
      (<div className='error-page'>
        <h1>Please Login to access this Page!</h1>
      </div>)
    }
    </>
    

  )
}

export default Goals