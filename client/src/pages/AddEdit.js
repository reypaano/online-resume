import React, {useState, useEffect,useContext} from 'react'
import {useHistory, useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/authContext' 
import dateFormat from 'dateformat'

// const initialState ={
//     goal_name: "",
//     goal_description: "",
//     goal_target_date: "",
//     goal_completed: ""
// }

const AddEdit = () => {
    const {currentUser} = useContext(AuthContext)
    const [inputs, setInputs] = useState({
        goal_name: "",
        goal_description: "",
        goal_target_date: "",
        goal_completed: "",
        userid: ""

      })

    const navigate = useNavigate()
    const [err, setError] = useState(null)
    const {id}  = useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/goals/${id}`)
            .then((resp) => setInputs({...resp.data[0]}))
       }, [id])

    const handleSubmit = async e =>{
       e.preventDefault()
       if (!inputs.goal_name || !inputs.goal_description ||
            !inputs.goal_target_date || !inputs.goal_completed){
            toast.error("All fields are required!")
        }else{
            if(!id){
                try{
                    console.log(inputs)
                    const response = await axios.post("http://localhost:3001/api/goals/", inputs)
                    navigate("/goals")
                    toast.success("New Goal Added! Goodluck!")
                }catch(err){
                    setError(err.response.data)
                }
            }else {
                try{
                    console.log(inputs)
                    const response = await axios.put(`http://localhost:3001/api/goals/${id}` ,inputs)
                    navigate("/goals")
                    toast.success("Goal entry has been updated! Goodluck!")
                }catch(err){
                    setError(err.response.data)
                }
            }
            
        }
    }
    const handleinputChange = e =>{
        setInputs(prev=>({
          ...prev,
          [e.target.name]: e.target.value,
          userid:currentUser?.id
        }))
      }

    const formatDate = (date2) =>{ console.log("DATE" + date2)
        const date = date2.getDate()
        const formatDate = date.getDate() < 10 ? `0${date.getDate()}`:date.getDate();
        const formatMonth = date.getMonth() < 10 ? `0${date.getMonth()}`: date.getMonth();
        const formattedDate = [date.getFullYear(), formatMonth, formatDate].join('-');

        return formattedDate
    }
      
 
    return(
        <div className='addEdit'>
            
           <form onSubmit={handleSubmit}>
         
                <label htmlFor='goal_name'>Name</label>
                <input 
                required
                type="text"
                id="goal_name"
                name="goal_name"
                placeholder="Goal Name"
                value={inputs.goal_name || ""}
                onChange={handleinputChange}>
                </input>

                <label htmlFor='goal_description'>Description</label>
                <input 
                required
                type="text"
                id="goal_description"
                name="goal_description"
                placeholder="Goal Description"
                value={inputs.goal_description  || ""}
                onChange={handleinputChange}>
                </input>


                <label htmlFor='goal_target_date'>Target Date</label>
                <input 
                asp-for="goal_target_date" asp-format="{0:yyyy-MM-dd}"
                required
                type="date"
                id="goal_target_date"
                name="goal_target_date"
                placeholder="Target Date"
                value={dateFormat(inputs.goal_target_date, "yyyy-mm-dd") || ""}
                onChange={handleinputChange}>
                </input>


                <label htmlFor='goal_name'>Completed Date</label>
                <input 
                required
                type="date"
                id="goal_completed"
                name="goal_completed"
                placeholder="Completed Date"
                value={dateFormat(inputs.goal_completed, "yyyy-mm-dd") || ""}
                onChange={handleinputChange}>
                </input>

                <input type="submit" value= {id ? "Update" :"Save" }/>
                <Link to="/goals">
                    <input type="button" value="Go Back"/>
                </Link>


           </form>
        </div>
    )
}

export default AddEdit