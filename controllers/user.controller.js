const db = require('../db/db.config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { use } = require('../routes/user.route')
module.exports.signup = async function (req, res, next) {
    const { username, email, password } = req.body
    const hashpassword = await bcrypt.hash(password, 10)
    const role = 'personal'
    try {
        await db.query('INSERT INTO user (accountname,email,accountpassword,userrole) VALUES (?,?,?,?)', [username, email, hashpassword, role])
        const userId = await db.query('SELECT id FROM user WHERE email=?', [email])
        const id = userId[0][0].id
        const token = jwt.sign({ id:id, role: role }, 'secretkey', (err, token) => {
            res.status(200).json({
                token,
                message: 'User registered successfully'
            })
        })
    } catch (err){
        next(err)
    }
}

module.exports.login=async function (req,res,next) {
    const {ppassword,pemail}=req.body
    const role='personal'
    try{
        const user=await db.query('SELECT id,accountpassword FROM user WHERE email=? AND userrole=?',[pemail,role])
        console.log(user)
        const userId=user[0][0].id
        if(user.length){
            const validPassword=await bcrypt.compare(ppassword,user[0][0].accountpassword)
            if(validPassword){
                const role=user[0][0].userrole
                const token=jwt.sign({id:userId,role:role},'secretkey')
                res.status(200).json({
                    token,
                    role,
                    message:'User logged in successfully'
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