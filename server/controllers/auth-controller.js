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
    console.log(req.body)
    res.status(200).json({message:req.body})
    }catch{
    res.status(400).json('page not found')
    }
}
module.exports={home,register}