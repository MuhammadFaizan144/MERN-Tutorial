const jwt=require('jsonwebtoken')
const User=require('../models/user-model')
const { email } = require('zod')
const authMiddlerware=async(req,res,next)=>{

    const token=req.header('Authorization')
    if(!token){
        return res.status(401).json({message:"Unauthorized HTTP,Token not provided"})
    }
    //Assuming token is in the format "Bearer "
    const jwtToken=token.replace("Bearer ","").trim();
    console.log('token from auth middleware',jwtToken)
    try {
        const isVarified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
        const userData=await User.findOne({email:isVarified.email}).select({password:0})
        console.log(userData)
        
        req.user=userData
        req.token=token
        req.user=userData._id
        next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized. Invalid token."})
    }
}
module.exports=authMiddlerware