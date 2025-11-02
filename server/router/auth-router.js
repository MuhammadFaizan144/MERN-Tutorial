const express=require('express')
const router=express.Router()

router.route("/").get((req,res)=>{
    res.status(200).send('Welcome to router')
})
router.route('/register').get((req,res)=>{
    res.status(200).send('welcome to registeration page')
})
module.exports=router