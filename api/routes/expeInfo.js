import express from "express"
import { getExpeInfo} from "../controllers/expeInfo.js"


const router = express.Router()
// router.get("/test", (req,res)=>{
//     res.json("This is routes")
// })

router.get("/", getExpeInfo) //get All


export default router