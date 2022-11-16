import express from "express"
const app = express()
import cors from "cors"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.js"
import goalsRoutes from "./routes/goals.js"
import expeInfoRoutes from "./routes/expeInfo.js"

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api/posts", authRoutes)

app.use("/api/auth", authRoutes)
app.use("/api/goals", goalsRoutes)
app.use("/api/experience-info", expeInfoRoutes)


app.listen(3001, ()=>{
    console.log("Connected")
})