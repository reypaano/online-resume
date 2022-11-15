import express from "express"
const app = express()
import cors from "cors"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api/posts", authRoutes)

app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)

// app.get('/',(req,res)=>{
//     res.send("Hello po")
// })
app.listen(3001, ()=>{
    console.log("Connected")
})