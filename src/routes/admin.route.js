const router=require('express').Router()
const adminLogin=require('../api/v1/user/adminLogin')




router.post('/login',adminLogin)
// router.post('/catagory',adminController.catagoryAdd)


module.exports=router