const mongoose=require("mongoose")
const URI="mongodb://127.0.0.1:27017/mern_admin"
// mongoose.connect(URI)
const connectDb=async()=>{
    try{
        await mongoose.connect(URI)
        console.log('connection success to DB')

    }
    catch{
console.error('database connection failure')
process.exit(0)
    }
}
module.exports=connectDb