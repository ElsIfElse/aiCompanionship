import express from "express";
import { sendMessageToAi } from "../../controllers/aiController";

const router = express.Router();

router.post("/messageSending",(req,res)=>{
    sendMessageToAi(req,res)
})

export default router 
