import express from "express"
import { login, logout, register } from "../controllers/auth.js"

const router = express.Router()
router.get("/test", (req,res)=>{
    res.json("This is routes")
})

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router