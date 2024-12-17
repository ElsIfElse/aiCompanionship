import {Request,Response} from "express"
import dotenv from 'dotenv'
import axios from "axios"

dotenv.config()

const token = process.env.HUGGIN_FACE_KEY
const API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";

const sendMessageToAi = async function (req:Request,res:Response){
    try {
        const message:string = req.body.message;
        if(!message){
            console.log("Message not found in request")
            return res.status(400).json({message:"Message not found in request"})
        }
 
        const response = await axios.post(API_URL,{inputs:"Prompt: You are an old wizard that is helping people seeiking knowledge. You are very wise and give detailed answers. The young wisdom seeker says: "+message},
            {headers:{Authorization:`Bearer ${token}`,
        'Content-Type':'application/json'}}
        )
        console.log("Success")
        res.status(200).json(response.data)
        
    } catch (error) {
        console.log(error)
        
    }
}

export {sendMessageToAi}
