const User=require('../models/user-model')
const bcrypt=require("bcrypt")
//home
const home=async(req,res)=>{
    try{
    res.status(200).send('Welcome to router')
    }
    catch(error){
        console.log(object)
    }
}
//register
const register=async(req,res)=>{
    try{
    const {username,email,phone,password}=req.body
    const UserExist=await User.findOne({email})

    if(UserExist){
        return res.status(400).json({msg:"email already exist"})
    }

    //generate token
    const userCreated=await User.create({username,email,phone,password})

    res.status(200).json({
        msg:"registeration succesful",
        token:await userCreated.generateToken(),
        userId:userCreated._id.toString(),
    })

    }catch{
    res.status(400).json('page not found')
    }
}

//user login logic
const login =async (req,res) => {
    try{
        const {email,password}=req.body
        const UserExist= await User.findOne({email})
        console.log(UserExist);
        
        if(!UserExist){
            return res.status(400).json({message:"Invalid"})
        }
        // const user=await bcrypt.compare(password,UserExist.password)
        const user=await UserExist.comparePassword(password)

        
        if(user){
            res.status(200).json({
                msg:"Login Successful",
                token:await UserExist.generateToken(),
                userId:UserExist._id.toString(),
            })
        }else{
            res.status(401).json({msg:"Invalid email or password"})
        }
    }catch{
        res.status(500).json("internal server error")
    }
}
module.exports={home,register,login}