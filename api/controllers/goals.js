import {db} from "../db.js"
import bcrypt from "bcryptjs"
import jsonWebToken from "jsonwebtoken"

export const getGoals = (req,res) => { 
   
    const query = "SELECT * FROM resume_db.user_goals"
    db.query(query, [req.params.id], (err,data)=> {
        return res.json(data)
    })
}

export const getGoal = (req,res) => { 
   
    const query = "SELECT * FROM resume_db.user_goals WHERE id= ?"
    db.query(query, req.params.id, (err,data)=> {
        return res.json(data)
    })
}


export const addGoal = (req,res) => { 
    const insQuery = "INSERT INTO user_goals(`goal_name`, `goal_description`, `goal_target_date`, `goal_completed`, `user_id`) VALUES (?)"
    const values = [ req.body.goal_name, req.body.goal_description, req.body.goal_target_date, req.body.goal_completed, req.body.userid ]

    db.query(insQuery, [values], (err, data)=> {
        if(err) return res.json(err)
        return res.status(200).json("Goal has been inserted!")
    })
}

export const updateGoal = (req,res) => { 
    
   const id = req.params.id
   console.log(id)
   const values = [ req.body.goal_name, req.body.goal_description, req.body.goal_target_date, req.body.goal_completed, req.body.userid, id ]
   const updateQuery = `UPDATE user_goals SET goal_name = ? , goal_description = ?, goal_target_date  = ?, goal_completed  = ?, user_id  = ? WHERE id = ${id}`

   db.query(updateQuery, values, (err, data)=> {
    if(err) return res.json(err)
    return res.status(200).json("Goal has been Updated!")
})
}

export const deleteGoal = (req,res) => {
    console.log(req.params.id)
    const removeQuery = "DELETE FROM user_goals WHERE id = ?"
    // const values = [ req.body.goal_name, req.body.goal_description, req.body.goal_target_date, req.body.goal_completed, req.body.userid ]

    db.query(removeQuery, req.params.id, (err, data)=> {
        if(err) return res.json(err)
        return res.status(200).json("Goal has been deleted!")
    })
    
}