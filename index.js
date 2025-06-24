import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import database from './config/database.js';
import contactRouter from './router/contactRouter.js';
const app = express();


// midlerware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT
database();

// routers
app.use('/api/v1',contactRouter)


app.get("/",(req,res)=>{
    res.send("<h1>Server is running successfully </h1>")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

