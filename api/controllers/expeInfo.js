import {db} from "../db.js"

export const getExpeInfo = (req,res) => { 
    const query = "SELECT * FROM resume_db.work_school_expe"
    db.query(query, req.params.id, (err,data)=> {
        console.log(data)
        return res.json(data)
    })
}