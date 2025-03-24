
const checkUserPass = require('../../../lib/user/checkUserPass')
const adminLogin = async function (req, res, next) {
    const { aemail, apassword } = req.body
    const role = 'admin'
    const userInfo = {
        password: apassword,
        email: aemail,
        role
    }
    try {
        const response = await checkUserPass(userInfo)
        res.send(response)
    } catch (error) {
        next(error)
    }
}
module.exports=adminLogin
