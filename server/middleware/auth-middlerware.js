const jwt=require('jsonwebtoken')
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
        console.log(isVarified)
        next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized. Invalid token."})
    }
}
module.exports=authMiddlerware