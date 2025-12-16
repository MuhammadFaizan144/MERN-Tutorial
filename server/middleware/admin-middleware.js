const adminMiddleware=async (req,res,next) => {
    try {
        console.log(req.user)
        res.status(200).json({msg:req.user.isAdmin})
    } catch (error) {
        next(error)
    }
}
module.exports=adminMiddleware