const db=require('../../db/db.config')
module.exports.getFields=async(catagory)=>{
    try {
        const [rows] = await db.query('SELECT fields FROM categories WHERE name=?', [catagory]);
        return rows
        
    } catch (error) {
        throw new Error(error)
    }
}