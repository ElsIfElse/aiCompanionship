import {Request,Response} from "express"
import dotenv from 'dotenv'
import axios from "axios"

dotenv.config()

const token = process.env.HUGGIN_FACE_KEY
const API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";

const sendMessageToAi = async function (req:Request,res:Response){
    try {
        const message:string = req.body.message;
        const prompt:string = "You are a wizard answering kids at a party. The user says: "
        const final:string = prompt+message

        if(!message){
            console.log("Message not found in request")
            return res.status(400).json({message:"Message not found in request"})
        }
 
        const response = await axios.post(API_URL,{inputs:final},
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
