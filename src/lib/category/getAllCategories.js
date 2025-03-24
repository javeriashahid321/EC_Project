const db = require('../../db/db.config')

const getAllCategories = async () => {
    try {
        const response = await db.query('SELECT * from categories')
        return response
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = getAllCategories