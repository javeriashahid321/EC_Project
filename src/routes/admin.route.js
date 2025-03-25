const router=require('express').Router()
const userLogin=require('../api/v1/user/userLogin')




router.post('/login',userLogin)
// router.post('/catagory',adminController.catagoryAdd)


module.exports=router