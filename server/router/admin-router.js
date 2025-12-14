const getAllUsers = require("../controllers/admin-controller")

const express=require(express)
const router=express.Router()
router.route('/user').get(getAllUsers)