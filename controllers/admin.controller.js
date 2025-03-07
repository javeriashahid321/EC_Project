const db=require('../db/db.config')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

module.exports.login=async function (req,res,next){
    const {aemail,apassword}=req.body
    const role='admin'
    try{
        const admin=await db.query('SELECT id,accountpassword FROM user WHERE email=? AND userrole=?',[aemail,role])
           const userId=admin[0][0].id
                if(admin.length){
                    const validPassword=await bcrypt.compare(apassword,admin[0][0].accountpassword)
                    if(validPassword){
                        const token=jwt.sign({id:userId,role:role},'secretkey')
                        res.status(200).json({
                            token,
                            role,
                            message:'admin logged in successfully'
                        })
                    }else{
                        res.status(400).json({
                            message:'Invalid password'
                        })
                    }
                }

    }catch(err){
        next(err)
    }
}

module.exports.catagoryAdd=async function(req,res,next){
    const { categoryName, fields } = req.body;

    const fieldsJSON = JSON.stringify(fields);
    console.log("Category Name:", categoryName)
    console.log("Fields JSON:", fieldsJSON);

    try{
        await db.query('INSERT INTO categories (name,fields) VALUES (?,?)',[categoryName,fieldsJSON])
        res.status(200).json({
            message:'Category Added Successfully'
        })
    }catch(err){
        next(err)
    }
}