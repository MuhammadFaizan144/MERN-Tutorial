const express=require("express")
const app=express()
const router=require('./router/auth-router')

//express router
app.use("/api/auth",router)


const PORT=3000
app.listen(PORT,()=>{
    console.log(`This server port http://localhost:${PORT}`)
})