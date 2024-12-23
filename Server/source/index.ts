import dotenv from 'dotenv'
import express from 'express'
import aiRoutes from './routes/aiRoutes';
import cors from "cors";


dotenv.config()
const app = express()

app.use(cors({
    origin: 'https://aicompanionship.vercel.app/',  // Your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true  // Allow credentials (cookies, etc.)
}));


app.use(express.json())

app.use("/api",aiRoutes)
app.use('/test',(req,res)=>{
    res.send("It is working")
})


const PORTNUM:string|undefined = process.env.PORT
const parsedPortNum:number = PORTNUM ? parseInt(PORTNUM) : 5000

app.listen(parsedPortNum,'0.0.0.0',()=>{
    console.log(`Server is running on port ${PORTNUM?.toString()}`)
}) 


