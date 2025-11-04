require('dotenv').config()
const express=require("express")
const app=express()
const router=require('./router/auth-router')
const connectDb=require('./utils/db')

app.use(express.json())//middleware

//express router
app.use("/api/auth",router)

const PORT=3000
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`This server port http://localhost:${PORT}`)
    })
})
//npm i dotenv
//npm i bcrypt