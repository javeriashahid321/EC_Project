const router=require('express').Router()
const userSignup=require('../api/v1/user/userSignup')
const userLogin=require('../api/v1/user/userLogin')

router.post('/signup',userSignup)
router.post('/login',userLogin)

module.exports=router