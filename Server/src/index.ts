import dotenv from 'dotenv'
import express, { Request, Response } from "express";
import aiRoutes from './routes/aiRoutes';
import cors from "cors";

dotenv.config()
const app = express()

const corsSettings = {
    origin:"https://aicompanionship.vercel.app",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsSettings));

app.use(express.json())

app.get("/test",(req:Request,res:Response)=>{
    res.send({msg:"Hello there pooopoooopeeeepeeee"})
})

app.use("/api",aiRoutes)

const PORTNUM:string|undefined = process.env.PORT 
const parsedPortNum:number = PORTNUM ? parseInt(PORTNUM) : 5000

app.listen(parsedPortNum,()=>{
    console.log(`Server is running on port ${PORTNUM?.toString()}`)
}) 


