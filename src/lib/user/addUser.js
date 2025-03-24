const db = require('../../db/db.config')
const addUser = async (user) => {
    const { name, email, hashpassword, role } = user
    try {
        await db.query('INSERT INTO user (accountname,email,accountpassword,userrole) VALUES (?,?,?,?)', [name, email, hashpassword, role])
        const userIdresponse = await db.query('SELECT id FROM user WHERE email=?', [email])
        const userId = userIdresponse[0][0].id
        return userId
    } catch (error) {
        if(error.code===1000){
            const error = new Error('Email Aready Exists')
            error.status = 409
            throw error
        }
        throw new Error(error)
    }
}
module.exports=addUser