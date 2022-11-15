import {db} from "../db.js"
import bcrypt from "bcryptjs"
import jsonWebToken from "jsonwebtoken"

export const register = (req,res) => { 
    // res.json("from Controller")
    //check exitsting username/email

    const query = " SELECT * FROM resume_db.users WHERE email = ? OR username = ?"
    db.query(query, [req.body.email, req.body.username], (err, data)=> {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already Exist!")
        
        //hash th pw using bcrypt
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const insQuery = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
        const values = [ req.body.username, req.body.email, hash]

        db.query(insQuery, [values], (err, data)=> {
            if(err) return res.json(err)
            return res.status(200).json("User has been created!")
            })
    })
}

export const login = (req,res) => {
    //check if user exist

    const query = "SELECT * FROM  resume_db.users WHERE username = ?"

    db.query(query, [req.body.username], (err, data)=> {
        if(err) return res.json(err)
        if (data.length === 0) return res.status(404).json("User is not yet Registered")
        

        //check PW

        const isSamePass = bcrypt.compareSync(req.body.password, data[0].password)

        if(!isSamePass) return res.status(400).json("Wrong username or password!")

        const token = jsonWebToken.sign({id:data[0].id}, "jwtkey")
        const {password, ...other } = data[0];

        res
            .cookie("access_token", token,{
                httpOnly:true
            })
            .status(200)
            .json(other)

    })

}

export const logout = (req,res) => {
    res.clearCookie("access_token", {
        sameSite:"none",
        secure:true
    }).status(200).json("User has been loggoed out!")
    
}