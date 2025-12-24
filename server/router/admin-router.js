const {getAllUsers,getAllContacts,deleteUserById,getUsersById,updateUserById,deleteContactById} = require("../controllers/admin-controller")
const adminMiddleware = require("../middleware/admin-middleware")
const authMiddlerware=require('../middleware/auth-middlerware')

const express=require("express")
const router=express.Router()
router.route('/users').get(authMiddlerware,adminMiddleware,getAllUsers)
router.route('/users/:id').get(authMiddlerware,adminMiddleware,getUsersById)
router.route("/users/update/:id").patch(authMiddlerware,adminMiddleware,updateUserById)
router.route('/users/delete/:id').delete(authMiddlerware,adminMiddleware,deleteUserById)
router.route('/contacts').get(authMiddlerware,adminMiddleware,getAllContacts)
router.route('/contacts/delete/:id').delete(authMiddlerware,adminMiddleware,deleteContactById)
module.exports=router