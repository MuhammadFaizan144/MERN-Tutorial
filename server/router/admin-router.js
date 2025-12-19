const {getAllUsers,getAllContacts} = require("../controllers/admin-controller")
const adminMiddleware = require("../middleware/admin-middleware")
const authMiddlerware=require('../middleware/auth-middlerware')
const express=require("express")
const router=express.Router()
router.route('/users').get(authMiddlerware,adminMiddleware,getAllUsers)
router.route('/users/delete/:id').delete(authMiddlerware,adminMiddleware,deleteUserById)
router.route('/contacts').get(authMiddlerware,adminMiddleware,getAllContacts)
module.exports=router