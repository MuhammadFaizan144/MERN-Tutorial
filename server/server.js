require('dotenv').config()
const express=require("express")
const app=express()
const authRoute=require('./router/auth-router')
const contactRoute=require('./router/contact-router')
const connectDb=require('./utils/db')
const errorMiddleware = require('./middleware/error-middleware')

app.use(express.json())//middleware

//express router
app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)

app.use(errorMiddleware);

const PORT=3000
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`This server port http://localhost:${PORT}`)
    })
})
//npm i dotenv
//npm i bcrypt