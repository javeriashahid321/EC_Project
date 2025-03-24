const db=require('../../db/db.config')
const addCatagoryFields = async function (categoryData) {
    const { categoryName, fieldsJSON } = categoryData;

    try {
        const result = await db.query('INSERT INTO categories (name,fields) VALUES (?,?)', [categoryName, fieldsJSON])
        return result
    } catch (err) {
        throw new Error(err)
    }
}
module.exports=addCatagoryFields