const db = require('../../db/db.config')
const addProductData = async (product) => {
    const { title, description, price, fields, isused, userid, result } = product
    try {
        const [queryresult] = await db.query('INSERT INTO items (title ,description ,price,fields ,isused ,userid,image) values(?,?,?,?,?,?,?)',
            [title, description, price, JSON.stringify(fields), isused, userid, result.secure_url])
        return queryresult
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = addProductData