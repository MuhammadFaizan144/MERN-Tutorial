const {getAllUsers,getAllContacts} = require("../controllers/admin-controller")
const authMiddlerware=require('../middleware/auth-middlerware')
const express=require("express")
const router=express.Router()
router.route('/users').get(authMiddlerware,getAllUsers)
router.route('/contacts').get(authMiddlerware,getAllContacts)
module.exports=router