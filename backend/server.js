// Module express server
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv';
import audioRouter from './routes/audioRoute.js';
import userRouter from './routes/userRoute.js';


dotenv.config();

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use('/api/audio', audioRouter)
app.use('/uploads', express.static('uploads'))
app.use('/api/user', userRouter)

// http method to request data from the server
app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

