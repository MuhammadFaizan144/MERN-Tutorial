const User=require('../models/user-model')
const bcrypt=require("bcrypt")
const home=async(req,res)=>{
    try{


    res.status(200).send('Welcome to router')

    }
    catch(error){
        console.log(object)
    }
}

const register=async(req,res)=>{
    try{
    const {username,email,phone,password}=req.body
    const UserExist=await User.findOne({email})

    if(UserExist){
        return res.status(400).json({msg:"email already exist"})
    }
    //hash the password

    const userCreated=await User.create({username,email,phone,password})

    res.status(200).json({msg:userCreated})
    }catch{
    res.status(400).json('page not found')
    }
}
module.exports={home,register}