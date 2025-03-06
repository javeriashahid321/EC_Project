const router=require('express').Router()
const adminController=require('../controllers/admin.controller')


router.post('/login',adminController.login)
router.post('/catagory',adminController.catagoryAdd)


module.exports=router