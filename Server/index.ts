import dotenv from 'dotenv'
import express from 'express'
import aiRoutes from './routes/aiRoutes';
import cors from "cors";


dotenv.config()
const app = express()

app.use(cors({
    origin: ['https://aicomptest.vercel.app','https://aicompanionship.vercel.app/chat','https://aicompanionship.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json())
app.get("/test",(req,res)=>{
    res.send("Server is running")
})
app.use("/api",aiRoutes)


const PORTNUM:string|undefined = process.env.PORT
const parsedPortNum:number = PORTNUM ? parseInt(PORTNUM) : 5000

app.listen(parsedPortNum,'0.0.0.0',()=>{
    console.log(`Server is running on port ${PORTNUM?.toString()}`)
}) 


