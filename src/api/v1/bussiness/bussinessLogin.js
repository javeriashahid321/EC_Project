const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkUserPass=require('../../../lib/user/checkUserPass')
const bussinessLogin=async function (req,res,next) {
    const {password,email}=req.body
    const role='bussiness'
    const userInfo={
        password,email,role
    }
    try{
        const response=await checkUserPass(userInfo)
        res.send(response)
    }catch(error){
        next(error)
    }
}
module.exports=bussinessLogin