const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.status(200).send('Welcome')
})

app.get("/register",(req,res)=>{
    res.status(200).send('Welcome to register')
})

const PORT=3000
app.listen(PORT,()=>{
    console.log(`This server port http://localhost:${PORT}`)
})