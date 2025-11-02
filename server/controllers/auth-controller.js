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
        
    res.status(200).send('welcome to registeration page by using page')
    }catch{
    res.status(400).send({msg:'page not found'})
    }
}
module.exports={home,register}