const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addUser=require('../../../lib/user/addUser')

const bussinessSignup = async function (req, res, next) {
    const { name, email, password } = req.body;

    console.log('req.body', req.body);
    console.log('name',name)
    console.log('password',password)
    try {
        const hashpassword = await bcrypt.hash(password, 10);
        const role = 'bussiness';
        const user = { name, email, hashpassword, role };
        const id = await addUser(user);
        const token = jwt.sign({ id: id, role: role }, 'secretkey', (err, token) => {
            if (err) {
                return next(err);
            }
            res.status(200).json({
                token,
                message: 'User registered successfully'
            });
        });
    } catch (err) {
        next(err);
    }
};

module.exports = bussinessSignup;