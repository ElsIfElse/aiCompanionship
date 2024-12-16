import dotenv from 'dotenv'
import express from 'express'
import aiRoutes from './routes/aiRoutes';
import cors from "cors";


dotenv.config()
const app = express()


app.use(cors())

app.use(express.json())

app.use("/api",aiRoutes)


const PORTNUM:string|undefined = process.env.PORT

app.listen(PORTNUM,()=>{
    console.log(`Server is running on port ${PORTNUM?.toString()}`)
})


