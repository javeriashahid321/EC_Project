const router=require('express').Router()
const bussinessController=require('../controllers/bussiness.controller')


router.post('/signup',bussinessController.signup)


module.exports=router