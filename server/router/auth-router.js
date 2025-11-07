const express=require('express')
const router=express.Router()
const authcontrollers=require('../controllers/auth-controller')
const sigupSchema=require('../validator/auth-validator')
const LoginSchema=require('../validator/login-validator')
const validate=require('../middleware/validate-middleware')
router.route("/").get(authcontrollers.home)//get data

router.route("/register").post(validate(sigupSchema),authcontrollers.register)//insert data
router.route("/login").post(validate(LoginSchema),authcontrollers.login)
module.exports=router