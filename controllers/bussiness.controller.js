const db = require('../db/db.config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports.signup = async function (req, res, next) {
    const { bname, bemail, bpassword } = req.body
    console.log(req.body)
    const hashpassword = await bcrypt.hash(bpassword, 10)
    const role = 'bussiness'
    try {
        await db.query('INSERT INTO user (accountname,email,accountpassword,userrole) VALUES (?,?,?,?)', [bname, bemail, hashpassword, role])
        const userId = await db.query('SELECT id FROM user WHERE email=?', [bemail])
        const id = userId[0][0].id
        const token = jwt.sign({ id:id, role: role }, 'secretkey', (err, token) => {
            res.status(200).json({
                token,
                message: 'bussiness registered successfully'
            })
        })
    } catch (err){
        next(err)
    }
}
module.exports.login=async function (req,res,next) {
    const {bemail,bpassword}=req.body
    console.log(req.body)
    const role='bussiness'
    try{
        const user=await db.query('SELECT id,accountpassword FROM user WHERE email=? AND userrole=?',[bemail,role])
        console.log(user)
        const userId=user[0][0].id
        if(user.length){
            const validPassword=await bcrypt.compare(bpassword,user[0][0].accountpassword)
            if(validPassword){
                const role=user[0][0].userrole
                const token=jwt.sign({id:userId,role:role},'secretkey')
                res.status(200).json({
                    token,
                    role,
                    message:'bussiness logged in successfully'
                })
            }else{
                res.status(400).json({
                    message:'Invalid password'
                })
            }
        }
    }catch(error){
        next(error)
    }
    
}