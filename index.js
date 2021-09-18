import  express  from "express";
import cors from 'cors'
import 'dotenv'

const app=express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.listen(process.env.port || 5000,()=>{
    console.log('app is running on 5000')
})


