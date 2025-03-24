const router=require('express').Router()
const bussinessSignup=require('../api/v1/bussiness/bussinessSignup')
const bussinessLogin=require('../api/v1/bussiness/bussinessLogin')

router.post('/signup',bussinessSignup)
router.post('/login',bussinessLogin)

module.exports=router