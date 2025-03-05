const db = require('../db/db.config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports.signup = async function (req, res, next) {
    const { username, email, password } = req.body
    const hashpassword = await bcrypt.hash(password, 10)
    const role = 'bussiness'
    try {
        await db.query('INSERT INTO user (accountname,email,accountpassword,userrole) VALUES (?,?,?,?)', [username, email, hashpassword, role])
        const userId = await db.query('SELECT id FROM user WHERE email=?', [email])
        const id = userId[0][0].id
        const token = jwt.sign({ id:id, role: role }, 'secretkey', (err, token) => {
            res.json({
                token,
                message: 'User registered successfully'
            })
        })
    } catch (err){
        next(err)
    }
}