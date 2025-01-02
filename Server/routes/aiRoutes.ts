import express from "express";
import { sendMessageToAi, test } from "../controllers/aiController";

const router = express.Router();

router.post("/messagesending",(req,res)=>{
    sendMessageToAi(req,res)
})

router.get("/test",(req,res)=>{
    test(req,res)
})

export default router
