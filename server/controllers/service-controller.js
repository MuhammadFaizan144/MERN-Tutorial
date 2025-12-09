const Service=require("../models/services-model")
const services=async (req,res) => {
    try {
        const response=await Service.find()
        if(!response){
            res.status(200).json({msg:"No service found"})
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(`services ${services}`)
    }
}
module.exports=services