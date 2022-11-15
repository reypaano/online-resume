import express from "express"
import { addGoal, getGoals, deleteGoal,getGoal, updateGoal } from "../controllers/goals.js"


const router = express.Router()
// router.get("/test", (req,res)=>{
//     res.json("This is routes")
// })

router.get("/", getGoals) //get All
router.get("/:id", getGoal) // depending on selected entry
router.post("/", addGoal)
router.delete("/:id", deleteGoal)
router.put("/:id", updateGoal)

// router.post("/logout", logout)

export default router