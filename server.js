import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

const app = express()

import cors from 'cors'

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

import paymentRouter from "./routers/paymentRouter"

app.use('/api/v1/payment', paymentRouter)

app.listen(PORT, (error)=>{
    if(error){
        return console.log(error);
    }

    console.log(`Backend server id running at ${PORT}`);
})