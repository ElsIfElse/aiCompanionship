import {Request,Response} from "express"

const sendMessageToAi = (req:Request,res:Response)=>{
    const message:string = req.body.message;
    if(!message){
        console.log("Message not found in request")
        return res.status(400).json({message:"Message not found in request"})
    }
    console.log("Message is found")
    return res.status(200).json({message:message})

}

export {sendMessageToAi}
