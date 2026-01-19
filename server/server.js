require('dotenv').config()
const express=require("express")
const cors=require('cors')
const app=express()
const authRoute=require('./router/auth-router')
const contactRoute=require('./router/contact-router')
const serviceRoute=require("./router/Service-router")
const adminRoute=require("./router/admin-router")
const connectDb=require('./utils/db')
const errorMiddleware = require('./middleware/error-middleware')

// lets tackle cors
const corsOption={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}
app.use(cors(corsOption))

app.use(express.json())//middleware

//express router
app.use("/api/auth",authRoute)//Important
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)
app.use("/api/admin",adminRoute)

app.use(errorMiddleware);

const PORT=3000
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`This server port http://localhost:${PORT}`)
    })
})
//npm i dotenv
//npm i bcrypt