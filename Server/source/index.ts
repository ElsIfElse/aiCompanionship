import dotenv from 'dotenv'
import express from 'express'
import aiRoutes from './routes/aiRoutes';
import cors from "cors";


dotenv.config()
const app = express()

const corsOptions = {
    origin: 'http://192.168.1.100:5000',  
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  };

app.use(cors(corsOptions))

app.use(express.json())

app.use("/api",aiRoutes)


const PORTNUM:string|undefined = process.env.PORT
const parsedPortNum:number = PORTNUM ? parseInt(PORTNUM) : 5000

app.listen(parsedPortNum,'0.0.0.0',()=>{
    console.log(`Server is running on port ${PORTNUM?.toString()}`)
})


